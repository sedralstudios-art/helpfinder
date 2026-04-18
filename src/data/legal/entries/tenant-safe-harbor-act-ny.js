export const TENANT_SAFE_HARBOR_ACT_NY = {
  id: "tenant-safe-harbor-act-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Tenant Safe Harbor Act — Affirmative Defense Against COVID-Era Rent Evictions" },

  summary: {
    en: "The Tenant Safe Harbor Act of 2020 (L. 2020, Ch. 127) gives residential tenants an affirmative defense to eviction for rent owed during the COVID-19 covered period. A tenant who suffered financial hardship during the pandemic cannot be evicted for nonpayment of rent that came due between March 7, 2020 and June 24, 2021 (the end of the state disaster emergency). The landlord can still sue for money, but cannot obtain a warrant of eviction. The defense is still being litigated in 2026 for rent arrears from that period."
  },

  whoQualifies: {
    en: [
      "A residential tenant facing eviction for rent that came due between March 7, 2020 and June 24, 2021.",
      "A tenant who suffered financial hardship during the COVID state disaster emergency.",
      "A tenant who lost income, had increased expenses, or lost a household wage earner during the covered period.",
      "A tenant whose lease was a month-to-month or rent-regulated tenancy during that window.",
      "A tenant who has not yet been evicted but is facing a pending holdover or nonpayment proceeding involving covered-period rent."
    ]
  },

  whatItMeans: {
    en: "L. 2020, Chapter 127, enacted June 30, 2020 and later amended, added Section 8 to the Emergency Rent Relief Act and created an affirmative defense under Real Property Actions and Proceedings Law (RPAPL) 711. The covered period is March 7, 2020 (Executive Order 202) through the end of the state disaster emergency on June 24, 2021. Covered rent: monthly rent obligations that came due during the covered period, whether in a holdover or nonpayment proceeding. Financial hardship test: the court considers (1) tenant's income before and during the covered period, (2) liquid assets, (3) eligibility for or receipt of cash assistance, SNAP, unemployment, or other public benefits, (4) changes in household expenses, (5) whether the tenant had a household wage earner who lost income. No single factor controls; the court weighs them. What the defense does: if the tenant proves financial hardship during the covered period, the court cannot issue a warrant of eviction for that rent. What the defense does not do: it does not erase the rent debt. The landlord can obtain a money judgment and pursue it like any other debt — wage garnishment, bank levy, credit reporting. The defense also does not apply to rent owed before March 7, 2020 or after June 24, 2021. In 2026, courts still hear these cases when the arrears include covered-period rent that was not cured by ERAP (Emergency Rental Assistance Program) or other rent relief. Raising the defense: the tenant files an answer asserting the Tenant Safe Harbor Act as an affirmative defense, supported by proof of financial hardship (pay stubs, unemployment records, SNAP enrollment, medical bills). The court typically holds a hardship hearing. Some tenants combine the defense with an ERAP application, which provides an automatic stay while pending."
  },

  yourRights: {
    en: [
      "A tenant has the right to assert the Tenant Safe Harbor Act as an affirmative defense under RPAPL 711.",
      "A tenant has the right to a hardship hearing before the court issues a warrant of eviction.",
      "A tenant has the right to combine the defense with an ERAP application or other rent relief.",
      "A tenant has the right to remain in possession if the defense succeeds, even if the money judgment stands.",
      "A tenant has the right to request court-appointed counsel under the NY Right to Counsel if income-eligible.",
      "A tenant has the right to appeal an adverse ruling under CPLR Article 55."
    ]
  },

  legalOptions: {
    en: [
      "Monroe County Legal Assistance Center (LAC) at (585) 325-2520 — eviction defense for low-income tenants.",
      "Rochester Housing Court self-help at (585) 428-6650 — answer forms and procedural help.",
      "Legal Aid Society of Rochester at (585) 232-4090 — representation in nonpayment proceedings.",
      "Empire Justice Center at (585) 295-5800 — complex eviction defense and appeals.",
      "ERAP application portal at otda.ny.gov/programs/emergency-rental-assistance — may still accept supplemental applications.",
      "JustCause at (585) 295-5708 — pro bono housing attorneys.",
      "NY Right to Counsel statewide information at (347) 745-5484."
    ]
  },

  example: {
    en: "A Rochester tenant fell behind on rent between April 2020 and March 2021 after losing her restaurant job in the first week of the state shutdown. Her landlord filed a nonpayment proceeding in 2024 seeking $12,000 in arrears and a warrant of eviction. The tenant, with help from the LAC, filed an answer asserting the Tenant Safe Harbor Act. She documented her 2020 unemployment payments, SNAP enrollment, and medical bills from a COVID hospitalization. The court held a hardship hearing and found that the covered-period rent ($9,200) qualified for the safe-harbor defense. The court issued a money judgment for the full $12,000 but refused to issue a warrant of eviction. The tenant entered a payment plan on the money judgment and remained in her apartment."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Assistance of Western New York (LAWNY) / Monroe County Legal Assistance Center",
      focus: "Tenant Safe Harbor defenses, eviction proceedings, ERAP coordination",
      qualifier: "Low-income tenants (125% of federal poverty or below)",
      access: "Phone at (585) 325-2520",
      outcome: "Full representation in housing court",
      phone: "(585) 325-2520",
      url: "https://www.lawny.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "Empire Justice Center",
      focus: "Complex eviction defense, COVID-era rent disputes, appeals",
      qualifier: "Low-income tenants, referrals from LAC",
      access: "Phone at (585) 295-5800",
      outcome: "Representation and appellate work",
      phone: "(585) 295-5800",
      url: "https://empirejustice.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "eviction-process-ny",
    "right-to-counsel-eviction-ny-program",
    "landlord-retaliation-ny",
    "constructive-eviction-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "Tenant Safe Harbor Act",
    "L 2020 Chapter 127",
    "COVID eviction defense",
    "RPAPL 711",
    "financial hardship",
    "ERAP",
    "affirmative defense",
    "nonpayment proceeding",
    "warrant of eviction",
    "rent arrears"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/bills/2019/S8192",
    "https://www.nycourts.gov/courts/nyc/housing/tenant-safe-harbor.shtml",
    "https://otda.ny.gov/programs/emergency-rental-assistance"
  ],

  lastVerified: "2026-04-18",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
