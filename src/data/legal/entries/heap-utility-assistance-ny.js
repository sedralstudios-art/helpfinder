export const HEAP_UTILITY_ASSISTANCE_NY = {
  id: "heap-utility-assistance-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "42 USC 8621",
  status: "active",

  title: { en: "HEAP — Help Paying for Heat, Utilities, and Cooling" },

  summary: {
    en: "The Home Energy Assistance Program (HEAP) helps eligible New Yorkers pay for heating, cooling, and utility costs. HEAP benefits do not need to be paid back. More than 1.5 million New York households receive HEAP each year."
  },

  whoQualifies: {
    en: [
      "Households with gross monthly income at or below the HEAP income guidelines for their household size.",
      "Households where at least one member receives SNAP, Temporary Assistance, or SSI are automatically income-eligible.",
      "Homeowners and renters are both eligible, including tenants whose heat is included in their rent.",
      "All household members must be U.S. citizens, U.S. non-citizen nationals, or qualified non-citizens.",
      "There is generally no asset test for Regular HEAP benefits."
    ]
  },

  whatItMeans: {
    en: "HEAP is a federally funded program that helps low- and moderate-income households afford energy costs. In New York, HEAP is run by the Office of Temporary and Disability Assistance. The program has several parts. The Regular HEAP Benefit helps pay for heating during winter. Benefits are paid directly to the fuel vendor or utility company, not to the household. The Emergency HEAP Benefit is available if you are in danger of running out of fuel or having your heat shut off. Cooling Assistance provides an air conditioner or fan for households with a medical need during summer. The Heating Equipment Repair and Replacement Benefit helps homeowners aged 60 and older fix or replace furnaces and boilers. HEAP operates on a first-come, first-served basis. Once funding runs out, no more applications are accepted for that season. Income limits and benefit amounts change each program year and are published on the OTDA website."
  },

  yourRights: {
    en: [
      "You have the right to apply for HEAP benefits online, by phone, by mail, or in person at your local Department of Social Services.",
      "You have the right to receive Regular HEAP benefits even if you have savings, stocks, or other resources.",
      "You have the right to an increased benefit if your household includes a member who is aged 60 or older, under age 6, or permanently disabled.",
      "You have the right to Emergency HEAP assistance if your heat is shut off, scheduled to be shut off, or you are out of fuel.",
      "You have the right to a fair hearing if your HEAP application is denied.",
      "You have the right to receive HEAP benefits even if your heat is included in your rent."
    ]
  },

  legalOptions: {
    en: [
      "Under the federal Low Income Home Energy Assistance Act (42 U.S.C. § 8621), HEAP benefits are available through every county Department of Social Services in New York State.",
      "The Regular HEAP season typically opens in early December and remains open until funding is exhausted, usually through early April.",
      "The Emergency HEAP Benefit typically opens in early January. For heating emergencies, the local DSS office accepts emergency applications in person. Emergency HEAP applications cannot be submitted online.",
      "The Cooling Assistance Benefit typically opens in mid-April for households with a medical need for cooling equipment.",
      "Outside of New York City, HEAP applications are available online at mybenefits.ny.gov.",
      "Information about HEAP and local DSS contacts is available through OTDA at otda.ny.gov/programs/heap/.",
      "Older adults who need help applying for HEAP may contact their local Office for the Aging or the NY Connects helpline at 1-800-342-9871.",
      "Free legal help with HEAP denials and utility issues is available through LawNY at (585) 325-2520 and Legal Aid Society of Rochester at (585) 232-4090."
    ]
  },

  example: {
    en: "Patricia lives in Steuben County and heats her home with fuel oil. She receives SNAP benefits, which made her automatically eligible for HEAP. She applied online in December through mybenefits.ny.gov. Her Regular HEAP benefit was paid directly to her fuel oil company. In February, she ran low on fuel during a cold stretch and contacted her local DSS office for emergency assistance. She received an Emergency HEAP benefit that covered an additional fuel delivery."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Assistance of Western New York (LawNY)",
      focus: "Public benefits, utility issues, HEAP, housing",
      qualifier: "Low income residents in 14 Western NY counties including Monroe",
      access: "Phone intake at (585) 325-2520",
      outcome: "Direct representation",
      phone: "(585) 325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Public benefits, utility assistance, fair hearings",
      qualifier: "Low income residents of Monroe and surrounding counties",
      access: "Phone intake, walk-in, or referral",
      outcome: "Direct representation and advice on benefits cases",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Empire Justice Center",
      focus: "Benefits advocacy, systemic issues, policy reform",
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
    "snap-rights-ny",
    "benefits-denial-appeal-ny",
    "fair-hearing-ny",
    "emergency-cash-assistance-ny",
    "ssi-disability-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "utility bill help",
    "can't pay heating bill",
    "heat shut off",
    "electric bill help",
    "HEAP",
    "energy assistance",
    "fuel oil help",
    "gas bill",
    "winter heating help",
    "utility shutoff",
    "cooling assistance",
    "air conditioner help",
    "furnace repair"
  ],

  sources: [
    "https://otda.ny.gov/programs/heap/",
    "https://www.ny.gov/services/apply-heating-assistance-heap",
    "https://www.law.cornell.edu/uscode/text/42/8621"
  ],

  lastVerified: "2026-04-04",
  volatility: "high",
  emergencyFlag: true,
  disclaimer: true,
  categoryDisclaimer: null
};
