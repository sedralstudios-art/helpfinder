export const OVERTIME = {
  id: "overtime",
  term: { en: "Overtime Pay" },
  aka: ["OT", "Time and a Half"],
  category: "employment",
  subtags: ["wages", "rights"],

  context: {
    en: "Overtime pay is extra wages — usually 1.5 times the regular hourly rate — that most non-exempt workers must receive for hours worked over 40 in a week. New York and federal law set the rules. Some workers are exempt; many who think they are exempt actually are not."
  },

  plainEnglish: {
    en: "Extra pay required by federal and New York law for hours worked over 40 in a workweek by non-exempt employees. The standard rate is 1.5 times the worker's regular hourly rate (time and a half). The federal Fair Labor Standards Act (FLSA) sets the floor. New York Labor Law adds protections, including a higher salary threshold for some exempt categories and stronger remedies for unpaid overtime. Most hourly workers are non-exempt and entitled to overtime. Some salaried workers are exempt under the executive, administrative, professional, computer, and outside sales categories — but the salary level and the actual job duties have to meet specific tests. Misclassification is common; many salaried workers labeled exempt are actually owed overtime. Unpaid overtime can be recovered through a complaint to the NY Department of Labor or a federal lawsuit. Damages can include back wages, liquidated damages equal to back wages, attorney fees, and a 6-year look-back under New York law."
  },

  whatToAsk: {
    en: [
      "Am I non-exempt and entitled to overtime, or properly classified as exempt?",
      "What is my regular hourly rate, including bonuses and shift premiums?",
      "How much unpaid overtime might be owed over the look-back period?",
      "What is the deadline to file a wage claim with the NY Department of Labor?",
      "What damages — back wages, liquidated damages, attorney fees — might I recover?"
    ]
  },

  related: ["minimum-wage", "wage-theft", "independent-contractor", "retaliation-employment"],
  legalEntryIds: [],

  citation: "29 USC § 207 (FLSA); NY Labor Law § 663; 12 NYCRR Part 142",
  sourceUrl: "https://dol.ny.gov/overtime",
  lastVerified: "2026-04-26",
  status: "active"
};
