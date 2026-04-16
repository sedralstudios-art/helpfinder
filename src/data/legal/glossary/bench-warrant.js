// Glossary term: Bench Warrant
// Citation verified: NY CPL § 530.70 (order of recognizance or bail; bench warrant).

export const BENCH_WARRANT = {
  id: "bench-warrant",
  term: { en: "Bench Warrant" },
  aka: [],
  category: "criminal",
  subtags: ["post-missed-court", "arrest"],

  context: {
    en: "A judge signs this when someone who was supposed to come to court did not show up. Police can arrest you on it later — at home, at work, or at a traffic stop. It does not go away on its own."
  },

  plainEnglish: {
    en: "A paper the judge signs that tells the police to arrest you. It usually goes out after you miss a court date. Police can take you to jail on it even years later. The good news: you can clear it yourself. Most of the time this means going to court and asking the judge to cancel it. A lawyer can go with you or even go without you in some cases."
  },

  whatToAsk: {
    en: [
      "Is there already a warrant in my name?",
      "Can I go to court to clear it on my own, or do I need to turn myself in?",
      "Will I be held in jail once I show up, or can I be released again?",
      "If police stop me, what should I say?"
    ]
  },

  related: ["arraignment", "ror", "bail"],
  legalEntryIds: ["rights-when-arrested-ny"],

  citation: "NY CPL § 530.70",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/530.70",
  lastVerified: "2026-04-15",
  status: "active"
};
