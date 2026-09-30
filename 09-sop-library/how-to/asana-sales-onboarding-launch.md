# How To: Run Sales → Onboarding → Launch in Asana

> **Department / Section**: 09-sop-library / how-to  
> **Supports**: [Sales-to-CS Handoff](../../03-sales/handoffs.md), [Client Onboarding](../../04-customer-success/client-onboarding.md), [Campaign Launch](../../04-customer-success/campaign-launch.md)  
> **Last Reviewed**: 2026-09-18

This SOP is the Asana operating detail behind those core processes. Source of current-state workflow: *Audiohook Sales, Onboarding, Launch, and Early Incrementality Asana Workflow* (last updated 2026-09-04).

---

## Systems of record

| System | Role |
| :--- | :--- |
| **Asana** | System of action. Kanban stage, automations, subtasks, multi-homing. |
| **Clarify** | Sales CRM and funnel reporting. Asana reminds owners to keep Clarify in sync during Sales. |
| **Google Drive** | Client materials and onboarding documentation. |
| **Slack** | Team-wide communication, including campaign-live announcements. |
| **Stripe / affiliate platforms** | Billing execution based on custom fields. |

---

## Parent-task rule

Keep **one continuous parent task** for the brand from lead through In Testing whenever possible.

That task may be multi-homed across Sales, Onboarding, Tracking, Creative, Billing, Incrementality, Referral, and other workflows. Individual work happens in subtasks.

**Questionnaire exception:** If the questionnaire creates a second task, merge the prior brand task into the questionnaire-generated task. That record becomes the continuing parent. Do not create a new parent just because another team joins.

Due dates mean **expected completion**, not only hard deadlines. Assignees keep due dates realistic.

---

## Lifecycle stages that matter for onboarding

```
Paperwork → Contract Signed → Onboarding Overview (CSM assignment)
  → Setup & Introduction → Call Pending → Onboarding Call
  → Campaign / Creative / Tracking / Billing completion
  → Take Live → Campaign Live actions → In Testing (Incrementality Week 0)
```

### Contract Signed

Major ownership transition from Sales into Client Success.

Automations typically:

* Add the parent task to **Onboarding Overview** (new-contract assignment).
* Add the parent task to **Direct Tracking Onboarding**.
* Create a CSM-assignment task for Head of Customer Success.
* Create CSE work to create the advertiser account (Advertiser ID, UUID, and related identifiers).

After CSM selection:

* Parent-task owner becomes the assigned CSM (previously Sales).
* Sales introduces the CSM to the client.
* CSM replies, schedules the onboarding call, and creates the **client-specific Asana project** in the Clients portfolio.

### Call Pending

Use this stage to prepare: onboarding-call template, onboarding deck, Sales context, client requirements, Google Drive folder, and links into the client Asana project.

### Tracking routing

After contract signature and account creation, custom fields multi-home the parent task into the correct tracking project(s):

* Affiliate platform
* Universal Tag
* Shopify
* Server-to-server
* Direct tracking
* Combination

Each workflow has implementation-specific subtasks for CSE, CSM, affiliate specialists, or others. Every launch dependency should be an explicit task.

### Billing routing

There is no single billing path. Custom fields decide:

* Direct credit-card billing via Stripe (card on file until established).
* Affiliate platform billing **and** reporting (client sets program terms; specialist reviews and approves).
* Affiliate reporting with **direct** Audiohook billing → client must set **$0 CPA / $0 reporting terms** so the platform does not bill commissions by accident.

If the brand originated with a referral partner, Head of Sales & RevOps confirms referral reporting.

### Creative (near-term operating state)

Route into **Creative Overview**. Creative Producer reviews briefing, selects messaging types, and lets Asana create production tasks. Creative complete ≠ ready to launch.

### Take Live

Meaningful readiness threshold, not a calendar date. Confirm tracking, billing, affiliate setup, creative, account configuration, required onboarding actions, and client readiness. Then follow [Campaign Launch](../../04-customer-success/campaign-launch.md) and the [Take-Live Readiness Checklist](../checklists/take-live-readiness.md).

Take Live actions include: launch campaign, campaign-live email, internal Slack announcement, promotional documentation to Accounting, and Everflow Pay follow-up when payment requests are not automatic.

### In Testing

Ends initial onboarding. Incrementality was queued earlier; at launch it moves to **Week 0**, then weekly CSM/CSE testing for up to ~13 weeks toward Verification and Scale.

---

## Ownership after assignment

| Work | Typical owner |
| :--- | :--- |
| Master parent task | Assigned CSM |
| Sales handoff / client introduction | Sales |
| Account creation, tracking, GEO, incrementality analysis | CSE |
| Affiliate-program terms | Affiliate specialist |
| Creative production | Creative Producer and assigned producers |
| Referral reporting | Head of Sales & RevOps |
| Client relationship and onboarding coordination | CSM |

---

## Related core processes

* [Sales Process Overview](../../03-sales/sales-process.md)
* [Sales-to-CS Handoff](../../03-sales/handoffs.md)
* [Client Onboarding](../../04-customer-success/client-onboarding.md)
* [Campaign Launch](../../04-customer-success/campaign-launch.md)
