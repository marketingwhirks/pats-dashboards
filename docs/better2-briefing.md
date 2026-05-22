# Better2 Platform — Complete Context Briefing

**Better2 Platform · Financial Statement Dashboard · Client Gamification · QBO Integration · Better Together Event**

| | |
|---|---|
| Model | B2B SaaS |
| 5-yr target | $30M |
| Target firms | 150 |
| PATS clients | 418 |
| QBO status | Production |

Prepared for handoff to new chat or code project.
D. Matthew Patrick, CPA · May 2026 · Confidential

---

## Section 1 — Who Matt Is & What Better2 Is

### The Person
D. Matthew Patrick, CPA. Owner of Patrick Accounting & Tax Services (PATS) — $8.3M revenue, ~418 clients, ~200 QBO clients currently connected via existing API. Owner of Whirks — payroll firm serving ~1,000 clients. Combined, these two firms are the proof case, the training dataset, the distribution channel, and the cash flow funding Better2.

Mike Shaeffer is the Integrator at PATS. His running day-to-day operations is a structural precondition for Matt's availability to build Better2 — not a convenience. Mandy provides admin support. Melody handles marketing.

### What Better2 Is
Better2 (better2.co) is a B2B SaaS platform — an AI-powered operating system for independent accounting firms. It automates 85–90% of bookkeeping production work (transaction categorization, reconciliation, month-end close) so accounting firms can serve more clients without adding headcount. It also provides a client-facing financial dashboard that gives small business owners a simple, gamified view of their financial health.

It sells to the ~46,000 independent accounting firms serving small businesses — not directly to small businesses. The firm is the customer. The small business owner is the end user.

### Why This Model
- Accounting firms already want this. They're the buyer with budget, pain, and decision authority.
- 85–90% AI accuracy with human review is sufficient. B2C requires 99%+ or clients won't trust it.
- Firms are sticky. Once onboarded, annual churn is under 5%. Switching cost is structural.
- Matt owns the trust network — PASBA, Better Together, 20+ years of firm relationships.
- Self-fundable to breakeven (~$1.25M). B2C would require $5M+ to reach sustainable unit economics.
- The data moat compounds. Every firm's corrections train the model. Whoever reaches 3,000 clients first wins permanently.

### The Moat
Data network effect. Every correction a bookkeeper makes improves the model — not just for that firm, but for every firm in the same vertical. At 150 firms and 30,000+ clients, Better2 knows what a healthy restaurant looks like in Memphis vs. Portland. A competitor starting in 2027 faces a data gap that never closes.

> "The bookkeeping was never the product. The data was."

### Conservative Financial Targets

| | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
|---|---|---|---|---|---|
| Firms | 5 | 18 | 45 | 90 | 150 |
| Total ARR | $420K | $1.9M | $5.5M | $10.8M | $30M |
| Gross Margin | 72% | 76% | 79% | 81% | 82% |
| Net Position | -$830K | ~Breakeven | +$4M | +$10M | +$17M |

Cash to breakeven: ~$1.25M. Self-funded from PATS/Whirks cash flow. Matt retains 88–92% ownership. No investors. No board.

---

## Section 2 — Strategic Decisions on Record

These decisions were made through structured evaluation. They are documented here to prevent re-litigation in a new chat. Do not revisit without new evidence.

| Decision | Rationale |
|---|---|
| B2B, not direct to SMB | B2C scored 15–20% viable. B2B scored 70%+. Accounting firms are the buyer — they have budget, pain, and authority. Consumer behavior change is the hard problem. |
| 85–90% AI + human review | Getting past 90% requires ML infrastructure and months of correction data. 85–90% with a fast approve/reject UI delivers 60–70% time savings and is a defensible, honest product claim. |
| Self-funded, no outside investors | $1.25M to breakeven is fundable from PATS/Whirks cash flow. Retains 88–92% ownership. No dilution, no board, no loss of control. |
| No hires before July 2026 firm visit | Lean speed. Infrastructure sponge from PATS covers the gap. Adding payroll before proof slows the 90-day plan. |
| Separate legal entity + shared services agreement | Clean IP ownership, protects both entities, creates paper trail. Better2 is not a PATS division. |
| PATS transaction data as training set | $500K+ value if acquired externally. Already labeled by human accountants. Available immediately. |
| AI as CTO for Phase 1 | Matt + Claude/Cursor builds the prototype. Hire Technical Lead to execute, not architect. |
| Firm visit as the reveal moment | Forcing function. 100 firm owners in one room, July 26–28. All build decisions serve what is demonstrable by that date. |
| Horizontal, not vertical-specific | AI figures out industry from transaction patterns. Vertical-specific limits TAM. |
| QBO Accountant token (not per-client OAuth) | PATS has a QBO Accountant firm account. One token gives read access to all 418 clients. One OAuth per partner firm, not one per client. |
| Build own reporting platform (not Syft/Fathom) | At 418 clients, Syft/Fathom costs $12–17K/year for a worse experience. Better2 owns the client relationship, the data, and the presentation. |
| Qount Review 2 as the data refresh trigger | Review 2 completion = quality gate (human reviewed twice). Client sees financials the moment books are approved — not before, not delayed. |

---

## Section 3 — Proof of Concept (April 2026)

### The Categorization Test
Before building anything, the AI was blind-tested on a real client's QBO data with zero prior training. Client: Egg's Up Grill (Green Wave Investments) — two-location restaurant franchise. 7,063 transactions over 12 months. 89 unique accounts. Sample: 100 random transactions. Zero client-specific context provided.

| Exact Match | Effective Accuracy | Projected Month 3 | Projected Month 6 |
|---|---|---|---|
| 75% | 85% | 93–95% | 96–98% |

A new employee on day one would not perform at this level. The error patterns are not random — they are categorized and fixable.

### Error Analysis

| Error Type | % | Remediation |
|---|---|---|
| Location confusion (GTOWN vs Olive Branch) | 4% | Single mapping table. Fixable in hours. Never recurs. |
| Sub-account mismatch (right category, wrong sub) | 10% | Self-corrects as corrections feed the context file. |
| Judgment calls (reasonable either way) | 5% | Firm-preference rules. Defined once, applied forever. |
| Truly wrong | 6% | Model training. Corrects over 3–6 months. |
| Exact match | 75% | Already correct. No action needed. |

The 15% that was wrong is a structured, fixable problem set — not random failure. The model understands accounting. It needs firm-specific calibration.

---

## Section 4 — Product Roadmap

### Six Phases — 30-Month Horizon

| Ph | Module | What It Does | Timeline |
|---|---|---|---|
| 1 | Categorization Engine | AI categorizes bank feed transactions. Staff reviews and approves. Learning loop improves per client. | Months 1–6 |
| 2 | Month-End Close Engine | Reconciliation, journal entries, close checklists. Month-end becomes a 20-minute task. | Months 4–9 |
| 3 | Client Dashboard | White-labeled financials, score, peer benchmarks, gamification. Firms look like advisors. | Months 6–12 |
| 4 | Integration Marketplace | Payroll, POS, bill pay, receipt capture. Platform becomes the hub. | Months 9–18 |
| 5 | Tax Position Engine | Real-time tax liability, estimated payments, QBI optimizer. | Months 12–24 |
| 6 | White-Label & API Layer | Open platform for PM tools, banks, payroll. Data becomes the product. | Months 18–30 |

Phase 1 is the focus through July 2026. Every build decision serves what is demonstrable at the Better Together firm visit.

---

## Section 5 — QBO Integration Architecture

### Current State — What Already Exists
- Production QBO app registered on developer.intuit.com. No pending approvals.
- Accountant token model — PATS has a QBO Accountant firm account. One token gives read access to all clients under the firm. One OAuth per partner firm, not one per client.
- Existing PATS API pulls Transaction List by Date CSV for ~418 clients today.
- Client-to-realm_id mapping already solved inside the existing transaction puller.
- Make.com orchestrates the existing pull. SharePoint stores the outputs.
- Qount already mapped to QBO clients inside the transaction puller. The mapping problem is already solved.

The infrastructure that would take a funded startup 2–3 months to build, PATS already has. The July demo can run on live, real data from day one.

### What Needs to Be Added
1. **Firms table** — `firm_id`, `access_token` (encrypted), `refresh_token` (encrypted), `realm_id`, `token_expires_at`, `status`. One row per connected firm.
2. **Parameterize the existing pull** — replace hardcoded PATS credentials with a `firm_id` lookup. One database lookup, same API call structure. Estimated: half a day with Cursor.
3. **Daily token refresh job** — queries tokens expiring within 30 days, refreshes proactively, alerts on failure. Critical reliability piece.
4. **QBO Reports API calls** — P&L, Balance Sheet, Cash Flow. Same auth as existing transaction puller. Three additional HTTP module calls in Make.com.
5. **Make.com Scenario 2** — Qount Review 2 trigger → pull 3 reports → store → activate shareable link → email client.

### The QBO Report Endpoints
All three use the same auth header as the existing transaction puller. Params: `start_date`, `end_date` (first/last day of month), `accounting_method` (Accrual for most clients).

| Report | Endpoint |
|---|---|
| Profit & Loss | `GET https://quickbooks.api.intuit.com/v3/company/{realmId}/reports/ProfitAndLoss` |
| Balance Sheet | `GET https://quickbooks.api.intuit.com/v3/company/{realmId}/reports/BalanceSheet` |
| Cash Flow | `GET https://quickbooks.api.intuit.com/v3/company/{realmId}/reports/CashFlow` |

### The Qount Trigger
Workflow: `.client accounting`. Trigger step: `Review 2` marked complete. This is the quality gate — a human has reviewed the books twice. The client should never see financials before this point.

| Layer | Trigger | Latency | Implementation |
|---|---|---|---|
| Primary | Qount Review 2 completion | Seconds after bookkeeper approves | Make.com scenario watches Qount webhook. Review 2 marked complete → pull P&L, BS, CF for that client → store → activate link → notify client. |
| Secondary | Nightly scheduled pull | Hours (nightly worst case) | Cron job pulls fresh data for all connected clients. Catches anything the webhook missed. Keeps dashboard current even without a trigger event. |
| On-demand | Manual refresh button | Immediate | Client or firm clicks refresh. Same API call sequence. Supplements the above — does not replace. |

### Full Tech Stack Reference

| Component | Detail |
|---|---|
| QuickBooks Online API | Production mode. Accountant token. Pulls transactions + financial reports (P&L, Balance Sheet, Cash Flow) for all connected clients via one auth token per firm. |
| QBO Reports API endpoints | P&L: `/reports/ProfitAndLoss` · Balance Sheet: `/reports/BalanceSheet` · Cash Flow: `/reports/CashFlow`. Same auth as transaction puller. Params: `start_date`, `end_date`, `accounting_method`. |
| Qount | Practice management system. Workflow: `.client accounting`. Trigger point: `Review 2` step completion. Client-to-QBO mapping already built in existing transaction puller. |
| Make.com | Workflow orchestration. Existing transaction puller scenario. Extend with two new scenarios: (1) nightly P&L/BS/CF pull, (2) Qount Review 2 trigger → report pull → client notification. |
| Existing PATS API | Production. Pulls Transaction List by Date CSV for ~418 clients. Client-to-realm_id mapping already solved. This is the foundation — parameterize for multi-tenant, do not rebuild. |
| Claude + Cursor | Technical co-architect and development environment. Builds prototype through July firm visit. Replaces need for CTO hire in Phase 1. |
| Token architecture | Firms table: `firm_id`, `access_token` (encrypted), `refresh_token` (encrypted), `realm_id`, `token_expires_at`, `status`. Daily refresh job: proactively refreshes tokens expiring within 30 days. Alert on failure. |
| Intuit Developer | Already registered. Production mode approved. App review process complete. No external dependency remaining. |
| SharePoint + Make.com | Current transaction CSV storage and orchestration. Extend for financial statement storage. |
| Shareable report link | `better2.co/report/[secure-token]`. No login required. Token maps to `client_id`. Three states: Not Ready / Ready / Stale. Activates automatically on Qount Review 2 completion. |

---

## Section 6 — Financial Statement Platform

### Why Build Our Own (Not Syft or Fathom)

| Capability | Syft | Fathom | Better2 |
|---|---|---|---|
| Owns the client relationship | No | No | Yes |
| Triggers off your workflow | No | No | Yes (Qount) |
| Gamification / scoring | No | No | Yes |
| Peer benchmarking | No | No | Yes |
| White-labeled to your firm | Limited | Limited | Fully |
| Per-client cost (418 clients) | ~$30/mo | ~$40/mo | Your infra cost |
| Data stays in your platform | No | No | Yes |
| Shareable link (no login) | No | No | Yes |

At 418 clients, Syft/Fathom costs $12–17K/year for a worse experience. That funds Better2 infrastructure with margin left over.

### The Shareable Link Experience
Every client gets a unique tokenized URL: `better2.co/report/[secure-token]`. No login required. Click the link, see your financials. The link activates automatically when Qount Review 2 is marked complete — not before, not after a delay.

| State | What the Client Sees |
|---|---|
| Not Ready | "Your accountant is still working on this month. You'll get a notification when it's ready." |
| Ready | Full dashboard — financial score, P&L, Balance Sheet, Cash Flow, peer benchmarks, goals, accountant note. |
| Stale | "These financials are from March. April is in progress." |

---

## Section 7 — Client Dashboard App

### Design Principles
- Mobile-first. The client checks this on their phone, not a desktop.
- No login required for the shareable link view. One login for the full app (if they want ongoing access).
- The score ring is the primary UI element. One number that tells the owner if they're winning or losing.
- Gamification is the design language, not a feature bolted on. The whole experience is built around progression.
- The accountant note is the human layer. The dashboard without it is just numbers. The note is what makes it advice.

### Dashboard Features — Complete List

| Feature | Description |
|---|---|
| Financial Health Score | 0–100 score with letter grade (A–F). Weighted: Gross Margin 30%, Expense Ratio 25%, Cash Days 20%, Books Health 15%, Streak 10%. Score ring UI, color-coded, shows month-over-month delta. |
| Score History Chart | 6-month trend line. Area fill. Shows score trajectory — the core motivator for improvement. |
| KPI Cards | Revenue, Cash on Hand, Gross Margin, Expense Ratio, Books Health, AI Approval Rate. Sparklines on each. Mobile-first 2-column grid. |
| Peer Benchmarking | Owner chooses their comparison group: My Industry / My Revenue Band / Industry + Revenue / Top Performers. P25/Median/P75 bar with their position plotted. Rank strip showing #X of Y peers. |
| Gamification — Score & Grade | Score ring is the primary game mechanic. Grade changes motivate. Delta vs last month shown prominently. |
| Gamification — XP & Levels | XP points earned by completing goals and improving metrics. Level bar shows progress to next level. Each level unlocks a new feature or insight. |
| Gamification — Badges | Clean Books, Cash Positive, Top 25% Margin, Revenue Growth, Close Streak, Advisor Ready. Earned = green. Locked = greyed out with exact criteria shown. |
| Gamification — Streaks | On-time close streak tracked monthly. Displayed prominently. Loss aversion keeps owners engaged. |
| Accountant-Assigned Goals | Firm sets 1–3 goals per client per quarter in the Goals tab. Each goal has: title, icon, why it matters, current value, target value, deadline, XP reward, badge reward. Progress bar. Completion triggers XP and optional badge. |
| Score Simulator | "What Would Move My Score" — interactive sliders. Owner adjusts Gross Margin, Expense Ratio, Cash Days, Books Health, Streak. Score updates in real time. Shows new grade. Accountant note explains what each lever means and how to move it. |
| Shareable Report Link | `better2.co/report/[token]`. No login. Mobile-first. Three states: Not Ready / Ready / Stale. Activates on Qount Review 2 completion. |
| Firm View | Accountant sees all clients: score, grade, revenue, cash, gross margin, books health bar, month-over-month change, streak. Tap any client to drill into their owner view. |
| Accountant Note | Firm can push a plain-language note to the client dashboard. Appears as a highlighted card. The human context that no automated system can provide. |
| Financial Statements | P&L, Balance Sheet, Cash Flow. Pulled from QBO Reports API. Timestamped. Displayed clean, mobile-friendly. Replaces Syft and Fathom. |

### Navigation Structure — Mobile Bottom Nav

| Tab | Icon | What's On It |
|---|---|---|
| Score | ◎ | Health score ring, XP level bar, score history chart, 6 KPI cards with sparklines, accountant note. |
| Goals | ⬟ | Accountant-assigned goals with progress bars, XP rewards, deadlines, completion badges. Streak card. |
| Benchmarks | ▲ | Peer group picker (4 options). Rank strip. P25/Median/P75 benchmark bars. Anonymized footnote. |
| Badges | ✦ | Earned badges (green). Locked badges (grey) with exact criteria to earn each. |
| Firm | ≡ | Firm-only view. All clients list with score, grade, revenue, cash, books health. Tap to drill into owner view. |

### Score Calculation Weights

| Metric | Weight | Note |
|---|---|---|
| Gross Margin | 30% | Higher = better. Benchmarked against peer group median. |
| Expense Ratio | 25% | Lower = better. Inverted in scoring. |
| Cash Days on Hand | 20% | Higher = better. Industry-specific thresholds. |
| Books Health (AI approval rate + on-time close) | 15% | Combined metric. AI approval rate + whether books were closed on time. |
| Streak (consecutive on-time closes) | 10% | Rewards consistency over time. |

These weights are provisional. Validate with PATS bookkeepers before presenting to partner firms.

### Accountant-Assigned Goals — Feature Detail
The highest-priority engagement feature. The firm sets 1–3 goals per client per quarter. Goals have: a title, an icon, a plain-language explanation of why it matters, current value pulled from QBO, target value, deadline, XP reward on completion, and optional badge reward.

Owner sees a progress bar for each goal. When a goal is completed, XP is added, the badge (if any) is awarded, and a confetti animation fires. The accountant sees completion status across all clients in the firm view.

This feature changes the firm-client relationship from transactional to advisory. The accountant stops being the person who sends the books and starts being the person who gives the owner a roadmap.

### Score Simulator — Feature Detail
Located inside the Score tab, below the history chart. Interactive sliders for each score component: Gross Margin, Expense Ratio, Cash Days, Books Health, Streak. As the owner moves a slider, the score ring and grade update in real time showing the projected score.

Each slider has an accountant note explaining what that lever means and the most common way to move it for their vertical. Example: "Gross Margin: For a restaurant, every 1% improvement in food cost moves your margin ~0.8%. Ask your accountant about vendor renegotiation."

This is the single highest-value insight feature in the platform. It turns data into a visible path to action.

---

## Section 8 — Delivery Mechanisms for Small Business Owners

### The Core Problem This Solves
Small business owners don't know which numbers to look at, when to look at them, or what to do when they see something concerning. Financial statements are delivered as PDFs they don't open. Accountant calls happen quarterly and are forgotten by the next week. The owner is flying blind between closes.

Better2's delivery system changes this by meeting the owner where they are — on their phone, in plain language, with a single number that tells them if they're winning — and giving them a concrete path to improve it.

| Mechanism | How It Works |
|---|---|
| The Shareable Link | A tokenized URL (`better2.co/report/[token]`) emailed to the client when Review 2 is complete. No login. Opens their dashboard instantly. Mobile-first. The primary delivery mechanism. |
| The Weekly Snapshot | One-sentence push notification per week summarizing the single most important number. Builds a habit. Owner checks it without thinking about it. |
| The Score + Grade | A single number (0–100) and letter grade that distills the entire financial health of the business. Instantly legible. The owner knows if they're winning or losing. |
| The Accountant Note | A plain-language note pushed by the firm alongside the monthly financials. 2–3 sentences. "Here's what happened, here's what to watch, here's what we recommend." Human context no algorithm can replace. |
| The Goal Progress Bar | 1–3 accountant-assigned goals with progress bars. Owner sees exactly what to work on and how far they are. Replaces vague advice with a trackable target. |
| The Score Simulator | Interactive sliders showing what would happen to their score if they improved specific metrics. Turns insight into action by making the path visible. |
| The Peer Rank | A single rank number (#12 of 48) that tells the owner where they stand against anonymous peers. Simple, motivating, and updated monthly. |
| The Annual Report Card | A beautiful shareable image generated every January. Designed to be posted, shared, and celebrated. Social proof that drives firm referrals. |

### The Insight Hierarchy
Not all numbers are equal. The dashboard is designed around a deliberate hierarchy of what the owner should look at first:

1. **The Score.** Am I winning or losing right now?
2. **The Goals tab.** What does my accountant want me to work on?
3. **The Benchmarks tab.** How do I compare to businesses like mine?
4. **The Simulator.** What would improve my score the most?
5. **The financial statements (P&L, Balance Sheet, Cash Flow).** What actually happened this month?

Every other feature exists to serve this hierarchy. If a feature doesn't help the owner answer one of these five questions, it doesn't belong in the MVP.

### Engagement Features — Priority Ranked

| Priority | Feature | Why It Works |
|---|---|---|
| ★★★ | Accountant-Assigned Goals | Firm sets 1–3 goals per client per quarter. Owner sees progress bars. Completion triggers XP and badge. Accountant becomes a coach. This changes the firm-client relationship from transactional to advisory. |
| ★★★ | Score Simulator | Sliders let owner experiment: "If I cut expenses 5%, my score goes from 78 → 84." Accountant gets a conversation starter. Highest-value insight feature in the platform. |
| ★★★ | Weekly Snapshot Notification | One push notification per week. One sentence: "Revenue up 12% vs last week. Books current. Score: 78." Habit that compounds. |
| ★★★ | Cash Runway Alert + Action | "At current burn rate you have 47 days of cash. Your accountant has 2 suggestions." Anxiety + path = engagement. |
| ★★ | Beat Your Best | Personal records: best margin month, highest cash, lowest expense ratio. "You're $2K from your best cash month ever." More motivating than beating strangers. |
| ★★ | Vertical Leaderboard (opt-in) | "You're #12 of 48 restaurants. The #1 has 71% gross margin. Yours is 64.2%." Gap is visible. Path is obvious. Opt-in only. |
| ★★ | Seasonal Intelligence | "Last April revenue dropped 18%. This April you're up 4%." Owners don't naturally compare to their own seasonal baseline. Makes them feel smart. |
| ★★ | Tax Position Pulse | "Estimated Q2 tax liability: $8,400. Set aside: $6,200. Possible shortfall: $2,200." The one number every owner actually cares about. Guaranteed engagement. |
| ★★ | Peer Insight Cards | Anonymized facts: "Top 25% of restaurants close books by the 3rd. Yours close by the 9th." Facts motivate differently than grades. |
| ★ | Streak System | On-time close streak, consecutive months above margin target. Loss aversion keeps owners engaged. |
| ★ | Level-Up Milestones | Each level unlocks something real: Level 5 = Seasonal Intelligence, Level 8 = Tax Position Pulse, Level 10 = benchmarking call with accountant. Gamification tied to firm revenue. |
| ★ | Annual Business Report Card | Beautiful shareable image every January: score, grade, biggest improvement, badges, percentile rank. Owners share it. Free marketing for the firm. |
| ★ | Badge for Completing a Recommendation | Accountant flags something. Owner acts. Badge awarded. Closes the loop between advice and behavior. |

---

## Section 9 — Better Together Firm Visit (July 26–28, 2026)

### Event Overview

| Item | Detail |
|---|---|
| Event | Better Together Firm Visit |
| Dates | July 26–28, 2026 |
| Location | PATS / Whirks facility |
| Audience | 100+ independent accounting firm owners. PASBA and Better Together network. |
| Goal | 5+ founding partner firm commitments signed by July 28. |
| Pre-event target | 3 verbal commitments before July 26. Walk in with proof of demand. |
| Demo format | Live on real PATS data. Before: bookkeeper's manual transaction queue. After: Better2 AI suggestions, one-click approvals, accuracy metrics. |
| The reveal | "We are accepting 5 founding partners. Locked pricing for 3 years. If you want in, I need to know by July 28." Sign-up sheet at the back of the room. |
| Talk title | "How AI Handles 85% of Our Bookkeeping — And Why We Still Have Bookkeepers." Practitioner talk, not a pitch. Better2 introduced in the last 5 minutes. |
| Founding partner pricing | $750/month platform fee + $35/month per active client. Locked 3 years. In exchange: feedback, case studies, warm referrals. |
| Outreach start | May 2026. Personal text/call to 8–10 target firms from PASBA inner circle. "I've built something inside our firm that's working. Want to see it before I show anyone else?" |
| Landing page | better2.co — live before July 26. One paragraph, accuracy proof point, founding partner application form. |

### What Must Be Demo-Ready by July 26
- Live financial dashboard running on real PATS client data (not mock data).
- Approve/reject UI showing AI categorization suggestions with one-click approval.
- Accuracy metrics slide: AI approval rate across 20+ clients in 3+ verticals, time savings measured, error trend over time.
- Shareable client link — click a URL, see a client's financial score and P&L. Live. On a phone.
- Score simulator — live slider interaction showing projected score improvement.
- 3 founding partner verbal commitments already in hand before the event starts.

### 90-Day Build Blocks to July

| Block | Dates | Goal |
|---|---|---|
| 1 | Apr 14–27 | Foundation. Entity, shared services, 5 test clients selected, methodology confirmed. Baseline accuracy scored. |
| 2 | Apr 28–May 25 | Build batch pipeline. Automated testing on 20+ clients. Context architecture. Accuracy tracker in Airtable. |
| 3 | May 26–Jun 21 | Internal beta. 3 PATS bookkeepers on approve/reject UI. 10+ live clients. Before/after time data. |
| 4 | Jun 22–Jul 13 | Demo polish, metrics slide, founding partner outreach, better2.co live, 3 pre-committed firms. |
| Event | Jul 26–28 | Better Together Firm Visit. Live demo. 5 founding partner sign-ups. |

---

## Section 10 — Better Together Community

### The Community as Distribution
The Better Together network and PASBA are not just Matt's go-to-market channel — they are the community that becomes Better2's early adopter ecosystem. Firms that join early don't just get a product; they get a peer group of other firms building the same future. That community is a retention mechanism, a referral engine, and a product feedback loop.

### Community Structure (Post-Event)
- Founding 5 firms get a private Slack channel or Circle community with direct access to Matt and each other.
- Monthly founding partner call — product updates, feature prioritization, shared learnings across firms.
- Anonymized cross-firm benchmarking — "Here's how your firm's AI approval rate compares to the other founding firms." Accountability through community.
- Co-authorship of case studies — founding firms help write the stories that sell the next cohort. They become the social proof.
- Conference circuit — founding partners present alongside Matt at AICPA ENGAGE, Scaling New Heights, QuickBooks Connect. Peer-to-peer selling.

### Community as Product Feedback
Founding firms are the fastest path to product-market fit. Their corrections train the AI. Their objections reveal the gaps. Their workflows expose what the approve/reject UI needs to handle. Building the community before the product is complete — not after — is what separates Better2 from a software company that sells to accountants from one that is built with them.

### Better Together Brand Relationship
Better2 is a separate legal entity from PATS and Whirks. The Better Together event and brand belongs to Matt's existing network — Better2 is introduced inside it, not as a replacement for it. The event on July 26–28 is a Better Together event that happens to include a Better2 reveal. This sequencing is intentional: credibility before pitch.

---

## Section 11 — Complete Build Sequence

This is the full ordered build list from today through July firm visit and beyond. Use this as the task list for a new code project or chat session.

| Week | Task | Detail |
|---|---|---|
| Week 1 | Extend existing PATS API to multi-tenant | Add firms table (`firm_id`, tokens, `realm_id`). Parameterize existing pull to accept `firm_id`. Run against PATS — confirm nothing breaks. Add daily token refresh job. |
| Week 1 | Pull financial statements for 5 test clients | Hit QBO P&L, Balance Sheet, Cash Flow endpoints for 5 PATS clients. Store JSON. Confirm data quality and structure. |
| Week 2 | Build shareable report link renderer | Mobile-first React app. No login. Three states: Not Ready / Ready / Stale. Powered by real QBO report data. Replaces Syft and Fathom for these clients. |
| Week 2 | Dashboard — Score tab + KPI cards | Health score ring, score history chart, 6 KPI cards with sparklines, accountant note card. Mobile-first, bottom nav. |
| Week 3 | Wire Qount Review 2 trigger in Make.com | New Make scenario: watch Qount `.client accounting` workflow → filter for Review 2 completion → pull 3 QBO reports → store → activate link → email client notification. |
| Week 3 | Accountant-assigned Goals tab | Firm view to create goals per client. Owner view shows progress bars, XP rewards, deadline. Completion triggers XP and badge. |
| Week 4 | Score Simulator | Slider UI inside Score tab. Gross Margin, Expense Ratio, Cash Days, Books Health, Streak sliders. Real-time score recalculation. New grade display. Accountant lever notes. |
| Week 4 | Peer Benchmarking tab | Group picker (My Industry / Revenue Band / Both / Top Performers). Rank strip. P25/Median/P75 benchmark bars. Anonymized footnote. |
| Week 5–6 | Nightly sync + notification system | Cron job for all connected clients. Email notification on report ready. Broken token alert to firm. Stale data indicator on dashboard. |
| Week 6–8 | Approve/reject UI (bookkeeping core) | Transaction queue, AI suggestion, approve/correct buttons, confidence indicator. Connects to batch pipeline. Corrections write to client context file. |
| Week 8 | Demo polish for July firm visit | Live on real PATS data. Demo script: before (manual queue) → after (AI suggestions, one-click approvals). Metrics slide: accuracy by vertical, time savings, client count. |

---

## Section 12 — Open Questions for Next Session

These items were identified as requiring confirmation before building. Resolve these first in a new chat or code session.

| Open Question | What Needs to Be Confirmed |
|---|---|
| Qount webhook payload | Confirm the webhook payload for Qount task completion includes: workflow name (`.client accounting`), step name (`Review 2`), and client ID. If step name is missing, use Qount task search API to look up which step completed. |
| Make.com QBO module type | Is the existing transaction puller using the native QBO Make.com connector or a direct HTTP module? Native connector may not expose the Reports API — may need to switch to HTTP for reports pull. |
| Existing PATS API stack | What language/stack is the existing PATS API written in? Determines how fast the multi-tenant parameterization takes (likely a day of work with Cursor). |
| Score weighting | Current prototype weights: Gross Margin 30%, Expense Ratio 25%, Cash Days 20%, Books Health 15%, Streak 10%. Validate these weights with PATS bookkeepers before launch. |
| Client notification method | Email first. SMS later. Confirm which email system to use for the "Your books are ready" notification (HubSpot? Direct SMTP? Make.com email module?). |
| Syft/Fathom migration | How many clients are currently in Fathom vs Syft? Build the replacement dashboard for PATS clients first, then migrate partner firm clients as they onboard. |
| Goal-setting workflow for firms | How does the accountant set goals per client? Needs a simple firm-side UI. Could be as simple as a form → Airtable → displayed on client dashboard. Design this before building. |
| Better Together community platform | Where does the ongoing community live post-event? Slack? Circle? Existing Better Together infrastructure? This affects long-term engagement strategy. |

### Confirmed Facts (Do Not Re-Question)
- QBO app is in Production mode on developer.intuit.com. App review is complete.
- Accountant token model — one token per firm covers all clients under that firm.
- Existing PATS API pulls live data for ~418 clients today. Client-to-realm_id mapping is solved.
- Qount workflow is `.client accounting`. Trigger step is `Review 2` completion.
- Qount client-to-QBO mapping already exists inside the transaction puller.
- Make.com is the orchestration layer. SharePoint stores outputs.
- Matt handles all roles solo through July 26. No hires before the firm visit.
- $1.25M to breakeven, self-funded. No outside investors. No dilution.
- Better2 is a separate legal entity. Shared services agreement with PATS covers office, admin, tools, data access.
