export const HOUSING_DISCRIMINATION_NY = {
  id: "housing-discrimination-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Housing Discrimination — Illegal Reasons a Landlord Can Reject You in New York" },

  summary: {
    en: "In New York, landlords cannot refuse to rent to someone based on race, color, national origin, religion, sex, familial status (having children), disability, age, marital status, sexual orientation, gender identity, military status, source of income (including Section 8 vouchers), or domestic violence victim status. Source-of-income discrimination — refusing to accept vouchers — is one of the most common violations in Monroe County."
  },

  whoQualifies: {
    en: [
      "Any person who has been denied housing, treated differently, or harassed by a landlord based on a protected characteristic.",
      "Any person whose Section 8 voucher, VASH voucher, or other lawful source of income was rejected by a landlord.",
      "Any person told 'no children,' 'no families,' or 'adults only' for housing that is not legally age-restricted.",
      "Any person denied a reasonable accommodation for a disability (see the disability housing accommodation entry)."
    ]
  },

  whatItMeans: {
    en: "The Fair Housing Act (federal), the New York State Human Rights Law (Executive Law § 296), and local ordinances all prohibit housing discrimination. In New York, the protected categories are broader than federal law — they include source of income, sexual orientation, gender identity, age, and marital status. Source-of-income discrimination means a landlord cannot refuse to rent to someone simply because they plan to pay with a Section 8 voucher, a VASH voucher, FHEPS, or any other form of government rental assistance. This is one of the most common violations in the Rochester area. Familial status discrimination means a landlord cannot refuse to rent to families with children (except in legitimate senior housing). Disability discrimination means a landlord must provide reasonable accommodations and allow reasonable modifications. The NY Division of Human Rights (DHR) investigates housing discrimination complaints. A complaint must be filed within 1 year of the discriminatory act for DHR, or within 2 years for a federal Fair Housing Act complaint with HUD."
  },

  yourRights: {
    en: [
      "A landlord cannot refuse to rent based on any protected characteristic — including source of income (vouchers).",
      "A landlord cannot advertise 'no Section 8' or 'no vouchers' — that is itself a violation.",
      "A landlord cannot charge a higher rent or deposit because of a protected characteristic.",
      "Families with children cannot be steered to certain units or floors unless the building is legally age-restricted senior housing.",
      "A complaint can be filed with DHR (within 1 year) or HUD (within 1 year for federal claims).",
      "Retaliation for filing a discrimination complaint is illegal."
    ]
  },

  legalOptions: {
    en: [
      "A housing discrimination complaint can be filed with the NY Division of Human Rights (DHR) at (888) 392-3644 or online at dhr.ny.gov. The complaint must be filed within 1 year of the discriminatory act.",
      "A complaint can also be filed with HUD (US Dept of Housing and Urban Development) at (800) 669-9777 or online at hud.gov. HUD complaints must be filed within 1 year.",
      "Free legal help for housing discrimination in Monroe County is available through Legal Aid Society of Rochester at (585) 232-4090 and through the Empire Justice Center at (585) 454-4060.",
      "Testing organizations (which send matched testers to see if landlords treat people differently based on protected characteristics) operate in Monroe County. Evidence from testing can support a discrimination claim.",
      "Remedies for housing discrimination include: the right to the housing, compensatory damages, punitive damages, attorney fees, and injunctive relief."
    ]
  },

  example: {
    en: "A single mother with a Section 8 voucher finds a suitable apartment in Irondequoit. The landlord says the apartment is available, but when she mentions the voucher, the landlord says he does not accept Section 8. She files a complaint with DHR citing source-of-income discrimination under Executive Law § 296. DHR investigates and finds probable cause. The case settles with the landlord agreeing to accept the voucher, paying compensatory damages, and attending fair housing training."
  },

  counsel: [
    {
      type: "free",
      name: "NY Division of Human Rights (DHR)",
      focus: "Housing discrimination complaints — all protected categories",
      qualifier: "Any person in New York",
      access: "Phone or online",
      outcome: "Investigation, hearing, and enforcement",
      phone: "(888) 392-3644",
      url: "https://dhr.ny.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Housing discrimination, source-of-income, voucher denial",
      qualifier: "Low-income residents of Monroe and surrounding counties",
      access: "Phone intake",
      outcome: "Direct representation or advice",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "HUD — Fair Housing Complaint",
      focus: "Federal housing discrimination complaints",
      qualifier: "Any person in the US",
      access: "Phone or online",
      outcome: "Investigation and enforcement",
      phone: "(800) 669-9777",
      url: "https://www.hud.gov/program_offices/fair_housing_equal_opp/online-complaint",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "disability-housing-accommodation-ny",
    "eviction-process-ny",
    "security-deposit-ny",
    "rent-increase-lease-renewal-ny",
    "section-8-housing-voucher-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "housing discrimination",
    "source of income",
    "Section 8 discrimination",
    "voucher rejected",
    "no Section 8",
    "familial status",
    "families with children",
    "fair housing",
    "DHR complaint",
    "HUD complaint",
    "landlord discrimination",
    "race discrimination housing",
    "disability housing",
    "LGBTQ housing"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/EXC/296",
    "https://www.hud.gov/program_offices/fair_housing_equal_opp",
    "https://dhr.ny.gov"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
