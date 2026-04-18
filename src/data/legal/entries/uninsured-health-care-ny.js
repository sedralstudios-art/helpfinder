export const UNINSURED_HEALTH_CARE_NY = {
  id: "uninsured-health-care-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Health Care Without Insurance — Options in Monroe County" },

  summary: {
    en: "People without health insurance can still get medical care in Monroe County. Federally Qualified Health Centers (FQHCs) like Anthony L. Jordan Health Center and Rochester Regional Health's community clinics provide primary care on a sliding scale — the cost is based on income, and no one is turned away for inability to pay. Emergency rooms must treat anyone regardless of insurance. New York also has programs that may provide coverage: Medicaid, the Essential Plan, and the Marketplace — many people are eligible and do not know it."
  },

  whoQualifies: {
    en: [
      "Anyone without health insurance — including undocumented residents (FQHCs do not ask about immigration status).",
      "Anyone who lost insurance due to job loss, aging out of a parent's plan, losing Medicaid, or a life change.",
      "Anyone who cannot afford insurance but has not checked whether they qualify for Medicaid or the Essential Plan.",
      "Pregnant women, children, and people with disabilities may qualify for Medicaid regardless of immigration status in many cases."
    ]
  },

  whatItMeans: {
    en: "Federally Qualified Health Centers (FQHCs) are required by law to serve all patients regardless of ability to pay. They use a sliding fee scale — the cost is based on household income. At the lowest income levels, the cost may be $0. In Monroe County, FQHCs include: Anthony L. Jordan Health Center (multiple locations), Rochester Regional Health community health centers, and Trillium Health (which also provides HIV/STI care). Emergency care: under EMTALA (the Emergency Medical Treatment and Active Labor Act), every hospital with an emergency room must screen and stabilize any patient who arrives, regardless of insurance or ability to pay. The hospital cannot turn someone away or ask about insurance before providing emergency treatment. This does not mean the hospital cannot bill later — but it does mean care cannot be refused. For insurance options: the NY State of Health Marketplace (nystateofhealth.ny.gov) offers Medicaid (free for qualifying incomes), the Essential Plan (low-cost coverage at $0-$20/month for incomes up to 200% FPL), and Marketplace plans with subsidies. Open enrollment runs November through January, but qualifying life events (job loss, birth, moving) allow enrollment year-round. Navigators provide free help with enrollment — they are available at many community organizations throughout Monroe County."
  },

  yourRights: {
    en: [
      "FQHCs must serve all patients regardless of ability to pay or immigration status.",
      "Emergency rooms must screen and stabilize every patient — they cannot refuse treatment.",
      "Sliding scale fees at FQHCs are based on income — at the lowest levels, the cost may be $0.",
      "Many uninsured people qualify for Medicaid, the Essential Plan, or subsidized Marketplace coverage without knowing it.",
      "Navigators provide free, in-person help with insurance enrollment — no fee, no obligation.",
      "Undocumented residents are eligible for Emergency Medicaid for labor and delivery and life-threatening emergencies."
    ]
  },

  legalOptions: {
    en: [
      "Anthony L. Jordan Health Center provides primary care on a sliding scale. Main location: 82 Holland St, Rochester NY 14605. Phone: (585) 423-5800.",
      "Trillium Health provides primary care, HIV/STI services, and PrEP on a sliding scale. Phone: (585) 545-7200.",
      "For insurance enrollment, NY State of Health navigators provide free help. Call (855) 355-5777 or visit nystateofhealth.ny.gov to find a local navigator.",
      "For emergency care, go to the nearest emergency room — hospitals cannot refuse treatment under EMTALA.",
      "For prescription assistance without insurance, RxAssist (rxassist.org) and NeedyMeds (needymeds.org) list patient assistance programs from drug manufacturers.",
      "For dental care without insurance, Eastman Institute for Oral Health at (585) 275-5051 provides care on a sliding scale."
    ]
  },

  example: {
    en: "A man in Rochester loses his job and his employer-sponsored health insurance. He does not think he can afford coverage. A navigator at a community organization helps him check his eligibility through NY State of Health. He qualifies for the Essential Plan at $0/month because his income is below 150% of the federal poverty level. He enrolls the same week and has full coverage — primary care, prescriptions, and specialist visits — for no monthly premium."
  },

  counsel: [
    {
      type: "free",
      name: "Anthony L. Jordan Health Center",
      focus: "Primary care, dental, behavioral health — sliding scale",
      qualifier: "Anyone — no insurance or immigration status requirement",
      access: "Phone or walk-in",
      outcome: "Medical care on a sliding fee scale",
      phone: "(585) 423-5800",
      url: "https://www.jordanhealth.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "NY State of Health — Navigator Assistance",
      focus: "Health insurance enrollment, Medicaid, Essential Plan, Marketplace",
      qualifier: "Any New York resident",
      access: "Phone or in person",
      outcome: "Free enrollment assistance",
      phone: "(855) 355-5777",
      url: "https://nystateofhealth.ny.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "medicaid-ny",
    "emergency-medicaid-ny",
    "prescription-assistance-ny",
    "health-insurance-denial-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "no insurance",
    "uninsured",
    "sliding scale",
    "FQHC",
    "community health center",
    "Essential Plan",
    "EMTALA",
    "emergency room rights",
    "free clinic",
    "navigator",
    "health marketplace",
    "Jordan Health"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/42/1395dd",
    "https://nystateofhealth.ny.gov"
  ],

  lastVerified: "2026-04-16",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
