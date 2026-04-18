export const PROPERTY_TAX_SALE_NY = {
  id: "property-tax-sale-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Property Tax Lien and Tax Sale — Losing a Home for Unpaid Taxes in New York" },

  summary: {
    en: "If property taxes go unpaid long enough, the county can place a tax lien on the property and eventually sell it at a tax foreclosure auction. In Monroe County, the process takes years — not months — and there are multiple chances to pay the debt and keep the home. Understanding the timeline and the options is critical for homeowners who are behind."
  },

  whoQualifies: {
    en: [
      "Any homeowner in Monroe County whose property taxes are delinquent.",
      "Homeowners who have received a tax lien notice or a notice of tax foreclosure.",
      "Heirs of a deceased homeowner whose property taxes have not been paid."
    ]
  },

  whatItMeans: {
    en: "When property taxes go unpaid in Monroe County, the county treasurer records a tax lien against the property. Interest and penalties accrue on the unpaid amount. After a period of years (the exact timeline varies — Monroe County typically allows 2-3 years of delinquency before initiating foreclosure), the county can file a tax foreclosure proceeding under RPTL Article 11. The homeowner receives notice and has a redemption period during which they can pay the full delinquent amount plus interest and penalties to cancel the lien and stop the foreclosure. If the redemption period passes without payment, the county takes title to the property and can sell it at auction. The homeowner loses the property and any equity in it. For many homeowners — especially seniors on fixed incomes and families going through financial hardship — the key is acting early. Payment plans, STAR exemptions, senior exemptions, and hardship reductions can prevent the situation from reaching foreclosure. The Monroe County Treasurer's office has information on payment plan options."
  },

  yourRights: {
    en: [
      "The right to notice before any tax foreclosure proceeding begins.",
      "The right to a redemption period during which the taxes can be paid in full to stop the foreclosure.",
      "The right to apply for STAR, Enhanced STAR, or senior/disability exemptions to reduce future tax bills.",
      "The right to request a payment plan from the county treasurer for delinquent taxes.",
      "The right to challenge the underlying assessment through the grievance process (see the property tax grievance entry).",
      "If the property is sold at auction, any surplus above the tax debt may be owed to the former owner (Tyler v. Hennepin County, US Supreme Court 2023)."
    ]
  },

  legalOptions: {
    en: [
      "The Monroe County Treasurer's office handles tax payments, lien information, and payment plan requests at (585) 753-1280.",
      "If a tax foreclosure notice has been received, acting before the redemption deadline is critical. The full amount owed (taxes, interest, penalties, and fees) must be paid to stop the proceeding.",
      "Free legal help for homeowners facing tax foreclosure is available through Legal Aid Society of Rochester at (585) 232-4090 and through Empire Justice Center at (585) 454-4060.",
      "The Monroe County Real Property Tax office at (585) 753-1220 handles exemption applications (STAR, senior, disability, veteran).",
      "For seniors struggling with property taxes, Eldersource (Lifespan) at (585) 325-2800 can help navigate exemption programs and connect with financial counseling.",
      "JustCause at (585) 232-3051 also assists with tax foreclosure defense for eligible residents."
    ]
  },

  example: {
    en: "A retired homeowner in Gates falls behind on property taxes after a medical emergency. After two years of unpaid taxes, Monroe County files a tax foreclosure petition. The homeowner receives a notice with a redemption deadline. She contacts Legal Aid, which helps her apply for Enhanced STAR and a senior exemption (reducing future taxes) and negotiates a payment plan with the county treasurer for the delinquent amount. She pays the plan on time and keeps her home."
  },

  counsel: [
    {
      type: "free",
      name: "Monroe County Treasurer — Tax Payments",
      focus: "Delinquent property taxes, payment plans, lien information",
      qualifier: "Any property owner in Monroe County",
      access: "Phone or in person",
      outcome: "Payment plan options, lien payoff amounts",
      phone: "(585) 753-1280",
      url: "https://www.monroecounty.gov/treasurer",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Tax foreclosure defense, property tax issues",
      qualifier: "Low-income homeowners in Monroe and surrounding counties",
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
    "property-tax-grievance-ny",
    "star-senior-exemption-ny",
    "foreclosure-defense-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "property tax",
    "tax lien",
    "tax sale",
    "tax foreclosure",
    "unpaid taxes",
    "lose home taxes",
    "Monroe County taxes",
    "redemption period",
    "RPTL Article 11",
    "tax auction",
    "delinquent taxes"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/RPT/A11",
    "https://www.monroecounty.gov/treasurer"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
