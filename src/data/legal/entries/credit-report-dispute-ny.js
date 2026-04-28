export const CREDIT_REPORT_DISPUTE_NY = {
  id: "credit-report-dispute-ny",
  category: "consumer",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-statute",
  primaryStatute: "15 USC 1681",
  status: "active",

  title: { en: "Disputing an Error on a Credit Report — Rights Under the Fair Credit Reporting Act (15 USC 1681)" },

  summary: {
    en: "Errors on credit reports are common — wrong accounts, debts already paid, accounts belonging to someone else, collections for the wrong amount, and leftover items from identity theft. The federal Fair Credit Reporting Act (FCRA, 15 USC 1681) requires the three credit bureaus to investigate a written dispute within 30 days and to remove or correct inaccurate information. Checking a report and filing a dispute is free. New York adds a free security freeze and enforcement by the Attorney General. A consumer denied credit, housing, employment, or insurance because of a report is entitled to a free copy of that report."
  },

  whoQualifies: {
    en: [
      "A consumer who found an error on a credit report — wrong balance, wrong account, paid debt still showing, identity theft account, or an account belonging to someone with a similar name or SSN.",
      "A consumer denied credit, housing, employment, or insurance because of a credit report.",
      "A consumer who wants to check a report — every person is entitled to a free report every year from each of the three bureaus at annualcreditreport.com.",
      "A parent or guardian who needs to check or freeze a child's credit."
    ]
  },

  whatItMeans: {
    en: "The Fair Credit Reporting Act is 15 USC 1681 and following. It governs the three big credit bureaus — Equifax, Experian, and TransUnion — plus specialty bureaus that cover tenant screening, employment, and check-writing. New York adds a layer through General Business Law Article 25 (Fair Credit Reporting) that parallels the federal rules.\n\nFree reports. Every person is entitled to one free report from each of the three bureaus every year at annualcreditreport.com. The bureaus also offer free weekly reports through that same site. A consumer denied credit, housing, employment, or insurance because of a report is entitled to a free copy of that report on request to the bureau.\n\nThe dispute process. A written dispute can go to the bureau online, by mail, or by phone. Mail with return receipt is the strongest paper trail. The dispute identifies the item, explains what is wrong, and includes supporting documents (paid-in-full letters, court orders, identity theft reports, canceled checks). The bureau has 30 days (sometimes extended to 45) to investigate. The bureau contacts the company that reported the information — the 'furnisher' — and asks for verification. If the furnisher cannot verify, the item has to come off the report. The bureau has to send the results in writing.\n\nIf the dispute is denied. The consumer can add a 100-word statement to the report explaining their position. The statement shows up on every copy of the report going forward. A dispute that was denied on weak evidence can be refiled with stronger documentation.\n\nFurnisher duties. A furnisher (a bank, a debt collector, a utility) also has FCRA duties. Once the furnisher is on notice of a dispute, the furnisher has to investigate and correct errors. A furnisher that keeps reporting an item the consumer has already proven wrong can face a private lawsuit under 15 USC 1681s-2.\n\nSecurity freeze. New York law and federal law both give consumers the right to place a free security freeze at all three bureaus. A freeze stops new creditors from opening accounts in the consumer's name. The freeze can be lifted temporarily for a specific application and then re-placed. A child's credit can be frozen separately; each bureau has its own process for child freezes.\n\nAdverse action notices. When a creditor, landlord, employer, or insurer turns someone down based on a report, the decider has to send an 'adverse action' notice naming the bureau and explaining the right to a free copy of the report. The notice is the trigger to check what the report actually says.\n\nIdentity theft. A consumer who believes the error came from identity theft starts at identitytheft.gov. The FTC report there unlocks stronger rights — a full seven-year fraud alert, blocked accounts, and streamlined dispute procedures under 15 USC 1681c-2. See the identity-theft-ny entry.\n\nLawsuit remedies. A bureau or furnisher that fails to follow FCRA duties can be sued in federal or state court. Damages can include actual losses, statutory damages up to $1,000 for willful violations, punitive damages, and attorney's fees. Legal Aid programs and private consumer attorneys handle FCRA cases; many take them on contingent or statutory-fee arrangements.\n\nCommon errors to look for. Accounts from identity theft. Debts discharged in bankruptcy still showing as owed. Paid collections still reported as unpaid. Wrong balance or wrong last-payment date. Wrong payment history (a 30-day late that was on time). Accounts belonging to someone with a similar name or SSN. Medical debts that are supposed to be off the report (the big bureaus no longer report paid medical collections or balances under $500)."
  },

  yourRights: {
    en: [
      "A consumer has the right to a free credit report every year from each of the three bureaus at annualcreditreport.com.",
      "A consumer has the right to dispute any inaccurate or incomplete item under 15 USC 1681i.",
      "A credit bureau has to investigate a dispute within 30 days and remove unverified items.",
      "A consumer has the right to a free security freeze at all three bureaus, and to a separate child-freeze process.",
      "A consumer has the right to an adverse action notice when a creditor, landlord, employer, or insurer decides based on a credit report.",
      "A consumer has the right to sue a bureau or furnisher that fails to correct known errors; remedies include actual damages, statutory damages, and attorney's fees.",
      "A consumer who is an identity theft victim has additional rights under 15 USC 1681c-2 once an FTC identitytheft.gov report is filed."
    ]
  },

  legalOptions: {
    en: [
      "Free credit reports are available at annualcreditreport.com — the only official source. Third-party 'free' credit sites often sign the consumer up for paid monitoring.",
      "Disputes can be filed online at equifax.com, experian.com, and transunion.com. Filing by certified mail with return receipt is the strongest paper trail.",
      "A dispute letter identifies the specific item, explains what is wrong, and attaches any supporting documents (paid-in-full letters, court orders, identity theft reports).",
      "When a bureau does not correct the error after a proper dispute, free help is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "For errors tied to identity theft, the process starts at identitytheft.gov. See the identity-theft-ny entry for the full sequence.",
      "The NYS Attorney General at (800) 771-7755 takes complaints about credit bureau and furnisher misconduct.",
      "The federal Consumer Financial Protection Bureau (CFPB) at consumerfinance.gov handles complaints that trigger a direct bureau response within 15 days."
    ]
  },

  example: {
    en: "A woman in Rochester checks her credit report and finds a collection for $1,200 that she already paid two years ago. She gathers the payment confirmation and sends a dispute letter to all three credit bureaus by certified mail with the receipt attached. Within 25 days, two bureaus remove the collection. The third confirms it as accurate. She sends a second dispute with the payment receipt and a CFPB complaint number. The third bureau removes it within two weeks."
  },

  counsel: [
    {
      type: "free",
      name: "AnnualCreditReport.com (official free reports)",
      focus: "Free credit reports from all three bureaus",
      qualifier: "Anyone in the US — weekly free report from each bureau",
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
    "https://www.annualcreditreport.com",
    "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/"
  ],

  lastVerified: "2026-04-22",
  factCheckedBy: { tool: "websearch+webfetch", date: "2026-04-27" },
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
