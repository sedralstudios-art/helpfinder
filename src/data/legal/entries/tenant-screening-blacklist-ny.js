export const TENANT_SCREENING_BLACKLIST_NY = {
  id: "tenant-screening-blacklist-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY CVP 213-B",
  status: "active",

  title: { en: "Tenant Screening and Blacklists — What Landlords Can and Cannot Use Against You in New York" },

  summary: {
    en: "Many tenants are denied housing because their name appears in a tenant screening report — often based on a past eviction case that was dismissed, an old debt, or even a case filed against a different person with a similar name. New York passed landmark tenant screening reforms in 2019 that limit what landlords can consider and give tenants the right to see and dispute the report."
  },

  whoQualifies: {
    en: [
      "Any person who has been denied a rental based on a tenant screening or background report.",
      "Any person who suspects their name is on a 'tenant blacklist' because of a past housing court case — even one that was dismissed or settled.",
      "Any person who has been asked to pay excessive application fees."
    ]
  },

  whatItMeans: {
    en: "Tenant screening companies compile reports on prospective tenants using court records, credit reports, and eviction histories. Before the 2019 HSTPA reforms, these reports often included cases that were dismissed, cases where the tenant won, and cases that were sealed — creating a 'blacklist' effect that punished tenants for exercising their legal rights. Under the 2019 reforms and CPLR § 213-b, housing court records that resulted in a favorable outcome for the tenant (dismissal, withdrawal, settlement with no finding of liability) are sealed and cannot be reported by screening companies. Landlords in New York are also limited in what application fees they can charge — the total fee for a background check and credit check is capped (check the current cap at hcr.ny.gov, as the amount is set by regulation and can change). The landlord must provide a copy of any screening report used to deny the application if the tenant requests it. Under the Fair Credit Reporting Act, if a tenant is denied based on a screening report, the landlord must provide an adverse action notice identifying the screening company, and the tenant has the right to dispute inaccurate information with that company."
  },

  yourRights: {
    en: [
      "Housing court cases that ended favorably for the tenant (dismissed, withdrawn, settled) are sealed and cannot appear on screening reports.",
      "Application fees for background and credit checks are capped by state regulation.",
      "If denied based on a screening report, the tenant has the right to a copy of the report and the name of the screening company.",
      "Inaccurate information on a screening report can be disputed with the screening company, which must investigate within 30 days.",
      "A landlord cannot use a dismissed or sealed housing court case as a reason to deny housing.",
      "Screening companies that report sealed cases are violating state law."
    ]
  },

  legalOptions: {
    en: [
      "If denied housing based on a screening report, requesting a copy of the report from the landlord or screening company is the first step. The adverse action notice must identify which company produced the report.",
      "Errors on screening reports can be disputed directly with the screening company. Under the FCRA, they must investigate within 30 days.",
      "If a sealed housing court case appears on a screening report, a complaint can be filed with the NY Attorney General at (800) 771-7755 and with the screening company.",
      "Free legal help with tenant screening disputes is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "The NY Homes and Community Renewal (HCR) office provides information on tenant screening fee caps and tenant rights at hcr.ny.gov."
    ]
  },

  example: {
    en: "A tenant in Rochester was taken to housing court by a previous landlord over a rent dispute. The case was dismissed after the tenant proved the rent was paid. Two years later, she applies for a new apartment and is denied. She requests the screening report and finds the dismissed case listed as an 'eviction filing.' She disputes it with the screening company, citing the 2019 sealing law. The company removes it within three weeks. She reapplies and is approved."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Tenant screening disputes, sealed records, housing denial",
      qualifier: "Low-income residents of Monroe and surrounding counties",
      access: "Phone intake",
      outcome: "Direct representation or advice",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "housing-discrimination-ny",
    "eviction-process-ny",
    "credit-report-dispute-ny",
    "security-deposit-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "tenant screening",
    "tenant blacklist",
    "denied rental",
    "eviction record",
    "screening report",
    "background check housing",
    "sealed eviction",
    "application fee cap",
    "FCRA housing",
    "adverse action",
    "dismissed case showing"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/CVP/213-B",
    "https://hcr.ny.gov"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
