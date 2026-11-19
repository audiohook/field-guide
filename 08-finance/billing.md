# Billing & Invoicing

> **Department / Section**: 08-finance  
> **Process Owner (Accountability Seat)**: Finance Director  
> **Target Audience (Who Follows It)**: Senior Accountant, Finance Director, Engineering, Director of Client Success, Director of Affiliate Partnerships, Client Success Engineer, Sales  
> **Trigger / Cadence**: Daily Card Billing via Stripe with Weekly Review; Monthly Net 30 Invoicing  
> **Last Reviewed**: 2026-11-18

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Accurately invoice advertisers and agencies for delivered media spend and platform fees according to contracted terms.
- **Definition of Done**: 100% of advertiser invoices reconciled against the Audiohook User Interface (UI), generated in accounting system, and delivered to clients by the 3rd business day of the month.

---

## 2. Key Measurables (KPIs)
* **Billing Accuracy Rate**: >= 99.5% invoice accuracy (zero disputed line items due to calculation errors).
* **Invoice Delivery SLA**: All monthly invoices sent by Day 3 of each month.

---

## 3. Core Billing Models & Steps

### Billing Models
1. **Credit Card**: Client card charged automatically on a daily basis, based on actual conversion data from Supabase, via Stripe.
2. **Net 30 Invoicing**: Available only to approved agencies/advertisers with an executed credit application.

### Invoicing Flow

**Cards via Stripe**
1. Before launch, the client's card is added to their Stripe profile (see [Customer Acceptance](./customer-acceptance.md)).
2. When a client (new or existing) moves to daily billing, Accounting adds them to the [daily billing tracker](https://docs.google.com/spreadsheets/d/1WknNInNMuecz-VaBJmNw3MJuPMvX59vmGFmRs7ayQDc/edit?usp=sharing) and notifies Engineering. Do this only after the card is in Stripe, because the UI does not yet import card details from Stripe on its own.
3. Stripe bills the client's card daily.
4. Weekly, the Senior Accountant reviews all charges against the UI for accuracy. If a discrepancy is found, the Senior Accountant escalates it to the Finance Director and/or the engineering developer.

**Net 30**
1. Each month, the Senior Accountant downloads the month's conversions from the UI.
2. Invoices are created in QuickBooks for each customer for the month and distributed to the appropriate billing contact.

Note: Invoices are sent to affiliate customers only if Sales has identified them as "invoice required."

---

## 4. Internal Controls
1. Weekly review of daily billing against the UI.
2. Discussion of any variances in daily billing with Engineering and the Director of Client Success.
3. Monthly reconciliation of affiliate billing with each affiliate platform. Variances are investigated with the Director of Affiliate Partnerships and the Client Success Engineer.
4. Monthly reconciliation of daily billing against the UI. Variances in the monthly reconciliation are discussed with Engineering and the Director of Client Success.

---

## 5. Exceptions & Escalations

| Condition / Trigger | Escalation Path | Notification Channel |
| :--- | :--- | :--- |
| Client is on daily billing but not being charged (card missing in Stripe or not connected in the UI) | Accounting confirms the card with the CSM, then notifies Engineering | Slack |
| Daily charges don't match the UI | Senior Accountant to Finance Director and/or Engineering | Slack |

---

## 6. Related Links
* [Customer Acceptance](./customer-acceptance.md)
* [Proposals & Contracting](../03-sales/proposals.md)
* [Collections & AR](./collections.md)
