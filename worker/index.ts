import { createRemoteJWKSet, jwtVerify } from 'jose';
import {
	buildSlackMessage,
	employeeFromAccessPayload,
	employeeLabel,
	formatSubmittedAt,
	pageUrlFor,
	validateSubmission,
	type Employee,
} from './change-request.ts';

export interface ChangeRequestEnv {
	ACCESS_TEAM_DOMAIN: string;
	ALLOWED_EMAIL_DOMAIN: string;
	SLACK_WEBHOOK_URL: string;
}

export interface AccessLike {
	getIdentity: () => Promise<{ email?: string; name?: string } | null | undefined>;
}

const SIGN_IN = 'Sign in with your Audiohook account to suggest a change.';
const jwksByTeam = new Map<string, ReturnType<typeof createRemoteJWKSet>>();

function jwksFor(teamDomain: string) {
	let jwks = jwksByTeam.get(teamDomain);
	if (!jwks) {
		jwks = createRemoteJWKSet(new URL('/cdn-cgi/access/certs', teamDomain));
		jwksByTeam.set(teamDomain, jwks);
	}
	return jwks;
}

function json(body: unknown, status = 200) {
	return Response.json(body, {
		status,
		headers: { 'cache-control': 'no-store' },
	});
}

function employeeFromIdentity(
	identity: { email?: string; name?: string } | null | undefined,
	domain: string,
): Employee | null {
	return employeeFromAccessPayload(
		{ email: identity?.email, name: identity?.name },
		domain,
	);
}

async function lookupDisplayName(token: string, teamDomain: string, email: string) {
	try {
		const response = await fetch(new URL('/cdn-cgi/access/get-identity', teamDomain), {
			headers: { cookie: `CF_Authorization=${token}` },
		});
		if (!response.ok) return undefined;
		const body = (await response.json()) as { email?: unknown; name?: unknown };
		if (typeof body.email === 'string' && body.email.trim().toLowerCase() !== email) return undefined;
		if (typeof body.name !== 'string') return undefined;
		const name = body.name.trim();
		return name || undefined;
	} catch (error) {
		console.error(
			JSON.stringify({
				event: 'access_identity_lookup_failed',
				error: error instanceof Error ? error.name : 'unknown',
			}),
		);
		return undefined;
	}
}

export async function verifyAccessToken(token: string, env: ChangeRequestEnv): Promise<Employee | null> {
	const { payload } = await jwtVerify(token, jwksFor(env.ACCESS_TEAM_DOMAIN), {
		issuer: env.ACCESS_TEAM_DOMAIN,
	});
	const employee = employeeFromAccessPayload(payload, env.ALLOWED_EMAIL_DOMAIN);
	if (!employee) return null;
	const name = await lookupDisplayName(token, env.ACCESS_TEAM_DOMAIN, employee.email);
	return name ? { ...employee, name } : employee;
}

async function readEmployee(
	request: Request,
	env: ChangeRequestEnv,
	access: AccessLike | undefined,
): Promise<Employee | Response> {
	const token = request.headers.get('cf-access-jwt-assertion');
	if (token) {
		try {
			const employee = await verifyAccessToken(token, env);
			if (!employee) return json({ error: SIGN_IN }, 403);
			return employee;
		} catch (error) {
			console.error(
				JSON.stringify({
					event: 'access_jwt_rejected',
					error: error instanceof Error ? error.name : 'unknown',
				}),
			);
			return json({ error: SIGN_IN }, 401);
		}
	}

	if (access) {
		const employee = employeeFromIdentity(await access.getIdentity(), env.ALLOWED_EMAIL_DOMAIN);
		if (!employee) return json({ error: SIGN_IN }, 403);
		return employee;
	}

	return json({ error: SIGN_IN }, 401);
}

function isEmployee(value: Employee | Response): value is Employee {
	return !(value instanceof Response);
}

async function postSlack(webhookUrl: string, text: string) {
	const response = await fetch(webhookUrl, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({ text }),
	});
	if (!response.ok) {
		console.error(JSON.stringify({ event: 'slack_post_failed', status: response.status }));
	}
	return response.ok;
}

export async function handleChangeRequest(
	request: Request,
	env: ChangeRequestEnv,
	access: AccessLike | undefined,
): Promise<Response> {
	const url = new URL(request.url);
	if (url.pathname !== '/api/change-request') return json({ error: 'Not found.' }, 404);

	const employeeOrError = await readEmployee(request, env, access);
	if (!isEmployee(employeeOrError)) return employeeOrError;
	const employee = employeeOrError;

	if (request.method === 'GET') {
		const submittedAt = new Date();
		return json({
			employee: { email: employee.email, name: employee.name ?? null, label: employeeLabel(employee) },
			submittedAt: submittedAt.toISOString(),
			submittedAtLabel: formatSubmittedAt(submittedAt),
		});
	}

	if (request.method !== 'POST') return json({ error: 'Not found.' }, 404);

	const origin = request.headers.get('origin');
	if (origin !== url.origin) return json({ error: 'Submit the form from the Field Guide.' }, 403);

	const contentLength = Number(request.headers.get('content-length') ?? '0');
	if (contentLength > 20_000) return json({ error: 'That request is too large.' }, 413);

	let body: unknown;
	try {
		const raw = await request.text();
		if (raw.length > 20_000) return json({ error: 'That request is too large.' }, 413);
		body = JSON.parse(raw);
	} catch {
		return json({ error: 'Describe the change you want.' }, 400);
	}

	const parsed = validateSubmission(body);
	if (!parsed.ok) return json({ error: parsed.error }, parsed.status);

	if (!env.SLACK_WEBHOOK_URL) {
		console.error(JSON.stringify({ event: 'slack_webhook_missing' }));
		return json(
			{ error: 'Could not send the Slack alert. Your description is still here — try again.' },
			503,
		);
	}

	const submittedAt = new Date();
	const { submission } = parsed;
	const text = buildSlackMessage({
		employee,
		submittedAt,
		pageUrl: pageUrlFor(url.origin, submission.pagePath),
		pagePath: submission.pagePath,
		title: submission.title,
		filePath: submission.filePath,
		description: submission.description,
	});
	const sent = await postSlack(env.SLACK_WEBHOOK_URL, text);
	if (!sent) {
		return json(
			{ error: 'Could not send the Slack alert. Your description is still here — try again.' },
			502,
		);
	}

	return json({
		ok: true,
		submittedAt: submittedAt.toISOString(),
		submittedAtLabel: formatSubmittedAt(submittedAt),
		message: 'Sent to #lvl-10. A manager can make the change in GitHub if they approve it.',
	});
}

export default {
	async fetch(request, env, ctx) {
		const access = ctx.access;
		return handleChangeRequest(request, env, access);
	},
} satisfies ExportedHandler<Env>;
