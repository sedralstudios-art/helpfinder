// Glossary term: Unemployment Insurance
// Citation verified: NY Labor Law Article 18 (§§ 500-649). Base period
// wage threshold for 2026: $3,400 in highest quarter. First week after
// filing is an unpaid waiting week. Administered by NY Department of
// Labor. Benefits last up to 26 weeks in a standard year (more during
// high-unemployment periods via Extended Benefits).

export const UNEMPLOYMENT_INSURANCE = {
  id: "unemployment-insurance",
  term: { en: "Unemployment Insurance" },
  aka: ["UI", "Unemployment Benefits", "Unemployment"],
  category: "employment",
  subtags: ["benefits", "termination"],

  context: {
    en: "You hear this when someone has lost a job through no fault of their own and needs money while looking for work. It is a state-run program funded by taxes on employers. It is not charity — most workers paid into it."
  },

  plainEnglish: {
    en: "A weekly payment from the state for people who have lost a job through no fault of their own. You apply through the New York Department of Labor website. To qualify, you need to have earned enough wages during a recent period (a 'base period') and be able and available to work. The first week after filing is a waiting week with no benefits. After that, payments continue weekly for up to 26 weeks if you keep certifying each week that you are looking for work. You can still qualify in some cases where you were fired — but not usually for serious misconduct. Quitting without a good reason tied to the job usually means you do not qualify. If you are denied, you have the right to a hearing."
  },

  whatToAsk: {
    en: [
      "How do I apply, and what documents do I need?",
      "What is my estimated weekly benefit amount?",
      "If I was fired, can I still qualify?",
      "What counts as 'looking for work' to keep benefits going?",
      "If I am denied, how do I appeal and by when?"
    ]
  },

  related: ["at-will-employment", "wage-theft", "retaliation-employment", "final-wages"],
  legalEntryIds: [],

  citation: "NY Labor Law Article 18 (§§ 500-649)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/LAB/A18",
  lastVerified: "2026-04-15",
  status: "active"
};
