// Glossary term: Sentence
// Citation verified: NY Penal Law § 60.01 (authorized dispositions).
// Umbrella term for what the judge orders after a guilty plea or verdict.

export const SENTENCE = {
  id: "sentence",
  term: { en: "Sentence" },
  aka: [],
  category: "criminal",
  subtags: ["post-plea", "disposition"],

  context: {
    en: "You hear this at the end of the case, after a guilty plea or a guilty verdict. It is the consequence the judge orders."
  },

  plainEnglish: {
    en: "What the judge orders after you plead guilty or are found guilty at trial. A sentence in New York can be any of: no punishment at all (unconditional discharge), a conditional discharge with rules, a fine, restitution, probation, jail (up to 1 year, local jail), or prison (more than 1 year, state prison). Most sentences also include a mandatory surcharge. Some convictions come with extra things — like a license suspension for a DWI, or a no-contact order for a violent case. The sentence is the end of the case unless you file an appeal."
  },

  whatToAsk: {
    en: [
      "Exactly what does my sentence include?",
      "When does each part start and end?",
      "Are there any extra consequences for this type of case?",
      "Can I get a copy of the sentence in writing?",
      "If I plead guilty, is the sentence already set or is the judge choosing later?"
    ]
  },

  related: ["plea", "plea-bargain", "conditional-discharge", "probation", "restitution", "mandatory-surcharge", "appeal"],
  legalEntryIds: ["clean-slate-ny"],

  citation: "NY Penal Law § 60.01 (authorized dispositions)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/PEN/60.01",
  lastVerified: "2026-04-15",
  status: "active"
};
