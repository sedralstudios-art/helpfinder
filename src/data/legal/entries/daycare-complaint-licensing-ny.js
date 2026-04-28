export const DAYCARE_COMPLAINT_LICENSING_NY = {
  id: "daycare-complaint-licensing-ny",
  category: "family",
  tier: "state",
  jurisdiction: "us-ny-mon",
  authorityType: "state-statute",
  primaryStatute: "NY SOS 390",
  status: "active",

  title: { en: "Daycare Complaints — How to Report Unsafe Conditions and Verify a License" },

  summary: {
    en: "Every daycare, preschool, and child care program in New York must be licensed or registered with the NYS Office of Children and Family Services (OCFS). A parent can verify a provider's license, check their inspection history, and file a complaint about unsafe conditions — all for free. The identity of the person filing a complaint is kept confidential."
  },

  whoQualifies: {
    en: [
      "Any parent who has concerns about safety, supervision, or conditions at a daycare or child care program.",
      "Any parent who wants to verify that a daycare provider is licensed.",
      "Any parent who wants to see the inspection history of a daycare program.",
      "Any person who suspects an unlicensed daycare is operating."
    ]
  },

  whatItMeans: {
    en: "Under New York Social Services Law Section 390, daycare centers, family day care homes, group family day care homes, and school-age child care programs must be licensed or registered with OCFS. Licensed programs are inspected regularly. Inspection reports are public — any parent can view them online or request them. Common issues that parents report include too many children per caregiver (staff-to-child ratio violations), unsafe conditions (unfenced yards, exposed outlets, broken equipment), children left unsupervised, lack of required training (CPR, first aid, mandated reporter training), failure to follow safe sleep practices for infants, and medication administration errors. When a complaint is filed, OCFS or the local social services district investigates. The complaint can be filed anonymously. Substantiated violations can result in corrective action, fines, probation, or license revocation. An unlicensed daycare that operates without registration is illegal. A parent who discovers their child is in an unlicensed facility can report it to OCFS. The provider can be fined and ordered to stop operating. Specific safety standards that providers must meet include staff-to-child ratios that vary by age (1:4 for infants up to 18 months, 1:5 for toddlers up to 36 months, 1:7 for preschool-age children, with smaller ratios in family day care), background checks for everyone over 16 in the home or facility, current immunizations on file for every child, completed health and safety training for all caregivers, written emergency evacuation plans posted in visible locations, working smoke and carbon monoxide detectors, and safe sleep practices for infants under 12 months. Mandated reporter rules require all child care providers to report suspected child abuse or neglect to the Statewide Central Register. Some providers participate in the Quality Stars NY rating system, which rates programs on a 1-to-5-star scale based on quality indicators beyond the licensing minimum; ratings are public and useful for parents comparing providers."
  },

  yourRights: {
    en: [
      "A parent has the right to verify any daycare provider's license status through OCFS — search online at ocfs.ny.gov.",
      "A parent has the right to view a daycare's inspection history and any substantiated complaints.",
      "A parent can file a complaint about unsafe conditions at any time. The complaint is confidential — the provider is not told who filed it.",
      "A daycare provider cannot retaliate against a parent for filing a complaint (such as terminating care for the child in response).",
      "A parent has the right to visit the daycare at any time during operating hours without advance notice.",
      "A parent has the right to know the staff-to-child ratio, the qualifications of the caregivers, and the emergency plan."
    ]
  },

  legalOptions: {
    en: [
      "OCFS Child Care Complaint Line at (800) 732-5207 — file a complaint about any licensed or registered child care program.",
      "Search for a provider's license and inspection history at ocfs.ny.gov/main/childcare/.",
      "Monroe County Department of Human Services Child Care office at (585) 753-6316 handles the local Child Care Assistance Program and child care subsidy questions.",
      "To report an unlicensed daycare, call the OCFS hotline at (800) 732-5207.",
      "If a child was injured at a daycare due to negligence, a personal injury attorney can assess the case — Monroe County Bar Association referral at (585) 546-2130.",
      "Child Care Council of Rochester at (585) 654-4720 helps parents find licensed child care and answers questions about quality and safety."
    ]
  },

  example: {
    en: "A parent in Greece noticed that her 3-year-old's daycare had 15 children with only one caregiver — well above the allowed ratio. She filed a complaint with OCFS at (800) 732-5207. An investigator visited the daycare within a week, confirmed the ratio violation, and issued a corrective action plan requiring the provider to hire additional staff within 30 days. The parent's identity was never disclosed to the provider."
  },

  counsel: [
    {
      type: "government",
      name: "NYS OCFS — Child Care Complaint Line",
      focus: "Daycare complaints, licensing verification, inspection reports",
      qualifier: "Any person with a concern about a child care program",
      access: "Phone at (800) 732-5207",
      outcome: "Investigation, corrective action, license enforcement",
      phone: "(800) 732-5207",
      url: "https://ocfs.ny.gov/programs/childcare/",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "Child Care Council of Rochester",
      focus: "Child care referrals, provider quality, parent resources",
      qualifier: "Parents in Monroe County",
      access: "Phone at (585) 654-4720",
      outcome: "Licensed provider referrals, quality information, parent support",
      phone: "(585) 654-4720",
      url: "https://www.childcarecouncil.com",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "home-daycare-license-ny",
    "childcare-assistance-ny",
    "childcare-subsidy-ny",
    "reporting-child-abuse-ny",
    "cps-investigation-process-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "daycare complaint",
    "daycare license",
    "daycare inspection",
    "daycare safety",
    "child care complaint",
    "daycare ratio",
    "unlicensed daycare",
    "daycare report",
    "OCFS daycare",
    "daycare Monroe County",
    "daycare provider check"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/SOS/390",
    "https://ocfs.ny.gov/programs/childcare/"
  ],

  lastVerified: "2026-04-27",
  factCheckedBy: { tool: "websearch+webfetch", date: "2026-04-27" },
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
