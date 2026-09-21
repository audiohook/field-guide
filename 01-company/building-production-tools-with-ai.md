# Building Production Tools with AI (Company Policy)

> **Department / Section**: 01-company (Cross-referenced in 07-engineering)  
> **Process Owner (Accountability Seat)**: Head of Engineering / Integrator  
> **Target Audience (Who Follows It)**: All Non-Engineers & Department Leads building tools with AI  
> **Trigger / Cadence**: Before any AI-generated tool, script, or workflow interacts with company data or clients  
> **Last Reviewed**: 2026-09-17

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Empower team members across all departments (Sales & RevOps, Product, Engineering, Finance, HR) to innovate rapidly using AI assistants (Claude, Cursor, Replit, ChatGPT, Zapier, Make) while strictly protecting company data, client privacy, system reliability, and financial integrity.
- **Definition of Done**: Every non-engineer tool that touches production data or client workflows passes safety review, has a designated owner, and is logged in the company tool inventory.

---

## 2. Key Measurables (KPIs)
* **Zero Security / Data Breaches**: 0 incidents of unauthorized data exposure or leaked credentials via AI tools.
* **Review Turnaround**: Engineering security reviews for non-engineer AI tools completed within 2 business days.
* **100% Tool Ownership**: Every deployed internal tool has an active seat owner responsible for maintenance.

---

## 3. The 3 Tiers of AI Tools

| Tier | Definition | Examples | Approval Required |
| :--- | :--- | :--- | :--- |
| **Tier 1: Personal Productivity** | Tools/prompts used only by yourself on mock/sanitized data | Formatting a spreadsheet, drafting an email, summarizing public documents | **None**. Encouraged for all. |
| **Tier 2: Internal Team Automation** | Tools used by multiple employees that process non-sensitive internal data | Slack bots, internal report scrapers, automated meeting notes | **Department Lead Approval**. |
| **Tier 3: Production & Customer Impact** | Tools that touch customer data, production databases, payments, or live campaigns | Scripts updating live ad campaigns, automated invoicing, customer data syncs | **Engineering Security Review & Approval Required**. |

---

## 4. Guardrails & Safety Rules (Non-Negotiable)

1. **Never Paste Sensitive Data into Public LLMs**:
   * Do NOT paste customer PII (names, emails, IP addresses), API keys, passwords, or credit card numbers into public AI chat windows.
   * Use Audiohook-managed enterprise accounts or ensure data opt-out settings are enabled.
2. **Never Hardcode Secrets**:
   * API tokens and passwords must NEVER be embedded in script code or prompts. Use environment variables or Secrets Manager.
3. **No Direct Production Database Write Access**:
   * Non-engineer AI scripts must not have direct `UPDATE`, `INSERT`, or `DELETE` credentials to production databases. Always use validated API endpoints.
4. **Human-in-the-Loop for Financial & Campaign Actions**:
   * Any AI tool that spends money, pauses campaigns, or issues invoices must require a human confirmation step before executing.

---

## 5. Core Review Process for Production Tools (The 20/80 Flow)

1. **Concept & Architecture Check**: The builder documents what the tool does, what data it reads/writes, and which AI model was used to generate it.
2. **Safety Submission**: Submit a ticket in Linear (`#eng-review`) or post in `#dev` with:
   - Tool purpose and department owner.
   - Source code repository or automation platform link.
   - List of API keys or systems accessed.
3. **Engineering Review (48h Turnaround)**: Engineering checks for credentials, rate limits, error handling, and data privacy.
4. **Deployment & Logging**: Tool is registered in the internal tool index, credentials provisioned in 1Password/AWS, and monitor alerts configured.
5. **Ongoing Ownership**: If the creator changes roles or leaves Audiohook, ownership must be formally transferred or the tool decommissioned.

---

## 6. Related Links
* [Engineering Review Guidelines](../07-engineering/development-process.md)
* [Incident Response Runbook](../07-engineering/incidents.md)
* [Communication Norms](./communication.md)
