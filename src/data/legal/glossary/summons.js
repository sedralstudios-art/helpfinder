// Glossary term: Summons (criminal — distinct from Traffic/Civil summons)
// Citation verified: NY CPL Article 130 (§ 130.10 definition/function).
// A summons is issued by the court directing the defendant to appear for
// arraignment. Different from a DAT (issued by police) and different from
// a civil summons (Family Court Act, CPLR).

export const SUMMONS = {
  id: "summons",
  term: { en: "Summons" },
  aka: ["Criminal Summons"],
  category: "criminal",
  subtags: ["pre-arraignment"],

  context: {
    en: "You hear this when a court — not the police — sends you a paper ordering you to come to court for arraignment. It is one way a case starts without an arrest."
  },

  plainEnglish: {
    en: "A court paper telling you to come to court on a certain date for arraignment. A judge sends it after a case has been filed, usually when the judge thinks the person will show up on their own and does not need to be arrested. A summons is not the same as a desk appearance ticket. The police hand out DATs. The court issues summonses. If you get a summons and do not come to court on the date, the judge can issue a warrant for your arrest."
  },

  whatToAsk: {
    en: [
      "What case is this summons for? What are the charges?",
      "Do I need a lawyer for the first court date?",
      "If I cannot come on that date, what are my options?",
      "What happens if I miss it?"
    ]
  },

  related: ["arrest-warrant", "desk-appearance-ticket", "arraignment", "bench-warrant"],
  legalEntryIds: ["criminal-case-process-ny"],

  citation: "NY CPL Article 130 (§ 130.10)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/A130",
  lastVerified: "2026-04-15",
  status: "active"
};
