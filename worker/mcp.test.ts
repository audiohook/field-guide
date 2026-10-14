import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import worker from './index.ts';
import { handleMcpRequest } from './mcp-entry.ts';
import { employeeFromMcpProps } from './mcp.ts';
import { requestServesMcp } from './mcp-route.ts';

const env = {
	ACCESS_TEAM_DOMAIN: 'https://audiohook.cloudflareaccess.com',
	ALLOWED_EMAIL_DOMAIN: 'audiohook.com',
	SLACK_WEBHOOK_URL: 'https://hooks.slack.test/services/example',
	MCP_PUBLIC_HOST: 'fieldguide-mcp.audiohook.com',
	OAUTH_KV: {
		get: async () => null,
		put: async () => undefined,
		delete: async () => undefined,
		list: async () => ({ keys: [], list_complete: true }),
	},
};

const ctx = {
	waitUntil() {},
	passThroughOnException() {},
	props: {},
};

describe('field guide MCP access', () => {
	it('keeps the handbook hostname off the MCP routes', () => {
		assert.equal(requestServesMcp(new URL('https://fieldguide.audiohook.com/mcp'), env), false);
		assert.equal(requestServesMcp(new URL('https://fieldguide-mcp.audiohook.com/authorize'), env), true);
		assert.equal(requestServesMcp(new URL('http://localhost:8787/mcp'), env), true);
		assert.equal(requestServesMcp(new URL('http://localhost:8787/api/change-request'), env), false);
	});

	it('accepts an employee prop and rejects other domains', () => {
		assert.deepEqual(employeeFromMcpProps({ email: 'Ryan@Audiohook.com', name: 'Ryan' }, 'audiohook.com'), {
			email: 'ryan@audiohook.com',
			name: 'Ryan',
		});
		assert.equal(employeeFromMcpProps({ email: 'ryan@example.com' }, 'audiohook.com'), null);
		assert.equal(employeeFromMcpProps(null, 'audiohook.com'), null);
	});

	it('does not serve MCP on the handbook host', async () => {
		const response = await worker.fetch(new Request('https://fieldguide.audiohook.com/mcp', { method: 'POST' }), env, ctx);
		assert.equal(response.status, 404);
	});

	it('does not serve handbook pages on the MCP host', async () => {
		let fetched = false;
		const assetEnv = {
			...env,
			ASSETS: {
				fetch: async () => {
					fetched = true;
					return new Response('handbook', { status: 200 });
				},
			},
		};
		const leaked = await worker.fetch(new Request('https://fieldguide-mcp.audiohook.com/01-company/mission/'), assetEnv, ctx);
		assert.equal(leaked.status, 404);
		assert.equal(fetched, false);

		const page = await worker.fetch(new Request('https://fieldguide.audiohook.com/01-company/mission/'), assetEnv, ctx);
		assert.equal(page.status, 200);
		assert.equal(await page.text(), 'handbook');
		assert.equal(fetched, true);
	});

	it('tells a signed-out MCP client to authenticate', async () => {
		const response = await handleMcpRequest(
			new Request('https://fieldguide-mcp.audiohook.com/mcp', {
				method: 'POST',
				headers: { accept: 'application/json, text/event-stream', 'content-type': 'application/json' },
				body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'initialize', params: {} }),
			}),
			env,
			ctx,
		);
		assert.equal(response.status, 401);
		const challenge = response.headers.get('www-authenticate') ?? '';
		assert.match(challenge, /Bearer/i);
		assert.match(challenge, /oauth/i);
	});
});
