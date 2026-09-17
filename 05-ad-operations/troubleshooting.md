# Operational Troubleshooting

> **Department / Section**: 05-ad-operations  
> **Process Owner (Accountability Seat)**: Head of Ad Operations  
> **Target Audience (Who Follows It)**: Ad Ops, Technical Support, On-Call Engineers  
> **Trigger / Cadence**: Triggered on Underdelivery, Spend Spike, or Tracking Anomaly  
> **Last Reviewed**: 2026-09-17

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Systematically diagnose and resolve delivery blockers, exchange rejections, and attribution anomalies in active campaigns.
- **Definition of Done**: Root cause identified within 2 hours, corrective action taken, and delivery normalized.

---

## 2. Key Measurables (KPIs)
* **Triage Time**: Diagnostic completed within 2 hours of alert.
* **Underpacing Recovery**: Campaigns restored to normal flight pacing within 24 hours.

---

## 3. Common Failure Modes & Diagnostic Playbooks

### 1. Campaign is Underpacing (Low / No Impressions)
1. **Check Bid Price**: Is the max bid ceiling too low for the targeted inventory tier? (Test increasing bid ceiling by 15–20%).
2. **Check Audience & Geo Size**: Is the audience too narrow? Check if geo or device restrictions severely limit available bid requests.
3. **Check Frequency Capping**: Is the frequency cap too aggressive (e.g., 1/month instead of 3/day)?
4. **Check Exchange Creative Approvals**: Have SSPs (e.g., Triton, AdsWizz, Magnite) approved the creative? Look for creative rejection flags in SSP logs.

### 2. Campaign Overpacing / Runaway Burn
1. **Immediate Pause**: If spend exceeds daily pacing cap by > 15%, pause the line item immediately.
2. **Check Budget Cap Mode**: Verify if the cap is set to Lifetime instead of Daily, or if pacing is set to "Accelerated".
3. **Check Circuit Breaker**: Check if the internal circuit breaker tripped or failed to throttle bid requests.

### 3. Missing Conversions / Tracking Drop-off
1. **Verify Pixel Activity**: Check the raw pixel ingress stream. Are any events arriving?
2. **Check Client Website**: Did the advertiser deploy a website update that wiped the pixel snippet or changed the thank-you page URL?
3. **Verify S2S Endpoint**: Test API webhook response codes (HTTP 200 vs. 500 errors).

---

## 4. Escalation Path
* Exchange-level technical failures: Contact SSP technical partner support.
* DSP bidder or database errors: Post in `#dev` and page on-call engineering per [Incident Response Runbook](../07-engineering/incidents.md).

---

## 5. Related Links
* [Campaign Setup](./campaign-setup.md)
* [Incident Response](../07-engineering/incidents.md)
