// Glossary term: Violation of Probation (VOP)
// Citation verified: NY CPL § 410.70 (hearing on violation). Summary hearing
// without a jury. Preponderance of evidence standard. Right to counsel.
// Court may revoke, continue, or modify the probation/CD sentence.

export const VIOLATION_OF_PROBATION = {
  id: "violation-of-probation",
  term: { en: "Violation of Probation" },
  aka: ["VOP", "Probation Violation"],
  category: "criminal",
  subtags: ["post-plea", "supervision", "hearing"],

  context: {
    en: "You hear this when a probation officer files papers saying you broke a rule, got a new arrest, or missed something required. It is a separate court proceeding on top of your original case. You are entitled to a free lawyer."
  },

  plainEnglish: {
    en: "A claim that you broke a rule of your probation. Common reasons: missed a check-in, failed a drug test, new arrest, did not pay what you owed, or did not finish a required class. The court gives you a hearing. You can have a lawyer, see the evidence, question witnesses, and tell your side. The judge does not need proof 'beyond a reasonable doubt' — only 'more likely than not' that you broke the rule. If the judge finds a violation, three things can happen: probation keeps going, it changes (stricter rules), or it ends and you get the original jail sentence."
  },

  whatToAsk: {
    en: [
      "What exactly am I accused of doing or not doing?",
      "When is my hearing? Can I get a lawyer first?",
      "What is the worst case — how much jail time?",
      "If I admit the violation, what deal can I get?",
      "Do I have to stay in jail until the hearing?"
    ]
  },

  related: ["probation", "conditional-discharge", "public-defender", "plea"],
  legalEntryIds: ["clean-slate-ny"],

  citation: "NY CPL § 410.70",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/410.70",
  lastVerified: "2026-04-15",
  status: "active"
};
