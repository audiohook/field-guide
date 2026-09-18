# Audiohook Handbook: Leadership Guide

Welcome to the **Audiohook Company Operator's Manual**. This guide is for leadership team members and process owners who are responsible for authoring, maintaining, and reviewing our core processes.

---

## 1. The Audiohook EOS Way (The 20/80 Rule)

In the Entrepreneurial Operating System (EOS), a common trap is trying to document every microscopic action into a 50-page manual that nobody ever reads or updates. 

At Audiohook, we follow the **20/80 Rule**:
> **Document the 20% of the steps that produce 80% of the results.**

* **High-Level & Digestible**: Keep core processes simple, clear, and focused on the critical path (usually 4–7 steps).
* **Owned by an Accountability Seat**: Every process has a single named seat on the Accountability Chart responsible for its health.
* **Followed by All (FBA)**: A process is only real if everyone on the team actually follows it. If the process is too complex to follow, simplify it.
* **Core Flow vs. SOPs**: The core process lives in its department section (`01` through `08`). Granular click-by-click instructions, screenshots, or task checklists live in `09-sop-library/`.

---

## 2. How to Author or Update a Process

When creating a new process or updating an existing one:

1. **Use the Template**: Copy the structure from [`PROCESS_TEMPLATE.md`](./PROCESS_TEMPLATE.md).
2. **Define the Outcome First**: Fill out the **Purpose & Definition of Done** before writing any steps. If you cannot describe what "done" looks like in one sentence, the process scope is too wide.
3. **Pick 1–3 Measurables**: How does leadership know this process is working? (e.g., ticket resolution time, turnaround SLA, or weekly cadence review in your Level 10 meeting).
4. **Outline the 4–7 Steps**: Number the essential handoffs and actions. Explicitly note *who* does it and *what tool* is used (e.g., Linear, HubSpot, Slack, Stripe).
5. **Add the Escalation Path**: State clearly what happens when an exception occurs.
6. **Link SOPs / Checklists**: If someone needs step-by-step guidance on how to click through a specific tool, link to an SOP in [`09-sop-library/`](./09-sop-library/).

---

## 3. How to Read & Edit in GitHub (No Terminal or Cloning Required)

You do **not** need to install Git, use a command line, or clone the repository to your computer. Everything can be read and edited directly in your web browser on GitHub.

### Step 1: Navigate to the Page
Open the repository at [github.com/audiohook/field-guide](https://github.com/audiohook/field-guide). Click into the relevant department folder (e.g., `03-sales/`) and click on the document you want to read (e.g., `sales-process.md`).

### Step 2: Click the Edit (Pencil) Icon
At the top right of the document view, click the **pencil icon** (`Edit this file`).

![Edit Button in GitHub](https://github.githubassets.com/images/modules/readme/edit-file.png)

### Step 3: Make Your Edits
GitHub gives you two view options at the top of the editor:
* **Edit**: Type directly in Markdown. A formatting toolbar is available at the top for bolding, bullet points, headers, tables, and links.
* **Preview**: Click "Preview" at any time to verify that your styling, bullet lists, and links look clean and readable.

### Step 4: Propose Changes & Open a Pull Request
Scroll to the bottom of the page to the **"Commit changes"** box:
1. Enter a brief summary (e.g., `Update Sales qualification threshold`).
2. Select **"Create a new branch for this commit and start a pull request"** (this is usually selected by default).
3. Click the green button: **"Propose changes"** (or "Commit changes").
4. On the next screen, fill in the 3 quick questions in the Pull Request box, then click **"Create pull request"**.

Your department lead or peer will review the changes and merge them into `main`. Once merged, the update is immediately live for the entire company.

---

## 4. Quarterly Maintenance: "Followed by All" Cadence

Documentation rots if it isn't reviewed. Process owners are expected to review their core processes quarterly (during quarterly EOS planning or Rocks review):

1. **Is it still accurate?** Did tools, integrations, or workflows change?
2. **Is it being followed by all?** If people are skipping steps, is the process broken or is training needed?
3. **Update "Last Reviewed" date**: Update the metadata date at the top of each process file to reflect the review.

---

## 5. Writing for AI Agents & Search

AI assistants (such as Claude Desktop and Cursor agents) read this repository to answer employee questions and assist with automation.

To ensure AI can accurately understand your documents:
* **Use Standard Markdown**: Standard headers (`#`, `##`, `###`), bullet lists (`- ` or `* `), and numbered lists (`1. `).
* **Relative Links**: Always link to other handbook pages using relative paths: `[Process Name](../03-sales/qualification.md)`. Avoid hardcoded personal URLs.
* **Clear Role Titles**: Use specific role titles (e.g., "Account Executive", "Campaign Manager") rather than vague pronouns ("they", "someone").
