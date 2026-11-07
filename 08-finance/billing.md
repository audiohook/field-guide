# Billing & Invoicing

> **Department / Section**: 08-finance  
> **Process Owner (Accountability Seat)**: Head of Finance / Controller  
> **Target Audience (Who Follows It)**: Finance, Billing Specialists, Account Executives  
> **Trigger / Cadence**: Daily card billing; monthly Net 30 invoicing  
> **Last Reviewed**: 2026-11-06

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Accurately invoice advertisers and agencies for delivered media spend and platform fees according to contracted terms.
- **Definition of Done**: 100% of advertiser invoices reconciled against UI, generated in accounting system, and delivered to clients by the 3rd business day of the month.

---

## 2. Key Measurables (KPIs)
* **Billing Accuracy Rate**: >= 99.5% invoice accuracy (zero disputed line items due to calculation errors).
* **Invoice Delivery SLA**: All monthly invoices sent by Day 3 of each month.

---

## 3. Core Billing Models & Steps

### Billing Models
1. **Credit Card**: Client card charged automatically on a daily basis based on actual conversion data from Supabase via Stripe.
2. **Net 30 Invoicing**: Available only to approved agencies/advertisers with an executed credit application.

### Invoicing Flow

**Cards via Stripe**
1. Before launch, the client's card is added to their Stripe profile (see [Customer Acceptance](./customer-acceptance.md)).
2. When a client (new or existing) moves to daily billing, Accounting adds them to the [daily billing tracker](https://docs.google.com/spreadsheets/d/1WknNInNMuecz-VaBJmNw3MJuPMvX59vmGFmRs7ayQDc/edit?usp=sharing) and notifies Engineering. Do this only after the card is in Stripe, because the UI does not yet import card details from Stripe on its own.
3. The card is billed daily via Stripe.
4. On a weekly basis, the senior accountant will review all charges compared to the UI for accuracy. In the event a discrepancy is identified, the senior accountant will escalate to the finance director and/or engineering developer.

**Net 30**
1. For Net 30, the senior accountant will download monthly conversions from the UI.
2. Invoices will be created in QuickBooks for the given customer for the month and distributed to the appropriate billing party.

Note: For affiliate customers, invoices will only be sent to those identified by sales as "invoice required."

---

## 4. Exceptions & Escalations

| Condition / Trigger | Escalation Path | Notification Channel |
| :--- | :--- | :--- |
| Client is on daily billing but not being charged (card missing in Stripe or not connected in the UI) | Accounting confirms the card with the CSM, then notifies Engineering | Slack |
| Daily charges don't match the UI | Senior Accountant to Finance Director and/or Engineering | Slack |

---

## 5. Internal Controls
1. Review of daily billing versus UI on a weekly basis.
2. Discussion of any variances with daily billing with engineering and the director of client success.
3. Reconcile affiliate billing with individual affiliate platforms on a monthly basis and investigate any variances with the director of affiliate partnerships and the client success engineer.
4. Monthly reconciliation of daily billing versus UI. Discussion of any variances in the monthly reconciliation with engineering and the director of client success.

---

## 6. Related Links
* [Customer Acceptance](./customer-acceptance.md)
* [Proposals & Contracting](../03-sales/proposals.md)
* [Collections & AR](./collections.md)
