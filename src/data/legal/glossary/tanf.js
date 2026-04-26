export const TANF = {
  id: "tanf",
  term: { en: "TANF" },
  aka: ["Temporary Assistance for Needy Families", "Family Assistance"],
  category: "benefits",
  subtags: ["cash", "federal"],

  context: {
    en: "TANF is the federal block grant that funds cash assistance for low-income families with children. New York's TANF-funded program is called Family Assistance and is administered through the county Department of Social Services."
  },

  plainEnglish: {
    en: "A federal block grant that funds state cash assistance programs for low-income families with children. Each state designs its own program within federal rules. In New York, the TANF-funded program is called Family Assistance and is part of the broader Temporary Assistance system. Federal law sets a 60-month lifetime limit on TANF-funded benefits per adult — counted across states. After 60 months, a family can sometimes continue receiving help through New York's state-funded Safety Net Assistance program. TANF also funds related services beyond cash, including childcare assistance, employment services, and emergency aid. Work requirements apply for most adult recipients, with exceptions for medical conditions, pregnancy, and caregiving for very young children. Applications go through the county Department of Social Services and usually combine TANF, SNAP, and Medicaid in one form."
  },

  whatToAsk: {
    en: [
      "Am I applying for Family Assistance (TANF) or Safety Net Assistance?",
      "How much of my 60-month lifetime TANF clock has been used?",
      "What work requirements apply, and what exemptions might I qualify for?",
      "Does my application also start a SNAP and Medicaid application?",
      "What emergency cash assistance is available while my case is being decided?"
    ]
  },

  related: ["temporary-assistance", "snap", "medicaid", "fair-hearing", "recoupment"],
  legalEntryIds: [],

  citation: "42 USC § 601+ (federal TANF); NY Soc. Services Law § 131-a",
  sourceUrl: "https://otda.ny.gov/programs/temporary-assistance/",
  lastVerified: "2026-04-26",
  status: "active"
};
