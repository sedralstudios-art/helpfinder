// Glossary term: Discovery
// Citation verified: NY CPL Article 245 (effective 2020, amended 2022).
// § 245.20 = automatic discovery, 21 categories. Major reform from the
// old "blindfold law" (pre-2020 Article 240). Prosecutor must turn over
// materials on a set timetable without a defense motion.

export const DISCOVERY = {
  id: "discovery",
  term: { en: "Discovery" },
  aka: ["Automatic Discovery", "245 material"],
  category: "criminal",
  subtags: ["pre-trial", "evidence"],

  context: {
    en: "You hear this after arraignment. The prosecutor has to give your lawyer copies of the evidence in the case — police reports, witness names, 911 recordings, body cam footage, and more. This used to be hidden until trial. Since 2020, the law requires it to come out fast, without your lawyer even asking."
  },

  plainEnglish: {
    en: "The evidence the prosecutor has to share with your side. In New York since 2020, the prosecutor must turn over 21 kinds of things — police reports, witness names and contact info, 911 calls, videos, deals made with witnesses, and more — on a strict timeline. Your lawyer uses this to figure out how strong the case is and to decide if you should take a plea or go to trial. If the prosecutor misses the deadline or hides something, your lawyer can ask the judge to fix it or throw the case out."
  },

  whatToAsk: {
    en: [
      "Has the prosecutor turned over all the discovery yet?",
      "What does the body cam or surveillance video show?",
      "Can I see the witness statements? Who are the witnesses?",
      "Are there any 911 recordings or dispatch notes?",
      "If discovery is late, what can we do about it?"
    ]
  },

  related: ["arraignment", "motion-to-dismiss", "speedy-trial", "public-defender", "plea"],
  legalEntryIds: [],

  citation: "NY CPL Article 245 (§ 245.20 automatic discovery)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/A245",
  lastVerified: "2026-04-15",
  status: "active"
};
