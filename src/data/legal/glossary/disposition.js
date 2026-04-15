// Glossary term: Disposition
// No single statutory definition — used throughout the CPL to mean
// "how the case ended." CPL Article 1 (general definitions) is the
// nearest anchor. Listed as a general-court-word because it comes up
// in every case type.

export const DISPOSITION = {
  id: "disposition",
  term: { en: "Disposition" },
  aka: [],
  category: "general",
  subtags: ["case-close", "outcome"],

  context: {
    en: "You hear this when people talk about how a case ended. On a record printout it is usually a one-line column called 'disposition.'"
  },

  plainEnglish: {
    en: "How the case ended. Common dispositions in New York: dismissed, ACD, found not guilty, guilty plea to a smaller charge, found guilty after trial, conditional discharge, probation, jail, prison, or violation. The disposition is what shows up on most background checks. If a case ended in your favor — dismissed, not guilty, or ACD — the record is sealed in most cases."
  },

  whatToAsk: {
    en: [
      "What is the final disposition on my case?",
      "Is this disposition sealed, or will it show on a background check?",
      "Where can I get a copy of my disposition in writing?"
    ]
  },

  related: ["acd", "plea", "sealed-record", "conditional-discharge"],
  legalEntryIds: [],

  citation: "General term used throughout NY Criminal Procedure Law",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/A1",
  lastVerified: "2026-04-15",
  status: "active"
};
