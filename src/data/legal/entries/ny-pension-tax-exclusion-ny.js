export const NY_PENSION_TAX_EXCLUSION_NY = {
  id: "ny-pension-tax-exclusion-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY TAX 612",
  status: "active",

  title: { en: "NY Pension and Retirement Income Tax Exclusion — Up to 20,000 Per Person Excluded" },

  summary: {
    en: "New York Tax Law 612(c)(3)(i) lets a retiree age 59 1/2 and older exclude up to 20,000 dollars per year of pension and retirement income from state income tax. Social Security benefits are fully exempt from NY tax regardless of age or amount. NY government pensions are also fully exempt. Federal military retirement is fully exempt. The 20K exclusion stacks separately for each spouse on a joint return."
  },

  whoQualifies: {
    en: [
      "A NY resident age 59 1/2 or older with pension or retirement income.",
      "A retiree receiving a private pension, 401(k) or IRA withdrawal, or employer-sponsored retirement plan.",
      "A married couple filing jointly where both spouses qualify — each gets a separate 20K exclusion.",
      "A recipient of federal Social Security benefits.",
      "A former federal, state, or local government employee receiving a government pension.",
      "A military retiree receiving a federal military pension."
    ]
  },

  whatItMeans: {
    en: "New York State provides significant tax breaks on retirement income. SOCIAL SECURITY: NY Tax Law Section 612(c)(3)(ii) fully exempts all Social Security benefits from NY state income tax regardless of age or amount. A retiree receiving 45,000 dollars a year in Social Security pays zero NY state income tax on that income. Federal tax on Social Security is separate — up to 85 percent of Social Security can be taxed federally based on total income. NY GOVERNMENT PENSIONS: Tax Law 612(c)(3)(i) fully exempts pensions from NY state government, NY local government (city, town, county, village), federal civil service retirement, and U.S. military retirement. A retired Rochester Police Department officer or NYS Department of Education employee pays zero NY tax on the government pension. PRIVATE AND OTHER PENSIONS: Tax Law 612(c)(3-a) provides a 20,000 dollar annual exclusion for private pensions, 401(k) distributions, IRA distributions, 403(b) distributions, and other non-government retirement income for any taxpayer age 59 1/2 or older. On a joint return where both spouses are 59 1/2 and both have retirement income, each spouse gets a separate 20,000 exclusion for a combined 40,000. The exclusion applies in order on NY Form IT-201 — first exhaust any fully exempt categories, then apply the 20K private pension exclusion against remaining retirement income. Income above the 20K per-person exclusion is taxed at NY rates (4 to 10.9 percent depending on bracket). AGE 59 1/2: the exclusion requires age 59 1/2 at the time the income is received. A 58-year-old taking an early IRA distribution does not qualify for the exclusion — the full amount is NY-taxable. The rule aligns with the federal 10 percent early withdrawal penalty age. Once turning 59 1/2, all retirement distributions received thereafter qualify. RESIDENCY: the exclusion applies to NY residents. A part-year resident who moved into or out of NY during the year can only apply the exclusion to the NY-resident portion of the year. A Monroe County retiree who moves to Florida typically stops paying NY tax on retirement income once Florida residency is established — NY cannot tax retirement income of a non-resident under federal law (4 USC 114 source-state-taxation-of-pension ban). WHAT DOES NOT QUALIFY: Traditional IRA withdrawals before age 59 1/2, Roth IRA withdrawals of earnings before age 59 1/2 or 5 years, deferred-comp distributions from non-qualified plans, cash surrender of a life insurance policy, annuity interest income on a non-qualified annuity, and ordinary investment income (dividends, interest, capital gains). These are taxed as regular income without the retirement-specific exclusions. FEDERAL TAX IS SEPARATE: the federal 1040 treats retirement income under its own rules. A NY retiree files both federal and NY tax returns; the exclusions described here apply only to NY state tax. COUNTY TAX: Monroe County has no county-level income tax (unlike NYC which has additional city tax). A Monroe County retiree owes only NY state tax (not NYC tax) beyond federal. LOCAL PENSION TAX: NY school districts, counties, and cities (outside NYC) do not impose income taxes on residents, so retirement income faces only federal plus NY state taxes. FORM IT-225 and the IT-201 Schedule B detail exact exclusions. Most tax software (TurboTax, H&R Block) calculates correctly when the user enters retirement income with the proper source designation. A retiree who used a tax preparer should confirm the 20K exclusion was applied correctly. For free tax preparation, VITA and AARP Foundation Tax-Aide in Monroe County help seniors with these returns."
  },

  yourRights: {
    en: [
      "A NY resident has the right to fully exempt Social Security benefits from state tax.",
      "A NY government or federal military/civil service pensioner has the right to fully exempt those pensions from state tax.",
      "A retiree 59 1/2 or older has the right to a 20,000 dollar annual exclusion for private pensions and retirement distributions.",
      "A joint-filing couple has the right to two separate 20K exclusions when both spouses qualify.",
      "A retiree moving out of NY has the right to not be taxed by NY on post-move retirement income under 4 USC 114.",
      "A retiree has the right to free tax preparation through VITA or AARP Foundation Tax-Aide."
    ]
  },

  legalOptions: {
    en: [
      "NY State Department of Taxation and Finance at (518) 457-5181 handles state tax questions and refunds.",
      "IRS at (800) 829-1040 handles federal retirement income questions.",
      "AARP Foundation Tax-Aide at (888) 227-7669 provides free tax help for seniors in Monroe County.",
      "VITA Monroe County sites — call 211 at (585) 442-0220 for locations.",
      "Monroe County Office for the Aging HIICAP at (585) 753-6280 helps seniors coordinate tax and benefits.",
      "For complex retirement situations, a CPA or enrolled agent typical fee 200 to 400 dollars per return."
    ]
  },

  example: {
    en: "Ernesto, 67, retired in 2023 from Monroe County government where he worked 28 years. His 2024 NY income was: 28,000 Social Security benefits, 48,000 NY Local Retirement System pension, 15,000 401(k) distribution from an earlier private-sector job. On his NY tax return, Social Security was fully exempt (zero tax). The 48,000 NY local government pension was fully exempt (zero tax). The 15,000 private 401(k) fell under the 20K private pension exclusion (zero tax). His total NY taxable income from retirement was zero. His NY tax liability came only from interest income on his savings (roughly 240 dollars). Federal tax was more substantial but unaffected by NY rules."
  },

  counsel: [
    {
      type: "government",
      name: "NY State Department of Taxation and Finance",
      focus: "State retirement income exclusion questions, IT-201 filing",
      qualifier: "Any NY retiree or tax filer",
      access: "Phone, website forms",
      outcome: "Form clarification, tax calculation help",
      phone: "(518) 457-5181",
      url: "https://www.tax.ny.gov/pit/credits/pension_and_annuity.htm",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "AARP Foundation Tax-Aide",
      focus: "Free tax preparation for seniors and low-income adults",
      qualifier: "Household at any income, seniors prioritized",
      access: "Phone for appointments, seasonal operation",
      outcome: "Free federal and NY tax preparation",
      phone: "(888) 227-7669",
      url: "https://www.aarp.org/money/taxes/aarp_taxaide",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "social-security-retirement-ny",
    "ssdi-ny",
    "nyslrs-public-pension-basics-ny",
    "epic-prescription-seniors-ny",
    "medicare-savings-program-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "NY pension tax exclusion",
    "TAX 612(c)(3)",
    "20000 pension exclusion",
    "Social Security exempt NY",
    "government pension exempt",
    "military retirement exempt NY",
    "age 59.5 retirement",
    "4 USC 114 source state",
    "VITA Tax-Aide senior",
    "IT-201 retirement"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/TAX/612",
    "https://www.tax.ny.gov/pit/credits/pension_and_annuity.htm"
  ],

  lastVerified: "2026-04-20",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
