# Deployments & Rollbacks

> **Department / Section**: 07-engineering  
> **Process Owner (Accountability Seat)**: Head of Engineering / DevOps Lead  
> **Target Audience (Who Follows It)**: All Engineers Deploying to Production  
> **Trigger / Cadence**: Daily Continuous Delivery  
> **Last Reviewed**: 2026-09-17

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Deploy production software safely, frequently, and with zero customer disruption or unexpected downtime.
- **Definition of Done**: Code built via automated CI/CD, passed automated smoke tests, deployed with rolling updates, and verified in production metrics.

---

## 2. Key Measurables (KPIs)
* **Deployment Frequency**: Multiple deployments per day during business hours.
* **Rollback Execution Time**: Rollback initiated and complete within 5 minutes of anomaly detection.
* **Change Failure Rate**: < 1% of deploys require rollback.

---

## 3. Core Deployment Flow (The 20/80 Flow)

1. **Automated CI Build**: On PR merge to `main`, GitHub Actions triggers automated container build, security scans, and test suite execution.
2. **Deploy to Staging**: Container deployed to staging environment; automated smoke tests verify health endpoints (`/healthz`).
3. **Production Rollout**:
   * Kubernetes/ECS rolling deploy updates pods/tasks incrementally.
   * Zero-downtime database migrations (always backward-compatible).
4. **Post-Deploy Sanity Check (10 mins)**:
   * Engineer observes Datadog / CloudWatch dashboards (HTTP 5xx rates, latency p95/p99, queue backlogs).
   * Post deploy confirmation in Slack `#releases`.

---

## 4. Emergency Rollback Procedure
If error rates spike or data corruption is suspected:
1. **Trigger Rollback**: In GitHub Actions or AWS/DevOps console, trigger the "Rollback to Previous Image" action.
2. **Notify Team**: Post in `#dev` and `#ops` immediately: *"Rolling back [service-name] to [previous-version] due to [reason]."*
3. **Freeze Deploys**: Lock deployment pipeline until root cause is identified and patched.

---

## 5. Related Links
* [Development Lifecycle](./development-process.md)
* [Incident Response](./incidents.md)
* [Rollback Procedures](https://github.com/audiohook/engineering-handbook/blob/main/Deployment%20and%20Releases/Rollback%20Procedures.md)
