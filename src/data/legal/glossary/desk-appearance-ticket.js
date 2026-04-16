// Glossary term: Desk Appearance Ticket (DAT) / Appearance Ticket
// Citation verified: NY CPL Article 150 (§ 150.10 definition; § 150.20
// issuance). After January 1, 2020 reform, police MUST issue a DAT for
// almost any violation, misdemeanor, or certain class E felonies if the
// person can produce verifiable ID, with narrow exceptions (open warrants,
// failure to appear in last two years, unable/unwilling to identify).

export const DESK_APPEARANCE_TICKET = {
  id: "desk-appearance-ticket",
  term: { en: "Desk Appearance Ticket" },
  aka: ["DAT", "Appearance Ticket"],
  category: "criminal",
  subtags: ["pre-arraignment", "release"],

  context: {
    en: "You hear this if you are arrested but the police let you leave with a paper that tells you when to come to court. It is the most common way cases start for smaller charges in New York since the 2020 reforms."
  },

  plainEnglish: {
    en: "A paper the police give you after an arrest that says when and where to come to court. You sign it, you go home, and you must show up at arraignment on the date printed. New York law now requires the police to give a DAT for most violations, misdemeanors, and some lower felonies as long as you show them ID. There are some exceptions — like if you already have an open warrant or missed a court date in the last two years. If you miss the court date on the DAT, the judge will usually issue a bench warrant."
  },

  whatToAsk: {
    en: [
      "When exactly is my court date, and where do I go?",
      "Do I need a lawyer with me that day?",
      "What are the charges listed on the ticket?",
      "What happens if I cannot come on the scheduled date?"
    ]
  },

  related: ["arrest", "arraignment", "bench-warrant", "summons", "public-defender"],
  legalEntryIds: ["rights-when-arrested-ny"],

  citation: "NY CPL Article 150 (§ 150.10, § 150.20)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CPL/A150",
  lastVerified: "2026-04-15",
  status: "active"
};
