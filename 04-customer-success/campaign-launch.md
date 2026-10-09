# Campaign Launch

> **Department / Section**: 04-customer-success  
> **Process Owner (Accountability Seat)**: Director of Client Success / Head of Customer Success  
> **Target Audience (Who Follows It)**: CSMs, Campaign Managers, Client Success Engineers  
> **Trigger / Cadence**: Triggered When the Asana Parent Task Reaches Take Live  
> **Last Reviewed**: 2026-10-08  
> **Source**: *Audiohook Onboarding Overview Asana Workflow* §§34–49

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Activate a fully onboarded campaign, notify the client and the company, start early volume checks, and hold the parent task in **In Testing** until Incrementality Testing is complete.
- **Definition of Done**: Campaign live; client launch email sent (with dashboard access); internal Slack announcement posted; promotional terms / credits documented for Accounting when applicable; parent task moved to **In Testing**; Incrementality advanced from queue to active testing; Account Status = Live and Launch Date set.

---

## 2. Key Measurables (KPIs)
* **On-Time Launch Rate**: 100% of campaigns that meet Take Live criteria launch on the agreed flight start date.
* **Hour-4 Spend Verification**: 100% of campaigns inspected for pacing within the first 4 hours of launch.
* **One-Week Volume Check**: Campaign volumes reviewed one week after launch.
* **Cadence Check**: Reviewed weekly in the Customer Success L10.

---

## 3. Core Steps (The 20/80 Flow)

1. **Confirm Take Live Criteria**: Do not activate until [Client Onboarding](./client-onboarding.md) dependencies are complete. Use the [Take-Live Readiness Checklist](../09-sop-library/checklists/take-live-readiness.md).
2. **Go-Live Activation (T-0)**: Launch the advertiser account and campaign in the Audiohook UI. Confirm line items are enabled and bidding.
3. **Notify Client and Company**:
   * Send the campaign-live email to the client and provide dashboard access.
   * Post the internal Slack launch announcement.
   * Document promotional terms / accommodations and send details to Accounting; apply applicable credits.
   * If Everflow Pay is used and payment requests are not automatic, create the recurring payment-request reminder.
4. **Pacing and Attribution Checks (T+4 / T+24 Hours)**: Confirm the DSP is winning impressions (win rate, eCPM, audio completion). Verify first attributed listens and conversion events. Escalate zero impressions after 2 hours via [Ad Ops Troubleshooting](../05-ad-operations/troubleshooting.md).
5. **Move to In Testing → Hold Until Incrementality Complete**: After Take Live subtasks complete, move the parent task to **In Testing**. Set Account Status = Live and Launch Date. Notify Accounting of affiliate-platform billing if applicable. One week after launch, check campaign volumes. Remain In Testing while Incrementality progresses. **Complete the parent task only after Incrementality Testing is complete** — not at go-live.

---

## 4. Exceptions & Escalations

| Condition / Trigger | Escalation Path | Notification Channel |
| :--- | :--- | :--- |
| Zero impressions after 2 hours | Immediately trigger [Ad Ops Troubleshooting](../05-ad-operations/troubleshooting.md) | Slack + Asana |
| Overpacing / runaway spend | Pause the line item and notify Ad Ops | Slack + DSP |
| Take Live clicked with open tracking, billing, or creative tasks | CSM returns the parent task to onboarding until the checklist is green | Onboarding Overview |
| Incrementality leakage expected above 5% | CSM obtains client conversion data per the weekly incrementality workflow | Incrementality project |
| Client cancels before or at launch | Move to Canceled; update Clarify | Asana + Clarify |

---

## 5. Related SOPs & Checklists
* [Take-Live Readiness Checklist](../09-sop-library/checklists/take-live-readiness.md)
* [Asana Sales → Onboarding → Launch Workflow](../09-sop-library/how-to/asana-sales-onboarding-launch.md)
* [Client Onboarding](./client-onboarding.md)
* [Campaign Setup & QA](../05-ad-operations/qa.md)
* [Operational Troubleshooting](../05-ad-operations/troubleshooting.md)
