export const DIVORCE_SEPARATION_NY = {
  id: "divorce-separation-ny",
  category: "family",
  tier: "state",
  jurisdiction: "us-ny",
  status: "active",

  title: { en: "Divorce and Separation in New York" },

  summary: {
    en: "New York allows both contested and uncontested divorce. Since 2010, New York has no-fault divorce — you do not have to prove wrongdoing to end a marriage. The process involves filing in Supreme Court (not Family Court), dividing property, and resolving custody, support, and debt. A legal separation is an alternative that keeps you married but sets the terms of living apart."
  },

  whoQualifies: {
    en: [
      "Anyone who has been married and wants to legally end the marriage or formally separate.",
      "At least one spouse must have lived in New York for a continuous period before filing — the residency requirements depend on where and when the marriage took place.",
      "Uncontested divorce (both sides agree) can be completed without a trial. Contested divorce (disagreements on property, custody, or support) goes through Supreme Court litigation."
    ]
  },

  whatItMeans: {
    en: "Divorce legally ends a marriage. In New York, the no-fault ground is that the marriage has been 'irretrievably broken' for at least six months. You file in Supreme Court, not Family Court. The court divides marital property using 'equitable distribution' — fair, not necessarily 50/50. If there are children, the court also decides custody, visitation, and child support. Spousal maintenance (alimony) may be ordered based on income, length of marriage, and other factors. A legal separation is a court-approved agreement to live apart while still technically married — it can address all the same issues as divorce without ending the marriage. Some people choose separation for religious, insurance, or personal reasons. An uncontested divorce (where both sides agree on everything) is faster and cheaper — often completable with forms from the court clerk's office or with help from a free legal aid program."
  },

  yourRights: {
    en: [
      "You have the right to file for divorce without proving your spouse did anything wrong (no-fault).",
      "You have the right to equitable distribution of marital property.",
      "You have the right to request temporary orders for custody, support, and exclusive use of the home while the divorce is pending.",
      "You have the right to a lawyer. If you cannot afford one, free legal aid may be available for the divorce process.",
      "You have the right to request spousal maintenance if there is an income disparity.",
      "If there is domestic violence, you have the right to an order of protection and to file in a way that keeps your address confidential."
    ]
  },

  legalOptions: {
    en: [
      "Uncontested divorce forms are available from the NYS Unified Court System at nycourts.gov/divorce. The filing fee was $420 total ($210 filing + $210 index number) as of April 2026 (subject to change — verify at nycourts.gov/divorce). Fee waivers are available for low-income filers.",
      "For contested divorces, free legal help is available through Legal Aid Society of Rochester at (585) 232-4090, LawNY at (585) 295-5700, and the JustCause (formerly Volunteer Legal Services Project) at (585) 232-3051.",
      "Mediation is available as an alternative to litigation. The court may refer parties to mediation for custody and visitation disputes.",
      "Under Domestic Relations Law Article 13 (§ 236), marital property is divided equitably. Separate property (owned before the marriage, inherited, or gifted to one spouse) is generally not divided.",
      "Child support follows the CSSA formula: 17% of combined parental income for one child, 25% for two, 29% for three, 31% for four, 35%+ for five or more."
    ]
  },

  example: {
    en: "Maria and her husband have been separated for a year and agree on custody, child support, and splitting their savings account. Maria downloads the uncontested divorce packet from nycourts.gov, fills it out with help from Legal Aid, and files it at Monroe County Supreme Court. The filing fee was $420 as of April 2026 (subject to change — verify at nycourts.gov/divorce), but she gets a fee waiver because of her income. The judge signs the divorce judgment without a trial. Total time from filing to final judgment: about three months."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Divorce, custody, family law, domestic violence",
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
      name: "LawNY (Legal Assistance of Western NY)",
      focus: "Divorce, family law, custody, child support",
      qualifier: "Low-income residents in 14 Western NY counties",
      access: "Phone intake at (585) 295-5700",
      outcome: "Direct representation",
      phone: "(585) 295-5700",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "custody-basics-ny",
    "child-support-ny",
    "order-of-protection-ny",
    "poa-healthcare-proxy-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "divorce",
    "separation",
    "legal separation",
    "end marriage",
    "uncontested divorce",
    "contested divorce",
    "equitable distribution",
    "spousal maintenance",
    "alimony",
    "no fault divorce",
    "filing for divorce",
    "divorce forms"
  ],

  sources: [
    "https://www.nycourts.gov/divorce/",
    "https://www.nysenate.gov/legislation/laws/DOM/170",
    "https://www.nysenate.gov/legislation/laws/DOM/236"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
