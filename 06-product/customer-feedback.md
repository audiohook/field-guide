# Customer Feedback Loop

> **Department / Section**: 06-product  
> **Process Owner (Accountability Seat)**: Head of Product  
> **Target Audience (Who Follows It)**: Product, Customer Success, Sales, Support  
> **Trigger / Cadence**: Continuous Intake; Triaged Weekly  
> **Last Reviewed**: 2026-09-17

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Systematically capture user feedback, pain points, and feature requests from client conversations, synthesize them into actionable insights, and close the loop with clients when solutions ship.
- **Definition of Done**: Feedback is tagged in Linear with customer metadata, triaged weekly by Product, and customers are notified upon feature release.

---

## 2. Key Measurables (KPIs)
* **Feedback Triage SLA**: 100% of newly logged feedback tickets reviewed and triaged within 7 days.
* **Loop-Closing Rate**: 100% of customers who requested a feature receive a personalized notification when it ships.

---

## 3. Core Steps (The 20/80 Flow)

```
[Customer Request / Pain Point]
             │
             ▼
1. Log in Linear (Customer Need tagged)
             │
             ▼
2. Weekly Product Triage & Cluster Analysis
             │
             ▼
3. Prioritization into Roadmap (Now / Next)
             │
             ▼
4. Engineering Ships Feature
             │
             ▼
5. Close the Loop (Automated / CSM email to Client)
```

1. **Capture & Tag (Sales & CS)**:
   * When a client expresses a workflow frustration or feature request, create a Linear Customer Need or link it to an existing issue.
   * Include: Client name, monthly spend tier, and the underlying *problem* (not just the requested solution).
2. **Weekly Product Triage**:
   * Product reviews new submissions weekly. Submissions are clustered by theme (e.g., Reporting, Bidding, Creative Management).
3. **Problem Discovery**:
   * If a problem cluster reaches high frequency or affects high-value ICP clients, Product schedules 15-minute discovery calls with requesting clients.
4. **Promotion to Roadmap**:
   * Validated problems are drafted into PRDs and prioritized into the [Roadmap (Now & Next)](./roadmap.md).
5. **Close the Loop**:
   * When an issue is released to production, Product notifies the originating CSM / AE with release notes so they can reach back out to the customer.

---

## 4. Exceptions & Escalations
* Churn threats tied directly to missing functionality: CSM tags ticket as `churn-risk` and flags Head of Product directly in Slack.

---

## 5. Related Links
* [Roadmap](./roadmap.md)
* [Release Process](./release-process.md)
* [Escalations & At-Risk Accounts](../04-customer-success/escalations.md)
