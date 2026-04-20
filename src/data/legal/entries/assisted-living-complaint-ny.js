export const ASSISTED_LIVING_COMPLAINT_NY = {
  id: "assisted-living-complaint-ny",
  category: "healthcare",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY PBH 4656",
  status: "active",

  title: { en: "NY Assisted Living Complaint Process — How to Report Neglect, Abuse, or Billing Problems" },

  summary: {
    en: "Assisted Living Residences (ALRs), Enriched Housing Programs (EHPs), and Adult Care Facilities in New York are licensed by the NY Department of Health. A resident or family member can file complaints about safety, care quality, medication errors, billing problems, eviction threats, or abuse through the DOH hotline at 1-866-893-6772. The Long Term Care Ombudsman provides free advocacy."
  },

  whoQualifies: {
    en: [
      "A resident of a NY Assisted Living Residence, Enriched Housing Program, or Adult Care Facility.",
      "A family member or legal guardian of an assisted living resident.",
      "A hospital discharge planner or social worker observing a problem at a facility.",
      "A former resident whose billing or deposit issue was not resolved at discharge.",
      "Any witness to potential abuse or neglect of an assisted living resident."
    ]
  },

  whatItMeans: {
    en: "New York regulates three main types of residential long-term care facilities that are NOT nursing homes. Assisted Living Residences (ALRs) are licensed under Public Health Law Section 4656 and provide room, board, and personal care services to residents who do not need 24-hour skilled nursing. Enriched Housing Programs (EHPs) are a variant focused on independent living with some support services. Adult Care Facilities (ACFs) are licensed under Social Services Law and serve residents who need somewhat more care than ALRs but still not skilled nursing. All three facility types are licensed by the NY Department of Health Division of Adult Care Facilities and Assisted Living Surveillance. Residents have a Resident's Bill of Rights under 18 NYCRR 487 that includes: the right to be free from abuse and neglect, the right to make personal decisions, the right to keep personal belongings, the right to see visitors, the right to confidential medical records, the right to refuse treatment, the right to advance directives, the right to complain without retaliation, and the right to a written admission agreement disclosing all fees and services. Common complaint areas include: unsafe conditions (fall hazards, poor sanitation, cold rooms in winter), medication errors (wrong drug, wrong dose, missed doses), unexplained injuries, theft from resident rooms, unexpected charges or sudden fee increases not in the admission agreement, discharge or eviction notices without proper process, understaffing, and denial of food, water, or bathroom access. Complaints can be filed with the NY Department of Health Adult Care Facility Complaint Hotline at 1-866-893-6772, by email to acf@health.ny.gov, online at health.ny.gov, or by mail. Complaints can be anonymous, though giving a name helps the investigator follow up. DOH sends investigators (typically within 10 to 45 days depending on severity) to inspect the facility, interview staff and residents, and issue findings. Substantiated complaints result in deficiencies, corrective action plans, fines up to 10,000 dollars per violation, and sometimes license revocation. Statements of deficiency are public records — families can search a facility's inspection history at health.ny.gov. The NY Long Term Care Ombudsman Program is a separate agency under the Older Americans Act (42 USC 3058g) that provides free, confidential advocacy to residents of ALRs, EHPs, ACFs, and nursing homes. Lifespan of Greater Rochester at (585) 244-8400 houses the Monroe County Ombudsman who visits facilities weekly, hears complaints, and advocates for residents. The Ombudsman is NOT a regulator and cannot issue fines, but is a powerful ally in navigating the DOH complaint process or informal resolution. Adult Protective Services (APS) at (585) 753-6280 handles complaints involving older adults or adults with disabilities who may be victims of abuse, neglect, or exploitation — a separate complaint path. For financial disputes, residents and families can also pursue small claims court (under 5,000 dollars at Monroe County City Court), file a complaint with NYS Attorney General Consumer Frauds Bureau, or consult an elder law attorney through the Monroe County Bar Association at (585) 546-2130. Eviction from an ALR or EHP requires 30-day written notice with stated grounds under PBH 4658 for most situations; emergency discharge for imminent harm requires less notice but must be documented. A resident can challenge an eviction at Monroe County Court or the DOH. Retaliation for filing a complaint is itself a PBH 4658 violation and can result in additional fines against the facility."
  },

  yourRights: {
    en: [
      "A resident has the right to a Resident's Bill of Rights listing all protections under 18 NYCRR 487.",
      "A resident or family member has the right to file an anonymous complaint with DOH at 1-866-893-6772.",
      "A resident has the right to free Ombudsman advocacy through Lifespan of Greater Rochester.",
      "A resident has the right to 30-day written notice before involuntary discharge.",
      "A resident has the right to be free from retaliation for filing a complaint.",
      "A family has the right to review any facility's inspection history and deficiency reports online."
    ]
  },

  legalOptions: {
    en: [
      "NY Department of Health Adult Care Facility Complaint Hotline at 1-866-893-6772.",
      "Lifespan of Greater Rochester Long Term Care Ombudsman at (585) 244-8400.",
      "Monroe County Adult Protective Services at (585) 753-6280.",
      "NYS Attorney General Consumer Frauds Bureau at (800) 771-7755 handles financial and deceptive practice complaints.",
      "Legal Aid Society of Rochester at (585) 295-5727 represents low-income residents in discharge and rights cases.",
      "Monroe County Bar Association Lawyer Referral at (585) 546-2130 for elder law attorneys."
    ]
  },

  example: {
    en: "Pauline's 82-year-old mother was in a Monroe County assisted living facility and complained of unexplained bruises and missed medications. Pauline filed a complaint with the NY DOH hotline, contacted Lifespan Ombudsman, and called APS. The DOH investigator visited within 12 days, interviewed the mother and staff, and reviewed medication records. The facility was cited for staff training deficiencies and medication error patterns. The facility's corrective action plan included retraining all aides and installing camera monitoring in the medication room. Pauline and the Ombudsman also negotiated a refund of one month's care fee as compensation for the documented lapses."
  },

  counsel: [
    {
      type: "government",
      name: "NY Department of Health Adult Care Facility Complaint Hotline",
      focus: "Assisted living, EHP, and ACF complaints",
      qualifier: "Any NY resident, family member, or witness",
      access: "24-hour phone, email, online complaint form",
      outcome: "Facility investigation, deficiencies, fines, license action",
      phone: "1-866-893-6772",
      url: "https://www.health.ny.gov/facilities/adult_care",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "Lifespan of Greater Rochester Long Term Care Ombudsman",
      focus: "Free advocacy for ALR, EHP, ACF, and nursing home residents",
      qualifier: "Any Monroe County resident, family, or facility staff",
      access: "Phone, weekly facility visits, in-person meetings",
      outcome: "Resolution of complaints, coordination with DOH, advocacy with facility",
      phone: "(585) 244-8400",
      url: "https://www.lifespan-roch.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "Monroe County Adult Protective Services",
      focus: "Abuse, neglect, and exploitation of vulnerable adults",
      qualifier: "Anyone reporting concerns about a Monroe County vulnerable adult",
      access: "24-hour hotline",
      outcome: "APS investigation, safeguarding services, referral",
      phone: "(585) 753-6280",
      url: "https://www.monroecounty.gov/hs",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "adult-protective-services-ny",
    "nursing-home-rights-ny",
    "long-term-care-ombudsman-ny",
    "power-of-attorney-abuse-ny",
    "senior-fraud-prevention-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "assisted living complaint",
    "PBH 4656",
    "ALR NY",
    "Enriched Housing Program",
    "Adult Care Facility",
    "Long Term Care Ombudsman",
    "18 NYCRR 487",
    "resident bill of rights",
    "DOH 1-866-893-6772",
    "Lifespan Ombudsman Rochester"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/PBH/4656",
    "https://www.health.ny.gov/facilities/adult_care/survey/complaints.htm"
  ],

  lastVerified: "2026-04-20",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
