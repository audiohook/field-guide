import { OAuthProvider, type OAuthHelpers } from '@cloudflare/workers-oauth-provider';
import { handleAccessRequest, type AccessOAuthEnv } from './access-oauth.ts';
import { handleFieldGuideMcp } from './mcp.ts';
import { DEFAULT_MCP_HOST } from './mcp-route.ts';

export interface McpWorkerEnv {
	ALLOWED_EMAIL_DOMAIN: string;
	MCP_PUBLIC_HOST?: string;
	ACCESS_CLIENT_ID?: string;
	ACCESS_CLIENT_SECRET?: string;
	ACCESS_TOKEN_URL?: string;
	ACCESS_AUTHORIZATION_URL?: string;
	ACCESS_JWKS_URL?: string;
	COOKIE_ENCRYPTION_KEY?: string;
	OAUTH_KV: unknown;
	OAUTH_PROVIDER?: OAuthHelpers;
}

function mcpOrigin(env: McpWorkerEnv) {
	const host = env.MCP_PUBLIC_HOST?.trim().toLowerCase() || DEFAULT_MCP_HOST;
	return `https://${host}`;
}

function providerFor(env: McpWorkerEnv) {
	const origin = mcpOrigin(env);
	return new OAuthProvider<McpWorkerEnv>({
		apiRoute: '/mcp',
		apiHandler: {
			fetch(request, handlerEnv, ctx) {
				const props = (ctx as ExecutionContext & { props?: unknown }).props;
				return handleFieldGuideMcp(request, handlerEnv, ctx, props);
			},
		},
		defaultHandler: {
			fetch(request, handlerEnv) {
				return handleAccessRequest(request, handlerEnv as McpWorkerEnv & AccessOAuthEnv);
			},
		},
		authorizeEndpoint: '/authorize',
		tokenEndpoint: '/token',
		clientRegistrationEndpoint: '/register',
		scopesSupported: ['read', 'offline_access'],
		requiredScopes: ['read'],
		allowPrivateUseRedirectUris: true,
		refreshTokenTTL: 7_776_000,
		refreshTokenIdleTTL: 7_776_000,
		resourceMetadata: {
			resource: `${origin}/mcp`,
			authorization_servers: [origin],
			resource_name: 'Audiohook Field Guide',
		},
		onError({ code, status, internal }) {
			console.error(JSON.stringify({ event: 'mcp_oauth_error', code, status, reason: internal.reason }));
		},
	});
}

export function handleMcpRequest(request: Request, env: McpWorkerEnv, ctx: ExecutionContext) {
	return providerFor(env).fetch(request, env, ctx);
}
