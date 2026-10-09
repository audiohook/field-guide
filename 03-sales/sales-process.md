# Sales Process Overview

> **Department / Section**: 03-sales  
> **Process Owner (Accountability Seat)**: Head of Sales / Head of Revenue  
> **Target Audience (Who Follows It)**: Strategic Account Executives (SAEs)  
> **Trigger / Cadence**: Triggered when an opportunity enters the Sales Pipeline (referral, MQL, affiliate, or questionnaire)  
> **Last Reviewed**: 2026-10-08  
> **Source**: *Audiohook Sales Pipeline Asana Workflow* (CURRENT, last updated 2026-09-22)

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Move every Sales opportunity through one continuous Asana parent task — from lead entry to Contract Signed — while keeping Clarify synchronized for funnel reporting.
- **Definition of Done**: Contract signed; same parent task multi-homed into Onboarding Overview; CSM assigned; SAE has introduced the CSM; SAE active work complete (parent task stays open for Client Success).

---

## 2. Key Measurables (KPIs)
* **Stage Accuracy**: 100% of active opportunities sit in the correct Asana Kanban stage with a clear SAE owner.
* **Clarify Sync**: Clarify stage and next step updated at every major Asana stage change (especially Contract Signed).
* **Handoff Continuity**: 100% of closed-won brands continue on the existing parent task (questionnaire merge is the only allowed exception).
* **Cadence Check**: Reviewed weekly in the Sales & RevOps L10.

---

## 3. Core Steps (The 20/80 Flow)

Asana is the system of action. Clarify is the CRM / funnel reporting system. Keep both current.

### Forward lifecycle (Sales Pipeline Kanban)

```
Lead Entry → SQL → Discovery / Meeting Booked → Data Collection
  → Proposal Building → Leadership Review → Client Proposal Review
  → Contracting → Contract Signed → In Onboarding
```

Alternate paths: **Purgatory** (timing not right — future follow-up) and **Disqualified** (not viable). There is no Canceled stage in Sales.

1. **Enter the Pipeline**: Opportunity enters via approved referral, Marketing-qualified lead, Affiliate team handoff, or Client Consultation Questionnaire. Assign an SAE, preserve lead source / referring partner, and create or update Clarify. Questionnaire duplicates: merge the older brand task into the questionnaire-generated task.
2. **Qualify to SQL**: Confirm the opportunity meets SQL criteria ([Lead Qualification](./qualification.md)). Set Sales Qualified = Yes/No. No → automation moves to Disqualified and prompts a Clarify update.
3. **Book and Run Discovery**: Populate Discovery Call Date → stage becomes Discovery / Meeting Booked. When the date arrives, Asana moves to Data Collection. Run discovery per the [Discovery Call SOP](../09-sop-library/how-to/discovery-call.md); keep the date field accurate if rescheduled.
4. **Complete Data Collection**: Finish required subtasks (technical connection such as GA4 / evolving Shopify path; questionnaire if missing). When all required subtasks complete, Asana advances to Proposal Building.
5. **Build Proposal → Leadership Review → Client Review**: Build the proposal deck, Phase 1 GEOs, Executive Summary, and Creative Brief; attach required parent-task links; validate technical fields. Leadership reviews and SAE verifies parent-task fields. After approval, present to the client ([Proposals & Contracting](./proposals.md), [Proposal Building SOP](../09-sop-library/how-to/proposal-building.md)).
6. **Contract and Hand Off**: Issue IO (+ affiliate addendum when required). On signature → **Contract Signed**. Automations multi-home the same parent task into Onboarding Overview (and affiliate / tracking / billing routes as fields dictate). Complete the [Sales-to-CS Handoff](./handoffs.md). Move to In Onboarding; do **not** complete the parent task when SAE work ends.

---

## 4. Exceptions & Escalations

| Condition / Trigger | Escalation Path | Notification Channel |
| :--- | :--- | :--- |
| Timing not right | Move to Purgatory; create future follow-up with expected date | Asana + Clarify |
| Not viable / Sales Qualified = No | Disqualified; update Clarify; Sales lifecycle ends | Asana + Clarify |
| Custom pricing below floor or non-standard terms | Head of Sales / Legal | Slack `#sales-leadership` |
| Questionnaire created a second brand task | Merge older task into questionnaire task | Asana comments on both |

---

## 5. Related SOPs & Checklists
* [Lead Qualification](./qualification.md)
* [CRM Hygiene & Pipeline](./crm.md)
* [Proposals & Contracting](./proposals.md)
* [Sales-to-CS Handoff](./handoffs.md)
* [Asana Sales → Onboarding → Launch Workflow](../09-sop-library/how-to/asana-sales-onboarding-launch.md)
* [Discovery Call SOP](../09-sop-library/how-to/discovery-call.md)
* [Proposal Building SOP](../09-sop-library/how-to/proposal-building.md)
