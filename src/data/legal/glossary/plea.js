// Glossary term: Plea
// Citation verified: NY CPL § 220.10 (felony); NY CPL § 340.20 (misdemeanor —
// applies rules from 220.10 to local criminal court). Plea must be entered
// orally by defendant in person (unless counsel has written waiver).

export const PLEA = {
  id: "plea",
  term: { en: "Plea" },
  aka: ["Guilty Plea", "Not Guilty Plea"],
  category: "criminal",
  subtags: ["arraignment-stage", "pre-trial", "disposition"],

  context: {
    en: "You hear this at arraignment and again if your case moves toward an agreement. The judge asks how you want to plead. You can say guilty or not guilty. You can also say not guilty and change it later."
  },

  plainEnglish: {
    en: "Your answer to the charges. 'Not guilty' means you are fighting the case. 'Guilty' means you accept that you did what they say, and the case ends with a sentence. Most cases end with a guilty plea to something — often a smaller charge the prosecutor agrees to — instead of a trial. You can plead guilty only if the judge is sure you understand what you are giving up (like your right to a trial). Once you plead guilty, you usually cannot take it back."
  },

  whatToAsk: {
    en: [
      "What exactly am I pleading to? Get the final charge in writing.",
      "What is the full sentence — jail, fine, probation, conditions?",
      "Will this stay on my record? Can it be sealed later?",
      "Does this affect my job, license, housing, or immigration status?",
      "If I plead not guilty today, what happens next?"
    ]
  },

  related: ["arraignment", "acd", "conditional-discharge", "motion-to-dismiss", "public-defender", "sealed-record"],
  legalEntryIds: [],

  citation: "NY CPL § 220.10 (felony); NY CPL § 340.20 (misdemeanor)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/220.10",
  lastVerified: "2026-04-15",
  status: "active"
};
