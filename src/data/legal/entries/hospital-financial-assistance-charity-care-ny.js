export const HOSPITAL_FINANCIAL_ASSISTANCE_CHARITY_CARE_NY = {
  id: "hospital-financial-assistance-charity-care-ny",
  category: "healthcare",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY PBH 2807-k",
  status: "active",

  title: { en: "NY Hospital Financial Assistance — Free or Reduced Care for Uninsured and Low-Income Patients" },

  summary: {
    en: "New York Public Health Law Section 2807-k requires every nonprofit and public hospital to offer a financial assistance program for patients who cannot afford the full bill. Income at or under 300 percent of the federal poverty level typically qualifies for free or heavily discounted care. The hospital cannot deny emergency treatment based on inability to pay."
  },

  whoQualifies: {
    en: [
      "A patient treated at any nonprofit hospital in New York, including Strong Memorial, Rochester General, and Highland Hospital in Monroe County.",
      "A patient whose household income is at or below 300 percent of the federal poverty level (roughly 93,000 dollars for a family of four in 2026).",
      "An uninsured patient or a patient whose insurance did not cover a large share of the bill.",
      "A patient who already received treatment and is facing an unpayable bill — retroactive applications are allowed."
    ]
  },

  whatItMeans: {
    en: "New York Public Health Law Section 2807-k (the Hospital Financial Assistance Law) requires every general hospital that receives NY Indigent Care Pool funding to maintain a written financial assistance policy. The policy must apply to emergency and medically necessary care — the hospital cannot deny a patient emergency treatment because of inability to pay under federal EMTALA (42 USC 1395dd) and state PHL 2805-b. Each hospital's policy sets a sliding income scale. The state minimum is to offer 100 percent free care to patients at or below 100 percent of the federal poverty level, and discounted care on a sliding scale up to 300 percent of poverty. Many Monroe County hospitals are more generous: Strong Memorial extends the full discount up to 400 percent of poverty, Rochester General to 350 percent, Highland to 300 percent. Income is calculated by household and can include job income, Social Security, unemployment, and most other cash sources. The hospital must also consider catastrophic medical expenses — a patient with income slightly above the cutoff but facing a bill larger than 10 percent of annual income often qualifies for sliding-scale relief. Application is straightforward. The patient contacts the hospital's Financial Counseling department (separate from billing) and requests a financial assistance application. Required documents include proof of income (recent pay stubs, tax return, benefits letter), proof of household size (marriage certificate, dependent documentation), and information about the medical service. Applications can be submitted before receiving care (pre-authorization) or after the bill has arrived, up to 90 days after the first bill under most hospital policies. Retroactive applications for bills already in collections can sometimes work but are harder. A patient who qualifies at the 100 percent discount level has the bill zeroed out. A patient at the 50 percent level pays half. Any bill still owed is typically set on a no-interest 24-month payment plan. The hospital cannot report unpaid bills to credit bureaus while the application is pending. Under PHL 2807-k, a hospital that denies an eligible patient can be reported to NY Department of Health and can face penalties. The patient has the right to a written denial explanation and can appeal internally. In addition to PHL 2807-k, federal law under IRC 501(r) requires every nonprofit hospital (most hospitals in the U.S.) to have a written Financial Assistance Policy, make it available in plain English and in the common languages of the service area, and post it visibly. A hospital violating IRC 501(r) can lose its tax-exempt status. The Coalition Against Surprise Medical Bills and Community Service Society of NY provide free counselor assistance for patients navigating hospital bills in Monroe County. A patient in collections for an unpaid hospital bill who was never offered financial assistance can sometimes have the bill voided through this process. Collection agencies must follow NY GBL 349 and federal Fair Debt Collection Practices Act when pursuing hospital debt — abusive collection practices (false threats, repeated after-hours calls) are their own violations."
  },

  yourRights: {
    en: [
      "A patient at any NY hospital has the right to request a financial assistance application.",
      "A patient has the right to emergency treatment regardless of ability to pay under EMTALA and PHL 2805-b.",
      "A patient qualifying under 100 percent of poverty has the right to fully free care at any 501(r) hospital.",
      "A patient has the right to a written denial with explanation and an internal appeal.",
      "A patient has the right to a payment plan without interest or credit reporting while the application is pending.",
      "A patient has the right to report an uncooperative hospital to NY Department of Health."
    ]
  },

  legalOptions: {
    en: [
      "Strong Memorial Hospital Financial Counseling at (585) 275-3325 handles applications for URMC patients.",
      "Rochester General Hospital Financial Services at (585) 922-4150 handles Rochester Regional Health patients.",
      "Highland Hospital Patient Financial Counseling at (585) 341-8450 handles Highland patients.",
      "NYS Department of Health Bureau of Healthcare Financial Viability at (518) 402-0979 handles complaints.",
      "Community Service Society of NY Health Helpline at 1-888-614-5400 provides free counseling.",
      "Legal Aid Society of Rochester at (585) 295-5727 represents patients in disputed financial assistance cases."
    ]
  },

  example: {
    en: "Renata was uninsured and went to the Rochester General emergency department for a suspected broken wrist. After treatment and an X-ray, the hospital bill was 4,200 dollars. Renata was a single mother earning 32,000 dollars a year, placing her at 135 percent of poverty for a household of three. She contacted Rochester General Financial Services, submitted three recent pay stubs and a child tax return, and was approved for 100 percent financial assistance. The 4,200 dollar bill was written off in full within 30 days of her application."
  },

  counsel: [
    {
      type: "nonprofit",
      name: "Community Service Society of NY Health Helpline",
      focus: "Free navigator help with hospital bills, financial assistance applications, insurance appeals",
      qualifier: "Any NY resident",
      access: "Phone intake",
      outcome: "Free counseling, application assistance, appeal support",
      phone: "1-888-614-5400",
      url: "https://www.cssny.org/health-helpline",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "NYS Department of Health Bureau of Healthcare Financial Viability",
      focus: "Hospital financial assistance policy compliance, complaint investigation",
      qualifier: "Any NY patient",
      access: "Phone, written complaint",
      outcome: "Investigation, hospital compliance enforcement",
      phone: "(518) 402-0979",
      url: "https://www.health.ny.gov/facilities/hospital/financial_assistance",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "medicaid-ny",
    "medical-debt-credit-report-ny",
    "surprise-medical-bills-ny",
    "ny-state-of-health-marketplace-ny",
    "debt-collection-harassment-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "hospital financial assistance",
    "PBH 2807-k",
    "charity care NY",
    "uninsured hospital bill",
    "hospital write-off",
    "IRC 501(r)",
    "Strong Memorial financial aid",
    "Rochester General charity care",
    "Highland financial counseling",
    "EMTALA emergency care"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/PBH/2807-K",
    "https://www.health.ny.gov/facilities/hospital/financial_assistance"
  ],

  lastVerified: "2026-04-20",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
