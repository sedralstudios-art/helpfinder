export const INSULIN_COST_CAP_NY = {
  id: "insulin-cost-cap-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY ISC 3216",
  status: "active",

  title: { en: "Insulin Cost Cap — New York Insurance Law Limit on Monthly Insulin Out-of-Pocket Cost" },

  summary: {
    en: "New York Insurance Law caps the out-of-pocket cost of a 30-day supply of insulin at $100 per month for people with state-regulated insurance. The cap applies to individual policies, small group plans, and employer plans regulated by NY (not self-funded ERISA plans). A federal cap of $35 per month applies to Medicare Part D enrollees. A diabetic patient paying more than the statutory cap can appeal to the insurer, file a Department of Financial Services complaint, or sue."
  },

  whoQualifies: {
    en: [
      "A NY resident with state-regulated health insurance (individual, small group, or non-self-funded employer plan) who uses prescription insulin.",
      "A Medicare Part D enrollee, protected by the federal $35-per-month cap under the Inflation Reduction Act.",
      "A dependent of an insured person who is prescribed insulin.",
      "A person whose insurer required prior authorization or step therapy for insulin despite the cap.",
      "A person charged more than the cap due to deductible timing or tier assignment.",
      "A Type 1 or Type 2 diabetic using any FDA-approved insulin product covered by the plan formulary."
    ]
  },

  whatItMeans: {
    en: "New York enacted the state insulin cost cap in 2020 and expanded it since. Insurance Law Sections 3216, 3221, and 4303 (the group, blanket, and Article 43 corporation provisions) require state-regulated health insurance to limit the insured person's total out-of-pocket cost for a 30-day supply of insulin to $100, regardless of deductible, copay, or coinsurance structure. The cap applies from the first fill of the year — an insurer cannot require the insured to meet a deductible first. Covered insulin: the cap applies to at least one insulin product in each therapeutic class (rapid-acting, short-acting, intermediate-acting, long-acting, pre-mixed, and concentrated). Plans can exclude some insulins but must cover enough to make a cap-priced option available. Prior authorization and step therapy: an insurer can impose prior authorization or step therapy but must make the cap-priced insulin available for that trial. If medically necessary and documented by the prescriber, the insurer must accept an appeal to skip step therapy (Public Health Law 4903 and parallel Insurance Law provisions). Federal coverage: self-funded ERISA plans are not regulated by NY Insurance Law, but many employers voluntarily apply a cap. The federal Inflation Reduction Act of 2022 capped Medicare Part D insulin at $35 per 30-day supply (42 USC 1395w-102) beginning 2023. Uninsured patients: the NY cap does not apply to uninsured people. However, manufacturer patient-assistance programs (Eli Lilly, Novo Nordisk, Sanofi) provide insulin at $35 or free to qualifying uninsured patients. New York also operates the Elderly Pharmaceutical Insurance Coverage (EPIC) program for seniors (covered under prescription-assistance-ny). Enforcement: a patient charged more than the cap should first contact the insurer's member services to correct the billing error. If the insurer refuses, the patient can file a complaint with the NY Department of Financial Services (DFS) at (800) 342-3736. DFS investigates and can order the insurer to refund excess charges. The patient can also file an external appeal for denied medical necessity under Insurance Law 4914. A private right of action under General Business Law 349 can also be brought for repeated overcharges. Pharmacy substitution: a pharmacist can substitute a covered biologic insulin (biosimilar) under NY Education Law Article 137 if the prescriber has authorized substitution, which can lower the cost further. Pharmacy discount cards: some patients pay less than the cap by using a discount card instead of insurance — but using the card means the payment may not count toward the deductible or out-of-pocket maximum. Medicaid: the NY Medicaid program and Medicaid Managed Care plans cover insulin with minimal or no copay (under $3 per prescription). People with income near the Medicaid line should check eligibility."
  },

  yourRights: {
    en: [
      "A person with state-regulated insurance has the right to a $100 monthly cap on covered insulin (Insurance Law 3216, 3221, 4303).",
      "A person cannot be required to meet a deductible before the cap applies.",
      "A person can appeal a denied insulin or step-therapy requirement under medical necessity.",
      "A Medicare Part D enrollee has the right to a $35 monthly cap (42 USC 1395w-102).",
      "A person has the right to file a NY DFS complaint for cap violations.",
      "A person has the right to external appeal under Insurance Law 4914 for coverage denials.",
      "A person has the right to pharmacy substitution to a biosimilar if the prescriber allows.",
      "A person overcharged can seek damages under General Business Law 349."
    ]
  },

  legalOptions: {
    en: [
      "NY Department of Financial Services at (800) 342-3736 — insurance complaints.",
      "Community Health Advocates at (888) 614-5400 — free health coverage navigation statewide.",
      "NY State of Health at (855) 355-5777 — marketplace plan issues and enrollment.",
      "Medicare Rights Center at (800) 333-4114 — Part D insulin cap questions.",
      "American Diabetes Association Legal Advocate at (800) 342-2383.",
      "NYS Attorney General Health Care Bureau at (800) 428-9071.",
      "Monroe County Office for the Aging at (585) 753-6280 — senior prescription assistance.",
      "Legal Aid Society of Rochester at (585) 232-4090 — low-income health coverage disputes."
    ]
  },

  example: {
    en: "A Rochester bus driver with Type 1 diabetes and a state-regulated employer plan was charged $240 at the pharmacy for a 30-day supply of insulin in January, with the pharmacy citing the plan's $500 deductible. She called Community Health Advocates, which confirmed the state cap applies from first fill regardless of deductible. She filed a DFS complaint and attached her pharmacy receipt. DFS contacted the insurer within a week. The insurer refunded $140 and adjusted the system to charge $100 going forward. Her monthly cost remained at the statutory cap for the rest of the year."
  },

  counsel: [
    {
      type: "free",
      name: "Community Health Advocates",
      focus: "Health coverage disputes, out-of-pocket overcharges, billing errors",
      qualifier: "Any NY resident with health insurance issues",
      access: "Phone at (888) 614-5400",
      outcome: "Navigation, appeals, DFS complaint support",
      phone: "(888) 614-5400",
      url: "https://communityhealthadvocates.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "NY Department of Financial Services",
      focus: "Insurance complaints, cap violations, coverage disputes",
      qualifier: "Any NY insurance consumer",
      access: "Online complaint or phone (800) 342-3736",
      outcome: "Investigation, refund orders, regulator action",
      phone: "(800) 342-3736",
      url: "https://www.dfs.ny.gov/complaints",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "prescription-assistance-ny",
    "prior-authorization-step-therapy-ny",
    "surprise-medical-billing-ny",
    "epic-prescription-seniors-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "insulin cost cap",
    "Insurance Law 3216",
    "Insurance Law 3221",
    "Insurance Law 4303",
    "Medicare Part D",
    "Inflation Reduction Act",
    "diabetes drug cost",
    "step therapy insulin",
    "DFS insurance complaint",
    "NY insulin $100 cap"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/ISC/3216",
    "https://www.nysenate.gov/legislation/laws/ISC/3221",
    "https://www.law.cornell.edu/uscode/text/42/1395w-102"
  ],

  lastVerified: "2026-04-18",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
