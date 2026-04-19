export const CHILD_PROTECTIVE_SERVICES_PROCESS_NY = {
  id: "child-protective-services-process-ny",
  category: "family",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY SOS 413",
  status: "active",
  draft: true,

  title: { en: "Child Protective Services — What Happens After a Report, Parents' Rights, and Family Court" },

  summary: {
    en: "When someone calls the State Central Register (SCR) about a child, the local Child Protective Services agency opens an investigation. Parents have specific rights — to understand the allegations, to have counsel assigned in court, to contest indicated findings, and to due process at every stage. Most cases end with the case closed; a small share proceed to Family Court under Article 10."
  },

  whoQualifies: {
    en: [
      "Any parent, caregiver, or legal guardian who received a CPS visit or notice.",
      "Any parent whose child was removed from the home.",
      "Any parent listed as the subject of a child abuse or maltreatment report.",
      "Any family member considering making a report about a child."
    ]
  },

  whatItMeans: {
    en: "Child Protective Services in New York operates under Social Services Law Sections 411 through 428 and Family Court Act Article 10. The State Central Register of Child Abuse and Maltreatment (SCR, 1-800-342-3720) takes reports 24 hours per day from anyone. Mandated reporters (teachers, medical providers, social workers, police, child care workers, and many others per SOS Section 413) must report suspected abuse or maltreatment. Once SCR registers a report, it is forwarded to the local CPS (Monroe County DHS for Monroe County) within 24 hours. CPS must begin investigating within 24 hours and conclude within 60 days. During the investigation: CPS visits the home, interviews the child (sometimes without the parent present), interviews the parent, visits the child's school or medical providers, and gathers documents. If immediate safety is at risk, CPS can remove the child to temporary care under Family Court Act Section 1024 — a court hearing must follow within 3 court days. Most investigations end with one of two findings. Unfounded: no credible evidence — the report is sealed and expunged after 10 years. Indicated: some credible evidence of abuse or maltreatment — the report is kept in the SCR and may show on certain background checks (for people working with children) for up to 8 years after the child's 18th birthday. Indicated findings can be appealed through an administrative hearing at the NYS Office of Children and Family Services. If CPS believes court intervention is needed, they file an Article 10 petition in Family Court alleging abuse or neglect. The parent has the right to a court-appointed attorney at the first court appearance. The child has a separate attorney (the attorney for the child). The case proceeds through fact-finding and dispositional hearings. Dispositions can include services at home, out-of-home placement with relatives (kinship care), or out-of-home placement with foster parents. Termination of parental rights is a separate, later proceeding only possible after specific grounds are met."
  },

  yourRights: {
    en: [
      "A parent has the right to know the general nature of the allegations under investigation.",
      "A parent has the right to refuse CPS entry to the home without a court order — but refusal can result in CPS seeking emergency court authorization.",
      "A parent has the right to an attorney at every Family Court appearance, at no cost if unable to afford one.",
      "A parent has the right to appeal an indicated CPS finding through an administrative hearing.",
      "A parent has the right to due process: notice, hearings, cross-examination of witnesses, and written findings.",
      "A parent has the right to have their child placed with a relative in the first instance if removal is necessary."
    ]
  },

  legalOptions: {
    en: [
      "Monroe County Department of Human Services — CPS Unit at (585) 461-5690 handles investigations in Monroe County.",
      "NYS Central Register for reporting suspected abuse: (800) 342-3720 (24/7).",
      "For parents involved in CPS investigations, Legal Aid Society of Rochester's Family Defense Practice at (585) 232-4090 represents indigent parents in Family Court.",
      "Monroe County Public Defender's Office at (585) 753-4055 handles court-appointed representation for parents in some CPS cases.",
      "Empire Justice Center at (585) 454-4060 handles systemic family defense matters.",
      "For appealing an indicated finding (after the Family Court case concludes), the administrative hearing request is filed with OCFS within 90 days of the finding.",
      "The NYS Office of the Child Advocate (formerly Family Court ombudsman) provides guidance at (518) 473-7793."
    ]
  },

  example: {
    en: "A Rochester parent received a CPS visit after a neighbor made a report about hearing frequent yelling. The CPS worker observed the home, interviewed the children at school, and reviewed medical records. The investigation closed after 55 days with an unfounded finding — no credible evidence of maltreatment. The report was sealed. A second parent in a different case was served with an Article 10 petition in Family Court after a school reported unexplained bruising. She was assigned an attorney from Legal Aid Society of Rochester. At the initial appearance, the judge ordered an investigation but left the children in the home with services. The case resolved with an adjournment in contemplation of dismissal after the family completed six months of family counseling — no finding of abuse, case dismissed."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester — Family Defense Practice",
      focus: "Parent representation in CPS and Family Court Article 10 cases",
      qualifier: "Indigent parents in Monroe County family court cases",
      access: "Phone intake at (585) 232-4090",
      outcome: "Free representation at all stages of the Family Court case",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "NYS Central Register",
      focus: "Reports of suspected child abuse or maltreatment",
      qualifier: "Any person with concerns about a child in NY",
      access: "24/7 hotline at (800) 342-3720",
      outcome: "Report intake, referral to local CPS",
      phone: "(800) 342-3720",
      url: "https://ocfs.ny.gov/programs/cps/",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "family-court-what-to-expect-ny",
    "foster-care-aging-out-ny",
    "bullying-harassment-school-ny",
    "bullying-harassment-school-ny",
    "order-of-protection-ny",
    "adult-protective-services-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "Child Protective Services",
    "CPS",
    "State Central Register",
    "Article 10 Family Court",
    "SOS 413 mandated reporter",
    "CPS investigation",
    "indicated finding",
    "child abuse report",
    "family defense",
    "parental rights"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/SOS/413",
    "https://www.nysenate.gov/legislation/laws/SOS/424",
    "https://www.nysenate.gov/legislation/laws/FCT/1022",
    "https://ocfs.ny.gov/programs/cps/"
  ],

  lastVerified: "2026-04-18",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
