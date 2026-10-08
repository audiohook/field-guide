# Client Onboarding

> **Department / Section**: 04-customer-success  
> **Process Owner (Accountability Seat)**: Director of Client Success / Head of Customer Success  
> **Target Audience (Who Follows It)**: CSMs, Client Success Engineers (CSEs), Creative, Billing / Affiliate specialists  
> **Trigger / Cadence**: Triggered Immediately After Contract Signed (Onboarding Overview → New Contract Assignment)  
> **Last Reviewed**: 2026-10-08  
> **Source**: *Audiohook Onboarding Overview Asana Workflow* (CURRENT, last updated 2026-09-22)

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Move a newly contracted brand from Sales through onboarding on one Asana parent task until all launch dependencies are satisfied and the parent task reaches **Take Live**.
- **Definition of Done**: Onboarding call complete; client Asana project created; billing, tracking, creative, and account configuration dependencies satisfied; parent task at **Take Live**. Campaign activation itself is [Campaign Launch](./campaign-launch.md).

---

## 2. Key Measurables (KPIs)
* **Time to Take Live**: Parent task reaches Take Live with all launch dependencies complete before the agreed flight start.
* **Onboarding Call SLA**: Onboarding call held within 3 business days of CSM assignment.
* **Parent-Task Continuity**: Zero duplicate onboarding parent tasks created.
* **Cadence Check**: Reviewed weekly in the Customer Success L10 using Onboarding Overview.

---

## 3. Core Steps (The 20/80 Flow)

### Onboarding Overview Kanban

```
New Contract Assignment → Setup and Intro → Call Pending
  → Campaign and Creative → Take Live → In Testing → Complete
```

Canceled exists for clients whose onboarding ends before launch.

1. **New Contract Assignment → Accept Ownership**: After [Sales-to-CS Handoff](../03-sales/handoffs.md), Director of Client Success assigns the CSM; ownership transfers to the CSM. Parallel routing begins from custom fields (tracking, billing, affiliate, incrementality, referral). Do not create a second parent task.
2. **Setup and Intro**: Create the client-specific Asana project in the Clients portfolio, establish the Google Drive client folder, respond to the Sales introduction, and connect onboarding work to that project.
3. **Call Pending → Onboarding Call**: Move to **Call Pending** once scheduled. Prepare from the onboarding-call template and deck, Sales context, and client requirements. On the call, confirm campaign execution details; document resulting actions in the client Asana project. Mark onboarding call complete.
4. **Campaign and Creative (Parallel Dependencies)**: Onboarding call status = Complete moves the board into Campaign and Creative. Asana multi-homes the parent into **Creative Overview**; Creative owns granular production. In parallel, complete:
   * **Billing**: Stripe card-on-file for direct CC; affiliate-program terms (specialist review) when billing/reporting through an affiliate platform; **$0 CPA / $0 reporting terms** when the affiliate platform is reporting-only.
   * **Tracking**: Multi-home into the correct tracking-onboarding project(s) (affiliate, Universal Tag, Shopify, S2S, direct, or combination). CSE / specialists complete implementation subtasks.
   * **Account / UI**: Configure campaign settings in the Audiohook UI as required.
   * **Referral**: If from a referral partner, leadership confirms referral reporting.
   * **Clarify**: Keep the client record accurate through onboarding.
5. **Confirm Readiness for Take Live**: Creative completion alone is not enough. Advance only when tracking, billing, affiliate setup, creative, account configuration, required onboarding actions, and client readiness are all satisfied. Use the [Take-Live Readiness Checklist](../09-sop-library/checklists/take-live-readiness.md), then execute [Campaign Launch](./campaign-launch.md).

---

## 4. Exceptions & Escalations

| Condition / Trigger | Escalation Path | Notification Channel |
| :--- | :--- | :--- |
| Client unresponsive for > 5 business days | SAE re-engages the primary decision-maker | Slack + Asana parent task |
| Tracking or pixel blocker | Technical pairing with CSE / Ad Ops | Asana tracking subtask |
| Affiliate terms missing or misconfigured (reporting-only vs billed CPA) | Affiliate specialist review before Take Live | Asana billing/affiliate tasks |
| Creative incomplete at intended launch date | Creative Producer + Director of Client Success; do not skip Take Live criteria | Creative Overview + Slack |
| Payment method not on file for direct billing | Hold Take Live; CSM and Finance follow up | Stripe + Asana billing task |
| Client cancels during onboarding | Move to Canceled; CSM updates Clarify | Asana + Clarify |

---

## 5. Related SOPs & Checklists
* [Asana Sales → Onboarding → Launch Workflow](../09-sop-library/how-to/asana-sales-onboarding-launch.md)
* [Take-Live Readiness Checklist](../09-sop-library/checklists/take-live-readiness.md)
* [Sales-to-CS Handoff](../03-sales/handoffs.md)
* [Campaign Launch](./campaign-launch.md)
* [Campaign Setup & Trafficking](../05-ad-operations/campaign-setup.md)
* [Tracking & Pixel Implementation](../05-ad-operations/tracking.md)
* [Creative Management](../05-ad-operations/creative.md)
