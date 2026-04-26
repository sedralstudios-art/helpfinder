export const WRIT_OF_EXECUTION = {
  id: "writ-of-execution",
  term: { en: "Writ of Execution" },
  aka: ["Execution", "Income Execution"],
  category: "courts",
  subtags: ["civil", "enforcement"],

  context: {
    en: "A writ of execution is a court order that lets a judgment creditor have the sheriff or marshal seize a debtor's property or paycheck to collect on a judgment. Writs are how a paper judgment turns into actual collection."
  },

  plainEnglish: {
    en: "A court order issued at the request of a judgment creditor that authorizes the sheriff or marshal to seize a judgment debtor's property or income to satisfy the judgment. New York has several varieties under CPLR Article 52. An income execution (CPLR § 5231) collects from wages, with strict limits on how much can be taken from each paycheck and protections for several income types. A property execution (CPLR § 5232) reaches bank accounts and other personal property. A real property execution (CPLR § 5236) can lead to a sheriff's sale of land. Some property is exempt from execution — homestead exemption on a primary residence (CPLR § 5206), retirement accounts, public benefits, child support, and a list of household goods. The judgment debtor can file an exemption claim form to protect exempt funds in a frozen bank account. Vacating the underlying judgment, paying it off, or filing bankruptcy can stop execution."
  },

  whatToAsk: {
    en: [
      "What kind of execution is being used — income, bank, or property?",
      "Has any exempt income or property been mistakenly seized?",
      "How is an exemption claim filed to protect exempt funds?",
      "Can the underlying judgment be vacated to stop execution?",
      "What protections does bankruptcy offer against execution?"
    ]
  },

  related: ["garnishment", "wage-garnishment", "judgment", "default-judgment", "vacate-judgment"],
  legalEntryIds: [],

  citation: "NY CPLR Article 52 (§§ 5230-5240)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CVP/A52",
  lastVerified: "2026-04-26",
  status: "active"
};
