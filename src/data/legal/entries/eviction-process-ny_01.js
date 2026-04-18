export const EVICTION_PROCESS_NY = {
  id: "eviction-process-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Eviction — What Your Landlord Has to Do Before You Can Be Removed" },

  summary: {
    en: "In New York, your landlord cannot just kick you out. Only a judge can order an eviction. Only a sheriff or marshal can make you leave. If your landlord changes the locks, shuts off your heat, or throws out your stuff without going to court, that is illegal."
  },

  whoQualifies: {
    en: [
      "Anyone who rents a home in New York. This covers written leases, handshake deals, and month-to-month rentals.",
      "These rights apply whether your landlord says you owe rent, broke a lease rule, or wants you out after the lease ends.",
      "Tenants in Rochester have extra protection under the Good Cause Eviction Law. Your landlord needs a real reason to push you out, and big rent hikes can be challenged.",
      "Your landlord cannot evict you because you are a victim of domestic violence (RPAPL § 744)."
    ]
  },

  whatItMeans: {
    en: "Eviction in New York follows steps set by law. First, your landlord has to send you a written notice. The notice depends on the reason. If you owe rent, you get a 14-day notice to pay. If the landlord says you broke a lease rule, you get a notice to fix it. If the lease is ending, you get a termination notice. If you don't pay or leave, your landlord then has to file a case in court. You must be served with the court papers. You have the right to go to the hearing and tell your side. Only after a judge decides and signs what is called a warrant of eviction can a sheriff or marshal remove you. Even then, the sheriff or marshal has to give you at least 14 more days of notice before they can put you out."
  },

  yourRights: {
    en: [
      "You have the right to stay in your home until a judge says otherwise. Your landlord cannot lock you out or shut off your heat, water, or power without a court order (RPAPL § 768).",
      "If your landlord says you owe rent, you have the right to stop the eviction by paying what you owe — any time before the judge signs the final order (RPAPL § 731(4)).",
      "You have the right to written notice before any court case. For unpaid rent, that's 14 days. For not renewing your lease, it's 30, 60, or 90 days, depending on how long you have lived there (RPL § 226-c).",
      "You have the right to go to court, show your side, and raise defenses. Common defenses include: the home was not livable, the landlord is doing this to get back at you, or the notice was wrong.",
      "After a judge signs the warrant, the sheriff or marshal has to give you at least 14 more days before they can make you leave (RPAPL § 749).",
      "You can ask the judge for more time — up to a year — if you can't find a similar place nearby (RPAPL § 753).",
      "If your landlord pushes you out without a court order — by force, threats, lockouts, or shutting off utilities — the law lets a court award up to three times your losses (RPAPL § 853)."
    ]
  },

  legalOptions: {
    en: [
      "Eviction cases are heard in your local court. That's city court, district court, town court, or village court, depending on where the home is (RPAPL Article 7).",
      "Rochester has adopted the Good Cause Eviction Law. Landlords need a real reason to evict. Big rent increases can be challenged as unreasonable (RPL Article 6-A).",
      "Free lawyers are available for tenants in Rochester City Court through Legal Aid Society of Rochester. Call (585) 232-4090. Lawyers are often in court on hearing days.",
      "LawNY (Legal Assistance of Western New York) takes free housing cases. Call (585) 325-2520.",
      "The New York Attorney General has a free Tenants' Rights Guide online at ag.ny.gov.",
      "Free court forms and plain-language guides are at nycourts.gov."
    ]
  },

  example: {
    en: "James rents an apartment in Rochester. His landlord gave him a notice saying he had to leave in 30 days because the landlord wanted to renovate. James found out that Rochester has the Good Cause Eviction Law. Under that law, his landlord needs a real legal reason to push him out. James called Legal Aid Society of Rochester. A lawyer took his case and went to court with him. The judge said the landlord's reason was not enough. James stayed in his apartment."
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

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
