# AGENTS.md — Operating guide for AI-assisted work

How to work in this repository. **The repo is the source of truth.** Facts below are **repo-derived** unless labeled *Recommendation* or **Maintainer directive**.

---

## Current active task (maintainer directive)

**Intent:** Integrate **Sanity CMS** for **attorney profiles**, keep **file-based data as fallback**, and preserve a **clean mapping** from schema → existing UI (no redesign of the profile experience).

| Do | Don’t |
|----|--------|
| Treat **`src/data/professionals.ts`** and **`src/types/professional.ts`** as the **contract** the CMS should satisfy (field names/shape as consumed today) | Refactor the whole app or introduce generic “content platform” abstractions unless the user explicitly requests them |
| Add the **minimum** Sanity surface: schema, env, fetch (e.g. GROQ), map to **`Professional`** (or equivalent) types, wire **`/professionals`** and **`/professionals/[slug]`** with fallback when CMS/env is missing | Expand scope to practice areas, case results, or global navigation in the same pass without explicit approval |

**Focus file:** `src/data/professionals.ts` → blueprint for the Sanity document model and for fallback data.

When this section conflicts with older wording elsewhere in the doc, **this section wins** until the integration ships and the doc is updated again.

---

## 1. Project goals (inferred from implementation)

These are **not** formal OKRs from the repo; they reflect what the codebase is built to support:

- **Marketing & credibility:** Present the firm (litigation, trial, corporate counsel) with consistent branding, attorney profiles, practice areas, and case results.
- **Discovery:** SEO via per-route `metadata` / `generateMetadata`, canonical URLs (`alternates.canonical`), `src/app/sitemap.ts`, `src/app/robots.ts`, and Organization JSON-LD in `src/app/layout.tsx`.
- **Inbound contact:** Lead visitors to `/contact`; submissions go through **`POST /api/contact`** (Resend). Honeypot field `website` in the form payload.
- **Maintainability:** Typed content modules under `src/data/`, shared components under `src/components/`, minimal duplication.

---

## 2. Design direction & UX standards

### Design authority (non-negotiable)

This is a **premium, high-end law firm** site. Design should feel **minimal**, **expensive**, and **intentional**.

- **Avoid:** clutter; overuse of color; generic SaaS-style UI (dense cards, loud gradients, stock “startup” patterns).
- **Prefer:** strong typography; clean spacing; **subtle** motion (purposeful, not decorative noise).

**When in doubt → reduce, simplify, refine.** New UI should pass this bar before shipping.

### Current patterns in code (repo-derived)

**Visual language (from `globals.css`, layouts, and components):**

- **Global default:** Dark shell — `body` background `#0a0a0a`, light text; **Manrope** for UI/body; headings use the same stack unless overridden.
- **Firm serif:** **Cormorant Garamond** via `--font-firm-serif` for wordmark/brand moments (see `Logo`, `SectionHeading` variants).
- **Homepage:** Editorial dark sections, scroll-driven reveal patterns (`homepage-scroll-reveal`, `snap-section`, keyframes in `globals.css`). Prefer existing section components over new one-off layouts.
- **Contrast exception:** **Legal/policy pages** using `LegalPageLayout` use a **light** theme (`bg-white` / `text-neutral-900` / prose). Do not force dark theme there without an explicit product decision.
- **Motion:** Keep it subtle and consistent with existing keyframes/utilities; avoid heavy global listeners or flashy effects. Hero and homepage motion is intentional — match duration/easing in `globals.css` when extending.

**UX expectations:**

- **Navigation:** Header is client-driven (scroll state, mega menu, mobile drawer). Preserve keyboard/pointer dismiss behavior when touching `Header` or menus.
- **Accessibility:** Keep meaningful **`alt`** on informative images; preserve **`sr-only`** and landmark usage where present; do not remove focus-visible affordances on interactive controls.
- **Consistency:** Reuse **`SectionHeading`**, **`CTABand`**, **`ImageContentSection`**, **`PageHero`**, layout tokens in `src/lib/luxuryLayout.ts` and `src/lib/homepageEditorialLayout.ts` before inventing new spacing or type scales.

---

## 3. Content safety — law firm site (agent rules)

These are **editorial/legal-risk guardrails** for any copy, metadata, or data you add or change:

- **No fabrication:** Do not invent attorney names, bar admissions, awards, case results, clients, testimonials, or statistics. Only use what exists in **`src/data/`** or assets the user explicitly provides.
- **No guarantees:** Avoid language that promises outcomes (“we will win,” guaranteed results). Prefer factual, services-oriented wording consistent with existing pages.
- **Sensitive claims:** Do not add comparative/superlative legal claims (“best,” “#1”) unless they appear verbatim in provided source material and the user confirms they may be used.
- **Jurisdiction & compliance:** Do not assume rules for advertising or disclaimers beyond what the site already implements; *Recommendation:* flag new marketing copy for human attorney review.
- **Privacy & PII:** Treat contact API payloads as sensitive; do not log full message bodies to the client or third-party analytics without an explicit requirement.

---

## 4. Development rules — this codebase

### How to approach changes

1. **Understand** existing patterns in nearby files (layout, data flow, naming, Tailwind usage) before editing.
2. **Reuse** — extend or compose existing components and helpers (**§8**, **`src/lib/`**) before adding new primitives.
3. **Scope** — keep the diff **minimal** and targeted to the requested behavior; avoid drive-by refactors (**§4 Things to avoid**).
4. **Quality bar** — favor **performance** (server-first, bounded client work) and **clarity** (readable, boring code) over clever abstractions.

- **TypeScript:** `strict` is on. New code should type-check with `npm run build`.
- **Lint:** Run **`npm run lint`** when changing TS/TSX; fix or justify new violations.
- **Imports:** Use alias **`@/...`** → `src/...` (see `tsconfig.json`).
- **Data changes:** Structured site content belongs in **`src/data/`** with types under **`src/types/`** when shared. Keep slugs stable for **`generateStaticParams`** and **`sitemap.ts`**.
- **API routes:** Only **`src/app/api/contact/route.ts`** today. Validate input, use existing patterns (`LIMITS`, `isValidEmail` from `src/lib/validation.ts`), preserve honeypot behavior.
- **Env vars (contact):** `FORMSPREE_ENDPOINT` (preferred) or `NEXT_PUBLIC_FORMSPREE_ENDPOINT` — missing config yields **503** `unavailable` from the handler (see route implementation).
- **Before claiming “done”:** Run **`npm run build`** locally.

### Things to avoid

- **Dependencies:** Do not add **new libraries** unless necessary; prefer existing Next.js, React, Tailwind, and packages already in **`package.json`**.
- **Scope:** Do not **refactor large parts** of the codebase without an explicit request; keep changes localized.
- **Design:** Do not **change existing design patterns** (typography, spacing, motion, section structure) unless the user directs a deliberate refresh; follow §2.
- **Components:** Do not **duplicate** UI that already exists under **`src/components/`** — extend or compose instead (see §8).
- **Rendering:** Do not **convert Server Components to Client Components** without a concrete need (hooks, browser-only APIs, event handlers). Default stays server-first (see §6).

---

## 5. Where new code should go

| You are adding… | Put it in… |
|------------------|------------|
| New page or route segment | `src/app/...` (colocate `page.tsx`, optional `layout.tsx`) |
| Route handler | `src/app/api/<name>/route.ts` |
| Shared UI (reusable) | `src/components/` — use a subfolder: `layout/`, `contact/`, `profiles/`, `team/`, `practice/`, `ui/`, etc., matching nearest neighbor |
| Site copy, nav, entity records | `src/data/*.ts` |
| Pure helpers (no React) | `src/lib/*.ts` |
| Sanity client, queries, mapping to domain types | `src/lib/` or `src/sanity/` (small, colocated) — *Recommendation:* one obvious entry (e.g. `lib/sanity.ts` + `lib/professionalsFromSanity.ts`) over many layers |
| Shared interfaces | `src/types/*.ts` |
| Static images, favicon, public files | `public/` (reference as `/...` in app) |
| Global styles, keyframes, Tailwind theme | `src/app/globals.css` |

**Heuristic:** If it renders, start under `components/` or `app/`. If it is data, `data/`. If both pages and components need a constant layout formula, `lib/`.

---

## 6. Performance, images, and Server vs Client Components

**Current state**

- **Rendering:** App Router with **React Server Components** by default. **`generateStaticParams`** is used for **`practice-areas/[slug]`** and **`professionals/[slug]`** (backed by `src/data/practiceAreas.ts` and `src/data/professionals.ts`).
- **Images:** **`next/image`** is standard. **`next.config.ts`** allows remote images only from configured **`images.remotePatterns`** (currently includes `images.unsplash.com`). Local assets live under **`public/`**.
- **Homepage client work:** `HeroRotatingWords`, scroll/reveal behavior, **`CursorBadgeTrail`** (pointer-driven, desktop-gated via `matchMedia`) — keep new homepage interactivity bounded and cleaned up (listeners, timers, RAF).

**Rules for agents**

1. **Default to Server Components** in `src/app/**/page.tsx`. Add **`"use client"`** only for hooks, browser APIs, or event handlers that cannot run on the server.
2. **`next/image`:** Provide sensible **`sizes`** for responsive layouts; use **`priority`** only for above-the-fold LCP candidates (e.g. hero). Do not add large remote hosts without updating **`next.config.ts`**.
3. **Avoid** shipping wide client boundaries: prefer passing serializable props from server pages into small client leaf components.
4. **Expensive listeners:** If adding scroll/resize/pointer handlers, use passive listeners where appropriate, throttle or RAF-coalesce updates, and clean up in `useEffect` teardown. *Recommendation:* mirror patterns in `CursorBadgeTrail` / `Header` for consistency.
5. **Data fetching:** No global SWR/React Query in repo today. For **Sanity + professionals** (see **Current active task**), use `fetch` (or `@sanity/client`) with Next caching **`revalidate`** / **tags** as appropriate; keep fallbacks explicit when env or query fails.

---

## 7. Architecture reference (facts)

```
src/app/           App Router: layouts, pages, error.tsx, not-found.tsx
src/app/api/       Route handlers (contact)
src/components/    UI by domain (layout/, contact/, profiles/, team/, …)
src/data/          Site copy, nav, professionals, practice areas, case results, firm constants
src/lib/           Layout helpers, validation, homepage layout tokens
src/types/         Shared TS types for entities and forms
public/            Static images, badges, llms.txt
```

- **Static routes** include `/`, `/about`, `/contact`, `/practice-areas`, `/professionals`, `/case-results`, `/our-favorite-things`, `/terms`, `/privacy-policy`, `/anti-spam` (see `sitemap.ts` for the canonical list).
- **Dynamic routes:** `/practice-areas/[slug]`, `/professionals/[slug]` with static param generation from data modules.
- **Root layout:** `Header` → `{children}` → `Footer`; site metadata and JSON-LD in `layout.tsx`.

---

## 8. Reusable components (inventory — non-exhaustive)

| Area | Examples |
|------|-----------|
| Layout | `Header`, `Footer`, `Logo`, `DesktopMegaMenu`, `MobileMenu` |
| Marketing / sections | `HeroRotatingWords`, `SectionHeading`, `ImageContentSection`, `CTABand`, `PageHero`, `ScrollDownButton` |
| Motion / reveal | `HomeReveal`, `AnimatedSection` (+ `globals.css` homepage animations) |
| Profiles | `ProfileHero`, `BioShowMore`, `CredentialsAccordion`, `MeetOthers`, carousels |
| Practice | `PracticeHeroImage` |
| Team / listings | `TeamHero`, `MembersGrid`, `CaseResultsList` |
| Contact | `ContactForm`, `InfoCard` |
| Forms UI | `Field`, `TextArea`, `FormFieldWrapper` |
| Legal boilerplate | `LegalPageLayout` |
| Effects | `CursorBadgeTrail` (hero only; desktop fine-pointer gate) |

---

## 9. CMS & integrations

**Current state (repo fact, may lag active work)**

- **Runtime content** is still served from **`src/data/*.ts`** and **`public/`** until Sanity wiring merges.
- **Sanity** dependencies exist in **`package.json`**; **integration in `src/`** (studio path, schema, queries) **may be incomplete or absent** on your branch — verify before assuming env vars or routes exist.

**Do not assume**

- Sanity is configured end-to-end: **check** for `SANITY_*` (or project-specific) env docs in-repo and for **`next.config.ts`** `images.remotePatterns` entries if using **Sanity CDN** with **`next/image`**.
- The whole site is CMS-driven: **active task scope is attorney profiles only** (see top of doc).

*Recommendation:* Keep **`slug`** values stable for **`generateStaticParams`**, **`sitemap.ts`**, and internal links; document env vars next to the integration PR.

---

## 10. Current priorities & gaps

**Active product focus (maintainer directive):** See **Current active task** — Sanity for **professionals** + **file fallback** + **schema ↔ UI alignment**; **no** full-app CMS migration in the same pass.

**Observed from the repo (factual gaps):**

- No automated **tests** (no Jest/Vitest/Playwright config in tree).
- Contact delivery depends on **env configuration** and external **Resend** availability.

*Recommendation — confirm with maintainers:*

- After professionals Sanity ships: extend CMS or keep file-based data for other sections as a separate decision.
- Add basic E2E or API tests for `/api/contact` and critical navigation.
- Hardening for contact endpoint (rate limiting, monitoring) if traffic warrants.

Agents should **not** silently reprioritize legal copy or firm claims; ask the user when scope touches attorney bios, results, or compliance pages.

---

## Claude usage notes *(optional)*

For **Claude** (or similar coding assistants) working in this repo:

- **Reason first:** Prioritize understanding and reasoning **before** proposing or applying code changes.
- **Tradeoffs:** When suggesting **architecture** or dependency shifts, spell out **tradeoffs** and align with **§4** (minimal scope, avoid unnecessary abstractions).
- **No silent assumptions:** Do not assume requirements or implementation details — **ask** if scope, CMS behavior, or copy is ambiguous.
- **Constraints:** Treat **`AGENTS.md`** as the **source of truth** for project constraints; defer to it over generic best practices when they conflict.

---

## 11. Quick checklist before opening a PR or handing off

- [ ] `npm run build` passes  
- [ ] `npm run lint` passes (or violations explained)  
- [ ] **Design authority (§2):** minimal, premium, intentional — no clutter or generic SaaS UI  
- [ ] **§4:** **How to approach changes** (understand → reuse → minimal scope → clarity over cleverness) and **Things to avoid** (deps, broad refactors, pattern drift, duplicate UI, gratuitous `"use client"`)  
- [ ] New images optimized and referenced correctly; remote hosts allowed in config if needed  
- [ ] No invented firm/legal content; data edits confined to `src/data` or user-supplied text  
- [ ] Client components minimized; listeners/timers cleaned up  
- [ ] Metadata/sitemap implications considered for new routes  
- [ ] If touching **professionals / Sanity:** fallback path works when CMS or env is missing; **§ Current active task** respected (scoped, minimal abstraction)  
