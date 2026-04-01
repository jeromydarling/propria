# CROS in The Schola — Framework Analysis & Propria Blueprint

*Derived from theschola-main source code — March 2026*

---

## What CROS Is

CROS is not a chatbot. It's a **persistent ambient intelligence layer** — a floating action button (FAB) called the NRI Compass — that sits inside every authenticated page of The Schola and does four things simultaneously:

1. **Observes** what the user is doing (route, signals, behavior)
2. **Orients** itself to their current direction of need (Formatio / Sapientia / Cura / Reconciliatio)
3. **Surfaces** context-aware nudges, guides, and seasonal reflections without requiring the user to ask
4. **Acts** on their behalf via natural language — with a confirmation step before anything executes

Everything flows through a single drawer that opens from the FAB. No separate AI page. No navigation away. The intelligence comes to the user.

---

## Part 1: The Four Directions

The compass has four cardinal orientations that classify every user action and nudge:

| Direction | Latin Meaning | Domain | Weight | Color |
|-----------|--------------|--------|--------|-------|
| **Formatio** (North) | Formation | Academic growth, curriculum, milestones | 2 | Green |
| **Sapientia** (East) | Wisdom | Planning, scheduling, decisions | 1 | Navy/Primary |
| **Cura** (South) | Care | Wellbeing, engagement, community presence | 4 | Gold |
| **Reconciliatio** (West) | Reconciliation | Re-engagement, restoration, recovery | 3 | Amber |

**How direction is resolved** (`useCompassPosture.ts`):

```
1. Check last 2 minutes of schola_nri_signals
   → If restoration signal found → force Reconciliatio
2. Score last 20 signals by SIGNAL_KIND_MAP (each signal_type → direction)
   × Apply ORIENTATION_MULTIPLIERS for community type (classical_school boosts Formatio)
   × Apply earlyBoost (1.25×) if community < 30 days old
3. If score >= minThreshold → pick highest scoring direction
4. Fallback: read ROUTE_MAP (URL pattern → direction)
```

**Signal → Direction mapping** (examples from `SIGNAL_KIND_MAP`):
- `assessment_created`, `journal_entry_written`, `course_created` → Formatio
- `event_created`, `schedule_viewed`, `rsvp_submitted` → Sapientia
- `message_sent`, `celebration_created`, `family_joined` → Cura
- `entity_restored`, `payment_received_overdue`, `account_reactivated` → Reconciliatio

**Orientation multipliers by community type:**
```typescript
homeschool_coop:  { formatio: 1, sapientia: 1, cura: 2, reconciliatio: 1 }
classical_school: { formatio: 2, sapientia: 1, cura: 1, reconciliatio: 1 }
micro_school:     { formatio: 1, sapientia: 1, cura: 1, reconciliatio: 1 }
```

---

## Part 2: The Seven-Layer Compass Drawer

When the FAB is tapped, a full-height drawer renders with these layers from top to bottom:

```
┌─────────────────────────────────────┐
│ 1. HEADER — NRI Companion + posture │
│    label + clear history button     │
├─────────────────────────────────────┤
│ 2. ORIENTATION LINE                 │
│    e.g. "Here's what needs your     │
│    attention today."                │
├─────────────────────────────────────┤
│ 3. GUIDE CARD (new users, first 3   │
│    days, auto-opens on unseen pages)│
├─────────────────────────────────────┤
│ 4. TODAY'S MOVEMENT — top 3 nudge   │
│    cards, dismissible, color-coded  │
│    by direction                     │
├─────────────────────────────────────┤
│ 5. SEASONAL ECHO CARDS              │
│    Anniversaries, cyclical patterns │
├─────────────────────────────────────┤
│ 6. PROVIDENCE SECTION               │
│    Collapsible quarterly narrative  │
│    with version history             │
├─────────────────────────────────────┤
│ 7. CHAT HISTORY or QUICK PROMPTS    │
│    Role-aware chips if empty        │
├─────────────────────────────────────┤
│ 8. INPUT — textarea + send + voice  │
└─────────────────────────────────────┘
```

---

## Part 3: The Nudge Engine

`useCompassSessionEngine.ts` fires **13 parallel Supabase queries** when the drawer opens, each targeting a specific user role and data source:

| Query # | Data Source | Role | Nudge Type |
|---------|-------------|------|------------|
| 0 | `attendance_records` (last 7d) | Staff | Attendance drift |
| 1 | `invoices` overdue > 30d | Admin | Payment overdue |
| 2 | `events` needing RSVPs (next 3d) | Staff | Volunteer gaps |
| 3 | `families` joined last 30d | Staff | New family settling |
| 4 | `saints_calendar` (next 3d) | Teacher | Liturgical connection |
| 5 | `courses` active | Staff | Assessment gap detection |
| 6 | `enrollment_inquiries` new (last 2d) | Admin | Admission inquiries |
| 7 | `engagement_scores` | All | Community health |
| 8 | `family_members` birthdate | All | Birthday upcoming |
| 9 | `families` count | All | Foundational welcome |

**Nudge construction:**
```typescript
buildNudge(type, confidence, ctx) → CompassNudge {
  id: hashId(type, ctx),      // stable daily ID for dismissal
  direction,                   // which compass arm
  type: reflection|action|awareness,
  confidence,                  // 0–1 float
  message,                     // orientation-aware wording (3 variants)
  optional_action: { label, route }
}
```

**Sorting:** `direction_weight × confidence`, top 3 displayed. 10-minute localStorage cache.

**Orientation-aware wording** — each nudge has 3 message variants:
```
NUDGE_TEMPLATES[type].messages = {
  default: "...",
  homeschool_coop: "...",
  classical_school: "..."
}
```

---

## Part 4: The FAB Glow System

`useCompassGlow.ts` — the FAB physically glows when something needs attention:

```
States:
  glowing     → pulsing animation (120s for assessments/families, 90s for absences)
  staticRing  → persistent ring when nudges exist but no active glow
  quiet       → no indicator

Glow triggers (event types → duration):
  assessment_created         → 120s glow
  family_joined              → 120s glow
  admission_inquiry_received → 120s glow
  signal_detected            → 120s glow
  celebration_created        → 90s glow
  absence_reported           → 90s glow

Trigger sources:
  1. Custom DOM event: window.dispatchEvent(new CustomEvent("compass-glow-trigger", { detail: { kind } }))
  2. DB poll: schola_nri_signals last 2 minutes, every 60s

Cooldown: 3 minutes between glows regardless of new events
```

---

## Part 5: Auto-Open Logic

`useCompassAutoOpen.ts` — the compass opens itself at most once per day:

```
Conditions to auto-open:
  ✓ Not automation/demo mode
  ✓ There are undismissed nudges or signals
  ✓ Has NOT auto-opened today (persisted in compass_user_state.last_auto_open_date)
  ✓ User is authenticated and community is resolved

Timing: 2500ms delay after page load (lets the page settle first)

Dismissal: Per-nudge, daily reset. Dismissed IDs stored in compass_user_state.
```

---

## Part 6: The Guide System (New User Onboarding)

`useCompassGuide.ts` — for users in their first 3 days:

```
On every route change:
  1. matchGuideEntry(pathname) → find entry for this URL pattern
  2. Check if entry.key ∈ compass_user_state.guide_sections_seen
  3. If unseen: wait 800ms → auto-open drawer + show GuideCard

GuideCard structure per entry:
  title    → "Welcome to Ordo"
  what     → What this section does
  why      → Why it matters
  expect   → What to expect in the next few minutes
  terms    → Optional glossary (Latin terms explained)

Progress persisted in: compass_user_state.guide_sections_seen (array of keys)
Permanent dismiss: compass_user_state.guide_permanently_dismissed = true
```

---

## Part 7: Friction Detection (Narrative Companion)

`useNarrativeCompanion.ts` — ambient micro-guidance running on every page:

```
Three triggers:

1. FIRST VISIT  (delay: 2000ms)
   → Fires once per session per route on first load
   → Shows contextual hint for that page + role

2. IDLE         (35 seconds of no mouse/keyboard/scroll/touch)
   → Suggests what to do if user seems stuck

3. RAGE CLICK   (4+ clicks on same element within 3 seconds)
   → User is clearly frustrated with something

Output:
  → toast({ title: "💡 Hint", description: message, duration: 8000 })
  → Logged to: micro_guidance_events + app_event_stream
  → Deduped: session-level (shownThisSessionRef) + localStorage permanent dismiss

Content source: findFrictionEntries(pathname, userRole) from frictionGuidance.ts
  → 20 route-pattern entries, role-filtered
```

---

## Part 8: AI Action Execution

The Compass can perform real CRUD operations via natural language.

**Two-step architecture:**

```
Step 1: CHAT  (schola-nri-chat edge function)
  User: "Create an assignment for Latin due Friday"
  NRI:  Returns ActionConfirmationCard with full preview
        { action: "create_assignment", payload: { title: "Latin", due: "Friday" } }

Step 2: EXECUTE  (schola-nri-execute edge function)
  User clicks CONFIRM
  → Role verification
  → Actual DB write
  → Success toast + optional auto-navigate
```

**ActionConfirmationCard UI:**
```
Color coding: green=create, blue=update, red=delete
Shows: action type, all field values, affected entity
Buttons: Confirm | Cancel
```

**Role-scoped tools** (25+ in `nriActions.ts`):
- Admin: Create/update/delete courses, assignments, events, field trips, families, students, invoices, announcements
- Teacher: Create/update courses, assignments, rubrics, curriculum units, reflections, field trips, assessments
- Parent: RSVP events, sign permission slips, volunteer signup, send messages
- Student: Create journal entries, update assignment status only

---

## Part 9: The Event Stream

`eventStream.ts` — fire-and-forget action breadcrumbs:

```typescript
logActionEvent(eventType, entityType, entityId, route?)
  → supabase.from("app_event_stream").insert({
      user_id, event_type, event_data: { entity_type, entity_id }, route
    })

Privacy rules:
  - NEVER stores names, content, or PII
  - Only stores entity_type + entity_id (foreign keys)
  - Silent failure — never blocks user operations
```

The event stream feeds: posture engine, glow triggers, nudge data, Providence reports, Gardener analytics.

---

## Part 10: Database Tables CROS Depends On

| Table | CROS Usage |
|-------|-----------|
| `schola_nri_signals` | Posture resolution, glow triggers, Providence |
| `compass_user_state` | Guide progress, dismissed nudges, auto-open date |
| `app_event_stream` | Friction logging, analytics |
| `micro_guidance_events` | Friction guidance dedup tracking |
| `schola_ai_chat_sessions` | Chat session persistence |
| `schola_ai_chat_messages` | Chat history |
| `schola_nri_nudges` | Nudge dismissal |
| `schola_usage_counters` | Monthly AI usage per community |

---

---

# PROPRIA: Building CROS Into It

*Framework for applying the Schola's CROS patterns to Propria*

---

## What is Propria?

Before mapping the system, define Propria's equivalent of The Schola's community:

- **What is the primary entity?** (The "community" equivalent)
- **What are the user roles?** (admin, staff, member — or specific to Propria)
- **What are the key domain actions?** (the "courses, assignments, events" equivalent)

The framework below uses placeholders. Replace them as you define Propria's domain.

---

## Propria CROS: The Four Directions Remapped

Every application has its own version of these four orientations. For Propria, identify:

| Direction | Schola Domain | Propria Domain (TBD) |
|-----------|--------------|---------------------|
| **Formatio** | Academic growth | [Growth / progress / output] |
| **Sapientia** | Planning & scheduling | [Planning / decisions / structure] |
| **Cura** | Community care | [Relationships / wellbeing / presence] |
| **Reconciliatio** | Restoration | [Recovery / follow-up / re-engagement] |

---

## Propria CROS: Architecture Decisions

### Decision 1: Same Stack or Different?

The Schola uses: React + Supabase + Lovable AI Gateway + Edge Functions.

For Propria, you need to decide:
- **Same stack** (Supabase) → copy the patterns near-verbatim
- **Different backend** → adapt the patterns, replace Supabase calls with your API

The CROS patterns are stack-agnostic in concept — they just need:
1. A signal/event store (DB table or analytics sink)
2. A user-state store (for compass_user_state equivalent)
3. An AI chat endpoint
4. An action execution endpoint

### Decision 2: FAB vs. Embedded

The Schola uses a persistent FAB in the tenant layout. For Propria:
- **FAB** → same approach, works for any app with a persistent layout
- **Embedded sidebar panel** → always visible, no open/close
- **Inline contextual panel** → appears adjacent to current content

### Decision 3: Signal Sources

The Schola reads signals from domain-specific tables. For Propria, identify your equivalent signal types and map them to directions.

---

## Propria CROS: Files to Build

Here is the exact file structure to replicate, with what each file does:

### Hooks (core intelligence)

```
src/hooks/
  useCompassPosture.ts       → Direction engine (signal scoring + route fallback)
  useCompassSessionEngine.ts → Nudge engine (parallel DB queries → CompassNudge[])
  useCompassAutoOpen.ts      → Once-daily auto-open logic
  useCompassGlow.ts          → FAB glow on new signals
  useCompassGuide.ts         → New user onboarding guide
  useNarrativeCompanion.ts   → Friction detection (first-visit, idle, rage-click)
  useScholaCompassSession.ts → Signal fetching for the open drawer
  useVoiceInput.ts           → Web Speech API wrapper (optional)
```

### Content (data, not logic)

```
src/content/
  nudgeWording.ts     → NUDGE_TEMPLATES: type → { direction, type, messages{}, action? }
  frictionGuidance.ts → findFrictionEntries(path, role): FrictionEntry[]
  compassGuide.ts     → matchGuideEntry(path): GuideEntry | null
  chatPrompts.ts      → getQuickPrompts(role): string[]
```

### Components

```
src/components/compass/
  NRICompass.tsx       → The drawer itself (the main orchestrator)
  NRICards.tsx         → SignalCard, NudgeCard, ActionConfirmationCard, DailyGreeting
  ProvidenceSection.tsx → Quarterly narrative reflection
  SeasonalEchoCard.tsx → Anniversary / cyclical pattern cards
```

### Database Tables

```sql
-- User compass state (guide progress, dismissals, auto-open tracking)
compass_user_state (
  user_id, community_id,
  guide_sections_seen text[],
  guide_permanently_dismissed bool,
  dismissed_nudge_ids text[],
  dismissed_date date,
  last_auto_open_date date,
  updated_at timestamptz
)

-- Signal store (what happened, when, which direction)
propria_signals (
  id, community_id, user_id,
  signal_type text,    -- matches SIGNAL_KIND_MAP keys
  direction text,      -- formatio|sapientia|cura|reconciliatio
  detected_at timestamptz
)

-- Event stream (privacy-safe breadcrumbs)
app_event_stream (
  id, community_id, user_id,
  event_type text,
  event_data jsonb,    -- { entity_type, entity_id } only — no PII
  route text,
  created_at timestamptz
)

-- Friction guidance log
micro_guidance_events (
  id, community_id, user_id,
  route text,
  trigger_type text,  -- first_time_page | friction_idle | friction_rage_click
  guidance_key text,
  created_at timestamptz
)

-- AI chat (one session per user per community per day)
propria_ai_chat_sessions (
  id, community_id, user_id, created_at
)
propria_ai_chat_messages (
  id, session_id, role text, content text, created_at
)
```

### Edge Functions

```
propria-nri-chat       → AI chat with community context injection
propria-nri-execute    → Action execution (CRUD with role verification)
propria-detect-signals → Cron: scan for behavioral signals, write to propria_signals
```

---

## Propria CROS: Build Sequence

Build in this order — each step is independently testable:

### Phase 1: Signal Infrastructure
1. Create `app_event_stream` table + `logActionEvent()` utility
2. Instrument 5–10 key user actions to emit events
3. Create `propria_signals` table
4. Build `propria-detect-signals` edge function (can run manually first, cron later)

### Phase 2: Posture Engine
5. Define your `SIGNAL_KIND_MAP` (signal_type → direction)
6. Build `useCompassPosture.ts` (direction scoring from signals + route fallback)
7. Test: does direction change correctly as you navigate and take actions?

### Phase 3: FAB + Drawer Shell
8. Add FAB to your authenticated layout
9. Build the drawer shell (open/close, header, orientation line)
10. Wire up `useCompassPosture` → show direction label + color

### Phase 4: Nudge Engine
11. Define `NUDGE_TEMPLATES` for your domain (start with 5–8 nudge types)
12. Build `useCompassSessionEngine.ts` with parallel queries
13. Render NudgeCards in the drawer

### Phase 5: Glow + Auto-Open
14. Build `useCompassGlow.ts` — trigger on new signals
15. Build `useCompassAutoOpen.ts` — once-daily with `compass_user_state`

### Phase 6: Friction Detection
16. Define `frictionGuidance.ts` entries for your key routes
17. Build `useNarrativeCompanion.ts` (copy near-verbatim, update content source)

### Phase 7: Guide System
18. Define `compassGuide.ts` entries (one per major section)
19. Build `useCompassGuide.ts` (copy near-verbatim)

### Phase 8: AI Chat + Actions
20. Build `propria-nri-chat` edge function
21. Define your action tools in `propriaActions.ts` (CRUD per role)
22. Build `propria-nri-execute` edge function
23. Add ActionConfirmationCard + execute flow to the drawer

### Phase 9: Providence + Seasonal Echoes (optional)
24. Build quarterly narrative generation
25. Build anniversary/cyclical pattern detection

---

## Key Patterns to Carry Forward

### Always confirm before executing
Never execute an AI-suggested action without showing `ActionConfirmationCard` first. The user must click Confirm. This is the single most important trust-building pattern in the entire system.

### Signals, not polling
Don't poll the AI every N seconds. Instead, emit signals when things happen, then score them. The AI only runs when the user opens the drawer or sends a message.

### Role-scoped everything
Every nudge query, every AI tool, every action — filtered by user role at the source. Not post-filtered, but never fetched in the first place.

### Silent failure always
`logActionEvent()`, glow triggers, friction logging — all fire-and-forget with try/catch that swallows errors. These should never surface to the user or block their work.

### One auto-open per day
The compass never auto-opens more than once per day, per user. This is tracked in DB so it survives page refreshes. Automation (Playwright `navigator.webdriver`) suppresses all auto-behavior.

### Route as the last resort
Direction resolution always tries signals first, falls back to route pattern. This means the compass shows your *history* of work, not just your current page.

### Orientation-aware wording
Every nudge message has at least 2 variants. Write them for different organization types. This makes the intelligence feel less generic and more attuned to the user's context.

---

## Questions to Answer Before Building Propria CROS

1. **What are Propria's four direction equivalents?** (They don't need to be Latin — they need to be meaningful to your users.)

2. **What are the 10–15 signal types you want to track?** What actions in Propria are worth noting?

3. **What are the 8–10 nudge types you want to surface?** What things should the system proactively notice and tell the user about?

4. **What CRUD actions should NRI be able to perform?** Start small — 5–8 actions per role is plenty for v1.

5. **What are the 10–15 friction guide entries?** Which pages do new users struggle with?

6. **What is the "Providence" equivalent for Propria?** A quarterly narrative? A weekly summary? Or skip for v1?

Once you answer these, the framework above maps directly to code.
