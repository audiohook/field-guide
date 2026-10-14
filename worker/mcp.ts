import { McpServer } from '@modelcontextprotocol/server';
import { createMcpHandler } from 'agents/mcp/server';
import { z } from 'zod';
import handbookIndex from './generated/handbook.json' with { type: 'json' };
import { employeeFromAccessPayload, type Employee } from './change-request.ts';
import { getPage, listPages, searchPages, type HandbookPage } from './handbook.ts';
import { DEFAULT_MCP_HOST } from './mcp-route.ts';

const pages = handbookIndex as HandbookPage[];

export function employeeFromMcpProps(props: unknown, domain: string): Employee | null {
	if (!props || typeof props !== 'object') return null;
	return employeeFromAccessPayload(props, domain);
}

function text(value: string, isError = false) {
	return { content: [{ type: 'text' as const, text: value }], ...(isError ? { isError: true } : {}) };
}

function requireEmployee(props: unknown, domain: string, tool: string): Employee | { error: ReturnType<typeof text> } {
	const employee = employeeFromMcpProps(props, domain);
	if (!employee) return { error: text('Sign in with your Audiohook account.', true) };
	console.log(JSON.stringify({ event: 'mcp_tool', tool, email: employee.email }));
	return employee;
}

export function createFieldGuideServer(props: unknown, domain: string) {
	const server = new McpServer({ name: 'field-guide', version: '1.0.0' });

	server.registerTool(
		'list_pages',
		{
			description: 'List Audiohook Field Guide pages by section, path, and title.',
			inputSchema: z.object({
				section: z.string().max(80).optional().describe('Optional section name, such as Sales or 03-sales.'),
			}),
		},
		async ({ section }) => {
			const employee = requireEmployee(props, domain, 'list_pages');
			if ('error' in employee) return employee.error;
			const listed = listPages(pages, section);
			const lines = listed.map((page) => `${page.section} — ${page.title} (${page.path})`);
			return text(lines.join('\n') || 'No pages matched that section.');
		},
	);

	server.registerTool(
		'get_page',
		{
			description: 'Read one Field Guide page as Markdown. Pass a site path such as /01-company/mission/.',
			inputSchema: z.object({
				path: z.string().min(1).max(300),
			}),
		},
		async ({ path }) => {
			const employee = requireEmployee(props, domain, 'get_page');
			if ('error' in employee) return employee.error;
			const page = getPage(pages, path);
			if (!page) return text('That Field Guide page was not found.', true);
			return text(`# ${page.title}\n\nPath: ${page.path}\nFile: ${page.filePath}\n\n${page.body}`);
		},
	);

	server.registerTool(
		'search',
		{
			description: 'Search Field Guide titles and page text. Returns matching paths and a short excerpt.',
			inputSchema: z.object({
				query: z.string().min(1).max(200),
			}),
		},
		async ({ query }) => {
			const employee = requireEmployee(props, domain, 'search');
			if ('error' in employee) return employee.error;
			const hits = searchPages(pages, query);
			if (hits.length === 0) return text('No Field Guide pages matched that search.');
			return text(hits.map((hit) => `${hit.section} — ${hit.title}\n${hit.path}\n${hit.excerpt}`).join('\n\n'));
		},
	);

	return server;
}

export function handleFieldGuideMcp(
	request: Request,
	env: { ALLOWED_EMAIL_DOMAIN: string; MCP_PUBLIC_HOST?: string },
	ctx: ExecutionContext,
	props: unknown,
) {
	const employee = employeeFromMcpProps(props, env.ALLOWED_EMAIL_DOMAIN);
	if (!employee) {
		return Response.json(
			{ error: 'Sign in with your Audiohook account.' },
			{ status: 403, headers: { 'cache-control': 'no-store' } },
		);
	}
	const host = env.MCP_PUBLIC_HOST?.trim().toLowerCase() || DEFAULT_MCP_HOST;
	const handler = createMcpHandler(() => createFieldGuideServer(props, env.ALLOWED_EMAIL_DOMAIN), {
		route: '/mcp',
		allowedHostnames: [host, 'localhost', '127.0.0.1'],
		allowedOriginHostnames: '*',
		legacy: 'stateless',
	});
	return handler(request, env, ctx);
}
