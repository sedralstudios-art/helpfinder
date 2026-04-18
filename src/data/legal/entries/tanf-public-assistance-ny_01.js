export const TANF_PUBLIC_ASSISTANCE_NY = {
  id: "tanf-public-assistance-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Temporary Assistance — Cash Help for Families and Adults in Need" },

  summary: {
    en: "Temporary Assistance is cash help for people who can't pay for basic needs like rent, food, and utilities. New York has two programs: Family Assistance for households with kids, and Safety Net Assistance for single adults and couples without kids."
  },

  whoQualifies: {
    en: [
      "Families with a kid under 18 living with a parent, guardian, or relative caretaker. Income and savings must be very low.",
      "Women in the last 4 months of pregnancy.",
      "Single adults and couples without kids with very low income and savings may qualify for Safety Net Assistance.",
      "People who can't work, can't find a job, or whose job doesn't pay enough to cover basic needs.",
      "You must live in New York State.",
      "You must be a U.S. citizen, a U.S. national, or a green card holder or other lawful immigrant."
    ]
  },

  whatItMeans: {
    en: "New York has two Temporary Assistance programs:\n\nFamily Assistance is for families with kids. It's funded by the federal TANF program (Temporary Assistance for Needy Families). Adults on Family Assistance have a 5-year lifetime limit (60 months total).\n\nSafety Net Assistance is for single adults, couples without kids, and families that have used up their 5 years. It's funded by the state and county. There is no federal time limit.\n\nSometimes the cash goes straight to your landlord or utility company instead of to you. How much you get depends on your household size, income, and where you live.\n\nAdults who can work usually have to do work activities, job training, or education while getting benefits.\n\nWhen you apply, you're also checked for SNAP and Medicaid at the same time.\n\nIf you get Family Assistance, you usually have to help the county collect child support from the other parent. You can skip this if you have a good reason, like domestic violence."
  },

  yourRights: {
    en: [
      "You have the right to apply for Temporary Assistance any time at your local DSS office.",
      "You have the right to a decision in 30 days for Family Assistance or 45 days for Safety Net Assistance.",
      "You have the right to emergency help if you are facing eviction, a utility shutoff, or homelessness.",
      "You have the right to be checked for SNAP and Medicaid when you apply.",
      "You have the right to appeal (fair hearing) if you are denied, cut, or closed out.",
      "You have 60 days after a bad decision to ask for a fair hearing.",
      "You have the right to keep getting benefits during the fair hearing — if you ask for the hearing before the change starts.",
      "You have the right to an exception to the 5-year Family Assistance time limit if you can't work because of a disability. This includes disabilities from domestic violence."
    ]
  },

  legalOptions: {
    en: [
      "Every county DSS in New York takes applications (NY Social Services Law; 42 U.S.C. § 601).",
      "You can apply online at mybenefits.ny.gov.",
      "The state info line is 1-800-342-3009.",
      "Emergency help may be available for eviction, utility shutoff, or homelessness. Apply in person at your local DSS office.",
      "To ask for a fair hearing: call 1-800-342-3334, go online at otda.ny.gov, or write to Fair Hearing Section, NYS OTDA, P.O. Box 1930, Albany, NY 12201.",
      "If you have a good reason not to help collect child support (like domestic violence), you can ask DSS for a \"good cause\" determination.",
      "Free legal help: Legal Aid Society of Rochester (585-232-4090) and LawNY (585-325-2520).",
      "Empire Justice Center handles benefits advocacy and bigger-picture cases at (585) 454-4060."
    ]
  },

  example: {
    en: "Tanya is a single mother with two young children. She was working part-time, but her hours were cut. She couldn't afford rent anymore. She applied for Temporary Assistance at the Monroe County DSS office. Because she has kids, she was put in the Family Assistance program. The same application also got her SNAP and Medicaid. The cash helps cover rent and basics while she goes through job training set up by DSS."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Public benefits, Temporary Assistance, fair hearings, housing",
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
      focus: "Public benefits including public assistance, emergency assistance, SNAP",
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
      focus: "Benefits advocacy, systemic issues, policy reform",
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
    "medicaid-ny",
    "emergency-cash-assistance-ny",
    "childcare-assistance-ny",
    "benefits-denial-appeal-ny",
    "fair-hearing-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "cash assistance",
    "welfare",
    "public assistance",
    "TANF",
    "need money for rent",
    "can't pay bills",
    "no income",
    "need help with bills",
    "family assistance",
    "safety net",
    "emergency money",
    "single parent help"
  ],

  sources: [
    "https://otda.ny.gov/programs/temporary-assistance/",
    "https://otda.ny.gov/policy/tanf/",
    "https://www.law.cornell.edu/uscode/text/42/601"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
