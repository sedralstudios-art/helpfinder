// LGLW5-D_bankruptcy-means-test-ny_04.js
// Category: consumer (Consumer & Debt)
// Jurisdiction: ny (New York State)
// Source: Prof. Gregory Germain, Syracuse University College of Law
// Reviewed by Prof. Germain — April 2026
// Schema: V3 — English only (translation re-sync pending)
// LGLW5-D | Updated April 8, 2026

export const entry = {
  id: "bankruptcy-means-test-ny",
  category: "consumer",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-statute",
  primaryStatute: "11 USC 707",
  status: "active",

  title: { en: "The Means Test — Do You Qualify for Chapter 7?" },

  summary: {
    en: "Your Chapter 7 bankruptcy case will be dismissed if you do not pass the means test (11 U.S.C. § 707(b)). It compares your gross income to New York's median for your household size. Most people pass."
  },

  whoQualifies: {
    en: [
      "Anyone considering Chapter 7 bankruptcy must satisfy the means test",
      "If your gross income during the six full months before the month you file bankruptcy is at or below the median gross income for your household size in New York, you automatically pass (11 U.S.C. §§ 707(b)(6) and (b)(7))",
      "If your income is above the median, you may qualify under a second calculation that starts with your means test average monthly gross income, subtracts national and local living expenses approved by the IRS for abatement and secured debt payments, and compares the results over five years with certain metrics in the Bankruptcy Code (11 U.S.C. § 707(b)(2)) — the calculation is complex, and most over-median filers will not qualify",
      "If you have primarily business debts rather than consumer debts, the means test may not apply (11 U.S.C. § 707(b)(1))"
    ]
  },

  whatItMeans: {
    en: "The means test (11 U.S.C. § 707(b)) determines whether your case will be dismissed. Part 1 compares your average gross income over the 6 full months before filing to New York's median for your household size. If your income is at or below the median, you pass automatically. If it is above, Part 2 subtracts allowed expenses to calculate your disposable income."
  },

  yourRights: {
    en: [
      "The means test is a formula, not a moral judgment. It does not determine whether you deserve help.",
      "Higher-income filers are not barred from bankruptcy — they are directed toward Chapter 13.",
      "The median income in New York is quite high, so many debtors will qualify under the first part of the means test."
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
    en: "Julia is raising two children on an annual gross income of $60,000 per year which is earned evenly throughout the year. She has $55,000 in credit card and medical debt and cannot make ends meet. Because her annualized income earned during the six full months before the month of bankruptcy is lower than the median income in New York for a family of 3 ($71,393 in 2026), she satisfies the means test."
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
    "means test", "qualify for bankruptcy", "chapter 7 qualify",
    "median income new york", "bankruptcy income limit", "disposable income",
    "over median", "below median"
  ],
  sources: [
    "https://www.law.cornell.edu/uscode/text/11/707",
    "https://www.justice.gov/ust/means-testing",
    "https://www.uscourts.gov/forms/bankruptcy-forms"
  ],

  lastAudited: "2026-04-08",
  lastVerifiedBy: "Prof. Gregory Germain (reviewed) + Claude + Tony",
  reviewedBy: "Professor Gregory Germain, Syracuse University College of Law — April 2026",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
