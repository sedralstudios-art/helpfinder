// Glossary term: Temporary Assistance (TA)
// Citation verified: NY Social Services Law § 131 (duty to provide);
// § 131-a (grant amounts); Article 5 more broadly. Two tracks — Family
// Assistance (TANF-funded, 60-month lifetime federal limit) and Safety
// Net Assistance (state-funded, mostly for adults without minor children).

export const TEMPORARY_ASSISTANCE = {
  id: "temporary-assistance",
  term: { en: "Temporary Assistance" },
  aka: ["TA", "Public Assistance", "Welfare", "Family Assistance", "Safety Net"],
  category: "benefits",
  subtags: ["cash", "application"],

  context: {
    en: "You hear this when someone is applying for cash help because they can't pay for basic needs like rent, utilities, or food. In New York, 'welfare' is usually called Temporary Assistance. There are two kinds — one for families with children, one for everyone else."
  },

  plainEnglish: {
    en: "Cash help from the state for people who do not have enough to cover basic needs like rent, utilities, and food. There are two kinds. Family Assistance is for households with a minor child and comes with a 60-month lifetime limit from the federal government. Safety Net Assistance is for adults without minor children and some other groups — it is funded by the state and does not have the same federal lifetime limit. Applications go through the county's Department of Social Services. Most TA recipients also get SNAP and Medicaid — one application covers them all."
  },

  whatToAsk: {
    en: [
      "Am I applying for Family Assistance or Safety Net?",
      "Is there a work requirement, and what exactly counts as meeting it?",
      "How much is the grant in my county?",
      "What happens if I get an emergency need while my application is pending?",
      "If my application is denied, what are my appeal rights?"
    ]
  },

  related: ["snap", "medicaid", "fair-hearing", "recoupment", "aid-continuing"],
  legalEntryIds: ["emergency-cash-assistance-ny"],

  citation: "NY Soc. Services Law § 131; § 131-a; Article 5",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/SOS/131",
  lastVerified: "2026-04-15",
  status: "active"
};
