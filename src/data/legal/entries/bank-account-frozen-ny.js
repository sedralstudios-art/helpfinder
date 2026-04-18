export const BANK_ACCOUNT_FROZEN_NY = {
  id: "bank-account-frozen-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Bank Account Frozen — Why It Happened and How to Unfreeze It" },

  summary: {
    en: "When a bank account is frozen, the account holder cannot withdraw money, write checks, or use the debit card. A freeze usually happens because a creditor obtained a court judgment and served a restraining notice on the bank. But certain income — like Social Security, SSI, veterans benefits, and public assistance — is protected from being frozen."
  },

  whoQualifies: {
    en: [
      "Anyone whose bank account was suddenly frozen and they cannot access their money.",
      "Anyone who received a notice from the bank about a restraining notice or levy.",
      "Anyone whose frozen account contains Social Security, SSI, disability, or public assistance deposits.",
      "Anyone who did not know they had a court judgment against them."
    ]
  },

  whatItMeans: {
    en: "Under CPLR Article 52, a creditor who wins a money judgment in court can serve a restraining notice on the debtor's bank. The bank must freeze the account immediately. The creditor then has up to one year to serve a property execution to actually take the money. Under federal and state law, certain funds are exempt from being frozen or taken. Social Security, SSI, veterans benefits, public assistance, child support received, workers' compensation, and unemployment benefits are all protected. Under the federal rule (31 CFR Part 212), if the bank can see that the last two months of deposits include protected benefits through direct deposit, the bank must automatically protect up to two months' worth of those deposits and keep them available to the account holder — even if the rest of the account is frozen. If the bank froze exempt funds, the account holder can file an exemption claim to get them released. The debtor has the right to challenge the freeze entirely if the underlying judgment is wrong."
  },

  yourRights: {
    en: [
      "Social Security, SSI, veterans benefits, public assistance, child support, workers' comp, and unemployment are exempt from freezing.",
      "The bank must automatically protect two months of exempt direct deposits and keep them available even when the rest of the account is frozen.",
      "The debtor has the right to file an exemption claim to release protected funds that were improperly frozen.",
      "The debtor has the right to receive notice of the restraining notice from the bank.",
      "The debtor has the right to challenge the underlying judgment if they were never properly served with the lawsuit.",
      "A judgment creditor cannot freeze an account without first winning a court case — if no judgment exists, the freeze is illegal."
    ]
  },

  legalOptions: {
    en: [
      "Under 31 CFR Part 212, banks must automatically protect two months of exempt direct deposits (Social Security, SSI, VA, etc.) from being frozen.",
      "If exempt funds were frozen, the account holder can file an exemption claim with the court. The creditor must respond, and a hearing is scheduled.",
      "If the debtor did not know about the lawsuit that led to the judgment, they can file a motion to vacate the default judgment under CPLR 5015.",
      "The bank must send the account holder a notice explaining the freeze, the amount frozen, and how to claim exemptions.",
      "Free legal help with frozen accounts and judgment defense is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "If the freeze is causing an emergency (cannot pay rent, buy food, or get medication), Legal Aid may be able to get an emergency court order releasing the exempt funds."
    ]
  },

  example: {
    en: "When Donna checked her bank balance, it was zero — her entire $2,800 was frozen. She had never been served with a lawsuit, but a debt collector had obtained a default judgment and served a restraining notice on her bank. Donna called Legal Aid, which found that $1,900 of the frozen money was her monthly Social Security deposit. Legal Aid filed an exemption claim and a motion to vacate the default judgment. The court released the $1,900 in exempt funds within a week. The motion to vacate was granted because Donna was never properly served with the original lawsuit."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Frozen accounts, judgment defense, exempt funds, debt collection",
      qualifier: "Low income residents of Monroe and surrounding counties",
      access: "Phone intake at (585) 232-4090",
      outcome: "Emergency motions, exemption claims, judgment defense",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "debt-collection-rights-ny",
    "wage-garnishment-defense-ny",
    "wage-garnishment-exemptions-ny",
    "default-judgment-ny",
    "judgment-proof-ny",
    "respond-to-lawsuit-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "bank account frozen",
    "account frozen",
    "restraining notice bank",
    "bank levy",
    "frozen bank account",
    "Social Security frozen",
    "exempt funds bank",
    "creditor froze account",
    "bank account seized",
    "judgment bank freeze",
    "cant access money bank"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CVP/A52",
    "https://www.law.cornell.edu/cfr/text/31/part-212"
  ],

  lastVerified: "2026-04-17",
  volatility: "low",
  emergencyFlag: true,
  disclaimer: true,
  categoryDisclaimer: null
};
