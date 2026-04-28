export const TRANSFER_DECEASED_VEHICLE_TITLE_NY = {
  id: "transfer-deceased-vehicle-title-ny",
  category: "family",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY VAT 2113",
  status: "active",

  title: { en: "Transferring a Deceased Relative's Car in NY — DMV Steps and When Probate Is Needed" },

  summary: {
    en: "When a New York vehicle owner dies, the car can be transferred without going through full probate in most cases. A surviving spouse can use DMV Form MV-349.1 if the vehicle is worth 25,000 dollars or less. A non-spouse heir usually needs a certificate from Surrogate's Court or a small estate affidavit before the DMV will transfer the title. The steps are free or low-cost and can usually be done in one DMV visit."
  },

  whoQualifies: {
    en: [
      "A surviving spouse inheriting a vehicle worth 25,000 dollars or less from a deceased spouse.",
      "Any adult child, sibling, or other heir of a deceased vehicle owner.",
      "The named executor or administrator of the deceased owner's estate.",
      "A person who bought a vehicle from a deceased seller before the seller's death but had not yet transferred title."
    ]
  },

  whatItMeans: {
    en: "New York Vehicle and Traffic Law Section 2113 allows a surviving spouse to transfer title of a vehicle without going through Surrogate's Court if the vehicle is worth 25,000 dollars or less. The spouse files DMV Form MV-349.1 (Spouse's Affidavit) along with the original title, a certified copy of the death certificate, a completed title transfer form, and proof of insurance in the surviving spouse's name. The transaction is usually processed at the DMV in one visit and costs only the regular title transfer fee. If the vehicle is worth more than 25,000 dollars or the person inheriting is not the surviving spouse, a different process applies. For an estate under 50,000 dollars in total value, the heir can file a Voluntary Administration (small estate affidavit) at Monroe County Surrogate's Court on Form SCPA 1301 — this is a simplified probate that costs under 45 dollars and does not require a lawyer. The Surrogate's Court issues a certificate of Voluntary Administrator that the DMV accepts as authority to transfer the title. For a larger estate, the named executor must be appointed by Surrogate's Court through a full probate proceeding, and the Letters Testamentary from the court authorize the executor to transfer title. A joint-titled vehicle (two names on the title with an or between them) passes automatically to the surviving owner — only the death certificate is needed to remove the deceased name. A vehicle with a lien must first have the lien released by the lender before title can transfer. The deceased registration is still valid for 30 days from the date of death, and the surviving family can drive the vehicle during that period while the transfer is arranged. Sales tax is not charged on a transfer between spouses or by inheritance from an estate."
  },

  yourRights: {
    en: [
      "A surviving spouse has the right to transfer a vehicle worth 25,000 dollars or less without going through Surrogate's Court.",
      "An heir has the right to use the Voluntary Administration (small estate) procedure when the total estate is worth 50,000 dollars or less.",
      "A joint owner has the right to the vehicle automatically at the death of the other owner.",
      "A family member has the right to continue to drive the vehicle for 30 days after the death while the title transfer is arranged.",
      "A surviving family member has the right to transfer a vehicle without paying sales tax when the transfer is by inheritance."
    ]
  },

  legalOptions: {
    en: [
      "Monroe County Surrogate's Court at (585) 371-3717 handles estate filings including Voluntary Administration.",
      "NYS DMV at (518) 486-9786 can answer questions about Form MV-349.1 and the transfer process.",
      "Monroe County DMV at (585) 753-7050 processes vehicle title transfers in person.",
      "Legal Aid Society of Rochester at (585) 232-4090 and Volunteer Legal Services (now JustCause) at (585) 232-3051 help low-income families with small estate filings.",
      "For forms, dmv.ny.gov has Form MV-349 (Affidavit) and MV-349.1 (Spouse's Affidavit) available to download."
    ]
  },

  example: {
    en: "After Roberto died, his widow Elena needed to transfer their 2018 Honda into her name. The car had been titled only in Roberto's name. Elena brought the original title, Roberto's death certificate, a completed Form MV-349.1, and her driver license to the Monroe County DMV on West Main Street. Because the Honda was worth about 14,000 dollars (well under the 25,000 dollar cap), the DMV accepted the spouse's affidavit and issued a new title in Elena's name that same day. The only fee was the standard title transfer fee. No court filing was needed."
  },

  counsel: [
    {
      type: "government",
      name: "Monroe County Surrogate's Court",
      focus: "Small estate affidavit, Voluntary Administration, full probate",
      qualifier: "Any Monroe County family settling a deceased relative's estate",
      access: "Phone, Hall of Justice 99 Exchange Blvd",
      outcome: "Court authority to transfer assets including vehicles",
      phone: "(585) 371-3717",
      url: "https://ww2.nycourts.gov/courts/7jd/monroe/surrogates.shtml",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "nonprofit",
      name: "JustCause (formerly Volunteer Legal Services Project)",
      focus: "Small estate filings, simple probate, vehicle transfer",
      qualifier: "Monroe County resident at or under 200 percent of poverty",
      access: "Phone intake",
      outcome: "Free or low-cost legal help with estate paperwork",
      phone: "(585) 232-3051",
      url: "https://justcauseny.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "small-estate-affidavit-ny",
    "when-someone-dies-estate-ny",
    "diy-will-ny",
    "power-of-attorney-basics-ny",
    "beneficiary-designation-trumps-will-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "deceased car transfer",
    "inherit car NY",
    "MV-349.1 spouse",
    "deceased owner title",
    "transfer car after death",
    "small estate car",
    "surrogates court vehicle",
    "joint title car death",
    "voluntary administration NY",
    "spouse vehicle affidavit"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/VAT/2113",
    "https://dmv.ny.gov/registration/transfer-or-remove-vehicle-registration"
  ],

  lastVerified: "2026-04-20",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
