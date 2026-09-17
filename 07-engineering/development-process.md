# Development Lifecycle & Definition of Done

> **Department / Section**: 07-engineering  
> **Process Owner (Accountability Seat)**: Head of Engineering  
> **Target Audience (Who Follows It)**: Software Engineers, QA, Product Managers  
> **Trigger / Cadence**: Triggered on Every Engineering Issue  
> **Last Reviewed**: 2026-09-17

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Ship clean, high-performance software rapidly while maintaining strict standards for reliability, test coverage, and security.
- **Definition of Done**: Code passes CI, tested in staging, reviewed by a peer, documented, merged to `main`, and deployed to production.

---

## 2. Key Measurables (KPIs)
* **PR Review SLA**: PRs reviewed within 24 hours of submission.
* **Build Success Rate**: >= 95% green CI pipeline builds.
* **Escaped Defect Rate**: < 2% of merged features causing production bug tickets.

---

## 3. Core Steps (The 20/80 Flow)

```
[Linear Issue Assigned] ──> [Feature Branch] ──> [PR & CI Automated Tests]
                                                          │
[Production Deployment] <── [Staging Verify] <── [Peer Review Approval]
```

1. **Issue Intake & Specification**:
   * Pick up issue in Linear. Ensure acceptance criteria and context are clear before writing code.
2. **Branching & Local Execution**:
   * Create branch prefixed by ticket ID: `git checkout -b ryan/dev-1234-feature-name`.
   * Adhere to the "3 C's of Code at Audiohook": Clear, Concise, Confident.
3. **Automated Testing & Linting**:
   * Run unit/integration tests locally. CI runs tests and linting automatically upon push.
4. **Pull Request & Code Review**:
   * Open PR on GitHub using standard PR template.
   * At least one peer review approval required.
5. **Staging Verification**:
   * Verify changes on the staging environment.
6. **Merge & Production Deploy**:
   * Merge PR (Squash and Merge). Deployment pipeline automatically rolls out changes.
   * Verify production logs and telemetry.

---

## 4. Exceptions & Escalations
* Emergency hotfixes bypassing normal review: Must be approved by Head of Engineering and post-facto reviewed within 24 hours.

---

## 5. Related Links
* [Deployments & Rollbacks](./deployments.md)
* [Engineering Principles & 3 C's](https://github.com/audiohook/engineering-handbook/blob/main/How%20We%20Work/The%203%20C's%20of%20Code%20at%20Audiohook.md)
