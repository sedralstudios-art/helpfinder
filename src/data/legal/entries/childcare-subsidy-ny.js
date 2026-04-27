export const CHILDCARE_SUBSIDY_NY = {
  id: "childcare-subsidy-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "42 USC 9858",
  status: "active",

  title: { en: "Child Care Subsidy — Help Paying for Day Care in New York" },

  summary: {
    en: "Working parents, parents in school, and parents in job training programs may qualify for help paying for child care through the New York child care subsidy program. The subsidy covers a portion of the cost at licensed day care centers, family day care homes, and in some cases informal caregivers. The family pays a co-pay based on income."
  },

  whoQualifies: {
    en: [
      "Families with children under 13 (or under 19 if the child has special needs) who need care because the parent is working, in school, or in an approved training program.",
      "Income must be at or below 85% of the state median income for the family size (check ocfs.ny.gov for the current threshold — it changes periodically).",
      "Families receiving Temporary Assistance are categorically eligible.",
      "A family that is not receiving TA but meets the income and activity requirements can apply directly."
    ]
  },

  whatItMeans: {
    en: "The child care subsidy is funded by the federal Child Care and Development Fund (CCDF) and administered locally by each county's Department of Social Services. The subsidy pays a portion of the cost directly to the child care provider. The family pays a co-pay that is based on family income and size — lower income means a lower co-pay. The subsidy can be used at licensed and registered child care centers, family day care homes, group family day care, and in some cases legally exempt providers (like a relative). The amount the subsidy covers depends on the type of care, the child's age, and the market rate set by the state. Waitlists exist in some counties when funding is tight. In Monroe County, applications are handled by DSS. Families receiving Temporary Assistance are enrolled automatically if they need care for work activities. Co-pay calculations follow a sliding scale that starts at $0 for families at or below 100 percent of the federal poverty level and climbs gradually as income rises toward the 85-percent-state-median-income cap. The federal cap on co-pays is 7 percent of family income — NY's actual co-pay schedule is generally lower. Subsidy authorizations cover 12 months at a time, after which a redetermination is required. A family whose income rises above the eligibility limit during a 12-month authorization period generally keeps the subsidy through the end of the authorization, with a modest income-tier adjustment. School-age care during the school year is shorter than full-time, but summer and school break care is full-time and typically covered. Specialty programs — Head Start, universal pre-K, NY State Pre-K — are funded separately and can sometimes be combined with the subsidy to fill scheduling gaps. The NY Child Care Assistance Program expansion, funded since 2022, has substantially increased the income cap and reduced co-pays compared with prior years."
  },

  yourRights: {
    en: [
      "Eligible families have the right to choose their own child care provider, including family members in some cases.",
      "The subsidy must cover care during work hours, commute time, and reasonable sleep time for parents who work non-traditional hours.",
      "If the subsidy is denied or reduced, the family has the right to a fair hearing.",
      "TA recipients who need child care for work activities have the right to have it arranged by DSS.",
      "The co-pay cannot exceed 7% of family income under the 2024 CCDF Final Rule federal requirement."
    ]
  },

  legalOptions: {
    en: [
      "Applications for child care subsidy in Monroe County are handled by DHS Child Care Team 76 at (585) 753-6316 or online at mybenefits.ny.gov.",
      "The NYS Office of Children and Family Services (OCFS) maintains information on eligibility, income limits, and market rates at ocfs.ny.gov.",
      "If the subsidy is denied, the denial notice includes the reason and instructions for requesting a fair hearing at otda.ny.gov/hearings/request/ or by calling (800) 342-3334.",
      "The Child Care Council Inc. (Monroe County's Resource and Referral agency) at (585) 654-4720 can help families find licensed providers and understand the subsidy process.",
      "Free legal help with child care subsidy denials is available through Legal Aid Society of Rochester at (585) 232-4090."
    ]
  },

  example: {
    en: "A single mother in Rochester starts a new job and needs full-time care for her 3-year-old. Her income qualifies for the child care subsidy. She applies through DSS and is approved. She chooses a licensed day care center near her job. The subsidy pays the center directly, and she pays a co-pay based on her income. When her income increases after a raise, her co-pay goes up slightly but the subsidy continues."
  },

  counsel: [
    {
      type: "free",
      name: "Monroe County DSS — Child Care Subsidy",
      focus: "Child care subsidy applications, eligibility, provider enrollment",
      qualifier: "Monroe County families",
      access: "Phone, in person, or online",
      outcome: "Application processing and subsidy issuance",
      phone: "(585) 753-6316",
      url: "https://mybenefits.ny.gov",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Child Care Resource and Referral (Rochester)",
      focus: "Finding child care providers, subsidy guidance",
      qualifier: "Any family in Monroe County",
      access: "Phone",
      outcome: "Provider referrals and subsidy navigation",
      phone: "(585) 654-4720",
      url: "https://www.childcarecouncil.com",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "childcare-assistance-ny",
    "benefits-denial-appeal-ny",
    "fair-hearing-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "child care subsidy",
    "day care help",
    "child care assistance",
    "paying for day care",
    "child care co-pay",
    "CCDF",
    "child care voucher",
    "working parent child care",
    "DSS child care",
    "licensed day care"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/42/9858",
    "https://www.nysenate.gov/legislation/laws/SOS/410-W",
    "https://ocfs.ny.gov/programs/childcare/",
    "https://mybenefits.ny.gov"
  ],

  lastVerified: "2026-04-27",
  factCheckedBy: { tool: "websearch+webfetch", date: "2026-04-27" },
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
