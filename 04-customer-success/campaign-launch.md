# Campaign Launch

> **Department / Section**: 04-customer-success  
> **Process Owner (Accountability Seat)**: Head of Customer Success  
> **Target Audience (Who Follows It)**: CSMs, Campaign Managers  
> **Trigger / Cadence**: Triggered 24 Hours Prior to Campaign Flight Date  
> **Last Reviewed**: 2026-09-17

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Ensure campaigns launch smoothly without pacing errors, bid rejection issues, or attribution failures.
- **Definition of Done**: Campaign live, impressions delivering across target exchanges, conversions firing, and launch confirmation email sent to client.

---

## 2. Key Measurables (KPIs)
* **On-Time Launch Rate**: 100% of campaigns launch on agreed flight start date.
* **Hour-4 Spend Verification**: 100% of campaigns inspected for pacing within first 4 hours of launch.

---

## 3. Core Steps (The 20/80 Flow)

1. **Pre-Flight Verification (T-24 Hours)**:
   * Verify Ad Ops has flighted line items in DSP.
   * Confirm budget caps, daily flight pacing, and geo-targeting.
   * Confirm pixel is receiving real-time ping events.
2. **Go-Live Activation (T-0 Hours)**:
   * Enable line items in DSP.
3. **Pacing Check (T+4 Hours)**:
   * Confirm DSP is successfully bidding and winning impressions.
   * Check win rate, eCPM, and audio completion rate (ACR).
4. **Attribution Sanity Check (T+24 Hours)**:
   * Verify first attributed listens and conversion events appear in reporting dashboards.
5. **Send Launch Notice to Client**:
   * Send personalized email confirming campaign is live, with a link to their live reporting dashboard.

---

## 4. Exceptions & Escalations
* Zero impressions after 2 hours: Immediately trigger [Ad Ops Troubleshooting](../05-ad-operations/troubleshooting.md).
* Overpacing / runaway spend: Immediately pause line item and notify Ad Ops lead.

---

## 5. Related Links
* [Campaign Setup & QA](../05-ad-operations/qa.md)
* [Operational Troubleshooting](../05-ad-operations/troubleshooting.md)
