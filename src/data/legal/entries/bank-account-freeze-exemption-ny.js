export const BANK_ACCOUNT_FREEZE_EXEMPTION_NY = {
  id: "bank-account-freeze-exemption-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY CVP 5222",
  status: "active",

  title: { en: "Frozen Bank Account — Exempt Funds and How to Get Them Released" },

  summary: {
    en: "When a creditor gets a judgment, the creditor can freeze a bank account to collect. But certain funds are protected — Social Security, SSI, veterans benefits, unemployment, public assistance, child support, and a base $3,600 for any New Yorker. The bank must send an Exemption Notice with two claim forms. Filing the Exemption Claim Form within 20 days can unfreeze the protected money."
  },

  whoQualifies: {
    en: [
      "Any New York resident whose bank account was frozen because of a court judgment.",
      "Any account holder who receives Social Security, SSI, SSDI, veterans benefits, public assistance, or unemployment deposited in the frozen account.",
      "Any account holder who received child support deposits into the frozen account.",
      "Any low-income account holder who believes the freeze leaves them with no money to live on."
    ]
  },

  whatItMeans: {
    en: "Under New York Civil Practice Law and Rules Section 5222-a (the Exempt Income Protection Act), a bank that receives a restraining notice or levy on a judgment debtor's account must look at the last 45 days of deposits. If any deposits appear to be from an exempt source (electronic deposits that look like Social Security, SSI, veterans benefits, unemployment, or public assistance), the bank must automatically leave those funds accessible. Separately, the first $3,600 in any account is automatically protected under CPLR Section 5222(i) — this baseline applies to every New Yorker regardless of the source of funds. For funds that appear non-exempt, the bank freezes them but must mail the account holder two copies of an Exemption Notice and Exemption Claim Form within two business days. The account holder has 20 days to complete and return the Claim Form with proof (bank statements, benefits letters, pay stubs). Once the claim is filed, the bank has 7 days to release the exempt funds unless the creditor objects. Common exempt sources include Social Security retirement, SSI, SSDI, veterans benefits, federal and state unemployment, public assistance (TA, SNAP cash assistance), child and spousal support, railroad retirement, and the $3,600 baseline. The restraining notice itself is only valid for one year and cannot touch funds deposited after it was served (new deposits restart the 45-day look-back). A creditor that froze exempt funds in bad faith can be liable for the account holder's damages."
  },

  yourRights: {
    en: [
      "Every New Yorker has an automatic $3,600 baseline exemption in any bank account under CPLR Section 5222(i).",
      "Funds from Social Security, SSI, veterans benefits, unemployment, and public assistance are fully exempt under CPLR Section 5222-a.",
      "The bank must mail the Exemption Notice and two Claim Forms within two business days of the freeze.",
      "The account holder has 20 days from the mailing date to file the Exemption Claim Form.",
      "The bank has 7 days to release exempt funds after the claim is filed, unless the creditor objects within 8 days.",
      "A bank or creditor that violates the exemption rules can be liable for damages."
    ]
  },

  legalOptions: {
    en: [
      "File the Exemption Claim Form immediately — it comes with the bank's freeze notice. The form is also available at nycourts.gov/courthelp.",
      "Attach proof: bank statements showing exempt deposits, benefits award letters, pay stubs, or a printout from the benefits agency.",
      "Free legal help with bank freezes is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "Empire Justice Center at (585) 454-4060 handles consumer debt defense including exemption claims.",
      "If the freeze is causing immediate harm (rent due, medication needed), an emergency motion to vacate the restraint can be filed in the issuing court.",
      "For repeated or bad-faith freezes of exempt funds, the NYS Attorney General at (800) 771-7755 takes complaints."
    ]
  },

  example: {
    en: "After a default judgment on a medical debt, a tenant in Rochester found her bank account frozen with $2,400 in it. The entire balance came from her monthly Social Security Disability deposit. The bank mailed the Exemption Notice and two Claim Forms. She filled out one Claim Form marking the SSDI box and mailed it to the bank and the creditor's attorney with a copy of her SSDI award letter. Within a week, the bank released all the funds. The freeze on future SSDI deposits was lifted automatically under CPLR 5222-a."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Debt collection defense, bank freeze exemptions, emergency motions",
      qualifier: "Low income residents of Monroe County",
      access: "Phone intake at (585) 232-4090",
      outcome: "Exemption claims, motions to vacate restraints, debt defense",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Empire Justice Center",
      focus: "Consumer debt, exempt income protection, systemic advocacy",
      qualifier: "Low and moderate income NY residents",
      access: "Phone at (585) 454-4060",
      outcome: "Direct representation, amicus support, policy advocacy",
      phone: "(585) 454-4060",
      url: "https://www.empirejustice.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "debt-collection-rights-ny",
    "wage-garnishment-exemptions-ny",
    "respond-to-lawsuit-ny",
    "judgment-proof-ny",
    "default-judgment-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "bank account frozen",
    "exempt funds",
    "Social Security exempt",
    "CPLR 5222-a",
    "exemption claim form",
    "frozen account judgment",
    "bank freeze Social Security",
    "$3600 exemption",
    "EIPA",
    "exempt income protection"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CVP/5222",
    "https://www.nysenate.gov/legislation/laws/CVP/5222-A",
    "https://www.nycourts.gov/courthelp/"
  ],

  lastVerified: "2026-04-18",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
