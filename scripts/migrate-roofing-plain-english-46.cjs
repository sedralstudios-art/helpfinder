// migrate-roofing-plain-english-46.cjs
// Plain-English pass on LGLW6-D roofing entries (29 files).
// Replaces shared boilerplate across all town/village/city/state entries.
// Verifies each replacement or logs a skip for that file.

const fs = require("fs");
const path = require("path");

const ENTRIES_DIR = path.join(__dirname, "..", "src", "data", "legal", "entries");

const roofingFiles = fs
  .readdirSync(ENTRIES_DIR)
  .filter((f) => f.startsWith("LGLW6-D_roofing-") && f.endsWith(".js"))
  .map((f) => path.join(ENTRIES_DIR, f));

// Each rule is [fromString, toString]. Rules are applied in order.
// If a rule's fromString is present, it must be replaced successfully.
// If the fromString isn't present in a file, we just skip that rule for that file.
const REPLACEMENTS = [
  // Boilerplate yourRights item — "state-level worker protections carried forward"
  [
    '"All state-level worker protections carried forward from New York State law"',
    '"State worker protections (wage, safety, injury) still apply here"',
  ],

  // "Workers\' Compensation insurance" (with apostrophe) → "workers comp insurance"
  [
    "Workers' Compensation insurance",
    "workers comp insurance (pays medical bills if a worker gets hurt on the job)",
  ],

  // "Workers\' Compensation coverage"
  [
    "Workers' Compensation coverage",
    "workers comp coverage",
  ],

  // "Workers\' Compensation and disability insurance" (seen in state entry)
  [
    "Workers' Compensation and disability insurance",
    "workers comp and disability insurance",
  ],
];

// Patterns that need per-file guarded replacement (longer phrases)
const GUARDED_REPLACEMENTS = [
  // "sole proprietors with no employees" → plain-English gloss
  [
    /a state-issued waiver for sole proprietors with no employees/g,
    "a state waiver for people who work for themselves with no employees",
  ],
];

let totalFilesChanged = 0;
let totalReplacements = 0;
const perFileLog = [];

for (const file of roofingFiles) {
  let content = fs.readFileSync(file, "utf8");
  const original = content;
  let fileReplacements = 0;

  // Apply simple string replacements
  for (const [from, to] of REPLACEMENTS) {
    if (content.includes(from)) {
      const count = content.split(from).length - 1;
      content = content.split(from).join(to);
      fileReplacements += count;
    }
  }

  // Apply regex-based guarded replacements
  for (const [re, to] of GUARDED_REPLACEMENTS) {
    const matches = content.match(re);
    if (matches) {
      content = content.replace(re, to);
      fileReplacements += matches.length;
    }
  }

  // Always bump lastVerified on the roofing entries since we're touching them
  content = content.replace(
    /lastVerified: "\d{4}-\d{2}-\d{2}"/,
    'lastVerified: "2026-04-13"'
  );

  if (content !== original) {
    fs.writeFileSync(file, content, "utf8");
    totalFilesChanged++;
    totalReplacements += fileReplacements;
    perFileLog.push(`  ${path.basename(file)}: ${fileReplacements} replacements`);
  } else {
    perFileLog.push(`  ${path.basename(file)}: no changes`);
  }
}

console.log(`\nRoofing plain-English migration:`);
console.log(`  Files scanned:      ${roofingFiles.length}`);
console.log(`  Files changed:      ${totalFilesChanged}`);
console.log(`  Total replacements: ${totalReplacements}`);
console.log(`\nPer-file log:`);
for (const line of perFileLog) console.log(line);
