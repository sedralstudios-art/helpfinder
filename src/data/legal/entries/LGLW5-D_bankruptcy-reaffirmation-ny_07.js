// LGLW5-D_bankruptcy-reaffirmation-ny_07.js
// Category: consumer (Consumer & Debt)
// Jurisdiction: ny (New York State)
// Schema: V3 — English only (translation after verification)
// LGLW5-D | April 5, 2026

export const entry = {
  id: "bankruptcy-reaffirmation-ny",
  category: "consumer",
  tier: "federal",
  jurisdiction: "ny",
  status: "active",

  title: { en: "Reaffirmation Agreements — Keeping a Secured Asset After Bankruptcy" },

  summary: {
    en: "A reaffirmation agreement is a contract that keeps a specific debt alive after your bankruptcy discharge. It is most common with car loans. Reaffirmation can be risky — especially when you owe more than the property is worth."
  },

  whoQualifies: {
    en: [
      "Anyone filing Chapter 7 who has a secured debt such as a car loan",
      "A lender may ask you to reaffirm if you want to keep the property and continue making payments",
      "Reaffirmation is voluntary — no creditor can force you to sign",
      "The agreement must be filed with the bankruptcy court for review"
    ]
  },

  whatItMeans: {
    en: "A reaffirmation agreement (11 U.S.C. § 524(c)) voluntarily excludes one debt from your discharge. You agree to remain personally liable for that debt even after bankruptcy. If you later default on a reaffirmed debt, the lender can repossess the property and sue you for the difference. Without reaffirmation, that deficiency would have been discharged."
  },

  yourRights: {
    en: [
      "Reaffirmation is voluntary. No creditor can force you to sign.",
      "You can rescind a reaffirmation agreement within 60 days of signing or before the discharge, whichever is later.",
      "If you are not represented by an attorney, the court must review the agreement and can reject it if it creates a hardship.",
      "Many lenders accept continued payments without a reaffirmation agreement — repossession is not automatic.",
      "If the property is worth more than the debt, reaffirmation may be reasonable. If you owe more than it is worth, it is risky."
    ]
  },

  legalOptions: {
    en: [
      "If represented by an attorney, the attorney must certify that reaffirmation is not an undue hardship before signing.",
      "Many attorneys will not sign a reaffirmation agreement if the property is worth less than the debt.",
      "The Bankruptcy Code allows lenders to enforce default-upon-filing clauses (11 U.S.C. § 521(d)), but state court enforcement is uncertain.",
      "Free legal help is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "Empire Justice Center in Rochester provides consumer and bankruptcy legal assistance at (585) 454-4060."
    ]
  },

  example: {
    en: "Kevin files Chapter 7. He owes $9,000 on his car, which is worth $8,200 — he is underwater. His lender asks him to reaffirm the car loan. He thinks it through: if he reaffirms and later cannot make payments, the lender can repossess the car and sue him for the difference. Without reaffirmation, that risk disappears. Most lenders would rather receive payments than repossess at a loss. Kevin keeps making payments without reaffirming and accepts the small risk that the lender could repossess."
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
    "bankruptcy-exemptions-ny",
    "bankruptcy-discharge-ny"
  ],
  relatedHelpResources: [],
  tags: [
    "reaffirmation", "keep my car", "car loan bankruptcy",
    "reaffirm debt", "secured debt", "deficiency judgment",
    "car repossession", "sign reaffirmation", "lender asking to reaffirm",
    "underwater car loan", "owe more than car is worth"
  ],
  sources: [
    "https://www.law.cornell.edu/uscode/text/11/524",
    "https://www.law.cornell.edu/uscode/text/11/521"
  ],

  lastAudited: "2026-04-05",
  lastVerifiedBy: "Claude + Tony",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
