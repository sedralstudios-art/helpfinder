// Glossary term: Final Wages
// Citation verified: NY Labor Law § 191 (frequency of payments — including
// separation pay). Employer must pay final wages no later than the regular
// payday for the period the termination occurred. § 191 also sets pay
// frequency rules: manual workers weekly, clerical at least semi-monthly,
// commission salespersons monthly.

export const FINAL_WAGES = {
  id: "final-wages",
  term: { en: "Final Wages" },
  aka: ["Final Paycheck", "Last Paycheck"],
  category: "employment",
  subtags: ["money", "termination"],

  context: {
    en: "You hear this when a job ends — you quit, you get fired, you get laid off — and you are waiting on the last paycheck. New York law says when the employer has to pay it. Unused vacation may also be owed, depending on the employer's written policy."
  },

  plainEnglish: {
    en: "The last paycheck after a job ends. In New York, an employer has to pay the final wages by the next regular payday for the pay period in which the work was done. That applies whether the worker quit, was fired, or was laid off. Unused vacation time usually has to be paid out if the employer's written policy promises it — but if the policy says vacation is forfeited at separation, that is enforceable in most cases. If the employer misses the deadline, that is wage theft, and the worker can recover the wages plus the same amount as extra damages plus attorney fees."
  },

  whatToAsk: {
    en: [
      "When is my next regular payday?",
      "What is on the final check — regular hours, overtime, unused vacation?",
      "What does the employer's written vacation or PTO policy say?",
      "If the check is short or late, what do I do?",
      "Am I also entitled to unpaid overtime or other back wages?"
    ]
  },

  related: ["wage-theft", "at-will-employment", "unemployment-insurance", "retaliation-employment"],
  legalEntryIds: [],

  citation: "NY Labor Law § 191",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/LAB/191",
  lastVerified: "2026-04-15",
  status: "active"
};
