## Propria — Backend Wiring

You are picking up a fully-built React frontend for **Propria**, a CLT (Community Land Trust) operating system. The entire UI is complete — every screen, every modal, every tab, every interactive element. Your job is **backend only**: wire up Supabase, auth, and real data persistence. Do NOT redesign or restructure any UI components.

### Repository
GitHub: `jeromydarling/propria` branch `claude/rebuild-design-project-ZCd5o`
Live demo: https://jeromydarling.github.io/propria/

### Read These First
- `/CLAUDE.md` — complete architecture guide, brand rules, data model, CROS hooks
- `/data/` — 10 JSON seed files with all demo data (homeowners, applicants, properties, counselors, etc.)
- `/src/cros/` — the CROS intelligence layer (signal map, posture engine, nudge engine, glow, auto-open). Replace in-memory arrays in `eventStream.ts` with Supabase queries. Hook signatures stay identical.

### What To Build (in this order)

**Phase 1: Supabase Tables + Auth**
```sql
-- Create these tables (schema in CLAUDE.md):
clts, users, homeowners, applicants, properties, counselors, sessions,
education_progress, propria_signals, compass_user_state, app_event_stream
```
- Seed with data from `/data/*.json`
- RLS: role-scoped at query level. Staff see their CLT. Homeowners see their own record. Counselors see assigned clients.
- Auth: email/password. Role in `users.role` determines which route they land on (`/app`, `/homeowner`, `/applicant`, `/counselor`)

**Phase 2: Replace Demo Data with Queries**
- `CltApp.tsx` — hardcoded feed items, stat cards, checklist items → `supabase.from('homeowners')`, `supabase.from('applicants')`, etc.
- `Homeowner.tsx` — hardcoded equity, payments, events → queries filtered by `user_id`
- `CounselorDash.tsx` — hardcoded clients, sessions → `supabase.from('sessions').eq('counselor_id', userId)`
- `eventStream.ts` — replace `_signals` array with `supabase.from('propria_signals')`. Replace `_events` with `supabase.from('app_event_stream').insert()`

**Phase 3: CRUD for Modal Forms**
Every modal in `CltApp.tsx` has form fields that currently do nothing on submit. Wire each to a Supabase insert/update:
- `logContact` → insert into contact_log
- `scheduleCheckin` → insert into sessions
- `composeEmail` → store draft, trigger Gmail edge function
- `newRequest` → insert into maintenance_requests
- `advancePipeline` → update applicant stage
- `requestDocs` → update applicant docs_status + send email
- `sendReminder` → trigger email edge function
- etc.

**Phase 4: Edge Functions**
- `propria-nri-chat` — AI chat endpoint. Inject CLT context (homeowner data, signals, current screen) into system prompt. Use Lovable AI Gateway.
- `propria-nri-execute` — Action execution. Role verification → DB write → success toast. Always confirm before executing.
- `propria-detect-signals` — Cron: scan for behavioral signals (overdue payments, stale contacts, expired docs), write to `propria_signals`

**Phase 5: Integrations**
- Stripe Connect: ground lease collection, contractor payments, resale fees
- Gmail API: Praeco email sends from staff's own Gmail
- Real file upload for Magic Import (currently mocked with `setTimeout`)
- PDF generation for HUD-9902, certificates, ground leases

### Architecture Rules (from The Schola — DO NOT VIOLATE)
1. **Signals, not polling** — emit signals when things happen, score them when drawer opens
2. **Always confirm before executing** — NRI suggests, human decides. ActionConfirmationCard pattern.
3. **Role-scoped everything** — filter at query level, never post-filter
4. **Silent failure always** — event logging (`logActionEvent`) never blocks user operations
5. **One auto-open per session** — compass never auto-opens more than once (tracked in `compass_user_state`)
6. **Deterministic nudges** — the nudge engine uses rules, not AI. No hallucination in suggestions.
7. **Human-centric terminology** — "stewardship" not "management", "families" not "accounts"
8. **Feature flags** — use `tenant_feature_flags` table. Gate new features per CLT.

### What NOT To Do
- Do NOT redesign any components or change the visual design
- Do NOT restructure the routing or view architecture
- Do NOT change the CROS hook signatures (`useCompassPosture`, `useCompassSessionEngine`, etc.)
- Do NOT add new UI screens — every screen is already built
- Do NOT change the color scheme, fonts, or brand identity
- Do NOT add loading spinners or skeleton screens yet — get data flowing first, polish later

### Quick Win Sequence
If you want to show progress fast:
1. Create Supabase project + seed tables with `/data/*.json`
2. Wire auth → route users to correct persona view
3. Replace `CltApp.tsx` dashboard stat cards with live Supabase queries
4. Wire one modal form (e.g., `logContact`) end-to-end
5. Replace `eventStream.ts` in-memory signals with Supabase
6. Nudge engine now runs on real data

That's 6 steps to a working app with real persistence.
