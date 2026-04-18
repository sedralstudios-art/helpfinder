export const EPIC_PRESCRIPTION_SENIORS_NY = {
  id: "epic-prescription-seniors-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY ELD A9",
  status: "active",

  title: { en: "EPIC — Free and Low-Cost Prescription Drug Help for Seniors in New York" },

  summary: {
    en: "The Elderly Pharmaceutical Insurance Coverage (EPIC) program helps New York residents aged 65 and older pay for prescription drugs. EPIC works with Medicare Part D to lower out-of-pocket costs. It is income-based, and many seniors who qualify do not know about it."
  },

  whoQualifies: {
    en: [
      "Any New York resident aged 65 or older with income under $75,000 (single) or $100,000 (married).",
      "Any senior who has Medicare Part D and still struggles to afford prescriptions.",
      "Any senior who does not have Medicare Part D and needs help paying for medications.",
      "Any family member helping a senior apply for prescription assistance."
    ]
  },

  whatItMeans: {
    en: "EPIC is a New York State program run by the Department of Health. It has two fee plans based on income. The Fee Plan covers seniors with annual income up to $35,000 (single) or $50,000 (married) — they pay an annual fee based on income and then pay a copay of $3 to $20 per prescription. The Deductible Plan covers seniors with income from $35,001 to $75,000 (single) or $50,001 to $100,000 (married) — they pay full cost until they meet an annual deductible, then pay the same low copays. EPIC is designed to work alongside Medicare Part D. For seniors who have Part D, EPIC helps pay the Part D deductible, copays, and costs during the coverage gap (the donut hole). For seniors who do not have Part D, EPIC covers prescriptions directly, but at higher cost — enrollment in Part D is strongly encouraged. EPIC covers most prescription drugs. Some over-the-counter medications are covered if prescribed by a doctor. EPIC does not cover drugs already fully covered by another program. The application is a one-page form. There is no asset test — only income matters."
  },

  yourRights: {
    en: [
      "Any NYS resident aged 65 or older with qualifying income has the right to enroll in EPIC.",
      "EPIC enrollment is year-round — there is no limited enrollment period.",
      "A senior enrolled in EPIC has the right to low copays on covered prescriptions ($3 to $20 per script).",
      "EPIC covers most prescription medications. If a drug is denied, the senior can appeal.",
      "A senior does not need to give up Medicare Part D to use EPIC — the two programs work together.",
      "There is no asset test. A senior is not disqualified for owning a home, car, or savings."
    ]
  },

  legalOptions: {
    en: [
      "Apply for EPIC by calling (800) 332-3742 or downloading the application at health.ny.gov/health_care/epic.",
      "Monroe County Office for the Aging at (585) 753-6280 can help seniors apply for EPIC and other prescription programs.",
      "Lifespan of Greater Rochester at (585) 244-8400 provides free counseling on prescription assistance programs for seniors.",
      "EPIC staff can help seniors find the best Medicare Part D plan to pair with EPIC coverage.",
      "If a prescription is denied by EPIC, the senior can call (800) 332-3742 to request a review."
    ]
  },

  example: {
    en: "Frank, 72, lives in Irondequoit on a fixed income of $28,000 a year. He takes four prescription medications that cost him over $300 a month out of pocket even with Medicare Part D. His daughter helped him apply for EPIC. He qualified for the Fee Plan with an annual fee of $8. His prescriptions now cost $3 to $7 each. His monthly drug costs dropped from $300 to about $20."
  },

  counsel: [
    {
      type: "government",
      name: "NYS EPIC Program",
      focus: "Prescription drug assistance for seniors, EPIC enrollment",
      qualifier: "NYS residents aged 65+ with qualifying income",
      access: "Phone at (800) 332-3742",
      outcome: "Enrollment, prescription coverage, copay reduction",
      phone: "(800) 332-3742",
      url: "https://www.health.ny.gov/health_care/epic/",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "Lifespan of Greater Rochester",
      focus: "Senior services, benefits counseling, prescription assistance",
      qualifier: "Seniors in the Greater Rochester area",
      access: "Phone at (585) 244-8400",
      outcome: "Benefits counseling, application assistance, referrals",
      phone: "(585) 244-8400",
      url: "https://www.lifespan-roch.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "prescription-assistance-ny",
    "medicare-savings-program-ny",
    "medicare-vs-medicaid-ny",
    "health-insurance-marketplace-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "EPIC",
    "prescription help seniors",
    "senior prescription program",
    "cheap prescriptions",
    "prescription assistance",
    "EPIC program New York",
    "elderly prescription coverage",
    "medication help seniors",
    "drug costs seniors",
    "Medicare Part D help",
    "prescription copay help"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/ELD/A9",
    "https://www.health.ny.gov/health_care/epic/",
    "https://www.health.ny.gov/health_care/epic/questions_and_answers.htm"
  ],

  lastVerified: "2026-04-17",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
