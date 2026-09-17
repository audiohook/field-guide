# Release Process

> **Department / Section**: 06-product (Collaborative with 07-engineering)  
> **Process Owner (Accountability Seat)**: Head of Product / Head of Engineering  
> **Target Audience (Who Follows It)**: Product Managers, Engineers, CS, Sales  
> **Trigger / Cadence**: Triggered on Every Production Feature Release  
> **Last Reviewed**: 2026-09-17

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Coordinate the safe technical deployment, internal team enablement, customer communication, and rollout of new product features.
- **Definition of Done**: Feature deployed behind feature flag, verified in production, internal teams trained, and external changelog / customer announcement published.

---

## 2. Key Measurables (KPIs)
* **Release Success Rate**: 100% of releases deployed without rollbacks or unexpected downtime.
* **Enablement Timing**: Sales and CS briefed >= 24 hours prior to public customer-facing releases.

---

## 3. The 4-Stage Release Lifecycle (The 20/80 Flow)

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│ 1. Readiness │ ──> │ 2. Staged    │ ──> │ 3. Internal  │ ──> │ 4. General   │
│    Review    │     │    Rollout   │     │    Training  │     │    Release   │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

### Stage 1: Readiness Review (T-3 Days)
* Engineering passes Definition of Done in staging.
* Feature flag created in production environment.
* Documentation and help articles drafted.

### Stage 2: Dark Launch & Internal Staged Rollout (T-2 Days)
* Code deployed to production with feature flag enabled ONLY for Audiohook internal users.
* Team dogfoods the feature and validates real-world data flow.

### Stage 3: Internal Enablement & Comms (T-1 Day)
* Product posts 2-minute Loom walkthrough and release notes in `#announcements-internal`.
* Sales and CS verify client-facing messaging and FAQs.

### Stage 4: General Availability (GA) & Close the Loop (Day 0)
* Feature flag rolled out to 100% of customer accounts.
* Customer announcement published via newsletter / in-app modal / changelog.
* Complete [Customer Feedback Loop](./customer-feedback.md) by notifying users who originally requested the feature.

---

## 4. Exceptions & Rollback Triggers
* If production error rates spike or data corruption occurs, immediately flip the feature flag to `false` and follow [Deployments & Rollbacks](../07-engineering/deployments.md).

---

## 5. Related Links
* [Engineering Deployments](../07-engineering/deployments.md)
* [Customer Feedback Loop](./customer-feedback.md)
* [Incident Response](../07-engineering/incidents.md)
