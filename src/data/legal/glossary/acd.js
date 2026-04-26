// Glossary term: ACD (Adjournment in Contemplation of Dismissal)
// Content written at ~6th grade reading level per project rule.
// Citation verified against NY Consolidated Laws, Criminal Procedure Law § 170.55.

export const ACD = {
  id: "acd",
  term: { en: "Adjournment in Contemplation of Dismissal" },
  aka: ["ACD"],
  category: "criminal",
  subtags: ["arraignment-stage", "pre-trial", "disposition"],

  context: {
    en: "A judge can offer this at arraignment or at a later court date. It usually comes up in smaller cases like misdemeanors. Your lawyer or the district attorney might ask for one."
  },

  plainEnglish: {
    en: "The case is put on hold, usually for 6 months. If you stay out of trouble during that time, the case is dropped and your record is sealed. You do not plead guilty. It is not a conviction. You don't get an ACD for serious crimes — it is only for smaller ones like misdemeanors."
  },

  whatToAsk: {
    en: [
      "When exactly does the ACD end?",
      "What counts as 'staying out of trouble'? Any new arrest? Any new ticket?",
      "Will my record be sealed automatically, or do I need to do anything?",
      "If I get arrested again during the ACD, what happens to this case?"
    ]
  },

  related: ["arraignment", "sealed-record", "misdemeanor"],
  legalEntryIds: ["dismissed-case-sealing-ny","marijuana-sealing-ny","clean-slate-ny"],

  citation: "NY CPL § 170.55",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/170.55",
  lastVerified: "2026-04-15",
  status: "active"
};
