export const UTILITY_SHUTOFF_PROTECTIONS_NY = {
  id: "utility-shutoff-protections-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Utility Shutoff Protections — Heat, Electric, and Gas in New York" },

  summary: {
    en: "New York has strong protections against utility shutoffs, especially during winter. Under the Home Energy Fair Practices Act (HEFPA), utility companies must follow strict procedures before disconnecting service. During the cold-weather period (November 1 through April 15), shutoffs are heavily restricted for heating customers. If your utilities are shut off or threatened, help is available immediately."
  },

  whoQualifies: {
    en: [
      "Any residential customer of a regulated utility (RG&E, National Grid, NYSEG, etc.) in New York.",
      "Tenants whose heat or hot water is included in rent — the landlord's utility protections also apply.",
      "Customers who are elderly (62+), disabled, or seriously ill have additional protections year-round.",
      "Customers who have applied for HEAP or other energy assistance and are waiting for a decision."
    ]
  },

  whatItMeans: {
    en: "The Home Energy Fair Practices Act (Public Service Law Article 2, §§ 30-53) and the regulations of the Public Service Commission (16 NYCRR Part 11) require utility companies to follow a specific process before shutting off service. Before disconnection, the utility must send a written final notice at least 15 days before the shutoff date. The notice must explain the amount owed, the shutoff date, the customer's right to negotiate a payment agreement, and how to file a complaint with the PSC. During the cold-weather period (November 1 through April 15), utilities cannot shut off heat-related service to ANY residential customer if doing so would create a dangerous situation — and the PSC presumes it would for most residential customers. Customers who are elderly (62+), blind, disabled, or seriously ill are protected year-round from shutoff for heat-related service as long as they notify the utility of their condition. Payment agreements: every customer has the right to negotiate a deferred payment agreement (DPA) to pay arrears over time while keeping service on. The utility cannot refuse a reasonable DPA."
  },

  yourRights: {
    en: [
      "You have the right to a 15-day written notice before any shutoff.",
      "During the cold-weather period (Nov 1 - Apr 15), heat-related shutoffs are heavily restricted.",
      "You have the right to negotiate a payment agreement to pay arrears over time.",
      "If you are 62+, blind, disabled, or seriously ill, you have additional year-round protections.",
      "You have the right to file a complaint with the PSC if the utility violates the rules.",
      "You have the right to apply for HEAP to help pay utility bills.",
      "A pending HEAP application can delay a shutoff."
    ]
  },

  legalOptions: {
    en: [
      "If shutoff is threatened, calling the utility to ask for a Deferred Payment Agreement (DPA) is recommended. They must offer one.",
      "HEAP applications can be submitted at mybenefits.ny.gov or at Monroe County DSS, (585) 753-6960. Emergency HEAP can restore service that has already been shut off.",
      "A complaint can be filed with the NY Public Service Commission at askpsc.ny.gov or by calling 1-800-342-3377. The PSC can intervene and order the utility to restore or maintain service.",
      "Customers who are elderly, disabled, or seriously ill can notify the utility in writing. The utility must extend protections.",
      "Free help negotiating with the utility or filing a PSC complaint is available through the Legal Aid Society of Rochester at (585) 232-4090.",
      "RG&E customer service: (800) 743-2110. National Grid: (800) 642-4272."
    ]
  },

  example: {
    en: "In January, Rosa receives a shutoff notice from RG&E for $800 in back electric bills. She calls RG&E and negotiates a Deferred Payment Agreement — $100/month on top of her current bill until the balance is paid. She also applies for Emergency HEAP through DSS. HEAP sends a $400 payment directly to RG&E. Because it is the cold-weather period and Rosa has a child under 6 in the home, RG&E cannot shut off service while she is on the DPA and the HEAP application is pending."
  },

  counsel: [
    {
      type: "free",
      name: "NY Public Service Commission (PSC)",
      focus: "Utility complaints, shutoff disputes, service restoration",
      qualifier: "Any residential utility customer in New York",
      access: "Phone or online",
      outcome: "Investigation, mediation, and enforcement",
      phone: "1-800-342-3377",
      url: "https://www.dps.ny.gov",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Utility shutoff defense, HEAP applications, PSC complaints",
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
    "heap-utility-assistance-ny",
    "tenant-rights-repairs-ny",
    "eviction-process-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "utility shutoff",
    "heat shutoff",
    "electric shutoff",
    "gas shutoff",
    "HEFPA",
    "cold weather protection",
    "winter heat",
    "payment agreement",
    "deferred payment",
    "RGE",
    "National Grid",
    "PSC complaint",
    "no heat",
    "utility bill help"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/PBS/A2",
    "https://www.dps.ny.gov/consumers"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: true,
  disclaimer: true,
  categoryDisclaimer: null
};
