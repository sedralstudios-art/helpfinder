export const SPEEDING_TICKET_NY = {
  id: "speeding-ticket-ny",
  category: "vehicle",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Speeding Tickets — Points, Fines, and What You Can Do" },

  summary: {
    en: "A New York speeding ticket is more than a fine. It adds points to your license. It tacks on extra fees. It can raise your insurance for years. Too many points can get your license suspended. You have the right to plead not guilty and fight the ticket."
  },

  whoQualifies: {
    en: [
      "Any driver who gets a speeding ticket in New York (VTL § 1180).",
      "This covers New York drivers, out-of-state drivers who got ticketed in New York, and commercial drivers (CDL holders face extra consequences).",
      "Tickets from automated work zone speed cameras also add points and fines (VTL § 1180(f)).",
      "It doesn't matter who wrote the ticket — state police, sheriff, or local police."
    ]
  },

  whatItMeans: {
    en: "New York puts points on your license based on how fast you were going over the limit:\n- 1-10 mph over: 4 points\n- 11-20 mph over: 4 points\n- 21-30 mph over: 6 points\n- 31-40 mph over: 8 points\n- 41+ mph over: 11 points\n\nFines for a first offense run $45 to $600. Higher in school zones and work zones. Every ticket also has a state fee of $88 to $93 added on top.\n\nGet 6 or more points in 18 months? The DMV charges you an extra fee called a Driver Responsibility Assessment. It's $300 a year, plus $75 for each point over 6, for 3 years in a row."
  },

  yourRights: {
    en: [
      "You have the right to plead not guilty and get a hearing or trial in front of a judge.",
      "Outside New York City, traffic cases go to local courts (town, village, or city court). You can plea-bargain. A lawyer can appear for you without you being there.",
      "You have the right to see the evidence against you — the officer's notes and how they measured your speed.",
      "You have the right to take a DMV-approved Defensive Driving Course. It can take up to 4 points off your record and get you a 10% auto insurance discount for 3 years.",
      "If DMV sends a notice that your license will be suspended for too many points, you have the right to a hearing before the suspension starts (VTL § 510).",
      "You have the right to challenge how your speed was measured — radar, laser, pacing, or an officer's visual estimate."
    ]
  },

  legalOptions: {
    en: [
      "In most local courts outside New York City, traffic lawyers can often get speeding tickets reduced to non-moving violations or lower-point offenses. A reduction to a no-point violation can help you skip the Driver Responsibility Assessment, avoid an insurance hike, and keep points off your record.",
      "In New York City, tickets go to the Traffic Violations Bureau (TVB). No plea bargaining is allowed there. You have to either plead guilty or go to a hearing with a judge.",
      "The DMV's Point and Insurance Reduction Program (PIRP) — the Defensive Driving Course — is available online or in person. It takes up to 4 points off your record and gives you a 10% insurance discount for 3 years. More at dmv.ny.gov.",
      "Getting 10 or more points in 24 months can get your license suspended. 11 or more points means mandatory revocation. Three speeding convictions in 18 months also means mandatory revocation. These rules were updated on February 16, 2026 (VTL § 510).",
      "Current fines, points, and fees are at trafficsafety.ny.gov and dmv.ny.gov.",
      "Free or low-cost help for drivers who can't afford a lawyer may be available if the ticket affects your job, housing, or benefits. In Monroe County: Legal Aid Society of Rochester (585-232-4090)."
    ]
  },

  example: {
    en: "Jenna was pulled over for going 78 in a 55 — 23 over the limit. The ticket was written under VTL § 1180(d). If convicted, she'd get 6 points on her license and a Driver Responsibility Assessment fee of $300 a year for 3 years. That's on top of a fine up to $300 plus a $93 state fee. Jenna pleaded not guilty and went to the local town court. The prosecutor agreed to reduce the charge to a no-point parking violation in exchange for a higher fine. Jenna paid $200 total and kept the points off her license."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Civil legal issues arising from traffic matters — license suspension affecting employment, housing, benefits",
      qualifier: "Low income residents of Monroe County and surrounding counties",
      access: "Phone intake at (585) 232-4090",
      outcome: "Advice and referral on traffic-related civil consequences",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "dwi-first-offense-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "speeding ticket",
    "traffic ticket",
    "points on license",
    "how many points",
    "license suspended",
    "too many points",
    "fight a ticket",
    "plead not guilty",
    "traffic court",
    "fine for speeding",
    "driver responsibility assessment",
    "defensive driving course",
    "insurance went up",
    "work zone speeding",
    "school zone ticket"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/VAT/1180",
    "https://dmv.ny.gov/driver-license-points-and-penalties",
    "https://trafficsafety.ny.gov/penalties-speeding",
    "https://dmv.ny.gov/tickets/pay-driver-responsibility-assessment"
  ],

  lastVerified: "2026-04-13",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
