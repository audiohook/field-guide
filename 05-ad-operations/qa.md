# Campaign QA Checklist

> **Department / Section**: 05-ad-operations  
> **Process Owner (Accountability Seat)**: Head of Ad Operations  
> **Target Audience (Who Follows It)**: Ad Ops Specialists, Peer Reviewers  
> **Trigger / Cadence**: Mandatory Before ANY Line Item is Activated in DSP  
> **Last Reviewed**: 2026-09-17

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Prevent costly pacing errors, incorrect targeting, broken URLs, and missed revenue by enforcing a strict peer QA review prior to launch.
- **Definition of Done**: 10-point checklist verified and signed off by a second team member (Peer QA).

---

## 2. Key Measurables (KPIs)
* **Zero Launch Incidents**: 0 critical launch errors (e.g. overspending, wrong flight dates, dead click URLs).
* **QA Sign-off Compliance**: 100% of live campaigns have documented peer sign-off.

---

## 3. Pre-Flight 10-Point Checklist

Every campaign must clear this checklist before activation:

- [ ] **1. Flight Dates**: Start and end dates match the signed IO exactly (check timezone!).
- [ ] **2. Lifetime & Daily Caps**: Lifetime budget is hard-capped; daily spend cap is set to prevent runaway burn.
- [ ] **3. Pacing Type**: Set correctly (Even pacing vs. ASAP/Front-loaded).
- [ ] **4. Geographic Targeting**: Target country/states/DMAs match IO; exclude unintended regions.
- [ ] **5. Inventory & Supply**: Appropriate supply exchanges selected; category blacklists applied.
- [ ] **6. Creative Durations & Specs**: Audio file matches flight specifications (15s/30s/60s) with clean audio.
- [ ] **7. Click URL & UTMs**: Click-through URL tested in incognito window; lands on correct HTTPS page with valid UTM parameters.
- [ ] **8. Tracking Pixel**: Pixel status confirmed active and firing recent events in dashboard.
- [ ] **9. Max Bid Ceilings**: Bid floors and ceilings set to protect gross margins.
- [ ] **10. Peer Sign-Off**: Second pair of eyes has reviewed and approved the configuration in Linear.

---

## 4. Exceptions & Escalations
* If any single item fails or is questionable, do NOT activate the campaign. Notify the trafficking specialist immediately to remediate.

---

## 5. Related Links
* [Campaign Setup & Trafficking](./campaign-setup.md)
* [Operational Troubleshooting](./troubleshooting.md)
