export const WAGE_GARNISHMENT_EXEMPTIONS_NY = {
  id: "wage-garnishment-exemptions-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY CVP 5231",
  status: "active",

  title: { en: "Wage Garnishment Exemptions — How Much of a Paycheck Is Protected in New York" },

  summary: {
    en: "When a creditor gets a judgment and tries to garnish wages, New York law protects a significant portion of the paycheck. The creditor can only take the lesser of 10% of gross earnings or 25% of disposable earnings — and nothing if the worker earns less than 30 times the minimum wage per week. Social Security, SSI, public assistance, unemployment, and veterans benefits are completely exempt from garnishment. Many workers do not claim these exemptions because they do not know they exist."
  },

  whoQualifies: {
    en: [
      "Any worker whose wages are being garnished or threatened with garnishment by a creditor.",
      "Any person receiving Social Security, SSI, VA benefits, public assistance, or unemployment — these are fully exempt.",
      "Any worker earning close to minimum wage — wages below 30 times the state minimum hourly wage per week are fully protected.",
      "These exemptions do not apply to child support and tax garnishments, which have different rules."
    ]
  },

  whatItMeans: {
    en: "Under CPLR § 5231 and federal law (15 USC § 1673), wage garnishment in New York is limited to the lesser of: 10% of gross wages, or 25% of disposable earnings (gross minus legally required deductions like taxes and Social Security). If the worker's disposable earnings are less than 30 times the federal minimum wage per week, no garnishment is allowed. New York's 10% limit is more protective than the federal 25% limit — whichever is lower applies. Fully exempt income: Social Security benefits (retirement, disability, survivors), SSI, veterans benefits, public assistance (TANF, Safety Net), unemployment insurance benefits, workers' compensation, disability insurance, and child support payments received. These cannot be garnished by any creditor for any debt (except federal tax debt and some federal student loan situations). Bank account exemptions: under CPLR § 5222-a, the first $3,600 in a bank account is automatically exempt from a bank levy (restraint). If the account contains identifiable exempt funds (like direct-deposited Social Security), the entire amount of exempt funds is protected regardless of the balance."
  },

  yourRights: {
    en: [
      "Only the lesser of 10% of gross wages or 25% of disposable earnings can be garnished.",
      "If earnings are below 30 times the minimum wage per week, no garnishment is allowed.",
      "Social Security, SSI, VA benefits, unemployment, and public assistance are fully exempt.",
      "The first $3,600 in a bank account is automatically exempt from a bank levy.",
      "Exempt funds (Social Security, etc.) deposited in a bank are protected regardless of the amount.",
      "The worker can file an exemption claim with the court to stop or reduce the garnishment."
    ]
  },

  legalOptions: {
    en: [
      "If wages are being garnished, the worker can file an exemption claim with the court — the form is usually provided with the garnishment notice.",
      "The exemption claim should specify which income is exempt (Social Security, SSI, VA, etc.) and provide proof (bank statements showing direct deposits, benefit letters).",
      "If the garnishment exceeds the legal limits, an attorney can file a motion to reduce or stop the garnishment.",
      "Free legal help with garnishment exemptions is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "If a bank account is frozen (restrained), the bank must automatically protect the first $3,600. If more than that is exempt (identifiable Social Security deposits), the worker should notify the bank and the court immediately."
    ]
  },

  example: {
    en: "A woman in Rochester earns $600 per week gross. A creditor obtains a judgment and starts garnishing her wages. Under New York law, the creditor can take only 10% of gross ($60/week) — not the 25% federal maximum ($150/week). She also receives $800/month in Social Security survivor benefits deposited into her bank account. That Social Security money is fully exempt — if the creditor tries to freeze her bank account, the bank must protect the exempt funds."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Wage garnishment exemptions, debt defense, bank levies",
      qualifier: "Low-income residents of Monroe County",
      access: "Phone intake",
      outcome: "Legal advice and representation",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "wage-garnishment-defense-ny",
    "judgment-proof-ny",
    "respond-to-lawsuit-ny",
    "default-judgment-ny",
    "debt-collection-rights-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "wage garnishment",
    "garnishment exemption",
    "10 percent rule",
    "exempt income",
    "Social Security exempt",
    "bank levy",
    "bank freeze",
    "$3600 exempt",
    "CPLR 5231",
    "disposable earnings",
    "minimum wage garnishment",
    "exemption claim"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CVP/5231",
    "https://www.nysenate.gov/legislation/laws/CVP/5222-A"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
