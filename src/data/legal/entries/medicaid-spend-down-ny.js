export const MEDICAID_SPEND_DOWN_NY = {
  id: "medicaid-spend-down-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY SOS 366",
  status: "active",

  title: { en: "NY Medicaid Spend-Down — How Excess-Income Households Qualify Using Medical Bills" },

  summary: {
    en: "The NY Medicaid Excess Income Program — also called spend-down, surplus income, or Medicaid deductible — lets households whose income exceeds the Non-MAGI Medicaid limit qualify by applying medical bills against the excess. The program sits within NY Social Services Law § 366 eligibility rules and applies to the Non-MAGI track (adults 65 or older, the blind, the disabled). Each month, once medical bills equal the excess-income amount, Medicaid pays the rest of the month. Two methods exist: submit bills (paid or unpaid) each month, or pay the excess amount directly to DSS (the Pay-In Program)."
  },

  whoQualifies: {
    en: [
      "A NY adult 65 or older whose income exceeds the Non-MAGI Medicaid income limit.",
      "A NY adult found disabled under Social Security's standard or determined disabled by the state.",
      "A NY adult who is legally blind.",
      "A household member within an otherwise eligible Non-MAGI family whose income pushes the household above the limit.",
      "A person who also meets the Non-MAGI resource limits (excluding the principal home, one car, personal property, and retirement accounts in payout status)."
    ]
  },

  whatItMeans: {
    en: "Medicaid spend-down lets households whose income exceeds the Non-MAGI Medicaid income limit still qualify by applying medical expenses against the excess. The program is the state implementation of the federal excess-income option at 42 USC § 1396a(a)(17), codified in NY under Social Services Law § 366. The calculation is straightforward. The local social services district compares the household's monthly countable income against the Medicaid income standard for the household size. The difference is the excess-income amount. Each month that the household incurs medical bills equal to or greater than the excess-income amount, Medicaid activates for the remainder of that month. Medicaid pays for covered services from the date the excess is met. Eligible medical expenses include unpaid or paid bills for doctor visits, specialist care, hospital stays, prescriptions, medical supplies, durable medical equipment, medical transportation, over-the-counter medications prescribed by a doctor, and health insurance premiums (including Medicare Part B). Bills from a spouse or children under 21 count toward the spend-down calculation. Unpaid bills count too — the bill does not have to be paid to be applied, which helps people manage cash flow. Two spend-down methods. First method: submit bills each month. The recipient gathers medical bills (paid receipts, invoices, statements), submits them to the local social services district, and waits for Medicaid activation. Rochester-area recipients submit to Monroe County DHS. Fax, mail, and in-person drop-off all work. Second method: the Pay-In Program. The recipient pays the excess-income amount directly to the local social services district in exchange for Medicaid coverage that month, without submitting medical bills. Pay-In for one to five months provides outpatient coverage only. Pay-In for six months provides both outpatient and inpatient (hospital) coverage — useful for someone with a planned surgery. An alternative pathway for disabled recipients: a pooled supplemental-needs trust. Nonprofits administer these trusts. Each month, the recipient deposits the excess-income amount into the trust. The trust then pays for the recipient's needs (rent, utilities, personal items). Deposited income no longer counts against Medicaid eligibility, so the household qualifies without a monthly spend-down burden. Trust fees apply and remainder rules govern what happens at the recipient's death. Pooled trusts are particularly useful for working disabled adults with predictable earned income above the Medicaid limit. Retroactive Medicaid is available for up to three months before the application date, so a person who incurred medical expenses shortly before applying may still receive coverage for those bills. NY updates the Medicaid income and resource limits each January, and current figures are published on the Department of Health website. A denial, reduction, or miscalculated excess-income amount can be appealed through the NY fair hearing process under SSL § 22 within 60 days. Legal Aid Society of Rochester, LawNY, and Empire Justice Center represent low-income Monroe County Medicaid applicants in spend-down disputes and fair hearings."
  },

  yourRights: {
    en: [
      "A NY Non-MAGI applicant has the right under SOS § 366 to use the spend-down pathway when income exceeds the Medicaid limit but the household otherwise qualifies.",
      "A spend-down recipient has the right to apply both paid and unpaid medical bills toward the monthly excess-income amount.",
      "A spend-down household has the right to include bills from a spouse and children under 21 in the monthly calculation.",
      "A spend-down recipient has the right to choose between submitting bills monthly or the Pay-In Program.",
      "A disabled recipient has the right to use a pooled supplemental-needs trust as an alternative to monthly spend-down.",
      "A Non-MAGI applicant has the right under SOS § 366-a to retroactive Medicaid coverage for up to three months before the application date.",
      "A recipient or applicant has the right under SSL § 22 to appeal an incorrect excess-income calculation through a fair hearing within 60 days."
    ]
  },

  legalOptions: {
    en: [
      "Monroe County Department of Human Services at (585) 753-6960 or 111 Westfall Road, Rochester — accepts spend-down applications, bill submissions, and Pay-In payments.",
      "NY Medicaid Helpline at (800) 541-2831 — current income and resource limits, general spend-down information.",
      "NY Department of Health Medicaid Excess Income page at health.ny.gov/health_care/medicaid/excess_income.htm.",
      "NY Fair Hearing request line at (800) 342-3334 or otda.ny.gov/hearings/request — for denials or incorrect excess-income calculations.",
      "NY pooled supplemental-needs trust nonprofits (NYSARC Trust Services, Community Service Society, others) — for disabled recipients seeking a trust alternative to monthly spend-down.",
      "Legal Aid Society of Rochester at (585) 232-4090 — low-income Monroe County spend-down representation.",
      "LawNY at (585) 325-2520 — spend-down cases across 14-county Western NY service area.",
      "Empire Justice Center at (585) 454-4060 — complex spend-down and pooled-trust cases."
    ]
  },

  example: {
    en: "Rose is a 72-year-old Monroe County resident receiving $2,100 per month in Social Security. The Non-MAGI Medicaid income limit for her household size is lower. Her monthly excess-income amount works out to about $280. Each month Rose faxes her prescription receipts, Medicare Part B premium statement, and doctor-visit bills to Monroe County DHS. The submitted bills typically exceed $280 by mid-month. Once the excess is met, Medicaid covers the remainder of that month — paying for her home-care aide visits and the rest of her prescriptions. If Rose's medical expenses are predictably high, she could switch to the Pay-In Program and pay $280 per month directly to DHS instead, avoiding the paperwork."
  },

  counsel: [
    {
      type: "nonprofit",
      name: "LawNY — Legal Assistance of Western New York",
      focus: "Medicaid spend-down, Pay-In Program, pooled trust referrals",
      qualifier: "Low-income resident in 14 Western NY counties including Monroe",
      access: "Phone intake",
      outcome: "Free representation",
      phone: "(585) 325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "nonprofit",
      name: "Empire Justice Center",
      focus: "Complex spend-down cases, pooled supplemental-needs trust referrals",
      qualifier: "Low and moderate income NY residents",
      access: "Phone intake",
      outcome: "Free representation and policy advocacy",
      phone: "(585) 454-4060",
      url: "https://empirejustice.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "nonprofit",
      name: "Legal Aid Society of Rochester",
      focus: "Medicaid applications, spend-down disputes, fair hearings",
      qualifier: "Low-income Monroe County resident",
      access: "Phone intake",
      outcome: "Free representation",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "medicaid-ny",
    "disability-medicaid-ny",
    "medicare-savings-program-ny",
    "benefits-denial-appeal-ny",
    "fair-hearing-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "NY Medicaid spend-down",
    "excess income Medicaid",
    "Medicaid Pay-In Program",
    "pooled supplemental-needs trust",
    "SOS 366 spend-down",
    "42 USC 1396a(a)(17)",
    "retroactive Medicaid 3 months",
    "Non-MAGI spend-down",
    "medical bills deductible",
    "Medicaid excess income"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/SOS/366",
    "https://www.health.ny.gov/health_care/medicaid/excess_income.htm",
    "https://www.law.cornell.edu/uscode/text/42/1396a"
  ],

  lastVerified: "2026-04-21",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
