export const CHILD_SUPPORT_ENFORCEMENT_NY = {
  id: "child-support-enforcement-ny",
  category: "family",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Child Support Not Being Paid — How to Enforce a Court Order" },

  summary: {
    en: "When a parent is ordered to pay child support and does not, the other parent has several ways to enforce the order. New York can take money from wages, tax refunds, bank accounts, and even suspend the non-paying parent's driver's license or passport."
  },

  whoQualifies: {
    en: [
      "Any parent who has a child support order and the other parent is not paying.",
      "Any parent who is owed back child support (arrears).",
      "Any parent whose child support enforcement case seems stuck at the Support Collection Unit.",
      "Any parent who is paying child support but the amount is wrong and needs a modification."
    ]
  },

  whatItMeans: {
    en: "Child support in New York is enforced by the local Support Collection Unit (SCU), which is part of the Department of Social Services. When a parent falls behind on payments, the SCU has powerful tools to collect. Income execution (wage garnishment) is the most common — the employer takes the child support directly from the paycheck before the parent sees it. The SCU can also intercept federal and state tax refunds, freeze bank accounts, suspend the non-paying parent's driver's license, report the debt to credit bureaus, and deny or revoke a passport for arrears over $2,500. If the parent still does not pay, the SCU can file a violation petition in Family Court. The court can hold the parent in contempt, which can result in up to six months in jail. The court can also require the parent to look for work and report back. A parent who is owed money can also file their own violation petition in Family Court without going through the SCU. This is sometimes faster than waiting for the SCU to act."
  },

  yourRights: {
    en: [
      "A parent owed child support has the right to request enforcement through the Support Collection Unit at no cost.",
      "A parent has the right to file their own violation petition in Family Court if the SCU is not acting fast enough.",
      "A parent has the right to have child support collected through wage garnishment, tax intercepts, and bank levies.",
      "The non-paying parent's driver's license can be suspended after a hearing for falling behind.",
      "A parent owed more than $2,500 in arrears has the right to have the non-paying parent's passport denied or revoked.",
      "A parent who is paying but the amount is wrong has the right to file a modification petition if their income has changed significantly."
    ]
  },

  legalOptions: {
    en: [
      "The Monroe County Support Collection Unit handles enforcement and can be reached at (585) 753-6071.",
      "A violation petition can be filed in Monroe County Family Court at the Hall of Justice, 99 Exchange Blvd. No filing fee is required.",
      "Under Family Court Act Section 454, a parent found in willful violation of a support order can be jailed for up to six months.",
      "Under Domestic Relations Law Section 244-b, driver's license suspension is available for parents who are at least four months behind.",
      "Federal law requires passport denial for arrears over $2,500. The SCU reports to the State Department automatically.",
      "Free legal help with child support enforcement is available through Legal Aid Society of Rochester at (585) 232-4090 and JustCause (formerly VLSP) at (585) 232-3051."
    ]
  },

  example: {
    en: "Monique's ex-husband had not paid child support in eight months and owed $6,400. The SCU had set up wage garnishment, but he quit his job. Monique filed a violation petition in Family Court on her own. The judge found her ex in willful violation and ordered him to pay $500 per month toward the arrears on top of the regular support amount. The judge also suspended his driver's license until he showed proof of consistent payments. Within three months, he was back on track."
  },

  counsel: [
    {
      type: "government",
      name: "Monroe County Support Collection Unit",
      focus: "Child support enforcement, wage garnishment, tax intercepts, license suspension",
      qualifier: "Any parent with a child support order in Monroe County",
      access: "Phone at (585) 753-6071",
      outcome: "Enforcement actions, payment collection, violation petitions",
      phone: "(585) 753-6071",
      url: "https://www.monroecounty.gov/hs-child-support",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Family law, child support enforcement, modification",
      qualifier: "Low income residents of Monroe and surrounding counties",
      access: "Phone intake at (585) 232-4090",
      outcome: "Legal advice and representation in Family Court",
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
    "tax-refund-garnishment-ny",
    "wage-garnishment-defense-ny",
    "custody-basics-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "child support not paid",
    "enforce child support",
    "child support arrears",
    "child support violation",
    "child support wage garnishment",
    "child support license suspension",
    "child support passport",
    "child support contempt",
    "owe child support",
    "back child support"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/FCT/454",
    "https://www.nysenate.gov/legislation/laws/DOM/244-B"
  ],

  lastVerified: "2026-04-17",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
