export const CHILD_SUPPORT_NEW_HIRE_REPORTING_NY = {
  id: "child-support-new-hire-reporting-ny",
  category: "family",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY SOS 111-H",
  status: "active",

  title: { en: "Child Support Enforcement — How New Hire Reporting and Tax Refund Intercepts Work" },

  summary: {
    en: "New York uses several automated tools to enforce child support — employers must report new hires within 20 days, which triggers wage garnishment within weeks; federal and state tax refunds are intercepted for arrears; and license suspensions (driver, professional) are used when arrears reach thresholds. These mechanics work even when the non-custodial parent does not voluntarily cooperate. Families receiving support owed have specific rights to trigger these tools."
  },

  whoQualifies: {
    en: [
      "Any custodial parent or guardian owed child support.",
      "Any non-custodial parent whose support obligations are in default.",
      "Any employer hiring workers in New York (all employers must comply with new hire reporting).",
      "Any custodial parent who wants to understand the tools available when the other parent does not pay."
    ]
  },

  whatItMeans: {
    en: "New York Social Services Law Section 111-h establishes the New York State Directory of New Hires. Every employer operating in New York must report each new hire within 20 calendar days of the hire date. The report includes the employee's name, address, SSN, and the employer's identifying information. The state matches new hire data against child support orders in a database maintained by the Support Collection Unit (SCU) under the Office of Temporary and Disability Assistance (OTDA). When a match is found, the SCU issues a Income Withholding Order to the employer, typically within weeks of the match. The employer must begin withholding the ordered amount (commonly 25 percent of disposable earnings, capped by federal law at 50-65 percent depending on family circumstances) and remit to the SCU. This process works regardless of the non-custodial parent's cooperation. Federal Tax Refund Intercept: under the federal Treasury Offset Program (31 USC 3716) and NY Tax Law 171-c, federal and NY state tax refunds are intercepted to apply to child support arrears. The non-custodial parent is notified in advance and can contest the amount. Intercepts can cover current and past-due support. License suspensions: when child support arrears reach four months of unpaid obligation (generally), OTDA can request suspension of the non-custodial parent's driver license, professional license (medical, law, real estate), recreational license (hunting, fishing), or passport. Restricted driving privileges (conditional license) may be available for work. Credit Reporting: arrears over $1,000 are reported to credit bureaus. Contempt of Court: as a last resort, chronic non-payment can lead to contempt proceedings and jail time. For custodial parents: child support applications are filed with the local Support Collection Unit. Monroe County SCU is at (585) 753-6200. Cases can originate through Family Court, divorce decrees, or administrative process. For low-income custodial parents on Temporary Assistance, child support collection is automatic — the family assigns support rights to the state in exchange for TA benefits."
  },

  yourRights: {
    en: [
      "A custodial parent has the right to enforcement tools including wage withholding, tax refund intercept, license suspension, and credit reporting.",
      "A non-custodial parent has the right to prior notice before enforcement actions and a chance to contest.",
      "An employer in New York must report new hires within 20 days under SOS 111-h.",
      "A non-custodial parent facing license suspension can apply for a restricted driving privilege for work.",
      "A custodial parent can request modification of support when circumstances change — up or down.",
      "Support orders are enforceable across state lines under the Uniform Interstate Family Support Act (UIFSA)."
    ]
  },

  legalOptions: {
    en: [
      "Monroe County Support Collection Unit: (585) 753-6200. File or update child support cases, request enforcement action.",
      "Monroe County Family Court at (585) 428-5429 handles contested support matters.",
      "For interstate support enforcement, ask the SCU to initiate UIFSA action — the Child Support Portal at childsupport.ny.gov handles these.",
      "For a non-custodial parent whose wages are being garnished but who disputes the amount, file a motion in Family Court to modify or contest.",
      "Free legal help with child support matters is available through Legal Aid Society of Rochester at (585) 232-4090 and Empire Justice Center at (585) 454-4060.",
      "NY Child Support Helpline: (888) 208-4485.",
      "Employers register for new-hire reporting at nynewhire.com.",
      "For non-custodial parents facing license suspension, OTDA can negotiate a payment plan that restores licenses."
    ]
  },

  example: {
    en: "A custodial parent in Rochester had a child support order that had been unpaid for three months. She contacted the Monroe County Support Collection Unit, which searched the New Hires Directory and confirmed the non-custodial parent had started a new job two months earlier in Buffalo. The SCU issued an Income Withholding Order to the new employer within three weeks. The employer began withholding the ordered amount from each paycheck and remitting to the SCU, which forwarded it to the custodial parent. Federal tax refund intercept recovered an additional lump sum when the non-custodial parent filed taxes the following year."
  },

  counsel: [
    {
      type: "government",
      name: "Monroe County Support Collection Unit",
      focus: "Child support enforcement, wage withholding, arrears collection",
      qualifier: "Custodial and non-custodial parents with Monroe County support orders",
      access: "Phone at (585) 753-6200",
      outcome: "Case management, enforcement action, payment processing",
      phone: "(585) 753-6200",
      url: "https://www.monroecounty.gov/hs-supportcollection",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Child support enforcement, modification, interstate cases",
      qualifier: "Low-income Monroe County residents",
      access: "Phone at (585) 232-4090",
      outcome: "Legal advice, Family Court representation",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "child-support-ny",
    "child-support-modification-ny",
    "child-support-enforcement-ny",
    "passport-denial-child-support-ny",
    "tax-refund-garnishment-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "child support enforcement",
    "SOS 111-h",
    "new hires directory",
    "income withholding order",
    "wage garnishment support",
    "Support Collection Unit",
    "UIFSA",
    "license suspension arrears",
    "tax refund intercept child support",
    "Monroe County SCU"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/SOS/111-H",
    "https://www.law.cornell.edu/uscode/text/42/653",
    "https://www.law.cornell.edu/uscode/text/31/3716"
  ],

  lastVerified: "2026-04-18",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
