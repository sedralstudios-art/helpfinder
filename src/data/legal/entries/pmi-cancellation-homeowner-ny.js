export const PMI_CANCELLATION_HOMEOWNER_NY = {
  id: "pmi-cancellation-homeowner-ny",
  category: "housing",
  tier: "federal",
  jurisdiction: "us-fed",
  authorityType: "federal-statute",
  primaryStatute: "12 USC 4901",
  status: "active",

  title: { en: "Cancel Private Mortgage Insurance — Homeowner Right at 80 Percent Loan-to-Value" },

  summary: {
    en: "The federal Homeowners Protection Act requires a mortgage servicer to cancel Private Mortgage Insurance (PMI) when the homeowner's loan balance reaches 80 percent of the original home value, if requested, and automatically at 78 percent. New York Banking Law adds notification duties. Cancellation typically saves 100 to 250 dollars a month. A separate rule for FHA loans (MIP) is more restrictive."
  },

  whoQualifies: {
    en: [
      "Any NY homeowner with a conventional mortgage (Fannie Mae or Freddie Mac backed) who pays PMI.",
      "A homeowner whose loan balance is at or near 80 percent of the original home value.",
      "A homeowner whose home has appreciated significantly, making the loan-to-value ratio lower.",
      "A homeowner with an FHA loan (Mortgage Insurance Premium MIP, different cancellation rules).",
      "A homeowner who refinanced and now wants to cancel PMI on the new loan."
    ]
  },

  whatItMeans: {
    en: "Private Mortgage Insurance (PMI) is an insurance policy that a conventional mortgage lender requires when the homeowner put less than 20 percent down at purchase. PMI protects the lender — not the homeowner — from loss if the borrower defaults. PMI premiums typically run 0.5 to 1.5 percent of the original loan amount per year, charged monthly alongside the mortgage payment. For a 240,000 dollar loan that means 100 to 300 dollars per month. Over a 30-year loan if PMI stayed active the full term, the cost could reach 40,000 to 80,000 dollars. Federal Homeowners Protection Act (HPA) at 12 USC 4901 gives homeowners two ways to cancel. BORROWER-REQUESTED CANCELLATION: when the loan balance is scheduled to reach 80 percent of the original home value (or the loan is at that point based on actual payments and appreciation), the homeowner can write to the servicer requesting cancellation. The servicer must cancel as long as the homeowner is current on payments, has no second liens, and the home value has not declined below the original purchase price. Some servicers require a current appraisal at the homeowner's expense (typically 400 to 600 dollars) to confirm value — this is optional when using the original purchase price but required if the homeowner claims current appreciated value. AUTOMATIC TERMINATION: when the loan balance would reach 78 percent of the original home value (on the normal payment schedule), the servicer must cancel PMI automatically without any request. FINAL TERMINATION: at the midpoint of the loan term (year 15 of a 30-year loan), the servicer must cancel PMI if the homeowner is current, regardless of loan-to-value ratio. New York Banking Law Section 245-a adds state-level notification duties. NY servicers must send the homeowner an annual statement showing the current PMI premium, the date when balance will reach 80 percent based on scheduled payments, the date of automatic termination at 78 percent, and instructions for requesting earlier cancellation. If the servicer fails to cancel when required, the homeowner is entitled to refunds of all PMI premiums paid after the cancellation date plus interest, and the homeowner can sue under HPA 12 USC 4907. Home appreciation can accelerate cancellation. A Monroe County home purchased for 220,000 dollars in 2020 with a 200,000 dollar loan (91 percent LTV at purchase) might be worth 320,000 dollars in 2026 with a loan balance of 175,000 dollars. The current LTV is 55 percent — well below 80 — so the homeowner can request cancellation even though the original schedule would not have reached 80 percent for several more years. This requires an appraisal to prove current value. For FHA loans (mortgages insured by the Federal Housing Administration), the rules are different. FHA MIP has two parts — an upfront premium paid at closing and an annual premium paid monthly. For FHA loans originated after June 3, 2013 with less than 10 percent down, MIP is required for the life of the loan — it never cancels except by refinancing out of the FHA loan into a conventional loan. For FHA loans with 10 percent or more down, MIP cancels after 11 years. This restrictive FHA rule is why many FHA borrowers refinance into conventional once they have 20 percent equity. VA loans have no mortgage insurance. USDA loans have an annual guarantee fee similar to PMI that cancels at 80 percent LTV. An HPA violation claim goes to the Consumer Financial Protection Bureau at (855) 411-2372 or a private lawsuit under 12 USC 4907. Class actions against servicers for PMI overcharges have resulted in substantial settlements. The homeowner should keep records of every month's mortgage payment showing the PMI premium charged, and the date the homeowner first requested cancellation."
  },

  yourRights: {
    en: [
      "A conventional mortgage homeowner has the right to PMI cancellation at 80 percent LTV under HPA.",
      "A homeowner has the right to automatic PMI termination at 78 percent LTV.",
      "A homeowner has the right to final PMI termination at the midpoint of the loan regardless of LTV.",
      "A homeowner has the right to annual PMI disclosure from the servicer under BNK 245-a.",
      "A homeowner whose home has appreciated has the right to request cancellation based on current value (usually requires paid appraisal).",
      "A homeowner with an HPA violation has the right to refund of improperly charged PMI plus damages under 12 USC 4907."
    ]
  },

  legalOptions: {
    en: [
      "Consumer Financial Protection Bureau at (855) 411-2372 handles federal HPA complaints against servicers.",
      "NY Department of Financial Services at (800) 342-3736 handles NY state-level PMI complaints.",
      "For private lawsuits, Monroe County Bar Association Lawyer Referral at (585) 546-2130 refers to consumer protection attorneys.",
      "Legal Aid Society of Rochester at (585) 232-4090 represents low-income homeowners in PMI disputes.",
      "For appraisal referrals, any NY-licensed residential appraiser in the Monroe County Multiple Listing Service.",
      "Federal Housing Administration at (800) 225-5342 for FHA loan-specific MIP questions."
    ]
  },

  example: {
    en: "Ramon bought a 250,000 dollar home in Penfield in 2020 with a 225,000 dollar conventional loan (10 percent down). He paid 210 dollars per month in PMI. By 2026 his loan balance was 195,000 dollars and the home was worth 345,000 dollars (current LTV 57 percent). He paid 500 dollars for an appraisal and wrote to his servicer requesting PMI cancellation. The servicer reviewed the appraisal, confirmed all payments were current, and canceled PMI 45 days later. Ramon's monthly payment dropped by 210 dollars. Over the remaining loan term this saves approximately 45,000 dollars."
  },

  counsel: [
    {
      type: "government",
      name: "Consumer Financial Protection Bureau",
      focus: "Homeowners Protection Act (HPA) enforcement, PMI complaints",
      qualifier: "Any U.S. homeowner",
      access: "Phone, online complaint portal",
      outcome: "Complaint routing to servicer, enforcement action for patterns",
      phone: "(855) 411-2372",
      url: "https://www.consumerfinance.gov/ask-cfpb/what-is-private-mortgage-insurance-pmi-en-122",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "NY Department of Financial Services",
      focus: "NY-level PMI disclosure and cancellation complaints",
      qualifier: "Any NY mortgage consumer",
      access: "Phone, online complaint portal",
      outcome: "Investigation, servicer compliance",
      phone: "(800) 342-3736",
      url: "https://www.dfs.ny.gov/complaint",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "force-placed-homeowner-insurance-ny",
    "mortgage-servicer-rules-ny",
    "mortgage-recording-tax-closing-cost-ny",
    "cema-mortgage-refinance-savings-ny",
    "ny-homeowner-assistance-fund-ny-program"
  ],

  relatedHelpResources: [],

  tags: [
    "PMI cancellation",
    "Homeowners Protection Act",
    "12 USC 4901",
    "BNK 245-a",
    "80 percent LTV",
    "78 percent automatic",
    "FHA MIP",
    "mortgage insurance save",
    "home appreciation PMI",
    "conventional loan cancel"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/12/4901",
    "https://www.consumerfinance.gov/ask-cfpb/when-can-i-remove-private-mortgage-insurance-pmi-from-my-loan-en-202"
  ],

  lastVerified: "2026-04-20",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
