# Incident Response & On-Call

> **Department / Section**: 07-engineering  
> **Process Owner (Accountability Seat)**: Head of Engineering  
> **Target Audience (Who Follows It)**: On-Call Engineers, Engineering Leadership, CS  
> **Trigger / Cadence**: Triggered on Production Service Degradation or Outage  
> **Last Reviewed**: 2026-09-17

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Restore service operation as rapidly as possible, communicate transparently with internal and external stakeholders, and learn from every failure.
- **Definition of Done**: Incident triaged, mitigated, post-incident review completed, and blameless post-mortem published within 48 hours.

---

## 2. Key Measurables (KPIs)
* **Mean Time to Acknowledge (MTTA)**: < 5 minutes for S1 incidents.
* **Mean Time to Resolve (MTTR)**: < 30 minutes for S1 incidents.
* **Post-Mortem Completion SLA**: 100% of S1 and S2 incidents have a completed post-mortem within 48 hours.

---

## 3. Incident Severity Levels

| Severity | Definition | Response SLA | Paging & Comms |
| :--- | :--- | :--- | :--- |
| **S1 (Critical)** | Core DSP bidding down, revenue loss, data loss, total platform outage | < 5 mins | PagerDuty pages primary & secondary; immediate executive notification |
| **S2 (Major)** | Major feature unavailable (e.g. reporting delayed, UI inaccessible), no data loss | < 15 mins | PagerDuty alerts on-call; Slack update in `#incidents` |
| **S3 (Minor)** | Degraded performance, non-critical service down with workaround | < 2 hours | Monitored during business hours |
| **S4 (Low)** | Minor bug, cosmetic issue | Next sprint | Handled via standard Linear backlog |

---

## 4. Core Response Flow (The 20/80 Flow)

1. **Acknowledge & Declare**: On-call engineer acknowledges page and declares incident in Slack `#incidents`.
2. **Establish Incident Commander (IC)**: Primary on-call assumes IC role, coordinating diagnostics and delegating tasks.
3. **Mitigate First, Investigate Later**: Focus 100% on restoring service (rollback deploy, scale instances, toggle feature flag).
4. **Stakeholder Communication**: Post updates in `#incidents` every 15 minutes for S1, every 30 minutes for S2.
5. **Resolve & Document**: Mark incident resolved; capture incident timeline.
6. **Blameless Post-Mortem**: Author post-mortem focusing on systemic improvements rather than human error.

---

## 5. Related Links
* [Severity Definitions](https://github.com/audiohook/engineering-handbook/blob/main/Incident%20Management/Severity%20Definitions.md)
* [Post-Mortem Template](https://github.com/audiohook/engineering-handbook/blob/main/Incident%20Management/Post-Mortem%20Template.md)
