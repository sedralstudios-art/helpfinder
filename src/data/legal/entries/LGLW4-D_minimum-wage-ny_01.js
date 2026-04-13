export const MINIMUM_WAGE_NY = {
  id: "minimum-wage-ny",
  category: "employment",
  tier: "state",
  jurisdiction: "us-ny",
  status: "active",

  title: { en: "Minimum Wage — What New York Law Requires Your Employer to Pay" },

  summary: {
    en: "New York law sets a minimum hourly wage that every employer must pay. The rate depends on where you work. As of January 1, 2026, the minimum wage is $16.00 per hour for most of upstate New York and $17.00 per hour in New York City and the downstate suburbs. Starting in 2027, the rate will adjust annually based on inflation."
  },

  whoQualifies: {
    en: [
      "Nearly every worker in New York State is covered, including full-time, part-time, and temporary employees.",
      "Tipped workers are covered but may be paid a lower cash wage if the employer meets tip credit requirements. The cash wage for tipped food service workers in upstate New York is $10.70 per hour as of 2026, with a $5.30 tip credit that must bring total pay to at least the full minimum wage.",
      "Certain narrow exemptions exist for workers at religious, educational, or charitable organizations with disabilities participating in approved rehabilitation programs.",
      "Independent contractors are not covered by minimum wage law. However, many workers classified as independent contractors are actually employees under New York law and may be entitled to minimum wage."
    ]
  },

  whatItMeans: {
    en: "Under NY Labor Law § 652, your employer must pay you at least the minimum wage for every hour you work. For 2026, the rate is $16.00 per hour for counties outside NYC, Nassau, Suffolk, and Westchester — this includes Rochester and all of upstate New York. The downstate rate is $17.00 per hour. Starting January 1, 2027, the minimum wage will be adjusted annually based on the regional consumer price index. The current rates are always posted at dol.ny.gov."
  },

  yourRights: {
    en: [
      "You have the right to be paid at least the minimum wage for every hour worked, including time spent in required training, meetings, and travel between work sites (Labor Law § 652).",
      "You have the right to receive a written wage notice at the time of hire stating your pay rate, pay schedule, and employer information. This is required by the Wage Theft Prevention Act (Labor Law § 195).",
      "You have the right to receive pay stubs with every payment showing hours worked, rate of pay, deductions, and other required information (Labor Law § 195).",
      "You have the right to file a complaint with the New York State Department of Labor if you are being paid less than the minimum wage, without fear of retaliation.",
      "Under Labor Law § 663, an employee who is paid less than the minimum wage can sue to recover the unpaid wages plus liquidated damages of up to 100% of the underpayment. Courts decide what applies in each case.",
      "Your employer cannot retaliate against you for making a wage complaint. Retaliation is a separate violation of New York Labor Law."
    ]
  },

  legalOptions: {
    en: [
      "The New York State Department of Labor accepts minimum wage complaints by phone at 1-888-469-7365 and through its website at dol.ny.gov. The DOL can investigate and collect underpayments without the worker needing to go to court.",
      "Under Labor Law § 663, workers may bring a civil action in court to recover unpaid minimum wages. Courts may award the full underpayment plus liquidated damages of up to 100% of the amount owed, plus attorney's fees and costs.",
      "Under Labor Law § 662, an employer who violates the minimum wage law is subject to criminal prosecution. The Commissioner of Labor may also impose civil penalties of up to 200% of the unpaid wages.",
      "Free legal help for wage and employment issues in Monroe County is available through the Legal Aid Society of Rochester at (585) 232-4090 and Legal Assistance of Western New York (LawNY) at (585) 325-2520.",
      "Current minimum wage rates, tip credit amounts, and wage order summaries are published by the Department of Labor at dol.ny.gov/minimum-wage and are updated each year."
    ]
  },

  example: {
    en: "Andre works at a restaurant in Monroe County. His employer pays him $9.00 per hour and tells him tips make up the difference. Andre learns that the minimum cash wage for tipped food service workers in upstate New York is $10.70 per hour as of 2026 — higher than what he is receiving. He contacts the Department of Labor at 1-888-469-7365. An investigator reviews his pay records and confirms the underpayment. The DOL orders his employer to pay Andre the wages owed plus liquidated damages."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Employment law, wage disputes, worker rights",
      qualifier: "Low income residents of Monroe County and surrounding counties",
      access: "Phone intake at (585) 232-4090",
      outcome: "Direct representation and advice on employment cases",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Assistance of Western New York (LawNY)",
      focus: "Employment, wage theft, public benefits, housing",
      qualifier: "Low income residents in 14 Western NY counties including Monroe",
      access: "Phone intake at (585) 325-2520",
      outcome: "Direct representation in employment matters",
      phone: "(585) 325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Empire Justice Center",
      focus: "Employment rights, systemic advocacy, impact litigation",
      qualifier: "Low and moderate income residents statewide (all NYS counties except NYC)",
      access: "Phone intake at (585) 454-4060",
      outcome: "Direct representation, impact litigation, and policy advocacy",
      phone: "(585) 454-4060",
      url: "https://www.empirejustice.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "wage-theft-ny",
    "wrongful-termination-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "minimum wage",
    "not getting paid enough",
    "pay too low",
    "employer underpaying",
    "hourly wage",
    "tipped worker",
    "tip credit",
    "restaurant pay",
    "wage complaint",
    "how much should I get paid",
    "pay rate",
    "below minimum wage"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/LAB/652",
    "https://dol.ny.gov/minimum-wage",
    "https://dol.ny.gov/minimum-wage-tipped-workers",
    "https://www.ny.gov/new-york-states-minimum-wage/new-york-states-minimum-wage",
    "https://www.nysenate.gov/legislation/laws/LAB/663",
    "https://www.nysenate.gov/legislation/laws/LAB/195"
  ],

  lastAudited: "2026-04-04",
  lastVerifiedBy: "Claude + Tony",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
