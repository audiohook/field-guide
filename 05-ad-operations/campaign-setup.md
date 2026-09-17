# Campaign Setup & Trafficking

> **Department / Section**: 05-ad-operations  
> **Process Owner (Accountability Seat)**: Head of Ad Operations  
> **Target Audience (Who Follows It)**: Ad Ops Specialists, Campaign Managers  
> **Trigger / Cadence**: Triggered on Approved Trafficking Ticket from CS  
> **Last Reviewed**: 2026-09-17

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Flawlessly build and configure advertiser campaigns within the Audiohook DSP and SSP connectors according to IO parameters.
- **Definition of Done**: Campaign and line items created, targeting/geo parameters applied, creative assigned, flight dates set, and pre-flight QA verified.

---

## 2. Key Measurables (KPIs)
* **Trafficking SLA**: Campaign built within 24 hours of ticket receipt.
* **Trafficking Error Rate**: < 0.5% configuration error rate (zero budget cap or wrong geo errors).

---

## 3. Core Steps (The 20/80 Flow)

1. **Review Campaign Intake Ticket**:
   * Confirm approved IO, total budget, daily pacing caps, flight dates, and CPM bid ceilings.
2. **DSP Account & Campaign Creation**:
   * Create or select Advertiser in Audiohook DSP.
   * Configure lifetime and daily spend caps. Set pacing to "Even" or "Front-loaded" as specified.
3. **Configure Targeting Parameters**:
   * Geographic filters (Country, State/DMA, Zip).
   * Device types (Mobile, Desktop, Connected TV/Smart Speaker).
   * Publisher/Supply exchange whitelists or category blacklists.
4. **Attach Approved Creative**:
   * Link approved audio creative assets and companion banners.
   * Attach landing page click-through URLs with verified UTMs.
5. **Assign Attribution Pixels**:
   * Connect advertiser tracking pixel to the campaign.
6. **Pass to QA**: Move ticket to "Ready for QA" stage in Linear.

---

## 4. Exceptions & Escalations
* Custom exchange deals (PMP / Deal IDs) failing to sync: Escalate to Exchange Partner rep and flag to CS.

---

## 5. Related Links
* [Creative Management](./creative.md)
* [Campaign QA Checklist](./qa.md)
* [Tracking & Pixel Implementation](./tracking.md)
