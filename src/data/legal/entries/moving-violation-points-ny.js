export const MOVING_VIOLATION_POINTS_NY = {
  id: "moving-violation-points-ny",
  category: "vehicle",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY VAT 510",
  status: "active",

  title: { en: "Points on Your License — How the NY DMV Point System Works" },

  summary: {
    en: "New York assigns points to moving violations. If a driver accumulates 11 or more points in 18 months, the DMV suspends the license. Common violations and their points: speeding 1-10 mph over (3 points), speeding 11-20 mph over (4 points), speeding 21-30 mph over (6 points), running a red light (3 points), failure to yield (3 points), passing a stopped school bus (5 points), reckless driving (5 points), and texting while driving (5 points). A defensive driving course can reduce up to 4 points."
  },

  whoQualifies: {
    en: [
      "Any driver licensed in New York who receives a moving violation conviction.",
      "Any driver approaching 11 points who wants to understand the consequences.",
      "Any driver who wants to reduce points through a defensive driving course.",
      "Any driver whose license was suspended for excessive points."
    ]
  },

  whatItMeans: {
    en: "Under VTL § 510(3) and 15 NYCRR § 131, the DMV assigns points for moving violation convictions. Points stay on the driving record for 18 months from the date of the violation (not the conviction date). If 11 or more points accumulate in that 18-month window, the DMV suspends the license. At 6 or more points in 18 months, the DMV imposes a Driver Responsibility Assessment (DRA) — an additional fee of $300 plus $75 for each point over 6, paid annually for 3 years. This is separate from any fine paid to the court. A defensive driving course (also called a Point and Insurance Reduction Program — PIRP) reduces the current point total by up to 4 points and provides a 10% auto insurance discount for 3 years. The course can be taken online or in person. Points from out-of-state convictions do not show on the NY record but the conviction itself is recorded. Points are not assigned for parking tickets, equipment violations, or non-moving violations."
  },

  yourRights: {
    en: [
      "Points are only assigned for moving violation convictions — not for tickets that are dismissed or reduced to non-moving violations.",
      "A defensive driving course reduces up to 4 points and provides a 10% insurance discount for 3 years.",
      "The DRA fee ($300+ per year for 3 years) can be paid in installments.",
      "If the license is suspended for points, the driver has the right to a hearing.",
      "Pleading to a reduced charge (e.g., speeding reduced to a parking violation) avoids points entirely.",
      "Points expire 18 months after the violation date."
    ]
  },

  legalOptions: {
    en: [
      "Contesting a traffic ticket in court — or negotiating a plea to a non-moving violation — is the most effective way to avoid points. Many traffic attorneys handle these cases for a flat fee.",
      "The defensive driving course (PIRP) can be taken online through DMV-approved providers. Check dmv.ny.gov for approved courses.",
      "If the license is suspended for excessive points, the DMV sends a notice. The driver can request a hearing to contest the suspension.",
      "The DRA can be paid online at dmv.ny.gov or by calling (518) 473-5595. Failure to pay results in license suspension.",
      "Free legal help with license suspension issues is available through Legal Aid Society of Rochester at (585) 232-4090."
    ]
  },

  example: {
    en: "A driver in Rochester gets a speeding ticket for 15 mph over the limit (4 points) and then 6 months later runs a red light (3 points). He now has 7 points in 18 months. The DMV sends a Driver Responsibility Assessment — $300 plus $75 for the 1 point over 6, totaling $375/year for 3 years. He takes a defensive driving course online, which reduces his point total by 4 (from 7 to 3) and gives him a 10% insurance discount. The DRA is based on the point total at the time of assessment — if the course is completed before the DRA is issued, it may reduce the fee."
  },

  counsel: [
    {
      type: "free",
      name: "NY DMV — Point System Information",
      focus: "Points, DRA, license suspension, defensive driving",
      qualifier: "Any licensed driver in New York",
      access: "Online or phone",
      outcome: "Point totals, DRA payments, hearing requests",
      phone: "(518) 473-5595",
      url: "https://dmv.ny.gov/tickets/about-nys-driver-point-system",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "traffic-ticket-options-ny",
    "speeding-ticket-ny",
    "license-suspension-ny",
    "dwi-first-offense-ny",
    "school-bus-safety-laws-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "points license",
    "DMV points",
    "11 points",
    "point system",
    "defensive driving",
    "PIRP",
    "DRA",
    "driver responsibility assessment",
    "speeding points",
    "red light points",
    "texting driving points",
    "reduce points"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/VAT/510",
    "https://dmv.ny.gov/tickets/about-nys-driver-point-system"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
