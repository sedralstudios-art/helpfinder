export const CHILD_SUPPORT_NY = {
  id: "child-support-ny",
  category: "family",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Child Support — How New York Figures Out What a Parent Pays" },

  summary: {
    en: "New York uses a set formula to decide child support. The formula is based on both parents' combined income and how many kids there are. The parent who doesn't live with the kid most of the time (the \"noncustodial parent\") pays their share. In New York, child support goes until the kid turns 21 — not 18."
  },

  whoQualifies: {
    en: [
      "Either parent can ask Family Court for child support. It doesn't matter if you were married, divorced, separated, or never married.",
      "The parent who has the kids, a legal guardian, or a government agency can file for support against the other parent.",
      "Support usually goes until the kid turns 21. It can end earlier if the kid gets married, joins the military, or becomes fully self-supporting.",
      "If you already have an order, you can ask for changes (modification) if: something big changed in your life, it's been at least 3 years, or either parent's income changed by 15% or more."
    ]
  },

  whatItMeans: {
    en: "The Child Support Standards Act (CSSA) tells judges how to calculate support (DRL § 240(1-b); FCA § 413). The basic math:\n\n1) Add both parents' incomes together.\n2) Multiply by a set percentage for the number of kids:\n- 1 kid: 17%\n- 2 kids: 25%\n- 3 kids: 29%\n- 4 kids: 31%\n- 5+ kids: at least 35%\n3) Split that total between the parents, based on each parent's share of the combined income.\n4) The noncustodial parent pays their share to the custodial parent.\n\nThe percentage only applies up to a set income cap. The cap is updated every 2 years by the state. Current numbers are in the Child Support Standards Chart at childsupport.ny.gov.\n\nA paying parent can't be ordered to pay below the \"self-support reserve\" — a floor set near the federal poverty level so the paying parent can still live."
  },

  yourRights: {
    en: [
      "You have the right to file for child support in Family Court any time. There is NO filing fee.",
      "You have the right to have support calculated using the CSSA formula. If a judge gives a different amount, the order has to say what the formula would have been and why the judge changed it.",
      "You have the right to have certain extra costs added on top of basic support. These include daycare so a parent can work or go to school, health insurance for the kid, and medical costs the insurance didn't cover. Both parents split these based on their share of income.",
      "You have the right to enforcement if the other parent doesn't pay. The court can: take the money directly from the other parent's paycheck, take their tax refund, suspend their driver's license or professional license, put a lien on their property, or hold them in contempt of court.",
      "You have the right to ask for a change (modification) if: your life changed a lot, 3 years have passed since the last order, OR either parent's income changed by 15% or more.",
      "A paying parent's order can't be set below the self-support reserve (the floor near the federal poverty level)."
    ]
  },

  legalOptions: {
    en: [
      "A child support case is filed in Family Court in the county where the kid lives or where the noncustodial parent lives. No filing fee. Forms at nycourts.gov.",
      "The state Office of Temporary and Disability Assistance (OTDA) runs the Division of Child Support Services. The division helps parents set up, change, and enforce orders — entry points are the local DSS and childsupport.ny.gov.",
      "The court uses the CSSA formula on combined income up to the set cap. For income over the cap, the court looks at other factors — the kid's standard of living, each parent's finances, and what the kid actually needs (FCA § 413).",
      "The main enforcement tool is income withholding. The court can order the other parent's employer to take the money straight from their paycheck (FCA § 5241). If the parent is self-employed or ignores the order, the court can use other tools like contempt.",
      "Free legal help: Legal Aid Society of Rochester (585-232-4090) and LawNY (585-325-2520).",
      "The Child Support Standards Chart (updated with current income cap and self-support reserve) is at childsupport.ny.gov/pdfs/CSSA.pdf."
    ]
  },

  example: {
    en: "Tameka and Marcus have one child and are separating. Tameka earns $45,000 a year. Marcus earns $30,000. Their combined income is $75,000. The CSSA percentage for one kid is 17%. 17% of $75,000 = $12,750 per year total. Tameka earns 60% of the combined income; Marcus earns 40%. Tameka has custody most of the time. So Marcus pays his 40% share — $5,100 a year, or about $425 a month. Marcus also pays 40% of daycare costs and 40% of the child's health insurance."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Family law, child support, custody, orders of protection",
      qualifier: "Low income residents of Monroe County and surrounding counties",
      access: "Phone intake at (585) 232-4090",
      outcome: "Direct representation in Family Court proceedings",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Assistance of Western New York (LawNY)",
      focus: "Family law, child support, custody, domestic violence",
      qualifier: "Low income residents in 14 Western NY counties including Monroe",
      access: "Phone intake at (585) 325-2520",
      outcome: "Direct representation in family law matters",
      phone: "(585) 325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Empire Justice Center",
      focus: "Family law, systemic advocacy, impact litigation",
      qualifier: "Low and moderate income residents statewide (all NYS counties except NYC)",
      access: "Phone intake at (585) 454-4060",
      outcome: "Direct representation, impact litigation, and policy advocacy",
      phone: "(585) 454-4060",
      url: "https://www.empirejustice.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "custody-basics-ny",
    "order-of-protection-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "child support",
    "how much child support",
    "child support calculator",
    "not paying child support",
    "child support enforcement",
    "child support modification",
    "behind on child support",
    "child support order",
    "custody and support",
    "paying for my kids",
    "ex won't pay support",
    "support until 21",
    "family court support"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/DOM/240",
    "https://codes.findlaw.com/ny/family-court-act/fct-sect-413/",
    "https://childsupport.ny.gov/pdfs/CSSA.pdf",
    "https://childsupport.ny.gov/",
    "https://www.nycourts.gov/"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
