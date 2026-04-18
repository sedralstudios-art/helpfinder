export const MEDICAID_HOME_CARE_NY = {
  id: "medicaid-home-care-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "42 USC 1396",
  status: "active",

  title: { en: "Medicaid Home Care — Staying Home Instead of a Nursing Home in New York" },

  summary: {
    en: "Many people who need daily help with bathing, dressing, meals, or medications can receive that care at home — paid for by Medicaid — instead of going to a nursing home. New York has multiple home care programs including the Consumer Directed Personal Assistance Program (CDPAP), which lets the person choose their own caregiver, including a family member."
  },

  whoQualifies: {
    en: [
      "Anyone on Medicaid who needs help with activities of daily living (bathing, dressing, eating, toileting, mobility) and can safely remain at home with assistance.",
      "People who would otherwise need nursing home placement but prefer to stay home.",
      "People who want to choose their own caregiver, including a family member or friend, through CDPAP."
    ]
  },

  whatItMeans: {
    en: "New York Medicaid covers several home care options. Personal Care Services (PCS): a home health aide comes to the home to help with daily activities. The hours are determined by an assessment. Managed Long-Term Care (MLTC): for people who need home care for 120 days or more, an MLTC plan coordinates all services. The person enrolls in a plan (like Fidelis Care at Home, VNS Health, or others) that manages the care. Consumer Directed Personal Assistance Program (CDPAP): the person hires, trains, and supervises their own caregiver — who can be a family member, friend, or anyone they choose. The caregiver is paid through a fiscal intermediary. CDPAP is one of New York's most important programs for families because it allows a spouse, adult child, or other relative to be paid for providing care that they may already be doing for free. An assessment by a nurse determines the number of hours authorized. If Medicaid denies or reduces home care hours, the person has the right to a fair hearing with aid continuing."
  },

  yourRights: {
    en: [
      "Medicaid recipients who need home care have the right to receive it instead of being placed in a nursing home.",
      "The right to choose CDPAP and select their own caregiver, including family members.",
      "The right to an assessment that accurately reflects the level of care needed.",
      "The right to appeal if hours are denied, reduced, or cut — with aid continuing if the appeal is filed before the effective date.",
      "The right to switch between MLTC plans if dissatisfied with the care coordination."
    ]
  },

  legalOptions: {
    en: [
      "Medicaid home care applications and assessments are coordinated through the local Medicaid office or through an MLTC plan. In Monroe County, contact DSS at (585) 753-6960.",
      "For CDPAP specifically, enrollment is through a fiscal intermediary. In the Rochester area, agencies that serve as fiscal intermediaries can be found through the NY Independent Living Centers or by calling 211.",
      "If home care hours are denied or reduced, a fair hearing can be requested at otda.ny.gov/hearings/request/ or by calling (800) 342-3334. Filing before the effective date preserves aid continuing.",
      "Free legal help with Medicaid home care denials and reductions is available through Legal Aid Society of Rochester at (585) 232-4090 and Empire Justice Center at (585) 454-4060.",
      "The NY Department of Health provides information on MLTC plans and CDPAP at health.ny.gov."
    ]
  },

  example: {
    en: "An elderly woman in Irondequoit needs help bathing, dressing, and preparing meals but wants to stay in her home. Her daughter has been helping but cannot afford to keep missing work. They learn about CDPAP through Legal Aid. The daughter enrolls as the mother's caregiver through a fiscal intermediary. Medicaid pays the daughter for the hours she provides care. The mother stays home, and the daughter is compensated for the work she was already doing."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Medicaid home care, CDPAP, fair hearings, MLTC issues",
      qualifier: "Low-income residents of Monroe and surrounding counties",
      access: "Phone intake",
      outcome: "Direct representation or advice",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Eldersource (Lifespan)",
      focus: "Aging services, home care options, MLTC enrollment",
      qualifier: "Seniors 60+ and their families in Monroe County",
      access: "Phone",
      outcome: "Information, referral, and advocacy",
      phone: "(585) 325-2800",
      url: "https://eldersource.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "medicaid-ny",
    "medicaid-spend-down-ny",
    "nursing-home-rights-ny",
    "elder-abuse-ny",
    "fair-hearing-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "home care",
    "CDPAP",
    "consumer directed",
    "personal care",
    "home health aide",
    "Medicaid home care",
    "stay home",
    "nursing home alternative",
    "MLTC",
    "managed long term care",
    "family caregiver paid",
    "caregiver pay"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/42/1396",
    "https://www.nysenate.gov/legislation/laws/SOS/365-A",
    "https://www.health.ny.gov/health_care/medicaid/program/longterm/",
    "https://www.health.ny.gov/health_care/medicaid/program/longterm/cdpap.htm"
  ],

  lastVerified: "2026-04-16",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
