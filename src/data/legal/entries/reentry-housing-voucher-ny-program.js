export const REENTRY_HOUSING_VOUCHER_NY_PROGRAM = {
  id: "reentry-housing-voucher-ny-program",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "agency-program",
  primaryStatute: "NY EXC 296",
  status: "active",

  title: { en: "Housing Help After Incarceration — Reentry Programs, Vouchers, and Fair Chance Housing" },

  summary: {
    en: "People returning from state or federal incarceration face severe housing barriers — many landlords reject applicants with criminal records. New York has reentry-specific housing programs (Justice Involved Supportive Housing, Second Chance vouchers through some PHAs, transitional housing through nonprofits) and fair-chance-housing protections that limit how landlords can use criminal records. These options prevent homelessness that often follows release."
  },

  whoQualifies: {
    en: [
      "Any person returning to Monroe County from state or federal incarceration.",
      "Any person on parole or post-release supervision who needs housing.",
      "Any person whose criminal record was an obstacle to standard rental housing.",
      "Any person whose rental application was denied because of a criminal record without individualized review."
    ]
  },

  whatItMeans: {
    en: "Multiple New York programs specifically serve people returning from incarceration. The Justice Involved Supportive Housing (JISH) program provides long-term supportive housing (housing plus case management, mental health, and substance-use services) for people with mental illness returning from jail or prison — administered by state and county mental health agencies. Second Chance vouchers (through the Rochester Housing Authority and some county programs) are Section 8 vouchers with preferences or set-asides for justice-involved individuals. Emergency shelter and transitional housing in Monroe County is provided by multiple nonprofits — the Salvation Army, Open Door Mission, Willow (for DV survivors), and others. Fair chance housing: New York has growing protections against blanket use of criminal records. HUD guidance (2016 Fair Housing Act guidance) and the NY Human Rights Law (Executive Law Section 296(16)) require housing providers to consider criminal records on a case-by-case basis rather than apply blanket bans. A landlord using a blanket ban faces potential disparate-impact fair housing liability. The Rochester-Monroe County Reentry Taskforce coordinates planning and services for returning citizens. Community Resource Referrals for discharge planning start in prison through the Department of Corrections and Community Supervision (DOCCS) — a person can request a reentry plan in the months before release. The Reentry Housing Guide (available through prison education departments and community groups) lists specific local options and contact information."
  },

  yourRights: {
    en: [
      "A person returning from incarceration has the right to apply for housing without a blanket ban based on criminal record.",
      "A landlord considering a criminal record must conduct individualized review — nature and recency of the offense, evidence of rehabilitation, connection to housing risk.",
      "A person denied housing based on a criminal record can file a complaint with HUD or the NYS Division of Human Rights if the landlord used a blanket policy or the denial was otherwise discriminatory.",
      "Section 8 vouchers have federal rules that prohibit certain categories of applicants (lifetime sex offender registrants, certain drug offenses in public housing), but these are narrower than many private landlords' blanket bans.",
      "A person on parole or PRS has the right to challenge parole-condition housing restrictions through the parole officer and ultimately the Parole Board.",
      "Transitional housing stays can be extended in many cases based on individual circumstances — request extensions in writing."
    ]
  },

  legalOptions: {
    en: [
      "Monroe County Department of Human Services at (585) 753-6960 — starting point for housing assistance after release.",
      "Rochester Housing Authority at (585) 697-6300 — Section 8 voucher applications and Second Chance program information.",
      "The Center for Community Alternatives at (585) 454-2590 — reentry services including housing navigation.",
      "Action for a Better Community (ABC) at (585) 325-5116 — emergency services and reentry support.",
      "Legal Aid Society of Rochester at (585) 232-4090 — legal help with housing discrimination based on criminal record.",
      "Rochester-Monroe Anti-Poverty Initiative and the Rochester Reentry Collaborative coordinate case management for returning citizens.",
      "For fair housing violations based on criminal record: HUD at (800) 669-9777 or NYS Division of Human Rights at (888) 392-3644."
    ]
  },

  example: {
    en: "A man released from a state prison after serving a sentence for a non-violent drug offense completed a parole plan that included housing. He was initially denied at multiple private landlords because of the conviction. His parole officer connected him with the Center for Community Alternatives, which helped him apply for a Second Chance housing voucher through the Rochester Housing Authority. While waiting, he stayed at a transitional housing site. Within four months he received a voucher and signed a lease at a private apartment that accepted Section 8. The Center provided case management and he kept his parole obligations."
  },

  counsel: [
    {
      type: "nonprofit",
      name: "Center for Community Alternatives",
      focus: "Reentry services, housing navigation, legal advocacy, case management",
      qualifier: "People returning from incarceration in the Rochester area",
      access: "Phone at (585) 454-2590",
      outcome: "Housing referrals, case management, legal services",
      phone: "(585) 454-2590",
      url: "https://www.communityalternatives.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Housing discrimination based on criminal record, eviction defense, reentry legal matters",
      qualifier: "Low-income Monroe County residents",
      access: "Phone intake at (585) 232-4090",
      outcome: "Legal advice, representation",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "reentry-rights-ny",
    "section-8-housing-voucher-ny",
    "section-8-portability-ny-program",
    "fair-housing-discrimination-ny",
    "get-rap-sheet-ny",
    "seal-your-record-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "reentry housing",
    "Second Chance voucher",
    "Justice Involved Supportive Housing",
    "JISH",
    "housing after prison",
    "fair chance housing",
    "criminal record housing",
    "transitional housing reentry",
    "Rochester reentry",
    "parole housing"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/EXC/296",
    "https://www.law.cornell.edu/uscode/text/42/3604",
    "https://www.hud.gov/sites/documents/HUD_OGCGUIDAPPFHASTANDCR.PDF"
  ],

  lastVerified: "2026-04-18",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
