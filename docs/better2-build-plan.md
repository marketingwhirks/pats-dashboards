# Better2 Build Plan — Repo-Aligned Task List

This plan maps the Better2 briefing (`docs/better2-briefing.md`) onto **this repo** (`pats-dashboards`, served at `dashboards.patrickaccounting.com` via Azure Static Web Apps). It separates what belongs here from what belongs elsewhere, and orders the work to land before the July 26–28 Better Together firm visit.

---

## Repo Context (What's Already Here)

| File | Purpose | Current State |
|---|---|---|
| `index.html` | Automation Scorecard (PATS internal) | Live. Dual Strict/Broad scoring, 191 clients, 63,196 txns, Feb 2026 data. |
| `scorecard.html` | Scorecard variant | Live. Chart.js-driven. |
| `connections.html` | QBO Connections page | Live. Firm-side view of connection status. |
| `CNAME` | `dashboards.patrickaccounting.com` | Pointing to Azure SWA. |
| `staticwebapp.config.json` | SWA routing + security headers | Configured. SPA-style fallback to `index.html`. |

**Implication:** this repo is the *firm-side* dashboards surface. It is the natural home for everything in the briefing's **Firm View** (Section 7) and the **shareable client report link** (Sections 6, 7) — both are static HTML + JSON-fed.

It is **not** the home for: the QBO multi-tenant API, the firms/tokens table, Make.com scenarios, Qount webhook handling, or the categorization engine. Those are backend systems and live in separate repos / no-code platforms.

---

## In-Scope for This Repo

Anything that:
- Renders in a browser from static assets + JSON.
- Is read-only or near-read-only (the firm-side write surface for goals could live elsewhere and post via webhook).
- Serves either firm staff (`dashboards.patrickaccounting.com`) or end-clients (`better2.co/report/[token]` — same SWA, different domain mapping later).

| Surface | Audience | Path | Status |
|---|---|---|---|
| Automation Scorecard | PATS firm staff | `/` (index.html) | Live |
| QBO Connections | PATS firm staff | `/connections.html` | Live |
| Firm View (multi-client roster) | PATS firm staff | `/firm.html` *(new)* | Not built |
| Client Shareable Report | End client (no login) | `/report/[token]` *(new)* | Not built |
| Score Simulator | End client | embedded in report | Not built |

## Out-of-Scope for This Repo (Tracked Here for Reference Only)

| Workstream | Where It Lives | Owner |
|---|---|---|
| Firms table (`firm_id`, encrypted tokens, `realm_id`) | Backend DB (TBD — see Open Q on stack) | Matt + Cursor |
| Multi-tenant parameterization of existing PATS API | Existing PATS API repo | Matt + Cursor |
| Daily token refresh job | Same backend | Matt + Cursor |
| QBO Reports API integration (P&L / BS / CF) | Make.com or PATS API | Matt + Cursor |
| Qount Review 2 webhook handler | Make.com | Matt |
| Approve/reject categorization UI | Separate app (likely React) | Matt + Cursor |
| Client notification email | Make.com email module (TBD) | Matt |

---

## What This Repo Needs to Render (Data Contract)

All in-repo pages should be driven by JSON files (or fetches to a JSON endpoint). To keep this repo deployable as static and decoupled from the backend, define the shape of the JSON it consumes. Backend systems write into these shapes; this repo just renders.

### `client-report.json` (per client, per month)
Drives the shareable report link.

```json
{
  "client_id": "string",
  "firm_id": "string",
  "client_name": "string",
  "industry": "string",
  "revenue_band": "string",
  "period": { "month": "2026-04", "as_of": "2026-05-22T00:00:00Z" },
  "state": "ready | not_ready | stale",
  "score": { "value": 78, "grade": "B", "delta_vs_last_month": 4 },
  "score_components": {
    "gross_margin":   { "value": 0.42, "weight": 0.30 },
    "expense_ratio":  { "value": 0.58, "weight": 0.25 },
    "cash_days":      { "value": 47,   "weight": 0.20 },
    "books_health":   { "value": 0.91, "weight": 0.15 },
    "streak":         { "value": 6,    "weight": 0.10 }
  },
  "score_history": [{ "month": "2025-11", "value": 64 }, ...],
  "kpis": {
    "revenue":        { "value": 184000, "sparkline": [...] },
    "cash_on_hand":   { "value": 62000,  "sparkline": [...] },
    "gross_margin":   { "value": 0.42,   "sparkline": [...] },
    "expense_ratio":  { "value": 0.58,   "sparkline": [...] },
    "books_health":   { "value": 0.91,   "sparkline": [...] },
    "ai_approval":    { "value": 0.87,   "sparkline": [...] }
  },
  "benchmarks": {
    "group": "industry_and_revenue",
    "rank":  12,
    "of":    48,
    "p25": 0.36, "median": 0.41, "p75": 0.47,
    "metric": "gross_margin"
  },
  "goals": [
    {
      "id": "goal_001",
      "title": "Get gross margin to 45%",
      "icon": "trending_up",
      "why_it_matters": "Each 1% of GM is roughly $1,800/month at your revenue.",
      "current_value": 0.42,
      "target_value":  0.45,
      "deadline": "2026-09-30",
      "xp_reward": 200,
      "badge_reward": "top_25_margin"
    }
  ],
  "accountant_note": "April revenue was up 8%. Watch food cost — it crept to 33%. Recommend renegotiating with primary vendor.",
  "statements": {
    "profit_and_loss": { "$ref": "statements/pl-2026-04.json" },
    "balance_sheet":   { "$ref": "statements/bs-2026-04.json" },
    "cash_flow":       { "$ref": "statements/cf-2026-04.json" }
  }
}
```

### `firm-roster.json` (firm-side)
Drives the Firm View — list of all clients with score, grade, revenue, cash, books health.

```json
{
  "firm_id": "string",
  "as_of": "2026-05-22T00:00:00Z",
  "clients": [
    {
      "client_id": "string",
      "client_name": "string",
      "score": 78,
      "grade": "B",
      "revenue": 184000,
      "cash_on_hand": 62000,
      "gross_margin": 0.42,
      "books_health": 0.91,
      "mom_delta": 4,
      "streak": 6,
      "review_2_complete": true,
      "report_url": "/report/abc123token"
    }
  ]
}
```

Backend systems own producing these. This repo owns consuming them.

---

## In-Repo Task List (Ordered)

### Phase A — Foundation for client-facing rendering
Goal: make this repo capable of rendering a single client report from a JSON file. No backend dependency yet — hand-curated JSON.

1. **A1. Add `/docs` and this plan** *(done in this commit)*. Establishes repo as the documented source of truth for the briefing.
2. **A2. Build `report.html` template** — single static page that reads a `?client=` query param or path token, fetches `data/client-report.json`, renders Score tab (score ring, history chart, KPI cards with sparklines, accountant note). Mobile-first. Bottom nav scaffold (Score / Goals / Benchmarks / Badges).
3. **A3. Curate one real PATS client's report JSON by hand** — pick an Egg's Up Grill location (the POC client). Populate `client-report.json` from real April data. This is the demoable artifact for the July visit.
4. **A4. Routing** — add SWA route for `/report/[token]` → `report.html`. Update `staticwebapp.config.json`. Confirm the existing SPA fallback doesn't break.

### Phase B — Firm View
Goal: extend the firm-side surface. This is what PATS staff (and partner firms after July) use day-to-day.

5. **B1. Build `firm.html`** — roster table of all connected clients. Columns: name, score+grade pill, revenue, cash, gross margin, books health bar, MoM delta, streak. Sortable. Click row → opens that client's report.
6. **B2. Link from existing dashboards** — add a "Firm View" nav link in `index.html`, `scorecard.html`, `connections.html` headers (consistent with existing `connections.html` link pattern).
7. **B3. Populate `firm-roster.json`** — initially hand-curated for the demo (10 clients). Later fed by backend.

### Phase C — Engagement features for the demo
Goal: the highest-leverage owner-facing features for the firm visit reveal.

8. **C1. Goals tab in `report.html`** — render goals from `client-report.json`. Progress bars, XP, deadlines. Read-only view; goal *setting* lives in a firm-side UI elsewhere.
9. **C2. Benchmarks tab** — group picker (4 options), rank strip, P25/Median/P75 bars from `benchmarks` block. Anonymized footer.
10. **C3. Score Simulator** — sliders for the 5 score components, recompute score live using the same weights as `score_components`. Display new grade. Per-slider accountant lever note (static copy keyed by industry).
11. **C4. Badges tab** — grid of earned (green) and locked (grey) badges. Each locked badge shows exact earn criteria.

### Phase D — Polish for July 26
Goal: presentation-ready. Looks like a product, not a prototype.

12. **D1. Visual pass on `report.html`** — match the briefing's gamified mobile-first design language. Score ring as primary element. Tighten type, colors, spacing.
13. **D2. Three-state handling** — `not_ready` / `ready` / `stale` copy and visual treatment, fed by `state` field in JSON. Already specified verbatim in the briefing.
14. **D3. Phone-real test** — open the live URL on an actual iPhone and Android in the office. Fix anything that breaks. Photograph it on a phone for the demo slide.
15. **D4. Demo script doc** — add `docs/better2-demo-script.md` with the click-by-click walkthrough for July 26.

### Phase E — Wire to live data (post-demo or as backend lands)
Goal: stop hand-curating JSON.

16. **E1. JSON write target agreed with backend** — Make.com / PATS API writes `client-report.json` to a SharePoint/blob location, or an endpoint this site fetches from. Decide once backend stack is confirmed (see Open Q).
17. **E2. Token → client_id resolution** — the `/report/[token]` route fetches a thin lookup JSON that maps token to `client_id`, then loads that client's report JSON. Token never reveals `client_id` in the URL.
18. **E3. Stale-data detection** — show "Stale" state when `as_of` is older than the period's expected close window.

---

## Dependencies on Items Outside This Repo

These block in-repo phases. Tracked here so the gap is visible at all times.

| Blocker | Blocks | Owner | Status |
|---|---|---|---|
| Backend writes `client-report.json` to a fetchable location | Phase E | Matt + Cursor on PATS API | Open |
| Firm-side UI to create/edit goals | C1 going beyond read-only | TBD | Open |
| Tokenization scheme for `/report/[token]` | A4, E2 | Matt | Open |
| Decision on whether `better2.co/report/[token]` lives in this SWA (domain mapping) or a separate app | A4 routing finalization | Matt | Open |

---

## Open Questions Specific to This Repo

| Question | Why It Matters |
|---|---|
| Is `dashboards.patrickaccounting.com` the right host for the client-facing `/report/[token]` view, or does that need to live on `better2.co` for branding? | Determines whether this repo also serves `better2.co` (add CNAME + SWA custom domain) or whether a new repo/app is spun up for the client surface. |
| Do we want one big `report.html` that handles all tabs client-side, or separate routes per tab (`/report/[token]/goals`, etc.)? | Affects SWA routing config and bookmarkability. Single-page is faster to build. |
| Where does the score history come from in month 1, before there's history? | Backend question, but the JSON needs to handle "history shorter than 6 months" gracefully. |
| How do we want the firm view (`/firm.html`) gated? Right now `connections.html` and the scorecard are publicly accessible. The firm view will list every client by name and revenue — that's not OK to leave open. | Authentication / access control. May require SWA's built-in auth or a token-gated approach. |

---

## What This Branch Delivers

This branch (`claude/better2-platform-briefing-01NVm`) commits two documents only:

1. `docs/better2-briefing.md` — the full briefing, verbatim, as the canonical context document for future sessions.
2. `docs/better2-build-plan.md` — this file: how the briefing maps onto this repo, in priority order.

No code changes. Phase A1 is intentionally the only checked-off item. Phase A2 onward is the next concrete work, to be done in follow-up branches.
