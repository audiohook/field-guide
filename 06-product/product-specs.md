# Product Specs (PRDs)

> **Department / Section**: 06-product  
> **Process Owner (Accountability Seat)**: Head of Product  
> **Target Audience (Who Follows It)**: Product Managers, Tech Leads, Designers  
> **Trigger / Cadence**: Triggered Before Any Engineering Work Begins on a Project  
> **Last Reviewed**: 2026-09-17

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Define the problem, business goals, user stories, and acceptance criteria clearly before engineers write code, preventing rework and scope creep.
- **Definition of Done**: PRD approved by Product, Tech Lead, and Design, with clear Definition of Done and signed-off UX wireframes.

---

## 2. Key Measurables (KPIs)
* **Spec Clarity Score**: Zero blockers during engineering sprint due to undefined requirements.
* **Scope Creep Rate**: < 10% scope expansion after PRD sign-off.

---

## 3. Standard PRD Template (The 20/80 Flow)

Every project specification in Linear / GitHub must include:

### 1. Problem Statement & Context
* *What customer or business pain does this solve?*
* *What evidence or data proves this is a real problem?*

### 2. Goals & Non-Goals
* **Goals**: The specific outcomes this feature must achieve.
* **Non-Goals (Crucial)**: Explicitly listing what we are NOT building in this version.

### 3. User Stories & Core Workflows
* *As a [user persona], I want to [action] so that [business value].*
* Step-by-step description of the user journey.

### 4. Technical Constraints & Security Considerations
* Data schemas, API endpoints, rate limits, and latency requirements.
* Reference [Building Production Tools with AI](../01-company/building-production-tools-with-ai.md) if AI models or external LLMs are utilized.

### 5. Acceptance Criteria
* Testable bullet points required for the feature to be marked complete.

---

## 4. Review & Sign-Off Process
1. **Author Draft**: PM drafts PRD and links wireframes.
2. **Architecture Review**: Tech Lead reviews feasibility, data models, and edge cases.
3. **Sign-Off**: Both PM and Tech Lead approve before breaking into Linear execution issues.

---

## 5. Related Links
* [Roadmap](./roadmap.md)
* [Release Process](./release-process.md)
* [Engineering Development Process](../07-engineering/development-process.md)
