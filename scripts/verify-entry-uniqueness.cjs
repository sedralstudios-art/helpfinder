// scripts/verify-entry-uniqueness.cjs
// Fails the build if two legal entries cover the same (topic, authorityType, jurisdictionScope).
// Composite key is the systematic uniqueness guarantee: two entries on the same topic in the
// same authority scope cannot coexist because the build won't compile.
//
// Phase 2 (current, since 2026-04-18): every entry must have authorityType.
// An unlabeled entry fails the build.

const path = require('path');
const fs = require('fs');

const ENTRIES_DIR = path.join(__dirname, '..', 'src', 'data', 'legal', 'entries');

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
  return { filename, id, authorityType };
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
  const byKey = new Map();

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
  }

  const total = entries.length;

  console.log(`verify-entry-uniqueness: ${total} entries scanned, ${byKey.size} unique composite keys`);

  if (errors.length) {
    console.error('');
    console.error('FAIL:');
    for (const e of errors) console.error('  ' + e);
    process.exit(1);
  }

  console.log('OK');
}

main();
