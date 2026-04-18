export const CHILD_CARE_LICENSING_NY = {
  id: "child-care-licensing-ny",
  category: "family",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-regulation",
  primaryStatute: "18 NYCRR PART 413",
  status: "active",

  title: { en: "Child Care Licensing in New York — Provider Types, Inspections, and Complaint Rights" },

  summary: {
    en: "Child care providers in New York are grouped into license types based on the number of children and setting. Day care centers, group family day care homes, family day care homes, school-age child care, and legally-exempt providers each have different rules. Parents have the right to see inspection reports, file complaints, and know a provider's history before enrolling."
  },

  whoQualifies: {
    en: [
      "Any parent choosing a child care provider who wants to understand licensing categories.",
      "Any parent with a concern about a licensed provider's practices.",
      "Any person interested in becoming a licensed child care provider.",
      "Any parent receiving a child care subsidy who needs to confirm the provider's eligibility."
    ]
  },

  whatItMeans: {
    en: "The New York Office of Children and Family Services (OCFS) regulates child care under 18 NYCRR Parts 413-418. Each type has distinct rules. Day care centers (Part 418-1) serve 7 or more children in a non-residential setting — strictest staffing ratios, facility standards, and teacher qualifications. Small day care centers (Part 418-2) serve 3-6 children in a non-residential setting. Group family day care homes (Part 416) are residential, serving up to 12 children (with a required assistant). Family day care homes (Part 417) are residential, serving up to 6 children (or 8 with school-age children included). School-age child care (Part 414) serves children ages 5-12 before/after school. Legally-exempt care (Part 415) is care by a relative, in a child's own home, or in small informal arrangements — not licensed but eligible to receive child care subsidy payments with an enrollment form. Licensed providers are inspected at least once every two years (more often for complaints or violations). Inspection reports are public — parents can view them through OCFS's online portal or by request. Violations are categorized: serious violations (endangering health or safety), repeat violations, and minor infractions. Serious or unresolved violations can lead to suspension or revocation. In Monroe County, the Child Care Council runs the Child Care Resource and Referral (CCR&R) office that helps parents find licensed providers, explains subsidy eligibility, and can connect families to providers based on specific needs. Unlicensed care that exceeds the legally-exempt category (caring for more children than allowed, operating as a business without a license) is illegal."
  },

  yourRights: {
    en: [
      "A parent has the right to see a child care provider's full inspection history through OCFS at ocfs.ny.gov.",
      "A parent has the right to file a complaint about a provider at any time.",
      "A child care provider must allow parents to visit their child during care hours.",
      "A parent has the right to know the provider's licensing status, capacity, and staff qualifications.",
      "A child care subsidy recipient has the right to choose any legally-eligible provider — the county DSS enrolls the provider.",
      "A provider who endangers children can be immediately suspended pending investigation."
    ]
  },

  legalOptions: {
    en: [
      "OCFS complaint line for licensed providers: (800) 732-5207.",
      "OCFS provider lookup and inspection reports: ocfs.ny.gov/programs/childcare/lookup/.",
      "Child Care Council at (585) 654-4720 — provides free referrals, subsidy navigation, and parent support in Monroe County.",
      "For subsidy-related questions, Monroe County DSS at (585) 753-6960.",
      "For suspected child abuse at any care setting, the Statewide Central Register at (800) 342-3720 operates 24/7.",
      "Free legal help with subsidy denials or provider disputes is available through Legal Aid Society of Rochester at (585) 232-4090."
    ]
  },

  example: {
    en: "A parent in Irondequoit was choosing between two family day care homes. She used the OCFS online lookup to check both providers' inspection history. One had two years of clean inspections. The other had been cited twice in the past year for staffing ratios and had an open corrective action plan. She chose the first provider and shared the inspection information with her neighbor, who also switched. The flagged provider later improved after the corrective action was completed — inspection records update continuously."
  },

  counsel: [
    {
      type: "government",
      name: "NYS OCFS — Child Care Licensing",
      focus: "Provider licensing, inspections, complaint investigation",
      qualifier: "Any NYS parent or provider",
      access: "Phone at (800) 732-5207",
      outcome: "Complaint investigation, license actions, provider lookup",
      phone: "(800) 732-5207",
      url: "https://ocfs.ny.gov/programs/childcare/",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "Child Care Council",
      focus: "Free child care referrals, subsidy help, parent support",
      qualifier: "Monroe County families",
      access: "Phone at (585) 654-4720",
      outcome: "Provider matching, subsidy navigation, parent education",
      phone: "(585) 654-4720",
      url: "https://www.childcarecouncil.com",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "childcare-subsidy-ny",
    "home-daycare-license-ny",
    "school-residency-enrollment-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "child care licensing",
    "day care license",
    "family day care",
    "OCFS child care",
    "child care inspection",
    "18 NYCRR Part 413",
    "legally exempt care",
    "child care complaint",
    "provider lookup",
    "child care subsidy provider"
  ],

  sources: [
    "https://www.law.cornell.edu/regulations/new-york/title-18/chapter-II/subchapter-C/part-413",
    "https://www.law.cornell.edu/regulations/new-york/title-18/chapter-II/subchapter-C/part-417",
    "https://ocfs.ny.gov/programs/childcare/"
  ],

  lastVerified: "2026-04-18",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
