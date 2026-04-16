// Glossary term: Arraignment
// Citation verified: NY CPL § 170.10 (misdemeanor) and § 180.10 (felony).
// Content at ~6th grade reading level per project rule.

export const ARRAIGNMENT = {
  id: "arraignment",
  term: { en: "Arraignment" },
  aka: [],
  category: "criminal",
  subtags: ["arraignment-stage", "first-appearance"],

  context: {
    en: "This is your first time in front of a judge after an arrest. It usually happens within a day or two. You hear your charges read out loud and find out if you go home or stay in jail while the case goes on."
  },

  plainEnglish: {
    en: "The judge tells you what you are being charged with and gives you a copy of the paper. The judge also tells you your rights, including your right to a lawyer and your right to stay quiet. If you cannot afford a lawyer, the judge will assign one for free. Then the judge decides if you go home on your own, if you have to post bail, or if you stay in jail while the case moves forward."
  },

  whatToAsk: {
    en: [
      "What exactly am I charged with? Is it a misdemeanor or a felony?",
      "Can I get a free lawyer?",
      "Will I be released today? On what conditions?",
      "When is my next court date?"
    ]
  },

  related: ["acd", "bail", "ror", "bench-warrant", "misdemeanor", "felony", "sealed-record"],
  legalEntryIds: ["rights-when-arrested-ny"],

  citation: "NY CPL § 170.10 (misdemeanor); NY CPL § 180.10 (felony)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/170.10",
  lastVerified: "2026-04-15",
  status: "active"
};
