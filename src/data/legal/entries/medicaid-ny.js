export const MEDICAID_NY = {
  id: "medicaid-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY SOS 366",
  status: "active",

  title: { en: "Medicaid — Free Health Insurance in New York" },

  summary: {
    en: "Medicaid is a free or low-cost health insurance program for people with low income. New York expanded Medicaid so that most adults under 65 can qualify based on income alone, with no savings or asset test."
  },

  whoQualifies: {
    en: [
      "Adults aged 19 to 64 with household income at or below 138% of the Federal Poverty Level.",
      "Pregnant women with household income at or below 223% of the Federal Poverty Level.",
      "Infants under age 1 with household income at or below 223% of the Federal Poverty Level.",
      "Children ages 1 through 18 with household income at or below 154% of the Federal Poverty Level.",
      "Adults aged 65 and older who meet both income and asset limits.",
      "People with disabilities who meet both income and asset limits.",
      "People already receiving SSI are generally automatically eligible.",
      "Most adults under 65 do not need to pass an asset or savings test."
    ]
  },

  whatItMeans: {
    en: "Medicaid pays for a wide range of health care services. This includes doctor visits, hospital stays, emergency room visits, and prescription drugs. It also covers mental health treatment, substance use treatment, lab tests, X-rays, and medical transportation. For children, Medicaid also covers dental care, vision, hearing, and developmental screenings. Dental coverage for adults is limited but available for certain services. New York uses two sets of rules to determine eligibility. For most people under 65, the state uses MAGI rules. MAGI stands for Modified Adjusted Gross Income. Under MAGI, only income matters — there is no test for savings, property, or other assets. For people aged 65 and older and people with certain disabilities, New York uses Non-MAGI rules. Under Non-MAGI, both income and assets are counted. Once approved, Medicaid coverage continues for 12 months even if income changes during that period. Income limits and asset thresholds are updated each year. Current figures are published on the NY State of Health website and by the NYS Department of Health."
  },

  yourRights: {
    en: [
      "You have the right to apply for Medicaid at any time. There is no limited enrollment period.",
      "You have the right to receive a decision within 45 days of submitting a complete application, or 90 days if the application involves a disability determination.",
      "You have the right to 12 months of continuous coverage once approved, even if your income changes temporarily.",
      "You have the right to choose your own health care provider from any provider that accepts Medicaid.",
      "You have the right to a fair hearing if your application is denied, your benefits are reduced, or your coverage is ended.",
      "You have 60 days from the date of an bad decision notice to request a fair hearing.",
      "You have the right to continue receiving benefits during a fair hearing if you request the hearing before the effective date of the change.",
      "You have the right to receive application help and materials in your preferred language.",
      "You have the right to emergency Medicaid coverage for emergency medical conditions regardless of immigration status."
    ]
  },

  legalOptions: {
    en: [
      "Under NY Social Services Law § 366, Medicaid applications are accepted at every county Department of Social Services office across New York State.",
      "Online applications are available through NY State of Health at nystateofhealth.ny.gov.",
      "The NY State of Health helpline is available at 1-855-355-5777.",
      "General Medicaid information is available through the NYS Department of Health at 1-800-541-2831.",
      "Fair hearings may be requested by calling 1-800-342-3334, online, or by writing to the Fair Hearing Section at NYS OTDA, P.O. Box 1930, Albany, NY 12201.",
      "Under NY Social Services Law § 366-a, applicants with an immediate need for personal care services are entitled to an expedited eligibility determination within 7 days.",
      "Children who earn too much for Medicaid may qualify for Child Health Plus, which covers children in households with income up to 400% of the Federal Poverty Level.",
      "Adults who earn slightly too much for Medicaid may qualify for the Essential Plan through NY State of Health, which offers free or low-cost coverage.",
      "Free legal help with Medicaid applications, denials, and fair hearings is available through LawNY at (585) 325-2520 and Empire Justice Center at (585) 454-4060."
    ]
  },

  example: {
    en: "Darnell is 34 and works part-time at a warehouse in Monroe County. He earns about $1,200 a month and has no other income. He applied for Medicaid online through NY State of Health. Because his income is below the limit for a single adult, he was approved within three weeks. His Medicaid card arrived by mail. He now sees a doctor for a condition he had been putting off for two years. His prescriptions, lab work, and appointments are fully covered."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Assistance of Western New York (LawNY)",
      focus: "Health law, Medicaid, Medicare, advance care directives",
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
      focus: "Public benefits, Medicaid applications and denials, fair hearings",
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
    "medicaid-spend-down-ny",
    "disability-medicaid-ny",
    "benefits-denial-appeal-ny",
    "fair-hearing-ny",
    "medicare-savings-program-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "health insurance",
    "free health insurance",
    "Medicaid",
    "can't afford doctor",
    "no health insurance",
    "medical bills",
    "need a doctor",
    "prescription help",
    "low income insurance",
    "hospital bills",
    "mental health coverage",
    "dental coverage"
  ],

  sources: [
    "https://www.health.ny.gov/health_care/medicaid/",
    "https://nystateofhealth.ny.gov",
    "https://www.nysenate.gov/legislation/laws/SOS/366",
    "https://www.nysenate.gov/legislation/laws/SOS/366-A",
    "https://www.law.cornell.edu/uscode/text/42/1396"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
