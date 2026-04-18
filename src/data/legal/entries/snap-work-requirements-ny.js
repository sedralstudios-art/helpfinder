export const SNAP_WORK_REQUIREMENTS_NY = {
  id: "snap-work-requirements-ny",
  category: "benefits",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-statute",
  status: "active",

  title: { en: "SNAP Work Requirements and the ABAWD Rule — Who Must Work to Keep Food Benefits" },

  summary: {
    en: "Most SNAP recipients have general work-registration rules, but a specific group — Able-Bodied Adults Without Dependents (ABAWDs) ages 18-54 — faces a stricter three-month time limit unless they work or participate in a work program for 20 hours per week. Exemptions and waivers apply. Many participants qualify for exemptions they do not know about."
  },

  whoQualifies: {
    en: [
      "Any SNAP recipient age 16-59 subject to general work registration (most adults).",
      "Any SNAP recipient age 18-54 considered an ABAWD (able-bodied adult without dependents) subject to the three-month limit.",
      "Any SNAP recipient required to participate in SNAP Employment and Training (SNAP E&T).",
      "Any SNAP recipient facing sanctions, reduction, or termination for missing a work requirement."
    ]
  },

  whatItMeans: {
    en: "The Food and Nutrition Act (7 USC Section 2015) and 7 CFR Part 273 set SNAP work requirements. There are two main layers. General work registration: most SNAP recipients ages 16-59 must register for work, accept a suitable job if offered, and not voluntarily quit a job of 30+ hours per week without good cause. Exemptions include being physically or mentally unfit, caring for a child under 6 or an incapacitated person, being pregnant, being enrolled at least half-time in school, or already working 30+ hours. ABAWD time limit: ABAWDs ages 18-54 (raised from 49 by the 2023 budget deal, with phased implementation) can only receive SNAP for three months in a 36-month period unless they work, participate in a qualifying work program, or volunteer for 20 hours per week (about 80 hours per month). Exemptions beyond the general ones include homelessness (added 2023), being a veteran, or being a former foster youth ages 18-24 (added 2023). States can request waivers for areas with high unemployment — New York has historically qualified for waivers in many counties. Monroe County's waiver status shifts with economic conditions — check current status with DSS. When a waiver is active, ABAWDs in the waived area do not face the three-month limit. SNAP Employment and Training (SNAP E&T) offers education, job training, and job placement to SNAP recipients — participation can satisfy the work requirement, and E&T activities are often covered with transportation and child care support. Participation is voluntary in most cases but can be mandatory for ABAWDs losing benefits. Good cause for missing a work requirement includes illness, transportation failure, a court appearance, a family emergency, and similar unavoidable situations."
  },

  yourRights: {
    en: [
      "A SNAP recipient has the right to claim any applicable exemption from work requirements at any time.",
      "An ABAWD has the right to request an exemption based on homelessness, veteran status, former foster youth status, or medical limitations.",
      "A recipient sanctioned for a work requirement violation has the right to a fair hearing within 90 days.",
      "Good cause for missing a work requirement is determined case-by-case and must be considered before sanctions.",
      "SNAP E&T participation triggers reimbursement for transportation and child care expenses incurred for the program.",
      "A homeless SNAP recipient has the right to be counted as exempt from the ABAWD three-month limit."
    ]
  },

  legalOptions: {
    en: [
      "Monroe County DSS at (585) 753-6006 administers SNAP work requirements and can confirm ABAWD status and exemptions.",
      "To claim an exemption, submit documentation (medical, homelessness verification, school enrollment) to the DSS case manager.",
      "For a fair hearing on a sanction, file a request within 90 days at otda.ny.gov/hearings or (800) 342-3334.",
      "SNAP E&T participation starts with a referral — ask the DSS case manager.",
      "Free legal help with SNAP sanctions is available through Legal Aid Society of Rochester at (585) 232-4090 and Empire Justice Center at (585) 454-4060.",
      "For ABAWD waiver status in a specific county, the NYS OTDA posts the current list at otda.ny.gov.",
      "The USDA Food and Nutrition Service helpline at (800) 221-5689 can answer federal SNAP questions."
    ]
  },

  example: {
    en: "A 32-year-old Rochester resident with no children was receiving SNAP while between jobs. After three months, DSS notified him he had exhausted his ABAWD time limit and would be terminated unless he worked or volunteered 80 hours per month. He had been dealing with a medical condition that made consistent work difficult. He provided a doctor's note to his case manager documenting the limitation. DSS approved a medical exemption, classified him as unfit for work, and SNAP continued without the time limit. He also enrolled in SNAP E&T where he received training and job-search support tailored to his limitations."
  },

  counsel: [
    {
      type: "government",
      name: "Monroe County DSS — SNAP",
      focus: "SNAP work requirements, ABAWD status, exemptions, E&T referrals",
      qualifier: "Monroe County SNAP recipients",
      access: "Phone at (585) 753-6006",
      outcome: "Case management, exemption approval, fair hearing guidance",
      phone: "(585) 753-6006",
      url: "https://www.monroecounty.gov/hs-snap",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Empire Justice Center",
      focus: "SNAP sanctions, ABAWD exemptions, systemic SNAP advocacy",
      qualifier: "Low and moderate income NY residents",
      access: "Phone at (585) 454-4060",
      outcome: "Advice, representation, amicus support",
      phone: "(585) 454-4060",
      url: "https://www.empirejustice.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "snap-rights-ny",
    "snap-recertification-ny",
    "tanf-public-assistance-ny",
    "fair-hearing-ny",
    "benefits-denial-appeal-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "SNAP work requirements",
    "ABAWD",
    "3 month SNAP limit",
    "80 hours SNAP",
    "SNAP E&T",
    "SNAP exemption",
    "7 USC 2015",
    "SNAP sanction",
    "food stamps work rule",
    "ABAWD waiver"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/7/2015",
    "https://www.law.cornell.edu/cfr/text/7/part-273",
    "https://otda.ny.gov/programs/snap/"
  ],

  lastVerified: "2026-04-18",
  volatility: "high",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
