# Propria — Claude Code Context

## What This Is
**Propria** (Latin: "one's own") — the operating system for Community Land Trusts (CLTs). 
Tagline: "Properly yours." Domain: **propria.land**

A CLT's primary product is a multi-decade stewardship relationship with each family. Propria manages that relationship through **CROS™** (Compass + Relational Operating System) powered by **NRI** (Natural Relational Intelligence).

## Brand Identity

### Fonts
- **Display:** Playfair Display (serif)
- **Body:** Source Serif 4
- **UI:** DM Sans

### Colors
```css
:root{
  --forest:#1B3A2D;--forest-mid:#2C5A45;--forest-light:#3D7A5F;
  --terra:#B85C38;--terra-light:#D4784F;--terra-pale:#F5E6DC;
  --gold:#C4963A;--gold-pale:#FDF6E3;
  --parchment:#F5F0E8;--parchment-dk:#EDE5D0;--cream:#FAF7F2;
  --ink:#1A1A14;--ink-mid:#3A3A2E;--ink-light:#6B6B58;--ink-faint:#9A9A88;
  --border:rgba(26,26,20,0.1);--border-light:rgba(26,26,20,0.06);
}
```

### Rules
- "Propria." always ends with period in terra/orange
- Forest green sidebar is sacred
- Cards: `border: 0.5px solid var(--border)`, `border-radius: 12px`
- Buttons: `border-radius: 8px`
- Pills: `border-radius: 6px`

## CROS™ Four Directions

| Direction | Latin | Domain | Color |
|-----------|-------|--------|-------|
| Itiner | Journey | Pipeline/applicant advancement | Blue |
| Custodia | Stewardship | Active homeowner care | Green |
| Cura | Care | Relational warmth | Gold |
| Reconciliatio | Reconciliation | Re-engagement | Coral |

## Current Architecture

### Combined File Structure
One HTML file (`propria-combined-v5.html`) with 8 views:

| View | ID | Purpose |
|------|----|---------|
| Marketing site | `v-mkt` | Public website |
| CLT Staff App | `v-clt` | Main staff interface |
| Homeowner Portal | `v-hw` | Homeowner-facing |
| Gardener Console | `v-grd` | Anthropic admin |
| Homebuyer Education | `v-edu` | 8-module course |
| Counselor Cert | `v-crt` | Certification program |
| Counselor Dashboard | `v-dsh` | Certified counselor view |
| Counselor Directory | `v-dir` | Public directory |

### View Switcher Pattern
```html
<div id="sw"><!-- Fixed top bar with view buttons --></div>
<div class="pv" id="v-clt"><div class="pv-inner" id="vid_v-clt">
  <!-- View content -->
</div></div>
```

CSS scoped with `#vid_v-clt .classname` pattern.

## Current Task: Fix CLT App Mobile Layout

### Problem
The CLT Staff App (`v-clt`) has broken mobile layout:
- Hamburger menu doesn't slide in properly
- Bottom nav positioning issues
- Too many conflicting CSS rules from iterative patches

### Solution
Rebuild CLT app CSS from scratch using `propria-mobile.html` as reference (this file has working mobile layout).

### Files in This Export
- `propria-handoff.md` — Full project context (480 lines)
- `propria-cros-framework.md` — CROS/NRI architecture details
- `propria-combined-v4.html` — Last stable combined version
- `propria-mobile.html` — **WORKING** mobile-only CLT app (use as reference)
- `clt-fresh.css` — Started fresh CLT CSS (mobile-first)
- `clt-fresh.html` — Started fresh CLT HTML structure

### Key CSS Patterns from Working Mobile File

**Shell:**
```css
.app{display:flex;flex-direction:column;height:100%;width:100%;position:relative;overflow:hidden}
```

**Topbar:**
```css
.topbar{background:var(--forest);height:var(--top-h);display:flex;align-items:center;padding:0 16px;gap:12px;flex-shrink:0;position:relative;z-index:50}
```

**Screens:**
```css
.screens{flex:1;overflow:hidden;position:relative}
.screen{position:absolute;inset:0;overflow-y:auto;overflow-x:hidden;background:var(--cream);display:none;padding-bottom:calc(var(--nav-h) + var(--safe-bottom) + 16px)}
.screen.active{display:block}
```

**Bottom Nav:**
```css
.bottom-nav{background:white;border-top:0.5px solid var(--border);height:calc(var(--nav-h) + var(--safe-bottom));padding-bottom:var(--safe-bottom);display:flex;align-items:stretch;flex-shrink:0;position:relative;z-index:50}
```

**Hamburger (critical - uses transform for animation):**
```css
.hamburger-overlay{position:fixed;inset:0;background:rgba(26,26,20,0.5);z-index:200;display:none}
.hamburger-overlay.open{display:block}
.hamburger-menu{position:absolute;top:0;left:0;bottom:0;width:280px;background:var(--forest);display:flex;flex-direction:column;transform:translateX(-100%);transition:transform 0.26s cubic-bezier(0.22,1,0.36,1);overflow-y:auto}
.hamburger-overlay.open .hamburger-menu{transform:translateX(0)}
```

## Key People
- **Tony Pickett** — CEO, Grounded Solutions Network
- **Ralph McCloud** — Director, CCHD, USCCB
- **Garrick Good** — ED, Northeast Housing Initiative
- **Jean Diaz** — ED, Saint Joseph CLT

## Market Context
- 308 CLTs in 48 states, 44,000+ shared equity homes
- **Homekeeper** — only known CLT-specific software competitor
- CCHD/USCCB — $400M deployed since 1970, primary distribution channel

## Pricing
| Tier | Homes | Price |
|------|-------|-------|
| Seedling | < 50 | $49/mo |
| Growing | 50–150 | $99/mo |
| Established | 150+ | $199/mo |
