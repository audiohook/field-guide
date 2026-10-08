import assert from 'node:assert/strict';
import { afterEach, describe, it } from 'node:test';
import {
	buildSlackMessage,
	employeeFromAccessPayload,
	validateSubmission,
} from './change-request.ts';
import { handleChangeRequest, type AccessLike, type ChangeRequestEnv } from './index.ts';

const env: ChangeRequestEnv = {
	ACCESS_TEAM_DOMAIN: 'https://audiohook.cloudflareaccess.com',
	ALLOWED_EMAIL_DOMAIN: 'audiohook.com',
	SLACK_WEBHOOK_URL: 'https://hooks.slack.test/services/example',
};

const employee = { email: 'ryan@audiohook.com', name: 'Ryan Hightower' };
const submittedAt = new Date('2026-09-30T23:50:00.000Z');

function access(identity: { email?: string; name?: string } | null): AccessLike {
	return { getIdentity: async () => identity };
}

function post(body: unknown, headers: HeadersInit = {}) {
	return new Request('https://fieldguide.audiohook.com/api/change-request', {
		method: 'POST',
		headers: {
			origin: 'https://fieldguide.audiohook.com',
			'content-type': 'application/json',
			...headers,
		},
		body: JSON.stringify(body),
	});
}

const slackCalls: { url: string; text: string }[] = [];
const originalFetch = globalThis.fetch;

afterEach(() => {
	slackCalls.length = 0;
	globalThis.fetch = originalFetch;
});

function mockSlack() {
	globalThis.fetch = async (input, init) => {
		const url = String(input);
		const payload = JSON.parse(String(init?.body)) as { text: string };
		slackCalls.push({ url, text: payload.text });
		return new Response('ok', { status: 200 });
	};
}

describe('employee identity', () => {
	it('accepts an Audiohook email and optional name from the Access token', () => {
		assert.deepEqual(
			employeeFromAccessPayload({ email: 'Ryan@Audiohook.com', name: 'Ryan Hightower' }, 'audiohook.com'),
			employee,
		);
	});

	it('rejects an email outside the company domain', () => {
		assert.equal(employeeFromAccessPayload({ email: 'ryan@example.com' }, 'audiohook.com'), null);
		assert.equal(
			employeeFromAccessPayload({ email: 'ryan@audiohook.com.example' }, 'audiohook.com'),
			null,
		);
	});
});

describe('submission', () => {
	it('requires a description and a page path', () => {
		assert.equal(validateSubmission({ description: '   ', page: '/03-sales/sales-process/' }).ok, false);
		assert.equal(validateSubmission({ description: 'Update the SLA', page: 'https://evil.test' }).ok, false);
	});

	it('ignores an employee field in the body', () => {
		const parsed = validateSubmission({
			description: 'Update the qualification threshold.',
			page: '/03-sales/sales-process/',
			title: 'Sales process',
			file: '03-sales/sales-process.md',
			employee: 'eve@audiohook.com',
		});
		assert.equal(parsed.ok, true);
		if (!parsed.ok) return;
		assert.equal(parsed.submission.description, 'Update the qualification threshold.');
		assert.equal('employee' in parsed.submission, false);
	});
});

describe('Slack message', () => {
	it('includes the employee, time, page, and description', () => {
		const text = buildSlackMessage({
			employee,
			submittedAt,
			pageUrl: 'https://fieldguide.audiohook.com/03-sales/sales-process/',
			pagePath: '/03-sales/sales-process/',
			title: 'Sales process',
			filePath: '03-sales/sales-process.md',
			description: 'Raise the qualification threshold.',
		});
		assert.match(text, /Ryan Hightower \(ryan@audiohook\.com\)/);
		assert.match(text, /September 30, 2026/);
		assert.match(text, /fieldguide\.audiohook\.com\/03-sales\/sales-process\//);
		assert.match(text, /github\.com\/audiohook\/field-guide\/blob\/main\/03-sales\/sales-process\.md/);
		assert.match(text, /Raise the qualification threshold\./);
	});

	it('escapes Slack control characters in the description', () => {
		const text = buildSlackMessage({
			employee: { email: 'ryan@audiohook.com' },
			submittedAt,
			pageUrl: 'https://fieldguide.audiohook.com/01-company/mission/',
			pagePath: '/01-company/mission/',
			title: 'Mission',
			description: 'Use <https://evil.test|this> & more',
		});
		assert.match(text, /Use &lt;https:\/\/evil\.test\|this&gt; &amp; more/);
	});
});

describe('change request endpoint', () => {
	it('posts the Access employee, not a name from the form', async () => {
		mockSlack();
		const response = await handleChangeRequest(
			post({
				description: 'Clarify the handoff.',
				page: '/03-sales/handoffs/',
				title: 'Sales-to-CS Handoff',
				file: '03-sales/handoffs.md',
				employee: 'eve@audiohook.com',
				submittedAt: '2000-01-01T00:00:00.000Z',
			}),
			env,
			access({ email: 'ryan@audiohook.com', name: 'Ryan Hightower' }),
		);
		assert.equal(response.status, 200);
		assert.equal(slackCalls.length, 1);
		assert.equal(slackCalls[0]?.url, env.SLACK_WEBHOOK_URL);
		assert.match(slackCalls[0]?.text ?? '', /Ryan Hightower \(ryan@audiohook\.com\)/);
		assert.doesNotMatch(slackCalls[0]?.text ?? '', /eve@audiohook\.com/);
		assert.doesNotMatch(slackCalls[0]?.text ?? '', /2000/);
		const body = (await response.json()) as { message: string; submittedAtLabel: string };
		assert.match(body.message, /Sent\./);
		assert.doesNotMatch(body.message, /lvl-10/);
		assert.match(slackCalls[0]?.text ?? '', new RegExp(body.submittedAtLabel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
	});

	it('rejects an empty description without calling Slack', async () => {
		mockSlack();
		const response = await handleChangeRequest(
			post({ description: '   ', page: '/03-sales/handoffs/' }),
			env,
			access({ email: 'ryan@audiohook.com' }),
		);
		assert.equal(response.status, 400);
		assert.equal(slackCalls.length, 0);
	});

	it('does not trust an email header when Access did not authenticate the request', async () => {
		mockSlack();
		const response = await handleChangeRequest(
			post(
				{ description: 'Change the mission.', page: '/01-company/mission/' },
				{ 'cf-access-authenticated-user-email': 'ceo@audiohook.com' },
			),
			env,
			undefined,
		);
		assert.equal(response.status, 401);
		assert.equal(slackCalls.length, 0);
	});

	it('rejects a forged Access token instead of using a local identity', async () => {
		mockSlack();
		const response = await handleChangeRequest(
			post(
				{ description: 'Change the mission.', page: '/01-company/mission/' },
				{ 'cf-access-jwt-assertion': 'not-a-jwt' },
			),
			env,
			access({ email: 'ryan@audiohook.com', name: 'Ryan Hightower' }),
		);
		assert.equal(response.status, 401);
		assert.equal(slackCalls.length, 0);
	});
});
