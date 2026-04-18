// LGLW6-D_plumbing-residential-ny-mon-rochester-city_01.js
// City of Rochester plumbing entry. Examining Board of Plumbers handles licensing.
// Homeowner self-work allowed in owner-occupied single-family homes (unusual for a NY city).
// Online permit portal (CIVICS) at infor.cityofrochester.gov.
// Source: cityofrochester.gov + eCode360 Ch 40 Plumbing Licensing Ordinance.

export const entry = {
  id: "plumbing-residential-ny-mon-rochester-city",
  category: "trades",
  tier: "city",
  jurisdiction: "us-ny-monroe-rochester-city",
  authorityType: "local-ordinance",
  status: "active",

  title: {
    en: "Plumbing in the City of Rochester: what the city requires"
  },

  summary: {
    en: "Rochester has its own Examining Board of Plumbers. Plumbers must get a city license before they can pull permits. Unlike NYC and Buffalo, Rochester lets a homeowner do their own plumbing in their own single-family home — as long as they pull a permit. Plumbing permits are separate from building permits and must be filed through the city's online portal."
  },

  whatItMeans: {
    en: "Anyone doing plumbing work as a business in Rochester has to pass the city's Examining Board of Plumbers. There are three license types: master plumber, employed/employing plumber, and plumbing inspector. The license fee is $120. The Board office is at City Hall Room 121B, phone (585) 428-9339. Rochester's plumbing rules are in Chapter 40 of the City Code.\n\nPlumbing permits are separate from building permits. You have to file them online through the city's CIVICS portal at infor.cityofrochester.gov. A licensed city plumber can pull the permit, OR the owner of a single-family home (working on their own home) can pull it. This is unusual — most big NY cities like New York City and Buffalo don't let homeowners pull their own plumbing permits.\n\nCity plumbing inspectors do the inspections. This is different from electrical work, where Rochester uses outside agencies."
  },

  example: {
    en: "A homeowner in the South Wedge wants to add a second bathroom. She files a plumbing permit through the CIVICS portal. Because she owns and lives in the house, she can pull the permit herself and do the work. A city plumbing inspector comes to check the rough-in before the walls close up, and comes back to check the finished work after the fixtures are installed."
  },

  whoQualifies: {
    en: [
      "Property owners and contractors doing plumbing work inside the City of Rochester",
      "Plumbers licensed by the Rochester Examining Board of Plumbers",
      "Homeowners working on their own single-family home"
    ]
  },

  yourRights: {
    en: [
      "The right to pull a plumbing permit as a homeowner on your own single-family home — unusual in NY cities",
      "The right to know the permit fee at application time through the CIVICS portal",
      "The right to inspection by a city plumbing inspector, not a third-party agency",
      "State worker protections (wage, safety, injury) still apply here"
    ]
  },

  legalOptions: {
    en: [
      "The Examining Board of Plumbers issues city plumber licenses. Office at City Hall Room 121B, phone (585) 428-9339.",
      "The Building Permit Office processes plumbing permits through the CIVICS online portal at infor.cityofrochester.gov.",
      "The Bureau of Buildings and Compliance enforces plumbing code violations.",
      "Unlicensed plumbing work is a city code violation and can lead to fines and stop-work orders."
    ]
  },

  counsel: [
    {
      type: "free",
      name: "City of Rochester Examining Board of Plumbers",
      focus: "Plumber licensing, master plumber certificates, registration",
      qualifier: "Plumbers operating inside the City of Rochester",
      access: "City Hall Room 121B; phone; email",
      outcome: "License issuance, certificate of competency",
      phone: "585-428-9339",
      url: "https://www.cityofrochester.gov/departments/neighborhood-and-business-development/examining-board-plumbers",
      verified: true,
      bilingual: false,
      languages: ["en"]
    },
    {
      type: "free",
      name: "City of Rochester Building Permit Office",
      focus: "Plumbing permits, inspections, code compliance",
      qualifier: "Open to residents, property owners, and licensed plumbers inside the City",
      access: "Online through CIVICS portal; phone; walk-ins Mon/Wed/Fri",
      outcome: "Permit issuance, inspection scheduling, code guidance",
      phone: "585-428-6526",
      url: "https://www.cityofrochester.gov/departments/neighborhood-and-business-development/building-permits",
      verified: true,
      bilingual: false,
      languages: ["en"]
    }
  ],

  relatedIds: ["plumbing-residential-ny"],
  relatedHelpResources: [],

  tags: [
    "trades", "plumbing", "rochester", "monroe county",
    "plumber license", "examining board", "CIVICS portal",
    "homeowner plumbing", "water heater", "city ordinance"
  ],

  sources: [
    "https://www.cityofrochester.gov/departments/neighborhood-and-business-development/examining-board-plumbers",
    "https://www.cityofrochester.gov/departments/neighborhood-and-business-development/building-permit-types-and-applications",
    "https://ecode360.com/8674546"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
