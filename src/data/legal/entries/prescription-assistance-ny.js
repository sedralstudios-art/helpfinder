export const PRESCRIPTION_ASSISTANCE_NY = {
  id: "prescription-assistance-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Help Paying for Prescriptions in New York" },

  summary: {
    en: "Prescription costs are one of the biggest reasons people skip medications. Multiple programs exist in New York to reduce or eliminate prescription costs — Medicaid covers prescriptions with no or very low co-pays, EPIC helps seniors, manufacturer patient assistance programs provide free brand-name drugs, and the 340B program offers discounted prices at certain pharmacies. Most people qualify for at least one."
  },

  whoQualifies: {
    en: [
      "Anyone who cannot afford their prescriptions — regardless of insurance status.",
      "Medicaid recipients: most prescriptions are covered with no co-pay or a very small co-pay.",
      "Seniors 65+: the EPIC program (Elderly Pharmaceutical Insurance Coverage) provides additional prescription coverage beyond Medicare.",
      "Uninsured or underinsured: manufacturer patient assistance programs often provide free medications for people below certain income levels."
    ]
  },

  whatItMeans: {
    en: "There is no single program that covers everyone, but a combination of programs can bring most prescriptions to zero or near-zero cost. Medicaid: covers prescriptions for all Medicaid recipients. Most generic drugs have no co-pay. Some brand-name drugs require a small co-pay. The Medicaid formulary (list of covered drugs) is extensive. If a medication is not on the formulary, the doctor can request a prior authorization. EPIC (Elderly Pharmaceutical Insurance Coverage): a state program for New York residents 65+ with income up to specified limits (check the EPIC website for current thresholds). EPIC covers co-pays and deductibles that Medicare Part D does not. Manufacturer patient assistance programs: most major drug makers offer free medications to people who meet income criteria. Applications are through the manufacturer or through the prescribing doctor. NeedyMeds (needymeds.org) and RxAssist (rxassist.org) are free databases that match patients with available programs. 340B pharmacies: federally qualified health centers and certain hospitals buy drugs at steep discounts under the federal 340B program and pass the savings to patients. Trillium Health and other community health centers in Rochester participate."
  },

  yourRights: {
    en: [
      "Medicaid recipients have the right to covered prescriptions with no or minimal co-pay.",
      "If a Medicaid prescription is denied (not on formulary), the doctor can request prior authorization. If denied, a fair hearing can be requested.",
      "EPIC members have the right to coverage that fills the gaps in Medicare Part D.",
      "No one can be turned away from a hospital emergency department for inability to pay for emergency medication.",
      "Pharmacies must inform customers about generic alternatives that may be cheaper."
    ]
  },

  legalOptions: {
    en: [
      "For Medicaid prescription issues: the managed care plan's member services number is on the Medicaid card. Denials can be appealed through the plan's internal process and then through a Medicaid fair hearing.",
      "For EPIC: applications and information are available at health.ny.gov/health_care/epic/ or by calling (800) 332-3742.",
      "For manufacturer patient assistance: NeedyMeds at needymeds.org and RxAssist at rxassist.org both provide free searchable databases of programs. The prescribing doctor's office can often help with applications.",
      "Community health centers with 340B pricing in Rochester include Trillium Health at (585) 545-7200 and Anthony L. Jordan Health Center at (585) 423-2400.",
      "Free help navigating prescription assistance programs is available through the Community Health Advocates program at Legal Aid Society of Rochester at (585) 232-4090."
    ]
  },

  example: {
    en: "A diabetic patient without insurance is paying over $300/month for insulin. She contacts the manufacturer's patient assistance program through her doctor's office and qualifies for free insulin based on her income. She also switches her other medications to generics at a 340B pharmacy (Trillium Health), where the prices are a fraction of retail. Her total monthly prescription cost drops from $300+ to under $20."
  },

  counsel: [
    {
      type: "free",
      name: "EPIC (Elderly Pharmaceutical Insurance Coverage)",
      focus: "Prescription coverage for seniors 65+",
      qualifier: "NY residents 65+ within income limits",
      access: "Phone or online",
      outcome: "Prescription co-pay and deductible coverage",
      phone: "(800) 332-3742",
      url: "https://www.health.ny.gov/health_care/epic/",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "NeedyMeds (Patient Assistance Database)",
      focus: "Matching patients with free and discounted medication programs",
      qualifier: "Anyone in the US",
      access: "Online database",
      outcome: "Program matching and application information",
      phone: "(800) 503-6897",
      url: "https://www.needymeds.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "medicaid-ny",
    "health-insurance-denial-ny",
    "medicare-savings-program-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "prescription help",
    "cannot afford medication",
    "free medication",
    "prescription assistance",
    "EPIC",
    "patient assistance program",
    "340B",
    "insulin help",
    "Medicaid prescriptions",
    "drug cost",
    "NeedyMeds",
    "generic drugs"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/ELD/A9",
    "https://www.health.ny.gov/health_care/epic/",
    "https://www.needymeds.org",
    "https://www.hrsa.gov/opa/index.html"
  ],

  lastVerified: "2026-04-16",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
