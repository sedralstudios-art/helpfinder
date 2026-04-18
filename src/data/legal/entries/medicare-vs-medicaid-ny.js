export const MEDICARE_VS_MEDICAID_NY = {
  id: "medicare-vs-medicaid-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Medicare vs. Medicaid — What Each One Covers and Who Qualifies" },

  summary: {
    en: "Medicare and Medicaid sound alike but are different programs. Medicare is federal health insurance for people 65 and older and some younger people with disabilities. Medicaid is a state program for people with low income. Some people qualify for both at the same time."
  },

  whoQualifies: {
    en: [
      "Anyone turning 65 who wants to understand their Medicare options.",
      "Anyone with a disability who has been receiving SSDI for 24 months and is being enrolled in Medicare.",
      "Anyone with low income who may qualify for Medicaid to cover costs that Medicare does not.",
      "Anyone who has both Medicare and Medicaid and wants to understand how they work together.",
      "Family members helping a loved one navigate health insurance."
    ]
  },

  whatItMeans: {
    en: "Medicare is a federal program. Most people qualify at age 65 based on their work history or their spouse's work history. Younger people qualify after receiving SSDI disability benefits for 24 months. Medicare has four parts: Part A (hospital stays — usually free), Part B (doctor visits, outpatient care — monthly premium around $175), Part C (Medicare Advantage — private plans that bundle A, B, and often D), and Part D (prescription drugs — separate premium). Medicare does not cover everything. It does not cover long-term nursing home care, most dental work, hearing aids, or eyeglasses. Medicaid is a state program for people with low income. In New York, Medicaid covers a very wide range of services — doctor visits, hospital care, prescriptions, dental, vision, mental health, home care, and long-term nursing home care. Income limits vary by household size and age. For adults under 65, the limit is about 138% of the federal poverty level. For people 65 and older or people with disabilities, the rules are different and include asset limits. People who have both Medicare and Medicaid (called dual eligibles) get the most coverage. Medicare is the primary insurance, and Medicaid fills in the gaps — covering copays, premiums, and services Medicare does not cover."
  },

  yourRights: {
    en: [
      "Every person turning 65 has the right to enroll in Medicare during a seven-month window around their birthday month.",
      "A person who misses the enrollment window may face a late enrollment penalty — a permanent increase in premiums.",
      "A person with low income has the right to apply for Medicaid at any time. There is no enrollment window.",
      "A person who qualifies for both programs has the right to have Medicaid pay for Medicare premiums and copays through the Medicare Savings Program.",
      "A person has the right to appeal if Medicare or Medicaid denies a claim or a service.",
      "A person has the right to free help choosing a Medicare plan through the Health Insurance Information Counseling and Assistance Program (HIICAP)."
    ]
  },

  legalOptions: {
    en: [
      "Medicare enrollment is handled by Social Security. The enrollment window starts three months before the person's 65th birthday month. Late enrollment can result in permanent premium penalties.",
      "Medicaid applications in Monroe County are handled by the Department of Social Services at (585) 753-6010 or online at mybenefits.ny.gov.",
      "The Medicare Savings Program helps low-income Medicare beneficiaries by paying their Part B premium and sometimes copays. Applications are filed through the local DSS.",
      "Free Medicare counseling is available through HIICAP at Lifespan of Greater Rochester at (585) 244-8400.",
      "Free help with Medicaid applications and denials is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "The Medicare helpline is available at (800) 633-4227 (1-800-MEDICARE). Medicaid questions in NY go to (800) 541-2831."
    ]
  },

  example: {
    en: "When Rosa turned 65, she was already on Medicaid because of her low income. She enrolled in Medicare Part A (free) and Part B. Because her income was below the Medicare Savings Program threshold, Medicaid paid her Part B premium of $175 per month. She now had both programs — Medicare covered her doctor visits and hospital stays, and Medicaid covered her dental care, prescriptions, and any copays that Medicare left behind."
  },

  counsel: [
    {
      type: "free",
      name: "Lifespan of Greater Rochester — HIICAP",
      focus: "Free Medicare counseling, plan comparison, enrollment help",
      qualifier: "Anyone in Monroe County on or approaching Medicare",
      access: "Phone at (585) 244-8400",
      outcome: "One-on-one counseling to choose the right Medicare plan",
      phone: "(585) 244-8400",
      url: "https://www.lifespan-roch.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "government",
      name: "Monroe County DSS — Medicaid",
      focus: "Medicaid applications, Medicare Savings Program, benefits",
      qualifier: "Monroe County residents",
      access: "Phone at (585) 753-6010 or mybenefits.ny.gov",
      outcome: "Medicaid enrollment, Medicare Savings Program enrollment",
      phone: "(585) 753-6010",
      url: "https://www.monroecounty.gov/hs-socialservices",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "medicaid-ny",
    "medicare-savings-program-ny",
    "social-security-retirement-ny",
    "ssdi-ny",
    "prescription-assistance-ny",
    "dental-care-low-income-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "Medicare",
    "Medicaid",
    "Medicare vs Medicaid",
    "Medicare enrollment",
    "Medicaid application",
    "dual eligible",
    "Medicare Part A",
    "Medicare Part B",
    "Medicare Savings Program",
    "turning 65 insurance",
    "Medicare Medicaid difference"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/42/1395",
    "https://www.law.cornell.edu/uscode/text/42/1396",
    "https://www.medicare.gov",
    "https://www.health.ny.gov/health_care/medicaid/"
  ],

  lastVerified: "2026-04-17",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
