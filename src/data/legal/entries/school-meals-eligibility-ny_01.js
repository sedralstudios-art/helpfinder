export const SCHOOL_MEALS_ELIGIBILITY_NY = {
  id: "school-meals-eligibility-ny",
  category: "benefits",
  tier: "federal",
  jurisdiction: "us-ny",
  status: "active",

  title: { en: "Free and Reduced School Meals — Who Qualifies and How to Apply" },

  summary: {
    en: "Every child in Rochester City School District gets free breakfast and lunch — no application needed. In suburban districts, families may need to apply. Children whose families receive SNAP, Temporary Assistance, or FDPIR are automatically eligible. Families above those thresholds can still qualify based on income. Many eligible families never apply because they do not know they qualify or are embarrassed to ask."
  },

  whoQualifies: {
    en: [
      "Every student in RCSD receives free meals automatically — no application needed (Community Eligibility Provision).",
      "In suburban districts: children in families receiving SNAP, TA, or FDPIR are automatically eligible for free meals — often without an application (direct certification).",
      "Families not receiving those benefits can apply based on income — the threshold is 130% FPL for free meals and 185% FPL for reduced-price meals (check the current income guidelines at fns.usda.gov as they change annually).",
      "Foster children, children experiencing homelessness, migrant children, and runaway youth are categorically eligible."
    ]
  },

  whatItMeans: {
    en: "The National School Lunch Program and School Breakfast Program provide free or reduced-price meals to children in public and some private schools. In Rochester, the district participates in the Community Eligibility Provision (CEP), which means every student eats free regardless of family income — no paperwork required. In suburban Monroe County districts that do not participate in CEP, families may need to submit an application. The application asks for household size and income. Families already on SNAP or TA are often directly certified (the school matches data with DSS) and do not need to apply separately. The application is confidential — other students do not know who is on free or reduced meals. Families should apply even if unsure about eligibility — there is no penalty for applying and being found ineligible. The application can be submitted at any time during the school year, not just at the beginning. Approved families may also become eligible for discounts on other school fees (field trips, SAT/ACT fee waivers, reduced-price internet programs). In summer, the Summer Food Service Program provides free meals at sites throughout Monroe County — no application or income check required."
  },

  yourRights: {
    en: [
      "In RCSD, every student receives free meals — no application needed.",
      "The application is confidential — meal status is not disclosed to other students.",
      "There is no penalty for applying and not qualifying.",
      "An application can be submitted at any time during the school year.",
      "Foster children, homeless youth, migrant children, and runaway youth are automatically eligible regardless of income.",
      "Summer meals are available free to all children 18 and under at sites throughout the county — no application needed."
    ]
  },

  legalOptions: {
    en: [
      "In RCSD, meals are automatic. For questions, RCSD Food Services can be reached at (585) 262-8100.",
      "In suburban districts, the application form is available from the school office, the district website, or by calling the food service department. Many districts also accept online applications.",
      "If an application is denied, the family has the right to appeal through the school district's hearing process.",
      "Summer meal sites in Monroe County can be found by texting FOOD to 304-304 or by calling 211.",
      "For WIC-eligible families (children under 5, pregnant/postpartum women), additional food assistance is available separately through the WIC program — see the WIC entry in this library."
    ]
  },

  example: {
    en: "A family in Penfield with two school-age children receives SNAP. The school district directly certifies the children for free meals through a data match with DSS — no application needed. The parents did not know this happened until the school sends a notification letter. Both children receive free breakfast and lunch all year. In summer, the children eat free at a local community center that participates in the Summer Food Service Program."
  },

  counsel: [
    {
      type: "free",
      name: "RCSD Food Services",
      focus: "Free school meals for all RCSD students",
      qualifier: "Every student in RCSD",
      access: "Automatic — no application needed",
      outcome: "Free breakfast and lunch",
      phone: "(585) 262-8100",
      url: "https://www.rcsdk12.org/departments/food-services",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Summer Meals — Text FOOD to 304-304",
      focus: "Free summer meals for all children 18 and under",
      qualifier: "Any child — no application or income check",
      access: "Text or call 211",
      outcome: "Nearest summer meal site location",
      phone: "211",
      url: "https://www.fns.usda.gov/meals4kids",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "snap-rights-ny",
    "school-meals-free-reduced-ny",
    "homeless-student-rights-ny",
    "childcare-subsidy-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "free lunch",
    "free breakfast",
    "school meals",
    "reduced lunch",
    "SNAP school meals",
    "direct certification",
    "CEP",
    "summer meals",
    "free summer food",
    "school food application",
    "no application needed",
    "text FOOD"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/42/1758",
    "https://www.law.cornell.edu/uscode/text/42/1773",
    "https://www.fns.usda.gov/nslp",
    "https://www.fns.usda.gov/meals4kids"
  ],

  lastVerified: "2026-04-16",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
