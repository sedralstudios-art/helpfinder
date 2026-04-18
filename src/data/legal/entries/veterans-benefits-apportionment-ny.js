export const VETERANS_BENEFITS_APPORTIONMENT_NY = {
  id: "veterans-benefits-apportionment-ny",
  category: "family",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-regulation",
  primaryStatute: "38 CFR PART 3",
  status: "active",

  title: { en: "VA Benefits Apportionment — When a Spouse or Child Can Claim a Share of a Veteran's Disability or Pension" },

  summary: {
    en: "A spouse, former spouse, or child of a veteran who receives VA disability compensation or pension can request an apportionment — a share of the benefits paid directly to the dependent. This is different from garnishment. Apportionment is ordered by the VA under 38 CFR Section 3.450 and following sections when the veteran is not providing reasonable support. Claims are filed with the VA regional office, not through family court."
  },

  whoQualifies: {
    en: [
      "The current spouse of a veteran receiving disability or pension benefits.",
      "A former spouse with a qualifying child.",
      "A biological or adopted child of a veteran, including stepchildren in some cases.",
      "A custodian of a dependent child of a veteran.",
      "A veteran's parent in limited situations."
    ]
  },

  whatItMeans: {
    en: "VA benefits are not subject to normal state-court garnishment for child or spousal support; federal law at 38 USC Section 5301 generally exempts them from assignment or attachment. The VA's own apportionment process under 38 CFR Sections 3.450 through 3.461 is the primary route for dependents to receive a direct share. Two categories of apportionment: General apportionment under 38 CFR 3.450 is available when the veteran is not residing with the spouse or child and is not reasonably discharging responsibility for their support. No finding of hardship is required — only that the veteran is not providing reasonable support. Special apportionment under 38 CFR 3.451 is available even when the veteran is providing some support, if the dependent shows hardship. The apportionment cannot cause undue hardship to the veteran. Filing: the dependent files a claim with the VA Regional Office (VA Form 21-0788) with supporting documents — marriage or divorce decree, birth certificate of children, proof of custody, income statements, and any child or spousal support order. The VA notifies the veteran and allows 60 days for response. The VA then decides the apportionment percentage based on the needs of the dependents and the income of the veteran. Typical apportionment ranges from 20 to 50 percent of the veteran's monthly benefit. The apportionment is paid directly to the dependent. Appeals: both veteran and dependent can appeal the VA's apportionment decision through the Board of Veterans' Appeals process. Family court orders: while state family court cannot order the VA to pay a dependent directly, state courts can consider the veteran's VA benefits in setting overall support obligations and can order the veteran to pay child support from those funds. If the veteran does not pay, apportionment through the VA is the enforcement mechanism. Military retirement pay (different from VA disability) IS subject to Uniformed Services Former Spouses Protection Act division and can be garnished for support."
  },

  yourRights: {
    en: [
      "A dependent has the right to file an apportionment claim with the VA at any time.",
      "A dependent has the right to apportionment when the veteran is not living with and not reasonably supporting the dependent.",
      "A dependent and veteran both have the right to notice and opportunity to respond before apportionment is decided.",
      "Both parties have the right to appeal through the Board of Veterans' Appeals.",
      "Apportionment does not require family court involvement — it is a VA administrative process.",
      "A dependent can pursue both apportionment and a state-court support order simultaneously."
    ]
  },

  legalOptions: {
    en: [
      "VA Benefits Hotline at (800) 827-1000.",
      "NY State Division of Veterans' Services at (888) 838-7697 — free help with VA claims.",
      "Monroe County Veterans Service Agency at (585) 753-6040 — local VA claim assistance, including apportionment.",
      "American Legion or VFW accredited service officers — free representation in VA claims.",
      "Veterans Legal Services Clinic at Cornell Law School at (607) 255-3715 for complex cases.",
      "NY Office of Temporary and Disability Assistance for child support coordination at (888) 208-4485.",
      "File VA Form 21-0788 (Information Regarding Apportionment of Beneficiary's Award) with supporting documents."
    ]
  },

  example: {
    en: "A Rochester mother of two had been separated from her veteran husband for two years. He received $3,200 monthly in VA disability compensation but paid no support. She contacted the Monroe County Veterans Service Agency, which helped her file VA Form 21-0788 with proof of marriage, the children's birth certificates, and a statement of her income and expenses. The VA notified her husband and, after his response, granted a 40 percent apportionment — approximately $1,280 monthly paid directly to her. She also filed for family court child support, which resulted in an order covering the apportionment amount and additional support from the veteran's other income."
  },

  counsel: [
    {
      type: "government",
      name: "Monroe County Veterans Service Agency",
      focus: "VA claims including apportionment, veterans benefits advocacy",
      qualifier: "Veterans and dependents in Monroe County",
      access: "Phone at (585) 753-6040",
      outcome: "Claim filing, form preparation, advocacy",
      phone: "(585) 753-6040",
      url: "https://www.monroecounty.gov/veterans",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "NYS Division of Veterans' Services",
      focus: "Statewide VA claim assistance, apportionment, appeals",
      qualifier: "Veterans and dependents statewide",
      access: "Phone at (888) 838-7697",
      outcome: "Accredited VA representation",
      phone: "(888) 838-7697",
      url: "https://veterans.ny.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "veterans-benefits-ny",
    "child-support-enforcement-ny",
    "child-support-modification-ny",
    "alimony-spousal-support-ny",
    "divorce-separation-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "VA apportionment",
    "38 CFR 3.450",
    "veterans disability support",
    "VA Form 21-0788",
    "veteran child support",
    "veteran spouse support",
    "38 USC 5301",
    "VA regional office",
    "USFSPA",
    "military pension division"
  ],

  sources: [
    "https://www.ecfr.gov/current/title-38/chapter-I/part-3/subpart-A/subject-group-ECFR97f3b0b6f18f3d7/section-3.450",
    "https://www.law.cornell.edu/uscode/text/38/5301",
    "https://www.va.gov"
  ],

  lastVerified: "2026-04-18",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
