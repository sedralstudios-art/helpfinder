export const SNAP_EXPEDITED_NY = {
  id: "snap-expedited-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "7 CFR 273.2",
  status: "active",

  title: { en: "Expedited SNAP — Emergency Food Benefits Within 7 Days" },

  summary: {
    en: "A person with very little or no income who needs food right away may qualify for expedited SNAP benefits. The law requires that these benefits be issued within 7 days of your application."
  },

  whoQualifies: {
    en: [
      "Households with gross monthly income below $150 and liquid resources (cash, checking, savings) below $100.",
      "Households whose monthly rent or mortgage plus utilities exceed their combined monthly income and liquid resources.",
      "Migrant or seasonal farmworker households that are destitute.",
      "Households experiencing homelessness."
    ]
  },

  whatItMeans: {
    en: "Expedited SNAP is a faster version of the regular SNAP process. It exists so that people in crisis can get food help without waiting the standard 30 days. Under federal law, the local Department of Social Services must issue expedited benefits within 7 calendar days of the application date. In some cases, benefits may be available within 24 to 48 hours. Expedited benefits are a one-time emergency issuance. The full application process must still be completed afterward. This means an interview and documents will still be required. If those steps are not completed, ongoing monthly benefits will not continue. The DSS office must screen every applicant for expedited eligibility on the same day the application is filed. This screening happens even if the full interview cannot take place that day."
  },

  yourRights: {
    en: [
      "You have the right to be screened for expedited SNAP on the same day you apply.",
      "You have the right to receive expedited benefits within 7 calendar days if you qualify.",
      "You have the right to apply even if you do not have all of your documents with you.",
      "You have the right to appoint an authorized representative to apply on your behalf if you cannot travel to the DSS office.",
      "You have the right to a fair hearing if you believe you qualified for expedited benefits and did not receive them on time.",
      "You have the right to request a referral to a food pantry while waiting for your benefits to be processed."
    ]
  },

  legalOptions: {
    en: [
      "Under 7 CFR § 273.2(i), local social services offices must process expedited SNAP applications within 7 calendar days.",
      "Applications for expedited SNAP are accepted at every county Department of Social Services office in New York State.",
      "Online applications through mybenefits.ny.gov include screening for expedited eligibility.",
      "The statewide SNAP helpline at 1-800-342-3009 can provide information about applying for expedited benefits.",
      "Arriving at the local DSS office early in the day may result in same-day or next-day issuance of benefits.",
      "If the full application process is not completed within 30 days, the expedited benefit will end and ongoing benefits will not be issued.",
      "Food pantries and community kitchens are available for immediate food needs while benefits are being processed. Local DSS offices can provide referrals.",
      "Free legal help with expedited SNAP applications is available through Legal Aid Society of Rochester at (585) 232-4090 and LawNY at (585) 325-2520."
    ]
  },

  example: {
    en: "James lost his job in Genesee County and had $40 left in his bank account. His rent was due in a week. He went to his county DSS office first thing in the morning and filled out a SNAP application. The office screened him for expedited benefits the same day. Because his income and savings were well below the threshold, he received his EBT card with emergency benefits within three days. He still had to go back for a full interview and bring his documents, but the expedited benefit kept him fed while he completed the process."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "SNAP applications, expedited processing, denials, and fair hearings",
      qualifier: "Low income residents of Monroe and surrounding counties",
      access: "Phone intake, walk-in, or referral",
      outcome: "Direct representation and advice on benefits cases",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Assistance of Western New York (LawNY)",
      focus: "Public benefits including SNAP, emergency assistance, and expedited processing",
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
      focus: "SNAP appeals, benefits issues, systemic advocacy",
      qualifier: "Low and moderate income residents statewide (all NYS counties except NYC)",
      access: "Phone intake at (585) 454-4060",
      outcome: "Direct representation, impact litigation, and policy advocacy",
      phone: "(585) 454-4060",
      url: "https://www.empirejustice.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "snap-rights-ny",
    "benefits-denial-appeal-ny",
    "fair-hearing-ny",
    "emergency-cash-assistance-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "emergency food",
    "need food now",
    "no money for food",
    "food stamps fast",
    "expedited SNAP",
    "hungry no money",
    "lost my job need food",
    "food help today",
    "emergency food stamps",
    "can't wait for food stamps"
  ],

  sources: [
    "https://otda.ny.gov/programs/snap/qanda.asp",
    "https://www.ny.gov/services/apply-snap",
    "https://www.fns.usda.gov/snap/recipient/eligibility",
    "https://www.law.cornell.edu/cfr/text/7/273.2"
  ],

  lastVerified: "2026-04-13",
  volatility: "low",
  emergencyFlag: true,
  disclaimer: true,
  categoryDisclaimer: null
};
