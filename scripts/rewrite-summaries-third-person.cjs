// scripts/rewrite-summaries-third-person.cjs
// One-shot. Rewrites the first sentence of 48 legal-entry summaries from
// second-person (you/your) to third-person, completing the structural voice pass
// started by rewrite-titles-third-person.cjs.
//
// Strategy: replace the exact pre-rewrite first sentence with the new sentence.
// The summary's remaining sentences (if any) are left intact; many still contain
// you/your in deeper text — handled in future passes.
//
// Skips the 7 Germain-reviewed bankruptcy entries.

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

// [filename, oldFirstSentence, newFirstSentence]
const rewrites = [
  ['benefit-overpayment-ny.js',
    'If the Department of Social Services says you received more benefits than you were entitled to, they may try to collect the difference.',
    'If the Department of Social Services says a recipient received more benefits than entitled, the agency may try to collect the difference.'],
  ['benefits-denial-appeal-ny.js',
    'If your benefits were denied, cut, or stopped, you can appeal.',
    'When benefits are denied, cut, or stopped, the affected person can appeal.'],
  ['benefits-verification-letter-ny-program.js',
    'Many programs require proof that you receive SNAP, Medicaid, Temporary Assistance, or Social Security benefits.',
    'Many programs require proof of SNAP, Medicaid, Temporary Assistance, or Social Security benefit receipt.'],
  ['car-accident-no-fault-ny.js',
    'New York is a no-fault insurance state — after a car accident, your own insurance pays for medical bills and lost wages regardless of who caused the crash.',
    "New York is a no-fault insurance state — after a car accident, the driver's own insurance pays for medical bills and lost wages regardless of who caused the crash."],
  ['car-towed-repossessed-ny.js',
    'If your car was towed by the city or a private company, or repossessed by a lender, you have rights.',
    'When a car is towed by the city or a private company, or repossessed by a lender, the owner has rights.'],
  ['child-custody-relocation-ny.js',
    'If you share custody and want to move a significant distance with your child, you may need court permission.',
    'When a parent shares custody and wants to move a significant distance with the child, court permission may be required.'],
  ['child-support-modification-ny.js',
    'If your income, job, or family situation has changed significantly since the last child support order, you can ask the court to modify it.',
    "When a parent's income, job, or family situation has changed significantly since the last child support order, the parent can ask the court to modify it."],
  ['criminal-appeal-ny.js',
    'If you are convicted of a crime, you generally have the right to appeal.',
    'A person convicted of a crime generally has the right to appeal.'],
  ['debt-collection-rights-ny.js',
    'If a debt collector is calling you, there are rules they have to follow.',
    'When a debt collector contacts a consumer, there are rules the collector must follow.'],
  ['default-judgment-ny.js',
    'If a creditor sues you for a debt and you do not respond, the court can enter a default judgment against you — meaning the creditor wins automatically without proving their case.',
    'When a creditor sues for a debt and the defendant does not respond, the court can enter a default judgment — meaning the creditor wins automatically without proving the case.'],
  ['dismissed-case-sealing-ny.js',
    'In New York, if your criminal case was dismissed or ended in your favor, the record is supposed to be sealed automatically.',
    "In New York, when a criminal case is dismissed or ends in the defendant's favor, the record is supposed to be sealed automatically."],
  ['emergency-cash-assistance-ny.js',
    'If you are about to be evicted, lose your heat, or become homeless, you may get a one-time emergency grant.',
    'A person about to be evicted, lose heat, or become homeless may qualify for a one-time emergency grant.'],
  ['emergency-room-billing-ny.js',
    'If you went to the emergency room and received a bill you cannot pay, you have options.',
    'A patient who received an emergency room bill that is unaffordable has options.'],
  ['eviction-process-ny.js',
    'In New York, your landlord cannot just kick you out.',
    'In New York, a landlord cannot simply remove a tenant.'],
  ['fair-hearing-ny.js',
    'A fair hearing is your chance to tell a judge why you think a decision about your benefits was wrong.',
    "A fair hearing is a benefits recipient's chance to tell a judge why a decision about benefits was wrong."],
  ['foreclosure-defense-ny.js',
    'If you fall behind on mortgage payments, the lender may start foreclosure proceedings to take your home.',
    'When a homeowner falls behind on mortgage payments, the lender may start foreclosure proceedings to take the home.'],
  ['good-samaritan-law-ny.js',
    'In New York, if you call 911 because someone is overdosing on drugs or alcohol — or if you are the one overdosing — the law protects you from most drug-possession charges.',
    'In New York, a person who calls 911 because someone is overdosing on drugs or alcohol — or who is the one overdosing — is protected from most drug-possession charges.'],
  ['guardianship-scpa17a-ny.js',
    "If your adult child has an intellectual or developmental disability and cannot manage their own affairs, you may be able to become their legal guardian through Surrogate's Court under SCPA 17-A.",
    "When an adult child has an intellectual or developmental disability and cannot manage their own affairs, a parent may petition Surrogate's Court for legal guardianship under SCPA 17-A."],
  ['health-insurance-denial-ny.js',
    'If your health insurance denies a claim, refuses to cover a treatment, or says a service is not medically necessary, you have the right to appeal.',
    'When a health insurer denies a claim, refuses to cover a treatment, or says a service is not medically necessary, the insured has the right to appeal.'],
  ['identity-theft-ny.js',
    'If someone opens accounts, takes out loans, files taxes, or commits crimes using your personal information, that is identity theft.',
    "When someone opens accounts, takes out loans, files taxes, or commits crimes using another person's personal information, that is identity theft."],
  ['illegal-eviction-ny.js',
    'In New York, it is a crime for a landlord to force you out of your home without a court order.',
    'In New York, it is a crime for a landlord to force a tenant out of a home without a court order.'],
  ['illegal-lockout-ny.js',
    'In New York, a landlord cannot lock you out, change the locks, shut off utilities, remove your belongings, or do anything else to force you out without a court order.',
    'In New York, a landlord cannot lock a tenant out, change the locks, shut off utilities, remove belongings, or take any other action to force the tenant out without a court order.'],
  ['internet-privacy-data-breach-ny.js',
    'When a company that has your personal information — Social Security number, credit card, bank account, login credentials, biometric data — suffers a data breach, New York law requires them to notify you.',
    'When a company holding personal information — Social Security number, credit card, bank account, login credentials, biometric data — suffers a data breach, New York law requires the company to notify the affected individual.'],
  ['jury-duty-rights-ny.js',
    'If you are called for jury duty in New York, your employer must let you go.',
    'When a worker is called for jury duty in New York, the employer must allow the worker to attend.'],
  ['license-suspension-dv-ny.js',
    "In New York, your driver's license can be suspended for reasons that have nothing to do with driving — unpaid child support, failure to answer a traffic ticket, unpaid Driver Responsibility Assessment, or even unpaid taxes.",
    "In New York, a driver's license can be suspended for reasons that have nothing to do with driving — unpaid child support, failure to answer a traffic ticket, unpaid Driver Responsibility Assessment, or unpaid taxes."],
  ['license-suspension-ny.js',
    "New York can suspend or revoke your driver's license for a long list of reasons — unpaid traffic tickets, unpaid child support, DWI, too many points, and more.",
    "New York can suspend or revoke a driver's license for a long list of reasons — unpaid traffic tickets, unpaid child support, DWI, too many points, and more."],
  ['medicaid-spend-down-ny.js',
    'If your income is a little above the Medicaid limit, you can still get Medicaid through a program called spend-down.',
    'When income is slightly above the Medicaid limit, eligibility may still be available through a program called spend-down.'],
  ['medicaid-transportation-ny.js',
    'If you are on Medicaid and need to get to a doctor, hospital, pharmacy, lab, therapy, or any other Medicaid-covered service, Medicaid will pay for your transportation.',
    'A Medicaid recipient who needs to reach a doctor, hospital, pharmacy, lab, therapy, or other Medicaid-covered service has transportation paid by Medicaid.'],
  ['medicare-savings-program-ny.js',
    "If you have Medicare and limited income, New York's Medicare Savings Programs can pay your monthly Medicare premium and your doctor bills.",
    "For Medicare beneficiaries with limited income, New York's Medicare Savings Programs can pay the monthly Medicare premium and doctor bills."],
  ['missed-court-warrant-ny.js',
    'Missing a court date in New York usually results in a bench warrant for your arrest.',
    'Missing a court date in New York usually results in a bench warrant for arrest.'],
  ['mva-no-insurance-ny.js',
    'If you are in a car accident and do not have insurance, you face serious legal and financial consequences in New York.',
    'An uninsured driver involved in a car accident faces serious legal and financial consequences in New York.'],
  ['order-of-protection-ny.js',
    'An order of protection is a court order that requires a person to stay away from you, stop contacting you, or stop hurting you.',
    'An order of protection is a court order that requires the named person to stay away from, stop contacting, or stop harming the protected party.'],
  ['personal-injury-basics-ny.js',
    "If you are injured because of someone else's negligence — a slip on an icy sidewalk, a car accident, a dangerous condition in a store — you may have a personal injury claim.",
    "An injury caused by someone else's negligence — a slip on an icy sidewalk, a car accident, a dangerous condition in a store — may give rise to a personal injury claim."],
  ['pharmacy-errors-ny.js',
    'If a pharmacy gave you the wrong medication, the wrong dosage, or failed to warn you about a dangerous interaction, you may have a legal claim.',
    'When a pharmacy dispenses the wrong medication, the wrong dosage, or fails to warn about a dangerous interaction, the patient may have a legal claim.'],
  ['porch-piracy-package-theft-ny.js',
    'If a package was stolen from your porch or doorstep, it is a crime in New York.',
    'Theft of a package from a porch or doorstep is a crime in New York.'],
  ['property-tax-grievance-ny.js',
    "If you think your home's assessed value is too high, you can file a grievance.",
    "A homeowner who believes the home's assessed value is too high can file a grievance."],
  ['respond-to-lawsuit-ny.js',
    'If you receive a summons and complaint, you have been sued.',
    'Receiving a summons and complaint means a lawsuit has been filed.'],
  ['right-to-a-lawyer-ny.js',
    'If you are charged with a crime and cannot afford a lawyer, the court must provide one for free.',
    'A person charged with a crime who cannot afford a lawyer has the right to a court-provided attorney at no cost.'],
  ['rights-when-arrested-ny.js',
    'If you are arrested in New York, you have rights that the police must respect.',
    'A person arrested in New York has rights that the police must respect.'],
  ['school-iep-disputes-ny.js',
    "If you disagree with your child's Individualized Education Program or the school district refuses to provide services your child needs, you have the right to challenge the decision.",
    "When a parent disagrees with a child's Individualized Education Program or the school district refuses to provide services the child needs, the parent has the right to challenge the decision."],
  ['security-deposit-ny.js',
    "New York law limits security deposits to one month's rent and requires your landlord to return it within 14 days after you move out.",
    "New York law limits security deposits to one month's rent and requires the landlord to return the deposit within 14 days after move-out."],
  ['snap-expedited-ny.js',
    'If you have very little or no income and need food right away, you may qualify for expedited SNAP benefits.',
    'A person with very little or no income who needs food right away may qualify for expedited SNAP benefits.'],
  ['traffic-ticket-options-ny.js',
    "When you receive a traffic ticket in New York outside of NYC, it goes to a local town, village, or city court — not the DMV's Traffic Violations Bureau.",
    "A traffic ticket issued in New York outside of NYC goes to a local town, village, or city court — not the DMV's Traffic Violations Bureau."],
  ['unemployment-appeal-ny.js',
    'If your unemployment insurance claim is denied, you have the right to appeal.',
    'A claimant whose unemployment insurance claim is denied has the right to appeal.'],
  ['unemployment-insurance-ny.js',
    'If you lost your job through no fault of your own, you may qualify for weekly unemployment insurance payments while you look for new work.',
    'A worker who lost a job through no fault of their own may qualify for weekly unemployment insurance payments while seeking new work.'],
  ['wage-garnishment-defense-ny.js',
    'If a creditor has a judgment against you, they can take money directly from your paycheck through an income execution (wage garnishment).',
    "When a creditor has a judgment against a debtor, the creditor can take money directly from the debtor's paycheck through an income execution (wage garnishment)."],
  ['wage-theft-ny.js',
    "Wage theft is when your boss doesn't pay you what you earned.",
    'Wage theft occurs when an employer fails to pay a worker what they earned.'],
  ['workers-compensation-ny.js',
    "If you get hurt on the job in New York, workers' comp pays for your medical care and a portion of your lost pay.",
    "When a worker is hurt on the job in New York, workers' compensation pays for medical care and a portion of lost pay."],
];

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

let applied = 0, missed = 0, skipped = 0;
const misses = [];

for (const [filename, oldSent, newSent] of rewrites) {
  if (skipFiles.has(filename)) { skipped++; continue; }
  const p = path.join(dir, filename);
  if (!fs.existsSync(p)) { misses.push(filename + ' (file missing)'); missed++; continue; }
  const src = fs.readFileSync(p, 'utf8');

  // Match the exact summary.en first sentence — the old sentence appears immediately
  // after `summary: { en: "` (start of summary string).
  const re = new RegExp('(summary:\\s*\\{\\s*en:\\s*")' + escapeRegex(oldSent));
  if (!re.test(src)) {
    misses.push(filename + ' (expected old first sentence not found)');
    missed++;
    continue;
  }
  const updated = src.replace(re, '$1' + newSent);
  fs.writeFileSync(p, updated);
  applied++;
}

console.log('applied=' + applied + ' skipped-bankruptcy=' + skipped + ' missed=' + missed);
if (misses.length) {
  console.log('MISSES:');
  for (const m of misses) console.log('  ' + m);
}
