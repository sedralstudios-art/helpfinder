// LGLW6-D_plumbing-residential-ny-mon-wheatland-town_01.js
// Town of Wheatland plumbing entry. STRICT language: permit required for new
// plumbing OR alteration of existing. 4x penalty for no permit.
// Covers area outside Scottsville village.
// Source: townofwheatland.org + eCode360 WH0137.

export const entry = {
  id: "plumbing-residential-ny-mon-wheatland-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-wheatland-town",
  authorityType: "local-ordinance",
  status: "active",

  title: {
    en: "Plumbing in the Town of Wheatland: what the town requires"
  },

  summary: {
    en: "Wheatland has some of the strictest plumbing permit language in Monroe County. A permit is required for any new plumbing OR any alteration of existing plumbing. Starting work without a permit costs 4 times the permit fee plus a $100 stop-work order. Scottsville village is inside Wheatland but has its own code office."
  },

  whatItMeans: {
    en: "Wheatland town code says directly: \"In all cases where there is to be installation of new plumbing or alteration of existing plumbing, a plumbing permit must be obtained.\" That's strict — it covers alterations, not just new installs. Water heater replacement, moving fixtures, and almost any other plumbing change triggers the permit.\n\nThe town's enforcement penalties are sharp. Work done without a required permit gets charged 4 times the normal permit cost. A separate $100 stop-work order also applies.\n\nFees are set by Town Board resolution. Exact amounts aren't on the public website — call (585) 889-1553 to confirm.\n\nWheatland doesn't have its own plumber license chapter (unlike Scottsville village, which does register plumbers). Plumbers need liability insurance and workers comp. Whether Wheatland honors a Rochester Examining Board plumber certificate is not published.\n\nThe town Building Department and Fire Marshal do plan review and inspections in-house.\n\nIMPORTANT: Scottsville village is inside Wheatland but has its own Code Enforcement office for village-limit addresses."
  },

  example: {
    en: "A Wheatland homeowner decides to move the washing machine to a different room. Under Wheatland's strict language, moving existing plumbing counts as \"alteration of existing plumbing\" — a permit is required. If they started work without one, the fee would be 4x plus $100. They call the Building Department first and file the permit, saving themselves hundreds of dollars."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing plumbing work inside Wheatland (outside Scottsville village)",
      "Plumbers with liability insurance and workers comp",
      "Homeowners — call the Building Department to confirm homeowner plumbing rules"
    ]
  },

  yourRights: {
    en: [
      "The right to avoid the 4x penalty by pulling the permit first",
      "The right to clear guidance from the Building Department",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Wheatland Town Building Department and Fire Marshal handle plumbing permits, inspections, and code compliance",
      "The town code explicitly requires permits for new OR altered plumbing — broader than many neighboring towns",
      "Starting work without a permit costs 4x the permit fee plus a $100 stop-work penalty"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Wheatland Building Department & Fire Marshal",
      focus: "Plumbing permits, inspections, code compliance, fire safety",
      qualifier: "Open to residents and contractors working in Wheatland (outside Scottsville village)",
      access: "22 Main St, Scottsville; phone",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-889-1553",
      url: "https://www.townofwheatland.org/building-department",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["plumbing-residential-ny", "plumbing-residential-ny-mon-scottsville-village"],
  relatedHelpResources: [],

  tags: [
    "trades", "plumbing", "wheatland", "monroe county",
    "building permit", "strict permit", "4x penalty",
    "water heater", "town ordinance", "scottsville"
  ],

  sources: [
    "https://www.townofwheatland.org/building-department",
    "https://ecode360.com/10499430",
    "https://ecode360.com/10502092"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
