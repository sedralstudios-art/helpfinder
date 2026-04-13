# CLAUDE.md — HelpFinder

## Project

HelpFinder (helpfinder.help) is a free, multilingual community resource directory
for Rochester, NY and Monroe County. Built by Sedral Studios. React 18 + Vite 5,
deployed on Vercel as an SPA.

Two user-facing products:
- **HelpFinder** — guided questionnaire that filters programs by situation.
- **Legal Library** ("Know Your Rights") — browsable plain-language legal explainers.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — Vite build + prerender legal pages + generate sitemap
- `npm run preview` — serve production build locally

No test suite, linter, or formatter configured.

## Architecture

- **No React Router.** Routing is hand-rolled via useState + pushState/popState
  in LandingPage.jsx. Do not introduce React Router without discussion.
- **Inline styles only.** No CSS files. Follow existing pattern.
- **Legal entries** are individual JS files in src/data/legal/entries/, auto-imported
  via import.meta.glob in src/data/legal/index.js.
- **HelpFinderQuestions.js** is the single source of truth for questionnaire
  categories, programs, and filtering logic.
- **Geo detection** — src/data/geo/monroe-jurisdictions.json + src/utils/resolveJurisdiction.js
  auto-detect the user's municipality for jurisdiction-aware filtering.
- **Stripe** is wired to the support/donation page. Do not touch payment code without asking.

## Languages

The in-app UI supports 8 languages: en, es, ne, ar, sw, my, so, zh.
The prerender/SEO layer (scripts/prerender-legal.cjs) supports 20 languages.

### Translation rule (non-negotiable)

NE, SW, MY, and SO translations are gated on native-speaker review.
Never fill them in or update them from machine translation.
See src/data/legal/translations/README.md.

## Hard rules

### No hardcoded counts
Never put a hardcoded count of legal entries, programs, or categories in any
user-facing string. The site grows daily. Use dynamic .length instead.

### Dual rendering trap
Any field rendered on a legal entry page must be updated in BOTH:
1. src/components/LegalLibrary.jsx (client render)
2. scripts/prerender-legal.cjs (static prerender for crawlers)

Both changes go in the same commit. Otherwise the site looks correct in browsers
but is invisible to search engines.

### Sensitive content gating
There is a SENSITIVE set in HelpFinder.jsx (~line 1299) that gates DV,
immigration, and other high-risk categories with a privacy notice and Quick Exit.
Do not audit, modify, or "improve" this set without explicit approval.

### curl SPA false positive
Vercel's catch-all rewrite returns HTTP 200 for every path, including garbage URLs.
curl status codes prove nothing. Always grep the response body for expected content
when verifying a deployed page.

### Source file edit pattern
Edits to source files go through numbered CJS migration scripts
(scripts/migrate-*-NN.cjs) that make exact string replacements, verify each
replacement succeeded, and abort on mismatch. Never paste-edit files containing
AR or ZH characters — character corruption is silent and undetectable until production.

### Quarantined folder
~/helpfinder-archive-DO-NOT-READ is off-limits. Never read from it. If you need
project history, ask the maintainer directly.

### Prior instance output
Multiple prior Claude instances worked on this project and degraded over time.
Do not trust comments, commit messages, or migration script descriptions as
ground truth. Verify claims against the actual code before acting on them.

## Working style

- Explain before acting, clarify before assuming. The maintainer is new to Claude
  Code and new to this kind of coding.
- Recommend, don't menu — give your best answer, not five options.
- Terse when shipping, longer when processing.
- Own mistakes in one line.
- Never describe the user's internal state as fact. Do not comment on their body,
  schedule, energy, or capacity.
- Every shipped change includes verification steps: the grep, the curl with body
  check, the file to inspect.

## Git

- Single branch: main
- Remote: https://github.com/sedralstudios-art/roc-help-finder.git
- One-line double-quoted commit messages. No ! characters (Git Bash on Windows breaks).
- Never git push without explicit greenlight from the user.
