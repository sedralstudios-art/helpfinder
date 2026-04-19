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
  const title = (src.match(/title:\s*\{\s*en:\s*"([^"]+)"/) || [])[1] || '';
  const summary = (src.match(/summary:\s*\{\s*en:\s*"([^"]+)"/) || [])[1] || '';
  const tags = parseTags(src);
  const relatedIds = parseRelatedIds(src);
  return { filename, id, authorityType, primaryStatute, title, summary, tags, relatedIds };
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
// entries' current wording; any voice rewrite there requires attorney review.
// See project_bankruptcy_entries_verified.md.
const VOICE_CHECK_SKIP_FILES = new Set([
  'bankruptcy-automatic-stay-ny.js',
  'bankruptcy-chapter13-ny.js',
  'bankruptcy-chapter7-ny.js',
  'bankruptcy-discharge-ny.js',
  'bankruptcy-exemptions-ny.js',
  'bankruptcy-means-test-ny.js',
  'bankruptcy-reaffirmation-ny.js',
]);

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

  console.log('OK');
}

function printNearDuplicates(entries) {
  const warnings = [];
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
}

main();
