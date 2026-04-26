// Glossary term: Violation (offense class, not traffic infraction)
// Citation verified: NY Penal Law § 55.10.

export const VIOLATION = {
  id: "violation",
  term: { en: "Violation" },
  aka: [],
  category: "criminal",
  subtags: ["offense-class"],

  context: {
    en: "You hear this when someone says the charge is a violation, not a crime. A violation is lower than a misdemeanor. Examples: disorderly conduct, harassment in the second degree, trespass (smallest kind)."
  },

  plainEnglish: {
    en: "A violation is not a crime in New York. It is still an offense the defendant can be charged with, but the most jail time possible is 15 days. A violation does not produce a criminal record the way a misdemeanor or felony does. Many defendants take a violation as a deal to end a case that started as a misdemeanor."
  },

  whatToAsk: {
    en: [
      "Is this a violation or a crime?",
      "Will this show up on background checks?",
      "What is the most jail time possible — if any?",
      "Will the record be sealed?"
    ]
  },

  related: ["misdemeanor", "felony", "sealed-record", "plea"],
  legalEntryIds: ["dismissed-case-sealing-ny"],

  citation: "NY Penal Law § 55.10",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/PEN/55.10",
  lastVerified: "2026-04-15",
  status: "active"
};
