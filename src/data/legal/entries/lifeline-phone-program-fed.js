export const LIFELINE_PHONE_PROGRAM_FED = {
  id: "lifeline-phone-program-fed",
  category: "benefits",
  tier: "federal",
  jurisdiction: "us-fed",
  authorityType: "federal-statute",
  primaryStatute: "47 USC 254",
  status: "active",

  title: { en: "Lifeline — Federal Monthly Discount on Phone or Internet Service for Eligible Households" },

  summary: {
    en: "Lifeline is a federal program that lowers the monthly cost of phone or internet service for eligible households. The authority is 47 USC § 254 (the Telecommunications Act universal-service provision). The program is administered by the Universal Service Administrative Company (USAC) with FCC oversight. The standard benefit is up to $9.25 per month; the Enhanced Tribal benefit is up to $34.25 per month. Eligibility runs on income (135% of federal poverty line) or on participation in SNAP, Medicaid, SSI, Federal Public Housing Assistance, or Veterans Pension. One benefit per household."
  },

  whoQualifies: {
    en: [
      "A household with income at or below 135% of the federal poverty guideline for the household size.",
      "A household with a member who participates in SNAP, Medicaid, SSI, Federal Public Housing Assistance, or the Veterans Pension and Survivors Benefit programs — automatic qualification, no separate income proof.",
      "A household living on federally recognized Tribal lands — eligible for the Enhanced Tribal benefit up to $34.25 per month.",
      "A survivor of domestic violence or human trafficking — eligible for emergency Lifeline support for up to six months under the Safe Connections Act.",
      "One Lifeline benefit per household — everyone living at the same address who shares income and expenses counts as one household."
    ]
  },

  whatItMeans: {
    en: "Lifeline is a federal program created under the Telecommunications Act at 47 USC § 254, which requires universal-service support to keep telephone and broadband service available to low-income households. The Universal Service Administrative Company (USAC) administers the program under FCC oversight. The standard benefit pays up to $9.25 per month off the cost of a phone plan, an internet plan, or a bundled phone-and-internet plan. The Enhanced Tribal benefit pays up to $34.25 per month for households on qualifying Tribal lands. Many participating providers offer plans at or below the benefit amount, so the Lifeline discount often covers the full monthly bill — the household pays nothing out of pocket. Eligibility has two pathways. Income-based eligibility requires household income at or below 135% of the federal poverty guideline. Program-based eligibility requires participation in one of the qualifying programs — SNAP, Medicaid, SSI, Federal Public Housing Assistance (Section 8 or public housing), or Veterans Pension and Survivors Benefit. Program-based eligibility typically does not need separate income proof — the USAC National Verifier checks the applicable program database and often approves in minutes. Income-based eligibility requires documentation — a tax return, three consecutive pay stubs, or a benefits letter. The National Verifier runs the eligibility check for most states. Applicants go to lifelinesupport.org, create an account, and submit the application with supporting documents if needed. After approval, the applicant has 90 days to choose a participating provider and sign up for service. Each state has a list of participating providers; the National Verifier shows the available options by ZIP code. Oregon and Texas operate their own state portals rather than using the National Verifier. The Safe Connections Act adds protections for survivors of domestic violence and human trafficking — emergency Lifeline support is available for up to six months with additional privacy safeguards during the application process. Survivors can also separate a shared phone line from an abuser's account without penalty. Recertification is required every year. USAC often recertifies automatically through database matching. When automatic recertification fails, the subscriber receives a notice and must respond within the stated window to keep the benefit. A Lifeline subscriber on a plan with no monthly charge must use the service at least once every 30 days (a call, text, or data session) to keep the account active. Lifeline does not affect SNAP, Medicaid, or other public-benefit eligibility. The earlier Affordable Connectivity Program, which provided a larger broadband discount, ended in 2024 — Lifeline is a separate, ongoing program. Applications and recertifications are always free. No legitimate provider or government agency charges a fee to apply for Lifeline. Fraud or aggressive marketing that charges for application help can be reported to the FCC Lifeline Fraud Tip Line."
  },

  yourRights: {
    en: [
      "A NY household has the right under 47 USC § 254 and FCC rules to apply for Lifeline online, by mail, or through a participating provider.",
      "An eligible household has the right to choose any participating Lifeline provider in the area and to switch providers at any time.",
      "A household has the right to the standard $9.25 monthly benefit, or the Enhanced Tribal benefit of $34.25 on qualifying Tribal lands.",
      "A survivor of domestic violence or human trafficking has the right under the Safe Connections Act to emergency Lifeline support for up to six months plus privacy safeguards during the application process.",
      "A household has the right to continue to receive Lifeline even when also receiving other public benefits — Lifeline does not reduce SNAP, Medicaid, or any other means-tested benefit.",
      "A household has the right to apply for free — no legitimate agency or provider charges a fee to apply for Lifeline.",
      "A household has the right to annual recertification and to receive written notice before any benefit termination."
    ]
  },

  legalOptions: {
    en: [
      "Lifeline National Verifier at lifelinesupport.org — online application, eligibility check, provider selection for most states.",
      "Lifeline Support Center at (800) 234-9473 or LifelineSupport@usac.org — paper applications, help line, status checks.",
      "FCC Lifeline consumer information at fcc.gov/lifeline-consumers — program details and consumer protection guidance.",
      "FCC Lifeline Fraud Tip Line at (855) 455-8477 — to report application-fee scams or unauthorized enrollment.",
      "A participating Lifeline provider in Monroe County — listings available through the National Verifier by ZIP code.",
      "Legal Aid Society of Rochester at (585) 232-4090 — represents low-income residents in Lifeline denial or enrollment disputes.",
      "LawNY at (585) 325-2520 — consumer and benefits representation across 14-county Western NY service area."
    ]
  },

  example: {
    en: "Rita lives alone in Monroe County and receives SNAP benefits. She had no phone and was missing calls from her doctor and caseworker. She went to lifelinesupport.org and applied for Lifeline. The National Verifier checked the SNAP database and approved her within minutes — no separate income documentation required. The system showed five participating wireless providers in her ZIP code with $0-a-month plans. Rita chose one and completed enrollment. A phone arrived in the mail within a week. She now has a working phone at no monthly cost. Under the auto-recertification rule, USAC will recheck her SNAP status each year; if it changes, she will receive notice before any benefit termination."
  },

  counsel: [
    {
      type: "government",
      name: "USAC Lifeline Support Center",
      focus: "Lifeline applications, eligibility questions, provider referrals",
      qualifier: "Any U.S. household seeking Lifeline",
      access: "Phone, online, mail",
      outcome: "Application processing and enrollment support",
      phone: "(800) 234-9473",
      url: "https://www.lifelinesupport.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "Legal Aid Society of Rochester",
      focus: "Lifeline denial disputes and provider complaint representation",
      qualifier: "Low-income Monroe County resident",
      access: "Phone intake",
      outcome: "Free representation and advice",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "LawNY — Legal Assistance of Western New York",
      focus: "Consumer and benefits representation including Lifeline disputes",
      qualifier: "Low-income resident in 14 Western NY counties including Monroe",
      access: "Phone intake",
      outcome: "Free representation",
      phone: "(585) 325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "snap-rights-ny",
    "medicaid-ny",
    "ssi-disability-ny",
    "section-8-housing-voucher-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "Lifeline program",
    "47 USC 254",
    "USAC National Verifier",
    "\$9.25 phone discount",
    "Enhanced Tribal benefit",
    "Safe Connections Act",
    "SNAP Lifeline automatic qualify",
    "Medicaid Lifeline",
    "low-income phone",
    "Lifeline annual recertification"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/47/254",
    "https://www.fcc.gov/lifeline-consumers",
    "https://www.lifelinesupport.org",
    "https://www.usac.org/lifeline/"
  ],

  lastVerified: "2026-04-21",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
