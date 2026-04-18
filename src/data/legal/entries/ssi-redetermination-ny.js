export const SSI_REDETERMINATION_NY = {
  id: "ssi-redetermination-ny",
  category: "benefits",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-statute",
  primaryStatute: "42 USC 1382",
  status: "active",

  title: { en: "SSI Redetermination — What Happens When Social Security Reviews Benefits" },

  summary: {
    en: "Social Security periodically reviews SSI recipients to make sure they still qualify. This is called a redetermination. During a redetermination, Social Security checks income, resources, and living arrangements. If something changed, SSI payments can be reduced, increased, or stopped. A recipient who disagrees with the result can appeal."
  },

  whoQualifies: {
    en: [
      "Any SSI recipient who received a redetermination notice from Social Security.",
      "Any SSI recipient whose benefits were reduced or stopped after a review.",
      "Any SSI recipient who had a change in income, savings, or living situation and wants to know how it affects benefits.",
      "Any family member or representative payee of an SSI recipient going through a redetermination."
    ]
  },

  whatItMeans: {
    en: "Supplemental Security Income (SSI) is a needs-based program. Unlike SSDI, which is based on work history, SSI is based on income and resources. Social Security reviews SSI cases regularly — usually every 1 to 6 years — to confirm that the recipient still meets the financial requirements. During a redetermination, Social Security looks at countable income (wages, other benefits, gifts of money), countable resources (bank accounts, investments — the limit is $2,000 for an individual or $3,000 for a couple), and living arrangements (where the recipient lives and whether someone else is paying their expenses). A redetermination is not a disability review — it does not re-evaluate whether the person is still disabled. That is a separate process called a Continuing Disability Review (CDR). If the redetermination shows that income or resources exceed the limits, SSI payments can be reduced or stopped. If it shows an overpayment (the recipient received more than they were entitled to), Social Security will send an overpayment notice and begin recovering the money. The recipient has the right to appeal the redetermination result, request a waiver of overpayment if they were not at fault and cannot afford to repay, and request continued benefits during the appeal."
  },

  yourRights: {
    en: [
      "An SSI recipient has the right to advance notice before benefits are reduced or stopped. The notice must explain the reason and how to appeal.",
      "An SSI recipient has the right to appeal within 60 days of the redetermination decision.",
      "If the appeal is filed within 10 days of the notice, benefits continue at the current level during the appeal (aid-continuing).",
      "An SSI recipient who received an overpayment notice has the right to request a waiver — if the overpayment was not their fault and repayment would cause hardship, the overpayment can be forgiven.",
      "An SSI recipient has the right to a representative (attorney or non-attorney) at any appeal hearing.",
      "An SSI recipient must report changes in income, resources, or living arrangements within 10 days — failure to report can result in overpayments and penalties."
    ]
  },

  legalOptions: {
    en: [
      "Legal Aid Society of Rochester at (585) 232-4090 handles SSI appeals and overpayment waiver requests for low-income residents.",
      "Empire Justice Center at (585) 454-4060 handles Social Security appeals and systemic benefits advocacy.",
      "The local Social Security office in Rochester at (866) 964-1893 handles redetermination questions and appeals.",
      "An SSI recipient who receives an overpayment notice should immediately request a waiver (Form SSA-632) if they were not at fault.",
      "The Center for Disability Rights at (585) 546-7510 can help SSI recipients understand redetermination and connect with legal help.",
      "If benefits are stopped and the recipient filed an appeal within 10 days, benefits must continue — if they do not, contact the Social Security office immediately."
    ]
  },

  example: {
    en: "Maria receives SSI for a disability. During a redetermination, Social Security found that her savings account had grown to $2,400 — over the $2,000 resource limit — because she had been saving for an emergency. Social Security sent a notice saying her SSI would stop. Maria contacted Legal Aid Society of Rochester. Her attorney helped her set up an ABLE account (a savings account for people with disabilities that does not count against the SSI resource limit) and filed an appeal showing that Maria's savings had dropped back below $2,000. Her SSI was reinstated."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "SSI appeals, overpayment waivers, Social Security benefits",
      qualifier: "Low income residents of Monroe County",
      access: "Phone intake at (585) 232-4090",
      outcome: "Legal representation in SSI appeals and redetermination disputes",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "Center for Disability Rights",
      focus: "Disability benefits, SSI assistance, independent living",
      qualifier: "People with disabilities in the Rochester area",
      access: "Phone at (585) 546-7510",
      outcome: "Benefits navigation, advocacy, referrals",
      phone: "(585) 546-7510",
      url: "https://www.cdrnys.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "ssi-disability-ny",
    "ssdi-ny",
    "ssdi-denial-appeal-ny",
    "benefit-overpayment-ny",
    "benefits-denial-appeal-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "SSI redetermination",
    "SSI review",
    "SSI stopped",
    "SSI reduced",
    "SSI overpayment",
    "SSI resource limit",
    "SSI income review",
    "Social Security review",
    "SSI appeal",
    "SSI waiver",
    "SSI savings limit"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/42/1382",
    "https://www.ssa.gov/ssi/",
    "https://www.ssa.gov/pubs/EN-05-11011.pdf"
  ],

  lastVerified: "2026-04-17",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
