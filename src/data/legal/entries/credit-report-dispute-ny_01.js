export const CREDIT_REPORT_DISPUTE_NY = {
  id: "credit-report-dispute-ny",
  category: "consumer",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-statute",
  status: "active",

  title: { en: "Disputing Errors on Your Credit Report" },

  summary: {
    en: "Errors on credit reports are common — wrong accounts, debts that have been paid, accounts that belong to someone else, and collections for amounts that are wrong. Under the Fair Credit Reporting Act, credit bureaus must investigate disputes within 30 days and remove or correct inaccurate information. Checking your report and disputing errors is free."
  },

  whoQualifies: {
    en: [
      "Anyone who has found an error on their credit report — wrong balance, wrong account, paid debt still showing, identity theft accounts, or accounts belonging to someone else.",
      "Anyone who has been denied credit, housing, employment, or insurance based on their credit report.",
      "Every person in the US is entitled to one free credit report per year from each of the three bureaus through annualcreditreport.com."
    ]
  },

  whatItMeans: {
    en: "Under the Fair Credit Reporting Act (15 USC § 1681), credit reporting agencies (Equifax, Experian, TransUnion) must maintain accurate records and investigate disputes. When a consumer disputes an item, the bureau must investigate within 30 days by contacting the company that reported the information (the 'furnisher'). If the furnisher cannot verify the information, the item must be deleted. The consumer must be notified of the results in writing. If the dispute is denied, the consumer can add a 100-word statement to the report explaining their position. In New York, consumers have additional protections — including a free security freeze and the right to sue credit bureaus that fail to correct errors after proper notice. Common errors include: accounts from identity theft, debts discharged in bankruptcy still showing as owed, paid collections still showing as unpaid, wrong balances, wrong payment history, and accounts belonging to someone with a similar name or SSN."
  },

  yourRights: {
    en: [
      "The right to one free credit report per year from each bureau at annualcreditreport.com.",
      "The right to dispute any inaccurate or incomplete information.",
      "The bureau must investigate within 30 days and remove unverified items.",
      "The right to a free security freeze to prevent new accounts from being opened in your name.",
      "The right to know if your credit report was used to deny you credit, housing, employment, or insurance (called an adverse action notice).",
      "The right to sue a bureau or furnisher that fails to correct known errors."
    ]
  },

  legalOptions: {
    en: [
      "Free credit reports are available at annualcreditreport.com — the only official source. Third-party sites that offer 'free' reports often come with strings attached.",
      "Disputes can be filed online at each bureau's website: equifax.com, experian.com, transunion.com. Filing by mail with return receipt is recommended for documentation purposes.",
      "The dispute letter should identify the specific item, explain why it is wrong, and include any supporting documents (paid-in-full letters, court orders, identity theft reports).",
      "If the bureau does not correct the error after a proper dispute, free legal help is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "For identity theft-related errors, the process begins at identitytheft.gov (see the identity theft entry in this library)."
    ]
  },

  example: {
    en: "A woman in Rochester checks her credit report and finds a collection for $1,200 that she already paid two years ago. She gathers the payment confirmation and sends a dispute letter to all three credit bureaus by certified mail. Within 25 days, two bureaus remove the collection. The third confirms it as accurate. She sends a second dispute with the payment receipt attached. The third bureau removes it within two weeks."
  },

  counsel: [
    {
      type: "free",
      name: "AnnualCreditReport.com (Official Free Reports)",
      focus: "Free credit reports from all three bureaus",
      qualifier: "Anyone in the US — one free report per bureau per year",
      access: "Online",
      outcome: "Free credit report access",
      phone: "(877) 322-8228",
      url: "https://www.annualcreditreport.com",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Credit report errors, consumer rights, FCRA disputes",
      qualifier: "Low-income residents of Monroe and surrounding counties",
      access: "Phone intake",
      outcome: "Direct representation or advice",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "identity-theft-ny",
    "debt-collection-rights-ny",
    "default-judgment-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "credit report",
    "credit dispute",
    "wrong credit",
    "error credit report",
    "FCRA",
    "credit bureau",
    "Equifax",
    "Experian",
    "TransUnion",
    "security freeze",
    "paid debt showing",
    "annualcreditreport"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/15/1681",
    "https://www.annualcreditreport.com"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
