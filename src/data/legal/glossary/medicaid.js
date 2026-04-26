// Glossary term: Medicaid
// Citation verified: NY Social Services Law § 366. Income limit 138% FPL
// for adults under 65 (MAGI group). Different rules for age 65+, disabled,
// and pregnant — some have asset limits or spend-down pathways. Apply via
// NY State of Health for MAGI-group, or local DSS for non-MAGI.

export const MEDICAID = {
  id: "medicaid",
  term: { en: "Medicaid" },
  aka: [],
  category: "benefits",
  subtags: ["health", "application"],

  context: {
    en: "You hear this when someone needs health insurance and cannot afford it. Medicaid is different from Medicare — Medicaid is for low-income people of any age, Medicare is for people 65 and older or with certain disabilities. Some people have both."
  },

  plainEnglish: {
    en: "Free or very low-cost health insurance for low-income New Yorkers. It pays for doctor visits, hospital stays, prescriptions, dental, vision, mental health, and long-term care. The income limit for most adults under 65 is 138% of the federal poverty level. The current dollar amount is at nystateofhealth.ny.gov. For seniors, people with disabilities, and long-term care, the rules are different and may include an asset test or a spend-down. Most applicants apply online at nystateofhealth.ny.gov; the county DSS handles applications for adults 65 and older, people with disabilities, and long-term care."
  },

  whatToAsk: {
    en: [
      "Which Medicaid path applies to me — MAGI group or non-MAGI?",
      "Where should I apply — NY State of Health or the county DSS?",
      "Will my assets be counted in my category?",
      "If I am over the income limit, is there a spend-down option?",
      "How long will my coverage last, and when do I recertify?"
    ]
  },

  related: ["snap", "temporary-assistance", "fair-hearing", "adequate-notice"],
  legalEntryIds: ["medicaid-ny", "disability-medicaid-ny", "medicaid-spend-down-ny"],

  citation: "NY Soc. Services Law § 366",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/SOS/366",
  lastVerified: "2026-04-15",
  status: "active"
};
