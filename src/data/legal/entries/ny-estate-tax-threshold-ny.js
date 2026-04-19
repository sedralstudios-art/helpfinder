export const NY_ESTATE_TAX_THRESHOLD_NY = {
  id: "ny-estate-tax-threshold-ny",
  category: "family",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY TAX A26",
  status: "active",

  title: { en: "New York Estate Tax — The Cliff, the Exemption, and Who Actually Owes" },

  summary: {
    en: "New York imposes a state estate tax on estates above a threshold (about $7 million for deaths in 2025, adjusted for inflation). Unlike the federal estate tax, New York has a cliff — estates just over the threshold lose the full exemption and pay tax on the entire amount, not just the excess. Planning matters for estates approaching the line. Most estates owe nothing."
  },

  whoQualifies: {
    en: [
      "Executors and administrators of an estate of a New York resident.",
      "Anyone inheriting from a New York estate who wants to understand the tax impact.",
      "Families of a decedent whose gross estate approaches or exceeds the state threshold.",
      "Advisors planning for a client whose estate may fall near the cliff."
    ]
  },

  whatItMeans: {
    en: "Under New York Tax Law Article 26 (Sections 951-963), estates of New York decedents with a gross estate value above the basic exclusion amount owe New York estate tax. The threshold rises each year with inflation — approximately $7.16 million for 2025 (verify the current year's amount at tax.ny.gov; the figure is adjusted annually). The federal estate tax threshold is much higher (around $13.6 million per person in 2024-2025, set to drop in 2026 unless Congress acts). The two taxes are separate: an estate can owe NY tax without owing federal tax. New York has a distinctive cliff: the exemption phases out completely between 100 percent and 105 percent of the basic exclusion amount. An estate at 100 percent of the threshold owes no tax. An estate at 105 percent or more loses the exemption entirely and owes tax on the full value from the first dollar. Example with 2025 numbers: an estate of $7.16 million owes $0; an estate of $7.52 million (105 percent of the threshold) owes tax on the full $7.52 million, not just the excess. Rates run from 3.06 percent to 16 percent on a graduated schedule. Qualified portability between spouses is not available in New York (unlike federal law) — a surviving spouse cannot carry over an unused exemption from the first spouse to die. The gross estate includes real property, bank accounts, retirement accounts, life insurance proceeds on policies the decedent owned, business interests, and joint property. Charitable bequests are deductible. Bequests to a surviving spouse are fully deductible (marital deduction). Planning tools to stay under the cliff include lifetime gifts (NY has no gift tax but the federal annual exclusion matters), credit shelter trusts, charitable bequests, and insurance held in an irrevocable trust. The estate tax return (Form ET-706) is due nine months after death."
  },

  yourRights: {
    en: [
      "An estate has the right to use the basic exclusion amount in effect on the decedent's date of death (not current date).",
      "An executor has the right to elect portability from federal estate (for federal purposes only — NY does not allow portability).",
      "An estate has the right to deduct debts, funeral costs, and charitable bequests from the gross estate.",
      "A surviving spouse has the right to receive all inheritance from the decedent free of NY estate tax (marital deduction).",
      "An executor has the right to request a six-month extension for filing the return.",
      "An estate that paid more than owed has the right to a refund claim within the applicable limitations period."
    ]
  },

  legalOptions: {
    en: [
      "NYS Department of Taxation and Finance Estate Tax page: tax.ny.gov/bus/estate/.",
      "For estates near or over the threshold, an estate attorney is strongly advised. Monroe County Bar Association referral at (585) 546-2130.",
      "For estates with uncertain gross value (closely-held business, art, antiques), a qualified appraisal from a disinterested appraiser supports the return.",
      "Lifetime gifting to reduce the estate uses the federal annual exclusion ($18,000 per donee per donor in 2024, adjusted yearly).",
      "Charitable giving through a donor-advised fund or charitable remainder trust can reduce estate tax while providing lifetime benefits.",
      "Monroe County Surrogate's Court at (585) 753-1860 for the separate probate process (estate tax is a Department of Tax matter; probate is Surrogate's Court)."
    ]
  },

  example: {
    en: "A decedent's estate was valued at $7.8 million — over the NY threshold in force on the date of death. Because the estate exceeded 105 percent of the exemption, the cliff applied and the estate owed NY estate tax on the full $7.8 million. Had the decedent made a $650,000 charitable bequest during lifetime or through the will, the estate would have dropped below the 105 percent cliff, saved hundreds of thousands in NY tax, and delivered funds to a named charity. The family consulted an estate attorney after the fact; the cliff was the critical planning failure."
  },

  counsel: [
    {
      type: "government",
      name: "NYS Department of Taxation and Finance — Estate Tax",
      focus: "Estate tax returns, exemption amounts, ET-706",
      qualifier: "Executors of NY estates",
      access: "Phone at (518) 457-5387",
      outcome: "Return filing, information, payment plans",
      phone: "(518) 457-5387",
      url: "https://www.tax.ny.gov/bus/estate/",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "when-someone-dies-ny",
    "when-someone-dies-estate-ny",
    "trust-vs-will-estate-planning-ny",
    "pay-on-death-bank-account-ny",
    "transfer-on-death-deed-ny",
    "digital-assets-after-death-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "NY estate tax",
    "estate tax cliff",
    "Tax Law Article 26",
    "basic exclusion amount",
    "marital deduction",
    "estate tax return",
    "ET-706",
    "9 month estate deadline",
    "estate planning New York",
    "avoid cliff estate tax"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/TAX/A26",
    "https://www.nysenate.gov/legislation/laws/TAX/952",
    "https://www.tax.ny.gov/bus/estate/"
  ],

  lastVerified: "2026-04-18",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
