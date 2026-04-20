// scripts/preflight-batch.cjs
//
// Prints the calibration rules that MUST be followed before writing any new
// batch of legal entries. Required to be run at the start of every batch
// per CLAUDE.md hard rule "Run npm run preflight before starting any batch".
//
// The build-gated FAIL patterns in scripts/verify-entry-uniqueness.cjs catch
// the worst UPL drift automatically, but the broader voice and discipline
// rules (third-person body fields, non-directive language, ~6th-grade reading
// level, topic selection) cannot all be detected by a regex. This file is the
// forced re-read.

const fs = require('fs');
const path = require('path');

const ENTRIES_DIR = path.join(__dirname, '..', 'src', 'data', 'legal', 'entries');

function corpusSnapshot() {
  const files = fs.readdirSync(ENTRIES_DIR).filter(f => f.endsWith('.js'));
  return { total: files.length };
}

function bar(c) { return c.repeat(72); }

console.log('');
console.log(bar('='));
console.log('  HELPFINDER BATCH PREFLIGHT — calibration rules');
console.log(bar('='));
console.log('');
console.log('Corpus state: ' + corpusSnapshot().total + ' entries on disk.');
console.log('');
console.log('Run this BEFORE writing any batch of new entries. Re-read every');
console.log('rule below before drafting the first entry. The build-gated FAILs');
console.log('in scripts/verify-entry-uniqueness.cjs catch the worst UPL drift,');
console.log('but the rules below are not all auto-detectable.');
console.log('');
console.log(bar('-'));
console.log('  1. UPL — UNAUTHORIZED PRACTICE OF LAW (build-gated FAILs)');
console.log(bar('-'));
console.log('');
console.log('  HelpFinder is run by a non-attorney. Entries that read like');
console.log('  attorney advice expose the operator to UPL liability.');
console.log('');
console.log('  ZERO of these in whatItMeans or summary:');
console.log('    - "Strategic considerations"  (any context)');
console.log('    - "Bottom line:"              (often introduces advice)');
console.log('    - "Engage [type] counsel"     (e.g., Engage commercial');
console.log('                                   litigation counsel)');
console.log('');
console.log(bar('-'));
console.log('  2. LENGTH CAP (build-gated FAIL)');
console.log(bar('-'));
console.log('');
console.log('  whatItMeans MAX 1800 words. Most entries should target');
console.log('  600-1000 words. Tight beats comprehensive. The 5000-7000 word');
console.log('  treatise drift that caused batches 46-57 deletion is now blocked.');
console.log('');
console.log(bar('-'));
console.log('  3. VOICE (contributor discipline — re-read every batch)');
console.log(bar('-'));
console.log('');
console.log('  THIRD-PERSON throughout, including body fields:');
console.log('    Subject is "a tenant", "a homeowner", "the harmed party",');
console.log('    "a NY driver" — never "you" or "your".');
console.log('');
console.log('  NON-DIRECTIVE — no imperatives directed at the reader:');
console.log('    BAD:  "Save the contract."  "Get a lawyer."  "Move fast."');
console.log('          "Take photos."  "Document the conversation."');
console.log('          "Always..."  "Never..."  "Make sure to..."');
console.log('    GOOD: "A copy of the contract supports the case."');
console.log('          "Free legal help is available through Legal Aid Society');
console.log('           of Rochester for those who qualify by income."');
console.log('          "Photos help document the case."');
console.log('');
console.log('  NO advisory section headers in whatItMeans:');
console.log('    No "Strategic considerations for plaintiffs/defendants"');
console.log('    No "Best practice"');
console.log('    No "Bottom line:"');
console.log('');
console.log(bar('-'));
console.log('  4. READING LEVEL (contributor discipline)');
console.log(bar('-'));
console.log('');
console.log('  Target ~6th-grade reading level:');
console.log('    Short sentences. Common words.');
console.log('    Define every legal term inline.');
console.log('    "a constructive trust — when a court treats property as');
console.log('     held for the benefit of another"');
console.log('    Latin phrases and case names usually drop or get translated.');
console.log('');
console.log(bar('-'));
console.log('  5. TOPIC SELECTION (contributor discipline)');
console.log(bar('-'));
console.log('');
console.log('  Pick topics ordinary Monroe County residents would search for.');
console.log('');
console.log('  AVOID civil-procedure deep cuts:');
console.log('    motion to dismiss, summary judgment, civil discovery,');
console.log('    long-arm jurisdiction, attorney-client privilege,');
console.log('    declaratory judgment, recording act, jury trial right,');
console.log('    common-law tort treatises (negligence elements, conversion,');
console.log('    fraud elements, civil trespass, malicious prosecution,');
console.log('    fiduciary duty, veil piercing, quantum meruit).');
console.log('');
console.log('  These topics are for lawyers; HelpFinder is for residents.');
console.log('  62 such entries were deleted on 2026-04-19 (commit 099b87b).');
console.log('');
console.log(bar('-'));
console.log('  6. PROCESS (contributor discipline)');
console.log(bar('-'));
console.log('');
console.log('  Run "npm run verify" AFTER EVERY ENTRY (not after the batch).');
console.log('  Catching a FAIL after writing 5 entries wastes the work.');
console.log('');
console.log('  Pre-write check for every topic: would a typical Monroe County');
console.log('  resident actually search for this and read it?');
console.log('');
console.log(bar('='));
console.log('  References:');
console.log('    CLAUDE.md "Plain-English explainer voice — UPL guardrails"');
console.log('    feedback_lawyer_voice_upl_risk.md (Claude memory folder)');
console.log(bar('='));
console.log('');
