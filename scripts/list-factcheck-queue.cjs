// scripts/list-factcheck-queue.cjs
// Lists every statute-heavy legal entry that lacks the factCheckedBy field.
// Companion to scripts/fact-check-prompt.cjs and the WARN nudge in
// scripts/verify-entry-uniqueness.cjs.

const fs = require('fs');
const path = require('path');

const ENTRIES_DIR = path.join(__dirname, '..', 'src', 'data', 'legal', 'entries');
const REQUIRED = new Set([
  'state-statute', 'federal-statute',
  'state-regulation', 'federal-regulation',
  'common-law',
]);

function main() {
  const files = fs.readdirSync(ENTRIES_DIR).filter(f => f.endsWith('.js'));
  const queue = [];
  for (const f of files) {
    const src = fs.readFileSync(path.join(ENTRIES_DIR, f), 'utf8');
    const at = (src.match(/authorityType:\s*"([^"]+)"/) || [])[1];
    if (!REQUIRED.has(at)) continue;
    if (src.match(/draft:\s*true/)) continue;
    if (src.match(/factCheckedBy:/)) continue;
    queue.push(f.replace('.js', ''));
  }
  for (const id of queue) console.log(id);
  console.error(`\n${queue.length} entries in fact-check queue`);
}

main();
