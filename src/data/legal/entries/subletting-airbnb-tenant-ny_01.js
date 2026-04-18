export const SUBLETTING_AIRBNB_TENANT_NY = {
  id: "subletting-airbnb-tenant-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Subletting and Short-Term Rentals — What Tenants Can and Cannot Do in New York" },

  summary: {
    en: "Tenants in New York have the right to sublet in buildings with 4 or more units — but they must follow specific rules: get landlord consent (which cannot be unreasonably withheld), provide the landlord with information about the subtenant, and remain responsible for the lease. Short-term rentals (Airbnb, VRBO) are more restricted — in most cities and many towns, renting out an entire apartment for fewer than 30 days while the tenant is not present is illegal."
  },

  whoQualifies: {
    en: [
      "Any tenant in a building with 4 or more residential units who wants to sublet their apartment.",
      "Any tenant who needs to leave temporarily (travel, work assignment, family emergency) and wants someone to cover the rent.",
      "Any tenant considering listing their apartment on Airbnb, VRBO, or similar platforms.",
      "Landlords who want to understand their rights regarding subletting and short-term rentals."
    ]
  },

  whatItMeans: {
    en: "Under Real Property Law § 226-b, tenants in buildings with 4 or more residential units have the right to sublet, subject to the landlord's consent. The landlord cannot unreasonably withhold consent. The tenant must: send a written request to the landlord by certified mail, include the proposed subtenant's name, business address, and home address, the term of the sublease, the reason for subletting, the tenant's address during the sublease, and the written consent of any co-tenant. The landlord has 30 days to respond. If the landlord does not respond within 30 days, consent is deemed granted. If the landlord unreasonably withholds consent, the tenant can sublet anyway — but should document the request and the landlord's failure to respond. The original tenant remains on the lease and is responsible for rent and lease terms — the subtenant is the tenant's responsibility, not the landlord's. For short-term rentals: New York's Multiple Dwelling Law § 4(8)(a) prohibits renting an apartment in a building with 3 or more units for fewer than 30 consecutive days unless the permanent tenant is present during the stay. This effectively bans most Airbnb-style entire-apartment listings in multifamily buildings. Rochester has additional local regulations on short-term rentals. Violations can result in fines and eviction proceedings."
  },

  yourRights: {
    en: [
      "In buildings with 4+ units, the tenant has the right to sublet — the landlord cannot unreasonably refuse.",
      "The landlord must respond to a subletting request within 30 days — silence means consent.",
      "The original tenant remains responsible for the lease during the sublease.",
      "Short-term rentals (under 30 days) in multifamily buildings are prohibited unless the tenant is present.",
      "The landlord cannot charge a premium or extra fee for approving a sublease (they can charge reasonable expenses like credit check costs).",
      "In buildings with 3 or fewer units, the lease controls — if the lease says no subletting, the landlord can refuse."
    ]
  },

  legalOptions: {
    en: [
      "If the landlord unreasonably refuses a subletting request, the tenant can file a complaint with the NY Division of Housing and Community Renewal (for rent-stabilized apartments) at (866) 275-3427.",
      "For non-stabilized apartments, the tenant can proceed with the sublease after the 30-day period if the landlord did not respond — but documenting the request is essential.",
      "If the landlord attempts to evict for a lawful sublease, the tenant can raise the subletting right as a defense. Free legal help is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "For short-term rental regulations in Rochester, contact the Bureau of Buildings and Zoning at (585) 428-6520.",
      "Tenants who list apartments on Airbnb in violation of the Multiple Dwelling Law risk fines and eviction — understanding the rules before listing is important."
    ]
  },

  example: {
    en: "A tenant in a Rochester apartment building (8 units) takes a 3-month work assignment in another city. She sends a certified letter to the landlord requesting permission to sublet, including the subtenant's information and the dates. The landlord does not respond within 30 days. Under RPL § 226-b, consent is deemed granted. The tenant sublets the apartment, remains on the lease, and returns at the end of the assignment."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Subletting rights, tenant rights, eviction defense",
      qualifier: "Low-income residents of Monroe County",
      access: "Phone intake",
      outcome: "Legal advice and representation",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "roommate-rights-ny",
    "tenant-rights-repairs-ny",
    "eviction-process-ny",
    "rent-increase-lease-renewal-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "subletting",
    "sublet",
    "Airbnb",
    "short-term rental",
    "VRBO",
    "RPL 226-b",
    "sublease",
    "landlord consent sublet",
    "30 day rule",
    "Multiple Dwelling Law",
    "temporary rental",
    "subtenant"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/RPP/226-B",
    "https://www.nysenate.gov/legislation/laws/MDW/4"
  ],

  lastVerified: "2026-04-16",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
