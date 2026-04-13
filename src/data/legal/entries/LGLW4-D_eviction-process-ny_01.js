export const EVICTION_PROCESS_NY = {
  id: "eviction-process-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  status: "active",

  title: { en: "Eviction Process — What Your Landlord Must Do Before You Can Be Removed" },

  summary: {
    en: "In New York, a landlord cannot force you out of your home without going through the courts. Only a judge can order an eviction, and only a sheriff or marshal can carry it out. Changing locks, shutting off utilities, or removing your belongings without a court order is illegal."
  },

  whoQualifies: {
    en: [
      "Every person who rents a home in New York State, whether on a written lease, verbal agreement, or month-to-month arrangement.",
      "These protections apply whether the landlord claims unpaid rent, a lease violation, or wants the tenant to leave after the lease ends.",
      "Tenants in cities that have adopted the Good Cause Eviction Law — including Rochester — have additional protections against eviction without cause and unreasonable rent increases.",
      "A tenant's status as a domestic violence victim cannot be used as a basis for eviction (RPAPL § 744)."
    ]
  },

  whatItMeans: {
    en: "Eviction in New York is a court-supervised process called a summary proceeding under RPAPL Article 7. Before going to court, the landlord must serve the tenant with a written notice. This could be a 14-day rent demand for unpaid rent, a notice to cure for a lease violation, or a termination notice if the lease has ended. If the tenant does not comply or leave, the landlord must file a petition in court, have the tenant properly served, and appear before a judge. The tenant has the right to appear, answer, and raise defenses. Only after a judge issues a judgment and a warrant of eviction can a sheriff or marshal remove the tenant. Even then, at least 14 days notice must be given before the physical eviction."
  },

  yourRights: {
    en: [
      "You have the right to remain in your home until a court orders otherwise. No landlord may remove you, lock you out, or shut off your utilities without a court order (RPAPL § 768).",
      "In a nonpayment case, you have the right to stop the eviction by paying all rent owed at any time before the court issues a judgment (RPAPL § 731(4)).",
      "You have the right to receive proper written notice before any court case is filed — 14 days for rent demands, and 30, 60, or 90 days for non-renewal depending on how long you have lived there (RPL § 226-c).",
      "You have the right to appear in court, present evidence, and raise defenses including breach of the warranty of habitability, retaliation, or improper notice.",
      "After a warrant of eviction is issued, you have the right to at least 14 days notice before a sheriff or marshal can carry out the eviction (RPAPL § 749).",
      "You may request a stay of eviction for up to one year in cases of hardship if you cannot find similar housing in the area (RPAPL § 753).",
      "RPAPL § 853 allows a court to award treble damages against a landlord who uses force, threats, lockouts, or utility shutoffs to remove a tenant without a court order."
    ]
  },

  legalOptions: {
    en: [
      "Under RPAPL Article 7, eviction cases in New York are heard in local courts — city court, district court, town court, or village court depending on the location of the property.",
      "In cities that have adopted the Good Cause Eviction Law (RPL Article 6-A), including Rochester, landlords must prove a legally recognized reason to evict. Rent increases above the annual threshold set by the Division of Housing and Community Renewal are presumed unreasonable unless the landlord demonstrates otherwise in court.",
      "Free legal representation for tenants facing eviction in Rochester City Court is available through the Legal Aid Society of Rochester at (585) 232-4090. Attorneys are present in court on most hearing days.",
      "Legal Assistance of Western New York (LawNY) provides free legal help on housing matters including eviction defense at (585) 325-2520.",
      "The New York State Attorney General publishes a Residential Tenants' Rights Guide with detailed information about eviction procedures and tenant protections at ag.ny.gov.",
      "The New York State Unified Court System provides free eviction forms and guides for both tenants and landlords at nycourts.gov."
    ]
  },

  example: {
    en: "James rents an apartment in Rochester on a one-year lease. His landlord served him with a notice saying he had to leave in 30 days because the landlord wanted to renovate. James learned that Rochester adopted the Good Cause Eviction Law. Under that law, his landlord needed to prove a legally recognized reason to remove him. James contacted the Legal Aid Society of Rochester. An attorney reviewed his case and represented him in court. The judge found the landlord had not met the legal standard. James stayed in his apartment."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Eviction defense, tenant representation in Rochester City Court, habitability claims",
      qualifier: "Low income tenants in Monroe County and surrounding counties",
      access: "Phone intake at (585) 232-4090, walk-in at Rochester City Court on court dates",
      outcome: "Direct representation in eviction proceedings",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Assistance of Western New York (LawNY)",
      focus: "Housing, eviction defense, fair housing, public benefits",
      qualifier: "Low income residents in 14 Western NY counties including Monroe",
      access: "Phone intake at (585) 325-2520",
      outcome: "Direct representation in housing and eviction cases",
      phone: "(585) 325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "JustCause",
      focus: "Eviction defense, landlord-tenant disputes, civil legal matters",
      qualifier: "Low income residents of Monroe County",
      access: "Referral through Monroe County Bar Association",
      outcome: "Pro bono volunteer attorney representation",
      phone: "585-232-3051",
      url: "https://mcba.org/?pg=TelescaCenterforJustice",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Empire Justice Center",
      focus: "Housing rights, eviction defense, systemic advocacy, fair housing",
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
    "tenant-habitability-ny",
    "security-deposit-ny",
    "illegal-eviction-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "eviction",
    "getting kicked out",
    "landlord wants me out",
    "eviction notice",
    "court papers from landlord",
    "can't pay rent",
    "behind on rent",
    "lease ended",
    "landlord won't renew",
    "rent too high",
    "eviction court",
    "marshal notice",
    "14 day notice",
    "nonpayment",
    "holdover",
    "good cause eviction"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/RPA/A7",
    "https://ag.ny.gov/publications/residential-tenants-rights-guide",
    "https://ag.ny.gov/publications/new-york-state-good-cause-eviction-law",
    "https://www.nysenate.gov/legislation/laws/RPP/226-C",
    "https://www.nycourts.gov/legacyPDFS/FORMS/landlordtenant/LandlordGuide-NonpaymentEviction.pdf"
  ],

  lastAudited: "2026-04-04",
  lastVerifiedBy: "Claude + Tony",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
