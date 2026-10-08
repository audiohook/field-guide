# How To: Run Sales → Onboarding → Launch in Asana

> **Department / Section**: 09-sop-library / how-to  
> **Supports**: [Sales Process](../../03-sales/sales-process.md), [Sales-to-CS Handoff](../../03-sales/handoffs.md), [Client Onboarding](../../04-customer-success/client-onboarding.md), [Campaign Launch](../../04-customer-success/campaign-launch.md)  
> **Last Reviewed**: 2026-10-08  
> **Source**: *Audiohook Asana Operating Model* — Sales Pipeline, Onboarding Overview, and related CURRENT tabs (last updated 2026-09-22)

This SOP is the Asana operating detail behind those core processes. It stays faithful to the current-state Revenue Lifecycle documentation. Granular Creative, Tracking, Incrementality, and Affiliate project docs remain authoritative for their specialized workflows.

---

## Systems of record

| System | Role |
| :--- | :--- |
| **Asana** | System of action. Kanban stage, automations, subtasks, multi-homing. |
| **Clarify** | Sales CRM and funnel reporting. Keep synchronized at major stage changes. |
| **Google Drive** | Client materials and onboarding documentation. |
| **Slack** | Team-wide communication, including campaign-live announcements. |
| **Stripe / affiliate platforms** | Billing execution based on custom fields. |

---

## Parent-task rule

Keep **one continuous parent task** for the brand from lead through Incrementality completion whenever possible.

That task may be multi-homed across Sales, Onboarding, Tracking, Creative, Billing, Incrementality, Referral, and other workflows. Individual work happens in subtasks. Prefer multi-homing over duplicating work for visibility.

**Questionnaire exception:** If the questionnaire creates a second task, merge the prior brand task into the questionnaire-generated task. That record becomes the continuing parent.

Due dates mean **expected completion**, not only hard deadlines. Assignees keep due dates realistic.

---

## Sales Pipeline stages

```
Lead Entry → SQL → Discovery / Meeting Booked → Data Collection
  → Proposal Building → Leadership Review → Client Proposal Review
  → Contracting → Contract Signed → In Onboarding
```

Alternate: **Purgatory** (future follow-up) · **Disqualified** (lifecycle ends). No Canceled stage in Sales.

### Entry paths

| Path | What happens |
| :--- | :--- |
| Approved referral | Leadership approves → Referral Leads → assign SAE, set lead source, preserve partner, Clarify, outreach |
| Marketing MQL | Leadership approves MQL → assign SAE, External Lead Source = MQL, Clarify |
| Affiliate team | Existing parent marked ready → multi-home into Affiliate Leads → assign SAE; affiliate enters Discovery Call Date |
| Questionnaire | New task enters SQL with populated fields → resolve duplicates by merge → Clarify |

### Stage notes

* **SQL**: Sales Qualified Yes/No. No → Disqualified + Clarify update. Qualification criteria live in [qualification.md](../../03-sales/qualification.md), not in this SOP.
* **Discovery / Meeting Booked**: Driven by Discovery Call Date. Keep the date accurate if rescheduled. See [discovery-call.md](./discovery-call.md).
* **Data Collection**: Technical connection + questionnaire (if needed). Completing required subtasks advances to Proposal Building.
* **Proposal Building**: Deck, Phase 1 GEOs, field validation, required links (Proposal Deck, Executive Summary, Creative Brief). See [proposal-building.md](./proposal-building.md).
* **Leadership Review**: Leadership approval + SAE parent-task field verification before client presentation.
* **Client Proposal Review → Contracting → Contract Signed**: Client agrees → IO (+ affiliate addendum if required) → signature triggers onboarding routing.

### Contract Signed automations (typical)

* Multi-home into **Onboarding Overview → New Contract Assignment**
* Multi-home into **Direct Tracking Onboarding** (and other tracking routes from fields)
* Affiliate Platform Onboarding → Collect Info when applicable
* Credit-card / billing triggers when applicable
* Clarify update prompt, internal contract announcement, 90 Headlines
* CSE advertiser account creation (Advertiser ID, UUID, related identifiers)
* CSM-assignment task for Director of Client Success

After CSM selection: parent-task owner becomes the CSM; SAE introduces the CSM; stage can move to **In Onboarding**. SAE work ends; **do not complete the parent task**.

---

## Onboarding Overview stages

```
New Contract Assignment → Setup and Intro → Call Pending
  → Campaign and Creative → Take Live → In Testing → Complete
```

Alternate: **Canceled** (onboarding terminated before launch; update Clarify).

### Stage notes

* **New Contract Assignment**: CSM assignment + ownership transfer; parallel billing / tracking / affiliate / incrementality / referral routing from custom fields.
* **Setup and Intro**: Client-specific Asana project in Clients portfolio; Google Drive folder; respond to Sales introduction.
* **Call Pending**: Prepare from onboarding template/deck + Sales context; schedule strategy call.
* **Campaign and Creative**: Onboarding call complete. Parent multi-homes into **Creative Overview**; Creative owns production subtasks (still visible on the shared parent). CSM monitors readiness; does not manage Creative production directly. Complete tracking, billing, UI config, Clarify updates in parallel.
* **Take Live**: Readiness threshold, not a calendar date. Confirm all launch dependencies via [Take-Live Readiness Checklist](../checklists/take-live-readiness.md). Then: launch in UI, client email + dashboard access, Slack announcement, promo/credit documentation, Everflow Pay reminder if needed.
* **In Testing**: Holding stage after launch. Set Account Status = Live + Launch Date; Accounting notice for affiliate billing if applicable; one-week volume check; remain here while Incrementality runs.
* **Complete**: Parent task completed **only after Incrementality Testing is complete**.

---

## Ownership after assignment

| Work | Typical owner |
| :--- | :--- |
| Master parent task (post-assignment) | Assigned CSM |
| Sales handoff / client introduction | SAE |
| Account creation, tracking, GEO, incrementality analysis | CSE |
| Affiliate-program terms | Director of Affiliate Partnerships / specialist |
| Creative production | Creative Producer and assigned producers |
| Referral reporting | Leadership / Head of Sales & RevOps |
| Client relationship and onboarding coordination | CSM |
| CSM assignment | Director of Client Success |

---

## Related core processes

* [Sales Process Overview](../../03-sales/sales-process.md)
* [CRM Hygiene & Pipeline](../../03-sales/crm.md)
* [Sales-to-CS Handoff](../../03-sales/handoffs.md)
* [Client Onboarding](../../04-customer-success/client-onboarding.md)
* [Campaign Launch](../../04-customer-success/campaign-launch.md)
* [Discovery Call SOP](./discovery-call.md)
* [Proposal Building SOP](./proposal-building.md)
