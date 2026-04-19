export const EMERGENCY_CASH_ASSISTANCE_NY = {
  id: "emergency-cash-assistance-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "42 USC 604",
  status: "active",

  title: { en: "Emergency Cash Help — One-Time Money for Rent, Utilities, and Crises" },

  summary: {
    en: "A person about to be evicted, lose heat, or become homeless may qualify for a one-time emergency grant. You don't have to be on welfare to apply."
  },

  whoQualifies: {
    en: [
      "Families with a child under 18 (or under 19 and in high school) or pregnant people may get Emergency Assistance to Families (EAF). Your income must be at or below 200% of the Federal Poverty Level.",
      "Single adults and couples without kids may get Emergency Safety Net Assistance (ESNA). Your income must be at or below 125% of the Federal Poverty Level.",
      "People on SSI or SSP can get Emergency Assistance to Adults (EAA) if their health or safety is in danger.",
      "You don't have to be getting regular monthly Temporary Assistance to apply.",
      "The emergency has to be something sudden that you didn't see coming and can't control.",
      "You must be a New York State resident. You must be a U.S. citizen or a green card holder or another lawful immigrant."
    ]
  },

  whatItMeans: {
    en: "Emergency help is a one-time grant. It is not regular monthly benefits. It covers things like:\n\n1) Rent you owe, to stop an eviction.\n2) Heat, gas, or power about to be shut off.\n3) Being homeless or about to be homeless.\n4) Other crises that threaten your health or safety.\n\nThe amount depends on your situation. The money usually goes straight to your landlord, utility company, or vendor — not to you. For families with kids, the grant is usually free money you don't pay back. For single adults and couples without kids, help with rent or utility bills may be a no-interest loan. You sign a repayment paper when you are approved. Rent loans usually have to be paid back in 12 months. Utility loans usually have to be paid back in 24 months.\n\nWhen you apply, your local DSS office has to interview you and decide the same day."
  },

  yourRights: {
    en: [
      "You have the right to apply for emergency help at your local DSS office, even if you aren't getting regular monthly benefits.",
      "You have the right to be interviewed and get a decision the same day.",
      "You have the right to emergency help to stop an eviction, heat or power shutoff, or homelessness.",
      "You have the right to appeal (fair hearing) if you are denied.",
      "You have 60 days after a denial to ask for a fair hearing.",
      "You have the right to keep getting your other benefits while a fair hearing is pending."
    ]
  },

  legalOptions: {
    en: [
      "Every county DSS office in New York takes emergency applications (NY Social Services Law; federal TANF rules).",
      "Emergency applications are taken in person at the DSS office — the full online pathway is not available for emergency cases.",
      "The state info line is 1-800-342-3009.",
      "For families (EAF): income at or below 200% of the Federal Poverty Level on the date you apply. There is no savings test, but your available money is looked at.",
      "For singles and childless couples (ESNA): income at or below 125% of the Federal Poverty Level. This limit does not apply for fuel or utility emergencies or disasters.",
      "ESNA rent or utility bill help may have to be paid back as a no-interest loan. EAF is usually not paid back.",
      "A fair hearing can be requested at 1-800-342-3334, online at otda.ny.gov, or by mail to Fair Hearing Section, NYS OTDA, P.O. Box 1930, Albany, NY 12201.",
      "Free legal help for emergency help applications and denials: Legal Aid Society of Rochester (585-232-4090) and LawNY (585-325-2520)."
    ]
  },

  example: {
    en: "Carla is a single mother with one child. She fell behind on rent after missing two weeks of work from an illness. Her landlord gave her a notice to pay or leave. Carla went to Monroe County DSS and applied for emergency help. Because she has a child, she was checked for EAF. Her income was under 200% of the Federal Poverty Level. DSS called her landlord and paid the back rent directly. Carla got to stay, and she didn't have to pay the money back."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Public benefits, emergency assistance, eviction prevention, fair hearings",
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
      focus: "Housing, eviction defense, public benefits, emergency assistance",
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
      focus: "Benefits advocacy, housing, systemic issues",
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
    "tanf-public-assistance-ny",
    "heap-utility-assistance-ny",
    "eviction-process-ny",
    "snap-expedited-ny",
    "benefits-denial-appeal-ny",
    "fair-hearing-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "emergency money",
    "rent help",
    "about to be evicted",
    "utility shutoff",
    "behind on rent",
    "facing eviction",
    "homeless help",
    "one shot deal",
    "emergency grant",
    "emergency assistance",
    "can't pay rent",
    "heat shutoff",
    "emergency housing"
  ],

  sources: [
    "https://otda.ny.gov/programs/temporary-assistance/",
    "https://www.law.cornell.edu/uscode/text/42/604"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: true,
  disclaimer: true,
  categoryDisclaimer: null
};
