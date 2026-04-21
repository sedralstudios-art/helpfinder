export const MEDICAID_NY = {
  id: "medicaid-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY SOS 366",
  status: "active",

  title: { en: "NY Medicaid — Who Qualifies, What's Covered, and How to Apply Through Two Eligibility Tracks" },

  summary: {
    en: "New York Medicaid is a free or low-cost health insurance program under federal Title XIX at 42 USC § 1396 and NY Social Services Law § 366. Coverage includes doctor visits, hospital care, prescriptions, mental health care, lab work, and medical transportation. NY runs Medicaid on two tracks. MAGI (Modified Adjusted Gross Income) covers most adults under 65, children, and pregnant people with income-only tests — no asset test. Non-MAGI covers adults 65 or older, the blind, and the disabled with both income and asset tests. Once approved, coverage lasts 12 months."
  },

  whoQualifies: {
    en: [
      "A NY adult age 19-64 with household income at or below 138% of the federal poverty level — covered through the MAGI track with no asset test.",
      "A pregnant person with household income at or below 223% of the federal poverty level; an infant under age 1 at that same threshold.",
      "A child age 1-18 with household income at or below 154% of the federal poverty level.",
      "An adult 65 or older, or a person who is blind or disabled — covered through the Non-MAGI track with both income and asset tests (separate entry: disability-medicaid-ny).",
      "An SSI recipient — categorically eligible for Medicaid without a separate application.",
      "Any NY resident with an emergency medical condition — eligible for Emergency Medicaid regardless of immigration status."
    ]
  },

  whatItMeans: {
    en: "NY Medicaid is a federal-state partnership created by Title XIX of the Social Security Act at 42 USC § 1396. The federal government funds most of the cost; NY contributes a state share and administers the program through Social Services Law § 366 and 366-a. NY Medicaid covers a wide range of services: primary-care visits, specialist care, hospital inpatient and outpatient services, emergency room care, prescriptions, mental health treatment, substance use treatment, lab work, X-rays, medical transportation (including ambulance and non-emergency transport to appointments), home care for eligible individuals, nursing-home care, and family-planning services. Children receive full dental, vision, hearing, and developmental screenings through the EPSDT (Early Periodic Screening Diagnostic and Treatment) benefit. Adult dental is more limited but includes cleanings, extractions, fillings, and medically necessary procedures. NY uses two parallel eligibility tracks. The MAGI track applies to most adults under 65, children, and pregnant people. MAGI stands for Modified Adjusted Gross Income — an income-only test with no look at savings, home equity, vehicles, or other assets. MAGI-pathway applications go through NY State of Health, the state-run health-insurance marketplace at nystateofhealth.ny.gov. The Non-MAGI track applies to adults 65 or older, the blind, the disabled, and related categories. Non-MAGI applies both income and asset tests, with extensive exclusions (primary home, one car, retirement accounts in payout status, household belongings). Non-MAGI applications go to the local social services district — Monroe County DHS for Monroe County residents. The separate disability-medicaid-ny entry covers the Non-MAGI pathway in detail, including the Medicaid Buy-In for Working People with Disabilities, spend-down, and pooled trust options. Once approved, coverage is continuous for 12 months even if household income rises during that period — NY's continuous-eligibility rule matches the federal requirement. Decision timeframes are 45 days for routine applications and up to 90 days when a disability determination is required. Under SSL § 366-a, applicants with immediate need for personal-care services are entitled to expedited determinations within 7 days. Applications can be denied for exceeding income/asset limits, missing documentation, failing to return verifications, or not meeting categorical criteria. Denials, reductions, and closures can be appealed through the NY fair hearing process under SSL § 22 within 60 days. Aid continuing keeps benefits intact during the appeal when the hearing is requested before the effective date. Beyond Medicaid, NY offers two programs for households with income just above Medicaid limits: Child Health Plus covers children in households up to 400% of the federal poverty level (sliding-scale premium), and the Essential Plan covers adults through NY State of Health with free or very low-cost coverage. Legal Aid Society of Rochester, LawNY, and Empire Justice Center represent low-income Monroe County residents in applications, denials, and fair hearings."
  },

  yourRights: {
    en: [
      "A NY resident has the right to apply for Medicaid at any time — there is no open-enrollment period.",
      "A NY applicant has the right to a decision within 45 days of a complete application (or 90 days when a disability determination is required).",
      "A NY applicant with an immediate need for personal-care services has the right under SOS § 366-a to an expedited determination within 7 days.",
      "A NY Medicaid recipient has the right to 12 months of continuous coverage once approved, even if income rises temporarily.",
      "A NY Medicaid recipient has the right to choose any provider that accepts Medicaid and to receive covered services at no cost or with minimal co-payments.",
      "A NY applicant or recipient has the right under SSL § 22 to appeal a denial, reduction, or closure through a fair hearing within 60 days.",
      "A NY resident in a medical emergency has the right to Emergency Medicaid regardless of immigration status under federal EMTALA and Title XIX rules.",
      "A NY applicant has the right to application help and written materials in a preferred language."
    ]
  },

  legalOptions: {
    en: [
      "NY State of Health at nystateofhealth.ny.gov or (855) 355-5777 — MAGI-track Medicaid applications for most adults under 65, children, and pregnant people.",
      "Monroe County Department of Human Services at (585) 753-6960 or 111 Westfall Road, Rochester — Non-MAGI Medicaid applications for adults 65 or older, the blind, and the disabled.",
      "NY Medicaid Helpline at (800) 541-2831 — statewide Medicaid information.",
      "NY Fair Hearing line at (800) 342-3334 or otda.ny.gov/hearings/request — denials, reductions, and closures.",
      "Child Health Plus — covers children in households up to 400% of federal poverty level with sliding-scale premium, through NY State of Health.",
      "Essential Plan — low- or no-cost coverage for adults with income just above Medicaid limits, through NY State of Health.",
      "Legal Aid Society of Rochester at (585) 232-4090 — low-income Monroe County applications, denials, and fair hearings.",
      "LawNY at (585) 325-2520 — benefits representation across 14-county Western NY service area.",
      "Empire Justice Center at (585) 454-4060 — complex Medicaid cases and impact advocacy."
    ]
  },

  example: {
    en: "Darnell is 34 and works part-time at a Monroe County warehouse. He earns about $1,200 per month and has no other income. He applied online through NY State of Health — the MAGI pathway for adults under 65. Because his income is below the 138% FPL threshold for a single adult, he was approved about three weeks later. A NY Medicaid ID card arrived by mail. He now sees a primary-care doctor for a condition he had been putting off for two years. Prescriptions, lab work, specialist referrals, and appointments are fully covered. Under the 12-month continuous-eligibility rule, his coverage stays active for a full year even if his hours increase."
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

  lastVerified: "2026-04-21",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
