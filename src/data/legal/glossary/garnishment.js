export const GARNISHMENT = {
  id: "garnishment",
  term: { en: "Garnishment" },
  aka: ["Income Execution", "Wage Execution"],
  category: "consumer",
  subtags: ["debt", "enforcement"],

  context: {
    en: "Garnishment is a court-ordered way for a creditor to take money straight from a person's paycheck or bank account to pay a debt. It usually requires a judgment first, but tax debts, federal student loans, and child support can be garnished without one."
  },

  plainEnglish: {
    en: "A legal process that lets a creditor collect a debt by taking money directly from a paycheck, a bank account, or another source. For most debts, garnishment requires the creditor to first sue and win a judgment. Once there is a judgment, the creditor can serve an income execution on the debtor's employer or a restraining notice on the bank. New York law caps how much can be taken from wages. The cap is generally the lesser of two amounts: 10% of gross pay, or 25% of disposable earnings above 30 times the federal minimum wage. Some income is fully exempt from garnishment, including SSI, SSDI, Social Security retirement, public assistance, child support, unemployment, and veterans' benefits. Federal student loans, federal tax debts, and child support orders can garnish without a court judgment under their own special procedures."
  },

  whatToAsk: {
    en: [
      "Is there a court judgment behind this garnishment?",
      "What kind of debt is being collected — consumer, tax, child support, student loan?",
      "Is any of my income exempt from garnishment?",
      "How much can be taken from my paycheck or bank account?",
      "Can I file a claim of exemption to stop or reduce the garnishment?"
    ]
  },

  related: ["wage-garnishment", "judgment", "debt-collection", "default-judgment", "statute-of-limitations-debt"],
  legalEntryIds: [],

  citation: "NY CPLR Article 52 (enforcement of judgments)",
  sourceUrl: "https://www.nysenate.gov/legislation/laws/CVP/A52",
  lastVerified: "2026-04-26",
  status: "active"
};
