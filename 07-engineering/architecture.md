# Architecture & ADR Process

> **Department / Section**: 07-engineering  
> **Process Owner (Accountability Seat)**: Head of Engineering / Principal Architect  
> **Target Audience (Who Follows It)**: All Engineers  
> **Trigger / Cadence**: Triggered Before Introducing New Services, Databases, or Major Tech Choices  
> **Last Reviewed**: 2026-10-14

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Maintain an understandable, resilient, and cost-effective distributed architecture and record key architectural tradeoffs so decisions outlast individual contributors.
- **Definition of Done**: Architecture Decision Record (ADR) written, reviewed with the engineering team, approved, and merged into the repo.

---

## 2. Key Measurables (KPIs)
* **ADR Review Turnaround**: Proposed ADRs reviewed and decided within 5 business days.
* **Architecture Consistency**: Zero unvetted data stores or third-party cloud services introduced to production.

---

## 3. Core Architectural Map

Audiohook v3 runs real-time bidding and event processing as three walled services (`bidder`, `processor`, `scheduler`) in the `audiohook-v3` monorepo. Compute runs on Cycle/Vultr, and Cloudflare handles ingress:

<div style="width: 100%; max-width: 640px; aspect-ratio: 4 / 3; margin: 10px 0; position: relative;"><iframe allowfullscreen frameborder="0" style="width: 100%; height: 100%;" src="https://lucid.app/documents/embedded/29961244-276c-4d46-9ad5-4f6325c41c40" id="2mhDsQ4hC8GM" title="Audiohook v3 architecture diagram"></iframe></div>

---

## 4. The ADR Process (The 20/80 Flow)

1. **Trigger**: An engineer proposes a new database, external SaaS dependency, new microservice, or breaking API pattern.
2. **Draft**: Create a new ADR using the standard template:
   * **Context**: What problem are we solving?
   * **Decision**: What choice are we making?
   * **Alternatives Considered**: Why did we reject options A, B, and C?
   * **Consequences**: What technical debt or operational tradeoffs are we accepting?
3. **Team Review**: Share in `#dev` and discuss in the weekly engineering architecture sync.
4. **Approval & Merge**: Tech Lead approves; ADR is committed to the repository.

---

## 5. Related Links
* [System Architecture Overview](https://github.com/audiohook/engineering-handbook/blob/main/Architecture%20and%20Design/System%20Architecture%20Overview.md)
* [ADR Template](https://github.com/audiohook/engineering-handbook/blob/main/Architecture%20and%20Design/Architecture%20Decision%20Records/ADR%20Template.md)
