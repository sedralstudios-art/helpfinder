// LGLW5-D_bankruptcy-means-test-ny_04.js
// Category: consumer (Consumer & Debt)
// Jurisdiction: ny (New York State)
// Schema: V3 — English only (translation after verification)
// LGLW5-D | April 5, 2026

export const entry = {
  id: "bankruptcy-means-test-ny",
  category: "consumer",
  tier: "federal",
  jurisdiction: "ny",
  status: "active",

  title: { en: "The Means Test — Do You Qualify for Chapter 7?" },

  summary: {
    en: "To file Chapter 7, you must pass the means test. It compares your income to New York's median for your household size. Most people pass."
  },

  whoQualifies: {
    en: [
      "Anyone considering Chapter 7 bankruptcy must take the means test",
      "If your income is at or below the median for your household size in New York, you automatically pass",
      "If your income is above the median, a second calculation based on expenses may still qualify you",
      "If you have primarily business debts rather than consumer debts, the means test may not apply"
    ]
  },

  whatItMeans: {
    en: "The means test (11 U.S.C. § 707(b)) determines whether you qualify for a Chapter 7 discharge. Part 1 compares your average income over the 6 full months before filing to New York's median for your household size. If your income is at or below the median, you pass automatically. If it is above, Part 2 subtracts allowed expenses to calculate your disposable income."
  },

  yourRights: {
    en: [
      "The means test is a formula, not a moral judgment. It does not determine whether you deserve help.",
      "Higher-income filers are not barred from bankruptcy — they are directed toward Chapter 13.",
      "Certain expenses are fully deductible, including mortgage, car payments, healthcare, and child support.",
      "Failing the means test does not prevent you from filing bankruptcy — it limits you to Chapter 13."
    ]
  },

  legalOptions: {
    en: [
      "Current New York median income figures are published by the U.S. Trustee Program at justice.gov/ust/means-testing.",
      "Official Form 122A is the means test calculation form, available at uscourts.gov/forms/bankruptcy-forms.",
      "Free legal help with the means test is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "Empire Justice Center in Rochester provides consumer and bankruptcy legal assistance at (585) 454-4060."
    ]
  },

  example: {
    en: "Terrence earns $72,000 a year as a machinist — above New York's single-person median. He has $55,000 in credit card and medical debt. He takes the means test. Part 1 shows his income is above the median, so he moves to Part 2. After subtracting his mortgage, car payment, medical costs, and other allowed expenses, his disposable income falls below the threshold. He passes and qualifies for Chapter 7."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "General civil legal help including bankruptcy guidance",
      qualifier: "Low-income Monroe County residents",
      access: "Call or visit during business hours",
      outcome: "Free legal guidance or referral",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Empire Justice Center",
      focus: "Consumer and bankruptcy legal assistance",
      qualifier: "Low-income individuals in western and central New York",
      access: "Call Rochester office",
      outcome: "Free legal assistance or referral",
      phone: "(585) 454-4060",
      url: "https://www.empirejustice.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "bankruptcy-chapter7-ny",
    "bankruptcy-chapter13-ny",
    "bankruptcy-exemptions-ny"
  ],
  relatedHelpResources: [],
  tags: [
    "means test", "qualify for bankruptcy", "income too high",
    "can I file chapter 7", "bankruptcy eligibility", "median income",
    "do I qualify", "disposable income", "expense deductions",
    "bankruptcy income limit", "too much income for bankruptcy"
  ],
  sources: [
    "https://www.law.cornell.edu/uscode/text/11/707",
    "https://www.justice.gov/ust/means-testing",
    "https://www.uscourts.gov/forms/bankruptcy-forms"
  ],

  lastAudited: "2026-04-05",
  lastVerifiedBy: "Claude + Tony",
  volatility: "high",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
