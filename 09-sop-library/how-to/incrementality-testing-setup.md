# How To: Incrementality Testing Setup

> **Department / Section**: 09-sop-library / how-to  
> **Supports**: [Client Onboarding](../../04-customer-success/client-onboarding.md)  
> **Owner**: Client Success Engineer  
> **Last Reviewed**: 2026-10-14

Incrementality Testing setup has two source tabs in the [Asana Operating Model](https://docs.google.com/document/d/1No1SQLkH1yOyvvDE351ZJykgW3_cPy6qirmiFNOA-pI/edit). Those tabs are the full how-to. This page is the path a CSM and CSE follow during onboarding.

Phase 1 GEOs are the treatment states for the initial campaign. Audiohook advertising runs only in those states until Incrementality Testing ends.

---

## Phase 1 GEO determination

Full tab: [Audiohook Phase 1 GEO Determination Process](https://docs.google.com/document/d/1No1SQLkH1yOyvvDE351ZJykgW3_cPy6qirmiFNOA-pI/edit?tab=t.sc2ikmn9l3xn) (last updated 2026-09-22).

The CSE owns the analysis. Leadership selects the test. The SAE records the chosen states in the parent task's **Phase 1 GEOs** field.

1. The process starts when the Sales parent task moves to **Proposal Building**. Asana creates a **Generate Phase 1 GEOs** subtask for the CSE.
2. Review the parent task before pulling data: brand, site-visit and conversion volume, and the GA4 account, property, and conversion name the SAE already recorded. The GeoLift event must be the billable conversion. If that event is missing, stop and resolve it.
3. Current historical source is **GA4**, through the GA4 Explorer Replit App. Confirm volume and consistency, then use **GeoLift Export** and download the CSV. Shopify clients prepare history with the section below first. A future Shopify integration may replace GA4 for those clients.
4. In GeoLift Studio, create or open the client, upload the file, and approve it only after locations, dates, outcomes, and geography look right. Drop geographies the test is not meant to include.
5. Run market selection with the standard starting settings: treatment durations of 21, 45, and 60 days; effect size from -0.2 to 0.2 in steps of 0.05. Do not change those for the first run without a specific reason.
6. Judge results in this order: **Model Fit**, then **Correlation**, then **Minimum Detectable Effect**. A poor model fit is not saved by a low MDE. Correlation below about 70% is a concern. Prefer MDE below about 10%. About 12% or higher is generally too high unless there is a strong reason, and MDE has to be realistic for the size of the client's baseline. If daily data is sparse, rerun with **Weekly Rollup** before widening the effect-size range. Prefer the shorter viable test.
7. Send Leadership and the SAE the recommended options. After Leadership selects one, save that test in GeoLift Studio. The SAE writes the treatment states into **Phase 1 GEOs**. Campaign setup uses those states at launch.

## Shopify sales data preparation

Use this when the advertiser is on Shopify, Audiohook is preparing the first geographic incrementality test, and Shopify permissions are in place. Complete it before the test configuration is finalized.

Full tab: [SOP: Shopify Sales Data Preparation for Incrementality Test Setup](https://docs.google.com/document/d/1No1SQLkH1yOyvvDE351ZJykgW3_cPy6qirmiFNOA-pI/edit?tab=t.vnuxz2l48bid).

This prepares the file. It does not replace Phase 1 GEO determination.

1. In the advertiser's Shopify Admin, open **Analytics → Reports** and the editor that accepts ShopifyQL.
2. Run this query:

```
FROM sales
SHOW orders, total_sales
GROUP BY billing_region, billing_country, month
WITH GROUP_TOTALS, TOTALS
SINCE startOfDay(-365d) UNTIL today
ORDER BY
  orders__billing_region_totals DESC,
  orders__billing_region_billing_country_totals DESC,
  orders DESC,
  billing_region ASC,
  billing_country ASC,
  month ASC
VISUALIZE orders
MAX 100
```

`MAX 100` can truncate the result. Confirm the export includes every geography and month the test needs before using it.

3. Export all results as CSV and keep the original file.
4. Clean it to exactly three columns: `state`, `date`, and `count`. `count` is either orders or total sales for the whole file, never both. Remove other countries if the test is U.S.-only, remove subtotal and grand-total rows, and do not invent missing months or fill gaps with zero.
5. Save it as `[Client]_Shopify_Incrementality_[Orders_or_Revenue]_[ExportDate].csv`, then hand it to the existing Incrementality Test Setup process.

Escalate to the Client Success Engineering owner if Shopify access is insufficient, the query will not run, the export is truncated, billing regions cannot be trusted, or the history is too thin to configure a test. Do not finalize a test on a file known to be incomplete.

---

## Related
* [Client Onboarding](../../04-customer-success/client-onboarding.md)
* [Take-Live Readiness](../checklists/take-live-readiness.md)
* [Asana Operating Model](./asana-operating-model.md)
