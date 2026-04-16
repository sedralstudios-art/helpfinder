#!/usr/bin/env node
/**
 * migrate-glossary-crosslinks-61.cjs
 * ===================================
 * Connects orphaned glossary terms to legal library entries via legalEntryIds.
 * After the 7 new legal entries (migration 60/legal batch) and existing entries,
 * 25 glossary terms can now point to at least one legal entry.
 */

const fs = require('fs');
const path = require('path');

const G = path.join(__dirname, '..', 'src', 'data', 'legal', 'glossary');
let successes = 0;
let failures = 0;

function link(file, oldIds, newIds, label) {
  const fp = path.join(G, file);
  let content = fs.readFileSync(fp, 'utf8');
  const oldStr = 'legalEntryIds: ' + JSON.stringify(oldIds);
  const newStr = 'legalEntryIds: ' + JSON.stringify(newIds);
  if (!content.includes(oldStr)) {
    console.error('SKIP ' + file + ': expected ' + oldStr);
    failures++;
    return;
  }
  content = content.replace(oldStr, newStr);
  fs.writeFileSync(fp, content, 'utf8');
  console.log('OK ' + file + ': ' + label);
  successes++;
}

// ─── Criminal terms → rights-when-arrested-ny, clean-slate-ny, etc. ───
link('acd.js', [], ['dismissed-case-sealing-ny', 'marijuana-sealing-ny', 'clean-slate-ny'], 'ACD → sealing entries');
link('arraignment.js', [], ['rights-when-arrested-ny'], 'arraignment → rights when arrested');
link('arrest.js', [], ['rights-when-arrested-ny'], 'arrest → rights when arrested');
link('arrest-warrant.js', [], ['rights-when-arrested-ny'], 'arrest-warrant → rights when arrested');
link('bail.js', [], ['rights-when-arrested-ny'], 'bail → rights when arrested');
link('ror.js', [], ['rights-when-arrested-ny'], 'ROR → rights when arrested');
link('bench-warrant.js', [], ['rights-when-arrested-ny'], 'bench-warrant → rights when arrested');
link('desk-appearance-ticket.js', [], ['rights-when-arrested-ny'], 'DAT → rights when arrested');
link('certificate-of-relief.js', [], ['clean-slate-ny'], 'cert of relief → clean slate');
link('conditional-discharge.js', [], ['clean-slate-ny', 'dismissed-case-sealing-ny'], 'CD → sealing entries');
link('order-of-protection.js', [], ['order-of-protection-ny'], 'OP → OP entry');
link('felony.js', [], ['rights-when-arrested-ny'], 'felony → rights when arrested');
link('misdemeanor.js', [], ['rights-when-arrested-ny'], 'misdemeanor → rights when arrested');
link('violation.js', [], ['dismissed-case-sealing-ny'], 'violation → sealing');
link('plea.js', [], ['rights-when-arrested-ny'], 'plea → rights when arrested');
link('plea-bargain.js', [], ['rights-when-arrested-ny'], 'plea-bargain → rights when arrested');
link('sentence.js', [], ['clean-slate-ny'], 'sentence → clean slate');
link('probation.js', [], ['clean-slate-ny'], 'probation → clean slate');
link('violation-of-probation.js', [], ['clean-slate-ny'], 'VOP → clean slate');
link('discovery.js', [], ['rights-when-arrested-ny'], 'discovery → rights when arrested');
link('speedy-trial.js', [], ['rights-when-arrested-ny'], 'speedy-trial → rights when arrested');

// ─── Employment ───
link('final-wages.js', [], ['wage-theft-ny'], 'final-wages → wage theft');
link('human-rights-law.js', [], ['wrongful-termination-ny'], 'HRL → wrongful termination');
link('retaliation-employment.js', [], ['wage-theft-ny', 'wrongful-termination-ny'], 'retaliation → wage theft + wrongful term');
link('unemployment-insurance.js', [], ['unemployment-appeal-ny'], 'UI → UI appeal');

// ─── Consumer ───
link('judgment.js', [], ['debt-collection-rights-ny'], 'judgment → debt collection');
link('small-claims.js', [], ['small-claims-procedure-ny'], 'small-claims → procedure entry');

// ─── Housing ───
link('landlord-retaliation.js', [], ['tenant-rights-repairs-ny', 'eviction-process-ny'], 'retaliation → tenant rights + eviction');

// ─── Vehicle ───
link('driver-responsibility-assessment.js', [], ['dwi-first-offense-ny'], 'DRA → DWI entry');
link('tvb-traffic-court.js', [], ['speeding-ticket-ny'], 'TVB → speeding ticket');

console.log('\n' + successes + ' linked, ' + failures + ' skipped.');
if (failures > 0) {
  console.error('Some files skipped — check manually.');
}
