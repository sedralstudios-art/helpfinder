export const COLLECTING_COURT_JUDGMENT_NY = {
  id: "collecting-court-judgment-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY CVP A52",
  status: "active",

  title: { en: "Collecting a Court Judgment — What to Do After Winning But Not Getting Paid" },

  summary: {
    en: "Winning a court case does not mean the money automatically shows up. If the person who owes the money does not pay voluntarily, the winner has to take extra steps to collect. New York law provides tools like bank freezes and wage deductions, but using them takes time and paperwork."
  },

  whoQualifies: {
    en: [
      "Anyone who won a money judgment in court (small claims, civil, or family) and has not been paid.",
      "Anyone whose judgment is more than 30 days old and the other side has not made any payments.",
      "Anyone who wants to find out what property or bank accounts the other side has.",
      "Anyone who needs to renew a judgment that is about to expire."
    ]
  },

  whatItMeans: {
    en: "A court judgment in New York is only the first step. The court does not collect money on behalf of the winning party. The judgment creditor has to use enforcement tools set out in Article 52 of the Civil Practice Law and Rules (CPLR). Most of these tools are forms that the creditor files with the county clerk or the court that issued the judgment.\n\nTimeline and interest. A money judgment in New York is enforceable for 20 years from the date of entry under CPLR 211. Statutory post-judgment interest runs at 9 percent per year for most judgments under CPLR 5004; consumer-debt judgments against natural persons (judgments entered after April 30, 2022 in actions arising out of consumer debt) carry a 2 percent rate per a 2021 amendment. That interest adds up over time.\n\nThe information subpoena. Before a creditor can target specific bank accounts or employers, the creditor needs information about the debtor's finances. CPLR 5224 authorizes an information subpoena. This is a form with written questions about income sources, bank accounts, employers, property, and vehicles. The debtor has to answer under oath within a set period (usually 7 days). Failure to respond can trigger a contempt motion.\n\nThe restraining notice. Once the creditor knows which bank the debtor uses, CPLR 5222 authorizes a restraining notice. The notice is served on the bank and freezes the account up to twice the amount of the judgment for up to one year. The debtor cannot withdraw, and the bank cannot release funds to the debtor. The restraining notice does not transfer the money to the creditor — it just holds the account.\n\nThe property execution. To actually take the frozen money, the creditor uses a property execution under CPLR 5230. This is filed with a sheriff (counties) or a city marshal (NYC). The sheriff or marshal serves the execution on the bank and the bank transfers the money to the sheriff, who then pays the creditor after taking a small statutory fee.\n\nThe income execution. CPLR 5231 authorizes garnishment of wages. The creditor can take up to 10 percent of the debtor's gross wages, or up to 25 percent of disposable wages (whichever is less). Lower-income debtors are protected — wages cannot be garnished at all if the debtor earns less than 30 times the federal minimum wage per week. The income execution is served first on the debtor (20-day window to pay) and then on the employer. The employer is legally required to comply.\n\nExempt money and property. Not everything is collectable. Social Security, SSI, SSD, VA benefits, public assistance, unemployment insurance, and workers' compensation are exempt under federal and state law. A baseline amount in most bank accounts is automatically exempt under CPLR 5222 and 5222-i (currently $3,720 outside NYC/Long Island/Westchester and $3,960 in those higher-cost zones, indexed periodically). Basic household goods, a work vehicle up to a statutory value, and pension accounts are all protected. When a bank freeze hits an account that contains exempt money, the debtor can claim the exemption with a court-approved form.\n\nWhen the debtor has nothing. If the debtor has no job, no bank account, no property, and no regular income, the judgment is uncollectable for now. It stays on the books for 20 years. A debtor who later gets a job, buys a home, or inherits money can be targeted at that point. The creditor can also renew the judgment for another 10 years under CPLR 211.\n\nSmall claims judgments. For small claims court judgments (up to $10,000 in NYC, up to $5,000 in city courts including Rochester, and up to $3,000 in town and village courts), the court clerk's office has simplified forms and can explain the process. Collection tools are the same as for regular civil court judgments."
  },

  yourRights: {
    en: [
      "A judgment creditor has the right to use legal tools to collect, including bank freezes, wage deductions, and property seizure.",
      "A judgment creditor has the right to send an information subpoena to learn about the debtor's finances.",
      "A judgment creditor has the right to statutory post-judgment interest under CPLR 5004 — 9 percent for most judgments, 2 percent for consumer-debt judgments against natural persons.",
      "A judgment is enforceable for 20 years from the date it was entered.",
      "A judgment debtor has the right to certain exemptions — some income and property is protected from collection, including a portion of wages, public benefits, and basic household goods.",
      "A judgment debtor has the right to challenge a bank freeze if the frozen money comes from exempt sources like Social Security or disability payments."
    ]
  },

  legalOptions: {
    en: [
      "An information subpoena (CPLR 5224) can be sent to the debtor to find out where they bank, where they work, and what property they own.",
      "A restraining notice (CPLR 5222) can be served on the debtor's bank, which freezes the account for up to one year.",
      "A property execution (CPLR 5230) can be filed with the sheriff or marshal to seize funds from the debtor's bank account.",
      "An income execution (CPLR 5231) can take up to 10% of the debtor's gross wages. The employer is required to comply.",
      "For small claims judgments, the court clerk's office can help with collection forms and procedures.",
      "Free legal help with judgment collection is available through JustCause (formerly VLSP) at (585) 232-3051 and Legal Aid Society of Rochester at (585) 232-4090."
    ]
  },

  example: {
    en: "Linda won a $3,500 small claims judgment against a former landlord who never returned her security deposit. The landlord ignored the judgment for 60 days. Linda went to the court clerk and got an information subpoena, which she mailed to the landlord. The landlord was required to answer within seven days. When the landlord revealed a bank account, Linda filed a property execution with the county sheriff. The sheriff served the bank, and the $3,500 plus interest was taken from the landlord's account and sent to Linda."
  },

  counsel: [
    {
      type: "free",
      name: "JustCause (formerly Volunteer Legal Services Project)",
      focus: "Consumer law, judgment collection, small claims follow-up",
      qualifier: "Low and moderate income Monroe County residents",
      access: "Phone intake at (585) 232-3051",
      outcome: "Legal advice and help with collection tools",
      phone: "(585) 232-3051",
      url: "https://www.justcause.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "small-claims-procedure-ny",
    "security-deposit-ny",
    "default-judgment-ny",
    "wage-garnishment-defense-ny",
    "judgment-proof-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "collect judgment",
    "court judgment",
    "won court case",
    "judgment collection",
    "bank freeze",
    "wage garnishment",
    "information subpoena",
    "small claims collection",
    "judgment not paid",
    "enforce judgment"
  ],

  sources: [
    "https://www.nycourts.gov/courthelp/AfterCourt/collectJudgment.shtml",
    "https://www.nysenate.gov/legislation/laws/CVP/A52"
  ],

  lastVerified: "2026-04-27",
  factCheckedBy: { tool: "websearch+webfetch", date: "2026-04-27" },
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
