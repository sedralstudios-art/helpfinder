# HelpFinder

> Free help, everywhere it's needed. No accounts. No data collected. Just help.

[helpfinder.help](https://helpfinder.help) is a free, multilingual community resource directory and rights guide. Starting in Rochester, NY (Monroe County) — built so anyone can find food, housing, healthcare, legal help, and the answers behind their rights without making an account, paying a fee, or being tracked.

This repo is the entire site: a Vite + React single-page app, a static legal/glossary corpus, and a small set of serverless API routes for donations and feedback.

---

## What's in here

Three products in one site:

| Section | Path | What it is |
|---|---|---|
| **HelpFinder** | `/help` | Branching question flow → list of verified local programs (phone, address, what to bring) |
| **Know Your Rights** | `/know-your-rights` | Plain-English legal guides, ~6th-grade reading level, every entry backed by NY statute / federal code / local ordinance |
| **Glossary** | `/glossary` | Plain-English definitions of legal and bureaucratic terms, cross-linked from both sections above |

Plus a universal search across all three corpora, a Quick Exit button on every page (instant escape to a safe URL for users in domestic-violence or stalking situations), and full UI translation.

---

## Stack

- **Vite** + **React 18** (no Next, no SSR runtime — prerender for SEO is build-time)
- **Plain CSS-in-JS** (style objects), no Tailwind, no styled-components
- **Vercel** for hosting + serverless API routes (`/api/*`)
- **Stripe** for donations (Checkout Sessions, no card data touches the app)
- **DM Serif Display** as the only webfont; system stack for body
- **No analytics that identify users** — Umami is wired but commented out in `index.html`; enable it post-deploy if you want privacy-respecting traffic counts

---

## Local development

```bash
npm install
npm run dev          # Vite dev server, http://localhost:5173
npm run build        # production build → dist/
npm run preview      # serve the production build locally
```

Stripe + feedback API routes live in `/api/` and run on Vercel's edge runtime in production. For local dev, mock the responses or run `vercel dev` if you have the Vercel CLI.

---

## Repository layout

```
src/
  App.jsx                       # Top-level router (Landing ↔ Help)
  main.jsx                      # React mount
  components/
    LandingPage.jsx             # Home, About, Privacy, Terms, Support, Search
    HelpFinder.jsx              # The branching question flow + program results
    HelpFinderQuestions.js      # Question registry (the decision tree)
    LegalLibrary.jsx            # Know Your Rights browser
    Glossary.jsx + GlossaryTooltip.jsx  # Glossary surface + inline tooltips
    Search.jsx                  # Unified search across all three corpora
    QuickExit.jsx               # The DV / stalking escape hatch
    ShareButton.jsx
  data/
    programs.js                 # Program directory (single source of truth)
    legal/
      entries/*.js              # One file per legal guide
      glossary/*.js             # One file per glossary term
      index.js                  # Glob-imports entries, sorts, exports
      glossary-index.js         # Same pattern for glossary
      glossary-tag-map.js       # Maps glossary terms to legal-entry tags
      langs.js                  # Legal section language list (federal LEP)
      translations/             # Per-language UI strings
  utils/
    resolveJurisdiction.js      # Reverse-geocode lat/lng → town/village locally (no third-party calls)
public/
  DMSerifDisplay-Regular.woff2  # The only webfont
  fonts.css
  favicon.svg, og-image.png, apple-touch-icon.png
  manifest.json
  404.html
api/
  create-checkout-session.js    # Stripe one-time + recurring
  feedback.js                   # User feedback submission
scripts/
  (build-time prerender / SEO scripts)
```

**Adding a program:** append an object to `src/data/programs.js`. Counts displayed on the home page (`{PROGRAMS.length} programs`) update automatically — never hardcode.

**Adding a legal guide:** drop a new file into `src/data/legal/entries/`. The glob in `src/data/legal/index.js` picks it up at build time.

**Adding a glossary term:** drop a new file into `src/data/legal/glossary/`. Same auto-import pattern.

---

## Editorial rules

The whole product fails if the writing is wrong. A few non-negotiables:

- **Plain English, ~6th-grade reading level.** No legalese without a glossary tooltip. No "you may be entitled to…" — write "if X, then Y."
- **Legal copy is third-person.** "A tenant in NY can…" not "you can…". This stays accurate even when the page is screenshotted, shared, or read out of context.
- **Every legal claim is backed by a citation** to NY statute, federal code, NYCRR, or local ordinance. If we can't cite it, we don't say it.
- **Verified programs only.** Every program listing has a working phone number and a real address. Re-verify on a regular cadence (the directory is small enough to call through end-to-end).
- **No advertising language counts.** Translation coverage differs between the directory (8 languages) and the legal section (20 languages, federal LEP standard + refugee priority). Putting a single "X languages" claim in any user-facing copy is misleading. Let users discover translation by using the picker.
- **Never hardcode counts** of programs, entries, or glossary terms. Always render from `.length`. Stale numbers are the fastest way to look unmaintained.
- **HelpFinder** is one word, capital H and F. Never "Help Finder," "Helpfinder," or "HELPFINDER".
- **`.help`** is always lowercase, with the dot. The TLD is part of the brand.

---

## Privacy posture

- No accounts, ever. There is nothing to log into.
- No tracking that identifies a person. The codebase has Umami wired up but commented out — if you enable it, keep it self-hosted and cookie-free.
- Geolocation, when granted, is resolved to a town/village **locally** in the browser (`utils/resolveJurisdiction.js` matches against bundled GeoJSON). Coordinates never leave the device.
- Third-party services (Stripe Checkout, PayPal, the donation processor) set their own cookies. We make this explicit on the Privacy page.
- Quick Exit (top-right of every page) instantly redirects to `google.com` and clears the back button. For users whose abuser may check their device.

---

## Accessibility minimums

- Every interactive element has a visible focus ring (`:focus-visible` outline in the component layer).
- Color contrast meets WCAG AA against the warm-cream background (`#fafaf7`).
- Arabic flips `dir="rtl"` on the root; layout uses `start/end` semantics.
- The site is usable at 200% zoom and on a 320px-wide viewport.
- Quick Exit is keyboard-reachable on every page.

---

## Contributing

If you work at an agency and want your program listed, you're a legal professional willing to verify content, or you've spotted something wrong — open an issue or email [hello@helpfinder.help](mailto:hello@helpfinder.help). Pull requests for new legal entries are welcome; please cite your sources.

---

## Origin

Built by Anthony DiMarzo (Sedral Studios) in Rochester, NY. Sedral Studios carries the name of Steven T. May. The "About" page is the long version.

---

## License

Code: MIT.
Content (legal guides, glossary, program data): CC BY-SA 4.0 — share, adapt, attribute, keep it free.

© 2026 Sedral Studios.
