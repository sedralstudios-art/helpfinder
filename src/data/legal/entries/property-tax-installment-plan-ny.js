export const PROPERTY_TAX_INSTALLMENT_PLAN_NY = {
  id: "property-tax-installment-plan-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY RPT 1184",
  status: "active",

  title: { en: "NY Property Tax Installment Plan — Spread Unpaid Property Tax Over Up to 24 Months" },

  summary: {
    en: "New York Real Property Tax Law Section 1184 lets a homeowner with unpaid delinquent property tax work out an installment payment plan with Monroe County or the City of Rochester. The plan can stretch up to 24 months with no upfront payment and no credit check. The agreement stops foreclosure and interest compounding while the plan is active. Missing a payment breaks the plan."
  },

  whoQualifies: {
    en: [
      "Any Monroe County homeowner with delinquent property taxes.",
      "A homeowner facing imminent tax foreclosure who wants to avoid losing the home.",
      "A homeowner who received a tax warrant or tax lien notice.",
      "A senior or disabled homeowner who qualifies for extra protections on top of the installment plan.",
      "A homeowner who had a one-time financial hardship (job loss, medical event) causing a single missed tax payment."
    ]
  },

  whatItMeans: {
    en: "New York Real Property Tax Law Section 1184 (often called the property tax installment payment agreement, IPA, or tax payment plan statute) authorizes every NY county and city to offer homeowners a way to pay delinquent property taxes over time rather than all at once. Monroe County and the City of Rochester both operate active installment programs. The basic rules are set by state law, with local variations. A homeowner contacts the taxing jurisdiction's treasurer or finance office and requests an installment agreement. The total amount owed is calculated including back taxes, interest accrued to that point, and any penalties. The county proposes a monthly installment amount that will pay the balance within 24 months. The homeowner signs the agreement, and starting the next month begins making payments. No upfront payment is required to start the plan in most cases. No credit check is performed — this is a statutory right, not a credit-approved loan. Interest continues to accrue on the outstanding balance at the statutory rate (typically 12 percent annually for Monroe County), but the interest rate stays at the standard delinquency rate rather than escalating to foreclosure rates. While the homeowner makes payments on time, no foreclosure action is initiated. The tax lien remains on the property but is not enforced to sale. The homeowner can sell the home during the plan if the sale proceeds pay off the remaining balance at closing. Missing a payment or making a late payment can terminate the agreement. Monroe County typically allows one cure within 30 days before termination; a second missed payment usually ends the plan and immediately opens foreclosure. A homeowner whose plan terminates can renegotiate but the jurisdiction is not required to accept a second plan, and reinstatement often requires paying down a portion of the balance. Senior citizens (65+), disabled homeowners, and homeowners receiving public assistance have additional protections under RPT Articles 10 and 11-a. These include longer repayment windows up to 36 months, reduced interest rates, and stronger foreclosure protections. A senior can also apply for the Senior Citizen Exemption (RPT 467) or deferral under RPT 421-f to address the underlying affordability issue rather than just paying off arrears. Rochester has a similar program with a local twist — the Rochester Tax Amnesty Program periodically offers reduced interest and penalty forgiveness for homeowners who enter an installment plan during the amnesty window. When in effect, the amnesty can save substantial money. A homeowner facing tax foreclosure should contact the jurisdiction as early as possible — once the tax lien has been sold to a third party (via Monroe County's tax lien sale program under RPT 1110), options narrow. The third-party buyer can move to foreclosure within 2 to 3 years of buying the lien. Even during this period, some redemption rights remain, but they require paying the lien price plus interest and penalties to the third party. Filing Chapter 13 bankruptcy under 11 USC 1322 also triggers an automatic stay on property tax foreclosure and allows the homeowner to propose a 3-to-5 year payment plan for delinquent taxes in bankruptcy court. Chapter 13 is a significant step with long-term credit and financial implications but can rescue a home from tax foreclosure when other options fail."
  },

  yourRights: {
    en: [
      "A homeowner with delinquent property taxes has the right to request an RPT 1184 installment payment agreement.",
      "A homeowner entering an agreement has the right to a stay of foreclosure while payments are current.",
      "A senior or disabled homeowner has the right to extended repayment (up to 36 months) and reduced interest.",
      "A homeowner has the right to sell the home during a plan if proceeds pay off the remaining balance.",
      "A homeowner has the right to file Chapter 13 bankruptcy to trigger an automatic stay on foreclosure and propose a different plan."
    ]
  },

  legalOptions: {
    en: [
      "Monroe County Treasurer at (585) 753-1200 handles county property tax installment plans.",
      "City of Rochester Treasury at (585) 428-7030 handles city property tax installment plans.",
      "Each Monroe County town and village also collects school taxes and may have its own plan option — check with the specific town clerk.",
      "NYS Department of Taxation and Finance at (518) 457-2036 for state-level property tax questions.",
      "Legal Aid Society of Rochester at (585) 232-4090 represents homeowners facing tax foreclosure.",
      "For bankruptcy, Monroe County Bankruptcy Court (Western District of New York) at (585) 613-4200, and bankruptcy attorneys through the Monroe County Bar Association at (585) 546-2130."
    ]
  },

  example: {
    en: "Jorge fell 4,800 dollars behind on Greece town and school property taxes during a medical leave. He received a tax warrant notice. He called Monroe County Treasurer, explained his hardship, and requested an RPT 1184 installment agreement. The county set up a 24-month plan at 220 dollars a month (including the balance plus 12 percent annual interest). Jorge signed the agreement the next day. He made all 24 payments on time, the lien was released after final payment, and no foreclosure was ever initiated. Jorge also applied for a Senior Citizen Exemption once he turned 65 which permanently reduced his future property tax bill."
  },

  counsel: [
    {
      type: "government",
      name: "Monroe County Treasurer",
      focus: "Property tax collection, installment agreements, delinquency negotiation",
      qualifier: "Any Monroe County homeowner with delinquent property tax",
      access: "Phone, walk-in at 39 W Main St, mail",
      outcome: "Installment agreement, payment processing, foreclosure-stay confirmation",
      phone: "(585) 753-1200",
      url: "https://www.monroecounty.gov/finance",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "government",
      name: "City of Rochester Treasury",
      focus: "City property tax collection, installment agreements, amnesty programs",
      qualifier: "City of Rochester homeowner with delinquent city tax",
      access: "Phone, walk-in at City Hall",
      outcome: "Installment agreement, amnesty application when available",
      phone: "(585) 428-7030",
      url: "https://www.cityofrochester.gov/treasury",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "Legal Aid Society of Rochester",
      focus: "Property tax foreclosure defense and installment plan negotiation",
      qualifier: "Monroe County homeowner at or under 200 percent of poverty",
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
    "property-tax-grievance-ny",
    "star-senior-exemption-ny",
    "basic-star-exemption-credit-ny",
    "property-tax-sale-ny",
    "foreclosure-rescue-scams-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "property tax installment",
    "RPT 1184",
    "delinquent property tax",
    "tax installment agreement",
    "Monroe County tax plan",
    "avoid tax foreclosure",
    "senior tax installment",
    "Rochester tax amnesty",
    "tax warrant NY",
    "property tax payment plan"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/RPT/1184",
    "https://www.tax.ny.gov/pit/property/default.htm"
  ],

  lastVerified: "2026-04-20",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
