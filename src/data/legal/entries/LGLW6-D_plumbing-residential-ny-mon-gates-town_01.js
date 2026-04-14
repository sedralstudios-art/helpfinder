// LGLW6-D_plumbing-residential-ny-mon-gates-town_01.js
// Town of Gates plumbing entry. Chapter 143 "Plumbing Licenses" requires town
// registration. Backflow devices must be installed by Gates-registered plumber.
// Source: townofgatesny.gov + eCode360 Ch 143 (GA0050).

export const entry = {
  id: "plumbing-residential-ny-mon-gates-town",
  category: "trades",
  tier: "town",
  jurisdiction: "us-ny-monroe-gates-town",
  status: "active",

  title: {
    en: "Plumbing in the Town of Gates: what the town requires"
  },

  summary: {
    en: "Gates has its own plumber licensing — Chapter 143 of the town code says no one can work as a plumber in Gates without a town license. A plumbing permit is needed for any new plumbing or change to existing plumbing. Backflow devices must be installed by a Gates-registered plumber."
  },

  whatItMeans: {
    en: "Gates licenses its own plumbers through the town code (Chapter 143). Any plumber doing work as a business in Gates has to register with the town and pay an annual fee.\n\nA plumbing permit is needed for any new plumbing installation or any change to existing plumbing. The code specifically calls out backflow prevention device installations — those must be done by a Gates-registered plumber.\n\nWhether Gates honors a Rochester Examining Board certificate toward its license, the exact fee schedule, and whether homeowners can do their own plumbing in their home are not fully spelled out on the public page. Call the Building Department at (585) 429-8241 to confirm.\n\nTerry Rech is the Building Inspector. Office hours M-F 9am-4pm."
  },

  example: {
    en: "A plumber doing commercial and residential work in Gates first has to register with the town Building Department under Chapter 143. After paying the annual license fee and showing insurance, the plumber can pull permits. For a residential job — say, installing a new dishwasher line — the plumber files a plumbing permit, does the work, and the town inspector signs off."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing plumbing work inside the Town of Gates",
      "Plumbers registered with Gates under Chapter 143",
      "Homeowners — call the Building Department to confirm homeowner plumbing rules"
    ]
  },

  yourRights: {
    en: [
      "The right to see Chapter 143 on eCode360",
      "The right to clear guidance from the Building Inspector",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Gates Building Department registers plumbers, issues plumbing permits, and inspects work",
      "Backflow prevention device installs must be done by a Gates-registered plumber",
      "Unregistered plumbers can be denied permits and face enforcement"
    ]
  },

  counsel: [
    {
      type: "free",
      name: "Town of Gates Building Department",
      focus: "Plumber registration (Ch 143), plumbing permits, inspections, code compliance",
      qualifier: "Open to residents, property owners, and plumbers working inside the Town",
      access: "1605 Buffalo Road; phone; email trech@townofgates.org",
      outcome: "Registration, permit issuance, inspection scheduling",
      phone: "585-429-8241",
      url: "https://www.townofgatesny.gov/building-department-and-public-works/",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["plumbing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "plumbing", "gates", "monroe county",
    "plumber registration", "chapter 143", "backflow",
    "water heater", "town ordinance"
  ],

  sources: [
    "https://www.townofgatesny.gov/building-department-and-public-works/",
    "https://ecode360.com/GA0050",
    "https://ecode360.com/12241717"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
