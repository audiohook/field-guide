export interface Employee {
	email: string;
	name?: string;
}

export interface Submission {
	description: string;
	pagePath: string;
	title: string;
	filePath?: string;
}

const PAGE_PATH = /^\/(?:[A-Za-z0-9][A-Za-z0-9._-]*\/?)*$/;
const FILE_PATH = /^(?:[A-Za-z0-9][A-Za-z0-9._-]*\/)*[A-Za-z0-9][A-Za-z0-9._-]*\.md$/;
const SUBMITTED_AT = new Intl.DateTimeFormat('en-US', {
	timeZone: 'America/Denver',
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: 'numeric',
	minute: '2-digit',
	timeZoneName: 'short',
});

export function formatSubmittedAt(date: Date) {
	return SUBMITTED_AT.format(date);
}

export function employeeLabel(employee: Employee) {
	const name = employee.name?.trim();
	if (name && name.toLowerCase() !== employee.email.toLowerCase()) {
		return `${name} (${employee.email})`;
	}
	return employee.email;
}

function claim(payload: object, key: string): unknown {
	if (!Object.hasOwn(payload, key)) return undefined;
	return Reflect.get(payload, key);
}

export function employeeFromAccessPayload(payload: object, domain: string): Employee | null {
	const emailClaim = claim(payload, 'email');
	if (typeof emailClaim !== 'string') return null;
	const email = emailClaim.trim().toLowerCase();
	const at = email.lastIndexOf('@');
	if (at <= 0 || email.slice(at + 1) !== domain) return null;
	const nameClaim = claim(payload, 'name');
	const name = typeof nameClaim === 'string' ? nameClaim.trim() : '';
	return name ? { email, name } : { email };
}

export function normalizePagePath(input: unknown) {
	if (typeof input !== 'string' || input.length > 300) return null;
	if (input.includes('..') || input.includes('\\') || input.includes('?') || input.includes('#')) return null;
	if (!PAGE_PATH.test(input)) return null;
	return input;
}

export function normalizeFilePath(input: unknown) {
	if (typeof input !== 'string' || input.length === 0) return undefined;
	if (input.length > 300 || input.includes('..') || input.includes('\\')) return undefined;
	if (!FILE_PATH.test(input)) return undefined;
	return input;
}

function normalizeTitle(input: unknown, pagePath: string) {
	if (typeof input !== 'string') return pagePath;
	const title = input.replace(/[\r\n]+/g, ' ').trim().slice(0, 200);
	return title || pagePath;
}

export function validateSubmission(
	body: unknown,
): { ok: true; submission: Submission } | { ok: false; status: number; error: string } {
	if (!body || typeof body !== 'object') {
		return { ok: false, status: 400, error: 'Describe the change you want.' };
	}
	const record = body as Record<string, unknown>;
	const description = typeof record.description === 'string' ? record.description.trim() : '';
	if (!description) return { ok: false, status: 400, error: 'Describe the change you want.' };
	if (description.length > 4000) {
		return { ok: false, status: 400, error: 'Keep the description under 4,000 characters.' };
	}
	const pagePath = normalizePagePath(record.page);
	if (!pagePath) {
		return { ok: false, status: 400, error: 'Open Suggest a change from the page you want updated.' };
	}
	return {
		ok: true,
		submission: {
			description,
			pagePath,
			title: normalizeTitle(record.title, pagePath),
			filePath: normalizeFilePath(record.file),
		},
	};
}

export function pageUrlFor(origin: string, pagePath: string) {
	return new URL(pagePath, origin).href;
}

export function githubUrlFor(filePath: string) {
	const encoded = filePath.split('/').map((segment) => encodeURIComponent(segment)).join('/');
	return `https://github.com/audiohook/field-guide/blob/main/${encoded}`;
}

function slackEscape(value: string) {
	return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function slackLink(url: string, label: string) {
	return `<${url}|${slackEscape(label).replaceAll('|', '/')}>`;
}

export function buildSlackMessage(input: {
	employee: Employee;
	submittedAt: Date;
	pageUrl: string;
	pagePath: string;
	title: string;
	filePath?: string;
	description: string;
}) {
	const lines = [
		'*Field Guide change request*',
		'',
		`*Employee:* ${slackEscape(employeeLabel(input.employee))}`,
		`*Submitted:* ${slackEscape(formatSubmittedAt(input.submittedAt))}`,
		`*Page:* ${slackLink(input.pageUrl, input.title)} (\`${slackEscape(input.pagePath)}\`)`,
	];
	if (input.filePath) {
		lines.push(`*GitHub:* ${slackLink(githubUrlFor(input.filePath), input.filePath)}`);
	}
	lines.push('', slackEscape(input.description));
	return lines.join('\n');
}
