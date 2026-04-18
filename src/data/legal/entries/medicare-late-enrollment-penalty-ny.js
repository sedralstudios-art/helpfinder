export const MEDICARE_LATE_ENROLLMENT_PENALTY_NY = {
  id: "medicare-late-enrollment-penalty-ny",
  category: "benefits",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-statute",
  status: "active",

  title: { en: "Medicare Late Enrollment Penalty — When the Premium Goes Up Permanently and How to Avoid It" },

  summary: {
    en: "Medicare Part B and Part D can carry lifetime late-enrollment penalties for people who delay signing up without qualifying other coverage. The Part B penalty is 10 percent per each 12 months of delay, paid on top of the premium forever. The Part D penalty is 1 percent per month uncovered. Several exceptions exist — retiree coverage, employer coverage for the person or spouse, or delay because of living abroad."
  },

  whoQualifies: {
    en: [
      "Anyone turning 65 who needs to decide whether to enroll in Medicare.",
      "Anyone already over 65 who delayed enrollment and is now facing or paying a late penalty.",
      "Anyone leaving employer coverage after age 65 and needing to enroll in Medicare within a deadline.",
      "Anyone with a disability who was enrolled in Medicare through SSDI and is reviewing premium changes."
    ]
  },

  whatItMeans: {
    en: "Medicare has four parts: A (hospital — usually premium-free), B (doctor and outpatient — monthly premium, about $175 for most in 2025), C (Medicare Advantage), and D (prescription drugs). Most people must enroll during their Initial Enrollment Period (IEP), which is the seven-month window around their 65th birthday month (three months before, the birth month, and three months after). Missing this window without qualifying other coverage can trigger penalties. Part B penalty (42 USC Section 1395r): 10 percent of the Part B premium for each full 12-month period the person was eligible but not enrolled. Example — someone who delays Part B for three years and then enrolls pays an extra 30 percent of the Part B premium every month, for life. Part D penalty: 1 percent of the national base beneficiary premium for each month without creditable prescription drug coverage. Example — someone uncovered for 18 months pays about 18 percent extra on their Part D premium, for life. Part A penalty exists but only applies to people who pay a Part A premium (those without sufficient work credits) — rare. Exceptions to the penalty: enrolled in employer group health coverage (through the person's or spouse's active employment), COBRA does NOT count as creditable coverage for Part B timing (a critical mistake — people on COBRA lose their Medicare enrollment window), TRICARE or VA coverage, creditable prescription coverage for Part D. A person with employer coverage has an 8-month Special Enrollment Period (SEP) after leaving the job or the coverage ends, whichever is first. Missing the SEP triggers the penalty. The General Enrollment Period (January-March) lets someone enroll late, with coverage starting the following month. IRMAA (Income-Related Monthly Adjustment Amount) is separate — higher-income beneficiaries pay more for Part B and D regardless of enrollment timing."
  },

  yourRights: {
    en: [
      "Every person has the right to enroll in Medicare during their Initial Enrollment Period without penalty.",
      "A person with active employer coverage has a Special Enrollment Period after the coverage ends.",
      "A person with creditable prescription coverage can delay Part D without Part D penalty.",
      "A person with Limited Income Subsidy (LIS / Extra Help) can have Part D premiums and penalties partly or fully waived.",
      "A person who received inaccurate information from SSA or Medicare can request equitable relief to waive the penalty.",
      "A person has the right to a free Medicare counseling session through SHIP / HIICAP before making enrollment decisions."
    ]
  },

  legalOptions: {
    en: [
      "For Medicare enrollment, call Social Security at (800) 772-1213 or enroll online at ssa.gov.",
      "Lifespan of Greater Rochester runs the HIICAP (Health Insurance Information, Counseling and Assistance Program) offering free one-on-one Medicare counseling. Phone (585) 244-8400.",
      "Medicare helpline: (800) 633-4227 for plan questions.",
      "For the Limited Income Subsidy (LIS / Extra Help) that covers Part D premiums and penalties, apply through Social Security — ssa.gov/medicare/prescriptionhelp.",
      "EPIC (NY state prescription assistance for seniors) can stack with Medicare Part D. Call (800) 332-3742.",
      "For equitable relief if a government error caused the delay, request it in writing to the Social Security office that handled enrollment.",
      "Free legal help with Medicare denials for low-income seniors is available through Empire Justice Center at (585) 454-4060."
    ]
  },

  example: {
    en: "After leaving his employer-sponsored health plan at age 68, Frank elected COBRA thinking it would bridge him until he was ready to enroll in Medicare. Fifteen months later his COBRA ended. When he enrolled in Part B, SSA told him COBRA is not creditable coverage for Part B purposes. His Part B premium was permanently increased by 10 percent — about $17 per month, or roughly $200 per year, for life. A HIICAP counseling session before choosing COBRA would have flagged this: Medicare enrollment within eight months of leaving active employment is the key deadline, and COBRA does not pause that clock."
  },

  counsel: [
    {
      type: "free",
      name: "Lifespan of Greater Rochester — HIICAP",
      focus: "Free Medicare counseling, enrollment decisions, IRMAA, Part D plan selection",
      qualifier: "Any Monroe County resident approaching or on Medicare",
      access: "Phone at (585) 244-8400",
      outcome: "One-on-one counseling, no cost, unbiased guidance",
      phone: "(585) 244-8400",
      url: "https://www.lifespan-roch.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "government",
      name: "Social Security Administration — Medicare Enrollment",
      focus: "Medicare Part A and B enrollment, Special Enrollment Periods, equitable relief",
      qualifier: "Any eligible person",
      access: "Phone at (800) 772-1213",
      outcome: "Enrollment, penalty explanations, SEP determinations",
      phone: "(800) 772-1213",
      url: "https://www.ssa.gov/medicare/",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "medicare-vs-medicaid-ny",
    "epic-prescription-seniors-ny",
    "social-security-survivors-benefits-ny",
    "cobra-health-insurance-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "Medicare late enrollment penalty",
    "Part B penalty",
    "Part D penalty",
    "Medicare IEP",
    "Special Enrollment Period Medicare",
    "COBRA Medicare trap",
    "equitable relief Medicare",
    "HIICAP",
    "IRMAA",
    "Extra Help Medicare"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/42/1395r",
    "https://www.law.cornell.edu/uscode/text/42/1395w-113",
    "https://www.medicare.gov"
  ],

  lastVerified: "2026-04-18",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
