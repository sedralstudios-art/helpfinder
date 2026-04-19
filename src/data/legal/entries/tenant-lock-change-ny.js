export const TENANT_LOCK_CHANGE_NY = {
  id: "tenant-lock-change-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY RPP 227-D",
  status: "active",

  title: { en: "Tenant Lock Changes — Security Rights in New York" },

  summary: {
    en: "A tenant's right to change the locks depends on the lease and the situation. In New York, tenants generally have the right to install additional security devices (like a chain lock or deadbolt) at their own expense, and the landlord cannot charge a fee for this. For domestic violence survivors, New York law provides the explicit right to change locks with proper notice to the landlord."
  },

  whoQualifies: {
    en: [
      "Any tenant who wants to improve the security of their apartment.",
      "Domestic violence survivors who need to change locks for safety.",
      "Any tenant whose landlord refuses to replace or repair a broken lock.",
      "Tenants in buildings where the landlord has not maintained adequate security."
    ]
  },

  whatItMeans: {
    en: "Under New York Real Property Law § 235-b (warranty of habitability), the landlord must provide functioning locks on all entry doors. If the lock is broken, the landlord must repair or replace it. Under NYC Administrative Code § 27-2004(8) and analogous provisions in other jurisdictions, the tenant has the right to install additional locks and security devices at their own expense — the landlord cannot prevent this and cannot charge a fee for it. The tenant must provide the landlord with a key to any new lock (this is standard in most leases and local codes). For domestic violence survivors, Real Property Law § 227-d provides explicit protections: a tenant who has an order of protection or a police report documenting domestic violence may request that the landlord change the locks — and if the landlord does not do so within a reasonable time, the tenant can change them and provide the landlord with a key. If the lease has a provision prohibiting lock changes, that provision may not be enforceable in a domestic violence situation."
  },

  yourRights: {
    en: [
      "The landlord must provide and maintain functioning locks on all entry doors.",
      "The tenant has the right to install additional security devices (chain locks, deadbolts) at their own expense.",
      "The landlord cannot charge a fee for the tenant installing additional locks.",
      "The tenant must provide the landlord with a key to any new lock.",
      "Domestic violence survivors have the explicit right under RPL § 227-d to request a lock change, and to change the lock themselves if the landlord does not act.",
      "A landlord who refuses to repair a broken lock is violating the warranty of habitability."
    ]
  },

  legalOptions: {
    en: [
      "If the landlord refuses to fix a broken lock, a code enforcement complaint can be filed with Rochester 311 or the local building department.",
      "For domestic violence situations, the tenant can provide the landlord with a copy of the order of protection or police report and request a lock change under RPL § 227-d.",
      "If the landlord retaliates for installing additional security, the retaliation can be raised as a defense in housing court under RPL § 223-b.",
      "Free legal advice on lock changes, security, and landlord obligations is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "In DV situations, the Willow Domestic Violence Center at (585) 222-7233 can assist with safety planning that includes securing the home."
    ]
  },

  example: {
    en: "A tenant in Rochester obtains an order of protection against a former partner who also lived in the apartment. The former partner still has a key. The tenant requests that the landlord change the locks, providing a copy of the order of protection. The landlord delays for two weeks. The tenant, citing RPL § 227-d, changes the lock herself, installs a new deadbolt, and provides the landlord with a key to the new lock. The cost is modest and the tenant is now safe."
  },

  counsel: [
    {
      type: "free",
      name: "Willow Domestic Violence Center",
      focus: "DV safety planning, lock change assistance, legal advocacy",
      qualifier: "Anyone experiencing domestic violence in Monroe County",
      access: "24/7 hotline",
      outcome: "Safety planning, shelter, legal advocacy",
      phone: "(585) 222-7233",
      url: "https://willowcenterny.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "illegal-lockout-ny",
    "tenant-rights-repairs-ny",
    "domestic-violence-legal-options-ny",
    "housing-code-violations-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "change locks",
    "tenant lock change",
    "broken lock",
    "landlord lock",
    "additional lock",
    "deadbolt",
    "security device",
    "DV lock change",
    "RPL 227-d",
    "key to landlord",
    "apartment security"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/RPP/227-D",
    "https://www.nysenate.gov/legislation/laws/RPP/235-B",
    "https://ag.ny.gov/publications/residential-tenants-rights-guide"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
