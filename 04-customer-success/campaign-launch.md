# Campaign Launch

> **Department / Section**: 04-customer-success  
> **Process Owner (Accountability Seat)**: Head of Customer Success  
> **Target Audience (Who Follows It)**: CSMs, Campaign Managers, Client Success Engineers  
> **Trigger / Cadence**: Triggered When the Asana Parent Task Reaches Take Live  
> **Last Reviewed**: 2026-09-18

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Activate a fully onboarded campaign, notify the client and the company, and start the incrementality testing lifecycle.
- **Definition of Done**: Campaign live, launch email sent, internal Slack announcement posted, promotional terms (if any) documented for Accounting, parent task moved to **In Testing**, and Incrementality moved from queue to **Week 0**.

---

## 2. Key Measurables (KPIs)
* **On-Time Launch Rate**: 100% of campaigns that meet Take Live criteria launch on the agreed flight start date.
* **Hour-4 Spend Verification**: 100% of campaigns inspected for pacing within the first 4 hours of launch.
* **Cadence Check**: Reviewed weekly in the Customer Success L10.

---

## 3. Core Steps (The 20/80 Flow)

1. **Confirm Take Live Criteria**: Do not activate until [Client Onboarding](./client-onboarding.md) dependencies are complete. Use the [Take-Live Readiness Checklist](../09-sop-library/checklists/take-live-readiness.md).
2. **Go-Live Activation (T-0)**: Launch the advertiser account and campaign. Confirm line items are enabled and bidding.
3. **Notify Client and Company**:
   * Send the campaign-live email to the client.
   * Post the internal Slack launch announcement.
   * If promotional terms or accommodations exist, document them and send the details to Accounting.
4. **Pacing and Attribution Checks (T+4 / T+24 Hours)**:
   * Confirm the DSP is winning impressions; check win rate, eCPM, and audio completion rate.
   * Verify first attributed listens and conversion events in reporting dashboards.
   * If Everflow Pay is used and payment requests are not automatic, set recurring reminders to request payment.
5. **Move to In Testing**: After Take Live work is complete, move the parent task to **In Testing**. Incrementality advances from the onboarding queue to **Week 0** (first active week, first full week not yet complete). Ongoing weekly test cadence lives in Client Success incrementality documentation.

---

## 4. Exceptions & Escalations

| Condition / Trigger | Escalation Path | Notification Channel |
| :--- | :--- | :--- |
| Zero impressions after 2 hours | Immediately trigger [Ad Ops Troubleshooting](../05-ad-operations/troubleshooting.md) | Slack + Asana |
| Overpacing / runaway spend | Pause the line item and notify Ad Ops | Slack + DSP |
| Take Live clicked with open tracking, billing, or creative tasks | CSM returns the parent task to onboarding until the checklist is green | Onboarding Overview |
| Incrementality leakage expected above 5% | CSM obtains client conversion data per the weekly incrementality workflow | Incrementality project |

---

## 5. Related SOPs & Checklists
* [Take-Live Readiness Checklist](../09-sop-library/checklists/take-live-readiness.md)
* [Asana Sales → Onboarding → Launch Workflow](../09-sop-library/how-to/asana-sales-onboarding-launch.md)
* [Client Onboarding](./client-onboarding.md)
* [Campaign Setup & QA](../05-ad-operations/qa.md)
* [Operational Troubleshooting](../05-ad-operations/troubleshooting.md)
