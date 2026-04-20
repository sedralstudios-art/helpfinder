export const RENT_WITHHOLDING_REPAIR_DEDUCT_NY = {
  id: "rent-withholding-repair-deduct-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "common-law",
  primaryStatute: "NY RPP 235-B",
  status: "active",

  title: { en: "NY Rent Withholding and Repair-and-Deduct — Tenant Tools When the Landlord Will Not Fix" },

  summary: {
    en: "A New York tenant whose landlord has failed to make necessary repairs can withhold rent under the warranty of habitability (RPL 235-b) or pay for the repair and deduct the cost from future rent. Both are legal self-help remedies but have strict notice and documentation requirements. Filing an HP action in Housing Court is the safer alternative for serious cases. Eviction can result if self-help is done incorrectly."
  },

  whoQualifies: {
    en: [
      "A NY tenant whose apartment has a serious defect the landlord has not repaired despite notice.",
      "A tenant with no heat, no water, no hot water, a broken door lock, infestation, mold, or electrical/plumbing hazard.",
      "A tenant who has sent written repair requests and received no response.",
      "A tenant considering whether to withhold rent, pay for the repair, or file in court.",
      "A tenant whose landlord started eviction after rent was withheld."
    ]
  },

  whatItMeans: {
    en: "New York Real Property Law Section 235-b creates the Warranty of Habitability. Every residential landlord in NY automatically warrants that the apartment is fit for human habitation — adequate heat (68 degrees Fahrenheit from October 1 to May 31 daytime, 62 nights under NYC rule commonly followed upstate), running water, hot water, working plumbing, functioning electrical, structurally sound walls and roof, no major pest infestations, and free of hazards. The warranty is implied in every lease and cannot be waived. When the landlord breaches the warranty (by failing to repair a serious defect after notice), NY common law provides several tenant remedies. RENT WITHHOLDING: The tenant can stop paying rent until the landlord repairs. This is risky self-help — the landlord can file an eviction proceeding for non-payment. In that proceeding the tenant raises the warranty breach as a defense (often called a warranty-of-habitability defense). If the tenant proves the landlord breached the warranty, the court may reduce or abate the rent for the breach period, and the tenant's rent obligation is reduced by the abatement. If the tenant cannot prove the breach, the tenant must pay the rent plus late fees and possibly attorney fees, and risks eviction. Best practice: only withhold for serious defects, after giving written notice with reasonable repair time, and by putting withheld rent into a separate savings account (rent escrow) to show good faith. REPAIR-AND-DEDUCT: The tenant hires someone to fix the defect and deducts the reasonable cost from the next rent payment. This is also self-help. NY common law recognizes this remedy but requires: (a) a serious defect affecting habitability, (b) written notice to the landlord with reasonable time to fix (typically 7 to 14 days depending on severity — less for emergencies), (c) the repair cost must be reasonable and documented, and (d) the deduction should be clearly documented in writing to the landlord. If the landlord disagrees on reasonableness, the parties usually end up in court. Repair-and-deduct is safer than outright withholding because the tenant has proof of the actual cost and the continued good faith (rent was paid, just reduced by the documented repair). HP ACTION: The third remedy is filing a housing part (HP) proceeding at the City Court or Housing Court for an order compelling repair. In Monroe County, Rochester City Court Housing Part handles HP actions for the City of Rochester; town justice courts handle similar petitions for other Monroe County municipalities. Filing fee is typically 20 to 50 dollars. The court can order the landlord to make specific repairs, set deadlines, and hold the landlord in contempt if not done. This is the safer route for a tenant unsure about self-help because the court is setting the timeline and the tenant is not at risk of eviction for non-payment. DOCUMENTATION: In any of the three routes, documentation is critical. Written repair requests by text, email, or certified letter. Photos and videos of the defect. Medical records if family health was affected. Contractor estimates or receipts. Witness statements from neighbors or visitors. Communications with the landlord or property manager. A tenant who skips documentation and withholds rent is likely to lose in court. For Monroe County, Legal Aid Society of Rochester and Empire Justice Center represent low-income tenants in these cases for free. HP petitions and warranty-of-habitability defenses succeed frequently when the tenant has strong documentation. Retaliatory eviction after a tenant asserts warranty rights is prohibited under RPL 223-b — if the landlord tries to evict within 1 year of a tenant complaint, the eviction presumptively fails unless the landlord proves non-retaliatory reason."
  },

  yourRights: {
    en: [
      "A NY tenant has the right to a habitable apartment under the implied Warranty of Habitability in RPL 235-b.",
      "A tenant has the right to withhold rent when the warranty is seriously breached, subject to strict documentation and risk.",
      "A tenant has the right to repair-and-deduct when the landlord fails to fix after reasonable notice.",
      "A tenant has the right to file an HP action for a court-ordered repair without risking eviction.",
      "A tenant has the right to protection from retaliatory eviction under RPL 223-b for 1 year after asserting warranty rights.",
      "A tenant has the right to free legal representation through Legal Aid or Empire Justice for low-income cases."
    ]
  },

  legalOptions: {
    en: [
      "Rochester City Court Housing Part at (585) 428-6990 handles HP actions for City of Rochester.",
      "Monroe County town justice courts handle HP actions for the relevant town.",
      "Legal Aid Society of Rochester at (585) 295-5727 represents low-income tenants in housing court.",
      "Empire Justice Center at (585) 295-5702 handles major warranty-of-habitability cases.",
      "For Rochester code violations, City of Rochester Office of Housing and Neighborhood Services at (585) 428-6950 can issue code citations against landlords.",
      "For other Monroe County towns, each town has code enforcement handling habitability complaints."
    ]
  },

  example: {
    en: "Dante's Rochester apartment had no heat for 6 days in January despite repeated calls and texts to the landlord. Indoor temperature was 48 degrees. Dante and his family moved to a hotel for 4 days at 440 dollars. Dante gave the landlord written notice by text and certified mail that he would deduct the hotel cost plus a prorated rent abatement for the breach period. He paid rent for January minus 440 dollars and minus an additional 200 dollar abatement. The landlord tried to evict for non-payment. At the HP hearing, Dante presented texts, the hotel receipt, photos of the broken boiler, and medical documentation of his daughter's asthma flare. The judge found a habitability breach, approved the 640 dollar deduction, and also awarded Dante a 500 dollar attorney-fee credit from the landlord for bringing the retaliatory eviction."
  },

  counsel: [
    {
      type: "nonprofit",
      name: "Legal Aid Society of Rochester",
      focus: "Tenant warranty of habitability defense, rent withholding representation, HP actions",
      qualifier: "Monroe County tenant at or under 200 percent of poverty",
      access: "Phone intake, emergency intake for active eviction cases",
      outcome: "Free legal representation in housing court",
      phone: "(585) 295-5727",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "Rochester City Court Housing Part",
      focus: "HP actions, warranty of habitability cases, landlord-tenant disputes",
      qualifier: "City of Rochester tenant or landlord",
      access: "Phone, in-person filing",
      outcome: "HP order for repair, warranty defense hearing",
      phone: "(585) 428-6990",
      url: "https://ww2.nycourts.gov/courts/7jd/monroe/citycourt.shtml",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "mold-tenant-rights-ny",
    "water-damage-tenant-rights-ny",
    "bedbug-tenant-rights-ny",
    "illegal-eviction-ny",
    "landlord-retaliation-ban-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "rent withholding NY",
    "RPP 235-b",
    "warranty of habitability",
    "repair and deduct",
    "HP action housing court",
    "RPL 223-b retaliation",
    "rent abatement NY",
    "no heat tenant",
    "landlord won't fix",
    "habitability defense"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/RPP/235-B",
    "https://ww2.nycourts.gov/courts/7jd/monroe/citycourt.shtml"
  ],

  lastVerified: "2026-04-20",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
