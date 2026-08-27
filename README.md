# ShipmentGuard Insights

Create a polished, realistic frontend-only SaaS demo called ShipmentGuard for Bangladesh garment factories.

The product is a Garments Order Follow-up + Shipment Delay Risk Control Tower.

IMPORTANT:

This is a demo, not a full ERP.

Build the complete usable demo in ONE implementation.

Do NOT add authentication.

Do NOT add Supabase or any backend.

Do NOT require API keys.

Use realistic hardcoded/mock garment factory data.

Keep everything functional using frontend state.

Prioritize visual quality and business-demo readiness.

Desktop-first, but responsive.

Do not overbuild.

Main goal

A factory manager should immediately understand:

“Which garment orders may miss shipment, why they are at risk, how much buffer remains, and who needs to act today?”

The UI should feel like a modern B2B operations dashboard, not a generic admin template.

1. Main Dashboard

Create a sidebar with:

Overview

Orders

Critical Actions

T&A

Reports

Header:
ShipmentGuard
Subtitle:
Order Follow-up & Shipment Risk Control Tower

Top KPI cards:

Active Orders: 24

At Risk: 5

Critical Actions Today: 8

On-Time Shipment Forecast: 87%

Show a prominent section:

Orders Requiring Attention

Display 5 order cards or table rows.

Columns:

PO

Buyer

Style

Quantity

Ex-Factory

Merchandiser

Shipment Risk

Buffer

Main Blocker

Use realistic examples:

PO-456

Buyer: H&M
Style: HM-1024
Qty: 18,500 pcs
Ex-Factory: 05 Oct
Merchandiser: Rahim
Risk: RED
Buffer: 3 days
Blocker: Fabric delayed

PO-231

Buyer: Zara
Style: ZR-804
Qty: 12,000 pcs
Ex-Factory: 12 Oct
Risk: YELLOW
Buffer: 6 days
Blocker: Trims incomplete

PO-117

Buyer: C&A
Style: CA-441
Qty: 22,400 pcs
Ex-Factory: 18 Oct
Risk: GREEN
Buffer: 11 days
Blocker: None

Add 2 more realistic orders.

Use clear risk badges:

Green = On Track

Yellow = Attention

Red = Shipment Risk

2. Shipment Risk Detail

When the user clicks PO-456, open an order detail view or side panel.

At the top show:

PO-456 — Shipment Risk

Buyer: H&M
Style: HM-1024
Quantity: 18,500 pcs
Ex-Factory: 05 October
Current Shipment Confidence: 54% — HIGH RISK
Remaining Buffer: 3 Days

Create a highlighted warning box:

Why is this order at risk?

“Fabric was expected in-house on 12 September but has not been fully received. Cutting must begin by 16 September to maintain the planned shipment date. Only 3 days of recovery buffer remain.”

Then show:

Recommended Actions Today

Procurement — Confirm revised fabric arrival time

Planning — Reserve alternative cutting capacity

Merchandising — Escalate delay and prepare recovery plan

Management — Review if air shipment exposure is increasing

3. T&A Milestone Timeline

For PO-456 show a visual Time & Action timeline.

Milestones:

MilestoneOwnerDueStatusPO ReceivedMerchandising02 SepDoneFabric BookingProcurement04 SepDonePP Sample ApprovedQA / Merchandising10 SepDoneFabric In-HouseStore12 SepDelayedTrims CompleteStore14 SepPendingCutting StartProduction16 SepBlockedSewing StartProduction18 SepBlockedFinal InspectionQA02 OctNot StartedEx-FactoryCommercial05 OctAt Risk

Make dependencies visually understandable.

Highlight:

Fabric In-House → Cutting → Sewing → Inspection → Shipment

A delay in an upstream milestone should visually indicate that downstream activities are affected.

4. Critical Actions Page

Create a page called:

Today's Critical Actions

Show action cards with:

Priority
PO
Issue
Responsible Department
Deadline
Action

Examples:

CRITICAL

PO-456
Fabric not received
Procurement
Today
Confirm fabric ETA

HIGH

PO-231
Trims only 80% received
Store
Today
Complete remaining trims

HIGH

PO-782
PP approval pending
Merchandising / QA
Tomorrow
Escalate buyer approval

Add several realistic examples.

Allow filtering by:

All

Procurement

Merchandising

Production

QA

Commercial

Filters only need frontend interaction.

5. Order List

Create an Orders page with a professional table.

Columns:

PO

Buyer

Style

Quantity

Merchandiser

Ex-Factory

Current Stage

Risk

Buffer Days

Action

Include approximately 12 realistic mock orders.

Add filters for:

Buyer

Risk

Merchandiser

Add search by PO/style.

No backend required.

6. Management Insights

On the dashboard include three compact visual sections.

Buyer-wise Delivery Risk

H&M — 2 at risk
Zara — 1 at risk
C&A — 0 at risk
M&S — 2 at risk

Main Causes of Delay

Fabric — 40%

Trims — 25%

Buyer Approval — 15%

Production — 12%

Inspection — 8%

Merchandiser Pending Actions

Rahim — 4

Nusrat — 3

Fahim — 2

Tania — 1

Simple charts are enough.

7. Daily Digest Preview

Add a panel showing how the daily WhatsApp/email summary would look.

Title:

Daily Risk Digest — 15 September

3 Orders at Shipment Risk

🔴 PO-456 — Fabric delayed — 3-day buffer
🔴 PO-672 — Sewing behind target — 2-day buffer
🔴 PO-901 — Inspection not booked — 4-day buffer

8 Critical Actions Today

Confirm fabric ETA — Procurement

Complete trims — Store

Escalate PP approval — Merchandising

Reserve cutting capacity — Planning

Add buttons:

Send Email Digest
Send WhatsApp Digest

Buttons should only show a demo success notification such as:

“Demo digest sent successfully.”

Do not integrate real email or WhatsApp APIs.

8. Add Order Demo

Include an Add Order button.

Clicking it should open a modal with:

PO Number

Buyer

Style

Quantity

FOB Value

Merchandiser

Ex-Factory Date

Submitting should add the order to frontend state.

Also show:

Import Excel

Clicking it should open a small modal saying:

“Upload your existing order Excel file. Demo mode: sample data will be imported.”

Include a Load Sample Excel Data button that adds or displays sample orders.

No actual Excel parser is required.

Design Direction

Use a professional garment/manufacturing SaaS visual identity.

Style:

clean

modern

serious

operations-focused

premium B2B SaaS

high information density without clutter

Use a light neutral background.

Use red/yellow/green mainly for risk status.

Cards should have subtle borders and shadows.

Use good typography and whitespace.

Sidebar should look professional.

Avoid excessive gradients, oversized headings, decorative illustrations, and generic landing-page sections.

This should feel like software a garment factory General Manager could actually use.

Use icons where helpful.

Demo Story

The most important story in the demo must be:

Fabric delay → Cutting blocked → Shipment risk

PO-456 should clearly demonstrate this dependency.

The user should be able to open PO-456 and immediately understand:

What is delayed

What downstream milestones are affected

Ex-factory date at risk

Remaining buffer days

Responsible departments

Actions required today

This dependency-based explanation is the main differentiator of the product.

Technical Requirements

Use the existing Lovable default stack.

Keep components clean and reusable.

Use mock data in the frontend.

All buttons, filters, modal interactions, navigation, and order-detail interactions should work.

Do not build unnecessary backend infrastructure.

Do not add login/signup.

Do not ask me follow-up questions.

Make reasonable product decisions yourself and deliver the complete demo.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5f3c3b30-bf6b-4b58-b714-2fb91ffc9c86).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
