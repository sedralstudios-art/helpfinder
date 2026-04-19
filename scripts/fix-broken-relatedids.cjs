// scripts/fix-broken-relatedids.cjs
// One-shot. Fixes broken relatedIds references surfaced during 2026-04-18 drift audit.
// Maps each broken ID to an existing entry ID; removes unmappable references.
//
// Skips the 7 Germain-reviewed bankruptcy entries. Any broken ref in those files
// must be resolved manually with attorney approval.

const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'data', 'legal', 'entries');

const skipFiles = new Set([
  'bankruptcy-automatic-stay-ny.js',
  'bankruptcy-chapter13-ny.js',
  'bankruptcy-chapter7-ny.js',
  'bankruptcy-discharge-ny.js',
  'bankruptcy-exemptions-ny.js',
  'bankruptcy-means-test-ny.js',
  'bankruptcy-reaffirmation-ny.js',
]);

const fixes = {
  'credit-card-chargeback-dispute-ny': 'internet-purchase-chargebacks-ny',
  'debt-collectors-ny': 'debt-collection-rights-ny',
  'paternity-rights-ny': 'paternity-ny',
  'cyberstalking-harassment-ny': 'harassment-cyberstalking-ny',
  'consumer-fraud-ny': 'deceptive-business-practices-ny',
  'license-suspension-unpaid-ny': 'license-suspension-dv-ny',
  'criminal-record-sealing-ny': 'seal-your-record-ny',
  'dasa-bullying-reporting-ny': 'bullying-harassment-school-ny',
  'statute-of-limitations-debt': 'debt-statute-of-limitations-ny',
  'independent-contractor-misclassification-ny': 'independent-contractor-misclass-ny',
  'traffic-court-what-to-expect-ny': 'traffic-court-what-to-expect-ny-program',
  'mental-hygiene-commitment-ny': 'involuntary-commitment-ny',
  'medical-billing-disputes-ny': 'medical-bill-negotiation-ny',
  'living-will-molst-ny': 'living-will-advance-directive-ny',
  'medicare-late-enrollment-ny': 'medicare-late-enrollment-penalty-ny',
  'adult-protective-services-ny-program': 'adult-protective-services-ny',
  'u-visa-crime-victims-ny': 'u-visa-crime-victim-immigration-ny',
  'distracted-driving-cell-phone-ny': 'texting-while-driving-ny',
  'landlord-retaliation': 'landlord-retaliation-ny',
  'public-defender-rights-ny': 'right-to-a-lawyer-ny',
  'ny-paid-family-leave-ny': 'ny-paid-family-leave',
  'power-of-attorney-ny': 'power-of-attorney-basics-ny',
  'school-bullying-cyberbullying-ny': 'bullying-harassment-school-ny',
  'section-8-basics-ny': 'section-8-housing-voucher-ny',
  'contractor-lien-mechanic-lien-ny': 'mechanic-lien-ny',
  'fmla-rights-ny': 'family-medical-leave-ny',
  'disability-work-accommodation-ny': 'ada-workplace-accommodation-ny',
};

const removeRefs = new Set([
  'roc-garbage-plate-food-permit-ny',
  'defensive-driving-course-pirp-ny',
]);

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

let filesTouched = 0, replaced = 0, removedLines = 0;

for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.js')) continue;
  if (skipFiles.has(f)) continue;
  const p = path.join(dir, f);
  let src = fs.readFileSync(p, 'utf8');
  const orig = src;

  for (const [bad, good] of Object.entries(fixes)) {
    const re = new RegExp('"' + escapeRegex(bad) + '"', 'g');
    const matches = (src.match(re) || []).length;
    if (matches > 0) {
      src = src.replace(re, '"' + good + '"');
      replaced += matches;
    }
  }

  for (const bad of removeRefs) {
    // Remove a line matching:    "bad-id",\n  or    "bad-id"\n
    const re = new RegExp('\\s*"' + escapeRegex(bad) + '",?\\n', 'g');
    const matches = (src.match(re) || []).length;
    if (matches > 0) {
      src = src.replace(re, '\n');
      removedLines += matches;
    }
  }

  if (src !== orig) {
    fs.writeFileSync(p, src);
    filesTouched++;
  }
}

console.log('touched=' + filesTouched + ' replaced=' + replaced + ' removed=' + removedLines);
