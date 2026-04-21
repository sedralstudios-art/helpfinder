export const EVICTION_PROCESS_NY = {
  id: "eviction-process-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY RPA A7",
  status: "active",

  title: { en: "NY Eviction Process — Notice, Court Hearing, Warrant, and the Tenant's Right to a Stay" },

  summary: {
    en: "A NY landlord cannot remove a tenant without a court order. The process is set by Real Property Actions and Proceedings Law Article 7. It has four stages: written notice (14 days for unpaid rent, or 30/60/90 days for non-renewal based on tenancy length under Real Property Law § 226-c); a special proceeding filed in the local court; a judgment; and a warrant executed by the sheriff or marshal with 14 more days of notice. Tenants can ask for a stay of up to one year under RPA § 753, and self-help eviction by the landlord is illegal."
  },

  whoQualifies: {
    en: [
      "A NY residential tenant under a written lease, an oral lease, or a month-to-month arrangement.",
      "A tenant in a house, apartment, room, rooming-house unit, or a hotel room occupied for 30 consecutive days or longer.",
      "A tenant facing a 14-day pay-or-quit notice for unpaid rent.",
      "A tenant facing a 30-, 60-, or 90-day non-renewal or rent-increase notice depending on how long the tenant has occupied the unit under RPP § 226-c.",
      "A Rochester tenant covered by the 2024 NY Good Cause Eviction Law (adopted locally by Rochester) whose landlord needs a statutory reason to refuse renewal or raise rent significantly."
    ]
  },

  whatItMeans: {
    en: "A NY eviction follows a four-stage process set by Real Property Actions and Proceedings Law Article 7. A landlord cannot lawfully lock out a tenant, shut off utilities, remove possessions, or use force to take back the property. Only a sheriff, marshal, or constable acting under a court-issued warrant can remove a tenant. Stage one — written notice. The notice depends on the reason. For unpaid rent, the landlord must serve a 14-day written demand for rent under RPA § 711(2) before filing a nonpayment case. If the landlord is not renewing the tenancy or is raising rent by 5 percent or more, RPP § 226-c requires advance notice scaled to the length of the tenancy: 30 days if the tenant has occupied less than one year, 60 days if one to two years, and 90 days if two or more years. A lease-violation (holdover) case typically requires a notice to cure followed by a notice of termination, depending on the lease terms. Stage two — special proceeding filed in local court. Eviction cases go to the city, town, or village court where the property sits. Monroe County cases go to Rochester City Court (for properties inside the city) or the relevant town or village justice court. The landlord files a petition and has it served on the tenant under the rules in RPA § 735. The tenant has the right to appear, answer in writing or orally, raise defenses, and demand a trial. Common defenses include habitability breaches (the unit is not livable), retaliation (the notice followed a good-faith complaint), improper service or defective notice, and payment of the rent before judgment. Under RPA § 744, a tenant cannot be evicted because of domestic-violence-victim status. Stage three — judgment. If the court rules for the landlord, RPA § 747 governs the entry of judgment. If the court rules for the tenant, the case is dismissed and the tenant stays. In a nonpayment case, paying the full amount owed before judgment typically ends the case. Stage four — warrant and eviction. RPA § 749 allows the court to issue a warrant directing the sheriff, marshal, or constable to remove the tenants. The officer must give the tenant at least 14 days' written notice before executing the warrant and may execute it only on a business day between sunrise and sunset. RPA § 749(2)(b) requires the officer to check for companion animals and coordinate their safe removal. RPA § 753 gives the court discretion to stay the warrant for up to one year in a dwelling case — the tenant must apply in good faith, show inability to find similar housing in the neighborhood or extreme hardship (serious illness, a child's school enrollment, other extenuating circumstances), and deposit the ongoing rent into court during the stay. Self-help eviction is illegal and expensive. A landlord who locks a tenant out, shuts off utilities, or removes possessions without a court order is liable under RPA § 853 for up to triple damages plus attorney fees. Monroe County tenants facing eviction have access to free Legal Aid Society of Rochester representation at Rochester City Court on hearing days and through phone intake."
  },

  yourRights: {
    en: [
      "A NY tenant has the right to stay in the home until a judge signs an order authorizing removal — self-help lockouts, utility shutoffs, and forcible entry by the landlord are illegal.",
      "A NY tenant has the right under RPA § 711(2) to a 14-day written rent demand before any nonpayment eviction case can be filed.",
      "A NY tenant has the right under RPP § 226-c to 30, 60, or 90 days' advance notice before the landlord refuses to renew or raises rent 5 percent or more — the length depends on how long the tenant has lived there.",
      "A tenant in a nonpayment case has the right to pay the rent owed at any point before judgment to stop the eviction.",
      "A tenant has the right to appear in court, raise defenses (habitability, retaliation, defective notice), and demand a trial under RPA § 745.",
      "A tenant has the right under RPA § 749 to at least 14 days' written warrant-of-eviction notice from the sheriff or marshal before physical removal, with execution limited to business days during daylight.",
      "A tenant has the right under RPA § 753 to ask the court for a stay of the warrant for up to one year based on inability to relocate or extreme hardship.",
      "A tenant has the right under RPA § 853 to seek triple damages and attorney fees from a landlord who evicts by force, lockout, or utility shutoff without a court order."
    ]
  },

  legalOptions: {
    en: [
      "Rochester City Court Civil Part at 295 Exchange Boulevard, Rochester, (585) 428-6990 — hears eviction cases for properties inside Rochester.",
      "Monroe County town and village justice courts — each town and village handles evictions for properties in its jurisdiction.",
      "Legal Aid Society of Rochester at (585) 232-4090 — represents low-income Monroe County tenants in eviction defense; often staffs the Rochester City Court Housing Part on hearing days.",
      "LawNY at (585) 325-2520 — eviction defense across 14-county Western NY service area.",
      "JustCause at (585) 232-3051 — pro bono volunteer attorney referrals for Monroe County tenants.",
      "NY Attorney General Residential Tenants' Rights Guide at ag.ny.gov/publications/residential-tenants-rights-guide — plain-language overview of tenant rights in an eviction.",
      "NY State Good Cause Eviction information at ag.ny.gov/publications/new-york-state-good-cause-eviction-law — for tenants in municipalities that have adopted Good Cause.",
      "Monroe County Bar Association Lawyer Referral Service at (585) 546-2130 — reduced-fee private-attorney consultation."
    ]
  },

  example: {
    en: "James rents a Rochester apartment. His landlord sent him a 30-day notice saying the tenancy would end so the landlord could renovate. James had lived there 18 months, so RPP § 226-c actually required 60 days' notice, not 30. He contacted Legal Aid Society of Rochester. A lawyer attended the Rochester City Court hearing, argued the notice was defective, and pointed out that Rochester has adopted the NY Good Cause Eviction Law — which requires a statutory reason beyond the landlord's preference to renovate. The court dismissed the petition. James kept his apartment and the landlord had to start over with a proper notice if a valid reason existed."
  },

  counsel: [
    {
      type: "nonprofit",
      name: "Legal Aid Society of Rochester",
      focus: "Eviction defense in Rochester City Court and Monroe County justice courts",
      qualifier: "Low-income Monroe County tenant",
      access: "Phone intake; walk-in at Rochester City Court on Housing Part days",
      outcome: "Free representation in eviction proceedings",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "LawNY — Legal Assistance of Western New York",
      focus: "Eviction defense, fair housing, warrant-of-eviction stays",
      qualifier: "Low-income resident in 14 Western NY counties including Monroe",
      access: "Phone intake",
      outcome: "Free representation",
      phone: "(585) 325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "nonprofit",
      name: "JustCause",
      focus: "Eviction defense, landlord-tenant volunteer attorney matching",
      qualifier: "Low-income Monroe County tenant",
      access: "Phone intake",
      outcome: "Free volunteer-attorney representation",
      phone: "(585) 232-3051",
      url: "https://www.justcauseny.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "nonprofit",
      name: "Empire Justice Center",
      focus: "Complex eviction defenses, Good Cause enforcement, impact cases",
      qualifier: "Low and moderate income NY tenants",
      access: "Phone intake",
      outcome: "Free representation and policy advocacy",
      phone: "(585) 454-4060",
      url: "https://empirejustice.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "tenant-habitability-ny",
    "security-deposit-ny",
    "illegal-eviction-ny",
    "tenant-rights-repairs-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "NY eviction process",
    "RPA Article 7",
    "14-day rent demand",
    "RPP 226-c non-renewal notice",
    "holdover vs nonpayment",
    "warrant of eviction",
    "RPA 749 14-day sheriff notice",
    "RPA 753 one-year stay",
    "Good Cause Eviction NY",
    "self-help eviction illegal"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/RPA/A7",
    "https://codes.findlaw.com/ny/real-property-law/rpp-sect-226-c/",
    "https://codes.findlaw.com/ny/real-property-actions-and-proceedings-law/rpa-sect-711/",
    "https://codes.findlaw.com/ny/real-property-actions-and-proceedings-law/rpa-sect-749/",
    "https://codes.findlaw.com/ny/real-property-actions-and-proceedings-law/rpa-sect-753/",
    "https://ag.ny.gov/publications/residential-tenants-rights-guide",
    "https://ag.ny.gov/publications/new-york-state-good-cause-eviction-law"
  ],

  lastVerified: "2026-04-21",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
