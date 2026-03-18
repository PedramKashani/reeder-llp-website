# External Assets & Dependencies Audit Report

**Project:** Reeder McCreary Website  
**Date:** March 10, 2025  
**Scope:** All image, logo, badge, PDF, icon, and downloadable media not from a source you fully control.

---

## 1. Structured findings by file

### 1.1 App pages

| File | Line | Asset type | Current source | Local/External | Owner |
|------|------|------------|----------------|----------------|-------|
| `src/app/about/page.tsx` | 9 | Hero image | `https://cdn.lawlytics.com/law-media/uploads/830/230565/large/IMG_9313-1.jpg?1680286844` | External | Third party (LawLytics) |
| `src/app/case-results/page.tsx` | 54 | Hero image | `https://cdn.lawlytics.com/law-media/uploads/830/230563/large/IMG_9203-1.jpg?1680286838` | External | Third party (LawLytics) |
| `src/app/contact/page.tsx` | 28 | Hero background | `https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2400&q=80` | External | Third party (Unsplash) |
| `src/app/contact/page.tsx` | 159 | Attorney photo (Chris) | `https://cdn.lawlytics.com/law-media/uploads/830/230599/large/Chris-082-Edit-Edit.jpg?1680295646` | External | Third party (LawLytics) |
| `src/app/contact/page.tsx` | 219 | Map embed | `https://www.google.com/maps?q=...&output=embed` | External | Third party (Google) |
| `src/app/our-favorite-things/page.tsx` | 8 | Hero image | `https://cdn.lawlytics.com/law-media/uploads/830/334899/large/Chris_corporate.jpg?1752871243` | External | Third party (LawLytics) |
| `src/app/page.tsx` | 11 | Hero background (prop) | `https://cdn.lawlytics.com/law-media/uploads/830/230565/large/IMG_9313-1.jpg?1680286844` | External | Third party (LawLytics) |
| `src/app/page.tsx` | 29 | Section image (prop) | `https://cdn.lawlytics.com/law-media/uploads/830/230563/large/IMG_9203-1.jpg?1680286838` | External | Third party (LawLytics) |
| `src/app/page.tsx` | 40 | Section image (prop) | `https://cdn.lawlytics.com/law-media/uploads/830/334899/large/Chris_corporate.jpg?1752871243` | External | Third party (LawLytics) |
| `src/app/page.tsx` | 50 | Section image (prop) | `https://cdn.lawlytics.com/law-media/uploads/830/230565/large/IMG_9313-1.jpg?1680286844` | External | Third party (LawLytics) |
| `src/app/practice-areas/page.tsx` | 10 | Hero image | `/images/hero/practice-areas.jpg` | Local path | Ours (file not in repo) |
| `src/app/professionals/page.tsx` | 10 | Hero background (prop) | `https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2400&q=80` | External | Third party (Unsplash) |

### 1.2 Components

| File | Line | Asset type | Current source | Local/External | Owner |
|------|------|------------|----------------|----------------|-------|
| `src/component/practice/PracticeHeroImage.tsx` | 6 | Fallback hero | `https://cdn.lawlytics.com/law-media/uploads/830/230565/large/IMG_9313-1.jpg?1680286844` | External | Third party (LawLytics) |
| `src/component/practice/PracticeSpacesFooter.tsx` | 13 | Logo (white) | `https://cdn.lawlytics.com/law-media/uploads/830/230604/original/RMC-Logo-White-Bkgd.png?1680298763` | External | Third party (LawLytics) |
| `src/component/practice/PracticeSpacesFooter.tsx` | 42 | Favicon/small icon | `https://cdn.lawlytics.com/law-media/uploads/830/230618/original/favicon-32x32.png?1680304865` | External | Third party (LawLytics) |
| `src/component/OurFavoriteThingsGrid.tsx` | 23 | Favorite image | `https://cdn.lawlytics.com/.../104392/large/Favorite3.png?1593308368` | External | Third party (LawLytics) |
| `src/component/OurFavoriteThingsGrid.tsx` | 29 | Favorite image | `https://cdn.lawlytics.com/.../104394/large/Favorite2.png?1593308369` | External | Third party (LawLytics) |
| `src/component/OurFavoriteThingsGrid.tsx` | 35 | Favorite image | `https://cdn.lawlytics.com/.../112369/large/TonyStyle.jpg?1598621030` | External | Third party (LawLytics) |
| `src/component/OurFavoriteThingsGrid.tsx` | 41 | Favorite image | `https://cdn.lawlytics.com/.../104395/large/Favorite1.png?1593308369` | External | Third party (LawLytics) |
| `src/component/OurFavoriteThingsGrid.tsx` | 47 | Favorite image (download icon) | `https://cdn.lawlytics.com/.../103146/large/download.png?1592264521` | External | Third party (LawLytics) |
| `src/component/OurFavoriteThingsGrid.tsx` | 53 | Favorite image | `https://cdn.lawlytics.com/.../107870/large/GlassieLogo.png?1594649098` | External | Third party (LawLytics) |
| `src/component/OurFavoriteThingsGrid.tsx` | 60 | Favorite image | `https://cdn.lawlytics.com/.../107874/large/Houdini.png?1594649843` | External | Third party (LawLytics) |
| `src/component/OurFavoriteThingsGrid.tsx` | 66 | Favorite image | `https://cdn.lawlytics.com/.../104389/large/Favorite7.png?1593308366` | External | Third party (LawLytics) |
| `src/component/OurFavoriteThingsGrid.tsx` | 72 | Favorite image | `https://cdn.lawlytics.com/.../107869/large/CabinLogo.png?1594649097` | External | Third party (LawLytics) |
| `src/component/OurFavoriteThingsGrid.tsx` | 78 | Favorite image | `https://cdn.lawlytics.com/.../107871/large/Robert_20Logo.png?1594649098` | External | Third party (LawLytics) |
| `src/component/OurFavoriteThingsGrid.tsx` | 84 | Favorite image | `https://cdn.lawlytics.com/.../107872/large/StuartLogo.png?1594649099` | External | Third party (LawLytics) |
| `src/component/OurFavoriteThingsGrid.tsx` | 90 | Favorite image | `https://cdn.lawlytics.com/.../104388/large/Favorite8.png?1593308365` | External | Third party (LawLytics) |
| `src/component/OurFavoriteThingsGrid.tsx` | 96 | Favorite image | `https://cdn.lawlytics.com/.../107873/large/DealPoint.png?1594649717` | External | Third party (LawLytics) |
| `src/component/OurFavoriteThingsGrid.tsx` | 102 | Favorite image | `https://cdn.lawlytics.com/.../321574/original/Icon-Collective-logo-1.jpg?1740180254` | External | Third party (LawLytics) |

*Note: `ImageContentSection`, `HeroRotatingWords`, and `TeamHero` receive URLs via props from pages; the actual external URLs are in the page files above. `MembersGrid` and profile components get URLs from `src/data/professionals.ts`.*

### 1.3 Data and config

| File | Line | Asset type | Current source | Local/External | Owner |
|------|------|------------|----------------|----------------|-------|
| `src/data/professionals.ts` | 47, 49 | Chris Reeder photo (small, large) | `cdn.lawlytics.com/.../230579/small/...`, `.../230560/large/IMG_9033-1.jpg` | External | Third party (LawLytics) |
| `src/data/professionals.ts` | 61–64 | Chris Reeder badges (4) | Four LawLytics PNG URLs (Super Lawyers, Best Lawyers, etc.) | External | Third party (LawLytics) |
| `src/data/professionals.ts` | 180, 182 | Duncan McCreary photo | LawLytics small/large URLs | External | Third party (LawLytics) |
| `src/data/professionals.ts` | 190–191 | Duncan McCreary badges (2) | LawLytics PNG URLs | External | Third party (LawLytics) |
| `src/data/professionals.ts` | 242, 244 | Ben Tragish photo | LawLytics small/original URLs | External | Third party (LawLytics) |
| `src/data/professionals.ts` | 252 | Ben Tragish badge (1) | LawLytics PNG URL | External | Third party (LawLytics) |
| `src/data/professionals.ts` | 298, 300 | Mark Passin photo | LawLytics small/original URLs | External | Third party (LawLytics) |
| `src/data/professionals.ts` | 309–312 | Mark Passin badges (4) | LawLytics PNG/JPG URLs | External | Third party (LawLytics) |
| `src/data/professionals.ts` | 334, 336 | Marcus Tippens photo | LawLytics small/large URLs | External | Third party (LawLytics) |
| `src/data/professionals.ts` | 344 | Marcus Tippens badge (1) | LawLytics PNG URL | External | Third party (LawLytics) |
| `src/data/professionals.ts` | 374, 376 | John Meadows photo | LawLytics small/large PNG URLs | External | Third party (LawLytics) |
| `src/data/practiceAreas.ts` | 20, 48, 64, 76, 96, 108, 120, 132, 144 | Practice area hero images | `/images/practice/trials.jpg`, `real-estate.jpg`, `corporate.jpg`, etc. | Local path | Ours (files not in repo) |
| `next.config.ts` | 8–9 | Remote image host | `images.unsplash.com` (remotePatterns) | External | Third party (Unsplash) |
| `next.config.ts` | 13–14 | Remote image host | `cdn.lawlytics.com` (remotePatterns) | External | Third party (LawLytics) |

---

## 2. Risk summary

### 2.1 LawLytics-hosted assets (high risk)

- **All attorney photos** (headshots) – used on homepage sections, contact page, professionals list, and profile pages. Source: `professionals.ts` and hardcoded in contact/our-favorite-things.
- **All badge images** (Super Lawyers, Best Lawyers, Chambers, etc.) – used in profile accordions. Source: `professionals.ts` `badgeImages`.
- **Hero images** – About, Case Results, Our Favorite Things, and Home (HeroRotatingWords + ImageContentSection) all use LawLytics URLs.
- **Logo and favicon** – `PracticeSpacesFooter`: RMC white logo and favicon from LawLytics.
- **PracticeHeroImage fallback** – When a practice-area hero fails to load, it falls back to a LawLytics URL.
- **Our Favorite Things grid** – All 14 tile images (logos/thumbnails) are LawLytics.

**Risk:** After migration away from LawLytics, these URLs may break or be turned off. All should be downloaded and self-hosted.

### 2.2 Unsplash (medium risk)

- **Contact page hero** – `next/image` with Unsplash URL (office interior).
- **Professionals page hero** – `TeamHero` receives same Unsplash URL as `backgroundImageUrl`.

**Risk:** Stock photo; license and URL stability are outside your control. Replace with owned or properly licensed assets.

### 2.3 Hotlinked / third-party

- Every LawLytics URL is effectively hotlinked from their CDN.
- No other hotlinked image hosts found (e.g. imgur, random domains).

### 2.4 Local paths (missing in repo)

- **`/images/hero/practice-areas.jpg`** – Referenced in `src/app/practice-areas/page.tsx`. Not under `public/` in the repo.
- **`/images/practice/*.jpg`** – Referenced in `src/data/practiceAreas.ts` for each practice area. Not under `public/` in the repo.

**Risk:** If these files are not deployed separately, heroes will 404. For practice-area pages, `PracticeHeroImage` will then use the LawLytics fallback (double dependency).

### 2.5 Other external dependency (non-asset)

- **Google Maps iframe** – `src/app/contact/page.tsx` line 219. External embed; not an image/logo/PDF but a third-party dependency for the contact map.

---

## 3. Usage by type

### 3.1 `<img>` with remote sources

- `src/app/about/page.tsx` (9) – LawLytics hero
- `src/app/case-results/page.tsx` (54) – LawLytics hero
- `src/app/our-favorite-things/page.tsx` (8) – LawLytics hero
- `src/component/HeroRotatingWords.tsx` (37) – uses `backgroundImageUrl` prop (LawLytics on home)
- `src/component/team/TeamHero.tsx` (22) – uses `backgroundImageUrl` prop (Unsplash on professionals)
- `src/component/ImageContentSection.tsx` (37) – uses `imageUrl` prop (LawLytics when used from home)
- `src/component/practice/PracticeSpacesFooter.tsx` (13, 42) – LawLytics logo and favicon
- `src/component/practice/PracticeHeroImage.tsx` (13) – `src` from props or fallback to LawLytics (line 6)
- `src/component/team/MembersGrid.tsx` (45) – `imageUrl` from `professionals.ts` (LawLytics)
- `src/component/profiles/ProfileHero.tsx` – uses `profile.photoLarge || profile.photoSmall` (LawLytics)
- `src/component/profiles/MeetOthers.tsx` (29) – `p.photoSmall || p.photoLarge` (LawLytics)
- `src/component/profiles/CredentialsAccordion.tsx` (83) – `profile.badgeImages.map(src => <img src={src} ...>)` (LawLytics)
- `src/component/OurFavoriteThingsGrid.tsx` – images from `favorites[].img` (all LawLytics)

### 3.2 `next/image` with remote sources

- `src/app/contact/page.tsx` (28) – Unsplash hero (`fill`, `priority`)
- `src/app/contact/page.tsx` (159) – LawLytics attorney photo (Chris) (`fill`)

### 3.3 `next.config.*` image remote patterns

**File:** `next.config.ts`

- `hostname: "images.unsplash.com"`, `pathname: "/**"`
- `hostname: "cdn.lawlytics.com"`, `pathname: "/**"`

Both are third-party; after migration, remove or replace with your own domain if you use next/image for remote URLs.

### 3.4 Background / “hero” images (conceptually)

- **HeroRotatingWords** – background image via `<img>` with `backgroundImageUrl` (home: LawLytics).
- **TeamHero** – background image via `<img>` with `backgroundImageUrl` (professionals: Unsplash).
- **globals.css** – no `background-image: url(...)` to external assets; only solid colors and CSS variables.

### 3.5 Temporary / placeholder

- `src/app/page.tsx` (10) – Comment: “Use a Reeder image if you want; keeping placeholder for now” next to LawLytics hero URL. Confirms intent to replace.
- Practice area heroes use local paths (`/images/practice/...`) that are not in repo – effectively placeholders until files exist or are added.

---

## 4. External asset domains in use

| Domain | Purpose | Count (approx) |
|--------|---------|----------------|
| **cdn.lawlytics.com** | Attorney photos, badges, heroes, logo, favicon, favorite-thing images | 40+ URLs |
| **images.unsplash.com** | Contact + Professionals hero (same photo) | 1 URL (2 uses) |
| **www.google.com** (maps embed) | Contact page map iframe | 1 (not image asset) |

No other image/PDF/download domains found in app code, data, or config (excluding README/package-lock).

---

## 5. What should be downloaded and self-hosted

- **All cdn.lawlytics.com image URLs** – every one referenced in this report.
- **Unsplash hero** – `https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2400&q=80` – if you keep this image, download and host it; otherwise replace with your own.

Suggested local paths (see Section 6 for structure).

---

## 6. Recommended replacement path structure

Use under `public/`:

```
public/
  images/
    attorneys/          # Headshots (photoSmall, photoLarge)
    office/             # Office/hero (e.g. current Unsplash hero, practice-areas hero)
    practice-areas/     # Already referenced: trials.jpg, real-estate.jpg, corporate.jpg, etc.
    hero/               # practice-areas.jpg and other global heroes
    badges/             # Super Lawyers, Best Lawyers, Chambers, etc.
    logos/              # RMC-Logo-White-Bkgd.png, favicon-32x32.png
    favorites/          # Our Favorite Things grid (Favorite1–8, TonyStyle, GlassieLogo, etc.)
  downloads/            # Any PDFs or other files you add later
```

Ensure `practiceAreas.ts` and `practice-areas/page.tsx` point to files under `public/images/` (e.g. `/images/practice/trials.jpg` → `public/images/practice-areas/trials.jpg` or keep path and add files to `public/images/practice/`).

---

## 7. Files to update first (priority)

1. **`src/data/professionals.ts`** – Single source for all attorney photos and badges; switch to local paths (e.g. `/images/attorneys/chris-reeder.jpg`, `/images/badges/super-lawyers-chris.png`).
2. **`next.config.ts`** – Remove `cdn.lawlytics.com` (and optionally `images.unsplash.com`) from `remotePatterns` once all assets are local.
3. **`src/component/practice/PracticeHeroImage.tsx`** – Change `FALLBACK_HERO_IMAGE` to a local path (e.g. `/images/hero/fallback.jpg`).
4. **`src/component/practice/PracticeSpacesFooter.tsx`** – Logo and favicon to `/images/logos/...`.
5. **`src/app/page.tsx`** – All `backgroundImageUrl` and `imageUrl` props to local paths.
6. **`src/app/about/page.tsx`**, **`src/app/case-results/page.tsx`**, **`src/app/our-favorite-things/page.tsx`** – Hero `src` to local.
7. **`src/app/contact/page.tsx`** – Hero and Chris photo to local (or new local paths).
8. **`src/app/professionals/page.tsx`** – Hero to local or same as contact.
9. **`src/component/OurFavoriteThingsGrid.tsx`** – All `favorites[].img` to local paths under `/images/favorites/`.

No code changes are required in `ImageContentSection`, `HeroRotatingWords`, `TeamHero`, `MembersGrid`, `ProfileHero`, `MeetOthers`, or `CredentialsAccordion` once the data and page-level props use local URLs.

---

## 8. Suggested replacement steps (per flagged asset type)

### 8.1 LawLytics hero images (same file used in multiple places)

- **Current:** `https://cdn.lawlytics.com/law-media/uploads/830/230565/large/IMG_9313-1.jpg?1680286844`
- **Suggested path:** `/images/hero/office-hero-1.jpg` → `public/images/hero/office-hero-1.jpg`
- **Update:** `src/app/about/page.tsx`, `src/app/page.tsx` (HeroRotatingWords + one ImageContentSection), `src/component/practice/PracticeHeroImage.tsx` (fallback).

- **Current:** `https://cdn.lawlytics.com/law-media/uploads/830/230563/large/IMG_9203-1.jpg?1680286838`
- **Suggested path:** `/images/hero/litigation-hero.jpg` → `public/images/hero/litigation-hero.jpg`
- **Update:** `src/app/case-results/page.tsx`, `src/app/page.tsx` (ImageContentSection “Litigation”).

- **Current:** `https://cdn.lawlytics.com/law-media/uploads/830/334899/large/Chris_corporate.jpg?1752871243`
- **Suggested path:** `/images/hero/corporate-hero.jpg` or `/images/attorneys/chris-corporate.jpg`
- **Update:** `src/app/page.tsx` (ImageContentSection “Corporate”), `src/app/our-favorite-things/page.tsx`.

### 8.2 Contact page attorney photo

- **Current:** `https://cdn.lawlytics.com/law-media/uploads/830/230599/large/Chris-082-Edit-Edit.jpg?1680295646`
- **Suggested path:** `/images/attorneys/chris-reeder-contact.jpg` → `public/images/attorneys/chris-reeder-contact.jpg`
- **Update:** `src/app/contact/page.tsx` line 159.

### 8.3 Logo and favicon

- **Current (logo):** `https://cdn.lawlytics.com/law-media/uploads/830/230604/original/RMC-Logo-White-Bkgd.png?1680298763`
- **Suggested path:** `/images/logos/rmc-logo-white.png`
- **Update:** `src/component/practice/PracticeSpacesFooter.tsx` line 13.

- **Current (favicon):** `https://cdn.lawlytics.com/law-media/uploads/830/230618/original/favicon-32x32.png?1680304865`
- **Suggested path:** `/images/logos/favicon-32x32.png` (or root `favicon.ico` if you use it in layout)
- **Update:** `src/component/practice/PracticeSpacesFooter.tsx` line 42.

### 8.4 Professionals data (attorneys + badges)

- Download each `photoSmall` and `photoLarge`; save under e.g. `public/images/attorneys/{slug}-small.jpg`, `{slug}-large.jpg`.
- Download each `badgeImages[]`; save under e.g. `public/images/badges/{slug}-{index}.png` (or descriptive names).
- In `src/data/professionals.ts`, replace every LawLytics URL with the corresponding local path (e.g. `/images/attorneys/chris-reeder-large.jpg`, `/images/badges/chris-reeder-1.png`).

### 8.5 Our Favorite Things grid

- For each of the 14 items in `src/component/OurFavoriteThingsGrid.tsx`, download the `img` URL and save under `public/images/favorites/` with a stable name (e.g. `abbey-weho.png`, `brio.png`, `tony-style.jpg`, …).
- Replace each `img: "https://cdn.lawlytics.com/..."` with `img: "/images/favorites/..."`.

### 8.6 Unsplash hero

- **Current:** `https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2400&q=80`
- **Suggested path:** `/images/office/contact-hero.jpg` (or replace with your own photo).
- **Update:** `src/app/contact/page.tsx` line 28, `src/app/professionals/page.tsx` line 10.

### 8.7 Local paths already in code

- **`/images/hero/practice-areas.jpg`** – Add file at `public/images/hero/practice-areas.jpg` (or adjust path in `src/app/practice-areas/page.tsx` to match your structure).
- **`/images/practice/*.jpg`** – Add files at `public/images/practice/trials.jpg`, `real-estate.jpg`, etc., or move to `public/images/practice-areas/` and update `src/data/practiceAreas.ts` to match.

---

## 9. Summary

- **External image domains:** `cdn.lawlytics.com` (40+ URLs), `images.unsplash.com` (1 URL, 2 uses).
- **All LawLytics assets** (attorney photos, badges, heroes, logo, favicon, favorite-thing images) should be downloaded and self-hosted; then update data, components, and pages to use the recommended `public/` paths.
- **Unsplash hero** should be downloaded and self-hosted or replaced with your own asset.
- **Local paths** (`/images/hero/...`, `/images/practice/...`) are already used but the files are not in the repo; add them under `public/` and align paths.
- **Config:** Remove or adjust `remotePatterns` in `next.config.ts` once no remote image URLs remain.
- **No PDFs or other downloadable media** from third-party URLs were found in the codebase.

No code was modified in this audit; the above are recommendations only.
