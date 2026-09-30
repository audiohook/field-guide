# Tracking & Pixel Implementation

> **Department / Section**: 05-ad-operations  
> **Process Owner (Accountability Seat)**: Head of Ad Operations / Solutions Architect  
> **Target Audience (Who Follows It)**: Ad Ops, Technical Account Managers  
> **Trigger / Cadence**: Triggered During Client Onboarding  
> **Last Reviewed**: 2026-09-17

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Implement and verify reliable conversion tracking and deterministic attribution matching across web, eCommerce, and mobile endpoints.
- **Definition of Done**: Pixel or server-to-server (S2S) connection installed, firing properly, receiving test transactions, and recording events in the conversions processor.

---

## 2. Key Measurables (KPIs)
* **Pixel Verification Success Rate**: 100% of live campaigns verified prior to first bid.
* **Attribution Latency**: Conversion events processed and attributed within 15 minutes.

---

## 3. Implementation Methods

### 1. Audiohook JavaScript Web Pixel
* Standard snippet installed in `<head>` or via Google Tag Manager (GTM).
* Tracks: PageViews, Add to Cart, Initiate Checkout, and Purchases.
* Required variables on Purchase: `order_id`, `revenue`, `currency`.

### 2. Shopify S2S App
* One-click installation via Audiohook Shopify App.
* Captures server-side checkout webhooks directly, bypassing client-side ad-blockers and iOS privacy restrictions.

### 3. Server-to-Server (S2S) Webhook Integration
* For custom platforms or Mobile Measurement Partners (AppsFlyer, Adjust, Kochava, Branch).
* Postback URL structure: `https://events.audiohook.com/conversion?advertiser_id={ID}&event_type=purchase&value={VAL}`.

---

## 4. Verification & QA Steps
1. Perform test checkout or page visit with debug query string (`?ah_debug=true`).
2. Verify event in browser Network tab (HTTP 200/204 to `events.audiohook.com`).
3. Check internal backend logs to confirm IP address and user-agent matching logic are functioning.
4. Mark tracking as "Verified" in DSP.

---

## 5. Related Links
* [Campaign Setup](./campaign-setup.md)
* [Campaign QA Checklist](./qa.md)
* [Client Onboarding](../04-customer-success/client-onboarding.md)
* [Asana Sales → Onboarding → Launch Workflow](../09-sop-library/how-to/asana-sales-onboarding-launch.md)
