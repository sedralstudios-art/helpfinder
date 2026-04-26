export const IRS_OFFER_IN_COMPROMISE_NY = {
  id: "irs-offer-in-compromise-ny",
  category: "consumer",
  tier: "federal",
  jurisdiction: "us-ny",
  authorityType: "federal-statute",
  primaryStatute: "26 USC 7122",
  status: "active",

  title: { en: "IRS Offer in Compromise — Settling Federal Tax Debt for Less Than Owed" },

  summary: {
    en: "An Offer in Compromise (OIC) is a formal agreement that lets a taxpayer settle federal tax debt for less than the full amount when paying the full amount would cause financial hardship. The IRS accepts about a third of submitted offers. Filing requires detailed financial disclosure and an application fee (which is waived for low-income filers). Free help is available — avoid paid companies advertising pennies-on-the-dollar deals."
  },

  whoQualifies: {
    en: [
      "Any taxpayer with federal tax debt who cannot pay the full amount without financial hardship.",
      "Taxpayers whose income and assets are insufficient to pay the debt over the remaining collection period (generally 10 years).",
      "Taxpayers with doubt as to liability (disputing whether the assessment is correct).",
      "Taxpayers who paid the debt but claim it exceeds what should have been owed (effective tax administration)."
    ]
  },

  whatItMeans: {
    en: "Under Internal Revenue Code Section 7122 (26 USC 7122), the IRS can compromise a tax liability for less than the full amount in three circumstances: doubt as to collectibility (the taxpayer cannot reasonably pay the full amount), doubt as to liability (there is a genuine dispute about whether the tax is actually owed), or effective tax administration (paying in full would be inequitable). Doubt as to collectibility is the most common basis. The IRS calculates reasonable collection potential (RCP): the value of the taxpayer's assets plus expected future income over the remaining collection statute period (typically up to 24 months for a lump-sum offer, 24 months for a periodic payment offer). The offer amount must equal or exceed the RCP. Form 656 is the application, accompanied by Form 433-A (OIC) or 433-B (OIC) for financial disclosure. An application fee is required and is waived for filers below 250 percent of the federal poverty level. The current fee amount is published with Form 656 at irs.gov/payments/offer-in-compromise. An initial payment toward the offer is also required with the application. While the offer is pending, collection activity is suspended but interest continues to accrue. The IRS typically takes six months to a year to decide. The acceptance rate is about 30-40 percent. If accepted, the taxpayer must file returns and pay all taxes timely for five years; missing any obligation defaults the offer and the full debt comes back. Major pitfall: paid tax-resolution companies advertise aggressive settlements that rarely match what the IRS will actually accept. Many charge thousands up front and deliver nothing. Free or low-cost representation is available through Low Income Taxpayer Clinics (LITCs)."
  },

  yourRights: {
    en: [
      "Any taxpayer has the right to submit an OIC application under 26 USC 7122.",
      "A taxpayer below 250 percent of the federal poverty level has the right to a fee waiver for the application.",
      "A taxpayer has the right to know the IRS's calculation of reasonable collection potential.",
      "A taxpayer has the right to appeal an OIC denial within 30 days.",
      "A taxpayer has the right to free or low-cost representation through a Low Income Taxpayer Clinic.",
      "The IRS must halt most collection activity (levies, new garnishments) while a pending OIC is under review."
    ]
  },

  legalOptions: {
    en: [
      "Before applying, use the IRS Offer in Compromise Pre-Qualifier at irs.gov/offer-in-compromise to estimate whether an OIC is viable.",
      "Form 656 (application) and Form 433-A (OIC) or 433-B (OIC) (financial disclosure) are required.",
      "The Low Income Taxpayer Clinic at Legal Aid Society of Rochester serves Monroe County — call (585) 232-4090 and ask for the LITC.",
      "Empire Justice Center at (585) 454-4060 also handles tax matters for low-income residents.",
      "For a denial, file Form 13711 (Request for Appeal) within 30 days.",
      "Paid tax-resolution companies often do not deliver what they advertise. The FTC and NY AG have sued multiple such companies — verify claims before signing.",
      "IRS help for individual taxpayers: (800) 829-1040."
    ]
  },

  example: {
    en: "A Rochester resident owed tens of thousands in back federal income taxes after a small business failed. His current income was modest and he had no significant assets. He consulted the Low Income Taxpayer Clinic at Legal Aid Society of Rochester. The LITC attorney calculated his reasonable collection potential as a small fraction of the total debt. They submitted a Form 656 offer at that figure, paid the required 20 percent with the application, and received a fee waiver. Nine months later the IRS accepted the offer. He paid the remaining balance over five monthly payments. When he stayed current on his taxes for the next five years, the rest of the original debt was permanently discharged."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester — Low Income Taxpayer Clinic",
      focus: "IRS disputes, offer in compromise, audits, collection issues",
      qualifier: "Low-income residents of Monroe and surrounding counties",
      access: "Phone at (585) 232-4090 and ask for the LITC",
      outcome: "Free representation in IRS matters including OICs",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "IRS — Offer in Compromise Information",
      focus: "OIC applications, forms, pre-qualifier, status",
      qualifier: "Any U.S. taxpayer",
      access: "Phone at (800) 829-1040 or online",
      outcome: "OIC guidance, application status",
      phone: "(800) 829-1040",
      url: "https://www.irs.gov/payments/offer-in-compromise",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "free-tax-filing-ny",
    "tax-refund-garnishment-ny",
    "debt-collection-rights-ny",
    "wage-garnishment-exemptions-ny",
    "bank-account-freeze-exemption-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "IRS offer in compromise",
    "OIC",
    "settle tax debt",
    "26 USC 7122",
    "IRS settlement",
    "tax resolution",
    "Form 656",
    "Low Income Taxpayer Clinic",
    "back taxes",
    "tax debt forgiveness"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/26/7122",
    "https://www.irs.gov/payments/offer-in-compromise"
  ],

  lastVerified: "2026-04-18",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
