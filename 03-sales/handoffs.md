# Sales-to-CS Handoff

> **Department / Section**: 03-sales (Collaborative with 04-customer-success)  
> **Process Owner (Accountability Seat)**: Head of Sales / Director of Client Success  
> **Target Audience (Who Follows It)**: SAEs, Director of Client Success, CSMs, Client Success Engineers  
> **Trigger / Cadence**: Triggered When Required Paperwork Is Executed (Contract Signed)  
> **Last Reviewed**: 2026-10-08  
> **Source**: *Audiohook Sales Pipeline Asana Workflow* §§34–45 + *Onboarding Overview Asana Workflow* §§4–7

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Transfer the same Asana parent task from Sales ownership into Client Success onboarding so the client experiences one continuous lifecycle, not a restart.
- **Definition of Done**: Contract is signed; parent task is in **Contract Signed** and multi-homed into Onboarding Overview → **New Contract Assignment**; CSM is assigned and owns the parent task; advertiser account exists; SAE has introduced the CSM; stage can move to **In Onboarding** for Sales completion (parent task remains open).

---

## 2. Key Measurables (KPIs)
* **Handoff SLA**: CSM assigned and client introduction sent within 1 business day of contract signature.
* **Parent-Task Continuity**: 100% of closed-won brands continue on the existing Asana parent task (questionnaire merge is the only allowed exception).
* **Cadence Check**: Reviewed weekly in the Sales & RevOps L10.

---

## 3. Core Steps (The 20/80 Flow)

1. **Execute Paperwork → Contract Signed**: SAE completes the Insertion Order and any billing-dependent addenda. Once executed, the parent task advances to **Contract Signed**. Attach signed documentation to the client record. Update Clarify to Closed-Won.
2. **Keep One Parent Task (Automatic Routing)**: Do not create a new brand task. Automations multi-home the existing parent into:
   * **Onboarding Overview → New Contract Assignment**
   * **Direct Tracking Onboarding** (and/or other tracking routes from custom fields)
   * Affiliate Platform Onboarding → Collect Info when applicable
   * Billing triggers (e.g., credit-card email) when applicable
   * Incrementality queue as configured
3. **Account Creation & Internal Announcement**: Client Success Engineering creates the advertiser account (Advertiser ID, UUID, related identifiers). Internal contract announcement / 90 Headlines run as configured.
4. **Assign CSM & Transfer Ownership**: Director of Client Success assigns a CSM. Parent-task ownership transfers from SAE to the assigned CSM. The CSM is the master owner across the ecosystem; specialists keep their own subtasks.
5. **Introduce the CSM → In Onboarding**: SAE sends the client introduction. CSM replies and schedules the onboarding call. Sales stage moves to **In Onboarding**; SAE active work is complete. The parent task stays open for downstream Client Success work — do not mark it complete.

---

## 4. Exceptions & Escalations

| Condition / Trigger | Escalation Path | Notification Channel |
| :--- | :--- | :--- |
| Questionnaire created a second brand task | Merge the prior task into the questionnaire-generated task | Asana comments on both tasks |
| CSM not assigned within 1 business day of signature | Escalate to Director of Client Success | Slack `#revops` and Asana assignment task |
| Advertiser account not created before tracking routing | Escalate to Client Success Engineering | Asana tracking subtask + Slack |
| Critical campaign assets delayed after handoff | CSM follows [Client Onboarding](../04-customer-success/client-onboarding.md) | Asana + SAE re-engagement |

---

## 5. Related SOPs & Checklists
* [Asana Sales → Onboarding → Launch Workflow](../09-sop-library/how-to/asana-sales-onboarding-launch.md)
* [Take-Live Readiness Checklist](../09-sop-library/checklists/take-live-readiness.md)
* [Client Onboarding](../04-customer-success/client-onboarding.md)
* [Campaign Setup & Trafficking](../05-ad-operations/campaign-setup.md)
