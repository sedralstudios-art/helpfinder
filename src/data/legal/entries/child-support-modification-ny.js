export const CHILD_SUPPORT_MODIFICATION_NY = {
  id: "child-support-modification-ny",
  category: "family",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY FCT 451",
  status: "active",

  title: { en: "Changing a Child Support Order in New York" },

  summary: {
    en: "When a parent's income, job, or family situation has changed significantly since the last child support order, the parent can ask the court to modify it. In New York, either parent can petition for a modification if there has been a substantial change in circumstances, or if three years have passed since the order was last set, or if either parent's income has changed by 15% or more."
  },

  whoQualifies: {
    en: [
      "Either parent (the one paying or the one receiving) can file for a modification.",
      "A substantial change in circumstances has occurred — job loss, new job, new child, disability, incarceration, or a major change in the child's needs.",
      "At least three years have passed since the last order or modification.",
      "Either parent's gross income has changed by 15% or more since the last order."
    ]
  },

  whatItMeans: {
    en: "A child support modification changes the amount of the existing court order. It does not happen automatically — you have to file a petition with the Family Court or, if the order came from Supreme Court during a divorce, with that court. Until the court signs a new order, the old amount stays in effect and must be paid. Falling behind without filing a modification petition can lead to enforcement actions including wage garnishment, license suspension, and contempt of court. The modification takes effect from the date the petition is filed, not from the date circumstances changed — so file as soon as possible. The court uses the same CSSA formula (17% for one child, etc.) but applies it to the current income. If you were ordered to pay through the Support Collection Unit (SCU), the SCU can also help process the modification."
  },

  yourRights: {
    en: [
      "You have the right to petition for a modification based on changed circumstances, the passage of three years, or a 15% income change.",
      "You have the right to a hearing where both sides present evidence of current income and expenses.",
      "You have the right to a lawyer. If you cannot afford one, the court must assign one in certain circumstances.",
      "You have the right to have the modification take effect from the date you filed, not from the hearing date.",
      "You have the right to request a temporary modification while the petition is pending if there is an emergency."
    ]
  },

  legalOptions: {
    en: [
      "A modification petition can be filed at the Family Court in the county where the original order was issued, or where either parent lives. In Monroe County: Family Court, Hall of Justice, 99 Exchange Blvd, Rochester NY 14614.",
      "The petition can also be filed through the Monroe County Support Collection Unit (SCU) at (585) 753-6011, which handles enforcement and can help with modification paperwork.",
      "Free legal help is available through Legal Aid Society of Rochester at (585) 232-4090 and LawNY at (585) 295-5700.",
      "Proof of current income (pay stubs, tax returns, unemployment records), proof of the change (termination letter, medical records, new child's birth certificate), and a copy of the existing order may be needed.",
      "Under Family Court Act § 451 and Domestic Relations Law § 236-B(9)(b), the court must apply the CSSA guidelines to current income and can only deviate for specific reasons."
    ]
  },

  example: {
    en: "James lost his job and his income dropped from $45,000 to unemployment benefits of $18,000. His child support order is based on the old salary. He files a modification petition at Monroe County Family Court and brings his unemployment award letter and his last pay stubs. The court recalculates using the CSSA formula on his current income. The new order is lower and takes effect from the date he filed the petition — not from the date he lost the job. Until the court signed the new order, James still owed the old amount, but he filed quickly so the gap was small."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Child support, modification, family law",
      qualifier: "Low-income residents of Monroe and surrounding counties",
      access: "Phone intake or walk-in",
      outcome: "Direct representation or advice",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Monroe County Support Collection Unit (SCU)",
      focus: "Child support enforcement, modification processing",
      qualifier: "Any parent with a Monroe County child support order",
      access: "Phone",
      outcome: "Processing and enforcement",
      phone: "(585) 753-6011",
      url: "https://www.monroecounty.gov",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "child-support-ny",
    "custody-basics-ny",
    "divorce-separation-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "child support modification",
    "change child support",
    "lower child support",
    "increase child support",
    "lost job child support",
    "income change",
    "CSSA",
    "family court petition",
    "support collection unit",
    "SCU",
    "child support arrears"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/FCT/451",
    "https://www.nysenate.gov/legislation/laws/DOM/236",
    "https://childsupport.ny.gov"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
