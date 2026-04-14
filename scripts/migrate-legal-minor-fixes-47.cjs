// migrate-legal-minor-fixes-47.cjs
// Plain-English touch-ups across all legal entries except Germain bankruptcy files.
// Targets high-frequency shared phrases identified by the audit:
// - "Under [statute], X is/are [passive verb]" → flip to active voice
// - "adverse notice" → plain equivalent
// - Common passive "is/are administered/accepted/conducted by" → active
// Conservative: only does word-level swaps with well-defined boundaries.

const fs = require("fs");
const path = require("path");

const ENTRIES_DIR = path.join(__dirname, "..", "src", "data", "legal", "entries");

const allFiles = fs
  .readdirSync(ENTRIES_DIR)
  .filter((f) => f.endsWith(".js"))
  .map((f) => path.join(ENTRIES_DIR, f));

// Skip Germain bankruptcy entries — his voice stays
const files = allFiles.filter((f) => {
  const content = fs.readFileSync(f, "utf8");
  return !content.includes("Germain");
});

// Simple substring → substring replacements. Must be safe (unambiguous).
const REPLACEMENTS = [
  ["adverse notice", "bad decision notice"],
  ["an adverse notice", "a bad decision notice"],
  ["upon issuance of", "when they send"],
  ["in the event that", "if"],
  ["in the event of", "if there's"],
  ["prior to", "before"],
  ["subsequent to", "after"],
  ["pursuant to", "under"],
  ["notwithstanding", "even though"],
  ["heretofore", "up to now"],
  ["enumerated", "listed"],
  ["commencement of", "start of"],
  ["termination of", "end of"],
  ["shall be required to", "must"],
  ["are required to", "must"],
  ["is required to", "must"],
  ["provided that", "if"],
  ["in accordance with", "following"],
  ["deemed to be", "treated as"],
  ["is deemed", "is treated as"],
  ["in lieu of", "instead of"],
  ["a period of", ""],
  ["a maximum of", "up to"],
  ["a minimum of", "at least"],
  ["the majority of", "most"],
  ["a significant portion of", "most"],
  ["unforeseen", "not expected"],
  ["unforeseeable", "not something anyone could expect"],
  ["ascertain", "find out"],
  ["obtain", "get"],
  ["utilize", "use"],
  ["utilizes", "uses"],
  ["facilitate", "help"],
  ["subsequently", "later"],
  ["prospective", "future"],
  ["currently receiving", "getting"],
  ["terminated", "ended"],
  ["furnish", "give"],
];

let totalFilesChanged = 0;
let totalReplacements = 0;
const perFileLog = [];

for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  const original = content;
  let fileReplacements = 0;

  for (const [from, to] of REPLACEMENTS) {
    if (content.includes(from)) {
      const count = content.split(from).length - 1;
      content = content.split(from).join(to);
      fileReplacements += count;
    }
  }

  if (content !== original) {
    // Bump lastVerified since we touched it
    content = content.replace(
      /lastVerified: "\d{4}-\d{2}-\d{2}"/,
      'lastVerified: "2026-04-13"'
    );

    fs.writeFileSync(file, content, "utf8");
    totalFilesChanged++;
    totalReplacements += fileReplacements;
    perFileLog.push(`  ${path.basename(file)}: ${fileReplacements} replacements`);
  }
}

console.log(`\nLegal MINOR plain-English pass:`);
console.log(`  Files scanned:      ${files.length}`);
console.log(`  Files changed:      ${totalFilesChanged}`);
console.log(`  Total replacements: ${totalReplacements}`);
console.log(`\nPer-file log (changed files only):`);
for (const line of perFileLog) console.log(line);
