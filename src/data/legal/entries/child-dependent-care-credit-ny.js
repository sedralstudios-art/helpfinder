export const CHILD_DEPENDENT_CARE_CREDIT_NY = {
  id: "child-dependent-care-credit-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY TAX 606",
  status: "active",

  title: { en: "NY Child and Dependent Care Credit — Tax Credit for Paid Child Care, Daycare, and After-School" },

  summary: {
    en: "The NY Child and Dependent Care Credit refunds part of what a working parent or guardian paid for daycare, after-school care, or dependent adult care. The credit is up to 110 percent of the federal Dependent Care Credit for lower-income filers, scaling down to 20 percent at higher incomes. Claimed on Form IT-216 with documentation of care expenses and provider name/EIN or SSN. Refundable in most cases."
  },

  whoQualifies: {
    en: [
      "A NY resident parent or guardian who paid for care of a child under 13 so the parent could work or look for work.",
      "A parent caring for a dependent of any age with physical or mental disability who cannot care for themselves.",
      "A parent caring for a spouse unable to care for themselves.",
      "A family using daycare, before-school or after-school programs, summer day camp, or in-home care.",
      "A family with at least one wage-earning or self-employed parent (two in a married filing jointly family)."
    ]
  },

  whatItMeans: {
    en: "New York Tax Law Section 606(c) establishes the Child and Dependent Care Credit, a NY state tax credit based on the federal Child and Dependent Care Credit under IRC 21. The credit offsets the cost of care that allows a working parent to earn income. The federal credit is 20 to 35 percent of up to 3,000 dollars of care for one qualifying dependent or 6,000 dollars for two or more, with a maximum federal credit of 1,050 dollars (one child) or 2,100 dollars (two or more). The NY state credit is a percentage of the federal credit, scaled based on NY adjusted gross income. For the lowest-income filers (AGI at or below 25,000), the NY credit is 110 percent of the federal credit — higher than the federal itself. For middle-income filers, 80 percent of federal. For higher-income filers, 20 percent of federal. Above 150,000 AGI, the credit phases out. For a Monroe County family with 2 children in daycare, 40,000 AGI, paying 18,000 dollars per year total in care costs, the federal credit is approximately 2,100 dollars and the NY state credit is approximately 1,890 dollars (90 percent of federal at that income). Total combined tax benefit around 3,990 dollars. Qualifying care: daycare center, in-home babysitter, nanny, before-school or after-school program, summer day camp, adult day care, or in-home care for a disabled dependent. Care must be provided during hours the parent (or both parents in joint filings) is working or looking for work. Overnight camp does NOT qualify (only day camps). A parent in school full-time counts as working for credit purposes. A qualifying dependent is a child under 13 at the end of the tax year, OR any dependent of any age who cannot physically or mentally care for themselves and lives with the filer more than half the year. To claim: collect documentation — monthly daycare invoices, summer camp receipts, in-home caregiver Form W-10 or provider name/address/EIN or SSN. File NY Form IT-216 with the NY tax return, listing each care provider and total amount paid. The provider's tax ID is required — a cash-paid unlicensed caregiver without documentation cannot support a credit. Licensed daycare centers routinely provide year-end receipts with their EIN. In-home caregivers require a W-10 (Dependent Care Provider's Identification and Certification) that lists their name, address, and taxpayer ID. The credit is refundable for families below certain income thresholds (roughly 30,000 dollars AGI) — higher-income families get nonrefundable benefit. A family paying for care with a pre-tax Dependent Care FSA at work (up to 5,000 dollars annually) cannot double-dip — the FSA dollars are already excluded from income and do not count toward the credit-eligible expenses. A family's combined FSA plus credit-eligible expenses cannot exceed 3,000 (one child) or 6,000 (two or more children). Most VITA (Volunteer Income Tax Assistance) sites in Monroe County help families claim this credit for free. The NY Taxation Department also offers free online filing. For working parents with multiple types of care through the year, compiling year-end documents in December rather than waiting until April makes tax filing smoother. Childcare assistance through the NY Child Care Subsidy (CCAP, covered in childcare-assistance-ny) reduces out-of-pocket cost — a family on CCAP typically has minimal cash outlay and therefore minimal credit."
  },

  yourRights: {
    en: [
      "A working parent has the right to the NY Child and Dependent Care Credit for qualifying paid care.",
      "A parent caring for a disabled dependent of any age has the right to the credit.",
      "A lower-income filer has the right to 110 percent of the federal credit amount.",
      "A family has the right to stack employer Dependent Care FSA with the credit up to combined expense caps.",
      "A family has the right to free tax preparation help through VITA for claiming the credit.",
      "A filer has the right to require a W-10 documentation from an in-home caregiver."
    ]
  },

  legalOptions: {
    en: [
      "NY State Department of Taxation and Finance Personal Income Tax line at (518) 457-5181 handles IT-216 questions.",
      "VITA (Volunteer Income Tax Assistance) sites in Monroe County — call 211 Lifeline at (585) 275-5151 for locations.",
      "IRS Child and Dependent Care Credit guidance at (800) 829-1040 or irs.gov/taxtopics/tc602.",
      "Monroe County Department of Human Services Child Care Assistance at (585) 753-6316 for Child Care Subsidy (CCAP) eligibility alongside the tax credit.",
      "AARP Foundation Tax-Aide for seniors and low-income adults — (800) 227-7669 for Rochester-area locations.",
      "Legal Aid Society of Rochester at (585) 232-4090 for tax-related legal issues."
    ]
  },

  example: {
    en: "The Watkins family has two children in daycare (ages 4 and 7 in summer camp). They paid 14,500 dollars total in 2025. Combined income 48,000 AGI. They collected year-end receipts from the daycare center (EIN on the receipt) and the summer camp (EIN on the receipt). They filed a joint NY tax return with federal Form 2441 and NY Form IT-216. Federal credit was approximately 1,800 dollars. NY state credit at 95 percent of federal was approximately 1,710 dollars. Combined tax benefit 3,510 dollars. Because they had NY tax liability of only 1,400 dollars, they got the full state credit as a refund — excess 310 dollars sent as a check."
  },

  counsel: [
    {
      type: "government",
      name: "NY State Department of Taxation and Finance",
      focus: "Child and Dependent Care Credit questions, IT-216 form help",
      qualifier: "Any NY tax filer",
      access: "Phone, website forms, free online filing portal",
      outcome: "Form clarification, filing support, refund processing",
      phone: "(518) 457-5181",
      url: "https://www.tax.ny.gov/pit/credits/child_and_dependent_care_credit.htm",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "VITA Monroe County",
      focus: "Free tax preparation including Child and Dependent Care Credit",
      qualifier: "Household income under approximately 67,000 dollars",
      access: "Phone 211, seasonal appointments",
      outcome: "Free federal and NY tax preparation including IT-216",
      phone: "(585) 275-5151",
      url: "https://www.211rochester.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "empire-state-child-credit-ny",
    "earned-income-tax-credit-ny",
    "childcare-assistance-ny",
    "adoption-tax-credit-ny",
    "wic-program-ny-program"
  ],

  relatedHelpResources: [],

  tags: [
    "Child Dependent Care Credit",
    "CDCC NY",
    "TAX 606(c)",
    "IT-216",
    "daycare tax credit",
    "after school tax credit",
    "summer camp tax credit",
    "dependent care FSA",
    "W-10 caregiver",
    "working parent tax credit"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/TAX/606",
    "https://www.tax.ny.gov/pit/credits/child_and_dependent_care_credit.htm"
  ],

  lastVerified: "2026-04-27",
  factCheckedBy: { tool: "websearch+webfetch", date: "2026-04-27" },
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
