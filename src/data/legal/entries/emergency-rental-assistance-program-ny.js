export const EMERGENCY_RENTAL_ASSISTANCE_PROGRAM_NY = {
  id: "emergency-rental-assistance-program-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "agency-program",
  status: "active",

  title: { en: "NY Emergency Rental Assistance Program (ERAP) — Back Rent Grants for Low-Income Tenants" },

  summary: {
    en: "The NY Emergency Rental Assistance Program (ERAP) pays back rent directly to landlords for tenants who fell behind during COVID and related hardships. ERAP can cover up to 12 months of back rent plus 3 months of forward rent. Applications are through the NY Office of Temporary and Disability Assistance. An active application triggers an eviction stay. Funds are limited and vary by round."
  },

  whoQualifies: {
    en: [
      "A NY tenant with household income at or below 80 percent of the Area Median Income (AMI).",
      "A tenant who experienced a hardship since March 13, 2020 (COVID-era job loss, reduced hours, medical crisis, death in the household).",
      "A tenant owing back rent or at risk of becoming homeless or housing-unstable.",
      "A tenant receiving SNAP, Medicaid, or Unemployment Insurance typically automatically income-qualifies.",
      "A Monroe County tenant of any immigration status (undocumented applicants are eligible)."
    ]
  },

  whatItMeans: {
    en: "The Emergency Rental Assistance Program (ERAP) in New York was created with federal American Rescue Plan Act and Consolidated Appropriations Act funds allocated by the U.S. Treasury. Administered by the NY Office of Temporary and Disability Assistance (OTDA), ERAP has paid more than 3 billion dollars to NY landlords on behalf of tenants since 2021. The program has run in multiple rounds with periodic reopenings as additional federal funds become available. As of 2026, ERAP is still active but funds are limited and may be exhausted for specific rounds. COVERED PAYMENTS: ERAP pays up to 12 months of back rent arrears and up to 3 months of forward rent directly to the landlord. Forward payments require the landlord to accept and apply the funds toward the tenant's account. Utility arrears (electric, gas) up to 12 months can also be covered in some cases. ELIGIBILITY: Household income at or below 80 percent of the Area Median Income for the county. In Monroe County for 2026 that is approximately 70,400 dollars for a family of four (higher for larger households, lower for smaller). Tenants receiving SNAP, Medicaid, Unemployment Insurance, TANF, or certain other means-tested programs are automatically income-qualified. The tenant must have experienced a qualifying hardship since March 13, 2020 (the federal COVID emergency start). Qualifying hardships are broadly defined — job loss, reduced hours, childcare disruption, medical hardship, death in the household, other pandemic-era hardship. Lack of housing stability or risk of homelessness is its own eligibility prong. IMMIGRATION STATUS: ERAP in NY is open to tenants regardless of immigration status — undocumented tenants are eligible. OTDA does not share immigration information with federal immigration authorities for ERAP purposes. APPLICATION: Online at otda.ny.gov/erap or by paper. Required documents: photo ID or alternative identification, proof of income (recent pay stubs, benefits letter, tax return), lease or rent receipt showing rental obligation, landlord contact info and mailing address for payment, proof of hardship (can be self-attested). Processing typically 4 to 12 weeks. EVICTION STAY: One of the most important ERAP features is the automatic eviction stay. Under New York's ERAP statute and administrative rules, an application that is filed before the eviction judgment becomes final halts the eviction case until the application is decided. The landlord is stayed from proceeding. If ERAP pays, the landlord must accept the payment as satisfaction of the rent arrears and cannot pursue eviction for that period. If ERAP denies, the eviction can resume. Tenants facing eviction should file ERAP immediately, before the eviction hearing if possible. A pending ERAP application is a complete defense in housing court for the arrears period covered. LANDLORD PARTICIPATION: Landlords must accept ERAP payments and agree to withdraw the eviction (for covered months) and not raise rent for 1 year after payment. Landlords who refuse ERAP can be sued by the tenant under GBL 349 and/or AG Consumer Frauds. A landlord cannot condition ERAP acceptance on terms beyond what the program allows. ADDITIONAL PROGRAMS beyond ERAP: NY Homeowner Assistance Fund (HAF) for homeowners (separate program, see ny-homeowner-assistance-fund-ny-program). SafetyNet and Temporary Assistance programs operated by Monroe County DHS. Ongoing Section 8 vouchers. Emergency rental programs through United Way 211. For Monroe County applicants, the key contacts are OTDA online or by phone 1-833-452-0096, Monroe County Department of Human Services at (585) 753-6960 for intake help, Catholic Family Center at (585) 262-7100 for navigator support, and Legal Aid Society of Rochester at (585) 232-4090 for legal help with eviction defense during ERAP processing."
  },

  yourRights: {
    en: [
      "A NY tenant at or below 80 percent AMI with COVID-era hardship has the right to apply for ERAP.",
      "A tenant has the right to an automatic eviction stay while the ERAP application is pending.",
      "A tenant of any immigration status has the right to apply.",
      "A landlord cannot refuse ERAP payment for covered rent arrears.",
      "A tenant has the right to use an ERAP application as a complete defense for covered arrears in housing court.",
      "A tenant has the right to free application assistance through Catholic Family Center, 2-1-1, and Monroe County DHS."
    ]
  },

  legalOptions: {
    en: [
      "NY OTDA ERAP at 1-833-452-0096 or otda.ny.gov/erap for applications.",
      "Monroe County Department of Human Services at (585) 753-6960 for local application help.",
      "Catholic Family Center at (585) 262-7100 for free application navigation.",
      "Legal Aid Society of Rochester at (585) 232-4090 for eviction defense and ERAP coordination.",
      "Empire Justice Center at (585) 295-5702 for complex ERAP appeals or landlord refusal cases.",
      "2-1-1 at (585) 442-0220 for general resource connection."
    ]
  },

  example: {
    en: "Amara fell 6,800 dollars behind on rent after losing her retail job during a 2024 downturn. Her Rochester landlord filed for eviction. Amara applied for ERAP the week before her Housing Court date. She brought the ERAP confirmation to court, and the judge stayed the eviction pending the application. ERAP approved 8 weeks later and paid 6,800 dollars directly to the landlord plus 3 months of forward rent. The landlord dismissed the eviction. Amara kept her apartment and secured a new job 2 months later."
  },

  counsel: [
    {
      type: "government",
      name: "NY Office of Temporary and Disability Assistance ERAP",
      focus: "Emergency Rental Assistance applications, processing, appeals",
      qualifier: "Any NY low-income tenant with COVID-era hardship",
      access: "Phone, online portal, paper application",
      outcome: "Back rent payment to landlord, eviction stay during processing",
      phone: "1-833-452-0096",
      url: "https://otda.ny.gov/erap",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "Catholic Family Center",
      focus: "Free ERAP application navigation and family support services",
      qualifier: "Any Monroe County family",
      access: "Phone, in-person appointments",
      outcome: "Application help, document gathering, follow-up advocacy",
      phone: "(585) 262-7100",
      url: "https://www.cfcrochester.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "Legal Aid Society of Rochester",
      focus: "Eviction defense and ERAP coordination for low-income tenants",
      qualifier: "Monroe County tenant at or under 200 percent of poverty",
      access: "Phone intake, emergency intake for active eviction",
      outcome: "Free legal representation in housing court plus ERAP support",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "eviction-process-ny",
    "illegal-eviction-ny",
    "rent-withholding-repair-deduct-ny",
    "section-8-housing-voucher-ny",
    "ny-homeowner-assistance-fund-ny-program"
  ],

  relatedHelpResources: [],

  tags: [
    "NY ERAP",
    "Emergency Rental Assistance",
    "back rent grant",
    "OTDA ERAP",
    "eviction stay ERAP",
    "12 months back rent",
    "Catholic Family Center navigator",
    "80 percent AMI tenant",
    "immigration status eligible",
    "ARPA rental assistance"
  ],

  sources: [
    "https://otda.ny.gov/erap",
    "https://home.treasury.gov/policy-issues/coronavirus/assistance-for-state-local-and-tribal-governments/emergency-rental-assistance-program"
  ],

  lastVerified: "2026-04-20",
  volatility: "high",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
