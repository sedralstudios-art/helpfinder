// Glossary term: Driver Responsibility Assessment (DRA)
// Citation: Administered under NY VTL § 503(4). Triggered by (1) an
// alcohol/drug driving conviction OR a chemical-test refusal, OR (2)
// 6+ points in 18 months. DRA for alcohol/drug conviction or refusal
// = $250/year for 3 years ($750 total). Point-based DRA = $100 for
// first 6 points + $25 per point beyond 6, over 3 years. Non-payment
// triggers license suspension.

export const DRIVER_RESPONSIBILITY_ASSESSMENT = {
  id: "driver-responsibility-assessment",
  term: { en: "Driver Responsibility Assessment" },
  aka: ["DRA", "Driver Responsibility Fee"],
  category: "vehicle",
  subtags: ["money", "dmv"],

  context: {
    en: "You hear this after a DWI or after getting a lot of tickets. It is an extra fee the DMV charges on top of any court fines and surcharges. It is separate from anything the court ordered and has its own payment schedule."
  },

  plainEnglish: {
    en: "A DMV fee paid over 3 years, separate from any court fines or surcharges. It kicks in two ways. One: a conviction for an alcohol- or drug-related driving offense, or refusing a chemical (breath or blood) test. That costs $250 per year for 3 years — $750 total. Two: 6 or more points on the license from traffic tickets in any 18-month period. That costs $100 in year one plus $25 for each point beyond 6, then divided over 3 years. Missing a DRA payment gets the license suspended until it is paid. The DRA is paid directly to the DMV, not to the court. Hardship reductions or payment plans are sometimes available."
  },

  whatToAsk: {
    en: [
      "Why is the DRA being charged — conviction, refusal, or points?",
      "How much is the total, and what is the annual amount?",
      "When does each year's payment come due?",
      "Is a payment plan or hardship reduction available?",
      "What happens if I cannot pay on time?"
    ]
  },

  related: ["dwi-dwai", "license-suspension", "traffic-infraction", "tvb-traffic-court"],
  legalEntryIds: ["dwi-first-offense-ny"],

  citation: "NY VTL § 503(4)",
  sourceUrl: "https://dmv.ny.gov/points-and-penalties/driver-responsibility-assessment-dra",
  lastVerified: "2026-04-15",
  status: "active"
};
