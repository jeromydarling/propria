# Propria — Complete Project Handoff
*Full thread knowledge capture — April 1, 2026*
*Use this to start fresh in a new chat and pick up exactly where we left off.*

---

## 1. What Propria Is

**Propria** (Latin: "one's own") is the operating system for Community Land Trusts (CLTs). Tagline: **"Properly yours."** Domain: `propria.app`

Powered by **CROS™** (Compass + Relational Operating System) and **NRI** (Natural Relational Intelligence) — the same ambient intelligence architecture that powers The Schola, adapted for the CLT world.

### The Core Insight
A CLT's primary product is a **multi-decade stewardship relationship** with each family they serve. Not just the sale. Propria is built around that relationship — surfacing who needs attention, what's at risk, and what comes next, without the staff having to hunt for it.

### Catholic Distributist Roots
Explicitly grounded in Catholic Social Teaching — particularly distributism (Chesterton, Belloc) and the principle of subsidiarity. Property ownership as dignified participation in the common good, not a financial transaction.

**Key institutional relationship:** USCCB / CCHD (Catholic Campaign for Human Development) — $400M deployed since 1970, direct Strategic National Grant already given to Grounded Solutions Network for CLT expansion. This is Propria's distribution channel and credibility anchor in Catholic institutions.

---

## 2. Key People

| Person | Role | Relevance |
|--------|------|-----------|
| **Tony Pickett** | CEO, Grounded Solutions Network | Primary distribution partner. 300+ CLT members. |
| **Ralph McCloud** | Director, CCHD, USCCB | Institutional Catholic funding gateway. |
| **Garrick Good** | Executive Director, Northeast Housing Initiative | Early adopter target. |
| **Jean Diaz** | Executive Director, Saint Joseph CLT | Early adopter target. |

---

## 3. Brand Identity

### Fonts
- **Playfair Display** — Display/headings (bold, italic available)
- **Source Serif 4** — Body text
- **DM Sans** — UI labels, navigation, buttons

### Colors
```css
--forest:      #1B3A2D   /* Primary — sidebar, headers */
--forest-mid:  #2C5A45
--forest-light:#3D7A5F
--terra:       #B85C38   /* Accent — CTAs, "Propria." dot */
--terra-light: #D4784F
--gold:        #C4963A   /* Secondary accent */
--parchment:   #F5F0E8   /* Light background */
--parchment-dk:#EDE5D0
--cream:       #FAF7F2   /* Screen background */
--ink:         #1A1A14   /* Primary text */
--ink-mid:     #3A3A2E
--ink-light:   #6B6B58
--ink-faint:   #9A9A88
```

### Visual Identity Rules
- "Propria." always ends with a period in **terra/orange** (`#D4784F`)
- Forest green sidebar is sacred — never change it
- Playfair Display at large size with `letter-spacing: -0.02em`
- Cards: `border: 0.5px solid var(--border)` — NOT 1px
- Border radius: 12px cards, 8px buttons, 6px pills

---

## 4. CROS™ / NRI Architecture

### The Four Directions (Propria's version)

| Direction | Latin | Domain | When it fires |
|-----------|-------|--------|---------------|
| **Itiner** | Journey | Applicant advancement, pipeline progression | Education completed, stage advanced, counselor assigned |
| **Custodia** | Stewardship | Active homeowner care, lease compliance | Check-in overdue, maintenance open, payment received |
| **Cura** | Care | Relational warmth, community health | 30+ days no contact, life event, community engagement |
| **Reconciliatio** | Reconciliation | Re-engagement, overdue resolution | Missed payment, lapsed contact, risk flag raised |

### NRI Compass
A floating action button (FAB) in the CLT staff app. Opens a drawer with:
1. Direction indicator (which arm is active)
2. Top 3 nudges (direction weight × confidence, sorted)
3. Quick action prompts
4. AI chat input with CLT context injected

The **Praeco** screen is the main CROS interface for outreach (email, events, content).

---

## 5. All Views Built

### 5.1 CLT Staff App — `propria-mobile.html`
**Persona:** Sarah, stewardship coordinator at Rondo CLT, Saint Paul MN
**Layout:** Mobile-first (bottom nav + hamburger); desktop at 1100px+ = left sidebar (220px forest green) + content

**11 Screens:**
| Screen | Content |
|--------|---------|
| Dashboard | NRI attention feed, metrics (47 families, 94% lease collected), today's tasks |
| Stewardship | List → slide to Maria Torres detail (NRI banner, contact log, checklist) |
| Pipeline | Active applicants → slide to Keisha Johnson (stage bar, docs, education, NRI flag) |
| Praeco | Email campaigns (Gmail-native), events, outreach, SEO content |
| Resale Engine | 14 Oak St. through full closing — formula calc, buyer match, closing fees |
| Asset Management | Property portfolio, maintenance history, inspections |
| Maintenance | Open requests, contractor tracking |
| Governance | Board meetings, voting records, policy docs |
| Finances | Ground lease revenue, reserve fund, receivables |
| Settings | Org details, formula config, integrations, billing |
| Account | Staff profile, notifications |
| Counselors/Network | HUD counselors assigned to this CLT |

**Desktop Sidebar Nav:** Dashboard, Stewardship, Pipeline, Praeco, Resale, Assets, Maintenance, Governance, Finances, Counselors, Settings, My Account

**Key JS:** `showScreen()`, `syncDsc()`, `openHamburger()`, `closeHamburger()`, `openCompass()`, `closeCompass()`, `openSheet()`, `closeSheet()`

---

### 5.2 Homeowner Portal — `propria-homeowner.html`
**Persona:** Maria Torres, 14 Oak Street, Rondo CLT
**Layout:** Mobile bottom nav; desktop = 220px forest green sidebar + content

**5 Screens:** Home, My Home, Community, Contact CLT, Account

**Home screen shows:** Good morning greeting, 14 Oak Street card (6.2 years owned, $14.2k equity built, $48/mo lease), payment status (April collected, autopay), equity chart ($14,200 above original purchase price)

**Desktop Sidebar:**
- "Propria." brand + "Rondo Community Land Trust"
- MT avatar + "Maria Torres" + "14 Oak Street"
- Nav: Home (`home-hw`), My Home (`myhome-hw`), Community (`community-hw`), Contact CLT (`contact-hw`), Account (`account-hw`)

**Key JS:** `showScreen()`, `openSheet()`

---

### 5.3 Gardener Console — `v1_propria-gardener.html`
**Persona:** Network operator / Grounded Solutions staff
**Layout:** Desktop-first (full-width), collapses to mobile

**5 Zones:** Conspectus (cross-CLT map), Praeco (network broadcast), Itiner (pipeline), Machina (config), Silentium (demo)

---

### 5.4 Marketing Site — `propria-marketing.html`
- Hero: "Property for the many, not the few."
- Credibility strip: $400M CCHD, 300+ CLTs, $49/mo
- CCHD section with pullquotes from Tony Pickett, Ralph McCloud, Garrick Good
- Pricing: $49/mo (under 50), $99/mo (50–150), $199/mo (150+)

---

### 5.5 Homebuyer Education — `propria-education.html`
**Persona:** Applicant going through required CLT education
**Layout:** Mobile shell; desktop = left sidebar (Course Home, My Certificate)

**6 Modules (sequential, 70% passing threshold each):**
1. Your Financial Picture as a CLT Buyer
2. How a CLT Works
3. Your Ground Lease — Line by Line (all 8 provisions)
4. Resale Formula Deep Dive (3 formula types, worked examples)
5. Your CLT's Programs (editable per CLT)
6. Final 20-Question Assessment → Certificate

**⚠️ JS CONFLICT with Cert (see §6)**

---

### 5.6 Counselor Certification — `propria-counselor-cert.html`
**Persona:** HUD-certified counselor getting CLT-specific certification
**Layout:** Mobile shell; desktop = left sidebar (Course Home, My Certificate)

**4 Modules:**
1. CLT Mechanics for Counselors (3 formula types, ground lease walkthroughs, equity planning)
2. Conducting the CLT Session (structure, what to cover, handling confusion)
3. Financing, Fair Housing & Ethics (lender compatibility, ECOA, CLT-familiar lenders)
4. Working in Propria (counselor dashboard, documentation, Read.ai)

Plus practical assessment (30 questions) + final certificate (4.0 CEU hours)

**⚠️ CRITICAL: 10 function names + `MODULES` variable conflict with Education** (see §6)

---

### 5.7 Counselor Dashboard — `propria-counselor-dash.html`
**Persona:** Sarah Wilkins, HUD-certified CLT counselor
**Layout:** Full-width SaaS (220px sidebar + content); collapses to bottom nav on mobile

**Tabs:** Dashboard, Schedule, Clients, Messages, Documentation, Certification

**Read.ai Integration (mock):** Post-session summary + action items appear under "Read.ai" tab in session detail. "Import tasks" button.

**Session Setup captures:** Client (with CLT context auto-pulled), type, format, Meet/Zoom/Teams link, date+time, duration, Read.ai toggle, prep notes

**Key JS:** `showScreen`, `openNewSession`, `closeNewSession`, `openSessionDetail`, `closeSessionDetail`, `selectType`, `selectFormat`, `selectDur`, `setMeet`, `autofillCLT`, `submitNewSession`, `renderSessionDetail`, `switchSessTab`

---

### 5.8 Counselor Directory — `propria-counselors.html`
Public-facing page. 8 counselors with filter chips, search, card grid, detail sheet overlay. Filter chips: All, Available Now, CLT Certified, HUD Approved, Video, In-person, Spanish.

---

## 6. The Combined File — `propria-combined-v3.html`

### Architecture
One HTML file, all 8 views. Forest green switcher bar (46px fixed at top). Each view = `.pv` div (`position:fixed; top:46px; left:0; right:0; bottom:0`).

**View IDs:** `v-mkt`, `v-clt`, `v-hw`, `v-grd`, `v-edu`, `v-crt`, `v-dsh`, `v-dir`

### The Critical `pv-inner` Fix
```css
/* CORRECT — fills position:fixed parent */
.pv-inner { position: absolute; inset: 0; overflow: hidden; }

/* WRONG — resolves to viewport height, not container height */
.pv-inner { height: 100%; width: 100%; overflow: hidden; }
```
The wrong version makes `pv-inner` 728px (full viewport) while `.pv` is only 682px (viewport minus 46px switcher), pushing the bottom nav 46px below the visible area.

### The sv() Switcher — NEVER use template literals
```javascript
function sv(id){
  document.querySelectorAll(".pv").forEach(function(v){v.classList.remove("on");});
  document.querySelectorAll(".sw-btn").forEach(function(b){b.classList.remove("on");});
  document.getElementById(id).classList.add("on");
  document.querySelectorAll(".sw-btn").forEach(function(b){
    if(b.getAttribute("onclick")==="sv('"+id+"')") b.classList.add("on");
  });
  if(id==="v-edu"&&window._rebind__EDU)window._rebind__EDU();
  if(id==="v-crt"&&window._rebind__CERT)window._rebind__CERT();
}
```
Template literals in `sv()` get corrupted by the file build process. Always use string concatenation.

### Education + Cert JS Namespacing
Both scripts share these names: `showView`, `renderHome`, `openModule`, `renderLesson`, `nextLesson`, `prevLesson`, `startQuiz`, `renderQuiz`, `goHome`, `save`, `MODULES`.

Fix: wrap each in an IIFE with a namespace object:
```javascript
var _EDU = {};
(function(){
  // all education JS here
  _EDU["showView"] = showView;
  _EDU["renderHome"] = renderHome;
  _EDU["MODULES"] = MODULES;
  // ... all other functions
})();
window._rebind__EDU = function(){
  if(_EDU["showView"]) window["showView"] = _EDU["showView"];
  if(_EDU["renderHome"]) window["renderHome"] = _EDU["renderHome"];
  if(_EDU["MODULES"]) window["MODULES"] = _EDU["MODULES"];
  // ... all others
  if(_EDU["renderHome"]) _EDU["renderHome"](); // re-render on switch
};
```
Same for `_CERT`. `sv()` calls the rebind when switching to that view.

### Conflicting DOM IDs (Cert vs Education)
These 12 IDs appear in both Education and Cert HTML. In `propria-combined-v3.html`, the cert versions have been prefixed with `crt_`:

`certContent`, `lessonContent`, `lessonCounter`, `mainScroll`, `moduleList`, `nextBtn`, `overallLabel`, `prevBtn`, `quizBody`, `quizBtn`, `quizMeta`, `quizTitle`

### CSS Scoping
All per-view CSS scoped with `#vid_{view-id}` prefix:
- `html, body` → `#vid_{vid}`
- `body .foo` → `#vid_{vid} .foo`
- `:root` and `*` stay global (not scoped)

### CSS Variables Shared in `:root`
The combined file's global `:root` must include ALL variables used by any view:
```css
:root {
  /* ... brand colors ... */
  --sw-h: 46px;
  --nav-h: 62px;
  --top-h: 54px;
  --rail: 64px;
  --sidebar: 220px;
  --safe-bottom: env(safe-area-inset-bottom, 0px);
}
```
Missing `--nav-h` causes bottom nav to have `height: 0`.

### Cloudflare Script Injection
Claude.ai injects `<script data-cfasync="false" src="/cdn-cgi/scripts/...">` into HTML body. When copying body content from standalone files:
- Skip ALL `<script` tags (including `src=` ones AND `data-cfasync` ones)
- Skip inline `<style>` tags inside body
- Failure to skip the cfasync tag causes its closing `</script>` to never fire, leaking all subsequent JS as raw HTML text

### Desktop Sidebar for Phone-Frame Views
In the combined file, Homeowner/Education/Cert get a sidebar instead of a phone frame. The `.pv` becomes `display:flex; flex-direction:row`:
```css
@media(min-width: 769px) {
  #vid_v-hw { display: flex; flex-direction: row; }
  .propria-sidebar { width: 220px; min-width: 220px; height: 100%; background: var(--forest); }
  #vid_v-hw .app { flex: 1; min-width: 0; }
  #vid_v-hw .bottom-nav { display: none; }
}
```

### File Writing (Critical)
```python
# Always binary write + fsync
with open('/mnt/user-data/outputs/propria-combined-v3.html', 'wb') as f:
    f.write(data); f.flush(); os.fsync(f.fileno())
```
- Stop HTTP server before writing (outputs FS throws I/O errors when server has file locked)
- Never use `shutil.copy2()` — silently fails

---

## 7. Data Model (Implied from UI)

### Core Tables for Lovable/Supabase

```sql
-- CLT organization (tenant)
clts (id, name, city, state, mission, formula_type, ground_lease_fee, 
      est_year, home_count, created_at)

-- Users (staff / homeowners / counselors / admins)
users (id, clt_id, name, email, role, avatar_initials, created_at)
-- role: 'coordinator' | 'director' | 'admin' | 'homeowner' | 'counselor'

-- Homeowners
homeowners (id, clt_id, user_id, address, purchase_price, purchase_date,
            ground_lease_fee, equity_built, last_contact_date,
            nri_direction, attention_score, contact_log jsonb)

-- Applicants / pipeline
applicants (id, clt_id, name, email, phone, stage int, -- 1-8
            income_docs_status, education_progress int, -- 0-100%
            assessment_score int, lender_compatibility,
            assigned_counselor_id, nri_flag, nri_direction)

-- Properties
properties (id, clt_id, homeowner_id, address, status,
            maintenance_requests jsonb, inspection_history jsonb)

-- Counselors (external HUD-certified)
counselors (id, name, org, certifications text[], languages text[],
            availability, clt_cert_status, ceu_hours, headshot_url)

-- Counseling sessions
sessions (id, counselor_id, applicant_id, clt_id,
          type, -- 'first' | 'followup' | 'checkin'
          format, -- 'video' | 'phone' | 'inperson'
          scheduled_at, duration_min, status,
          prep_notes, counselor_notes, checklist_items jsonb,
          readai_summary, readai_tasks jsonb,
          post_session_assessment_score)

-- Education progress (homebuyer course)
education_progress (id, user_id, module_id, lessons_complete jsonb,
                    quiz_score, final_assessment_score, cert_issued_at)

-- Cert progress (counselor certification)
cert_progress (id, counselor_id, module_id, quiz_score,
               practical_score, cert_issued_at, ceu_hours, renewal_date)

-- CROS: signal store
propria_signals (id, clt_id, user_id, signal_type, direction,
                 entity_type, entity_id, detected_at)

-- CROS: user state
compass_user_state (user_id, clt_id, dismissed_nudge_ids text[],
                    dismissed_date date, last_auto_open_date date,
                    guide_sections_seen text[], updated_at)
```

---

## 8. CROS Signal Map (Propria)

```
Signal Type                → Direction      
contact_logged             → Custodia       
maintenance_request        → Custodia       
ground_lease_paid          → Custodia       
check_in_completed         → Custodia       
lease_payment_overdue      → Reconciliatio  
contact_overdue_30d        → Reconciliatio  
risk_flag_raised           → Reconciliatio  
application_submitted      → Itiner         
stage_advanced             → Itiner         
education_module_done      → Itiner         
session_completed          → Itiner         
counselor_assigned         → Itiner         
event_rsvp                 → Cura           
community_message          → Cura           
new_homeowner_joined       → Cura           
birthday_upcoming          → Cura           
```

---

## 9. What's Left to Build

### Immediate (Active Bugs in Combined File)
1. **Education + Cert tests broken** — IIFE namespacing + DOM ID prefixing (see §6). File: `propria-combined-v3.html`
2. **All nav links in combined file** — All onclick functions must be exported to `window`

### Features Not Yet Designed
1. **CLT Onboarding Flow** — New CLT setup wizard
2. **Applicant Self-Service Portal** — What Keisha sees. File started: `propria-applicant-keisha.html` (42kb)
3. **Praeco full build** — Email composer wired to Gmail API, events, Perplexity feed
4. **NRI Compass drawer** — Full CROS drawer with real AI (currently mocked)
5. **Resale Calculator** — Interactive formula tool

---

## 10. JSON Files Needed (Next Priority)

Extract all hardcoded HTML data into structured JSON for Lovable:

```
/data/
  clts.json               — CLT orgs (Rondo CLT, etc.)
  homeowners.json         — Maria Torres + others with full profiles
  applicants.json         — Keisha Johnson + others with full pipeline data
  counselors.json         — 8 counselors from directory with full profiles
  sessions.json           — Session records with Read.ai summaries and tasks
  education_modules.json  — All 6 modules: lessons, knowledge checks, quizzes, answers
  cert_modules.json       — All 4 modules: lessons, quizzes, practical scenarios
  nudge_templates.json    — NRI nudge types → direction, type, message variants
  signal_kind_map.json    — signal_type → direction mapping
```

---

## 11. Demo Personas

| Persona | Who | App | Key Data |
|---------|-----|-----|----------|
| **Sarah** | CLT coordinator, Rondo CLT | propria-mobile | 47 families, 94% lease collected, 12 active applicants |
| **Maria Torres** | Homeowner, 14 Oak St. | propria-homeowner | 6.2 yrs owned, $14.2k equity, $48/mo, autopay |
| **Keisha Johnson** | Applicant, Stage 4 | CLT app Pipeline | 64% assessment, resale formula gaps, counselor assigned |
| **Sarah Wilkins** | HUD counselor, LSS Financial | propria-counselor-dash | 5 active clients, Read.ai integrated, CLT certified |
| **Network operator** | Grounded Solutions staff | propria-gardener | Multi-CLT oversight |

---

## 12. Pricing Model

| Tier | Homes | Price |
|------|-------|-------|
| Seedling | < 50 | $49/mo |
| Growing | 50–150 | $99/mo |
| Established | 150+ | $199/mo |

CCHD grant-eligible. Annual discount available.

---

## 13. Architecture Decisions Made

1. **Stack:** Supabase (same as The Schola — CROS patterns copy near-verbatim)
2. **CLT as tenant** — Multi-tenant architecture, each CLT has isolated data
3. **CROS as ambient layer** — FAB in authenticated layout, not a separate page
4. **Education + Counselor Cert as separate personas** — Different JS namespaces, different UX shells
5. **Counselor as external persona** — Not CLT staff. Part of a Propria-certified network.
6. **Read.ai integration** — Webhook-based post-session summary import, not real-time
7. **Gmail-native email** — No ESP. Emails come from staff's own Gmail account (same as Schola).
8. **No phone frame on desktop in combined file** — Desktop shows sidebar + full-width content

---

## 14. Lessons Learned (Technical)

These hard-won lessons should inform the next Claude session:

1. **Version every file before editing.** Save as `propria-X-v{N}.html` before any modification. Never overwrite.
2. **`position:fixed` on a div ≠ `position:fixed` on body.** On a div, it anchors to nearest containing block, not viewport. Use `position:absolute;inset:0` for view containers.
3. **`height:100%` on a child of `position:fixed` resolves to viewport height**, not the fixed element's own height. Use `inset:0` instead.
4. **`overflow:auto` on a positioned ancestor breaks `position:fixed` children.** It creates a new containing block.
5. **Cloudflare injects scripts into body HTML.** Skip `<script data-cfasync` when copying body content, not just `<script src=`.
6. **Template literals in HTML file build scripts get corrupted.** Always use string concatenation in the `sv()` switcher function.
7. **Duplicate element IDs across views** cause `getElementById` to always find the first one. Prefix IDs per view.
8. **`var MODULES` re-declaration doesn't throw but last declaration wins.** Must use IIFEs + namespace objects for true isolation.
9. **Test in the actual browser before declaring victory.** Use Claude in Chrome to verify visually.
10. **Stop the HTTP server before writing output files.** The server holds a file lock.
