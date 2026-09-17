# Building Production Tools with AI (Engineering Review)

> **Department / Section**: 07-engineering  
> **Process Owner (Accountability Seat)**: Head of Engineering / Security Lead  
> **Target Audience (Who Follows It)**: Engineers reviewing AI tools built by non-engineers  
> **Trigger / Cadence**: Triggered on Receipt of Tier 3 AI Tool Review Request  
> **Last Reviewed**: 2026-09-17

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Provide a fast, constructive engineering review for tools built by non-engineers using AI, ensuring production safety while encouraging team innovation.
- **Definition of Done**: Security and reliability review completed within 48 hours, API credentials securely provisioned, and tool approved for deployment.

---

## 2. Primary Policy Reference
The complete company policy, tier definitions, and safety rules are documented in:
👉 **[Company Policy: Building Production Tools with AI](../01-company/building-production-tools-with-ai.md)**

---

## 3. Engineering Review Checklist (The 20/80 Flow)

When reviewing a tool submitted by a non-engineering colleague:

- [ ] **1. Authentication & Secrets**: Verify that no API keys, tokens, or database passwords are hardcoded in the script or prompt. Ensure credentials use environment variables or Secrets Manager.
- [ ] **2. Data Access & Scoping**: Ensure the tool only accesses the minimum necessary data fields (Principle of Least Privilege). No unrestricted access to customer PII.
- [ ] **3. Rate Limiting & API Polling**: Verify the tool will not overwhelm internal APIs or external vendor rate limits (e.g., check for runaway while-loops or aggressive polling).
- [ ] **4. Error Handling & Failsafes**: If the tool writes data or executes transactions, verify it fails closed (does not proceed on error) and logs failure alerts.
- [ ] **5. Backup & Decommissioning Plan**: Confirm who owns the tool and what happens if the tool breaks while the creator is out of office.

---

## 4. Review Turnaround SLA
* The engineering review must be completed within **2 business days** (48 hours). If changes are needed, provide clear, friendly, and actionable code suggestions.

---

## 5. Related Links
* [Company Policy: Building Production Tools with AI](../01-company/building-production-tools-with-ai.md)
* [Secure Coding Guidelines](https://github.com/audiohook/engineering-handbook/blob/main/Security/Secure%20Coding%20Guidelines.md)
