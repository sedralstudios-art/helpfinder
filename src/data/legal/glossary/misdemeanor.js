// Glossary term: Misdemeanor
// Citation verified: NY Penal Law § 55.10 (designation of offenses).

export const MISDEMEANOR = {
  id: "misdemeanor",
  term: { en: "Misdemeanor" },
  aka: [],
  category: "criminal",
  subtags: ["offense-class"],

  context: {
    en: "You hear this when someone describes what kind of case it is. Most cases in local criminal court are misdemeanors, not felonies."
  },

  plainEnglish: {
    en: "A crime that can send you to jail for up to one year, but no longer. In New York, there are Class A misdemeanors (more serious — up to 1 year) and Class B misdemeanors (up to 3 months). Examples include petit larceny and trespass. A misdemeanor is still a crime, so it leaves a criminal record — unless the case is sealed or dismissed later."
  },

  whatToAsk: {
    en: [
      "Is this a misdemeanor or a felony?",
      "Class A or Class B?",
      "What is the longest time I could go to jail for this?",
      "Will this stay on my record? Can it be sealed later?"
    ]
  },

  related: ["felony", "violation", "acd", "sealed-record", "arraignment"],
  legalEntryIds: ["rights-when-arrested-ny"],

  citation: "NY Penal Law § 55.10",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/PEN/55.10",
  lastVerified: "2026-04-15",
  status: "active"
};
