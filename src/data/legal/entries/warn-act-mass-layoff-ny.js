export const WARN_ACT_MASS_LAYOFF_NY = {
  id: "warn-act-mass-layoff-ny",
  category: "employment",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-statute",
  primaryStatute: "29 USC 2101",
  status: "active",

  title: { en: "Mass Layoff or Plant Closing — WARN Act Notice Rights" },

  summary: {
    en: "Federal and New York law require large employers to give workers written notice before a mass layoff or plant closing. The federal WARN Act requires 60 days. New York's stricter state WARN Act requires 90 days and covers smaller employers. A worker who received no notice or inadequate notice may be entitled to pay and benefits for the missing notice period."
  },

  whoQualifies: {
    en: [
      "Any worker at a New York employer with 50 or more full-time employees whose job was eliminated in a mass layoff or plant closing.",
      "Any worker whose site of employment is closing.",
      "Any worker whose hours were reduced by more than 50 percent as part of a mass staffing decision.",
      "Any worker whose union representative was not given proper WARN notice."
    ]
  },

  whatItMeans: {
    en: "The federal Worker Adjustment and Retraining Notification Act (WARN Act, 29 USC Sections 2101-2109) requires employers with 100 or more employees to give 60 days written notice before a plant closing or mass layoff. A plant closing is a shutdown that results in an employment loss for 50 or more workers at a single site. A mass layoff is a reduction in force affecting 500 workers, or 50 to 499 workers if they represent at least 33 percent of the employer's workforce. The New York State WARN Act (NY Labor Law Section 860 and following) is stricter: it covers private employers with 50 or more full-time employees, requires 90 days notice, and triggers on a closing affecting 25 workers or a layoff affecting 25 workers (if 33 percent of the site) or 250 workers regardless of percentage. Notice must go to each affected worker, the union (if any), the state Department of Labor, and the local workforce investment board. Exceptions exist for unforeseeable business circumstances, faltering-company efforts to get financing, and natural disasters — but the employer must prove the exception applies and must still give as much notice as practicable. When an employer violates WARN, each affected worker is entitled to back pay and benefits for each day of missed notice, up to the full 60 (federal) or 90 (state) days. Remedies can total thousands of dollars per worker."
  },

  yourRights: {
    en: [
      "A worker at a qualifying employer has the right to 60 days (federal) or 90 days (NY) written notice before a mass layoff or plant closing.",
      "A worker who received no notice or inadequate notice has the right to back pay and benefits for each day of missed notice.",
      "Notice must identify the expected date of separation, whether the action is permanent or temporary, and how the worker may contact the employer.",
      "A union worker has the right to WARN notice through their union representative.",
      "A worker cannot be required to sign away WARN rights as a condition of a severance agreement without specific consideration.",
      "A worker can pursue WARN claims individually or as part of a class action."
    ]
  },

  legalOptions: {
    en: [
      "NYS Department of Labor — Rapid Response Unit handles WARN cases and can confirm whether the employer filed required notices at (518) 457-9000.",
      "Federal WARN complaints go to the U.S. Department of Labor Employment and Training Administration.",
      "For individual or class claims, an employment attorney can evaluate damages — Monroe County Bar Association referral at (585) 546-2130.",
      "Legal Aid Society of Rochester at (585) 232-4090 handles employment cases.",
      "Worker Justice Center of New York at (585) 325-3050 represents low-wage workers in class WARN claims.",
      "Unemployment applications are filed at labor.ny.gov — WARN back pay does not offset unemployment benefits, so both can be pursued."
    ]
  },

  example: {
    en: "A Rochester-area manufacturer closed a plant without notice, terminating 180 workers the same day. Under federal WARN, workers were entitled to 60 days of pay and benefits; under NY WARN, they were entitled to 90 days. The employer claimed the closing was caused by unforeseen loss of a major contract. Workers filed a class action. The court rejected the defense — the employer had known about the contract risk for months. Each worker received about 90 days of back wages plus continued health benefits for that period."
  },

  counsel: [
    {
      type: "government",
      name: "NYS Department of Labor — Rapid Response Unit",
      focus: "WARN Act compliance, mass layoff transition services, filed notices",
      qualifier: "Any affected NY worker",
      access: "Phone at (518) 457-9000",
      outcome: "Verification of filed notices, transition assistance",
      phone: "(518) 457-9000",
      url: "https://dol.ny.gov/worker-adjustment-and-retraining-notification-warn",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "unemployment-gig-workers-ny",
    "wrongful-termination-ny",
    "severance-agreements-ny",
    "fired-for-cause-unemployment-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "WARN Act",
    "mass layoff notice",
    "plant closing notice",
    "NY WARN Act",
    "60 day layoff notice",
    "90 day layoff notice",
    "laid off without notice",
    "Labor Law 860",
    "WARN back pay",
    "mass layoff rights"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/29/2101",
    "https://www.law.cornell.edu/uscode/text/29/2104",
    "https://www.nysenate.gov/legislation/laws/LAB/A25-A",
    "https://dol.ny.gov/worker-adjustment-and-retraining-notification-warn"
  ],

  lastVerified: "2026-04-18",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
