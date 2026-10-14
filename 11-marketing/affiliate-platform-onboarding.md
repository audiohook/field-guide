# Affiliate Platform Onboarding

> **Department / Section**: 11-marketing  
> **Process Owner (Accountability Seat)**: Director of Affiliate Partnerships  
> **Target Audience (Who Follows It)**: Affiliate Partnerships, Engineering, Finance, Legal, Sales, Client Success, Marketing  
> **Trigger / Cadence**: A new affiliate platform is being evaluated, or an existing platform is being standardized  
> **Last Reviewed**: 2026-10-14

A platform is not live because an account or integration exists. It becomes operational only after three gates: platform approval, implementation plan approval, and launch readiness approval.

Full tab: [New Affiliate Platform Onboarding](https://docs.google.com/document/d/1No1SQLkH1yOyvvDE351ZJykgW3_cPy6qirmiFNOA-pI/edit?tab=t.pjkiop61do66).

The source does not name approval authorities, service-level deadlines, a risk-rating method, or the system of record for sign-offs. Assign those before treating this workflow as mandatory.

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Evaluate, approve, implement, test, and operationalize each affiliate platform the same way.
- **Definition of Done**: Gate 3 is recorded, and the platform playbook plus a reusable client onboarding checklist are published.

---

## 2. Key Measurables (KPIs)
* **Gate 1**: Each relevant department has recorded approved, approved with conditions, or not approved.
* **Gate 2**: The implementation plan has named owners, dependencies, and acceptance criteria before build starts.
* **Gate 3**: Technical and finance validation passed, and a formal go-live decision is recorded.

---

## 3. Core Steps

1. **Open intake** — Affiliate Partnerships (Noelle) sends the Affiliate Platform Questionnaire, identifies platform contacts, and requests technical and API documentation, agreements, and program information. In parallel, collect everything that platform requires from Audiohook to open the account. Record each item, the Audiohook owner, dependencies, and deadlines. Store the questionnaire and requirements register in the shared Drive.
2. **Technical and tracking discovery** — Affiliate Partnerships with Connor / technical team. Confirm universal tag availability, client-side versus server-side data, UT cost, timeline, adoption, API capabilities, conversion submission, real-time versus batch, backfill, sandbox, reporting granularity, exports, and time zone. Separate what the platform can do from what each advertiser has actually implemented.
3. **Finance and payment discovery** — Affiliate Partnerships with Finance (Patrick). Capture advertiser payment terms, brand-specific term visibility, lock timing, invoicing, advertiser funding, publisher payment and withdrawal timing, billing contacts, reporting access, historical adjustments, and reconciliation. Map conversion to cash.
4. **Legal and partnership discovery** — Affiliate Partnerships with Legal and Marketing. Collect MSA, DPA, and SOC 2 information where available. Review reversal, denial, locking, and other terms against Audiohook requirements. Record co-marketing, events, lead lists, managed services, and client education opportunities.
5. **Cross-functional review** — Share the profile and open questions with Engineering, Product, Finance/Accounting, Legal, Sales/Revenue, Client Success, and Marketing as applicable.
6. **Gate 1: platform approval** — Department leads decide approved, approved with conditions, or not approved. Resolve blocking gaps before implementation is authorized.
7. **Build the implementation plan** — Task-level plan for technical build, legal agreements, platform profile and publisher account, finance access and reconciliation, program terms, advertiser setup instructions, reporting, and testing. Every task has a named owner.
8. **Gate 2: implementation plan approval** — Engineering, Finance, Legal, Revenue, and participating teams confirm ownership, sequence, and acceptance criteria. Conceptual approval is not permission to build.
9. **Execute setup** — Connor / Engineering, Finance, Legal, and Affiliate Partnerships configure integrations, conversion passback, reporting, access, terms, and advertiser tracking branches (affiliate only, direct only, or direct plus affiliate reporting).
10. **Validate end to end** — Test inbound conversion coverage and required fields, outbound attributed conversion uploads, jobs, backfill, timestamps, and exports. Finance tests conversion-level reconciliation, lock, invoice, and payment visibility, and access.
11. **Gate 3: launch readiness** — Testing passes, program terms are in place, payment and reconciliation are workable, owners have access, and client-facing instructions are ready.
12. **Publish the playbook and hand off** — Affiliate Partnerships, Sales, and Client Success store the platform profile, legal terms, payment timeline, reporting instructions, technical configuration, tracking branches, contacts, reconciliation, and escalation owners. Advertiser setup uses a template of unique identifiers, required settings, prohibited settings, and program terms, then confirmation that the advertiser configuration was verified.

For a platform that is already live, run the same questionnaire, review, and validation. Document and verify the current configuration. Rebuild it only where a gap requires a change.

---

## 4. Who owns what

| Function | Owns |
| :--- | :--- |
| Affiliate Partnerships / Noelle | Partner relationship, questionnaire, shared documentation, project plan, and follow-through |
| Connor / Technical | Tracking setup, data connections, conversion passback, and testing |
| Ryan / Engineering | APIs, production integrations, or automation, when those must be built |
| Finance / Patrick | Payment flow, access, reporting, and reconciliation requirements |
| Legal | Agreements, DPA/MSA, locking, reversals, and addenda |
| Sales / Revenue | Qualification, program terms, contracting, and handoff usability |
| Client Success | Repeatable advertiser setup and post-sale instructions |
| Marketing | Partner promotions, education, events, and co-marketing |

---

## 5. Related Links
* [New Affiliate Platform Onboarding](https://docs.google.com/document/d/1No1SQLkH1yOyvvDE351ZJykgW3_cPy6qirmiFNOA-pI/edit?tab=t.pjkiop61do66)
* [Asana Operating Model](../09-sop-library/how-to/asana-operating-model.md)
* [Client Onboarding](../04-customer-success/client-onboarding.md)
