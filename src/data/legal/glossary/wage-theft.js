// Glossary term: Wage Theft
// Citation verified: NY Labor Law § 193 (deductions), § 198 (remedies).
// 2021 No Wage Theft Loophole Act closed the carve-out — any unauthorized
// failure to pay wages now gives rise to a § 193 claim. 6-year look-back
// period. Wage theft is also larceny under Penal Law § 155.

export const WAGE_THEFT = {
  id: "wage-theft",
  term: { en: "Wage Theft" },
  aka: ["Unpaid Wages"],
  category: "employment",
  subtags: ["money", "rights"],

  context: {
    en: "You hear this when a worker was not paid what they earned — the whole paycheck missing, overtime skipped, tips taken, bad deductions. New York treats this seriously. Employees can recover back wages plus extra damages, and employers can even face criminal charges."
  },

  plainEnglish: {
    en: "When an employer does not pay workers what they are legally owed. It includes unpaid wages, unpaid overtime, tip stealing, off-the-clock work, illegal deductions, and not paying the final paycheck on time. New York workers can sue for the full amount owed going back 6 years, plus the same amount again as 'liquidated damages,' plus attorney fees. The New York Department of Labor also has a free complaint process. Under a 2021 law (the No Wage Theft Loophole Act), there is no excuse for any unauthorized failure to pay wages. In serious cases, wage theft is a crime under the Penal Law and can be prosecuted."
  },

  whatToAsk: {
    en: [
      "What hours and wages am I actually owed?",
      "Do I file with the NY DOL, or sue directly in court?",
      "How far back can I go — 6 years?",
      "Can I get double my back wages plus attorney fees?",
      "If my employer retaliates for complaining, what protections do I have?"
    ]
  },

  related: ["retaliation-employment", "at-will-employment", "final-wages", "human-rights-law", "unemployment-insurance"],
  legalEntryIds: ["wage-theft-ny", "minimum-wage-ny"],

  citation: "NY Labor Law § 193, § 198; Penal Law § 155",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/LAB/198",
  lastVerified: "2026-04-15",
  status: "active"
};
