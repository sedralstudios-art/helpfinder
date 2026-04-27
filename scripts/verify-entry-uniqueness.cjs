// scripts/verify-entry-uniqueness.cjs
// Fails the build if two legal entries cover the same (topic, authorityType, jurisdictionScope).
// Composite key is the systematic uniqueness guarantee: two entries on the same topic in the
// same authority scope cannot coexist because the build won't compile.
//
// Phase 2 (current, since 2026-04-18): every entry must have authorityType.
// An unlabeled entry fails the build.

const path = require('path');
const fs = require('fs');
const { normalizeStatute } = require('./lib/parse-statute.cjs');

const ENTRIES_DIR = path.join(__dirname, '..', 'src', 'data', 'legal', 'entries');

// Soft-warning thresholds for near-duplicate detection.
// A pair is flagged only if BOTH signals fire: many shared tags AND strong
// title similarity. Disjunctive thresholds produced too many false positives.
const TAG_OVERLAP_WARN = 4;
const TITLE_JACCARD_WARN = 0.5;
const STOPWORDS = new Set([
  'a','an','and','or','the','of','to','for','in','on','at','by','with','from',
  'under','law','act','rights','ny','new','york','how','what','when','where','why',
  'is','are','your','their','their','its','it','be','been','being','has','have','had'
]);

const VALID_AUTHORITY_TYPES = new Set([
  'state-statute',
  'federal-statute',
  'state-regulation',
  'federal-regulation',
  'local-ordinance',
  'common-law',
  'agency-program',
]);

function parseEntry(filename) {
  const src = fs.readFileSync(path.join(ENTRIES_DIR, filename), 'utf8');
  const id = (src.match(/id:\s*"([^"]+)"/) || [])[1];
  const authorityType = (src.match(/authorityType:\s*"([^"]+)"/) || [])[1] || null;
  const primaryStatute = (src.match(/primaryStatute:\s*"([^"]+)"/) || [])[1] || null;
  // Title and summary use the escape-aware helper to correctly measure length
  // on entries that legitimately use `\"` inside the en string.
  const title = getEnFromField(src, 'title') || '';
  const summary = getEnFromField(src, 'summary') || '';
  const whatItMeans = getEnFromField(src, 'whatItMeans');
  const category = (src.match(/\n\s+category:\s*"([^"]*)"/) || [])[1] || null;
  const tier = (src.match(/\n\s+tier:\s*"([^"]*)"/) || [])[1] || null;
  const status = (src.match(/\n\s+status:\s*"([^"]*)"/) || [])[1] || null;
  const volatility = (src.match(/\n\s+volatility:\s*"([^"]*)"/) || [])[1] || null;
  const jurisdiction = (src.match(/\n\s+jurisdiction:\s*"([^"]*)"/) || [])[1] || null;
  const lastVerified = (src.match(/\n\s+lastVerified:\s*"([^"]*)"/) || [])[1] || null;
  // factCheckedBy: { tool: "claude-research", date: "2026-04-26" }
  const factCheckedByDate = (src.match(/factCheckedBy:\s*\{[^}]*date:\s*"(\d{4}-\d{2}-\d{2})"/) || [])[1] || null;
  const factCheckedByTool = (src.match(/factCheckedBy:\s*\{[^}]*tool:\s*"([^"]+)"/) || [])[1] || null;
  const tags = parseTags(src);
  const relatedIds = parseRelatedIds(src);
  const sources = parseQuotedArray(src, 'sources');
  const whoQualifiesCount = countEnArrayItems(src, 'whoQualifies');
  const yourRightsCount = countEnArrayItems(src, 'yourRights');
  const yourRightsItems = parseEnArrayStrings(src, 'yourRights') || [];
  const legalOptionsCount = countEnArrayItems(src, 'legalOptions');
  const counselCount = countCounselEntries(src);
  return {
    filename, id, authorityType, primaryStatute, title, summary, whatItMeans,
    category, tier, status, volatility, jurisdiction, lastVerified,
    factCheckedByDate, factCheckedByTool,
    tags, relatedIds, sources,
    whoQualifiesCount, yourRightsCount, yourRightsItems, legalOptionsCount, counselCount,
  };
}

// Helper: extract `field: { en: "..." }` string from the entry body, anchored
// to line-start so it doesn't match a substring (e.g., 'summary' inside
// 'otherSummary'). All entry fields are on their own line at 2-space indent.
// String pattern handles backslash-escaped quotes (e.g., `\"at-will\"`).
function getEnFromField(src, field) {
  const re = new RegExp('\\n\\s+' + field + ':\\s*\\{\\s*en:\\s*"((?:[^"\\\\]|\\\\.)*)"');
  const m = src.match(re);
  return m ? m[1] : null;
}
function countEnArrayItems(src, field) {
  const re = new RegExp('\\n\\s+' + field + ':\\s*\\{\\s*en:\\s*\\[([\\s\\S]*?)\\]');
  const m = src.match(re);
  if (!m) return null;
  return (m[1].match(/"(?:[^"\\]|\\.)*"/g) || []).length;
}
function countCounselEntries(src) {
  // Counsel can be formatted either expanded (opening [ on its own line, closing
  // ] on its own line with trailing comma) or compact (`[{ ... }],` inline).
  // Both patterns need to match.
  let m = src.match(/\n\s+counsel:\s*\[([\s\S]*?)\n\s+\],/);
  if (!m) m = src.match(/\n\s+counsel:\s*\[([\s\S]*?)\](?=\s*,|\s*\n)/);
  if (!m) return null;
  return (m[1].match(/type:\s*"/g) || []).length;
}
function parseQuotedArray(src, field) {
  const re = new RegExp('\\n\\s+' + field + ':\\s*\\[([\\s\\S]*?)\\]');
  const m = src.match(re);
  if (!m) return null;
  return [...m[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map(x => x[1]);
}
// Extract the string items inside a `{ en: [ "...", "...", ] }` block, such
// as `yourRights: { en: [ ... ] }`. Escape-aware.
function parseEnArrayStrings(src, field) {
  const re = new RegExp('\\n\\s+' + field + ':\\s*\\{\\s*en:\\s*\\[([\\s\\S]*?)\\]');
  const m = src.match(re);
  if (!m) return null;
  return [...m[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map(x => x[1]);
}

function parseRelatedIds(src) {
  const m = src.match(/relatedIds:\s*\[([\s\S]*?)\]/);
  if (!m) return [];
  const ids = [];
  const re = /"([^"\\]*(?:\\.[^"\\]*)*)"/g;
  let t;
  while ((t = re.exec(m[1]))) ids.push(t[1]);
  return ids;
}

function firstSentence(s) {
  if (!s) return '';
  const parts = s.split(/(?<=[.!?])\s+/);
  return parts[0] || s;
}

// Second-person voice patterns that must not appear in titles or summary
// first sentences. Structural voice anchors are build-enforced third-person
// per CLAUDE.md; body content (yourRights, whatItMeans, example, etc.)
// is NOT checked here — legacy drift there is accepted pending contributor
// cleanup.
const SECOND_PERSON_RE = /\b(you|your|yours|you're|you've|you'll|you'd)\b/i;

// Allow-list: relatedIds that reference targets that don't exist in the
// corpus YET (pending author or attorney action). Each entry here is a
// temporary bypass with a comment explaining WHY. Remove when resolved.
const RELATED_ID_ALLOWLIST = new Set([
  // bankruptcy-automatic-stay-ny references debt-collectors-ny which doesn't
  // exist. The bankruptcy entries are Germain-approved content; fixing this
  // requires explicit attorney review per project_bankruptcy_entries_verified.
  'debt-collectors-ny',
]);

// Files exempt from the voice check — Prof. Germain approved the bankruptcy
// entries' current wording; the voice, length, metadata, and liability-reducing
// phrasing were all specified by the professor. Nothing about these files is
// safe to modify without attorney review. See project_bankruptcy_entries_verified.md.
const BANKRUPTCY_FILES = new Set([
  'bankruptcy-automatic-stay-ny.js',
  'bankruptcy-chapter13-ny.js',
  'bankruptcy-chapter7-ny.js',
  'bankruptcy-discharge-ny.js',
  'bankruptcy-exemptions-ny.js',
  'bankruptcy-means-test-ny.js',
  'bankruptcy-reaffirmation-ny.js',
]);
// Backward-compat alias for the voice check.
const VOICE_CHECK_SKIP_FILES = BANKRUPTCY_FILES;

// Valid enum values. Added 2026-04-19 alongside the content-quality ceiling.
// 'health' (28) and 'healthcare' (11) both appear in the corpus; accept both
// until a cleanup pass normalizes. Same for 'medium' vs 'moderate' volatility.
const VALID_CATEGORIES = new Set([
  'consumer', 'housing', 'family', 'benefits', 'criminal', 'employment',
  'vehicle', 'education', 'government', 'trades',
  'health', 'healthcare', // both until normalized
]);
const VALID_TIERS = new Set(['state', 'federal', 'county', 'town', 'village', 'city', 'local']);
const VALID_STATUSES = new Set(['active', 'draft', 'deprecated']);
const VALID_VOLATILITIES = new Set(['low', 'medium', 'moderate', 'high']); // medium+moderate both
// Jurisdictions follow a pattern rather than a fixed set:
//   us-ny              — state-level NY
//   us-fed             — federal
//   us-ny-mon          — Monroe County
//   us-ny-monroe-{municipality}-(town|village|city)  — local municipality
const VALID_JURISDICTION_RE =
  /^(us-ny|us-fed|us-ny-mon|us-ny-monroe-[a-z-]+-(town|village|city))$/;

// Minimum field-count and length thresholds. Set conservatively so the current
// corpus passes. Tightening these over time is the way to ratchet quality up.
const MIN_TAGS = 5;
const MIN_SOURCES = 1;
// Trust-requiring authority types need at least 2 sources (statute plus an
// explanatory or enforcement reference). Local ordinances legitimately cite
// only the town code; agency programs cite the program page. Added 2026-04-20
// per maintainer direction to harden trust for statute-backed entries. The
// LEGACY_SOURCES_LT2_EXEMPTIONS set below grandfathers the 29 pre-rule
// entries pending a future second-source sweep; new entries must comply.
const MIN_SOURCES_TRUST = 2;
const TRUST_AUTHORITY_TYPES = new Set([
  'state-statute',
  'federal-statute',
  'state-regulation',
  'federal-regulation',
  'common-law',
]);
const LEGACY_SOURCES_LT2_EXEMPTIONS = new Set([
  'apartment-carpet-replacement-ny.js',
  'boundary-line-agreement-rpl-345-ny.js',
  'electric-fence-rules-ny.js',
  'fireworks-laws-ny.js',
  'gift-card-rights-ny.js',
  'grandparent-visitation-ny.js',
  'gym-membership-cancellation-ny.js',
  'hit-and-run-leaving-scene-ny.js',
  'ice-dam-roof-damage-ny-cl.js',
  'landlord-enter-emergency-ny-cl.js',
  'landlord-retaliation-ban-ny.js',
  'landlord-showing-apartment-notice-ny-cl.js',
  'landlord-wont-give-receipt-ny.js',
  'life-insurance-policy-lapse-protection-ny.js',
  'missed-court-warrant-ny.js',
  'mobile-home-tenant-rights-ny.js',
  'neighbors-security-light-ny-cl.js',
  'pet-deposit-pet-rent-ny.js',
  'price-gouging-ny.js',
  'private-road-maintenance-ny.js',
  'return-refund-policy-ny.js',
  'right-to-repair-ny.js',
  'roommate-rights-ny.js',
  'school-bus-safety-laws-ny.js',
  'self-defense-laws-ny.js',
  'tenant-right-to-organize-ny.js',
  'trampoline-liability-ny-cl.js',
  'tree-damage-neighbor-liability-ny-cl.js',
  'wage-payment-frequency-ny.js',
]);
const MIN_COUNSEL = 1;
const MIN_WHO_QUALIFIES = 2;
const MIN_YOUR_RIGHTS = 2;
const MIN_LEGAL_OPTIONS = 1;
const MIN_TITLE_LEN = 20;
const MAX_TITLE_LEN = 250;
const MIN_SUMMARY_LEN = 80;
const MAX_SUMMARY_LEN = 1500;
const MIN_WHATITMEANS_LEN = 400;

// Advisory (non-blocking) nudge thresholds.
const WARN_SOURCES_BELOW = 2;
const WARN_RELATED_BELOW = 2;
const WARN_WHATITMEANS_BELOW = 800;
// Statute-heavy entries (state-statute, federal-statute, state-regulation,
// federal-regulation, common-law) carry specific dollar amounts, hour
// thresholds, and legal citations — exactly the content most likely to
// drift wrong silently. The factCheckedBy field records when an external
// fact-check pass was run. Older than this threshold, or missing entirely,
// emits a WARN. See scripts/fact-check-prompt.cjs for the prompt.
const WARN_FACT_CHECK_AGE_MONTHS = 12;
const FACT_CHECK_REQUIRED_AUTHORITIES = new Set([
  'state-statute', 'federal-statute',
  'state-regulation', 'federal-regulation',
  'common-law',
]);
// Title-only near-duplicate threshold. Higher than the tag+title pair check
// (0.5) because title-only fires without the tag corroboration, so we want to
// be more confident the pair is a real rewrite collision.
const WARN_TITLE_JACCARD_ONLY = 0.75;

// UPL (unauthorized practice of law) red-flag patterns. Strong markers of
// attorney-advice voice that have no legitimate use in plain-English explainer
// content for a non-attorney-run site. Added 2026-04-19 after batches 46-57
// were deleted for drifting into lawyer treatise voice. See
// feedback_lawyer_voice_upl_risk.md. Each pattern was verified to produce
// zero hits in the surviving 984-entry corpus before being made FAIL.
const UPL_FAIL_PATTERNS = [
  { name: 'Strategic considerations section', re: /\bStrategic considerations\b/i },
  { name: 'Bottom line: advice header', re: /\bBottom line:/i },
  { name: 'Engage [type] counsel/attorney/lawyer recommendation',
    re: /\bEngage\s+(?:\w+[\s-]+){0,6}(?:attorneys?|counsel|lawyers?)\b/i },
];

// Cap on whatItMeans word count. The deleted batches 46-57 had whatItMeans
// of 5000-7000 words written in treatise voice. Maximum in the surviving
// corpus is 1079 words. 1800 gives ~70% headroom over current max while
// blocking the 5000+ word treatise drift. Tighten over time as quality rises.
const MAX_WHATITMEANS_WORDS = 1800;

// Preferred source domains — .gov, .edu, plus a short list of trusted NY
// nonprofit legal-aid and bar-association domains whose material is generally
// accurate and stable. A source URL outside this set triggers a WARN nudge to
// replace blog posts, marketing sites, and advertorials with authoritative
// citations. Expand the nonprofit list as legitimate sources appear in the
// corpus — but prefer finding the underlying statute, regulation, or agency
// page over adding yet another third-party domain.
const TRUSTED_SOURCE_DOMAIN_SUFFIXES = [
  '.gov', '.edu', '.us', '.mil',
];
const TRUSTED_SOURCE_DOMAINS_EXACT = new Set([
  // NY legal-aid, bar associations, and public-interest organizations
  'aclu.org', 'nyclu.org',
  'lawhelpny.org', 'lawhelp.org',
  'lasroc.org', 'empirejustice.org', 'justcauseroc.org',
  'legalaidnyc.org', 'legalaidsocietyofrochester.org',
  'lawny.org',              // Legal Assistance of Western New York
  'justcauseny.org',        // JustCause (formerly VLSP) — Rochester legal aid
  'lac.org',                // Legal Action Center
  'reentry.net',            // Bronx Defenders Reentry Net
  'righttocounselnyc.org',  // Right to Counsel NYC Coalition
  'innocenceproject.org',   // The Innocence Project
  'cdsadr.org',             // Center for Dispute Settlement (Rochester)
  'nycbar.org', 'nysba.org', 'mcba.org',
  'fasny.com', // Firemen's Association of NY — statutory advocacy
  'eff.org',   // Electronic Frontier Foundation — privacy/tech rights
  // State-run programs operated on .org domains
  'nysaves.org',    // NY 529 College Savings Program (state-operated)
  'mynyable.org',   // NY ABLE Program (state-operated)
  'sonyma.org',     // State of New York Mortgage Agency — state authority
  'nysarctrustservices.org', // NYSARC Trust Services — special needs trusts
  // NY public authorities and regulated utilities (statutorily created)
  'mcwa.com',       // Monroe County Water Authority — statutory public authority
  'mvaic.com',      // Motor Vehicle Accident Indemnification Corp — NY statutory insurer
  'myrts.com',      // Regional Transit Service (RGRTA) — public transit authority
  'rge.com',        // Rochester Gas and Electric — PSC-regulated monopoly utility
  'nysif.com',      // NY State Insurance Fund — public workers' comp insurer
  'wadsworth.org',  // Wadsworth Center — NY State Dept of Health laboratory
  'monroecountyswcd.org', // Monroe County Soil & Water Conservation District
  // Federally-mandated NY agencies and federal agency partners
  'disabilityrightsny.org', // NY Protection & Advocacy agency (federally mandated)
  'askjan.org',             // Job Accommodation Network (federal DOL ODEP-funded)
  'usac.org',               // Universal Service Administrative Co. — FCC Lifeline admin
  'lifelinesupport.org',    // Federal Lifeline program eligibility
  'checklifeline.org',      // Federal Lifeline program check
  '988lifeline.org',        // 988 Suicide & Crisis Lifeline (SAMHSA)
  '211lifeline.org',        // NY 211 (state-operated referral)
  // Monroe County town and village official websites
  'henrietta.org', 'townofwheatland.org', 'brockportny.org',
  'churchville.net', 'hamlinny.org', 'townofriga.com',
  'townofrush.com', 'scottsvilleny.org', 'clarksonny.org',
  'hiltonny.org', 'perinton.org', 'townofchili.org',
  'fairportny.org', 'penfield.org', 'townofsweden.org',
  // Federally-mandated consumer resources and national nonprofits
  'usps.com',               // U.S. Postal Service — independent federal agency
  'annualcreditreport.com', // FCRA-mandated free credit report site
  'redcross.org',           // American Red Cross — federal charter
  'thehotline.org',         // National Domestic Violence Hotline (HHS-funded)
  'aspca.org',              // ASPCA — national animal welfare
  'cybercivilrights.org',   // Cyber Civil Rights Initiative
  'crohnscolitisfoundation.org', // Crohn's & Colitis Foundation
  // Standards bodies and insurance/real estate reference sources
  'nfpa.org',               // National Fire Protection Association — model codes
  'iii.org',                // Insurance Information Institute
  'alta.org',               // American Land Title Association
  'ul.com',                 // UL Solutions — safety certification
  'nysapls.org',            // NY State Assoc of Professional Land Surveyors
  // Municipal code publishing platforms (the actual hosting service for town codes)
  'ecode360.com',           // General Code — hosts most NY town code text
  'codes.iccsafe.org',      // International Code Council — model building/fire codes
  // HUD-certified housing counselors in the Rochester region
  'thehousingcouncil.org', 'pathstone.org',
  // Rochester-area social-service nonprofits (cited across multiple entries)
  'cfcrochester.org',       // Catholic Family Center Rochester
  'lifespan-roch.org',      // Lifespan of Greater Rochester — elder services
  'pcsforpeople.org',       // PCs for People — low-income tech access
  'needymeds.org',          // NeedyMeds — prescription assistance
  'communityhealthadvocates.org', // NY Community Health Advocates (state-contracted)
  'nyhaf.org',              // NY Health Access Foundation
  'nysmokefree.com',        // NY State Smokers' Quitline (state-contracted)
  'molst.org',              // MOLST — NY Medical Orders for Life-Sustaining Treatment
  'nyeia.com',              // NY Early Intervention Agency
  'lollypop.org',           // Lollypop Farm — Humane Society of Greater Rochester
  'vspeyesofhope.com',      // VSP Eyes of Hope — vision care for low-income
  'roccitylibrary.org',     // Rochester Public Library
  'rcfp.org',               // Reporters Committee for Freedom of the Press
  'ala.org',                // American Library Association
  'roclandbank.org',        // Rochester Land Bank — abandoned property remediation
  'charitiesnys.com',       // NY AG Charities Bureau (state-operated, .com domain)
]);

function sourceDomainTrusted(url) {
  if (!url) return false;
  let host;
  try { host = new URL(url).hostname.toLowerCase(); } catch { return false; }
  // Strip leading "www."
  if (host.startsWith('www.')) host = host.slice(4);
  for (const suffix of TRUSTED_SOURCE_DOMAIN_SUFFIXES) {
    if (host.endsWith(suffix)) return true;
  }
  if (TRUSTED_SOURCE_DOMAINS_EXACT.has(host)) return true;
  // Also trust any subdomain of an exact-match nonprofit (e.g., x.aclu.org).
  for (const d of TRUSTED_SOURCE_DOMAINS_EXACT) {
    if (host.endsWith('.' + d)) return true;
  }
  return false;
}

// Tier consistency with authorityType. Each authorityType constrains which
// tiers are valid. federal statutes/regulations must have federal tier;
// local ordinances must have a local tier (county/town/village/city/local);
// state/common-law entries typically use state tier; agency-program is
// permissive since programs exist at many levels.
const AUTHORITY_TIER_VALID = {
  'state-statute': new Set(['state']),
  'state-regulation': new Set(['state']),
  'federal-statute': new Set(['federal']),
  'federal-regulation': new Set(['federal']),
  'local-ordinance': new Set(['county', 'town', 'village', 'city', 'local']),
  'common-law': new Set(['state']),
  'agency-program': new Set(['state', 'federal', 'county', 'town', 'village', 'city', 'local']),
};

// Third-person subject patterns acceptable as the opening of a yourRights
// item. Anything starting with "You", "Your", or contraction forms is
// flagged as a voice drift.
const YOUR_RIGHTS_FIRST_WORD_OK = new Set([
  'A', 'An', 'The', 'Any', 'Every', 'No', 'Each', 'Both', 'Either', 'Neither',
  'Some', 'All', 'Parents', 'Children', 'Students', 'Employees', 'Workers',
  'Employers', 'Tenants', 'Landlords', 'Owners', 'Consumers', 'Patients',
  'Spouses', 'Heirs', 'Beneficiaries', 'Creditors', 'Debtors', 'Victims',
  'Defendants', 'Plaintiffs', 'Applicants', 'Recipients', 'Non-citizens',
  'Taxpayers', 'Homeowners', 'Veterans', 'Seniors', 'Minors', 'Adults',
  'Guardians', 'Trustees', 'Executors', 'Members', 'Residents', 'Drivers',
  'Persons', 'Couples', 'Families', 'Borrowers', 'Juveniles', 'Buyers',
  'Sellers', 'Visitors', 'Attendees', 'Union-represented',
]);

// Extract candidate section-number strings from a primary statute citation
// so we can check whether whatItMeans mentions the statute. Returns all
// reasonable variants to check. Examples:
//   "NY EPT 13-3.2"   -> ["13-3.2"]
//   "42 USC 1395DD"   -> ["1395dd"]
//   "NY CVP 6501"     -> ["6501"]
//   "NY CPL A510"     -> ["a510", "510"]           (strip the Article 'A')
//   "NY GBS A44-A"    -> ["a44-a", "44-a"]         (ditto)
//   "NY ABP"          -> []                        (no section number; skip)
//   "NY CPL"          -> []                        (no section number; skip)
function statuteSectionKeys(primaryStatute) {
  if (!primaryStatute) return [];
  const parts = primaryStatute.trim().split(/\s+/);
  const last = (parts[parts.length - 1] || '').toLowerCase();
  // Skip if the last token is all letters (code-only citation like "NY ABP").
  if (!/\d/.test(last)) return [];
  const variants = new Set([last]);
  // Strip leading "a" if it's an article marker (e.g., "a510" -> "510",
  // "a44-a" -> "44-a"). This catches text that says "Section 510" or "Article 44-A".
  if (/^a\d/.test(last)) {
    variants.add(last.slice(1));
  }
  return [...variants];
}

function parseTags(src) {
  // Extract the tags: [ ... ] array. Tags are quoted strings separated by commas.
  const m = src.match(/tags:\s*\[([\s\S]*?)\]/);
  if (!m) return [];
  const body = m[1];
  const tags = [];
  const re = /"([^"\\]*(?:\\.[^"\\]*)*)"/g;
  let t;
  while ((t = re.exec(body))) tags.push(t[1].toLowerCase().trim());
  return tags;
}

function titleTokens(title) {
  return new Set(
    String(title)
      .toLowerCase()
      .replace(/[^a-z0-9\s]+/g, ' ')
      .split(/\s+/)
      .filter((w) => w && w.length > 2 && !STOPWORDS.has(w))
  );
}

function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter);
}

// Scope is derived from authorityType, not the id suffix. This is the durable
// uniqueness guarantee: two entries with the same normalized topic and the
// same authorityType collide regardless of filename cosmetics. If someone
// later writes "foo-ny" with authorityType:"common-law", it will collide with
// the existing "foo-ny-cl" even though their filenames look different.
const SCOPE_BY_AUTHORITY = {
  'state-statute': 'ny',
  'federal-statute': 'us',
  'state-regulation': 'ny-reg',
  'federal-regulation': 'us-reg',
  'common-law': 'case-law',
  'agency-program': 'program',
};

function normalizeTopic(id) {
  return id
    .replace(/-ny-mon-.*$/, '')
    .replace(/-ny-cl$/, '')
    .replace(/-ny-program$/, '')
    .replace(/-us-reg-ny$/, '')
    .replace(/-us-ny$/, '')
    .replace(/-ny-reg$/, '')
    .replace(/-ny$/, '');
}

function deriveKey(entry) {
  const { id, authorityType } = entry;
  if (!id) return null;

  // local-ordinance: municipality is part of the scope so different towns stay distinct
  if (authorityType === 'local-ordinance') {
    const m = id.match(/-ny-mon-(.+?)(?:-(?:town|village|city))?$/);
    const municipality = m ? m[1] : 'ny-unscoped';
    const topic = normalizeTopic(id);
    return `${topic}::local-ordinance::${municipality}`;
  }

  const topic = normalizeTopic(id);
  const scope = SCOPE_BY_AUTHORITY[authorityType] || 'unknown';
  return `${topic}::${authorityType || 'unlabeled'}::${scope}`;
}

// Lightweight JS-sanity check: flags English-language strings that contain an
// unescaped double quote inside them. This is the class of bug that broke
// pay-on-death and emotional-support-animal — rollup/vite fails cryptically,
// Vercel build fails. Catching here saves the deploy.
function findEmbeddedQuotes(filename) {
  const src = fs.readFileSync(path.join(ENTRIES_DIR, filename), 'utf8');
  const hits = [];
  // Match `en: "..."` value strings. Look for a bare " inside the string body
  // (i.e., not immediately preceded by a backslash). Multiline-dotall so we
  // catch long paragraphs.
  const re = /en:\s*"((?:[^"\\]|\\.)*?)"(?=\s*[,}])/gs;
  let m;
  while ((m = re.exec(src))) {
    // Inside the captured group, a literal " would have ended the string, so
    // if we got here the whole string is balanced. The earlier failures are
    // from rollup choking BEFORE this regex succeeds. We detect them via a
    // fallback: scan for the pattern `": "xxxx"` where an extra " sits mid-string.
  }
  // Simpler heuristic: within any JS line beginning with `en: "`, count bare
  // double quotes. Odd count means embedded quote that breaks parsing.
  const lines = src.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!/^\s*en:\s*"/.test(line)) continue;
    // Count unescaped double quotes; balanced en-string has exactly 2
    // (opening and closing) on a single-line value.
    let count = 0;
    for (let j = 0; j < line.length; j++) {
      if (line[j] === '"' && line[j - 1] !== '\\') count++;
    }
    // All en strings in this codebase are single-line — the opening and
    // closing quote are on the same line. Any count other than 2 means
    // either an embedded unescaped quote (count=3 or 5) or an embedded pair
    // (count=4, 6, etc.) — both break rollup with a cryptic message.
    if (count !== 2) {
      hits.push(`${filename}:${i + 1} — ${count} unescaped double quotes on en: line (should be 2); likely embedded quote breaking vite build`);
    }
  }
  return hits;
}

function main() {
  const files = fs.readdirSync(ENTRIES_DIR).filter(f => f.endsWith('.js'));
  const entries = files.map(parseEntry);

  const errors = [];
  const statuteWarnings = [];
  const byKey = new Map();
  const byStatute = new Map();

  // Existing-ID set for broken-relatedIds check.
  const existingIds = new Set(entries.filter(e => e.id).map(e => e.id));

  // Sanity check for embedded double quotes — the class of bug that makes
  // rollup fail with cryptic errors.
  for (const f of files) {
    for (const hit of findEmbeddedQuotes(f)) errors.push(hit);
  }

  // Structural voice check: title.en and summary.en first sentence must not
  // contain second-person pronouns. Body content is intentionally not checked.
  // Introduced 2026-04-19 after two corpus-wide rewrites (pass 1 titles,
  // pass 2 summaries). See project_session_2026_04_18_batches_15_28.md.
  // Germain-approved bankruptcy entries are exempt — see VOICE_CHECK_SKIP_FILES.
  for (const e of entries) {
    if (VOICE_CHECK_SKIP_FILES.has(e.filename)) continue;
    if (SECOND_PERSON_RE.test(e.title)) {
      errors.push(`${e.filename}: title uses second-person voice ("${e.title}") — rewrite in third-person`);
    }
    const firstSent = firstSentence(e.summary);
    if (SECOND_PERSON_RE.test(firstSent)) {
      errors.push(`${e.filename}: summary first sentence uses second-person voice ("${firstSent}") — rewrite in third-person`);
    }
  }

  // Broken-relatedIds check: every relatedId must point to an entry that
  // exists on disk or appear in RELATED_ID_ALLOWLIST. Introduced 2026-04-19
  // after 57 broken refs accumulated silently across 52 files.
  for (const e of entries) {
    for (const rid of e.relatedIds) {
      if (!existingIds.has(rid) && !RELATED_ID_ALLOWLIST.has(rid)) {
        errors.push(`${e.filename}: relatedIds points to nonexistent entry "${rid}"`);
      }
    }
  }

  // Content-quality checks (the "ceiling and walls" layer). Added 2026-04-19.
  // Each check fails the build if a new entry trips it. Thresholds calibrated
  // against the current corpus (see scripts/audit-corpus-for-validator.cjs).
  // The 7 Germain-reviewed bankruptcy files are fully exempt — the professor
  // specified the wording, length, metadata, and liability-reducing phrasing
  // and nothing there is safe to automate.
  const contentWarnings = [];
  for (const e of entries) {
    if (BANKRUPTCY_FILES.has(e.filename)) continue;
    // Enum validation
    if (e.category && !VALID_CATEGORIES.has(e.category)) {
      errors.push(`${e.filename}: invalid category "${e.category}"`);
    }
    if (e.tier && !VALID_TIERS.has(e.tier)) {
      errors.push(`${e.filename}: invalid tier "${e.tier}"`);
    }
    if (e.status && !VALID_STATUSES.has(e.status)) {
      errors.push(`${e.filename}: invalid status "${e.status}"`);
    }
    if (e.volatility && !VALID_VOLATILITIES.has(e.volatility)) {
      errors.push(`${e.filename}: invalid volatility "${e.volatility}"`);
    }
    if (e.jurisdiction && !VALID_JURISDICTION_RE.test(e.jurisdiction)) {
      errors.push(`${e.filename}: invalid jurisdiction "${e.jurisdiction}" — must match us-ny | us-fed | us-ny-mon | us-ny-monroe-{municipality}-(town|village|city)`);
    }

    // Last-verified format
    if (!e.lastVerified) {
      errors.push(`${e.filename}: missing lastVerified`);
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(e.lastVerified)) {
      errors.push(`${e.filename}: lastVerified "${e.lastVerified}" is not YYYY-MM-DD`);
    } else {
      const d = new Date(e.lastVerified);
      const diffDays = (d - Date.now()) / (1000 * 60 * 60 * 24);
      if (diffDays > 7) {
        errors.push(`${e.filename}: lastVerified "${e.lastVerified}" is more than 7 days in the future`);
      }
    }

    // Field counts
    if (e.tags.length < MIN_TAGS) {
      errors.push(`${e.filename}: tags count ${e.tags.length} below minimum ${MIN_TAGS}`);
    }
    if (new Set(e.tags).size !== e.tags.length) {
      errors.push(`${e.filename}: tags array contains duplicates`);
    }
    if (!e.sources || e.sources.length < MIN_SOURCES) {
      errors.push(`${e.filename}: sources count ${e.sources ? e.sources.length : 0} below minimum ${MIN_SOURCES}`);
    } else if (
      TRUST_AUTHORITY_TYPES.has(e.authorityType) &&
      e.sources.length < MIN_SOURCES_TRUST &&
      !LEGACY_SOURCES_LT2_EXEMPTIONS.has(e.filename)
    ) {
      errors.push(`${e.filename}: sources count ${e.sources.length} below trust minimum ${MIN_SOURCES_TRUST} for authorityType "${e.authorityType}" (statute-backed entries need a second source — consumer guide, court self-help page, regulator, or explanatory reference)`);
    }
    if (e.sources) {
      for (const url of e.sources) {
        if (url && !url.startsWith('https://')) {
          errors.push(`${e.filename}: source URL must use https: "${url}"`);
        }
      }
    }
    if (e.counselCount === null || e.counselCount < MIN_COUNSEL) {
      errors.push(`${e.filename}: counsel entries ${e.counselCount ?? 0} below minimum ${MIN_COUNSEL}`);
    }
    if (e.whoQualifiesCount === null || e.whoQualifiesCount < MIN_WHO_QUALIFIES) {
      errors.push(`${e.filename}: whoQualifies items ${e.whoQualifiesCount ?? 0} below minimum ${MIN_WHO_QUALIFIES}`);
    }
    if (e.yourRightsCount === null || e.yourRightsCount < MIN_YOUR_RIGHTS) {
      errors.push(`${e.filename}: yourRights items ${e.yourRightsCount ?? 0} below minimum ${MIN_YOUR_RIGHTS}`);
    }
    if (e.legalOptionsCount === null || e.legalOptionsCount < MIN_LEGAL_OPTIONS) {
      errors.push(`${e.filename}: legalOptions items ${e.legalOptionsCount ?? 0} below minimum ${MIN_LEGAL_OPTIONS}`);
    }

    // Length sanity
    if (e.title.length < MIN_TITLE_LEN || e.title.length > MAX_TITLE_LEN) {
      errors.push(`${e.filename}: title length ${e.title.length} outside [${MIN_TITLE_LEN}, ${MAX_TITLE_LEN}]`);
    }
    if (!e.summary) {
      errors.push(`${e.filename}: missing summary.en`);
    } else if (e.summary.length < MIN_SUMMARY_LEN || e.summary.length > MAX_SUMMARY_LEN) {
      errors.push(`${e.filename}: summary length ${e.summary.length} outside [${MIN_SUMMARY_LEN}, ${MAX_SUMMARY_LEN}]`);
    }
    if (!e.whatItMeans) {
      errors.push(`${e.filename}: missing whatItMeans.en`);
    } else if (e.whatItMeans.length < MIN_WHATITMEANS_LEN) {
      errors.push(`${e.filename}: whatItMeans length ${e.whatItMeans.length} below minimum ${MIN_WHATITMEANS_LEN}`);
    }

    // UPL red-flag check. Added 2026-04-19. See feedback_lawyer_voice_upl_risk.md.
    // Strong attorney-advice patterns that have no place in a non-attorney-run
    // explainer site. Each pattern was verified to have zero hits in the surviving
    // corpus before being made FAIL. Checks both whatItMeans and summary.
    if (e.whatItMeans) {
      for (const pat of UPL_FAIL_PATTERNS) {
        if (pat.re.test(e.whatItMeans)) {
          errors.push(`${e.filename}: whatItMeans contains UPL red-flag (${pat.name}) — rewrite as plain-English explainer per feedback_lawyer_voice_upl_risk.md`);
        }
      }
      // Word-count cap. Forces tight writing; blocks the 5000-word treatise drift.
      const words = e.whatItMeans.split(/\s+/).filter(Boolean).length;
      if (words > MAX_WHATITMEANS_WORDS) {
        errors.push(`${e.filename}: whatItMeans word count ${words} exceeds maximum ${MAX_WHATITMEANS_WORDS} — tighten to plain-English explainer length`);
      }
    }
    if (e.summary) {
      for (const pat of UPL_FAIL_PATTERNS) {
        if (pat.re.test(e.summary)) {
          errors.push(`${e.filename}: summary contains UPL red-flag (${pat.name}) — rewrite as plain-English explainer`);
        }
      }
    }

    // Advisory nudges (WARN — do not fail the build)
    if (e.sources && e.sources.length < WARN_SOURCES_BELOW) {
      contentWarnings.push(`${e.filename}: sources count ${e.sources.length} < ${WARN_SOURCES_BELOW} (nudge toward richer sourcing)`);
    }
    if (e.relatedIds.length < WARN_RELATED_BELOW) {
      contentWarnings.push(`${e.filename}: relatedIds count ${e.relatedIds.length} < ${WARN_RELATED_BELOW} (nudge toward cross-linking)`);
    }
    if (e.whatItMeans && e.whatItMeans.length < WARN_WHATITMEANS_BELOW) {
      contentWarnings.push(`${e.filename}: whatItMeans length ${e.whatItMeans.length} < ${WARN_WHATITMEANS_BELOW} (nudge toward substantive content)`);
    }

    // Ceiling extension 1 — authorityType must match tier. Added 2026-04-19.
    // Prevents mismatched labels like a local-ordinance entry labeled tier "state".
    if (e.authorityType && e.tier) {
      const allowed = AUTHORITY_TIER_VALID[e.authorityType];
      if (allowed && !allowed.has(e.tier)) {
        errors.push(`${e.filename}: authorityType "${e.authorityType}" is inconsistent with tier "${e.tier}" — expected one of: ${[...allowed].join(', ')}`);
      }
    }

    // Ceiling extension 2 — primaryStatute section number should appear at
    // least once in whatItMeans text. WARN only; some entries legitimately
    // describe the statute in prose without the exact section number. Skips
    // citations without section numbers (e.g., "NY ABP" alone).
    const sectionKeys = statuteSectionKeys(e.primaryStatute);
    if (sectionKeys.length && e.whatItMeans) {
      const body = e.whatItMeans.toLowerCase();
      const hit = sectionKeys.some(k => body.includes(k));
      if (!hit) {
        contentWarnings.push(`${e.filename}: primaryStatute "${e.primaryStatute}" not referenced in whatItMeans (nudge to cite statute in body)`);
      }
    }

    // Ceiling extension 3 — yourRights items should open with a third-person
    // subject pattern (A/An/The/Any/etc.), not second person (You/Your).
    // WARN only; some legacy items use "A person who..." etc. which is fine;
    // items starting with "You" are flagged.
    if (e.yourRightsItems) {
      for (const item of e.yourRightsItems) {
        // Get first word. Strip leading punctuation/quotes.
        const firstWord = (item.trim().match(/^([A-Za-z][A-Za-z-']*)/) || [])[1];
        if (!firstWord) continue;
        if (/^(you|your|yours)$/i.test(firstWord)) {
          contentWarnings.push(`${e.filename}: yourRights item starts with "${firstWord}" — rewrite in third-person ("${item.slice(0, 80)}...")`);
        }
      }
    }

    // Ceiling extension — fact-check freshness for statute-heavy entries.
    // These entries carry specific dollar amounts, hour thresholds, and
    // citations — exactly the content most likely to drift wrong silently.
    // WARN if no factCheckedBy field, or if the date is older than the
    // configured threshold. WARN only — historical entries lack the field.
    if (e.authorityType && FACT_CHECK_REQUIRED_AUTHORITIES.has(e.authorityType)) {
      if (!e.factCheckedByDate) {
        contentWarnings.push(`${e.filename}: no factCheckedBy field on statute-heavy entry — run \`node scripts/fact-check-prompt.cjs ${e.id}\` and add factCheckedBy: { tool: "...", date: "YYYY-MM-DD" }`);
      } else {
        const fcd = new Date(e.factCheckedByDate + 'T00:00:00');
        if (!isNaN(fcd.getTime())) {
          const ageMonths = (Date.now() - fcd.getTime()) / (1000 * 60 * 60 * 24 * 30.44);
          if (ageMonths > WARN_FACT_CHECK_AGE_MONTHS) {
            contentWarnings.push(`${e.filename}: factCheckedBy date "${e.factCheckedByDate}" is ${Math.floor(ageMonths)} months old (threshold ${WARN_FACT_CHECK_AGE_MONTHS}) — re-run fact-check`);
          }
        }
      }
    }

    // Ceiling extension 4 — source URL domain preference. Nudge toward .gov
    // and .edu (and a short trusted nonprofit list) over blog posts, law-firm
    // marketing pages, and advertorials. WARN only — some legitimate third-
    // party sources don't fit the allowlist and that's fine as a judgment call.
    if (e.sources) {
      for (const url of e.sources) {
        if (url && url.startsWith('https://') && !sourceDomainTrusted(url)) {
          let host = '?';
          try { host = new URL(url).hostname; } catch {}
          contentWarnings.push(`${e.filename}: source "${host}" not on trusted domain list (prefer .gov / .edu / known legal-aid nonprofit — see TRUSTED_SOURCE_DOMAINS_EXACT)`);
        }
      }
    }
  }
  // Stash content warnings for later printing (see bottom of main).
  global.__contentWarnings = contentWarnings;

  for (const entry of entries) {
    if (!entry.id) {
      errors.push(`${entry.filename}: missing id field`);
      continue;
    }

    if (!entry.authorityType) {
      errors.push(`${entry.filename}: missing required authorityType field`);
      continue;
    }

    if (!VALID_AUTHORITY_TYPES.has(entry.authorityType)) {
      errors.push(`${entry.filename}: invalid authorityType "${entry.authorityType}"`);
      continue;
    }

    const key = deriveKey(entry);
    if (byKey.has(key)) {
      errors.push(`DUPLICATE KEY "${key}":\n    - ${byKey.get(key)}\n    - ${entry.filename}`);
    } else {
      byKey.set(key, entry.filename);
    }

    // Primary-statute collision gate. Only enforced when primaryStatute is set
    // AND authorityType is one of the statute/regulation types. Skips
    // common-law, agency-program, and local-ordinance (which legitimately may
    // share statutes across municipalities/scopes).
    const statuteScopedAuthority = (
      entry.authorityType === 'state-statute' ||
      entry.authorityType === 'federal-statute' ||
      entry.authorityType === 'state-regulation' ||
      entry.authorityType === 'federal-regulation'
    );
    if (entry.primaryStatute && statuteScopedAuthority) {
      const statuteKey = `${normalizeStatute(entry.primaryStatute)}::${entry.authorityType}`;
      if (byStatute.has(statuteKey)) {
        statuteWarnings.push({
          statute: statuteKey,
          a: byStatute.get(statuteKey),
          b: entry.filename,
        });
      } else {
        byStatute.set(statuteKey, entry.filename);
      }
    }
  }

  const total = entries.length;

  console.log(`verify-entry-uniqueness: ${total} entries scanned, ${byKey.size} unique composite keys, ${byStatute.size} unique primary-statute keys`);

  if (errors.length) {
    console.error('');
    console.error('FAIL:');
    for (const e of errors) console.error('  ' + e);
    process.exit(1);
  }

  // Soft-warning near-duplicate report. Advisory only, does not block.
  if (statuteWarnings.length) {
    console.log('');
    console.log(`WARN: ${statuteWarnings.length} primary-statute collision(s) (not blocking, review):`);
    for (const w of statuteWarnings.slice(0, 60)) {
      console.log(`  ${w.statute}`);
      console.log(`    - ${w.a}`);
      console.log(`    - ${w.b}`);
    }
    if (statuteWarnings.length > 60) console.log(`  ... and ${statuteWarnings.length - 60} more`);
    console.log('  (if two entries legitimately share a governing statute, narrow each primaryStatute to a specific sub-section, or set primaryStatute: null)');
  }
  printNearDuplicates(entries);

  const cw = global.__contentWarnings || [];
  if (cw.length) {
    console.log('');
    // Group warnings by type so the fact-check queue (potentially 900+) does
    // not drown shorter signal classes. factCheckedBy gets its own line count
    // and is summarized rather than enumerated unless --verbose is passed.
    const factCheck = cw.filter(w => w.includes('no factCheckedBy'));
    const stale = cw.filter(w => w.includes('factCheckedBy date'));
    const other = cw.filter(w => !w.includes('factCheckedBy'));
    console.log(`WARN: ${cw.length} content-quality nudge(s) (not blocking, review):`);
    if (other.length) {
      for (const w of other.slice(0, 80)) console.log(`  ${w}`);
      if (other.length > 80) console.log(`  ... and ${other.length - 80} more (non-factCheckedBy)`);
    }
    if (factCheck.length) {
      console.log(`  [fact-check queue] ${factCheck.length} statute-heavy entries lack factCheckedBy — list at scripts/list-factcheck-queue.cjs`);
    }
    if (stale.length) {
      console.log(`  [fact-check stale] ${stale.length} entries with factCheckedBy older than threshold:`);
      for (const w of stale.slice(0, 20)) console.log(`    ${w}`);
      if (stale.length > 20) console.log(`    ... and ${stale.length - 20} more`);
    }
  }

  console.log('OK');
}

function printNearDuplicates(entries) {
  const warnings = [];
  const titleOnlyWarnings = [];
  const titleSets = entries.map((e) => ({ e, tokens: titleTokens(e.title) }));

  for (let i = 0; i < entries.length; i++) {
    for (let j = i + 1; j < entries.length; j++) {
      const a = entries[i];
      const b = entries[j];
      // Skip pairs where both entries are local-ordinance — the per-town
      // trade entries (electrical, plumbing, roofing...) are intentionally
      // duplicated across municipalities by design. Their composite-key
      // scope already differentiates them.
      if (a.authorityType === 'local-ordinance' && b.authorityType === 'local-ordinance') {
        continue;
      }
      const tagsA = new Set(a.tags || []);
      const tagsB = new Set(b.tags || []);
      let shared = 0;
      for (const t of tagsA) if (tagsB.has(t)) shared++;
      const titleJ = jaccard(titleSets[i].tokens, titleSets[j].tokens);
      if (shared >= TAG_OVERLAP_WARN && titleJ >= TITLE_JACCARD_WARN) {
        warnings.push({
          a: a.filename, b: b.filename, shared, titleJ: titleJ.toFixed(2),
        });
      }
      // Title-only check: catches rewrites that don't share tags. Higher
      // threshold because there's no tag corroboration. Skips pairs already
      // caught by the tag+title check above to avoid duplicate output.
      if (titleJ >= WARN_TITLE_JACCARD_ONLY &&
          !(shared >= TAG_OVERLAP_WARN && titleJ >= TITLE_JACCARD_WARN)) {
        titleOnlyWarnings.push({
          a: a.filename, b: b.filename, titleJ: titleJ.toFixed(2),
        });
      }
    }
  }
  if (warnings.length) {
    console.log('');
    console.log(`WARN: ${warnings.length} possible near-duplicate pair(s) (not blocking, review):`);
    for (const w of warnings.slice(0, 40)) {
      console.log(`  ${w.a}  <->  ${w.b}   (shared tags: ${w.shared}, title Jaccard: ${w.titleJ})`);
    }
    if (warnings.length > 40) console.log(`  ... and ${warnings.length - 40} more`);
  }
  if (titleOnlyWarnings.length) {
    console.log('');
    console.log(`WARN: ${titleOnlyWarnings.length} title-only near-duplicate pair(s) (Jaccard >= ${WARN_TITLE_JACCARD_ONLY}, no tag overlap required):`);
    for (const w of titleOnlyWarnings.slice(0, 40)) {
      console.log(`  ${w.a}  <->  ${w.b}   (title Jaccard: ${w.titleJ})`);
    }
    if (titleOnlyWarnings.length > 40) console.log(`  ... and ${titleOnlyWarnings.length - 40} more`);
  }
}

main();
