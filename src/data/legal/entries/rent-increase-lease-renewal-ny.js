export const RENT_INCREASE_LEASE_RENEWAL_NY = {
  id: "rent-increase-lease-renewal-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Rent Increases and Lease Renewal in New York (Outside NYC)" },

  summary: {
    en: "Outside of New York City, most rentals are not rent-stabilized — landlords can raise the rent by any amount when the lease ends or on proper notice for month-to-month tenancies. However, New York law requires advance written notice before a rent increase, and the amount of notice depends on how long the tenant has lived there. Landlords cannot raise rent as retaliation for a tenant exercising their rights."
  },

  whoQualifies: {
    en: [
      "Any residential tenant in New York outside of NYC (where rent stabilization rules may apply).",
      "Tenants on a lease: the rent is locked during the lease term and can only change at renewal.",
      "Month-to-month tenants: the rent can change on proper written notice."
    ]
  },

  whatItMeans: {
    en: "In Monroe County and most of upstate New York, there is no rent control or rent stabilization. A landlord can raise the rent to any amount at lease renewal or with proper notice for month-to-month tenancies. Under RPL § 226-c (added by the 2019 HSTPA), the landlord must give advance written notice before a rent increase. The amount of notice depends on how long the tenant has lived there: 30 days for tenancies under 1 year, 60 days for 1-2 years, and 90 days for 2+ years. This same notice schedule applies to a decision not to renew the lease. During the lease term, the landlord cannot raise the rent unless the lease has a specific provision allowing mid-term increases (rare in residential leases). A rent increase cannot be retaliatory — if it comes within one year of a good-faith complaint about conditions (RPL § 223-b), the tenant can raise retaliation as a defense. A tenant who does not agree to the increase can choose to move when the lease ends, but the tenant cannot be forced out during the notice period."
  },

  yourRights: {
    en: [
      "The landlord must provide advance written notice before raising rent: 30 days (under 1 year tenancy), 60 days (1-2 years), or 90 days (2+ years).",
      "During the lease term, the rent cannot be raised unless the lease specifically allows it.",
      "A rent increase within one year of a good-faith complaint is presumed retaliatory under RPL § 223-b.",
      "The landlord cannot charge a late fee unless the lease specifically provides for one.",
      "The tenant has the right to the full notice period before any increase takes effect.",
      "A landlord's decision not to renew also requires the same advance written notice."
    ]
  },

  legalOptions: {
    en: [
      "If a rent increase was imposed without the required advance notice, the increase may not be enforceable until proper notice is given.",
      "If the increase appears retaliatory (within one year of a complaint), the tenant can raise retaliation as a defense in housing court. Legal Aid Society of Rochester at (585) 232-4090 can advise.",
      "If the landlord attempts to evict for refusing an unreasonable increase, the tenant has the right to defend in housing court.",
      "Tenants who are struggling with rent increases can check whether they qualify for rental assistance programs through Monroe County DSS at (585) 753-6960 or through 211.",
      "Under RPL § 226-c, the notice must be in writing. Verbal notice of a rent increase is not sufficient."
    ]
  },

  example: {
    en: "A tenant who has lived in a Rochester apartment for three years receives a letter saying rent will increase from $900 to $1,100 next month. Because she has lived there for more than two years, the landlord must give 90 days' notice under RPL § 226-c. One month's notice is not enough. The tenant contacts Legal Aid, which advises her that the increase cannot take effect until 90 days after proper notice is given."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Tenant rights, rent disputes, lease issues",
      qualifier: "Low-income residents of Monroe and surrounding counties",
      access: "Phone intake",
      outcome: "Direct representation or advice",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "tenant-rights-repairs-ny",
    "eviction-process-ny",
    "security-deposit-ny",
    "illegal-lockout-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "rent increase",
    "lease renewal",
    "non-renewal",
    "RPL 226-c",
    "30 60 90 day notice",
    "how much notice",
    "landlord raising rent",
    "month to month",
    "end of lease",
    "retaliation rent increase"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/RPP/226-C",
    "https://ag.ny.gov/publications/residential-tenants-rights-guide"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
