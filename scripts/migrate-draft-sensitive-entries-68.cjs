#!/usr/bin/env node
/*
 * scripts/migrate-draft-sensitive-entries-68.cjs
 * ----------------------------------------------
 * Adds `draft: true` to high-harm legal entries so they are held offline
 * until attorney verification. Idempotent: skips files already drafted.
 *
 * Scope: categories where incorrect guidance could directly harm someone —
 * immigration, DV, protective orders, sexual violence, child safety, elder
 * abuse, mental health coercion, police encounter, victim compensation.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const ENTRIES_DIR = path.join(ROOT, 'src', 'data', 'legal', 'entries');

const TARGETS = [
  // Immigration
  'immigration-basics-ny',
  'immigration-work-permit-ead-ny',
  'naturalization-citizenship-eligibility-ny',
  'u-visa-crime-victim-immigration-ny',
  'undocumented-rights-ny',
  // DV / protective orders
  'domestic-violence-legal-options-ny',
  'domestic-violence-pet-protection-ny',
  'license-suspension-dv-ny',
  'order-of-protection-ny',
  'firearm-surrender-order-protection-ny',
  // Sexual violence / stalking
  'sexual-assault-survivors-rights-ny',
  'sexual-harassment-reporting-ny',
  'campus-sexual-violence-enough-is-enough-ny',
  'harassment-cyberstalking-ny',
  'neighbor-harassment-restraining-order-ny',
  'revenge-porn-online-harassment-ny',
  // Child safety
  'reporting-child-abuse-ny',
  'mandated-reporter-child-abuse-ny',
  'cps-investigation-process-ny',
  'false-cps-report-ny',
  'child-protective-services-process-ny',
  'child-victims-act-statute-of-limitations-ny',
  // Elder / incapacity
  'elder-abuse-ny',
  'adult-protective-services-ny',
  'power-of-attorney-abuse-ny',
  // Mental health coercion
  'kendras-law-assisted-outpatient-treatment-ny',
  'psychiatric-advance-directive-ny',
  // Police encounter
  'police-complaint-ny',
  'rights-during-police-encounter-ny',
  'recording-police-ny',
  'refuse-to-show-id-police-ny',
  'citizens-arrest-ny',
  // Victim compensation
  'crime-victim-compensation-ny',
];

const STATUS_LINE = '  status: "active",\n';
const INSERT_AFTER_STATUS = '  status: "active",\n  draft: true,\n';
const DRAFT_MARKER = '  draft: true,';

let drafted = 0;
let skipped = 0;
let missing = 0;
let mismatched = 0;

for (const id of TARGETS) {
  const p = path.join(ENTRIES_DIR, id + '.js');
  if (!fs.existsSync(p)) {
    console.error('MISSING: ' + id);
    missing++;
    continue;
  }
  const src = fs.readFileSync(p, 'utf8');
  if (src.includes(DRAFT_MARKER)) {
    console.log('skip (already draft): ' + id);
    skipped++;
    continue;
  }
  const statusCount = (src.match(/  status: "active",/g) || []).length;
  if (statusCount !== 1) {
    console.error('MISMATCH (status count ' + statusCount + '): ' + id);
    mismatched++;
    continue;
  }
  const out = src.replace(STATUS_LINE, INSERT_AFTER_STATUS);
  if (out === src || !out.includes(DRAFT_MARKER)) {
    console.error('REPLACEMENT FAILED: ' + id);
    mismatched++;
    continue;
  }
  fs.writeFileSync(p, out, 'utf8');
  console.log('drafted: ' + id);
  drafted++;
}

console.log('---');
console.log('drafted: ' + drafted);
console.log('already-draft skipped: ' + skipped);
console.log('missing: ' + missing);
console.log('mismatched: ' + mismatched);
console.log('target count: ' + TARGETS.length);

if (missing || mismatched) {
  process.exit(1);
}
