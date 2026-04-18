export const HEALTH_INSURANCE_MARKETPLACE_NY = {
  id: "health-insurance-marketplace-ny",
  category: "health",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "42 USC 18031",
  status: "active",

  title: { en: "NY State of Health — How to Get Health Insurance If You Do Not Have It" },

  summary: {
    en: "NY State of Health is New York's health insurance marketplace. It is where people without employer insurance can shop for coverage, find out if they qualify for Medicaid, or get help paying for a private plan. Open enrollment happens once a year, but certain life changes allow sign-up at any time."
  },

  whoQualifies: {
    en: [
      "Anyone who does not have health insurance through a job.",
      "Anyone who lost their job and their employer health insurance.",
      "Anyone who aged out of a parent's plan at age 26.",
      "Anyone who had a life change — marriage, divorce, new baby, or moving to New York — that qualifies for special enrollment.",
      "Anyone who wants to check if they qualify for Medicaid or subsidized coverage."
    ]
  },

  whatItMeans: {
    en: "NY State of Health (nystateofhealth.ny.gov) is the official marketplace where New Yorkers can compare and buy health insurance plans. Plans are organized into metal tiers — Bronze, Silver, Gold, and Platinum — based on how costs are shared between the plan and the patient. Bronze plans have the lowest monthly cost but highest out-of-pocket costs. Platinum plans cost more per month but cover more when care is needed. Many people qualify for financial help. The Essential Plan is a low-cost option for people who earn too much for Medicaid but not enough for a regular plan — premiums are $0 to $20 per month with low copays. For people with higher incomes, tax credits can reduce the monthly premium for a Qualified Health Plan. Open enrollment is typically November through January. Outside of that window, a qualifying life event (losing other coverage, getting married, having a baby, moving) allows special enrollment within 60 days. Medicaid and Child Health Plus have no enrollment deadline — applications are accepted year-round."
  },

  yourRights: {
    en: [
      "Every New Yorker has the right to apply for health insurance through the marketplace regardless of pre-existing conditions.",
      "No plan sold through the marketplace can deny coverage or charge more because of a health condition.",
      "A person who qualifies for financial assistance has the right to have it applied immediately to reduce monthly premiums.",
      "A person who loses employer coverage has the right to a 60-day special enrollment period.",
      "Medicaid and Child Health Plus applications are accepted year-round with no enrollment deadline.",
      "Free in-person help with applications is available through certified navigators and enrollment assistors."
    ]
  },

  legalOptions: {
    en: [
      "Applications can be submitted online at nystateofhealth.ny.gov, by phone at (855) 355-5777, or in person with a navigator.",
      "In Monroe County, free enrollment help is available through Finger Lakes Health Systems Agency at (585) 461-3520.",
      "Anthony L. Jordan Health Center provides free navigator services at (585) 423-2800.",
      "The Essential Plan ($0-$20/month) is available year-round for individuals earning up to about $19,000 and families up to about $39,000 (2-person household). Income limits change annually.",
      "If a marketplace plan is denied or a subsidy amount seems wrong, the applicant can request a fair hearing through the marketplace.",
      "COBRA coverage (continuing employer insurance after a job loss) is usually much more expensive than a marketplace plan. The marketplace often offers better rates for the same or better coverage."
    ]
  },

  example: {
    en: "After losing his restaurant job, Deon had 60 days to find new health insurance. He went to nystateofhealth.ny.gov and entered his income. Because he earned about $22,000 the previous year, the system showed he qualified for the Essential Plan at $0 per month. He enrolled the same day. His coverage started the first of the next month. When he got a new job three months later with employer insurance, he ended his marketplace plan."
  },

  counsel: [
    {
      type: "free",
      name: "Finger Lakes Health Systems Agency — Navigator Program",
      focus: "Free health insurance enrollment help, marketplace navigation",
      qualifier: "Anyone in the Finger Lakes region including Monroe County",
      access: "Phone at (585) 461-3520",
      outcome: "In-person help comparing plans, submitting applications, and resolving issues",
      phone: "(585) 461-3520",
      url: "https://www.flhsa.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "government",
      name: "NY State of Health — Customer Service",
      focus: "Health insurance marketplace, enrollment, plan questions",
      qualifier: "Any NYS resident",
      access: "Phone at (855) 355-5777 or online at nystateofhealth.ny.gov",
      outcome: "Enrollment, plan comparison, subsidy determination",
      phone: "(855) 355-5777",
      url: "https://nystateofhealth.ny.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "medicaid-ny",
    "uninsured-health-care-ny",
    "emergency-medicaid-ny",
    "health-insurance-denial-ny",
    "dental-care-low-income-ny-program"
  ],

  relatedHelpResources: [],

  tags: [
    "health insurance",
    "NY State of Health",
    "marketplace",
    "no insurance",
    "Essential Plan",
    "Obamacare",
    "ACA",
    "health insurance marketplace",
    "lost job insurance",
    "open enrollment",
    "free health insurance",
    "low cost insurance"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/42/18031",
    "https://www.law.cornell.edu/uscode/text/42/18071",
    "https://nystateofhealth.ny.gov",
    "https://info.nystateofhealth.ny.gov/essentialplan"
  ],

  lastVerified: "2026-04-17",
  volatility: "high",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
