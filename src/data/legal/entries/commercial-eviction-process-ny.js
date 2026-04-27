export const COMMERCIAL_EVICTION_PROCESS_NY = {
  id: "commercial-eviction-process-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY RPA 711",
  status: "active",

  title: { en: "Commercial Eviction Process — How a Landlord Removes a Business Tenant in New York" },

  summary: {
    en: "Commercial eviction in New York follows a different track from residential eviction. A business tenant who falls behind on rent or breaches a commercial lease can be removed through an RPAPL Article 7 summary proceeding, but the tenant protections found in residential cases (right to counsel, Tenant Safe Harbor, ERAP) mostly do not apply. Commercial leases often include quick remedies for default. A Yellowstone injunction can buy time to cure a non-monetary default. Commercial tenants facing eviction have narrower defenses but stronger contract rights."
  },

  whoQualifies: {
    en: [
      "A commercial tenant (small business, office, warehouse, retail) facing an eviction proceeding.",
      "A restaurant, storefront, or service business that received a notice to cure or quit.",
      "A commercial tenant whose lease is month-to-month and who received a 30-day termination notice.",
      "A tenant whose commercial landlord has changed the locks or seized property without a court order.",
      "A commercial subtenant whose master lease has been terminated.",
      "A commercial tenant seeking a Yellowstone injunction to stop a cure period from running."
    ]
  },

  whatItMeans: {
    en: "Commercial eviction is governed primarily by Real Property Actions and Proceedings Law (RPAPL) Article 7, Sections 711 and 713. A landlord starts a summary proceeding in the court with jurisdiction — in Rochester, the City Court Commercial Part, or Monroe County Court for claims outside the city. Nonpayment proceeding under RPAPL 711(2): the landlord serves a 14-day rent demand (or the period set in the lease if longer). After the cure period expires without payment, the landlord files a petition. Holdover proceeding under RPAPL 711(1) or 713: used when the tenant has breached a non-monetary lease term (unauthorized assignment, illegal use, failure to maintain insurance) or when the lease has ended. The landlord serves a notice to cure (typically 10-30 days per the lease) and, if not cured, a notice of termination. Strict notice compliance is required — defects in notice can dismiss the proceeding. Answer: the tenant has a short period (usually 10 days after service) to file an answer. Defenses include: defective notice, lease defense (payment was made, landlord waived the breach, landlord breached first), estoppel, retaliation (narrower than residential), improper service. Warrant of eviction: if the landlord wins, the court issues a warrant. RPAPL 749 sets the warrant procedure. Commercial warrants are typically executed promptly (no extended stays like residential). The Monroe County Sheriff executes warrants. Self-help lockouts: RPAPL 853 gives a commercial tenant a treble-damages claim if the landlord uses self-help (changes locks, removes property, shuts off utilities) without a warrant. Even commercial leases that authorize self-help are unenforceable if the landlord acts without a court order (Northside Tower Realty). Yellowstone injunction: a commercial tenant facing a non-monetary default can seek a Yellowstone injunction from Supreme Court to toll the cure period while the dispute is litigated. Monetary defaults do not qualify. Bankruptcy stay: a commercial tenant that files Chapter 11 automatically stays eviction under 11 USC 362, but the stay is subject to lifts under 11 USC 365(d)(3) and (d)(4) which require assumption or rejection within deadlines. Personal guarantees: many commercial leases include a personal guarantee from the business owner, which survives the business entity's bankruptcy."
  },

  yourRights: {
    en: [
      "A commercial tenant has the right to strict compliance with notice requirements under RPAPL 711.",
      "A commercial tenant has the right to an answer and hearing before a warrant is issued.",
      "A commercial tenant has the right to treble damages if the landlord uses self-help eviction (RPAPL 853).",
      "A commercial tenant has the right to seek a Yellowstone injunction for non-monetary defaults.",
      "A commercial tenant has the right to an automatic stay if the business files bankruptcy under 11 USC 362.",
      "A commercial tenant has the right to recover security deposits subject to General Obligations Law 7-103.",
      "A commercial tenant has the right to appeal an adverse ruling under CPLR Article 55."
    ]
  },

  legalOptions: {
    en: [
      "Rochester City Court Commercial Part at (585) 371-3412 — commercial eviction filings within city limits.",
      "Monroe County Supreme Court at (585) 371-3758 — Yellowstone injunctions and larger commercial matters.",
      "Monroe County Bar Association Lawyer Referral at (585) 546-2130 — commercial lease attorneys.",
      "Small Business Legal Clinic at (585) 295-5840 — limited help for small business tenants.",
      "Rochester Regional Chamber of Commerce at (585) 256-4620 — business resource referrals.",
      "NY Attorney General Economic Justice at (800) 771-7755 — landlord self-help complaints.",
      "U.S. Small Business Administration at (800) 659-2955 — disaster and emergency loan programs."
    ]
  },

  example: {
    en: "A Rochester coffee shop tenant received a 10-day notice to cure for alleged unauthorized subletting (a freelance baker used the kitchen overnight). The tenant disputed that the arrangement was a sublet. With 3 days left on the cure period, the tenant filed a Yellowstone order to show cause in Monroe County Supreme Court. The court granted a temporary restraining order tolling the cure period. At the preliminary injunction hearing, the court held that the arrangement was a licensee, not a sublet, and granted the Yellowstone injunction. The eviction was avoided without paying anything on the alleged breach. The tenant's lease remained in effect."
  },

  counsel: [
    {
      type: "referral",
      name: "Monroe County Bar Association Lawyer Referral",
      focus: "Commercial landlord-tenant, Yellowstone injunctions, lease disputes",
      qualifier: "Any Monroe County business",
      access: "Phone at (585) 546-2130",
      outcome: "30-minute consultation for reduced fee, then standard representation",
      phone: "(585) 546-2130",
      url: "https://www.mcba.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "nonprofit",
      name: "Small Business Legal Clinic (Monroe County)",
      focus: "Brief advice for small business commercial tenants",
      qualifier: "Small businesses under revenue thresholds",
      access: "By appointment",
      outcome: "Brief advice and referral",
      phone: "(585) 295-5840",
      url: "https://empirejustice.org",
      verified: false,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "yellowstone-injunction-commercial-lease-ny-cl",
    "eviction-process-ny",
    "illegal-eviction-ny",
    "bankruptcy-chapter13-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "commercial eviction",
    "RPAPL Article 7",
    "RPAPL 711",
    "RPAPL 749",
    "RPAPL 853",
    "Yellowstone injunction",
    "notice to cure",
    "commercial lease default",
    "self-help eviction",
    "small business tenant"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/RPA/711",
    "https://www.nysenate.gov/legislation/laws/RPA/749",
    "https://www.nysenate.gov/legislation/laws/RPA/853"
  ],

  lastVerified: "2026-04-27",
  factCheckedBy: { tool: "websearch+webfetch", date: "2026-04-27" },
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
