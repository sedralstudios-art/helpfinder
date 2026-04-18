export const ERISA_PENSION_RIGHTS_NY = {
  id: "erisa-pension-rights-ny",
  category: "benefits",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-statute",
  status: "active",

  title: { en: "ERISA Pension Rights — Protecting Retirement Benefits From a Current or Former Employer" },

  summary: {
    en: "The federal ERISA law governs most private-sector pensions and 401(k)s. It requires plan administrators to disclose information, act in participants' best interest, and process claims fairly. A participant who was denied benefits, miscalculated, or frozen out has specific appeal and lawsuit rights. ERISA claims have short deadlines — usually set by the plan itself."
  },

  whoQualifies: {
    en: [
      "Any worker or former worker with a vested pension or 401(k) from a private employer.",
      "Any surviving spouse of a worker with a pension who is being denied survivor benefits.",
      "Any person whose pension was frozen, reduced, or terminated.",
      "Any person told their pension plan was mismanaged or the employer went bankrupt."
    ]
  },

  whatItMeans: {
    en: "The Employee Retirement Income Security Act (ERISA, 29 USC Sections 1001-1461) sets minimum standards for most private-sector pension and welfare plans. It does not require an employer to offer a retirement plan, but if one is offered, ERISA applies. Key protections: vesting (benefits become nonforfeitable after a set number of years, typically 3-5), fiduciary duty (plan administrators must act in participants' best interest), funding (defined-benefit plans must be funded to specific levels), reporting and disclosure (participants have the right to a Summary Plan Description and annual statements), and claims procedures (participants who are denied benefits have the right to a written explanation and an appeal). If the plan denies a benefit claim, the participant can request a review under the plan's claims procedure — usually within 60-180 days. If the internal appeal is denied, the participant can file a civil action in federal court under Section 502 of ERISA. Most ERISA claims are decided on the administrative record developed during the internal appeal — so the appeal itself is the critical stage to build the case. When an employer goes bankrupt and cannot fund the pension, the Pension Benefit Guaranty Corporation (PBGC) steps in for qualifying defined-benefit plans, paying benefits up to federal limits. Government, church, and some small-employer plans are exempt from ERISA. Union multiemployer plans have special rules. A surviving spouse has separate ERISA rights to a qualified joint-and-survivor annuity unless the spouse consented to waive it in writing."
  },

  yourRights: {
    en: [
      "A plan participant has the right to a Summary Plan Description (SPD) describing how the plan works.",
      "A participant has the right to an annual benefit statement showing accrued benefits.",
      "A participant denied a benefit has the right to a written explanation and a full and fair review.",
      "A participant can file a civil action in federal court after exhausting internal appeals.",
      "A surviving spouse has the right to a qualified joint-and-survivor annuity unless consent to waive was in writing.",
      "Plan fiduciaries can be held personally liable for breach of fiduciary duty."
    ]
  },

  legalOptions: {
    en: [
      "Request the Summary Plan Description from the plan administrator — it explains the claims procedure and deadlines.",
      "File an internal appeal within the plan's deadline (check the denial letter — typically 60-180 days).",
      "The U.S. Department of Labor Employee Benefits Security Administration (EBSA) takes ERISA complaints at (866) 444-3272.",
      "For a federal lawsuit, an ERISA attorney can evaluate the administrative record. Monroe County Bar Association referral at (585) 546-2130.",
      "For a lost pension from a former employer that has since closed or changed hands, search the PBGC's missing participants database at pbgc.gov.",
      "Pension Action Center (free help for low-income beneficiaries, particularly women) at (888) 425-6067."
    ]
  },

  example: {
    en: "After working 28 years at a Rochester-area manufacturer, Carlos retired at 65 and filed for his pension. The plan calculated his monthly benefit at $1,800, but he had been told for years it would be closer to $2,400. He requested the Summary Plan Description and his benefit calculation worksheet. Comparing the two showed the plan had used a lower average salary than required by the plan's own formula. He filed an internal appeal within the 180-day window. The plan's second-level review corrected the calculation and increased his monthly benefit by $650 — retroactive to his retirement date."
  },

  counsel: [
    {
      type: "government",
      name: "U.S. DOL — Employee Benefits Security Administration (EBSA)",
      focus: "ERISA compliance, participant benefits disputes, plan investigations",
      qualifier: "Any participant in a private-sector ERISA plan",
      access: "Phone at (866) 444-3272",
      outcome: "Investigation, mediation, enforcement",
      phone: "(866) 444-3272",
      url: "https://www.dol.gov/agencies/ebsa",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Pension Action Center",
      focus: "Free help for pension participants — calculation disputes, survivor benefits, PBGC claims",
      qualifier: "Primarily serves women and low-income participants",
      access: "Phone at (888) 425-6067",
      outcome: "Pension review, claim preparation, advocacy",
      phone: "(888) 425-6067",
      url: "https://www.pensionaction.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "retirement-401k-early-withdrawal-ny",
    "social-security-survivors-benefits-ny",
    "ssdi-denial-appeal-ny",
    "cobra-health-insurance-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "ERISA",
    "pension rights",
    "pension denied",
    "401k dispute",
    "retirement plan fiduciary",
    "PBGC",
    "pension calculation",
    "Summary Plan Description",
    "qualified joint survivor annuity",
    "lost pension"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/29/1001",
    "https://www.law.cornell.edu/uscode/text/29/1132",
    "https://www.dol.gov/agencies/ebsa"
  ],

  lastVerified: "2026-04-18",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
