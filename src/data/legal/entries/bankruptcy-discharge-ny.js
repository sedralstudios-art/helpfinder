// LGLW5-D_bankruptcy-discharge-ny_06.js
// Category: consumer (Consumer & Debt)
// Jurisdiction: ny (New York State)
// Source: Prof. Gregory Germain, Syracuse University College of Law
// Reviewed by Prof. Germain — April 2026
// Schema: V3 — English only (translation re-sync pending)
// LGLW5-D | Updated April 8, 2026

export const entry = {
  id: "bankruptcy-discharge-ny",
  category: "consumer",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-statute",
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
    en: "A discharge (11 U.S.C. § 524) is a permanent federal court injunction. It bars creditors from ever collecting a discharged debt — by phone, letter, lawsuit, or any other means. Most unsecured debts other than taxes and government penalties are dischargeable, including credit cards, medical bills, personal loans, and utility bills. Certain debts automatically survive bankruptcy and are not discharged, including most student loans, child support, alimony, most taxes, and governmental fines. There is a long list of non-dischargeable debts in 11 U.S.C. § 523(a). Creditors must timely request to except debts from discharge on the grounds that the debtor committed fraud, fiduciary defalcation, or caused willful and malicious injuries. Fraud can include running up debts with the intent to discharge them in bankruptcy."
  },

  yourRights: {
    en: [
      "A discharge is permanent — a creditor whose debt was discharged is forever barred from collecting it.",
      "If a creditor with notice of the bankruptcy violates the discharge injunction, you can seek contempt sanctions in bankruptcy court.",
      "Creditors seeking to except a debt from discharge for fraud or willful and malicious injury must challenge the dischargeability in the bankruptcy court within 60 days of the first meeting of creditors or the debt is discharged (11 U.S.C. § 523(c)). There is a presumption that debts for luxury goods purchased within 90 days of bankruptcy and cash advances taken within 70 days of bankruptcy were fraudulent if over the statutory amounts (11 U.S.C. § 523(a)(2)(C)).",
      "You are free to voluntarily pay any discharged debt if you choose — but no creditor can require it (11 U.S.C. § 524(f))."
    ]
  },

  legalOptions: {
    en: [
      "Copies of discharge orders and schedules may be needed years later if a creditor attempts collection.",
      "Debts from fraud or willful and malicious injury may be challenged by creditors through adversary proceedings.",
      "Student loan discharge requires a separate court action proving undue hardship — this is rarely granted.",
      "Free legal help is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "Empire Justice Center in Rochester provides consumer and bankruptcy legal assistance at (585) 454-4060."
    ]
  },

  example: {
    en: "After receiving her Chapter 7 discharge, Elena keeps getting collection letters from a credit card company. The debt was scheduled in her bankruptcy. This is a violation of the discharge injunction. Her attorney sends the creditor a copy of the discharge order citing 11 U.S.C. § 524. The letters stop. If they had continued, Elena could have filed a contempt motion in bankruptcy court."
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
    "bankruptcy discharge", "debt eliminated", "what debts get wiped out",
    "non-dischargeable", "student loans bankruptcy", "discharge injunction",
    "section 523", "section 524"
  ],
  sources: [
    "https://www.law.cornell.edu/uscode/text/11/523",
    "https://www.law.cornell.edu/uscode/text/11/524",
    "https://www.uscourts.gov/services-forms/bankruptcy"
  ],

  lastAudited: "2026-04-08",
  lastVerifiedBy: "Prof. Gregory Germain (reviewed) + Claude + Tony",
  reviewedBy: "Professor Gregory Germain, Syracuse University College of Law — April 2026",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
