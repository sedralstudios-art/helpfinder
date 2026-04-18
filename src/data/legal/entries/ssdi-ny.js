export const SSDI_NY = {
  id: "ssdi-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "42 USC 423",
  status: "active",

  title: { en: "SSDI — Disability Checks Based on Your Work History" },

  summary: {
    en: "SSDI stands for Social Security Disability Insurance. It pays monthly checks to people who can't work because of a disability. It's based on your past work and the Social Security taxes you already paid. There is no income or savings limit to qualify."
  },

  whoQualifies: {
    en: [
      "Adults 18 to 64 with a disability that keeps them from working full time.",
      "The disability has to be expected to last at least 12 months, or to end in death.",
      "You must have earned enough Social Security work credits from past jobs. How many you need depends on your age when the disability started.",
      "Younger workers who become disabled need fewer credits.",
      "Some family members — a spouse, former spouse, or kids — may also get checks based on a disabled worker's record.",
      "There is no income or savings test. SSDI looks only at your work history and medical condition."
    ]
  },

  whatItMeans: {
    en: "SSDI is a federal program run by the Social Security Administration (SSA). It pays monthly money to people who can't work anymore because of a disability. How much you get depends on what you earned over the years you worked. Everyone's check is different. You can see your estimate at ssa.gov.\n\nAfter you are approved, you wait 5 months before payments start. After 24 months on SSDI, you get Medicare.\n\nSSDI is different from SSI. SSI is for people with little or no work history, and it's based on how much money you have now. You can get both SSDI and SSI at the same time if your SSDI check is small."
  },

  yourRights: {
    en: [
      "You have the right to apply for SSDI any time by contacting Social Security.",
      "You have the right to apply online at ssa.gov, by phone, or in person at a local office.",
      "You have the right to a decision. Most first decisions come in 3 to 6 months.",
      "You have the right to appeal if you are denied. There are 4 appeal steps: ask for a second look, request a hearing with a judge, ask the Appeals Council to review it, and finally file in federal court.",
      "You have 60 days after a denial to file each appeal.",
      "You have the right to a lawyer or advocate at every step.",
      "You have the right to a Trial Work Period — a chance to try working for up to 9 months without losing your benefits.",
      "You have the right to Medicare after 24 months on SSDI."
    ]
  },

  legalOptions: {
    en: [
      "You can apply online at ssa.gov/disability, by phone at 1-800-772-1213 (TTY 1-800-325-0778), or in person at any Social Security office (42 U.S.C. § 423).",
      "A free my Social Security account at ssa.gov shows estimated check amounts and work history.",
      "In New York, the state's Disability Determinations Division decides whether you meet the disability rules, working for Social Security.",
      "If you are denied, you have 60 days to ask for a second look (reconsideration). If that's denied, you have 60 days to ask for a hearing with a judge.",
      "Many disability lawyers work on \"contingency.\" That means they only get paid if you win, and their fee comes out of your back pay. Federal law caps the fee.",
      "Free legal help with SSDI: Empire Justice Center (585-454-4060) and Legal Aid Society of Rochester (585-232-4090).",
      "People on SSDI may also qualify for SSI, SNAP, Medicaid, or other help depending on their income."
    ]
  },

  example: {
    en: "Angela worked as a home health aide for 15 years. A back injury made it impossible to keep working. She applied for SSDI online. Her first application was denied. She appealed and asked for a hearing with a judge. A disability lawyer helped her get more medical records and prepare. The judge approved her claim. After the 5-month wait, her monthly SSDI check started. Two years later, she got Medicare."
  },

  counsel: [
    {
      type: "free",
      name: "Empire Justice Center",
      focus: "Disability benefits, SSDI, SSI, appeals, systemic advocacy",
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
      focus: "Public benefits, disability applications and appeals, fair hearings",
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
    "ssi-disability-ny",
    "disability-medicaid-ny",
    "medicaid-ny",
    "benefits-denial-appeal-ny",
    "fair-hearing-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "disability benefits",
    "SSDI",
    "social security disability",
    "can't work anymore",
    "disability insurance",
    "disability denied",
    "disability appeal",
    "work injury",
    "disability check",
    "disabled worker",
    "back injury disability",
    "disability application"
  ],

  sources: [
    "https://www.ssa.gov/benefits/disability/",
    "https://www.ssa.gov/benefits/disability/qualify.html",
    "https://otda.ny.gov/programs/disability-determinations/",
    "https://www.law.cornell.edu/uscode/text/42/423"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
