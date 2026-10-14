export const DEFAULT_MCP_HOST = 'fieldguide-mcp.audiohook.com';

const MCP_PATHS = new Set(['/mcp', '/authorize', '/token', '/register', '/callback']);

export function mcpPublicHost(env: { MCP_PUBLIC_HOST?: string }) {
	const host = env.MCP_PUBLIC_HOST?.trim().toLowerCase();
	return host || DEFAULT_MCP_HOST;
}

export function isMcpPath(pathname: string) {
	return MCP_PATHS.has(pathname) || pathname.startsWith('/.well-known/oauth-');
}

export function requestServesMcp(url: URL, env: { MCP_PUBLIC_HOST?: string }) {
	const host = url.hostname.toLowerCase();
	if (host === mcpPublicHost(env) || host === 'localhost' || host === '127.0.0.1' || host === '[::1]') {
		return isMcpPath(url.pathname);
	}
	return false;
}
