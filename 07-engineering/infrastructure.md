# Infrastructure & Reliability

> **Department / Section**: 07-engineering  
> **Process Owner (Accountability Seat)**: Head of Engineering / Cloud Infrastructure Lead  
> **Target Audience (Who Follows It)**: Engineers, DevOps  
> **Trigger / Cadence**: Continuous Monitoring; Reviewed Monthly  
> **Last Reviewed**: 2026-09-17

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Maintain 99.9% uptime, sub-20ms bid response times, and robust cloud data infrastructure capable of handling millions of programmatic audio events per hour.
- **Definition of Done**: All systems monitored with automated alerting, infrastructure defined as code (Terraform), and SLOs actively met.

---

## 2. Key Measurables (KPIs)
* **DSP Availability**: >= 99.95% monthly uptime.
* **Bid Response Latency (p99)**: <= 25ms.
* **Event Ingestion Latency (p95)**: <= 5 seconds from edge to database.

---

## 3. Core Infrastructure Architecture

* **Edge / CDN**: Cloudflare (SSL termination, DDoS protection, static assets, workers).
* **Compute**: AWS ECS / EKS (containerized FastAPI microservices and background workers).
* **Data Storage**:
  * **Redis / Dragonfly**: High-speed distributed caching and budget tracking.
  * **PostgreSQL (RDS)**: Core transactional data (users, campaigns, line items, billing).
  * **ClickHouse**: High-throughput analytics engine for event streams and conversion matching.
  * **Kafka / Kinesis**: Distributed event messaging queue.
* **Secrets Management**: AWS Secrets Manager and 1Password.

---

## 4. Monitoring & Alerting Principles
1. **Alert on Symptoms, Not Causes**: Alert on customer impact (e.g. HTTP 500 spike, drop in bid responses) rather than CPU utilization alone.
2. **Actionable Alerts**: If an alert fires at 2:00 AM, there must be a specific runbook action for the on-call engineer to take. If no action is needed, it should be an email or Slack notification, not a page.

---

## 5. Related Links
* [System Architecture Overview](https://github.com/audiohook/engineering-handbook/blob/main/Architecture%20and%20Design/System%20Architecture%20Overview.md)
* [Monitoring Standards](https://github.com/audiohook/engineering-handbook/blob/main/Performance%20and%20Reliability/Monitoring%20and%20Alerting%20Standards.md)
