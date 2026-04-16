// Glossary term: NYSHRL (New York State Human Rights Law)
// Citation verified: NY Executive Law § 296. Applies to employment,
// housing, public accommodations, credit, education. 2019 amendments
// lowered the employer-size threshold to all employers (including those
// with fewer than 4 employees). 3-year limitations for complaints filed
// with DHR (Exec Law § 297); 6 years in court for some claims.

export const HUMAN_RIGHTS_LAW = {
  id: "human-rights-law",
  term: { en: "Human Rights Law" },
  aka: ["NYSHRL", "Discrimination Law"],
  category: "employment",
  subtags: ["rights", "discrimination"],

  context: {
    en: "You hear this when someone is treated unfairly at work, in housing, at a business, or in school because of who they are. New York has one of the broadest state anti-discrimination laws in the country. It covers more categories than federal law does."
  },

  plainEnglish: {
    en: "A state law that makes discrimination illegal in employment, housing, public places (like stores, restaurants, hospitals), credit, and education. It protects people based on race, color, sex, sexual orientation, gender identity or expression, pregnancy, marital or family status, national origin, citizenship or immigration status, age, disability, religion, creed, military status, genetic information, and status as a domestic violence victim. It also bans harassment and retaliation for complaining about discrimination. Since 2019, the law covers every employer in New York — there is no longer a 4-employee minimum like there used to be. Complaints can be filed with the Division of Human Rights within 3 years or, for some claims, in court within 6 years."
  },

  whatToAsk: {
    en: [
      "What happened, and which protected category does it involve?",
      "Was there harassment, retaliation, a denial, or unequal treatment?",
      "Do I file with the Division of Human Rights or sue in court?",
      "What are the deadlines — 3 years or 6 years?",
      "Can I get free legal help for a discrimination case?"
    ]
  },

  related: ["at-will-employment", "retaliation-employment", "wage-theft", "landlord-retaliation"],
  legalEntryIds: ["wrongful-termination-ny"],

  citation: "NY Executive Law § 296",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/EXC/296",
  lastVerified: "2026-04-15",
  status: "active"
};
