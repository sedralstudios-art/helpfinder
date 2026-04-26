export const FPL = {
  id: "fpl",
  term: { en: "Federal Poverty Level" },
  aka: ["FPL", "Poverty Level", "Poverty Line", "% FPL"],
  category: "benefits",
  subtags: ["program-jargon", "eligibility"],

  context: {
    en: "You see this on program applications and eligibility charts. It is the income number the government uses to decide who qualifies for help. Programs say things like '138% FPL' or '200% FPL' — that means 1.38 or 2 times the poverty line."
  },

  plainEnglish: {
    en: "A dollar amount set by the federal government each year that represents the minimum income a household needs. Programs use it to set eligibility. For example, Medicaid in New York covers people up to 138% of FPL — meaning a household earning up to 1.38 times the poverty level qualifies. The dollar value of 100% FPL is set per household size and adjusted yearly; current values are at aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines. When a program says '200% FPL,' multiply the FPL number by 2. Almost every public benefits program — SNAP, Medicaid, HEAP, WIC, childcare subsidy, school lunch — uses some version of the FPL to decide who gets in."
  },

  whatToAsk: {
    en: [
      "What percentage of FPL does this program use for eligibility?",
      "What is the dollar amount for my household size?",
      "Does the program count gross income or net income?",
      "If I am just over the limit, is there any flexibility?"
    ]
  },

  related: ["snap", "medicaid", "temporary-assistance", "recertification"],
  legalEntryIds: [],

  citation: "42 USC § 9902(2); updated annually by HHS",
  sourceUrl: "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines",
  lastVerified: "2026-04-16",
  status: "active"
};
