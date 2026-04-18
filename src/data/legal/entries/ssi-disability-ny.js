export const SSI_DISABILITY_NY = {
  id: "ssi-disability-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "42 USC 1381",
  status: "active",

  title: { en: "SSI — Cash for People with Disabilities or Low-Income Seniors" },

  summary: {
    en: "SSI stands for Supplemental Security Income. It's a monthly check for people with very little income and savings. It's for people 65 or older, blind, or with a disability. No work history is needed. New York adds its own bonus on top of the federal check."
  },

  whoQualifies: {
    en: [
      "Adults 65 and older with low income and savings.",
      "Adults of any age who are blind or have a disability that keeps them from working. The disability has to last at least 12 months or end in death.",
      "Children under 18 with a serious physical or mental condition that affects daily life.",
      "Your income and savings must be very low. There are federal limits.",
      "You must be a U.S. citizen, a U.S. national, or a lawful immigrant who meets the rules.",
      "No past work is needed. SSI is based only on need and your medical condition."
    ]
  },

  whatItMeans: {
    en: "SSI is a federal program run by the Social Security Administration. It gives you a monthly check to help pay for food, clothing, and a place to live.\n\nThe monthly check goes up a little each year to keep up with prices. New York adds its own extra check on top — called the State Supplement (SSP). Your total amount depends on your income, where you live, and who lives with you.\n\nSavings that count include cash, bank accounts, and some property. Your home, one car, and your personal things usually don't count.\n\nIn New York, if you get SSI, you automatically get Medicaid. You also automatically qualify on the income side for SNAP.\n\nCurrent amounts, savings limits, and income rules are at ssa.gov."
  },

  yourRights: {
    en: [
      "You have the right to apply for SSI any time by contacting Social Security.",
      "You have the right to a decision. If approved, benefits can go back to the month you applied.",
      "You have the right to appeal if you are denied. There are 4 steps: ask for a second look, hearing with a judge, Appeals Council review, and federal court.",
      "You have the right to keep getting benefits during the appeal — if you file the appeal on time.",
      "You have the right to a lawyer or advocate at every step.",
      "You have the right to a Trial Work Period — a chance to try working without losing SSI right away.",
      "You have the right to automatic Medicaid in New York when you get SSI.",
      "You have the right to the New York State Supplement on top of your federal SSI check."
    ]
  },

  legalOptions: {
    en: [
      "You can't apply for SSI fully online. You apply at any Social Security office. Schedule an appointment first (42 U.S.C. § 1381).",
      "Social Security phone: 1-800-772-1213 (TTY 1-800-325-0778). Monday-Friday, 7am-7pm.",
      "New York's State Supplement (SSP) is run by OTDA. Info: 1-855-488-0541 or otda.ny.gov/programs/ssp/.",
      "If you are denied, you have 60 days to ask for a second look. If that's denied, you can ask for a hearing with a judge.",
      "Free legal help with SSI: Empire Justice Center (585-454-4060) and Legal Aid Society of Rochester (585-232-4090).",
      "Many disability lawyers work on \"contingency\" — they only get paid if you win, and their fee comes out of your back pay. The fee is capped by federal law.",
      "ABLE accounts let people whose disability started before age 46 save money without losing SSI. More at ablenrc.org."
    ]
  },

  example: {
    en: "Marcus is 41. He has a spinal condition that keeps him from working. He has never worked long enough to qualify for SSDI. He applied for SSI at his local Social Security office. After turning in medical records and doing an interview, he was approved. Now he gets a monthly SSI check plus the New York State Supplement. He got Medicaid automatically and was approved for SNAP without a separate application."
  },

  counsel: [
    {
      type: "free",
      name: "Empire Justice Center",
      focus: "Disability benefits, SSI, SSD, Medicaid, systemic advocacy",
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
      focus: "Public benefits, SSI applications and appeals, disability benefits",
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
      focus: "Public benefits, consumer issues, housing",
      qualifier: "Low income residents in 14 Western NY counties including Monroe",
      access: "Phone intake at (585) 325-2520",
      outcome: "Direct representation",
      phone: "(585) 325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "ssdi-ny",
    "disability-medicaid-ny",
    "medicaid-ny",
    "snap-rights-ny",
    "benefits-denial-appeal-ny",
    "fair-hearing-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "disability benefits",
    "SSI",
    "can't work disabled",
    "disability check",
    "disability income",
    "disabled no income",
    "blind benefits",
    "senior income",
    "social security disability",
    "disability application",
    "disability denied",
    "child disability benefits"
  ],

  sources: [
    "https://www.ssa.gov/ssi",
    "https://www.ssa.gov/ssi/text-eligibility-ussi.htm",
    "https://www.ssa.gov/benefits/disability/qualify.html",
    "https://otda.ny.gov/programs/ssp/",
    "https://otda.ny.gov/programs/disability-determinations/",
    "https://www.law.cornell.edu/uscode/text/42/1381"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
