// Glossary term: Probation
// Citation verified: NY Penal Law § 65.00 (sentence of probation).
// Felony: 3-5 years standard (10 for sex felony, life for A-II drug).
// Class A misdemeanor: 2-3 years. Class B misdemeanor: 1 year.
// Conditions: Penal Law § 65.10.

export const PROBATION = {
  id: "probation",
  term: { en: "Probation" },
  aka: [],
  category: "criminal",
  subtags: ["disposition", "post-plea", "sentence", "supervision"],

  context: {
    en: "You hear this at sentencing. Probation is a way to avoid jail or prison, but you have to check in with a probation officer and follow a lot of rules. It is a real sentence — if you break the rules, you can be sent to jail."
  },

  plainEnglish: {
    en: "A sentence where you stay out of jail but have to check in with a probation officer and follow rules the court sets. Common rules: meet with your officer on time, no new arrests, drug tests, keep a job or go to school, pay what you owe, stay in the area, let your officer search your home. Probation is longer and stricter than a conditional discharge. In New York, a felony probation is usually 3 to 5 years. A Class A misdemeanor is 2 or 3 years. A Class B misdemeanor is 1 year. If you break the rules, the court can put you in jail for the rest of your sentence."
  },

  whatToAsk: {
    en: [
      "How long is my probation?",
      "What are my exact rules? Get a written copy and keep it.",
      "Who is my probation officer and how do I reach them?",
      "What happens if I miss a check-in for a real reason?",
      "If I finish clean, will my record be sealed?"
    ]
  },

  related: ["conditional-discharge", "acd", "plea", "sealed-record", "felony", "misdemeanor"],
  legalEntryIds: [],

  citation: "NY Penal Law § 65.00 (conditions: § 65.10)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/PEN/65.00",
  lastVerified: "2026-04-15",
  status: "active"
};
