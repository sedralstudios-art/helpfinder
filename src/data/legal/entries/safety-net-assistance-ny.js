export const SAFETY_NET_ASSISTANCE_NY = {
  id: "safety-net-assistance-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY SOS 158",
  status: "active",

  title: { en: "NY Safety Net Assistance — Cash Aid for Adults Not Eligible for TANF" },

  summary: {
    en: "New York Safety Net Assistance (SNA) is a state-funded cash assistance program for low-income NY adults who do not qualify for federal TANF — mostly single adults, childless couples, non-citizens, and families past the 60-month TANF limit. Monthly benefit ranges based on household size and Monroe County shelter allowance — roughly 158 to 720 dollars cash grant plus shelter and fuel supplements."
  },

  whoQualifies: {
    en: [
      "A low-income NY adult who is not eligible for federal TANF (Temporary Assistance for Needy Families).",
      "A single adult or childless couple below the income eligibility level.",
      "A family that has used up the 60-month federal TANF lifetime limit.",
      "Certain legal immigrants who are not eligible for federal TANF due to 5-year residency bar.",
      "An adult without a dependent child in the household."
    ]
  },

  whatItMeans: {
    en: "New York Safety Net Assistance (SNA) is a state-funded cash aid program authorized by New York Social Services Law Sections 158 through 159. SNA fills the gap for low-income adults and certain other groups who do not qualify for federal TANF (Temporary Assistance for Needy Families) under 42 USC 601. WHO IS NOT TANF ELIGIBLE includes: (1) Single adults with no children in the household. (2) Childless couples. (3) Families with a parent who has exhausted the federal TANF 60-month lifetime limit. (4) Legal permanent residents in their first 5 years of residency (the 5-year bar excludes them from federal TANF). (5) Certain categories of non-citizens. (6) Adults who have failed TANF work requirements. These groups are directed to SNA instead. BENEFIT STRUCTURE: SNA cash grants vary by household size. For a single adult in Monroe County in 2026 the monthly cash grant is approximately 158 dollars (named for the statute), plus shelter allowance (approximately 350 to 450 dollars per month), plus energy allowance in winter months. For a couple the grant is approximately 270 dollars cash plus shelter. Children would typically be covered by TANF rather than SNA. Income limits: Gross monthly income must be below 150 percent of the federal poverty line and countable net income (after allowable deductions) must be below the SNA need standard. Resource limit: 2,500 dollars for most households, 3,750 for households with elderly or disabled member, excluding the primary home, one vehicle, and certain retirement accounts. WORK REQUIREMENTS: SNA recipients are subject to NY Social Services Work Requirements. Able-bodied adults must participate in work-related activities — job search, training, community service, or employment — for 30-35 hours per week. Failure to comply results in sanctions. Some recipients are exempt (those with documented disabilities, primary caregivers of young children, those in residential treatment, etc.). RECIPIENTS UNABLE TO WORK (documented disability or medical condition): Can receive exempt status while the conditions persist. Many are transitioning between SNA and SSI — SSI applicants often receive SNA while the SSI application is pending (6-18 months), with eventual SNA reimbursement when SSI is awarded. Interim assistance (IA) procedures convert the pending SSI to SNA coverage. APPLICATION: Apply through Monroe County Department of Human Services at 111 Westfall Road Rochester or 691 St. Paul Street (Westfall Road facility) or by mail. Online at mybenefits.ny.gov. Required documents: photo ID, Social Security Numbers, proof of all household income, rent or mortgage documentation, lease, utility bills, bank statements for all accounts, immigration documents if non-citizen, proof of any other benefits (SNAP, SSI, unemployment). Decision within 30-45 days. RELATIONSHIP TO OTHER BENEFITS: (1) SNAP (food stamps) is a separate benefit; SNA recipients almost always also qualify for SNAP. (2) Medicaid is separate; most SNA recipients are Medicaid-eligible. (3) HEAP for heating assistance is separate. (4) Section 8 housing is separate. (5) Emergency Assistance for immediate-crisis situations is separate (see SSL 350-j). DURATION: SNA has no federal time limit like TANF's 60 months. SNA can continue indefinitely as long as eligibility continues, but after 24 months of cash assistance (federal and state combined), recipients generally convert from cash benefits to vendor payments — the state pays landlords, utility companies, and other vendors directly rather than providing cash to the recipient. This 24-month conversion applies to SNA at SSL 158(b). FAIR HEARING: A SNA application denial or grant reduction can be appealed through the NY Fair Hearing process at OTDA within 60 days. Legal Aid and Empire Justice represent recipients in Fair Hearings. HOUSING NOTICE: SNA recipients facing housing instability have additional protection — a landlord evicting a SNA recipient must notify the Monroe County DHS at least 2 weeks before. This gives the agency opportunity to pay arrears or find alternative housing."
  },

  yourRights: {
    en: [
      "A low-income NY adult not eligible for TANF has the right to apply for Safety Net Assistance.",
      "A legal permanent resident in first 5 years has the right to SNA.",
      "An applicant has the right to a decision within 30-45 days.",
      "A recipient has the right to appeal denial or reduction through Fair Hearing within 60 days.",
      "A SNA recipient also typically has the right to SNAP, Medicaid, and HEAP.",
      "A SSI applicant has the right to interim SNA while the SSI application is pending.",
      "A disabled recipient has the right to work requirement exemption with documentation."
    ]
  },

  legalOptions: {
    en: [
      "Monroe County Department of Human Services at (585) 753-6960 for SNA applications and case management.",
      "NY Office of Temporary and Disability Assistance at 1-800-342-3334 for statewide OTDA questions.",
      "Legal Aid Society of Rochester at (585) 295-5727 represents recipients in Fair Hearings.",
      "Empire Justice Center at (585) 295-5702 handles complex benefits cases.",
      "mybenefits.ny.gov for online application.",
      "Catholic Family Center at (585) 262-7100 and other community partners provide application help."
    ]
  },

  example: {
    en: "Denzel, 47, single adult in Rochester, lost his job and had no dependents. He applied for SNA at Monroe County DHS. His application was approved at 158 dollars per month cash grant plus 410 shelter allowance (max for a single adult renter in Monroe County). He also received SNAP for 291 per month and Medicaid. He was subject to work requirements and participated in a Monroe County workforce program. Six months later he secured employment and his SNA case closed. His SNAP continued on a sliding scale based on new income."
  },

  counsel: [
    {
      type: "government",
      name: "Monroe County Department of Human Services",
      focus: "SNA applications, case management, work requirement coordination",
      qualifier: "Any Monroe County low-income adult",
      access: "Phone, walk-in Westfall Road facility, mail application, online portal",
      outcome: "SNA benefits, referrals to related programs",
      phone: "(585) 753-6960",
      url: "https://www.monroecounty.gov/hs",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "Empire Justice Center",
      focus: "Benefits appeals, Fair Hearings, SNA denial representation",
      qualifier: "Monroe County resident at or under 200 percent of poverty",
      access: "Phone intake",
      outcome: "Free legal representation at Fair Hearings",
      phone: "(585) 295-5702",
      url: "https://empirejustice.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "snap-rights-ny",
    "medicaid-ny",
    "heap-utility-assistance-ny",
    "fair-hearing-ny",
    "ssi-disability-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "NY Safety Net Assistance",
    "SNA NY",
    "SOS 158",
    "non-TANF cash aid",
    "single adult cash assistance",
    "5-year immigrant bar",
    "24-month vendor conversion",
    "interim SSI assistance",
    "work requirements SNA",
    "Fair Hearing appeal"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/SOS/158",
    "https://otda.ny.gov/programs/temporary-assistance"
  ],

  lastVerified: "2026-04-20",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
