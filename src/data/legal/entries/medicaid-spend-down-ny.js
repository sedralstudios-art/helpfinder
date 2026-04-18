export const MEDICAID_SPEND_DOWN_NY = {
  id: "medicaid-spend-down-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY SOS 366",
  status: "active",

  title: { en: "Medicaid Spend-Down — How to Qualify When Your Income Is Too High" },

  summary: {
    en: "If your income is a little above the Medicaid limit, you can still get Medicaid through a program called spend-down. It works kind of like a deductible. Once your medical bills add up to your extra income, Medicaid pays for the rest of the month."
  },

  whoQualifies: {
    en: [
      "Adults 65 and older whose income is above the Medicaid limit.",
      "People who Social Security or the state says are disabled.",
      "People who are legally blind.",
      "You also have to meet the Medicaid savings limit and other rules.",
      "This program uses the Non-MAGI rules. (Non-MAGI is a set of Medicaid rules mostly for seniors and disabled people. It's different from the rules for other adults under 65.)"
    ]
  },

  whatItMeans: {
    en: "The Medicaid Excess Income Program has a few names: spend-down, surplus income, or Medicaid deductible. It all means the same thing.\n\nHere's how it works: the difference between your monthly income and the Medicaid income level is your \"extra income.\" If your medical bills that month add up to your extra income, Medicaid covers the rest of the month. The bills can be paid or unpaid.\n\nWhat bills count? Doctor visits, prescriptions, medical supplies, insurance premiums. Over-the-counter medicine your doctor recommended. Rides to medical appointments. Bills from your spouse or kids under 21 can count too.\n\nYou don't have to do the math yourself. Your local DSS figures out your extra income amount and sends you a notice.\n\nThe Medicaid income and savings limits are updated every January. Current limits are at health.ny.gov."
  },

  yourRights: {
    en: [
      "You have the right to use the spend-down program if your income is above the Medicaid limit but you meet the other rules.",
      "You have the right to use both paid AND unpaid medical bills toward your spend-down.",
      "You have the right to fax your bills to DSS instead of bringing them in, especially if you have a disability that makes going in hard.",
      "You have the right to retroactive Medicaid for up to 3 months before you applied, if you had medical costs then.",
      "You have the right to a fair hearing if you are denied or if DSS figures your extra income wrong.",
      "You have the right to pick between sending in bills each month OR paying DSS directly (the Pay-In option)."
    ]
  },

  legalOptions: {
    en: [
      "Every county DSS in New York runs the Medicaid Excess Income Program (NY Social Services Law § 366).",
      "The state Department of Health updates Medicaid income and savings limits each year at health.ny.gov/health_care/medicaid/.",
      "Two ways to meet your spend-down each month:\n1) Send bills: turn in medical bills that add up to your extra income.\n2) Pay-In Program: pay the extra income amount straight to DSS in exchange for that month's coverage.",
      "Pay-In details: 1 to 5 months at a time gives you outpatient coverage only. 6 months at once gives you outpatient AND inpatient (hospital) coverage.",
      "People with disabilities can look into a Pooled Trust. It's a way to put your extra income into a trust each month, so you don't have to meet a spend-down. Run by nonprofits.",
      "Medicaid helpline: 1-800-541-2831.",
      "To ask for a fair hearing: call 1-800-342-3334.",
      "Free legal help: LawNY (585-325-2520) and Empire Justice Center (585-454-4060)."
    ]
  },

  example: {
    en: "Rose is 72. She lives alone on $2,100 a month. The Medicaid income limit for a single person is lower than that. Her extra income is about $280 a month. Each month she sends her prescription receipts and doctor visit bills to her county DSS. Because her medical bills are more than $280, Medicaid covers her for the rest of that month. Her home aide visits and the rest of her prescriptions are covered."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Assistance of Western New York (LawNY)",
      focus: "Health law, Medicaid, Medicare, elder law, spend-down assistance",
      qualifier: "Low income residents in 14 Western NY counties including Monroe",
      access: "Phone intake at (585) 325-2520",
      outcome: "Direct representation",
      phone: "(585) 325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Empire Justice Center",
      focus: "Medicaid, health law, disability benefits, systemic advocacy",
      qualifier: "Low and moderate income residents statewide (all NYS counties except NYC)",
      access: "Phone intake at (585) 454-4060",
      outcome: "Direct representation, impact litigation, and policy advocacy",
      phone: "(585) 454-4060",
      url: "https://www.empirejustice.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Public benefits, Medicaid applications, denials, and fair hearings",
      qualifier: "Low income residents of Monroe and surrounding counties",
      access: "Phone intake, walk-in, or referral",
      outcome: "Direct representation and advice on benefits cases",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "medicaid-ny",
    "disability-medicaid-ny",
    "medicare-savings-program-ny",
    "benefits-denial-appeal-ny",
    "fair-hearing-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "Medicaid spend down",
    "excess income Medicaid",
    "income too high for Medicaid",
    "over income Medicaid",
    "surplus income",
    "medical bills too high",
    "can't afford medicine",
    "senior health insurance",
    "disabled health coverage",
    "Medicaid deductible"
  ],

  sources: [
    "https://www.health.ny.gov/health_care/medicaid/excess_income.htm",
    "https://www.nysenate.gov/legislation/laws/SOS/366",
    "https://www.law.cornell.edu/uscode/text/42/1396a"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
