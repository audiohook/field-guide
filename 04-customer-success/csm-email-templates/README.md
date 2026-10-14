# CSM Email Template Library

Reusable email templates for the Client Success team. Each template lives in its own Markdown file under [`templates/`](templates/), grouped by topic.

## How to use

1. Find the template you need in the index below.
2. Copy everything below the `---` divider in the file.
3. Replace every `[Placeholder]` in square brackets before sending.

## Placeholder conventions

| Placeholder | Meaning |
|---|---|
| `[First Name]` / `[Client Name]` / `[Brand Rep]` | Recipient's name |
| `[Brand Name]` | Client brand |
| `[CSM]` | Your name / signature |
| `[X]`, `$[X]`, `[X]x` | Metric values (count, dollars, ROAS) |
| `[Option A / Option B]` | Pick one and delete the rest |
| `[Optional: ...]` | Include only if relevant |

## Template index

### Onboarding

| Template | When to use |
|---|---|
| [Kickoff Call Reminder](templates/01-onboarding/kickoff-call-reminder.md) | Client hasn't booked their Kick Off Call by the 3rd day after the scheduling link was sent. |

### Reporting

| Template | When to use |
|---|---|
| [Performance Update](templates/02-reporting/performance-update.md) | Recurring performance summary (weekly, biweekly, monthly, or quarterly depending on the client's needs). |

### Budget & Billing

| Template | When to use |
|---|---|
| [Budget Nearly Exhausted / Budget Increase Recommendation](templates/03-budget-and-billing/budget-cap-and-increase.md) | Campaign is nearing or has reached its monthly budget cap; recommend additional budget. |
| [Payment Failed — Affiliate](templates/03-budget-and-billing/payment-failed-affiliate.md) | Campaign paused because conversions can't be processed through the affiliate platform (insufficient funds / payment issue). |
| [Payment Failed — Credit Card / Net 30](templates/03-budget-and-billing/payment-failed-credit-card-net30.md) | Most recent payment failed and the campaign has been paused for billing. |

### Scaling

| Template | When to use |
|---|---|
| [Scaling / CPA Adjustment Recommendation](templates/04-scaling/cpa-adjustment-recommendation.md) | Strong performance and an opportunity to drive more volume by raising the CPA target. Include screenshots from the CPA Forecast Tool. |

### Campaign Status

| Template | When to use |
|---|---|
| [Campaign Pause Confirmation](templates/05-campaign-status/campaign-paused.md) | Confirm a campaign pause and remind the client of the 30-day attribution window. |
| [Campaign Unpaused Confirmation](templates/05-campaign-status/campaign-resumed.md) | Confirm a campaign is live again after a pause. |

### Incrementality & Tracking

| Template | When to use |
|---|---|
| [Conversion Data Request (Ongoing Incrementality)](templates/06-incrementality-and-tracking/conversion-data-request.md) | Request 150 days of conversion data plus weekly updates to measure incremental lift. |
| [Incrementality Test Kickoff](templates/06-incrementality-and-tracking/incrementality-test-kickoff.md) | Kick off an incrementality study and request the initial 150-day conversion file. |
| [GA4 Integration Request](templates/06-incrementality-and-tracking/ga4-integration-request.md) | Ask the client to connect a read-only GA4 integration in the Audiohook dashboard. |
| [New vs. Returning Customer Tracking](templates/06-incrementality-and-tracking/new-vs-returning-customer-tracking.md) | Tracking doesn't distinguish new from returning customers; loop in the Client Success Engineer to fix the implementation. |

### Affiliate

| Template | When to use |
|---|---|
| [Affiliate CPA / Commission Change](templates/07-affiliate/cpa-commission-change.md) | CPA change for a campaign running through an affiliate platform; the client must update it there first. |

### Creative

| Template | When to use |
|---|---|
| [Creative Refresh / Creative Strategy Session](templates/08-creative/creative-strategy-session.md) | About 30 days before each new quarter, invite the client to plan next quarter's creative. |

### Client Education

| Template | When to use |
|---|---|
| [Attribution Explanation](templates/09-client-education/attribution-explanation.md) | Client asks how Audiohook / Tuned™ attributes conversions. |

### Client Concerns

| Template | When to use |
|---|---|
| [Performance Concerns Response](templates/10-client-concerns/performance-concerns-volume.md) | Client raises performance concerns that are really about volume, not efficiency. |
| [Declining Unsupported Request — Promo Codes / Vanity URLs](templates/10-client-concerns/declining-promo-codes-vanity-urls.md) | Client asks to use a promo code or vanity URL in the creative. |

### Relationship

| Template | When to use |
|---|---|
| [Check-In with Inactive Client](templates/11-relationship/inactive-client-check-in.md) | It's been a while since you've spoken with a client. |

### Out Of Office

| Template | When to use |
|---|---|
| [Out of Office — Standard](templates/12-out-of-office/standard.md) | Full OOO with a backup CSM covering. |
| [Out of Office — Flex Time / Partial](templates/12-out-of-office/flex-time-partial.md) | Out of office but checking email intermittently. |
| [Out of Office — Not Reachable](templates/12-out-of-office/not-reachable.md) | Fully unavailable for a set date range. |

## Not templated

**Campaign Sync meeting recap** — every call is different, so download the call transcript from Clarify and use AI to generate the recap instead.

## Contributing

To add a template, create a new `.md` file in the matching `templates/` folder (or a new numbered folder), copy the front matter and layout from an existing template, and add a row to the index above.
