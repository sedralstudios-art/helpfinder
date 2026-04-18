// scripts/rename-strip-nn.cjs
// Removes the vestigial _NN version suffix from entry filenames.
// The suffix is not referenced anywhere in code (auto-imports use a glob).
// Uses fs.renameSync — git detects the rename on the next commit.

const path = require('path');
const fs = require('fs');

const ENTRIES_DIR = path.join(__dirname, '..', 'src', 'data', 'legal', 'entries');
const files = fs.readdirSync(ENTRIES_DIR);

let renamed = 0;
let skipped = 0;

for (const f of files) {
  const m = f.match(/^(.+?)_\d+\.js$/);
  if (!m) { skipped++; continue; }
  const newName = m[1] + '.js';
  const oldPath = path.join(ENTRIES_DIR, f);
  const newPath = path.join(ENTRIES_DIR, newName);
  if (fs.existsSync(newPath)) {
    console.error(`CONFLICT: ${f} would overwrite existing ${newName}`);
    process.exit(1);
  }
  fs.renameSync(oldPath, newPath);
  renamed++;
}

console.log(`renamed: ${renamed}, skipped: ${skipped}`);
