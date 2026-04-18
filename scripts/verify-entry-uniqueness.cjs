// scripts/verify-entry-uniqueness.cjs
// Fails the build if two legal entries cover the same (topic, authorityType, jurisdictionScope).
// Composite key is the systematic uniqueness guarantee: two entries on the same topic in the
// same authority scope cannot coexist because the build won't compile.
//
// Phase 1 (current): errors on duplicate labeled keys. Warns on unlabeled entries.
// Phase 2 (after full rollout): errors on unlabeled entries too.

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

function deriveKey(entry) {
  const { id, authorityType } = entry;
  if (!id) return null;

  let topic = id;
  let scope = 'ny';

  const localMatch = id.match(/^(.+)-ny-mon-(.+?)(?:-(?:town|village|city))?$/);
  if (localMatch) {
    topic = localMatch[1];
    scope = localMatch[2];
  } else if (id.endsWith('-ny-cl')) {
    topic = id.replace(/-ny-cl$/, '');
    scope = 'case-law';
  } else if (id.endsWith('-ny-program')) {
    topic = id.replace(/-ny-program$/, '');
    scope = 'program';
  } else if (id.endsWith('-us-reg-ny')) {
    topic = id.replace(/-us-reg-ny$/, '');
    scope = 'us-reg';
  } else if (id.endsWith('-us-ny')) {
    topic = id.replace(/-us-ny$/, '');
    scope = 'us';
  } else if (id.endsWith('-ny-reg')) {
    topic = id.replace(/-ny-reg$/, '');
    scope = 'ny-reg';
  } else if (id.endsWith('-ny')) {
    topic = id.replace(/-ny$/, '');
    scope = 'ny';
  }

  return `${topic}::${authorityType || 'unlabeled'}::${scope}`;
}

function main() {
  const files = fs.readdirSync(ENTRIES_DIR).filter(f => f.endsWith('.js'));
  const entries = files.map(parseEntry);

  const errors = [];
  const warnings = [];
  const byKey = new Map();
  let labeled = 0;

  for (const entry of entries) {
    if (!entry.id) {
      errors.push(`${entry.filename}: missing id field`);
      continue;
    }

    if (entry.authorityType) {
      if (!VALID_AUTHORITY_TYPES.has(entry.authorityType)) {
        errors.push(`${entry.filename}: invalid authorityType "${entry.authorityType}"`);
        continue;
      }
      labeled++;
    } else {
      warnings.push(entry.filename);
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
  const unlabeled = warnings.length;

  console.log(`verify-entry-uniqueness: ${total} entries scanned`);
  console.log(`  labeled:   ${labeled}`);
  console.log(`  unlabeled: ${unlabeled} (will error once rollout is complete)`);
  console.log(`  unique keys among labeled: ${byKey.size}`);

  if (errors.length) {
    console.error('');
    console.error('FAIL:');
    for (const e of errors) console.error('  ' + e);
    process.exit(1);
  }

  console.log('OK');
}

main();
