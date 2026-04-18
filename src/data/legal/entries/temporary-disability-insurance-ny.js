export const TEMPORARY_DISABILITY_INSURANCE_NY = {
  id: "temporary-disability-insurance-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY WKC 200",
  status: "active",

  title: { en: "Temporary Disability Insurance (DBL) — Short-Term Cash Benefit for Off-the-Job Illness or Injury in NY" },

  summary: {
    en: "New York is one of five states that requires employers to provide short-term disability insurance (called DBL, for 'Disability Benefits Law') for non-work-related illness or injury. Workers' Compensation Law Article 9 (Section 200-242) requires most private employers to enroll. An employee out of work for a covered disability receives 50 percent of average weekly wage, up to $170 per week, for up to 26 weeks. The separate NY Paid Family Leave (PFL) uses the same policy but covers family care."
  },

  whoQualifies: {
    en: [
      "A private-sector NY employee out of work for non-work-related illness or injury lasting 7+ days.",
      "A pregnant employee in the weeks before and after delivery (4-6 weeks post-delivery typical).",
      "An employee recovering from surgery with medical documentation.",
      "An employee with a temporary disabling condition (fractures, cancer treatment, mental health crisis).",
      "A part-time employee who meets the four-week-of-work eligibility.",
      "A self-employed person who has enrolled voluntarily in DBL coverage."
    ]
  },

  whatItMeans: {
    en: "New York Workers' Compensation Law Article 9 (the Disability Benefits Law or DBL) requires most private-sector employers to provide temporary disability insurance for non-work-related injury and illness. Covered employers: all private employers with one or more employees. Domestic workers with 40+ hours in the same household are covered. Certain government and religious organizations are exempt. Eligibility: an employee must have worked 4 consecutive weeks for a covered employer (or 25 days of regular employment for a domestic worker). An employee is eligible immediately when starting with a new covered employer if the employee previously had DBL coverage at a prior covered NY employer within the past 30 days. Benefit amount: 50 percent of the employee's average weekly wage, capped at $170 per week (the cap has been $170 since 1989 and is notoriously low — legislation has proposed increases but none enacted as of 2026). Benefits begin after a 7-day waiting period and last up to 26 weeks per disability. Payments are taxable income. Applying: the employee obtains Form DB-450 from the employer or the employer's carrier, completes the employee portion, has the treating health care provider complete the medical portion, and submits to the insurance carrier (or self-insured employer) within 30 days of the disability start. The carrier has 14 business days to pay or deny. Pregnancy and childbirth: DBL covers pregnancy-related disability typically 4 weeks before the due date and 6-8 weeks after delivery, based on physician documentation. The separate NY Paid Family Leave covers bonding time with the new child and can be used after DBL ends. Interaction with other leave: DBL can be used concurrently with FMLA for non-serious conditions. Employer group health insurance continues during DBL under FMLA if applicable. Some employees combine DBL with accumulated sick time, though DBL starts only after 7 days and sick time pays full salary. Appeals: if the carrier denies, the employee can request a review from the NYS Workers' Compensation Board Disability Benefits Bureau within 30 days. An administrative law judge conducts a hearing. Board decisions can be appealed to the full Board, then to the Appellate Division. Enrollment: employers buy DBL coverage from an NY-authorized carrier or self-insure. The employee can contribute up to 0.5 percent of wages (capped at $0.60 per week) toward the premium. Most employers use the same carrier for DBL and PFL. Self-employed: a self-employed NY resident can enroll voluntarily. Premium is set by NY Workers' Compensation Board. Coverage is the same. Discontinuation: DBL ends when the employee returns to work, the 26-week maximum is reached, the employee dies, or the carrier determines no ongoing disability. An employee ready to return cannot be fired for having used DBL (Workers' Compensation Law 120). Work-related injury: an injury or illness from work is Workers' Compensation (covered under a separate entry), not DBL. DBL is non-occupational. Paid Family Leave comparison: NY PFL (WCL 200-242 amendments) pays up to 67 percent of average weekly wage, capped at the state maximum (around $1,177 per week in 2024), for up to 12 weeks per year for bonding with a new child, caring for a seriously ill family member, or assisting with military deployment. DBL is narrower but easier to qualify for personal illness."
  },

  yourRights: {
    en: [
      "An eligible employee has the right to DBL benefits for off-the-job illness or injury (WCL 200-242).",
      "An employee has the right to 50 percent of average weekly wage up to $170 per week, for up to 26 weeks.",
      "An employee has the right to apply on Form DB-450 within 30 days of disability start.",
      "An employee has the right to a decision from the carrier within 14 business days.",
      "An employee has the right to appeal a denial to the Workers' Compensation Board within 30 days.",
      "A pregnant employee has the right to DBL for pregnancy-related disability.",
      "An employee cannot be fired for taking DBL (WCL 120).",
      "An employee's group health coverage continues during DBL if FMLA applies."
    ]
  },

  legalOptions: {
    en: [
      "NYS Workers' Compensation Board Disability Benefits Bureau at (877) 632-4996.",
      "NYS WCB Rochester District Office at (585) 238-8400.",
      "Empire Justice Center at (585) 295-5800 — appeals and complex denials.",
      "Legal Aid Society of Rochester at (585) 232-4090 — low-income claimants.",
      "Monroe County Bar Association Lawyer Referral at (585) 546-2130 — disability benefits attorneys.",
      "NY Paid Family Leave Helpline at (844) 337-6303 — parallel PFL questions.",
      "NYS Department of Health at (866) 881-2809 — coordinating with Medicaid.",
      "A Better Balance at (212) 430-5982 — DBL, PFL, and caregiving rights."
    ]
  },

  example: {
    en: "A Rochester warehouse worker broke her ankle stepping off a curb on her day off. Her orthopedist ordered 8 weeks out of work. She completed Form DB-450 with her doctor's signature on day 5 after the injury and submitted to her employer's DBL carrier. The carrier acknowledged in 6 days and began paying $170 per week starting after the 7-day waiting period (her actual wage was $1,100 per week; the $170 cap was well below the 50 percent formula but is the statutory limit). After 8 weeks she returned to work. She also received 2 weeks of her accumulated sick pay during the DBL waiting period and first week, giving her near-full pay for that stretch. She did not need to appeal any denial."
  },

  counsel: [
    {
      type: "government",
      name: "NYS Workers' Compensation Board Disability Benefits Bureau",
      focus: "DBL administration, claim filing, appeals, enforcement",
      qualifier: "Any NY claimant or employer",
      access: "Phone at (877) 632-4996",
      outcome: "Claim processing, hearing scheduling, decisions",
      phone: "(877) 632-4996",
      url: "https://www.wcb.ny.gov/content/main/DisabilityBenefits",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Empire Justice Center",
      focus: "DBL denial appeals, employer retaliation, complex cases",
      qualifier: "Low-income NY claimants",
      access: "Phone at (585) 295-5800",
      outcome: "Administrative appeals, litigation, policy advocacy",
      phone: "(585) 295-5800",
      url: "https://empirejustice.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "ny-paid-family-leave",
    "paid-sick-leave-ny",
    "workers-compensation-ny",
    "paid-prenatal-leave-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "temporary disability insurance",
    "DBL",
    "Workers Compensation Law 200",
    "Article 9 WCL",
    "Form DB-450",
    "short term disability",
    "non-occupational",
    "pregnancy disability",
    "26 week benefit",
    "170 weekly cap"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/WKC/A9",
    "https://www.nysenate.gov/legislation/laws/WKC/200",
    "https://www.wcb.ny.gov/content/main/DisabilityBenefits"
  ],

  lastVerified: "2026-04-18",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
