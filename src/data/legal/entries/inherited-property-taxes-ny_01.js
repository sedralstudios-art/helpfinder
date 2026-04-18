export const INHERITED_PROPERTY_TAXES_NY = {
  id: "inherited-property-taxes-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Inherited a House With Back Taxes — What to Do" },

  summary: {
    en: "When someone inherits a house in New York, they also inherit any unpaid property taxes. If the taxes are not paid, the county can eventually take the house through a tax foreclosure sale. There are options to catch up on the taxes, apply for exemptions, or sell the property."
  },

  whoQualifies: {
    en: [
      "Anyone who inherited a house or property that has unpaid property taxes.",
      "Anyone who inherited property and received a tax foreclosure notice from the county.",
      "Anyone who inherited property and cannot afford to pay the ongoing taxes.",
      "Anyone who co-inherited a property with family members and there is a disagreement about taxes."
    ]
  },

  whatItMeans: {
    en: "In New York, property taxes follow the property, not the person. When someone dies and leaves a house to a family member, any unpaid taxes from the previous owner become the new owner's problem. The county does not care who owns the house — if the taxes are not paid, the county can start a tax foreclosure proceeding under Real Property Tax Law Article 11. In Monroe County, the process usually starts after taxes are unpaid for about two years. The county sends notices to the owner on record. If the taxes are still not paid, the county can auction the property. Before the auction, the owner can catch up by paying the full amount owed plus interest and penalties. The new owner may also qualify for exemptions that reduce the tax bill going forward — the STAR exemption for homeowners, the Enhanced STAR for seniors 65 and older, and the Veterans exemption for military service. These exemptions must be applied for separately and are not automatic when a property changes hands. If the property was inherited without a will, the new owner may also need to go through Surrogate's Court to establish ownership."
  },

  yourRights: {
    en: [
      "A new owner has the right to receive notice before the county can take the property for unpaid taxes.",
      "A new owner has the right to pay the back taxes plus penalties at any time before the property is sold at auction.",
      "A new owner has the right to apply for property tax exemptions (STAR, Enhanced STAR, Veterans) through the local assessor.",
      "A new owner has the right to enter a payment plan with the county for back taxes in some cases.",
      "A new owner has the right to challenge the assessed value of the property through the grievance process.",
      "If multiple family members inherited the property together, each has the right to seek a partition — a court order to divide or sell the property."
    ]
  },

  legalOptions: {
    en: [
      "Under Real Property Tax Law Article 11, Monroe County must send written notice before taking a property for unpaid taxes. The owner can pay the full amount owed at any time before the auction to stop the foreclosure.",
      "The Monroe County Real Property Tax office can be reached at (585) 753-1200 for information about back taxes, payment plans, and auction dates.",
      "STAR and Enhanced STAR exemption applications are filed with the local assessor's office. The deadline is March 1 each year.",
      "If the property was inherited without a will, a proceeding in Monroe County Surrogate's Court may be needed to establish legal ownership. The court is at 99 Exchange Blvd, Rochester.",
      "Free legal help with tax foreclosure, property transfers, and estate issues is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "If family members disagree about what to do with the property, a partition action can be filed in Supreme Court."
    ]
  },

  example: {
    en: "After Jerome's grandmother died, he inherited her house in Rochester. He did not know she owed $8,000 in back property taxes. He received a letter from Monroe County saying the property was in foreclosure. Jerome called the Real Property Tax office and learned he could pay the full amount plus $1,200 in penalties to stop the auction. He also applied for STAR, which reduced his future tax bill by about $900 per year. He set up a payment plan for the back taxes and kept the house."
  },

  counsel: [
    {
      type: "government",
      name: "Monroe County Real Property Tax Services",
      focus: "Property taxes, tax foreclosure, payment plans, STAR exemptions",
      qualifier: "Monroe County property owners",
      access: "Phone at (585) 753-1200",
      outcome: "Tax information, payment plans, exemption applications",
      phone: "(585) 753-1200",
      url: "https://www.monroecounty.gov/finance-real-property-tax",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Tax foreclosure defense, estate matters, property transfers",
      qualifier: "Low income residents of Monroe and surrounding counties",
      access: "Phone intake at (585) 232-4090",
      outcome: "Legal advice and representation",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "property-tax-sale-ny",
    "property-tax-grievance-ny",
    "star-senior-exemption-ny",
    "when-someone-dies-estate-ny",
    "small-estate-affidavit-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "inherited house taxes",
    "back property taxes",
    "tax foreclosure",
    "inherited property",
    "property tax auction",
    "STAR exemption",
    "inherit house with debt",
    "property tax owed",
    "grandmother house taxes",
    "family house taxes"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/RPT/A11",
    "https://www.tax.ny.gov/pit/property/star/"
  ],

  lastVerified: "2026-04-17",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
