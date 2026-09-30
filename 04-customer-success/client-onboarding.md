# Client Onboarding

> **Department / Section**: 04-customer-success  
> **Process Owner (Accountability Seat)**: Head of Customer Success  
> **Target Audience (Who Follows It)**: Customer Success Managers (CSMs), Client Success Engineers (CSEs), Creative, Billing / Affiliate specialists  
> **Trigger / Cadence**: Triggered Immediately After Contract Signed and CSM Assignment  
> **Last Reviewed**: 2026-09-18

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Move a newly contracted brand from Sales into a live, testable campaign by completing account setup, billing, tracking, creative, and the onboarding call against one Asana parent task.
- **Definition of Done**: Onboarding call complete; client Asana project created; billing, tracking, and creative dependencies satisfied; parent task at **Take Live**. Campaign activation itself is [Campaign Launch](./campaign-launch.md).

---

## 2. Key Measurables (KPIs)
* **Time to Take Live**: Parent task reaches Take Live with all launch dependencies complete before the agreed flight start.
* **Onboarding Call SLA**: Onboarding call held within 3 business days of CSM assignment.
* **Cadence Check**: Reviewed weekly in the Customer Success L10 using Onboarding Overview.

---

## 3. Core Steps (The 20/80 Flow)

1. **Accept Ownership & Set Up the Workspace**: After [Sales-to-CS Handoff](../03-sales/handoffs.md), the CSM owns the parent task. Create the client-specific Asana project in the Clients portfolio, establish the Google Drive client folder, and connect onboarding work to that project. Do not create a second parent task.
2. **Start Parallel Launch Dependencies**: Custom fields route billing, tracking, affiliate, referral, and creative work. Typical parallel tracks:
   * **Billing**: Stripe card-on-file for direct credit-card billing; affiliate-program terms (and Noelle review) when billing or reporting through an affiliate platform; **$0 CPA / $0 reporting terms** when the affiliate platform is used for reporting only.
   * **Tracking**: Multi-home the parent task into the correct tracking-onboarding project(s) (affiliate, Universal Tag, Shopify, server-to-server, direct, or combination). CSE, CSM, and specialists complete implementation-specific subtasks.
   * **Creative**: Route into Creative Overview. The Creative Producer selects messaging types; Asana creates production tasks until launch assets are complete.
   * **Referral**: If the brand came from a referral partner, Head of Sales & RevOps confirms it is in referral reporting.
3. **Prepare and Hold the Onboarding Call**: Move to **Call Pending** once the call is scheduled. Prepare from the onboarding-call template and deck, Sales context, and client requirements. On the call, confirm campaign execution details and document resulting actions in the client Asana project.
4. **Confirm Readiness for Take Live**: Creative completion alone is not enough. Take Live only when tracking, billing, affiliate setup, creative, account configuration, required onboarding actions, and client readiness are all satisfied. Use the [Take-Live Readiness Checklist](../09-sop-library/checklists/take-live-readiness.md).
5. **Hand to Launch**: When the parent task is at **Take Live**, the CSM executes [Campaign Launch](./campaign-launch.md). Successful go-live moves the parent task to **In Testing** and starts incrementality Week 0 (the client was already queued during onboarding).

---

## 4. Exceptions & Escalations

| Condition / Trigger | Escalation Path | Notification Channel |
| :--- | :--- | :--- |
| Client unresponsive for > 5 business days | AE re-engages the primary decision-maker | Slack + Asana parent task |
| Tracking or pixel blocker | Technical pairing with CSE / Ad Ops | Asana tracking subtask |
| Affiliate terms missing or misconfigured (especially reporting-only vs billed CPA) | Affiliate specialist review before Take Live | Asana billing/affiliate tasks |
| Creative incomplete at intended launch date | Creative Producer + Head of Customer Success; do not skip Take Live criteria | Creative Overview + Slack |
| Payment method not on file for direct billing | Hold Take Live; CSM and Finance follow up | Stripe + Asana billing task |

---

## 5. Related SOPs & Checklists
* [Asana Sales → Onboarding → Launch Workflow](../09-sop-library/how-to/asana-sales-onboarding-launch.md)
* [Take-Live Readiness Checklist](../09-sop-library/checklists/take-live-readiness.md)
* [Sales-to-CS Handoff](../03-sales/handoffs.md)
* [Campaign Launch](./campaign-launch.md)
* [Campaign Setup & Trafficking](../05-ad-operations/campaign-setup.md)
* [Tracking & Pixel Implementation](../05-ad-operations/tracking.md)
* [Creative Management](../05-ad-operations/creative.md)
