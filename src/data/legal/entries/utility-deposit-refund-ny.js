export const UTILITY_DEPOSIT_REFUND_NY = {
  id: "utility-deposit-refund-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY PBS 37",
  status: "active",

  title: { en: "Utility Deposits — When They Are Required, How Much, and Getting the Money Back" },

  summary: {
    en: "When setting up electric, gas, or water service in New York, the utility company may require a deposit. The deposit is limited to twice the average monthly bill. After one year of on-time payments, the customer has the right to a refund. A utility cannot refuse service because of a prior tenant's unpaid bill at the same address."
  },

  whoQualifies: {
    en: [
      "Any person setting up utility service who was asked to pay a deposit.",
      "Any person who paid a utility deposit and has been paying on time for over a year.",
      "Any person who was denied utility service because of a previous tenant's balance.",
      "Any person who believes a utility deposit was excessive."
    ]
  },

  whatItMeans: {
    en: "Under 16 NYCRR Part 11 (the Home Energy Fair Practices Act regulations) and Public Service Law Section 37, utilities regulated by the NYS Public Service Commission (including RG&E and National Grid) can require a deposit from new customers or customers with poor payment history. The deposit cannot exceed twice the estimated average monthly bill. The utility must pay interest on the deposit at a rate set annually by the PSC. After one year of on-time payments (no more than two late payments), the customer is entitled to a full refund of the deposit with interest. The refund is applied as a credit to the account or returned by check. A utility cannot require a deposit based on the neighborhood, the customer's race, gender, or other protected characteristics. A utility cannot refuse to start service at an address because a previous tenant left an unpaid balance — the new customer is not responsible for someone else's bill. If the customer was never a customer of that utility before, the deposit cannot exceed the estimated average bill for one month. If the utility is not returning a deposit after 12 months of on-time payments, the customer can file a complaint with the NYS Public Service Commission."
  },

  yourRights: {
    en: [
      "A utility deposit cannot exceed twice the average monthly bill.",
      "A customer who pays on time for 12 months has the right to a full refund of the deposit with interest.",
      "A utility must pay interest on deposits at a rate set by the Public Service Commission.",
      "A utility cannot refuse service to a new customer because of a prior tenant's unpaid bill at the same address.",
      "A utility cannot base the deposit requirement on the customer's neighborhood, race, or other protected characteristics.",
      "A customer can file a complaint with the PSC if the utility refuses to refund a deposit after 12 months of on-time payments."
    ]
  },

  legalOptions: {
    en: [
      "NYS Public Service Commission handles utility complaints — call (800) 342-3377.",
      "File a complaint online at askpsc.com or dps.ny.gov.",
      "RG&E customer service at (800) 743-2110 can explain the deposit policy and process refunds.",
      "National Grid customer service at (800) 642-4272.",
      "If the utility refuses to start service or demands an excessive deposit, call the PSC immediately — they can intervene.",
      "Legal Aid Society of Rochester at (585) 232-4090 handles utility rights cases for low-income residents.",
      "PULP (Public Utility Law Project) at (877) 669-2572 is a free legal service for utility issues."
    ]
  },

  example: {
    en: "When Darnell moved into an apartment in Rochester and called RG&E to start service, the company asked for a $400 deposit because he had no prior account history. After 13 months of on-time payments, Darnell called and requested his deposit back. RG&E confirmed he had no late payments and credited the $400 plus interest to his next bill."
  },

  counsel: [
    {
      type: "government",
      name: "NYS Public Service Commission",
      focus: "Utility complaints, deposits, service denial, billing disputes",
      qualifier: "Any NYS utility customer",
      access: "Phone at (800) 342-3377",
      outcome: "Investigation, mediation, enforcement against utilities",
      phone: "(800) 342-3377",
      url: "https://www.dps.ny.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Public Utility Law Project (PULP)",
      focus: "Utility rights, deposit disputes, shutoff prevention, billing errors",
      qualifier: "Low-income utility customers in New York",
      access: "Phone at (877) 669-2572",
      outcome: "Free legal advice and representation for utility issues",
      phone: "(877) 669-2572",
      url: "https://www.pulp.tc",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "utility-shutoff-protections-ny",
    "heap-utility-assistance-ny",
    "power-outage-rights-ny",
    "water-bill-dispute-ny",
    "security-deposit-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "utility deposit",
    "utility deposit refund",
    "RGE deposit",
    "electric deposit",
    "gas deposit",
    "utility deposit too high",
    "utility deposit interest",
    "utility previous tenant",
    "utility service denial",
    "utility complaint"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/PBS/37",
    "https://www.dps.ny.gov/residential-consumers"
  ],

  lastVerified: "2026-04-17",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
