export const ERISA = {
  id: "erisa",
  term: { en: "ERISA" },
  aka: ["Employee Retirement Income Security Act"],
  category: "benefits",
  subtags: ["employment", "retirement", "federal"],

  context: {
    en: "ERISA is the federal law that governs most employer-sponsored retirement plans and health plans. It sets minimum standards for participation, vesting, funding, fiduciary conduct, and the right to information about the plan."
  },

  plainEnglish: {
    en: "A federal law that governs most employer-sponsored retirement plans (pensions, 401(k)s) and many employer-sponsored health plans. ERISA sets minimum standards for plan administration, fiduciary conduct, disclosures to participants, and rights to file claims and appeals. The law generally preempts state law claims relating to covered plans, which means most lawsuits about plan benefits go to federal court under ERISA. A participant who is denied benefits has the right to a written denial, internal appeal rights, and federal court review after exhausting plan procedures. The deadline to file a federal claim depends on the plan documents but is often 1 to 3 years after the final denial. Plan fiduciaries — the people who run the plan — have to act prudently and in the participants' interest. They can be held personally liable for losses caused by breaches. Government plans, church plans, and some other categories are partly or fully exempt. Free legal help with ERISA cases is limited; specialized lawyers usually take cases on a contingency or partial-fee basis."
  },

  whatToAsk: {
    en: [
      "Is the plan covered by ERISA, or is it a government or church plan?",
      "Have I exhausted the plan's internal claim and appeal procedures?",
      "What is the filing deadline under the plan and under ERISA?",
      "What standard of review will the federal court apply?",
      "Where can I find a lawyer with ERISA experience?"
    ]
  },

  related: ["fmla", "cobra", "discrimination", "fair-hearing"],
  legalEntryIds: [],

  citation: "Employee Retirement Income Security Act (29 USC § 1001+)",
  sourceUrl: "https://www.dol.gov/general/topic/retirement/erisa",
  lastVerified: "2026-04-26",
  status: "active"
};
