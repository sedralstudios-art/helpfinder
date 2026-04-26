// Glossary term: Plea Bargain
// Descriptive term — not a statutory creation, but structured by CPL § 220.10
// (felony pleas) and § 340.20 (misdemeanor pleas). Over 95% of NY criminal
// cases resolve without trial, most through some form of plea agreement.

export const PLEA_BARGAIN = {
  id: "plea-bargain",
  term: { en: "Plea Bargain" },
  aka: ["Plea Deal", "Plea Agreement"],
  category: "criminal",
  subtags: ["pre-trial", "disposition"],

  context: {
    en: "You hear this when your lawyer and the prosecutor talk about ending the case without a trial. Most criminal cases in New York end this way — usually with you pleading guilty to a smaller charge in exchange for a lighter sentence."
  },

  plainEnglish: {
    en: "A deal between the defendant (through their lawyer) and the prosecutor. The defendant agrees to plead guilty to a charge, and in exchange the prosecutor agrees to something — dropping other charges, reducing the charge to something smaller, or recommending a lighter sentence. The judge has the final say and can reject the deal. Before the defendant accepts, the defense lawyer typically walks through everything that will happen: the final charge, the sentence, the fine, the surcharge, and any effects on the defendant's record, job, license, or immigration status. Once the judge accepts the plea, it is very hard to take back."
  },

  whatToAsk: {
    en: [
      "What exact charge am I pleading to?",
      "What is the exact sentence?",
      "Does this stay on my record? Can it be sealed?",
      "Does this affect my job, housing, license, or immigration status?",
      "What happens if I don't take the deal?"
    ]
  },

  related: ["plea", "acd", "conditional-discharge", "sentence", "public-defender"],
  legalEntryIds: ["rights-when-arrested-ny"],

  citation: "NY CPL § 220.10 (felony); § 340.20 (misdemeanor)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/220.10",
  lastVerified: "2026-04-15",
  status: "active"
};
