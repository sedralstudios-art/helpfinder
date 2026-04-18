export const MECHANIC_LIEN_NY = {
  id: "mechanic-lien-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY LIE 3",
  status: "active",

  title: { en: "Mechanic's Liens — When a Contractor or Supplier Puts a Lien on Your Home" },

  summary: {
    en: "If a contractor, subcontractor, or material supplier is not paid for work on a property, they can file a mechanic's lien against the property. The lien attaches to the real estate — not the homeowner personally — and can block the sale or refinancing of the home until resolved. Homeowners sometimes discover a lien they did not know about, filed by a subcontractor the general contractor did not pay. Understanding how liens work — and how to discharge them — protects the homeowner."
  },

  whoQualifies: {
    en: [
      "Any homeowner whose property has a mechanic's lien filed against it.",
      "Any homeowner trying to sell or refinance and a lien appears on the title search.",
      "Any contractor or supplier who performed work and was not paid.",
      "Any homeowner who paid the general contractor in full but a subcontractor filed a lien because the GC did not pay them."
    ]
  },

  whatItMeans: {
    en: "Under Lien Law § 3, any contractor, subcontractor, laborer, or material supplier who performs work or provides materials for the improvement of real property can file a mechanic's lien if they are not paid. The lien must be filed within 8 months of the last date work was performed (4 months for single-family homes in most cases). The lien is filed with the county clerk and attaches to the property. It does not create a debt against the homeowner personally — but it clouds the title and can prevent sale or refinancing until resolved. For homeowners who paid the general contractor: if the GC did not pay a subcontractor and the sub files a lien, the homeowner may have to pay twice — once to the GC and once to discharge the lien. This is why paying by check (creating a paper trail) and requiring lien waivers from subs before making final payment to the GC is important. To discharge a lien: the homeowner can pay the lien amount, negotiate a reduction, file a bond to substitute for the lien (Lien Law § 19), or challenge the lien in court if it is invalid (wrong property, no work performed, filed too late). A lien expires 1 year after filing unless the lien holder extends it or files a lawsuit to foreclose."
  },

  yourRights: {
    en: [
      "A mechanic's lien attaches to the property — not to the homeowner personally.",
      "The lien must be filed within 8 months of the last work (4 months for single-family homes).",
      "The homeowner can challenge an invalid lien in court.",
      "A bond can be filed to discharge the lien from the property while the dispute is resolved.",
      "The lien expires after 1 year unless extended or a lawsuit is filed.",
      "Requiring lien waivers from subcontractors before final payment to the GC protects the homeowner."
    ]
  },

  legalOptions: {
    en: [
      "If a lien is discovered, check whether it is valid — was the work actually performed? Was the lien filed on time? Is the amount accurate?",
      "An invalid lien can be discharged through a court proceeding under Lien Law § 19.",
      "A surety bond can be posted to substitute for the lien — this clears the title while the dispute is resolved.",
      "If the homeowner paid the GC in full and the sub was not paid, the homeowner may have a claim against the GC for indemnification.",
      "Free legal help with mechanic's lien issues is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "The Monroe County Clerk's office at (585) 753-1600 handles lien filings and can confirm whether a lien is on file."
    ]
  },

  example: {
    en: "A homeowner in Irondequoit hires a general contractor to renovate a bathroom. She pays the GC $15,000 in full. The GC does not pay the plumber. The plumber files a mechanic's lien against the homeowner's property for $4,000. The homeowner discovers the lien when she tries to refinance. She contacts the GC, who refuses to pay the plumber. She files a bond to clear the lien from the title and then sues the GC to recover the $4,000 she has to pay to resolve the lien."
  },

  counsel: [
    {
      type: "free",
      name: "Monroe County Clerk — Lien Filings",
      focus: "Mechanic's lien filings, lien searches, lien discharge",
      qualifier: "Any property in Monroe County",
      access: "Phone or in person",
      outcome: "Lien information, filing, discharge",
      phone: "(585) 753-1600",
      url: "https://www.monroecounty.gov/clerk",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "home-improvement-contractor-ny",
    "contractor-fraud-ny",
    "small-claims-procedure-ny",
    "foreclosure-defense-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "mechanic lien",
    "contractor lien",
    "lien on house",
    "Lien Law 3",
    "subcontractor lien",
    "lien discharge",
    "lien bond",
    "lien waiver",
    "title lien",
    "8 month deadline",
    "lien foreclosure",
    "county clerk lien"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/LIE/3",
    "https://www.nysenate.gov/legislation/laws/LIE/19"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
