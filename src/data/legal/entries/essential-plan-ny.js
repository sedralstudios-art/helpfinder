export const ESSENTIAL_PLAN_NY = {
  id: "essential-plan-ny",
  category: "healthcare",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY INS 3222",
  status: "active",

  title: { en: "NY Essential Plan — Free or Low-Cost Health Insurance for Incomes Between Medicaid and QHP" },

  summary: {
    en: "The Essential Plan is a New York health insurance program for residents earning between 138 percent and 250 percent of the federal poverty level (plus certain others). Monthly premium is 0 dollars for most enrollees and there are no deductibles. 2024 expansion raised the income ceiling from 200 to 250 percent of poverty. Enrollment is through NY State of Health."
  },

  whoQualifies: {
    en: [
      "A NY resident with household income between 138 and 250 percent of the federal poverty level.",
      "An adult 19 to 64 not eligible for Medicaid but unable to afford private insurance.",
      "A lawfully present immigrant who is in a qualified immigration status.",
      "A resident who lost Medicaid at redetermination because income went up.",
      "A part-time worker, gig worker, or early retiree without employer insurance."
    ]
  },

  whatItMeans: {
    en: "The New York Essential Plan was created under the Affordable Care Act's Basic Health Program option (42 USC 18051) and implemented through NY Insurance Law Section 3222 and the NY Health Benefit Exchange. It provides health insurance at very low or no cost to New Yorkers whose income is too high for Medicaid but not high enough to afford a private Qualified Health Plan (QHP) even with ACA subsidies. Eligibility: an adult 19 to 64 (not eligible for Medicare), lawfully present in the U.S., and household income between 138 and 250 percent of the federal poverty level (FPL). In 2026 the FPL thresholds for Essential Plan are approximately 21,870 to 39,620 dollars for a single adult, or 45,000 to 81,450 dollars for a family of four. The 2024 NY budget expanded the upper income limit from 200 to 250 percent, making the Essential Plan available to significantly more working New Yorkers. Costs are dramatically lower than private insurance. Monthly premium is 0 dollars for enrollees under 200 percent of FPL. Enrollees at 200 to 250 percent pay a small premium (typically 15 to 30 dollars per month). No deductible applies. Copays are minimal — typically 0 to 25 dollars for doctor visits and prescriptions. All essential health benefits under the ACA are covered: preventive care, primary care, specialists, hospital care, mental health, maternity, prescription drugs, and more. Pre-existing conditions cannot be excluded. No waiting period for coverage of existing conditions. Enrollment is through the NY State of Health marketplace at nystateofhealth.ny.gov or by phone at 1-855-355-5777. Like Medicaid, Essential Plan enrollment is year-round — there is no open enrollment window. A person whose income fits Essential Plan can apply any time. A person whose Medicaid eligibility ends because of income increase is typically auto-transferred to Essential Plan without interruption in coverage. Plans are administered by private insurers including Fidelis Care, MVP, Excellus BlueCross BlueShield, Healthfirst, and others in the Monroe County region. The enrollee picks the plan from available options. Provider networks differ so an enrollee should confirm that their preferred doctors participate. Essential Plan enrollees get the same benefits as the chosen insurer's commercial plan customers, but at the subsidized cost. The 2024 expansion also added vision and dental as included benefits for new enrollees, further aligning with Medicaid coverage. Historically Essential Plan had limited vision and dental — the 2024 update closed that gap. An enrollee whose income changes must report within 30 days. If income drops below 138 percent, the person becomes Medicaid-eligible and is auto-moved to Medicaid. If income rises above 250 percent, the person is transitioned to a Qualified Health Plan with tax credit subsidies. Immigration status rules: lawful permanent residents (green card holders) qualify regardless of length of residence (no 5-year bar that applies to Medicaid). DACA recipients became eligible for Essential Plan in 2024 following a federal policy change. Undocumented immigrants do not qualify for Essential Plan, but may qualify for Emergency Medicaid (coverage of emergency services under PHL 366) or for low-cost hospital care through PHL 2807-k financial assistance. The Essential Plan has been studied by Manatt and other health policy researchers as one of the most generous public insurance programs in the U.S., providing full benefits at near-zero cost. NY is one of only 2 states (with Minnesota) that implemented a Basic Health Program under ACA Section 1331."
  },

  yourRights: {
    en: [
      "A NY resident 19 to 64 with income 138 to 250 percent of poverty has the right to Essential Plan enrollment.",
      "A lawful immigrant (green card holder, DACA, qualifying status) has the right regardless of 5-year bar.",
      "An enrollee has the right to year-round enrollment with no open enrollment window.",
      "An enrollee has the right to 0 or minimal premium plus no deductible.",
      "A current Medicaid recipient has the right to auto-transition to Essential Plan if income increases beyond Medicaid.",
      "The enrollee has the right to pick among participating insurers."
    ]
  },

  legalOptions: {
    en: [
      "NY State of Health at 1-855-355-5777 or nystateofhealth.ny.gov handles Essential Plan applications.",
      "Monroe County Department of Human Services at (585) 753-6960 assists with application.",
      "Navigator services (free in-person help) available at Hillside Children's Center and other Monroe County partners — contact NY State of Health for a Navigator appointment.",
      "Community Service Society of NY Health Helpline at 1-888-614-5400 provides free coverage counseling.",
      "Legal Aid Society of Rochester at (585) 232-4090 represents applicants denied coverage.",
      "For DACA status questions related to Essential Plan, immigration attorneys can be found through Monroe County Bar Association at (585) 546-2130."
    ]
  },

  example: {
    en: "Dmitri is 34, works part-time as a barista in Rochester, and earns 26,000 dollars a year — about 166 percent of the federal poverty level for a single person. Too high for Medicaid, and a Qualified Health Plan with ACA tax credit still had a 150 dollar monthly premium plus 2,500 dollar deductible. He enrolled in the Essential Plan through NY State of Health with zero monthly premium. His coverage started the first of the following month. He picked Fidelis Care which included his primary care doctor at Strong Memorial. All benefits including mental health counseling cost 0 to 25 dollars per visit."
  },

  counsel: [
    {
      type: "government",
      name: "NY State of Health Marketplace",
      focus: "Essential Plan, Medicaid, Child Health Plus, and QHP applications",
      qualifier: "Any NY resident",
      access: "Phone, online portal, in-person Navigator appointments",
      outcome: "Health insurance enrollment, plan selection, renewal support",
      phone: "1-855-355-5777",
      url: "https://nystateofhealth.ny.gov/essential-plan",
      verified: true,
      bilingual: true,
      languages: ["es", "ar", "zh"]
    },
    {
      type: "nonprofit",
      name: "Community Service Society of NY Health Helpline",
      focus: "Free health insurance counseling and enrollment help",
      qualifier: "Any NY resident",
      access: "Phone intake",
      outcome: "Enrollment support, plan selection counseling",
      phone: "1-888-614-5400",
      url: "https://www.cssny.org/health-helpline",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "ny-state-of-health-marketplace-ny",
    "medicaid-ny",
    "child-health-plus-ny",
    "contraception-coverage-ccca-ny",
    "hospital-financial-assistance-charity-care-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "NY Essential Plan",
    "INS 3222",
    "Basic Health Program",
    "0 dollar premium",
    "138 to 250 percent poverty",
    "free health insurance NY",
    "NY State of Health",
    "2024 EP expansion",
    "DACA Essential Plan",
    "Medicaid transition"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/ISC/3222",
    "https://nystateofhealth.ny.gov/essential-plan"
  ],

  lastVerified: "2026-04-20",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
