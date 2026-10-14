import {
	AuthorizationError,
	CimdFetchError,
	authorizationErrorRedirect,
	type AuthRequest,
	type OAuthHelpers,
} from '@cloudflare/workers-oauth-provider';
import { createRemoteJWKSet, jwtVerify } from 'jose';
import { employeeFromAccessPayload } from './change-request.ts';

export interface AccessOAuthEnv {
	ALLOWED_EMAIL_DOMAIN: string;
	ACCESS_CLIENT_ID?: string;
	ACCESS_CLIENT_SECRET?: string;
	ACCESS_TOKEN_URL?: string;
	ACCESS_AUTHORIZATION_URL?: string;
	ACCESS_JWKS_URL?: string;
	COOKIE_ENCRYPTION_KEY?: string;
	OAUTH_PROVIDER: OAuthHelpers;
}

const SIGN_IN = 'Sign in with your Audiohook account.';
const GRANTED_SCOPES = ['read', 'offline_access'];
const jwksByUrl = new Map<string, ReturnType<typeof createRemoteJWKSet>>();

function escapeHtml(value: string) {
	return value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);
}

function consentPage(
	details: { clientName: string; clientDomain?: string; redirectHost: string; redirectIsLoopback: boolean },
	handle: string,
) {
	const name = escapeHtml(details.clientName);
	const origin = details.clientDomain
		? `Published by <strong>${escapeHtml(details.clientDomain)}</strong>.`
		: 'This app registered itself. Its name is not verified.';
	const loopback = details.redirectIsLoopback
		? '<p><strong>This sends access to an app on your computer.</strong> Continue only if you just started signing in from it.</p>'
		: '';
	return `<!doctype html>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Allow ${name}</title>
<main style="font: 16px/1.5 system-ui, sans-serif; max-width: 38rem; margin: 3rem auto; padding: 0 1.25rem;">
  <h1>Allow ${name} to read the Field Guide?</h1>
  <p>${origin} Access will be sent to <strong>${escapeHtml(details.redirectHost)}</strong>.</p>
  ${loopback}
  <p>You will confirm your Audiohook email next. This connection can search and read handbook pages. It cannot edit them.</p>
  <form method="post">
    <input type="hidden" name="handle" value="${escapeHtml(handle)}">
    <p>
      <button name="decision" value="approve" type="submit">Allow</button>
      <button name="decision" value="deny" type="submit">Deny</button>
    </p>
  </form>
</main>`;
}

function html(body: string, status: number, headers?: Headers) {
	const responseHeaders = headers ?? new Headers();
	responseHeaders.set('content-type', 'text/html; charset=utf-8');
	responseHeaders.set('cache-control', 'no-store');
	return new Response(body, { status, headers: responseHeaders });
}

function plain(message: string, status: number) {
	return new Response(message, {
		status,
		headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' },
	});
}

function base64Url(bytes: Uint8Array) {
	let binary = '';
	for (const byte of bytes) binary += String.fromCharCode(byte);
	return btoa(binary).replaceAll('+', '-').replaceAll('/', '_').replaceAll('=', '');
}

export async function codeChallenge(verifier: string) {
	const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(verifier));
	return base64Url(new Uint8Array(digest));
}

function randomVerifier() {
	const bytes = new Uint8Array(32);
	crypto.getRandomValues(bytes);
	return base64Url(bytes);
}

function rememberSecret(env: AccessOAuthEnv) {
	const secret = env.COOKIE_ENCRYPTION_KEY;
	if (!secret || secret.length < 32) return undefined;
	return { secret };
}

function oauthError(error: unknown) {
	if (error instanceof AuthorizationError && error.redirectTo) return Response.redirect(error.redirectTo, 302);
	if (error instanceof AuthorizationError) return plain(error.description, 400);
	if (error instanceof CimdFetchError) return plain('This app could not be verified.', 400);
	throw error;
}

function missingAccessConfig(env: AccessOAuthEnv) {
	return (
		!env.ACCESS_CLIENT_ID ||
		!env.ACCESS_CLIENT_SECRET ||
		!env.ACCESS_AUTHORIZATION_URL ||
		!env.ACCESS_TOKEN_URL ||
		!env.ACCESS_JWKS_URL
	);
}

async function redirectToAccess(request: Request, env: AccessOAuthEnv, authRequest: AuthRequest, headers: Headers) {
	if (missingAccessConfig(env)) return plain('Field Guide sign-in is not configured.', 500);
	const verifier = randomVerifier();
	const upstream = await env.OAUTH_PROVIDER.beginUpstream(authRequest, { data: { verifier }, headers });
	const challenge = await codeChallenge(verifier);
	const redirect = new URL(env.ACCESS_AUTHORIZATION_URL!);
	redirect.searchParams.set('response_type', 'code');
	redirect.searchParams.set('client_id', env.ACCESS_CLIENT_ID!);
	redirect.searchParams.set('redirect_uri', new URL('/callback', request.url).href);
	redirect.searchParams.set('scope', 'openid email profile');
	redirect.searchParams.set('state', upstream.state);
	redirect.searchParams.set('code_challenge', challenge);
	redirect.searchParams.set('code_challenge_method', 'S256');
	upstream.headers.set('location', redirect.href);
	return new Response(null, { status: 302, headers: upstream.headers });
}

async function showConsent(request: Request, env: AccessOAuthEnv) {
	const authRequest = await env.OAUTH_PROVIDER.parseAuthRequest(request);
	const remembered = rememberSecret(env);
	if (remembered && (await env.OAUTH_PROVIDER.isConsentRemembered(request, authRequest, remembered))) {
		return redirectToAccess(request, env, authRequest, new Headers());
	}
	const details = await env.OAUTH_PROVIDER.describeConsent(authRequest);
	const consent = await env.OAUTH_PROVIDER.beginConsent(authRequest);
	return html(consentPage(details, consent.handle), 200, consent.headers);
}

async function submitConsent(request: Request, env: AccessOAuthEnv) {
	const form = await request.formData();
	const handle = String(form.get('handle') ?? '');
	if (form.get('decision') !== 'approve') {
		const denied = await env.OAUTH_PROVIDER.denyConsent(request, handle);
		return new Response(null, { status: 302, headers: denied.headers });
	}
	const approved = await env.OAUTH_PROVIDER.approveConsent(request, handle, {
		scope: GRANTED_SCOPES,
		remember: rememberSecret(env),
	});
	return redirectToAccess(request, env, approved.request, approved.headers);
}

function jwksFor(url: string) {
	let jwks = jwksByUrl.get(url);
	if (!jwks) {
		jwks = createRemoteJWKSet(new URL(url));
		jwksByUrl.set(url, jwks);
	}
	return jwks;
}

async function exchangeAccessCode(env: AccessOAuthEnv, request: Request, code: string, verifier: string) {
	const body = new URLSearchParams({
		grant_type: 'authorization_code',
		client_id: env.ACCESS_CLIENT_ID!,
		client_secret: env.ACCESS_CLIENT_SECRET!,
		code,
		redirect_uri: new URL('/callback', request.url).href,
		code_verifier: verifier,
	});
	const response = await fetch(env.ACCESS_TOKEN_URL!, {
		method: 'POST',
		headers: { 'content-type': 'application/x-www-form-urlencoded', accept: 'application/json' },
		body,
	});
	if (!response.ok) {
		console.error(JSON.stringify({ event: 'access_token_exchange_failed', status: response.status }));
		return null;
	}
	const payload = (await response.json()) as { id_token?: unknown };
	if (typeof payload.id_token !== 'string') return null;
	const issuer = env.ACCESS_TOKEN_URL!.replace(/\/token\/?$/, '');
	const verified = await jwtVerify(payload.id_token, jwksFor(env.ACCESS_JWKS_URL!), {
		issuer,
		audience: env.ACCESS_CLIENT_ID,
	});
	return employeeFromAccessPayload(verified.payload, env.ALLOWED_EMAIL_DOMAIN);
}

async function finishAccessLogin(request: Request, env: AccessOAuthEnv) {
	const url = new URL(request.url);
	const resumed = await env.OAUTH_PROVIDER.finishUpstream<{ verifier?: string }>(request);
	if (url.searchParams.get('error')) {
		resumed.headers.set('location', authorizationErrorRedirect(resumed.request, 'access_denied'));
		return new Response(null, { status: 302, headers: resumed.headers });
	}
	const code = url.searchParams.get('code');
	const verifier = resumed.data?.verifier;
	if (!code || !verifier || missingAccessConfig(env)) return plain(SIGN_IN, 400);
	let employee: ReturnType<typeof employeeFromAccessPayload>;
	try {
		employee = await exchangeAccessCode(env, request, code, verifier);
	} catch (error) {
		console.error(
			JSON.stringify({
				event: 'access_id_token_rejected',
				error: error instanceof Error ? error.name : 'unknown',
			}),
		);
		return plain(SIGN_IN, 401);
	}
	if (!employee) return plain(SIGN_IN, 403);
	const { redirectTo } = await env.OAUTH_PROVIDER.completeAuthorization({
		request: resumed.request,
		userId: employee.email,
		metadata: { label: employee.name ?? employee.email },
		scope: GRANTED_SCOPES,
		props: { email: employee.email, name: employee.name },
	});
	resumed.headers.set('location', redirectTo);
	return new Response(null, { status: 302, headers: resumed.headers });
}

export async function handleAccessRequest(request: Request, env: AccessOAuthEnv): Promise<Response> {
	const url = new URL(request.url);
	try {
		if (request.method === 'GET' && url.pathname === '/authorize') return await showConsent(request, env);
		if (request.method === 'POST' && url.pathname === '/authorize') return await submitConsent(request, env);
		if (request.method === 'GET' && url.pathname === '/callback') return await finishAccessLogin(request, env);
	} catch (error) {
		return oauthError(error);
	}
	if (url.pathname === '/') return plain('Audiohook Field Guide MCP is at /mcp.', 200);
	return plain('Not found.', 404);
}
