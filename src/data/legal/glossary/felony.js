// Glossary term: Felony
// Citation verified: NY Penal Law § 55.10 (designation of offenses).

export const FELONY = {
  id: "felony",
  term: { en: "Felony" },
  aka: [],
  category: "criminal",
  subtags: ["offense-class"],

  context: {
    en: "You hear this when someone describes what kind of case it is. A felony is the most serious kind of criminal charge. It is handled in superior court (county court), not the smaller local criminal court."
  },

  plainEnglish: {
    en: "A crime that can send you to prison for more than one year. In New York, felonies are grouped into classes — Class A is the most serious (like murder), down to Class E (the lowest). A felony case usually goes through a grand jury first. A felony stays on your record for a long time and affects jobs, housing, voting, and more, unless it is sealed or expunged later."
  },

  whatToAsk: {
    en: [
      "What class of felony is this? (A, B, C, D, or E — A is worst.)",
      "Is it a violent felony? Those have stricter rules.",
      "What is the longest sentence possible?",
      "Does my case have to go to a grand jury? When?",
      "Can this be reduced to a misdemeanor?"
    ]
  },

  related: ["misdemeanor", "violation", "arraignment", "plea", "sealed-record", "conditional-discharge"],
  legalEntryIds: [],

  citation: "NY Penal Law § 55.10",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/PEN/55.10",
  lastVerified: "2026-04-15",
  status: "active"
};
