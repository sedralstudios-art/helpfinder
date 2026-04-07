// LGLW5-D_bankruptcy-discharge-ny_06.js
// Category: consumer (Consumer & Debt)
// Jurisdiction: ny (New York State)
// Schema: V3 — English only (translation after verification)
// LGLW5-D | April 5, 2026

export const entry = {
  id: "bankruptcy-discharge-ny",
  category: "consumer",
  tier: "federal",
  jurisdiction: "ny",
  status: "active",

  title: { en: "Bankruptcy Discharge — What Gets Eliminated and What Does Not" },

  summary: {
    en: "A bankruptcy discharge is a court order that permanently eliminates your obligation to repay certain debts. Once a debt is discharged, no creditor can ever legally collect it again. But not every debt qualifies."
  },

  whoQualifies: {
    en: [
      "Anyone who completes a Chapter 7 or Chapter 13 bankruptcy case",
      "In Chapter 7, the discharge typically comes about 4 months after filing",
      "In Chapter 13, the discharge comes after completing all plan payments over 3–5 years",
      "Some debts are excluded from discharge by federal law regardless of chapter"
    ]
  },

  whatItMeans: {
    en: "A discharge (11 U.S.C. § 524) is a permanent federal court injunction. It bars creditors from ever collecting a discharged debt — by phone, letter, lawsuit, or any other means. Most unsecured debts are dischargeable, including credit cards, medical bills, personal loans, and utility bills. Certain debts survive bankruptcy, including student loans, child support, alimony, most taxes, and criminal fines."
  },

  yourRights: {
    en: [
      "A discharge is permanent — a creditor whose debt was discharged is forever barred from collecting it.",
      "If a creditor violates the discharge injunction, you can seek contempt sanctions in bankruptcy court.",
      "You have the right to challenge a creditor's claim that a specific debt is non-dischargeable.",
      "Creditors must file a non-dischargeability challenge within 60 days of the first meeting of creditors or the debt is discharged.",
      "You are free to voluntarily pay any discharged debt if you choose — but no creditor can require it."
    ]
  },

  legalOptions: {
    en: [
      "Discharge orders and schedules are permanent records. They may be needed years later if a creditor attempts collection.",
      "Debts from fraud, false pretenses, or willful injury may be challenged by creditors through adversary proceedings.",
      "Student loan discharge requires a separate court action proving undue hardship — this is rarely granted.",
      "Free legal help is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "Empire Justice Center in Rochester provides consumer and bankruptcy legal assistance at (585) 454-4060."
    ]
  },

  example: {
    en: "After receiving her Chapter 7 discharge, Elena keeps getting collection letters from a credit card company. The debt was included in her bankruptcy. This is a violation of the discharge injunction. Her attorney sends the creditor a copy of the discharge order citing 11 U.S.C. § 524. The letters stop. If they had continued, Elena could have filed a contempt motion in bankruptcy court."
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
    "bankruptcy-automatic-stay-ny",
    "bankruptcy-reaffirmation-ny"
  ],
  relatedHelpResources: [],
  tags: [
    "discharge", "debt eliminated", "debts wiped out",
    "non-dischargeable", "student loans bankruptcy", "child support bankruptcy",
    "creditor still calling", "collection after bankruptcy",
    "what debts survive", "permanent debt relief", "discharge order"
  ],
  sources: [
    "https://www.law.cornell.edu/uscode/text/11/523",
    "https://www.law.cornell.edu/uscode/text/11/524",
    "https://www.uscourts.gov/services-forms/bankruptcy"
  ],

  lastAudited: "2026-04-05",
  lastVerifiedBy: "Claude + Tony",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
