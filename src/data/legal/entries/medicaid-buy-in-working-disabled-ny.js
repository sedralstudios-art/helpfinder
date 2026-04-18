export const MEDICAID_BUY_IN_WORKING_DISABLED_NY = {
  id: "medicaid-buy-in-working-disabled-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY SOS 366",
  status: "active",

  title: { en: "Medicaid Buy-In for Working People With Disabilities — Keeping Coverage While Earning More" },

  summary: {
    en: "MBI-WPD lets a person with a disability work and earn above regular Medicaid income limits while keeping Medicaid coverage. The person pays a modest premium based on income. Earnings up to about $75,000 are allowed. Resource limits are higher than regular Medicaid. This program is critical for people whose employment would otherwise cost them Medicaid-funded home care or medications."
  },

  whoQualifies: {
    en: [
      "New York residents age 16-64 with a disability that meets SSA's disability standard (whether or not currently on SSI or SSDI).",
      "Working at least some hours — proof of W-2, self-employment income, or other earnings.",
      "Net earned income (after exclusions) up to about 250 percent of the federal poverty level.",
      "Resources up to $20,000 for an individual, $30,000 for a couple — higher than standard Medicaid resource limits.",
      "Not currently on Medicaid through another pathway like SSI or adult-without-dependents."
    ]
  },

  whatItMeans: {
    en: "The Medicaid Buy-In for Working People with Disabilities (MBI-WPD), authorized under New York Social Services Law Section 366(1)(a)(11) and implemented through 18 NYCRR Part 360, is a state pathway to Medicaid for people with disabilities who work. Regular Medicaid for adults with disabilities has strict income and resource limits — typically less than $20,000 in assets and income well below $20,000 per year for an individual. People on SSDI or private disability income often earn or save above those limits, or want to work and earn more, but lose Medicaid if they do. MBI-WPD solves this: the participant can earn up to about $75,000 (after exclusions) and have up to $20,000 ($30,000 for a couple) in non-exempt resources. In exchange, the participant pays a monthly premium based on countable income — the premium is capped at 7.5 percent of countable income over 150 percent of the federal poverty level, and can be $0 for many participants. The coverage is full Medicaid — medical, dental, vision, mental health, prescription drugs, home care, and long-term services and supports. Critically, people on MBI-WPD can access Consumer Directed Personal Assistance Program (CDPAP) and other Medicaid home care. MBI-WPD has two groups: Basic (working but at or below 250 percent FPL) and Medical Improvement (for participants whose medical condition improved enough that they might lose SSDI, but who still have a disability and want to keep working). Applications are through the county DSS or through the NY State of Health marketplace. People already on SSI or SSDI can transition — they keep SSI resource exemption rules during the transition if applicable. The person must not have dependent children that would trigger a different Medicaid category. NY also has ABLE accounts (separate topic) that work alongside MBI-WPD by excluding disability-related savings from resource counts."
  },

  yourRights: {
    en: [
      "A New York resident with a disability who is working has the right to apply for MBI-WPD if eligibility criteria are met.",
      "A participant has the right to keep Medicaid coverage while earning more than regular Medicaid allows.",
      "A participant has the right to an ABLE account alongside MBI-WPD for additional savings without losing coverage.",
      "A participant denied for MBI-WPD has the right to a fair hearing (see fair-hearing-ny entry).",
      "A participant has the right to premium reductions based on changes in income.",
      "A participant can transition off SSI or regular Medicaid into MBI-WPD without losing continuity of care."
    ]
  },

  legalOptions: {
    en: [
      "For applications in Monroe County, contact DSS at (585) 753-6010.",
      "The NY State Department of Health MBI-WPD page provides program rules and forms at health.ny.gov.",
      "Center for Disability Rights at (585) 546-7510 helps individuals navigate MBI-WPD and related work-incentive programs.",
      "Work Incentives Planning and Assistance (WIPA) counselors — SSA-funded — help SSDI and SSI beneficiaries understand how work affects benefits. Monroe County WIPA through Starbridge at (585) 546-1700.",
      "ACCES-VR (Adult Career and Continuing Education Services — Vocational Rehabilitation) supports employment and often covers costs MBI-WPD would not.",
      "For a denial or premium dispute, a fair hearing can be requested at otda.ny.gov or (800) 342-3334."
    ]
  },

  example: {
    en: "A Rochester resident with a spinal cord injury received Medicaid home care through Consumer Directed Personal Assistance (CDPAP) while collecting SSDI. She accepted a part-time job paying $24 per hour — her combined SSDI and earnings exceeded regular Medicaid's income limit, threatening her CDPAP services. A WIPA counselor walked her through MBI-WPD. She enrolled and paid a small monthly premium based on her income. She kept full Medicaid coverage and her CDPAP hours unchanged. Her net take-home increased substantially without losing care."
  },

  counsel: [
    {
      type: "free",
      name: "Starbridge — Work Incentives Planning and Assistance (WIPA)",
      focus: "SSDI and SSI work incentives, MBI-WPD navigation, benefits planning",
      qualifier: "Adults with disabilities receiving SSDI or SSI in Monroe County",
      access: "Phone at (585) 546-1700",
      outcome: "Individualized benefits planning, MBI-WPD applications, ticket-to-work navigation",
      phone: "(585) 546-1700",
      url: "https://www.starbridgeinc.org",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "nonprofit",
      name: "Center for Disability Rights",
      focus: "MBI-WPD, CDPAP, home care, independent living for adults with disabilities",
      qualifier: "People with disabilities in the Rochester area",
      access: "Phone at (585) 546-7510",
      outcome: "Program navigation, peer support, advocacy",
      phone: "(585) 546-7510",
      url: "https://www.cdrnys.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "medicaid-ny",
    "medicaid-home-care-ny",
    "ssdi-denial-appeal-ny",
    "able-account-disability-savings-ny",
    "acces-vr-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "MBI-WPD",
    "Medicaid Buy-In",
    "Medicaid working disabled",
    "work while on Medicaid",
    "SSDI working",
    "CDPAP working",
    "disability work incentive",
    "keep Medicaid earning more",
    "Medicaid premium",
    "250 FPL"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/SOS/366",
    "https://www.health.ny.gov/health_care/medicaid/program/buy_in/"
  ],

  lastVerified: "2026-04-18",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
