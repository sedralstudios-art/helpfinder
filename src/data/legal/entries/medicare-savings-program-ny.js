export const MEDICARE_SAVINGS_PROGRAM_NY = {
  id: "medicare-savings-program-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "42 USC 1396A",
  status: "active",

  title: { en: "Medicare Savings Programs — Help Paying Medicare Costs" },

  summary: {
    en: "If you have Medicare and limited income, New York's Medicare Savings Programs can pay your monthly Medicare premium and your doctor bills. New York has some of the easiest rules in the country. There is no savings test. Signing up also gets you Extra Help with prescription costs."
  },

  whoQualifies: {
    en: [
      "People with Medicare whose monthly income is at or below 138% of the Federal Poverty Level qualify for the biggest program — QMB (Qualified Medicare Beneficiary).",
      "People with Medicare whose income is between 138% and 186% of the Federal Poverty Level may qualify for a smaller program — QI (Qualifying Individual).",
      "There is no savings or property test for either program in New York. Your bank accounts and your home don't count against you.",
      "If you already get Medicaid, SNAP, or Temporary Assistance, you may be automatically enrolled.",
      "In 2023, New York grew the QMB program. It now covers people who used to only qualify for the smaller SLMB program."
    ]
  },

  whatItMeans: {
    en: "New York has two Medicare Savings Programs.\n\n1) QMB (Qualified Medicare Beneficiary) is the bigger program. QMB pays:\n- Your Medicare Part A monthly fee (premium) if you owe one.\n- Your Part B premium.\n- All Medicare deductibles, copays, and coinsurance.\n\nIf you have QMB, doctors can't bill you for Medicare costs. If you get a bill, the bill is wrong. You do not have to pay it.\n\n2) QI (Qualifying Individual) is smaller. QI pays just your Part B premium. The Part B premium is $202.90 a month in 2026. That's over $2,400 a year saved.\n\nBoth programs automatically sign you up for Extra Help. Extra Help is a federal program that pays most of your prescription drug costs. With Extra Help, your medicine copays go down to a few dollars, and you may pay $0 for your Part D plan.\n\n**You can also get Extra Help on its own, even if MSP says no.** Starting in 2024, Extra Help covers anyone on Medicare with income up to 150% of the Federal Poverty Level — a higher income ceiling than QI. That means a person with Medicare whose income is too high for MSP might still qualify for full Extra Help on prescriptions. Extra Help is applied for through Social Security (not New York DSS) at ssa.gov/medicare/prescriptionhelp or by calling 1-800-772-1213.\n\nNew York ended the old SLMB program in 2023 — QMB now covers those people.\n\nIncome limits are based on the Federal Poverty Level and change every year. Current limits are at health.ny.gov."
  },

  yourRights: {
    en: [
      "You have the right to apply for a Medicare Savings Program any time. There is no special sign-up window.",
      "You have the right to a decision based on income only. New York does not count savings or property for QMB or QI.",
      "You have the right to be signed up automatically for Extra Help for prescription drugs when you get QMB or QI.",
      "If you have QMB and a Medicare provider sends you a bill for copays or deductibles, the bill is wrong. You do not have to pay it.",
      "You have the right to appeal (fair hearing) if you are denied.",
      "You have the right to apply even if your income looks slightly high. Some income doesn't count in the math."
    ]
  },

  legalOptions: {
    en: [
      "Every county DSS takes Medicare Savings Program applications. You can also apply through NY State of Health at nystateofhealth.ny.gov (42 U.S.C. § 1396a(a)(10)(E); NY Social Services Law).",
      "Current income limits: health.ny.gov/health_care/medicaid/program/update/savingsprogram/.",
      "Medicaid Helpline: 1-800-541-2831.",
      "NY State of Health helpline: 1-855-355-5777.",
      "Medicare Rights Center — free counseling and application help: 1-800-333-4114.",
      "HIICAP (Health Insurance Information, Counseling and Assistance Program) — free Medicare counseling. Contact info at aging.ny.gov.",
      "If a doctor or hospital bills you for Medicare costs while you are on QMB, show them your Medicaid card or QMB notice along with your Medicare card. They can check your QMB status.",
      "Free legal help: Empire Justice Center (585-454-4060) and LawNY (585-325-2520)."
    ]
  },

  example: {
    en: "Gloria is 71. She lives alone on Social Security of about $1,500 a month. She has Medicare. But the Part B premium, copays, and prescription costs were hard to cover on her fixed income. She applied for QMB at her county DSS office. Because New York doesn't look at savings and her income was below the QMB limit, she was approved. Now her Part B premium is paid for her. She owes nothing for doctor visits. She was also signed up for Extra Help automatically, which cut her prescription costs to a few dollars per medicine."
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

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
