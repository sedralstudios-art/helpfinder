export const COBRA_HEALTH_INSURANCE_NY = {
  id: "cobra-health-insurance-ny",
  category: "employment",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-statute",
  status: "active",

  title: { en: "COBRA Health Insurance — Keeping Coverage After a Job Loss" },

  summary: {
    en: "When a job ends, COBRA allows a worker and their family to keep the employer's health plan for up to 18 months (sometimes 36). The worker pays the full premium plus a 2 percent administrative fee. For many families the marketplace (NY State of Health) is cheaper. Understanding both options before picking one prevents expensive mistakes."
  },

  whoQualifies: {
    en: [
      "Any worker who lost a job (except firing for gross misconduct) at an employer with 20 or more employees.",
      "Any spouse or dependent child who was on the employer's plan and lost coverage due to job loss, divorce, death of the worker, or aging out.",
      "Any worker at a small employer (under 20 employees) who lost coverage — New York's mini-COBRA (Insurance Law Section 3221(m)) extends similar rights.",
      "Any worker whose hours were cut below the plan's eligibility threshold."
    ]
  },

  whatItMeans: {
    en: "The federal Consolidated Omnibus Budget Reconciliation Act (COBRA, 29 USC Sections 1161-1168) lets a person keep the employer's group health plan after a qualifying event. The worker pays the premium that the employer previously paid plus the worker's share, plus up to a 2 percent administrative fee — often several hundred to over a thousand dollars per month for family coverage. The maximum period is 18 months for job loss or reduced hours, 36 months for divorce, death of the worker, or a dependent child aging out. The employer must send a COBRA election notice within 14 days of the qualifying event. The worker has 60 days to decide whether to elect COBRA. An election can be retroactive — if elected within the 60-day window, coverage picks up without a gap. Payments are due monthly. Missing a payment by more than 30 days ends the coverage. For most people, NY State of Health marketplace plans are cheaper than COBRA — with income-based subsidies available. The Essential Plan costs $0-$20/month for people who qualify. A job loss is a qualifying event for special enrollment on the marketplace, and the 60-day COBRA window does not prevent using the marketplace. Choosing the marketplace means giving up any employer subsidy, but the family saves if their income is modest. Small-employer workers in New York (under 20 employees) have similar rights under state mini-COBRA — same 18-to-36-month rules but administered through the insurance carrier rather than the employer."
  },

  yourRights: {
    en: [
      "A worker who loses a job at an employer with 20+ employees has the right to elect COBRA within 60 days of the qualifying event.",
      "A spouse or dependent who loses coverage due to divorce, death, or aging out has the same COBRA election right.",
      "The employer must send a COBRA election notice within 14 days of a qualifying event.",
      "A worker at a small employer in New York has the right to mini-COBRA under Insurance Law Section 3221(m).",
      "A worker who elects COBRA can still later switch to a marketplace plan during open enrollment or another qualifying event.",
      "Losing a job is a qualifying event for special enrollment on NY State of Health — the 60-day window runs from the date coverage ended."
    ]
  },

  legalOptions: {
    en: [
      "Compare COBRA cost against a marketplace plan at nystateofhealth.ny.gov before the 60-day COBRA deadline.",
      "For most low- and middle-income families, the Essential Plan or a subsidized Qualified Health Plan is cheaper than COBRA.",
      "If the employer did not send a COBRA notice, file a complaint with the U.S. Department of Labor Employee Benefits Security Administration (EBSA) at (866) 444-3272.",
      "For mini-COBRA (small employers), contact the insurance carrier directly — the employer's role is limited.",
      "NY State of Health customer service at (855) 355-5777 for marketplace enrollment help.",
      "Free legal help with health insurance issues is available through Community Health Advocates at (888) 614-5400."
    ]
  },

  example: {
    en: "After being laid off from her job in Henrietta, Keisha received a COBRA notice saying she could keep her family's health plan for $1,650 a month. She had 60 days to decide. She went to nystateofhealth.ny.gov and entered her expected income. The system showed she qualified for a Silver-tier plan with subsidies at $240 a month — with the same pediatrician in-network for her children. She skipped COBRA and enrolled in the marketplace plan. She saved over $1,400 a month."
  },

  counsel: [
    {
      type: "free",
      name: "NY State of Health — Customer Service",
      focus: "Marketplace enrollment, subsidy determination, Essential Plan",
      qualifier: "Any NYS resident",
      access: "Phone at (855) 355-5777 or online",
      outcome: "Health insurance enrollment with subsidies applied",
      phone: "(855) 355-5777",
      url: "https://nystateofhealth.ny.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Community Health Advocates",
      focus: "Free help with health insurance, COBRA, marketplace enrollment",
      qualifier: "Any NYS resident",
      access: "Phone at (888) 614-5400",
      outcome: "Counseling, enrollment assistance, complaint navigation",
      phone: "(888) 614-5400",
      url: "https://www.communityhealthadvocates.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "health-insurance-marketplace-ny",
    "medical-debt-credit-report-ny",
    "wrongful-termination-ny",
    "family-medical-leave-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "COBRA",
    "health insurance after job loss",
    "mini-COBRA New York",
    "keep health insurance laid off",
    "COBRA vs marketplace",
    "Essential Plan",
    "special enrollment job loss",
    "60 day COBRA election",
    "continuation coverage",
    "Insurance Law 3221-m"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/29/1161",
    "https://www.law.cornell.edu/uscode/text/29/1162",
    "https://www.nysenate.gov/legislation/laws/ISC/3221",
    "https://www.dol.gov/general/topic/health-plans/cobra",
    "https://nystateofhealth.ny.gov"
  ],

  lastVerified: "2026-04-18",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
