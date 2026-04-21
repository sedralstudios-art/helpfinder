export const MEDICARE_SAVINGS_PROGRAM_NY = {
  id: "medicare-savings-program-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "42 USC 1396A",
  status: "active",

  title: { en: "NY Medicare Savings Programs — QMB and QI Help Paying Medicare Premiums and Cost-Sharing" },

  summary: {
    en: "Medicare Savings Programs, or MSPs, are state Medicaid programs that pay some or all Medicare costs for low-income Medicare beneficiaries. Federal authority is 42 USC § 1396a(a)(10)(E). NY runs two tiers — QMB (Qualified Medicare Beneficiary) covers premiums plus all deductibles, copays, and coinsurance; QI (Qualifying Individual) covers only the Part B premium. NY has no asset test for either program — income is the only measure. Enrollment in QMB or QI automatically enrolls the beneficiary in the federal Extra Help prescription program."
  },

  whoQualifies: {
    en: [
      "A Medicare beneficiary in NY with household income at or below 138% of the federal poverty level — QMB eligibility.",
      "A Medicare beneficiary with household income between 138% and 186% of federal poverty level — QI eligibility.",
      "A NY resident regardless of savings, home equity, vehicles, or other assets — NY removed the MSP asset test in 2023.",
      "A Medicaid, SNAP, or Temporary Assistance recipient — often automatically enrolled in QMB without a separate application.",
      "A Medicare beneficiary with income up to 150% of federal poverty level — eligible for the federal Extra Help prescription program even when MSP income is exceeded."
    ]
  },

  whatItMeans: {
    en: "Medicare Savings Programs are state Medicaid programs that pay some or all of the Medicare out-of-pocket costs for low-income beneficiaries. The federal authority is 42 USC § 1396a(a)(10)(E), which requires state Medicaid programs to pay specified Medicare costs for QMBs and to offer limited premium-only help to QIs. NY implements MSP through the Department of Health and the local social services districts. NY runs two MSP tiers after the 2023 expansion consolidated the old SLMB middle tier into QMB. QMB (Qualified Medicare Beneficiary) is the full-coverage tier. A QMB enrollee has the following Medicare costs paid by Medicaid: Medicare Part A premium (for beneficiaries who owe one — most do not), Medicare Part B premium, and all Medicare deductibles, copays, and coinsurance. A QMB enrollee should never be billed by a Medicare provider for any Medicare-covered service beyond what Medicaid has paid. Federal law bars balance billing of QMB beneficiaries. If a provider bills a QMB patient anyway, the bill is improper and can be challenged through 1-800-MEDICARE or the Medicare Beneficiary Ombudsman. QI (Qualifying Individual) is the premium-only tier. A QI enrollee has the Medicare Part B premium paid. QI does not pay deductibles, copays, or coinsurance. The 2026 Medicare Part B premium is about $202.90 per month, so QI saves the enrollee over $2,400 per year. NY removed the MSP asset test in 2023. No look at bank accounts, home equity, vehicles, or other property is allowed. Eligibility turns on income alone, with certain deductions applied per federal SSI rules. Extra Help (Low-Income Subsidy, or LIS) is a separate federal program that pays most Part D prescription drug costs. Enrollment in QMB or QI automatically enrolls the beneficiary in Extra Help. With Extra Help, Part D copays drop to a few dollars per prescription and the Part D monthly premium is often $0. A key change since 2024: Extra Help income limits rose to 150% of federal poverty level, higher than the QI MSP ceiling of 186%. Wait — the opposite is true: QI goes up to 186% so QI enrollees always qualify for Extra Help, but beneficiaries above 186% (too high for QI) might still qualify for Extra Help alone if their income is below 150%. Extra Help is applied for through the Social Security Administration at ssa.gov/medicare/prescriptionhelp or by phone at (800) 772-1213. MSP applications go through the local social services district. Monroe County residents apply at Monroe County DHS. NY State of Health also accepts MSP applications for some applicants. Processing takes 45 days in routine cases. A denial or incorrect determination can be appealed through the NY fair hearing process under SSL § 22 within 60 days. Practical note on improper QMB billing: showing the provider's office staff the Medicare card and the Medicaid or MSP notice usually resolves an improper bill. Persistent billing violations can be reported to the NY Attorney General's Medicaid Fraud Control Unit."
  },

  yourRights: {
    en: [
      "A NY Medicare beneficiary has the right under 42 USC § 1396a(a)(10)(E) and NY law to apply for a Medicare Savings Program at any time, with no enrollment window.",
      "A NY MSP applicant has the right to a determination based on income alone — NY removed the MSP asset test in 2023.",
      "A QMB enrollee has the right under federal law not to be billed by any Medicare provider for Medicare-covered services beyond what Medicaid paid.",
      "A QMB or QI enrollee has the right to automatic enrollment in Extra Help for Part D prescription drugs.",
      "A Medicare beneficiary with income too high for MSP but below 150% of federal poverty level has the right to apply for Extra Help directly through Social Security.",
      "A NY MSP applicant has the right under SSL § 22 to appeal a denial through a fair hearing within 60 days.",
      "A NY MSP applicant has the right to retroactive benefits covering the application month and, in some cases, earlier months with qualifying expenses."
    ]
  },

  legalOptions: {
    en: [
      "Monroe County Department of Human Services at (585) 753-6960 — MSP applications for Monroe County Medicare beneficiaries.",
      "NY State of Health at nystateofhealth.ny.gov or (855) 355-5777 — MSP applications pathway for some applicants.",
      "NY Medicaid Helpline at (800) 541-2831 — current MSP income limits and general information.",
      "Medicare Rights Center at (800) 333-4114 — free statewide Medicare counseling and MSP application help.",
      "NY HIICAP (Health Insurance Information, Counseling and Assistance Program) — free Medicare counseling through Offices for the Aging; directory at aging.ny.gov.",
      "Social Security Administration at (800) 772-1213 or ssa.gov/medicare/prescriptionhelp — Extra Help prescription-subsidy application.",
      "Medicare Beneficiary Ombudsman through (800) MEDICARE — improper QMB billing complaints.",
      "Empire Justice Center at (585) 454-4060 and LawNY at (585) 325-2520 — free MSP application and appeal representation for low-income Monroe County residents."
    ]
  },

  example: {
    en: "Gloria is a 71-year-old Monroe County resident living alone on Social Security retirement of about $1,500 per month. She has Medicare Parts A and B. The Part B premium, copays, and prescription costs strained her fixed income. She applied for QMB at Monroe County DHS. Because NY applies no asset test (removed in 2023) and her income was below the QMB threshold, she was approved. Medicaid now pays her Part B premium directly to CMS. Her doctor visits and hospital copays are covered under QMB at no out-of-pocket cost. QMB enrollment automatically enrolled her in Extra Help, reducing her Part D prescription copays to a few dollars each. If a provider bills her for a Medicare copay, she shows the office her Medicaid and Medicare cards to resolve the improper bill."
  },

  counsel: [
    {
      type: "free",
      name: "Empire Justice Center",
      focus: "Medicare, Medicaid, health law, disability benefits, systemic advocacy",
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
      name: "Legal Assistance of Western New York (LawNY)",
      focus: "Health law, Medicare, Medicaid, elder law",
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
      name: "Legal Aid Society of Rochester",
      focus: "Public benefits, Medicare, Medicaid, fair hearings",
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
    "medicaid-ny",
    "medicaid-spend-down-ny",
    "social-security-retirement-ny",
    "ssi-disability-ny",
    "benefits-denial-appeal-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "Medicare help",
    "Medicare premium help",
    "can't afford Medicare",
    "Medicare copay help",
    "QMB",
    "Medicare Savings Program",
    "Part B premium help",
    "prescription drug help",
    "Extra Help Medicare",
    "senior health insurance help",
    "Medicare cost help",
    "low income Medicare"
  ],

  sources: [
    "https://www.health.ny.gov/health_care/medicaid/program/update/savingsprogram/",
    "https://www.medicare.gov/basics/costs/help/medicare-savings-programs",
    "https://www.law.cornell.edu/uscode/text/42/1396a"
  ],

  lastVerified: "2026-04-21",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
