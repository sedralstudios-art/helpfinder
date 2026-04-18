export const SNAP_RIGHTS_NY = {
  id: "snap-rights-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "SNAP (Food Stamps) — Your Rights in New York" },

  summary: {
    en: "SNAP puts money on an EBT card each month to help pay for groceries. New York makes it easier to qualify than most states. Most households don't have to pass a savings test."
  },

  whoQualifies: {
    en: [
      "Single people and families with income at or below 200% of the Federal Poverty Level (that's most households in New York).",
      "Households with someone 60 or older, or someone with a disability, can qualify with higher income.",
      "People already getting SSI or Temporary Assistance often qualify automatically.",
      "College students at least half-time who meet work or program rules.",
      "Most New York households do NOT have to meet a savings test."
    ]
  },

  whatItMeans: {
    en: "SNAP stands for the Supplemental Nutrition Assistance Program. It used to be called food stamps. Each month, your benefits get loaded onto an EBT card. The card works like a debit card at grocery stores, farmers markets, and some online stores.\n\nHow much you get depends on how many people are in your household, your income, and what you can deduct. Deductions include rent, utilities, childcare, and medical costs.\n\nNew York makes it easier to qualify than most states. Most states use 130% of the Federal Poverty Level as the income cutoff. In New York, most households can qualify up to 200% of the Federal Poverty Level. After deductions, your \"net income\" must be at or below 100% of the Federal Poverty Level.\n\nIncome limits and benefit amounts change every October 1. Current numbers are at otda.ny.gov."
  },

  yourRights: {
    en: [
      "You have the right to apply for SNAP the same day you contact your local DSS.",
      "You have the right to a decision within 30 days.",
      "You have the right to expedited (faster) benefits within 7 days if you have very low income and almost no money.",
      "You have the right to appeal (fair hearing) if you are denied, cut, or closed out.",
      "You have 60 days after a bad decision to ask for a fair hearing.",
      "You have the right to apply online, by phone, by mail, by fax, or in person.",
      "You have the right to get application materials and help in your language.",
      "You have the right to use SNAP to buy seeds and plants that grow food.",
      "You have the right to pick someone (called an authorized rep) to apply for you or shop for you."
    ]
  },

  legalOptions: {
    en: [
      "Every county DSS in New York takes SNAP applications (NY Social Services Law § 95).",
      "You can apply online 24/7 at mybenefits.ny.gov.",
      "State SNAP helpline: 1-800-342-3009.",
      "Expedited (7-day) benefits are for people who have less than $150 in monthly income AND less than $100 in cash or bank accounts, OR whose rent and utilities are more than their total income (7 U.S.C. § 2020).",
      "To ask for a fair hearing: online at mybenefits.ny.gov, by phone, mail, or fax through your DSS.",
      "Free legal help for SNAP applications and denials: Legal Aid Society of Rochester (585-232-4090) and LawNY (585-325-2520).",
      "Empire Justice Center helps with SNAP appeals: (585) 454-4060.",
      "Starting March 1, 2026: if you're 18-64 and don't have kids under 14 at home, you have to work, train, or volunteer 80 hours a month. Otherwise SNAP only lasts 3 months out of every 3 years. There are exceptions for people with disabilities, pregnant people, veterans, and others. Details at otda.ny.gov/programs/snap/work-requirements.asp."
    ]
  },

  example: {
    en: "Maria is a single mother of two. She works part-time earning $2,100 a month. After deductions for rent, utilities, and childcare, her net income falls below the limit. She applied for SNAP online at mybenefits.ny.gov. Her local DSS called her for a phone interview within two weeks. She was approved. Now she gets monthly benefits on her EBT card. She uses the card at her local grocery store and at a farmers market in summer."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Public benefits, SNAP applications and denials, fair hearings",
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
      focus: "Public benefits including SNAP, Medicaid, public assistance, and emergency assistance",
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
      focus: "SNAP appeals, Medicaid, SSI/SSD benefits, systemic advocacy",
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
    "snap-expedited-ny",
    "benefits-denial-appeal-ny",
    "fair-hearing-ny",
    "tanf-public-assistance-ny",
    "wic-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "food stamps",
    "food help",
    "grocery money",
    "EBT card",
    "can't afford food",
    "hungry",
    "feeding my family",
    "SNAP benefits",
    "food assistance",
    "need food",
    "low income food",
    "food stamps denied"
  ],

  sources: [
    "https://otda.ny.gov/programs/snap/",
    "https://www.ny.gov/services/apply-snap",
    "https://www.fns.usda.gov/snap/recipient/eligibility",
    "https://www.nysenate.gov/legislation/laws/SOS/95",
    "https://otda.ny.gov/programs/snap/work-requirements.asp",
    "https://www.law.cornell.edu/uscode/text/7/2011"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
