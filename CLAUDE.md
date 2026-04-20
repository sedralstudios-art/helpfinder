# CLAUDE.md — HelpFinder

## Project

HelpFinder (helpfinder.help) is a free, multilingual community resource directory
for Rochester, NY and Monroe County. Built by Sedral Studios. React 18 + Vite 5,
deployed on Vercel as an SPA.

Three user-facing products:
- **HelpFinder** — guided questionnaire that filters programs by situation.
- **Legal Library** ("Know Your Rights") — browsable plain-language legal explainers.
- **Legal Glossary** — plain-English definitions of legal and court terms, cross-linked from HelpFinder results and Legal Library entries.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — verify entry uniqueness + Vite build + prerender legal/glossary/help/landing pages + generate sitemap. Fails fast if any entry is missing `authorityType` or collides on composite key.
- `npm run verify` — run the entry-uniqueness validator standalone (no build).
- `npm run preview` — serve production build locally
- `node scripts/scaffold-entry.cjs --id {id} --category {cat} --authorityType {type} [--primaryStatute "NY XXX 123"]` — create a new entry template file with every required field at the right shape. Author fills in the TODO blocks, then runs `npm run verify`.

No test suite, linter, or formatter configured.

## Architecture

- **No React Router.** Routing is hand-rolled via useState + pushState/popState
  in LandingPage.jsx. Do not introduce React Router without discussion.
- **Inline styles only.** No CSS files. Follow existing pattern.
- **Legal entries** are individual JS files in src/data/legal/entries/, auto-imported
  via import.meta.glob in src/data/legal/index.js.
- **Legal Glossary terms** are individual JS files in src/data/legal/glossary/,
  auto-imported via import.meta.glob in src/data/legal/glossary-index.js. Routed
  at /glossary, /glossary/<slug>, /glossary/category/<cat>. Prerendered by
  scripts/prerender-glossary.cjs into dist/glossary/*. HelpFinder category
  to glossary category mapping lives in src/data/legal/glossary-tag-map.js.
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

### Legal Glossary content voice (stricter than legal library)
- 6th grade reading level. Short sentences, common words.
- Every term must include a statute citation, a sourceUrl, and a lastVerified date.
- whatToAsk items are pure questions directed at a lawyer, judge, or clerk.
  No parenthetical advice ("(Say yes...)", "(Always say...)"). No trailing
  imperatives ("Write it down.", "Get a copy."). If an item has a period followed
  by more text, rewrite it.
- plainEnglish describes how the law works. Never direct the reader. Avoid
  "you should", "you must" (unless quoting a legal requirement), "make sure",
  "always", "never."
- English only. NE/SW/MY/SO require native-speaker review per the rule above.
- HelpFinder is maintained by non-attorneys. Directive voice creates unauthorized
  practice of law risk and undermines the explainer-not-advice framing.

## Hard rules

### Entry authorityType (required field, build-gated)
Every legal entry must declare an `authorityType` right after `jurisdiction`.
The validator (`scripts/verify-entry-uniqueness.cjs`) runs first in `npm run
build` and fails the build if any entry is missing it, uses an invalid value,
or collides with another entry on the composite key
`(normalizedTopic, authorityType, jurisdictionScope)`.

Valid values and id conventions:
- `state-statute`       — NY statute. Id pattern: `{topic}-ny`
- `federal-statute`     — U.S. code. Id pattern: `{topic}-ny` (audience is NY)
- `state-regulation`    — NYCRR. Id pattern: `{topic}-ny`
- `federal-regulation`  — CFR. Id pattern: `{topic}-ny`
- `local-ordinance`     — town/village/city code. Id pattern: `{topic}-ny-mon-{municipality}-{town|village|city}`
- `common-law`          — case law, judge-made. Id pattern: `{topic}-ny-cl`
- `agency-program`      — program or process with no single governing statute. Id pattern: `{topic}-ny-program`

Filename matches id + `.js`. No version suffixes (`_01`, `_05`, etc. — stripped
site-wide on 2026-04-18).

Entry pages render a colored authority badge under the summary explaining where
the rule comes from (NY State Statute, Local Ordinance, Court-Made Law, etc.).
Badge markup lives in both `src/components/LegalLibrary.jsx` (`AuthorityBadge`)
and `scripts/prerender-legal.cjs` (`AUTHORITY_META_SSR`). Dual-rendering rule
applies.

### Source URL citation parsing
Sources should point to specific statute URLs, not agency landing pages. The
citation parser in `src/components/LegalLibrary.jsx` (`parseSource`) and
`scripts/prerender-legal.cjs` (`parseSourceSSR`) converts
`nysenate.gov/legislation/laws/RPP/235-B` into the readable "NY Real Property
Law § 235-b". 47 NY code prefixes mapped; also handles U.S. Code, CFR, NYCRR
(Cornell mirror), UCC, Constitution. Use these URL shapes whenever possible.

### Duplicate-detection gates (hard rule before writing any new entry)
Three signals must be checked before drafting. The CCAP and motor-vehicle-lien
duplicates that slipped through on 2026-04-18 happened because the first two
were weak. All three are now live:

1. **primaryStatute uniqueness** — every entry whose authorityType is
   `state-statute`, `federal-statute`, `state-regulation`, or
   `federal-regulation` carries a `primaryStatute` field like
   `"NY SSL 410-W"` or `"42 USC 1396u-4"`, auto-extracted from sources[]
   by `scripts/lib/parse-statute.cjs`. The validator warns when two entries
   share `(normalizedPrimaryStatute, authorityType)`. New entries with an
   obvious primary statute MUST set this field. Two entries sharing a statute
   is a strong duplicate signal — narrow each primaryStatute to a specific
   sub-section, or confirm explicitly that the overlap is intentional.

2. **Tag + title near-duplicate warning** — the validator also flags any pair
   with ≥4 shared tags AND ≥0.5 title Jaccard. Not blocking, but prominent
   in verify output. Before committing, read the WARN section.

3. **Most general plain-English term for ID, title, and tags** — this is the
   strongest human-level defense. Two authors writing about the same topic
   converge on the same general term, so their IDs and titles collide on the
   Jaccard check. Pick the term a non-lawyer would Google. Examples:
   - Prefer `neighbor-smoking-secondhand-apartment-ny`, not
     `apartment-smell-smoke-neighbor-ny` (general "secondhand smoke" over
     specific "smell").
   - Prefer `public-records-request-ny`, not `foil-ny` (what people search
     for, not just the acronym). If both exist and cover the same ground,
     the non-acronym form wins unless the acronym is the universal plain
     term (e.g., SNAP, Medicaid).
   - Prefer `childcare-assistance-ny`, not `child-care-subsidy-ccap-ny`
     (the acronym was redundant with two existing entries).

Before writing any new entry:
- Grep existing entries with broad keyword stems (use `grep -iE "stem1|stem2"`
  on the file names, not just narrow-hyphenated variants).
- Run `npm run verify` after drafting and read the new WARN lines.
- If a WARN surfaces a real overlap, merge or delete rather than shipping
  both. Shipping two entries on the same topic dilutes search rank and
  confuses users.

### One-shot rename scripts
`scripts/label-authority-types.cjs`, `scripts/rename-strip-nn.cjs`, and
`scripts/rename-authority-suffix.cjs` are one-shot scripts used during the
2026-04-18 rollout. They are idempotent — safe to re-run. Pattern to follow
for future one-shot rollouts: put them in `scripts/`, name them by intent,
include a brief header comment explaining the scope.

### Structural voice — third-person (build-gated)
`title.en` and the first sentence of `summary.en` must not contain `you`,
`your`, `yours`, or contractions (`you're`, `you've`, `you'll`, `you'd`).
Write in third-person: "A tenant has the right to..." not "You have the right
to...". The validator fails the build if second-person voice appears in these
structural anchors. Body fields (`yourRights`, `whatItMeans`, `example`,
`legalOptions`) are NOT build-checked — legacy drift there is accepted pending
contributor cleanup, but new entries should be third-person throughout.

The 7 Germain-approved bankruptcy entries are exempt from this check — see
`VOICE_CHECK_SKIP_FILES` in the validator. Any voice change to bankruptcy
content requires attorney review.

### relatedIds must point to existing entries (build-gated)
Every id in a `relatedIds` array must match an existing entry filename (minus
the `.js`). The validator fails the build if a relatedId references a
nonexistent entry. Introduced 2026-04-19 after 57 broken refs accumulated
silently across 52 files. `RELATED_ID_ALLOWLIST` in the validator carries a
narrow exception for refs pending attorney or author action — keep the
allow-list short and comment each entry.

### Content-quality checks (build-gated, added 2026-04-19)
The validator enforces a minimum-quality floor on every non-bankruptcy entry:

**Enum validation:**
- `category` must be one of: consumer, housing, family, benefits, criminal, employment, vehicle, education, government, trades, health, healthcare (health and healthcare both accepted pending normalization)
- `tier` must be one of: state, federal, county, town, village, city, local
- `status` must be one of: active, draft, deprecated
- `volatility` must be one of: low, medium, moderate, high (medium and moderate both accepted pending normalization)
- `jurisdiction` must match the pattern `us-ny | us-fed | us-ny-mon | us-ny-monroe-{municipality}-(town|village|city)`

**Format:**
- `lastVerified` must be `YYYY-MM-DD` format, not more than 7 days in the future
- Source URLs must start with `https://`
- Tags must be unique within the entry

**Field counts:**
- `tags` ≥ 5 items
- `sources` ≥ 1 URL
- `counsel` ≥ 1 entry
- `whoQualifies` ≥ 2 items
- `yourRights` ≥ 2 items
- `legalOptions` ≥ 1 item

**Length bounds:**
- `title.en` between 20 and 250 characters
- `summary.en` between 80 and 1500 characters
- `whatItMeans.en` ≥ 400 characters

**Authority-tier consistency (build-gated):**
- `state-statute` / `state-regulation` / `common-law` → tier must be `state`
- `federal-statute` / `federal-regulation` → tier must be `federal`
- `local-ordinance` → tier must be `county`, `town`, `village`, `city`, or `local`
- `agency-program` → any tier permitted (programs exist at all levels)

**Advisory nudges (WARN, not blocking):**
- sources < 2
- relatedIds < 2
- whatItMeans < 800
- `primaryStatute` section number not referenced in whatItMeans (nudge to cite statute in the body text)
- yourRights item opens with `you/your/yours` (rewrite in third-person)
- source URL domain not on the trusted allowlist (prefer `.gov` / `.edu` / `.us` or
  the short list of known NY legal-aid nonprofits in `TRUSTED_SOURCE_DOMAINS_EXACT`)
- title Jaccard ≥ 0.75 against another entry's title (title-only near-duplicate pair)

The 7 Germain-reviewed bankruptcy files are fully exempt from all content
checks (voice, enum, length, metadata) per Prof. Germain's liability-reducing
phrasing. See `BANKRUPTCY_FILES` set in the validator.

Thresholds were calibrated against the current corpus via
`scripts/audit-corpus-for-validator.cjs`. Tightening them over time is the
way to ratchet quality up without breaking historical entries.

### Plain-English explainer voice — UPL guardrails (build-gated, added 2026-04-19)

HelpFinder is run by a non-attorney. Entries that read like an attorney
giving advice expose the operator to unauthorized practice of law concerns.
The validator FAILS the build on attorney-advice patterns.

**FAIL patterns (any appearance in `whatItMeans` or `summary` — UPL red flags):**
- `Strategic considerations` (e.g., "Strategic considerations for plaintiffs:")
- `Bottom line:` (typically introduces a paragraph of advice)
- `Engage [type] counsel/attorney/lawyer` recommendations
  (e.g., "Engage commercial litigation counsel")

**FAIL — length cap:**
- `whatItMeans` word count above 1800. Forces tight plain-English writing
  and blocks the 5000+ word treatise drift.

**Required voice (not yet auto-enforced; contributor discipline):**
- Third-person throughout (not just title and summary). Subject is "a tenant",
  "a homeowner", "the harmed party" — not "you".
- Non-directive. No imperatives like "Save the contract," "Get a lawyer,"
  "Move fast," "Take photos," "Document the conversation." Restate as
  third-person observations: "A copy of the contract supports the case."
  "Photos help document the case." "Free legal help is available through
  Legal Aid Society of Rochester for those who qualify by income."
- ~6th-grade reading level. Short sentences. Common words. Define legal
  terms inline ("a constructive trust — when a court treats property as
  held for someone else's benefit").
- No "Strategic considerations," "Best practice," or "Bottom line"
  sections. The reader gets the explainer plus referrals; the reader
  decides what to do.
- Avoid civil-procedure deep cuts (motion to dismiss, summary judgment,
  jurisdiction analysis) — those serve lawyers, not the HelpFinder audience.

Background: on 2026-04-19, batches 46-57 (62 entries) were deleted at
commit `099b87b` for drifting into lawyer treatise voice. The FAIL patterns
encode the worst of that drift so it cannot recur silently. See
`feedback_lawyer_voice_upl_risk.md` in the Claude memory folder for the
fuller analysis.

### Bankruptcy files are off-limits for bulk scripts
The 7 `bankruptcy-*-ny.js` entries were written/approved by Prof. Gregory
Germain. Any bulk migration or rewrite script (voice passes, relatedIds fixes,
statute retrofits, etc.) MUST include a skip-list for these files. Existing
examples: `scripts/fix-broken-relatedids.cjs`, `scripts/rewrite-titles-third-person.cjs`,
`scripts/rewrite-summaries-third-person.cjs`. A broken ref or voice issue in a
bankruptcy file is flagged for attorney review, not auto-fixed.

### No hardcoded counts
Never put a hardcoded count of legal entries, programs, or categories in any
user-facing string. The site grows daily. Use dynamic .length instead.

### Dual rendering trap
Any field rendered on a legal entry page must be updated in BOTH:
1. src/components/LegalLibrary.jsx (client render)
2. scripts/prerender-legal.cjs (static prerender for crawlers)

Same rule for glossary pages:
1. src/components/Glossary.jsx (client render)
2. scripts/prerender-glossary.cjs (static prerender for crawlers)

Both changes go in the same commit. Otherwise the site looks correct in browsers
but is invisible to search engines.

### Sensitive content gating
There is a SENSITIVE set in HelpFinder.jsx (~line 1299) that gates DV,
immigration, and other high-risk categories with a privacy notice and Quick Exit.
Do not audit, modify, or "improve" this set without explicit approval.

### Draft gate for high-harm entries (hard rule)
Any legal entry where incorrect guidance could directly harm someone must carry
`draft: true` until the maintainer has given explicit greenlight to publish.
The loader in `src/data/legal/index.js`, `scripts/prerender-legal.cjs`, and
`scripts/generate-sitemap.cjs` all filter drafts out — drafted entries do not
render in the UI, prerender to HTML, appear in the sitemap, or resolve through
relatedIds.

Categories that default to `draft: true` on any new entry:
- Immigration, visa status, deportation, undocumented rights
- Domestic violence, orders of protection, firearm surrender related to DV
- Sexual violence, stalking, harassment, revenge porn, campus sexual violence
- Child abuse reporting, mandated reporter, CPS process, safe-haven surrender
- Elder abuse, adult protective services, power-of-attorney abuse
- Mental health coercion (Kendra's Law, psychiatric advance directive, civil commitment)
- Police encounter, right to remain silent, recording police, citizen's arrest
- Human trafficking, victim compensation, T/U visa

New entries in these categories MUST include `draft: true` right after
`status: "active",`. Do not flip to published without explicit maintainer
greenlight for that specific entry. The 2026-04-18 retrofit list is in
`scripts/migrate-draft-sensitive-entries-68.cjs`. The validator
(`verify-entry-uniqueness.cjs`) still checks drafts for uniqueness so they
do not collide with future published entries.

Glossary terms are prerendered separately (`scripts/prerender-glossary.cjs`)
and are NOT yet draft-gated. If adding glossary terms in the high-harm
categories above, flag them to the maintainer.

### Routing and crawl coverage
As of April 2026 (migration 53), vercel.json has explicit rewrites only for /help
and /help/:path* — the blanket catch-all has been removed. Unknown paths now
return 404 via public/404.html. Prerendered paths return 200 with real content.
Before reintroducing any catch-all rewrite, consult the user — the removal was
an intentional crawl-coverage fix so Googlebot stops seeing infinite-duplicate
content. When verifying a deployed page, still grep the response body — the SPA
can serve a shell without hydrating the right content.

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
- Escape `$` in commit messages by using single quotes or `\$`. Bash silently
  expands unescaped `$varname` inside double quotes; batch 32's commit lost
  `$20k` and `$1M` to empty-variable expansion before this rule was added.
- Never git push without explicit greenlight from the user.
