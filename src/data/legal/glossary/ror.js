// Glossary term: Release on Own Recognizance
// Citation verified: NY CPL § 510.40 (release orders, conditions).

export const ROR = {
  id: "ror",
  term: { en: "Release on Own Recognizance" },
  aka: ["ROR", "Released on Recognizance", "Own Recognizance"],
  category: "criminal",
  subtags: ["arraignment-stage", "pre-trial", "release"],

  context: {
    en: "You hear this at arraignment. The judge may offer it instead of bail. It means the judge trusts you to come back to court without paying or posting anything."
  },

  plainEnglish: {
    en: "The judge lets you go home on a promise — no money. You just have to come to every court date. If you miss one, the judge can put a warrant out for your arrest, and next time you may be held instead of released. ROR is the most common way people leave arraignment in New York for small charges."
  },

  whatToAsk: {
    en: [
      "If I have a real emergency on a court date, what do I do?",
      "Do I need to check in with anyone between court dates?",
      "When is my next court date, and where do I go?",
      "What happens if someone new arrests me while I am on ROR?"
    ]
  },

  related: ["bail", "arraignment", "bench-warrant"],
  legalEntryIds: ["rights-when-arrested-ny"],

  citation: "NY CPL § 510.40",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/510.40",
  lastVerified: "2026-04-15",
  status: "active"
};
