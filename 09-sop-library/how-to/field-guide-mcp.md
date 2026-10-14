# How To: Connect to the Field Guide MCP

> **Department / Section**: 09-sop-library / how-to
> **Supports**: [Architecture & ADR Process](../../07-engineering/architecture.md)
> **Last Reviewed**: 2026-10-14

Use this when you want Cursor or Claude to search and read the Field Guide without cloning the repo.

The server is read-only. It can list pages, open one page, and search the handbook. It cannot edit pages or file a change request. The address is the same for every Audiohook employee:

`https://fieldguide-mcp.audiohook.com/mcp`

Each person signs in with their own `@audiohook.com` email. A signed-out client gets no pages.

## Connect Claude

An organization owner adds it once for the team. Each person still signs in.

1. In Claude, open **Organization settings → Connectors**.
2. Select **Add**, then **Custom**. If Claude asks for a type, choose **Web**.
3. Enter `https://fieldguide-mcp.audiohook.com/mcp`.
4. Leave the OAuth client ID and secret empty. Claude registers itself.
5. Save the connector.

To add it only for yourself, use **Customize → Connectors → Add custom connector** and the same URL.

The first time you use it, Claude opens a browser. Choose **Allow**, then enter the email code Cloudflare Access sends to your `@audiohook.com` address. The consent page names `claude.ai` as the place the sign-in returns to.

Claude Code uses the same server:

```sh
claude mcp add --transport http field-guide https://fieldguide-mcp.audiohook.com/mcp
```

The first tool call opens a browser on this computer and returns to a `localhost` address. That is Claude Code's sign-in, still limited to your Audiohook email.

## Connect Cursor

1. Open Cursor Settings → MCP, or edit `~/.cursor/mcp.json`.
2. Add this server:

```json
{
  "mcpServers": {
    "field-guide": {
      "url": "https://fieldguide-mcp.audiohook.com/mcp"
    }
  }
}
```

3. Save and enable **field-guide**.
4. The first time Cursor calls it, a browser opens.
5. Choose **Allow**, then enter the email code sent to your `@audiohook.com` address.

Cursor stores the session after that. You sign in again when it expires, or when you use a different computer.

## What you can ask

- "What is our sales handoff?"
- "Find the on-call severity definitions."
- "Open the compensation page."

Compensation, finance, and every other section are available to every signed-in Audiohook employee, the same way they are on [the Field Guide site](https://fieldguide.audiohook.com).

## If sign-in fails

- Use your `@audiohook.com` email. Other addresses are refused.
- Allow the browser prompt. A shared API key is not the way to connect.
- Claude on the web, Desktop, and mobile returns to `https://claude.ai/api/mcp/auth_callback`. Claude Code returns to `http://localhost` on a port it picks for that sign-in.
- Desktop Cursor returns to `http://localhost:8787/callback`. Cursor Cloud Agents use `https://www.cursor.com/agents/mcp/oauth/callback`.
