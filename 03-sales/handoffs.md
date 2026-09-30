# Sales-to-CS Handoff

> **Department / Section**: 03-sales (Collaborative with 04-customer-success)  
> **Process Owner (Accountability Seat)**: Head of Sales / Head of Customer Success  
> **Target Audience (Who Follows It)**: Account Executives, Head of Customer Success, Customer Success Managers, Client Success Engineers  
> **Trigger / Cadence**: Triggered When Required Paperwork Is Executed (Contract Signed)  
> **Last Reviewed**: 2026-09-18

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Transfer the same Asana parent task from Sales ownership into Client Success onboarding so the client experiences one continuous lifecycle, not a restart.
- **Definition of Done**: Contract is signed, the parent task is in **Contract Signed** and multi-homed into Onboarding Overview, a CSM is assigned and owns the parent task, the advertiser account exists, and Sales has introduced the CSM to the client.

---

## 2. Key Measurables (KPIs)
* **Handoff SLA**: CSM assigned and client introduction sent within 1 business day of contract signature.
* **Parent-Task Continuity**: 100% of closed-won brands continue on the existing Asana parent task (questionnaire merge is the only allowed exception).
* **Cadence Check**: Reviewed weekly in the Sales & RevOps L10.

---

## 3. Core Steps (The 20/80 Flow)

1. **Execute Paperwork (Stage: Paperwork → Contract Signed)**: AE completes the Insertion Order and any billing-dependent addenda (including affiliate-platform addenda when custom fields require them). Once executed, the parent task advances to **Contract Signed**.
2. **Keep One Parent Task**: Do not create a new brand task for onboarding. Asana automations add the existing parent task to **Onboarding Overview** (new-contract assignment) and to **Direct Tracking Onboarding**. The task remains visible in Sales while onboarding begins.
3. **Assign CSM**: Head of Customer Success assigns a CSM. Parent-task ownership transfers from Sales to the assigned CSM. The CSM is the master owner across the ecosystem; specialists keep their own subtasks.
4. **Create Advertiser Account Immediately**: Client Success Engineering creates the advertiser account as soon as the contract is signed so Advertiser ID, UUID, and other identifiers exist for tracking, billing, and launch work.
5. **Introduce the CSM**: Sales sends the client introduction. The CSM replies, schedules the onboarding call, and takes the account into [Client Onboarding](../04-customer-success/client-onboarding.md).

---

## 4. Exceptions & Escalations

| Condition / Trigger | Escalation Path | Notification Channel |
| :--- | :--- | :--- |
| Questionnaire created a second brand task | Merge the prior task into the questionnaire-generated task; that record becomes the continuing parent | Asana comments on both tasks |
| CSM not assigned within 1 business day of signature | Escalate to Head of Customer Success | Slack `#revops` and Asana assignment task |
| Advertiser account not created before tracking routing | Escalate to Client Success Engineering | Asana tracking subtask + Slack |
| Critical campaign assets delayed after handoff | CSM follows the escalation path in [Client Onboarding](../04-customer-success/client-onboarding.md) | Asana + AE re-engagement |

---

## 5. Related SOPs & Checklists
* [Asana Sales → Onboarding → Launch Workflow](../09-sop-library/how-to/asana-sales-onboarding-launch.md)
* [Take-Live Readiness Checklist](../09-sop-library/checklists/take-live-readiness.md)
* [Client Onboarding](../04-customer-success/client-onboarding.md)
* [Campaign Setup & Trafficking](../05-ad-operations/campaign-setup.md)
