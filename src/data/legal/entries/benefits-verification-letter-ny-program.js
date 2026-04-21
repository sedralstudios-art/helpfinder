export const BENEFITS_VERIFICATION_LETTER_NY = {
  id: "benefits-verification-letter-ny-program",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "agency-program",
  status: "active",

  title: { en: "NY Benefits Verification Letter — How to Prove Current Receipt of SNAP, Medicaid, TA, or Social Security" },

  summary: {
    en: "A benefits verification letter is an official document from the agency administering a benefit that confirms a person is receiving that benefit — and usually the amount. Many third parties (landlords, courts, schools, utility assistance programs, phone discount programs, other benefit applications) require one. For NY state benefits (SNAP, Temporary Assistance, Medicaid) the myBenefits portal at mybenefits.ny.gov is the fastest path. For Social Security benefits (SSI, SSDI, retirement, Medicare) the SSA my Social Security account generates a letter instantly."
  },

  whoQualifies: {
    en: [
      "A NY resident currently receiving SNAP, Temporary Assistance, Safety Net Assistance, HEAP, or Medicaid who needs third-party proof of benefits.",
      "A person receiving SSI, SSDI, or Social Security retirement who needs a benefit verification letter for housing, court, or another program.",
      "A Medicare beneficiary who needs proof of enrollment for a supplemental coverage decision.",
      "A parent applying for a child care subsidy, school meals, or similar program that requires proof of SNAP or TA receipt.",
      "An applicant for Lifeline phone discount or utility assistance that requires documented program enrollment."
    ]
  },

  whatItMeans: {
    en: "A benefits verification letter is the document third parties accept as official proof a person receives a benefit. The letter typically shows the program name, the benefit amount, the coverage dates, and whoever is on the case. Verification is issued by the agency that pays the benefit, not by the third party asking for it. For NY Office of Temporary and Disability Assistance (OTDA) programs — SNAP, Temporary Assistance, and Safety Net Assistance — the myBenefits portal at mybenefits.ny.gov is the standard source. A recipient who created an NY.gov account can sign in, view case details, and download the most recent approval or budget notice. The portal also lets recipients submit verification documents for the case, report changes, and recertify benefits. NY language assistance is available on the portal in 13 languages including Spanish, Arabic, Chinese, Russian, Haitian Creole, Korean, Italian, Bengali, Yiddish, Polish, French, and Urdu. For Medicaid, there are two tracks. MAGI Medicaid (the Modified Adjusted Gross Income pathway, covering most adults under 65 and children) is administered through NY State of Health at nystateofhealth.ny.gov — recipients log in there for case documents. Non-MAGI Medicaid (covering seniors and the disabled) runs through the local social services district, so Monroe County Department of Human Services issues those letters. For Social Security benefits (SSI, SSDI, retirement, Medicare), the Social Security Administration provides an instant benefit verification letter through my Social Security at ssa.gov/manage-benefits/get-benefit-letter. The letter shows benefit type, monthly amount, and Medicare coverage status. It is often referred to as a 'proof of income letter.' The SSA automated phone line at 1-800-772-1213 (TTY 1-800-325-0778) is available 24 hours a day — the prompt to request proof of income is spoken as 'proof of income' after the greeting. For the NY State Supplement Program (SSP) — the state top-up for SSI recipients — verification is requested through the mySSP portal at otda.ny.gov/programs/ssp or by calling 1-855-488-0541. Letters are mailed to the address on file. Walk-in and phone verification from the local DSS is the fallback when online access is not available. Monroe County Department of Human Services at 111 Westfall Road, Rochester can provide printed verification during business hours, often same-day. An approval notice, EBT card, or Medicaid card is sometimes accepted as informal proof, but most programs require the dated official letter. For mobile document workflow the NYDocSubmit app (Apple App Store and Google Play) lets recipients photograph and upload verification documents directly to the local district; the app also lets the district return letters electronically in some jurisdictions. When a third party flatly rejects the portal-downloaded document, the recipient can request an original letter on agency letterhead — OTDA programs via the local DSS, Social Security via SSA, and NY State of Health via the NYSOH customer service line at (855) 355-5777. Legal Aid Society of Rochester and LawNY can help a recipient whose verification is blocked or whose case is wrongly closed."
  },

  yourRights: {
    en: [
      "A NY benefits recipient has the right to request written verification of the benefit from the agency that administers it.",
      "A SNAP, TA, or Medicaid recipient has the right to access case information and notices at any time through mybenefits.ny.gov.",
      "A Social Security beneficiary has the right to an immediate benefit verification letter through my Social Security at ssa.gov.",
      "A recipient has the right to request a printed letter from the local social services district when online access is not possible.",
      "A recipient has the right to language assistance when requesting or reading a verification letter — NY myBenefits supports 13 languages and SSA supports Spanish by default.",
      "A third party cannot require a format of proof the agency does not issue — the agency's standard letter is legally sufficient."
    ]
  },

  legalOptions: {
    en: [
      "mybenefits.ny.gov — NY OTDA portal for SNAP, Temporary Assistance, and Medicaid case details, approval notices, and verification document upload.",
      "ssa.gov/manage-benefits/get-benefit-letter — SSA instant benefit letter for SSI, SSDI, retirement, and Medicare; phone line 1-800-772-1213 (TTY 1-800-325-0778) 24 hours.",
      "nystateofhealth.ny.gov or NYSOH customer service at (855) 355-5777 for MAGI Medicaid enrollment verification.",
      "otda.ny.gov/programs/ssp or (855) 488-0541 for NY State Supplement Program verification letters.",
      "Monroe County Department of Human Services at (585) 753-6960 or 111 Westfall Road, Rochester — walk-in and phone verification for SNAP, TA, and non-MAGI Medicaid.",
      "NYDocSubmit app (Apple App Store, Google Play) for mobile document submission to local social services districts.",
      "Legal Aid Society of Rochester at (585) 232-4090 for recipients whose verification is blocked or case is wrongly closed."
    ]
  },

  example: {
    en: "Amara is a Rochester parent receiving SNAP. Her child care subsidy provider asked for written proof of current SNAP enrollment. She signed into mybenefits.ny.gov, downloaded the most recent approval notice showing the active case, and printed a copy. The subsidy office accepted it. Later, when her landlord asked for proof of income for a lease renewal, Amara used ssa.gov/manage-benefits/get-benefit-letter to generate an SSDI verification letter in under a minute. Both documents were free and came from the agency that issues the benefit, which is what the landlord and subsidy office required."
  },

  counsel: [
    {
      type: "government",
      name: "NY Office of Temporary and Disability Assistance — myBenefits Support",
      focus: "SNAP, Temporary Assistance, and Medicaid case access and verification",
      qualifier: "Any NY recipient of OTDA-administered benefits",
      access: "Web portal, phone",
      outcome: "Downloaded verification documents or mailed letters",
      phone: "(800) 342-3009",
      url: "https://mybenefits.ny.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "Social Security Administration Benefit Verification",
      focus: "SSI, SSDI, retirement, Medicare benefit letters",
      qualifier: "Any Social Security beneficiary",
      access: "Web account, automated phone",
      outcome: "Instant PDF letter or mailed letter",
      phone: "(800) 772-1213",
      url: "https://www.ssa.gov/manage-benefits/get-benefit-letter",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "Legal Aid Society of Rochester",
      focus: "Benefits documentation issues, wrongful case closures",
      qualifier: "Low-income Monroe County resident",
      access: "Phone intake",
      outcome: "Free legal representation",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "snap-rights-ny",
    "medicaid-ny",
    "ssi-disability-ny",
    "ssdi-ny",
    "social-security-retirement-ny",
    "monroe-county-dss-overview-ny-mon-program"
  ],

  relatedHelpResources: [],

  tags: [
    "NY benefits verification letter",
    "proof of SNAP",
    "proof of Medicaid",
    "SSA benefit letter",
    "myBenefits NY portal",
    "my Social Security letter",
    "NY State Supplement Program verification",
    "NYDocSubmit app",
    "proof of income benefits",
    "landlord proof of benefits"
  ],

  sources: [
    "https://mybenefits.ny.gov",
    "https://www.ssa.gov/manage-benefits/get-benefit-letter",
    "https://otda.ny.gov/programs/ssp/",
    "https://otda.ny.gov/programs/nydocsubmit/"
  ],

  lastVerified: "2026-04-21",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
