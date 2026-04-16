// Glossary term: At-Will Employment
// Citation: Common-law doctrine adopted by NY courts. Not codified in a
// single statute. Key exceptions codified in: NY Exec Law § 296 (Human
// Rights Law), NY Labor Law § 215 (retaliation for wage complaints),
// NY Labor Law § 740 (whistleblower protection), Civil Service Law § 75
// (public employees with tenure), collective bargaining agreements.

export const AT_WILL_EMPLOYMENT = {
  id: "at-will-employment",
  term: { en: "At-Will Employment" },
  aka: ["At-Will"],
  category: "employment",
  subtags: ["rights", "termination"],

  context: {
    en: "You hear this when a worker is fired and is trying to figure out if it was legal. New York is an at-will state, which means the default rule is that either side can end the job at any time — but there are important exceptions that protect workers."
  },

  plainEnglish: {
    en: "The default rule in New York that an employer can fire a worker at any time, for any reason, or for no reason — and a worker can quit the same way. There is no required notice. But there are real exceptions. An employer cannot fire someone because of race, color, sex, sexual orientation, gender identity, religion, national origin, age, disability, pregnancy, marital or family status, military status, or status as a domestic violence victim. An employer cannot fire someone for complaining about unpaid wages, unsafe conditions, discrimination, or other illegal activity — that is retaliation. A written contract, union agreement, or some employee handbooks can also override at-will."
  },

  whatToAsk: {
    en: [
      "Why do I think I was fired — does any protected reason seem to apply?",
      "Do I have a contract, handbook, or union agreement that changes the at-will rule?",
      "Did I recently complain about something at work before being fired?",
      "What is the deadline to file a discrimination charge?",
      "Can I get unemployment benefits even if I was fired?"
    ]
  },

  related: ["human-rights-law", "retaliation-employment", "wage-theft", "final-wages", "unemployment-insurance"],
  legalEntryIds: ["wrongful-termination-ny"],

  citation: "NY common law; exceptions in Exec Law § 296, Labor Law § 215, § 740, Civil Service Law § 75",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/EXC/296",
  lastVerified: "2026-04-15",
  status: "active"
};
