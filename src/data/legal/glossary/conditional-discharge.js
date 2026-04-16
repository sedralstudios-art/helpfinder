// Glossary term: Conditional Discharge
// Citation verified: NY Penal Law § 65.05 (sentence of conditional discharge).
// Period: 3 years felony, 1 year misdemeanor/violation. Breakable; judge can
// revoke and re-sentence if conditions violated or new offense committed.

export const CONDITIONAL_DISCHARGE = {
  id: "conditional-discharge",
  term: { en: "Conditional Discharge" },
  aka: ["CD"],
  category: "criminal",
  subtags: ["disposition", "post-plea", "sentence"],

  context: {
    en: "You hear this at sentencing after a guilty plea or verdict. It is a kind of sentence where you do not go to jail or prison, and you are not on probation, but you still have to follow rules the judge sets."
  },

  plainEnglish: {
    en: "You are released without jail and without probation. But the judge sets rules you must follow for a set time — 1 year for a misdemeanor or violation, 3 years for a felony. Common rules include no new arrests, paying fines, doing community service, or finishing a class. If you break a rule or get arrested again, the judge can cancel the CD and sentence you to jail instead."
  },

  whatToAsk: {
    en: [
      "Exactly what conditions do I have to follow?",
      "How long does the CD last?",
      "If I get a ticket or a new arrest, what happens?",
      "Is my record sealed when the CD ends clean?",
      "Does a CD count as a conviction?"
    ]
  },

  related: ["acd", "plea", "misdemeanor", "felony", "violation", "sealed-record"],
  legalEntryIds: ["clean-slate-ny","dismissed-case-sealing-ny"],

  citation: "NY Penal Law § 65.05",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/PEN/65.05",
  lastVerified: "2026-04-15",
  status: "active"
};
