export const ALIMONY_SPOUSAL_SUPPORT_NY = {
  id: "alimony-spousal-support-ny",
  category: "family",
  tier: "state",
  jurisdiction: "us-ny",
  status: "active",

  title: { en: "Spousal Support (Alimony) — How It Works in New York Divorces" },

  summary: {
    en: "In a New York divorce, one spouse may be ordered to pay the other spouse money for financial support. This is called maintenance (the legal term) or alimony (the common term). The amount and length of payments depend on a formula and the circumstances of the marriage."
  },

  whoQualifies: {
    en: [
      "Any spouse going through a divorce who earned significantly less than the other spouse during the marriage.",
      "Any spouse who left the workforce to raise children or support the other spouse's career.",
      "Any spouse who is being asked to pay maintenance and wants to understand the formula.",
      "Any spouse who is already receiving maintenance and the other spouse stopped paying."
    ]
  },

  whatItMeans: {
    en: "New York uses a formula to calculate maintenance during the divorce (called temporary maintenance) and after the divorce (called post-divorce maintenance). The formula is in Domestic Relations Law Section 236. For temporary maintenance, the court calculates 30% of the higher earner's income minus 20% of the lower earner's income. There is a cap — the formula applies to income up to a certain threshold (currently around $200,000 for the higher earner). For post-divorce maintenance, the duration depends on the length of the marriage. For marriages of 0-15 years, maintenance lasts 15% to 30% of the length of the marriage. For 15-20 years, it lasts 30% to 40%. For over 20 years, it lasts 35% to 50%. The court also considers factors like each spouse's age and health, earning ability, whether one spouse gave up career opportunities for the marriage, and whether there are children. Maintenance can be modified if circumstances change significantly — like the paying spouse losing their job or the receiving spouse getting a much higher-paying job."
  },

  yourRights: {
    en: [
      "A lower-earning spouse has the right to request maintenance during and after the divorce.",
      "The court must apply the statutory formula as a starting point, though it can adjust based on the specific facts.",
      "A spouse receiving maintenance has the right to enforce the order if the other spouse stops paying — through wage garnishment, contempt, or other enforcement tools.",
      "A paying spouse has the right to request a modification if their income drops significantly or they lose their job.",
      "Maintenance usually ends if the receiving spouse remarries or either spouse dies.",
      "Both spouses have the right to negotiate a different amount by agreement, which the court will approve if it is fair."
    ]
  },

  legalOptions: {
    en: [
      "Under DRL Section 236, the court calculates temporary maintenance using a statutory formula. An online calculator is available at nycourts.gov.",
      "Post-divorce maintenance duration is based on the length of the marriage. The advisory schedule is in DRL Section 236(B)(6).",
      "If the paying spouse stops paying, the receiving spouse can file a violation petition in the court that issued the divorce.",
      "If circumstances change, either spouse can file a modification petition. The petitioner must show a substantial change in circumstances.",
      "Free legal help with divorce and maintenance issues is available through Legal Aid Society of Rochester at (585) 232-4090 and JustCause (formerly VLSP) at (585) 232-3051.",
      "The Monroe County Family Court Self-Help Center can help with forms for maintenance enforcement and modification."
    ]
  },

  example: {
    en: "After 18 years of marriage, Linda filed for divorce. She had worked part-time during the marriage while raising three children. Her husband earned $120,000 per year. The court calculated temporary maintenance using the formula: 30% of his income ($36,000) minus 20% of hers ($6,000) = $30,000 per year, or $2,500 per month. For post-divorce maintenance, the court used the advisory schedule — for an 18-year marriage, maintenance lasted 30% to 40% of the marriage length, which meant 5.4 to 7.2 years. The judge ordered six years of maintenance at $2,000 per month."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Divorce, maintenance/alimony, family law",
      qualifier: "Low income residents of Monroe and surrounding counties",
      access: "Phone intake at (585) 232-4090",
      outcome: "Legal advice and representation",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "JustCause (formerly Volunteer Legal Services Project)",
      focus: "Divorce, spousal support, family law",
      qualifier: "Low and moderate income Monroe County residents",
      access: "Phone intake at (585) 232-3051",
      outcome: "Attorney referral, brief advice, or full representation",
      phone: "(585) 232-3051",
      url: "https://www.justcause.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "divorce-separation-ny",
    "child-support-ny",
    "child-support-modification-ny",
    "spouses-right-to-home-ny",
    "custody-basics-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "alimony",
    "spousal support",
    "maintenance",
    "divorce alimony",
    "spousal maintenance",
    "alimony formula",
    "how much alimony",
    "alimony duration",
    "stop paying alimony",
    "modify alimony"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/DOM/236",
    "https://www.nycourts.gov/courthelp/Family/maintenanceCalculator.shtml"
  ],

  lastVerified: "2026-04-17",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
