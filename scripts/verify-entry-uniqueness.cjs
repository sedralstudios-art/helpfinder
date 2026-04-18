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
  const tags = parseTags(src);
  return { filename, id, authorityType, primaryStatute, title, tags };
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

  // Sanity check for embedded double quotes — the class of bug that makes
  // rollup fail with cryptic errors.
  for (const f of files) {
    for (const hit of findEmbeddedQuotes(f)) errors.push(hit);
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
