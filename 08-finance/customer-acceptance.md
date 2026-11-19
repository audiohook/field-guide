# Customer Acceptance

> **Department / Section**: 08-finance  
> **Process Owner (Accountability Seat)**: Head of Finance  
> **Target Audience (Who Follows It)**: Finance, Client Success, Account Executives  
> **Trigger / Cadence**: Every new or reactivated client, before the campaign is launched  
> **Last Reviewed**: 2026-11-06

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Make sure every client has an approved way to pay before Audiohook spends media on their behalf.
- **Definition of Done**: The client's billing path is confirmed and either a credit card is on file in Stripe or an executed credit application has been approved for Net 30. No campaign launches without one of the two.

---

## 2. Key Measurables (KPIs)
* **Launch Without Payment Method**: 0 clients launched without a card on file or approved Net 30 terms.
* **Daily Billing Backlog**: 0 clients on daily billing whose card isn't connected in the UI.

---

## 3. Core Steps

1. **Confirm the billing path**: Sales sets the billing path (credit card, Net 30, or affiliate) in the client's custom fields at contract signing.
2. **Card on file (credit card clients)**: The CSM gets the client's credit card added to their Stripe customer profile before launch. Client Success owns this step.
3. **Credit approval (Net 30 clients)**: The client completes a credit application. Finance reviews and approves it before Net 30 terms are granted.
4. **Enroll in daily billing**: Once the card is in Stripe, Accounting adds the client to the [daily billing tracker](https://docs.google.com/spreadsheets/d/1WknNInNMuecz-VaBJmNw3MJuPMvX59vmGFmRs7ayQDc/edit?usp=sharing) and notifies Engineering so the card is connected in the UI. See [Billing & Invoicing](./billing.md).
5. **Launch gate**: The campaign isn't launched until the payment method is in place. Engineering is adding a system check that blocks launch when no card is on file, plus a pre-launch card authorization.

---

## 4. Exceptions & Escalations

| Condition / Trigger | Escalation Path | Notification Channel |
| :--- | :--- | :--- |
| Client wants to launch before a card is on file or credit is approved | Head of Finance. The campaign does not launch until resolved. | Slack |
| Card is in Stripe but the client isn't showing as connected in the UI | Accounting to Engineering | Slack |
| Promos or credits are part of the deal | CSM notes them for Accounting before launch | Asana / Slack |

---

## 5. Related SOPs & Checklists
* [Checklist: Take-Live Readiness](../09-sop-library/checklists/take-live-readiness.md)
* [Billing & Invoicing](./billing.md)
* [Collections & AR](./collections.md)
