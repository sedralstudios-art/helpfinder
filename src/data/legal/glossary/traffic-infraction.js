// Glossary term: Traffic Infraction
// Citation verified: NY VTL § 155 (not a crime, does not impair witness
// credibility) and § 1800 (penalties — up to $150 fine and 15 days jail
// first offense; up to $300 and 45 days on second violation within 18
// months). Carries DMV points; 11+ points in 18 months triggers
// administrative suspension.

export const TRAFFIC_INFRACTION = {
  id: "traffic-infraction",
  term: { en: "Traffic Infraction" },
  aka: ["Traffic Violation", "Moving Violation"],
  category: "vehicle",
  subtags: ["charge"],

  context: {
    en: "You hear this after a traffic ticket. Most tickets — speeding, running a red light, improper lane change — are traffic infractions. They are not crimes, even though they can cost money and points, and in rare cases a few days in jail."
  },

  plainEnglish: {
    en: "A ticket for breaking a traffic rule — speeding, running a stop sign, not signaling, and so on. Traffic infractions are not crimes in New York. They do not create a criminal record and do not affect whether a person can testify in court. But they come with real costs: fines up to $150 for a first offense (up to $300 for a second within 18 months), DMV points, possible surcharges, and higher car insurance. If a driver gets 11 or more points in 18 months, the DMV can suspend the license. Some tickets are misdemeanors, not infractions — for example, some reckless driving or driving-while-suspended charges. Your ticket says which one."
  },

  whatToAsk: {
    en: [
      "Is my ticket an infraction or a misdemeanor?",
      "How many points does a conviction carry?",
      "What are my options — plead guilty by mail, plead not guilty, or negotiate?",
      "Could a plea bargain reduce the points?",
      "Will this affect my insurance rates?"
    ]
  },

  related: ["dwi-dwai", "license-suspension", "tvb-traffic-court", "driver-responsibility-assessment", "misdemeanor"],
  legalEntryIds: ["speeding-ticket-ny"],

  citation: "NY VTL § 155; § 1800",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/VAT/1800",
  lastVerified: "2026-04-15",
  status: "active"
};
