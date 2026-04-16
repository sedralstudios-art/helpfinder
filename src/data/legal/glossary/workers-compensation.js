// Glossary term: Workers' Compensation
// Citation verified: NY Workers' Compensation Law (WCL) § 10+ (liability);
// § 15 (schedule of compensation). No-fault system. Most NY employees
// are covered. Claim filed with NY Workers' Compensation Board.
// Statute of limitations: 2 years from injury or last benefit payment
// (WCL § 28). Retaliation for filing is unlawful (WCL § 120).

export const WORKERS_COMPENSATION = {
  id: "workers-compensation",
  term: { en: "Workers' Compensation" },
  aka: ["Workers' Comp", "WC"],
  category: "employment",
  subtags: ["injury", "benefits", "rights"],

  context: {
    en: "You hear this when someone gets hurt on the job or gets sick from work. Workers' comp is a no-fault system — it pays medical bills and part of lost wages without the worker having to prove the employer was careless. Almost every employer in New York has to carry it."
  },

  plainEnglish: {
    en: "A no-fault insurance system that pays for medical care and part of lost wages when someone is hurt on the job or gets a work-related illness. It does not matter who was at fault — the worker does not have to show the employer did anything wrong. In exchange, the worker usually cannot sue the employer directly for the injury. The claim is filed with the New York Workers' Compensation Board. A worker has 2 years from the injury (or from the last benefit payment) to file. Benefits pay two-thirds of average weekly wages, up to a state cap, plus all related medical care. Firing a worker for filing a claim is illegal retaliation."
  },

  whatToAsk: {
    en: [
      "Did I report the injury to my employer in writing, and when?",
      "Did I file the claim with the Workers' Compensation Board within 2 years?",
      "Can I see my own doctor, or do I have to use the employer's?",
      "How much will I get each week?",
      "If my employer fires me for filing, what are my options?"
    ]
  },

  related: ["wage-theft", "at-will-employment", "retaliation-employment", "unemployment-insurance"],
  legalEntryIds: ["workers-compensation-ny"],

  citation: "NY Workers' Compensation Law § 10+, § 15, § 28, § 120",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/WKC",
  lastVerified: "2026-04-15",
  status: "active"
};
