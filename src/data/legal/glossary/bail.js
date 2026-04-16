// Glossary term: Bail
// Citation verified: NY CPL § 510.10. Note — 2020/2023 NY reforms removed
// cash bail for most misdemeanors and non-violent felonies. The "least
// restrictive" standard was replaced in the latest amendments with a
// "kind and degree of control or restriction necessary to reasonably
// assure return to court" standard. Volatility: medium — track yearly.

export const BAIL = {
  id: "bail",
  term: { en: "Bail" },
  aka: [],
  category: "criminal",
  subtags: ["arraignment-stage", "pre-trial", "release"],

  context: {
    en: "You hear this at arraignment. If the judge orders bail, you must pay or post an amount so you can go home while the case is open. If you come to all your court dates, you get the money back at the end."
  },

  plainEnglish: {
    en: "Money or a bond you pay so you can go home while your case is open. You must come back for every single court date. If you miss one, you can lose the money and the judge can put a warrant out for your arrest. In New York, judges cannot set cash bail for most small charges — they must use other ways to make sure you come back to court, like checking in or giving up your passport."
  },

  whatToAsk: {
    en: [
      "Is there any way to be released without paying money?",
      "Can a family member post a bond instead of paying cash?",
      "What happens to the money if the case is dropped or I win?",
      "Exactly where and how do I post the bail?"
    ]
  },

  related: ["ror", "arraignment", "bench-warrant"],
  legalEntryIds: ["rights-when-arrested-ny"],

  citation: "NY CPL § 510.10",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/510.10",
  lastVerified: "2026-04-15",
  status: "active"
};
