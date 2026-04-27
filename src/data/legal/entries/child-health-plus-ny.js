export const CHILD_HEALTH_PLUS_NY = {
  id: "child-health-plus-ny",
  category: "healthcare",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY PBH 2511",
  status: "active",

  title: { en: "NY Child Health Plus — Low-Cost or Free Health Insurance for Kids Under 19" },

  summary: {
    en: "Child Health Plus is New York's health insurance program for children under 19 whose family income is too high for Medicaid but too low for private coverage. Premiums range from free to 60 dollars a month per child depending on family income, capped at three children per family. Enrollment is year-round through NY State of Health."
  },

  whoQualifies: {
    en: [
      "A New York resident child under age 19 who is not eligible for Medicaid.",
      "A family with income between 160 percent and 400 percent of the federal poverty level.",
      "A child without other health insurance such as an employer plan or a parent's COBRA.",
      "A child who lost Medicaid at redetermination because family income went up.",
      "A non-citizen child — immigration status does not affect eligibility for Child Health Plus."
    ]
  },

  whatItMeans: {
    en: "Child Health Plus (CHPlus) is New York's version of the federal Children's Health Insurance Program (CHIP, 42 USC 1397aa and following). It is authorized under NY Public Health Law Section 2511 and funded jointly by state and federal dollars. The program covers children under age 19 whose family income is too high for Medicaid but too low to afford private insurance. CHPlus covers doctor visits, hospital stays, prescription drugs, dental and vision care, mental health services, routine immunizations, and emergency care with no deductible and no copay for children. Pre-existing conditions are never a reason for denial. Premiums depend on family income. A family under 160 percent of the federal poverty level (roughly 50,000 dollars a year for a family of four in 2026) pays nothing. A family between 160 and 250 percent pays 9 dollars per child per month. A family between 250 and 400 percent pays 30 to 60 dollars per child per month. The premium caps at three children — a family of four or more children pays no more than three-child premiums. A family over 400 percent can still enroll but pays full premium without state subsidy (rarely worth it). Enrollment is year-round — there is no open enrollment window. Application is through NY State of Health at nystateofhealth.ny.gov or by phone at 1-855-355-5777. A free certified Navigator can walk a family through the application in-person or by phone. Common Navigators in Monroe County include ABC Health Centers, the Monroe County Department of Human Services, and several community health centers. Children who qualify for Medicaid (family income under 138 percent of poverty for most children, higher for younger children) are routed to Medicaid automatically. The application is the same. Plans are administered by private insurers including Fidelis Care, MVP, Excellus BlueCross BlueShield, and YourCare Health Plan in the Monroe County region. The family picks the plan at enrollment. Benefits are the same across plans but provider networks differ. A child whose family income changes must report the change within 30 days — CHPlus may switch to Medicaid if income drops, or premium may increase or decrease as income changes. A child approaching 19 must renew under adult health insurance, usually through a parent plan or a Qualified Health Plan with income-based subsidies on NY State of Health. Immigration status does not affect CHPlus eligibility for the child under PHL 2511-b — an undocumented child in New York can still enroll and the family's immigration status is not reported to federal immigration authorities. Child Health Plus coverage also continues for children in foster care, children whose parents are incarcerated, and children in kinship care arrangements."
  },

  yourRights: {
    en: [
      "A child under 19 has the right to apply for CHPlus year-round with no open enrollment window.",
      "A non-citizen child has the right to enroll regardless of immigration status; status is not shared with federal immigration.",
      "A family has the right to a free Navigator to help complete the application in person or by phone.",
      "A family has the right to pick any approved plan in the region at enrollment and switch plans once per year.",
      "A family has the right to have premiums capped at three children; additional children incur no more premium.",
      "A family whose income dropped has the right to auto-transfer from CHPlus to Medicaid when eligible."
    ]
  },

  legalOptions: {
    en: [
      "NY State of Health at 1-855-355-5777 or nystateofhealth.ny.gov handles all applications, renewals, and plan changes.",
      "Monroe County Department of Human Services at (585) 753-6998 assists with CHPlus applications alongside Medicaid.",
      "Legal Aid Society of Rochester at (585) 232-4090 represents families in coverage denials and appeals.",
      "For emergency CHPlus issues (medical need while application pending), NY State of Health escalation line at 1-800-541-2831."
    ]
  },

  example: {
    en: "The Medrano family has three children ages 4, 8, and 14 in Rochester. Parents earn 68,000 dollars a year as a restaurant cook and a home health aide, placing them at 235 percent of the federal poverty level for a family of five. Too high for Medicaid, too low for workplace insurance. They applied through NY State of Health and were approved for CHPlus at a premium of 9 dollars per child per month — 27 dollars total. Fidelis Care covered all three children starting the following month, including dental cleanings and vision exams for the school year."
  },

  counsel: [
    {
      type: "government",
      name: "NY State of Health Marketplace",
      focus: "Child Health Plus, Medicaid, Essential Plan, Qualified Health Plan applications",
      qualifier: "Any NY family",
      access: "Phone, online portal, in-person Navigator appointments",
      outcome: "Health insurance enrollment, plan selection, renewal support",
      phone: "1-855-355-5777",
      url: "https://nystateofhealth.ny.gov",
      verified: true,
      bilingual: true,
      languages: ["es", "ar", "zh"]
    },
    {
      type: "government",
      name: "Monroe County Department of Human Services",
      focus: "CHPlus, Medicaid, SNAP and other benefits applications",
      qualifier: "Monroe County family",
      access: "Phone intake, walk-in at Westfall Road or 111 Westfall Rd facility",
      outcome: "Benefits enrollment, eligibility determination, renewal support",
      phone: "(585) 753-6998",
      url: "https://www.monroecounty.gov/hs",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "medicaid-ny",
    "ny-state-of-health-marketplace-ny",
    "wic-program-ny-program",
    "school-meals-free-reduced-ny",
    "snap-rights-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "Child Health Plus",
    "CHPlus NY",
    "children health insurance",
    "PHL 2511",
    "free kids insurance",
    "CHIP New York",
    "low cost child health",
    "nystateofhealth.ny.gov",
    "child under 19 insurance",
    "Monroe County child health"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/PBH/2511",
    "https://nystateofhealth.ny.gov/child-health-plus"
  ],

  lastVerified: "2026-04-27",
  factCheckedBy: { tool: "websearch+webfetch", date: "2026-04-27" },
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
