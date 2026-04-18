// LGLW5-D_bankruptcy-exemptions-ny_02.js
// Category: consumer (Consumer & Debt)
// Jurisdiction: ny (New York State)
// Source: Prof. Gregory Germain, Syracuse University College of Law
// Reviewed by Prof. Germain — April 2026
// Schema: V3 — English only (translation re-sync pending)
// LGLW5-D | Updated April 8, 2026

export const entry = {
  id: "bankruptcy-exemptions-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "11 USC 522",
  status: "active",

  title: { en: "Bankruptcy Exemptions — What Property You Get to Keep" },

  summary: {
    en: "When you file bankruptcy in New York, exemptions protect your most important property. New York allows debtors to choose between New York state exemptions and federal bankruptcy exemptions — whichever set protects more of your property."
  },

  whoQualifies: {
    en: [
      "Anyone filing Chapter 7 or Chapter 13 bankruptcy in New York",
      "You must have lived in New York continuously for at least 2 years (730 days), or lived in New York the most during the 180-day period prior to the 730-day period, to qualify for New York's exemptions (11 U.S.C. § 522(b)(3))",
      "If you moved to New York within the past 2 years, your prior state's exemptions may apply",
      "You must choose either the New York exemptions or the federal bankruptcy exemptions — you cannot mix and match between them"
    ]
  },

  whatItMeans: {
    en: "Each state has its own exemptions, and the federal bankruptcy code has a separate set. New York allows filers to choose which set to use. The New York set has a large homestead exemption but more restrictive exemptions for other property. The federal set offers a smaller homestead exemption but includes a flexible \"wildcard\" that can protect cash, bank accounts, and any other property (11 U.S.C. § 522(d)(5)). Most filers without significant home equity benefit from choosing the federal bankruptcy exemptions."
  },

  yourRights: {
    en: [
      "You have the right to choose between New York state exemptions (CPLR §§ 5205, 5206; NY DCL §§ 282, 283) and federal exemptions (11 U.S.C. § 522(d)).",
      "Qualified retirement accounts such as 401(k)s, 403(b)s, ERISA pensions, and most IRAs are fully exempt under both sets of exemptions with no dollar limit.",
      "Exempt property cannot be taken by a bankruptcy trustee to pay unsecured creditors.",
      "If your home equity is below the homestead exemption cap, your home is fully protected.",
      "Social Security proceeds are fully exempt under federal law as long as they are not mixed with other funds (42 U.S.C. § 407)."
    ]
  },

  legalOptions: {
    en: [
      "Current New York exemption amounts are available from the NY Department of Financial Services at dfs.ny.gov.",
      "A full 50-state exemption comparison is available at justia.com/bankruptcy/exemptions/bankruptcy-exemptions-50-state-survey/.",
      "Exemption amounts change periodically with inflation adjustments. Published figures may not reflect the most recent updates.",
      "Free legal help with choosing exemptions is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "Empire Justice Center in Rochester provides consumer and bankruptcy legal assistance at (585) 454-4060."
    ]
  },

  example: {
    en: "Lisa owns a home in Rochester with $85,000 in equity and a 401(k) worth $45,000. She owes $28,000 in credit card debt and files Chapter 7. Her home equity is fully protected by New York's homestead exemption for her area. Her 401(k) is 100% exempt — no trustee can touch it. There is nothing to liquidate. Her credit card debt is discharged. She keeps everything she owned."
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
    "bankruptcy-discharge-ny"
  ],
  relatedHelpResources: [],
  tags: [
    "bankruptcy exemptions", "homestead exemption", "protect property",
    "keep my house", "keep my car", "retirement protected",
    "what can i keep", "bankruptcy new york", "chapter 7 exemptions"
  ],
  sources: [
    "https://www.justia.com/bankruptcy/exemptions/bankruptcy-exemptions-50-state-survey/",
    "https://dfs.ny.gov/industry_guidance/exemption_from_judgments",
    "https://www.law.cornell.edu/uscode/text/11/522"
  ],

  lastAudited: "2026-04-08",
  lastVerifiedBy: "Prof. Gregory Germain (reviewed) + Claude + Tony",
  reviewedBy: "Professor Gregory Germain, Syracuse University College of Law — April 2026",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
