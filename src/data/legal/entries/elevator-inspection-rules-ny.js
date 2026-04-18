export const ELEVATOR_INSPECTION_RULES_NY = {
  id: "elevator-inspection-rules-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-regulation",
  primaryStatute: "NY LAB 27-A",
  status: "active",

  title: { en: "Elevator and Escalator Inspection Rules — NY Department of Buildings and State Labor Law Requirements" },

  summary: {
    en: "New York Labor Law Section 27-a (the Public Employee Safety and Health Act) and NY State Building Code adopt ASME A17.1 standards for elevator and escalator operation. Elevators in apartment buildings, office buildings, and public venues must be inspected annually by a licensed inspector and must have a current certificate of operation posted. Outside NYC, local building departments enforce. NYC has its own Department of Buildings inspection program."
  },

  whoQualifies: {
    en: [
      "A tenant in an apartment building whose elevator is out of service for extended periods.",
      "A tenant whose disability requires elevator access when the elevator fails.",
      "A visitor injured by a malfunctioning elevator or escalator.",
      "A building owner responsible for elevator maintenance and compliance.",
      "An elevator mechanic or inspector navigating the licensing scheme.",
      "A commercial tenant whose business is disrupted by elevator outages."
    ]
  },

  whatItMeans: {
    en: "Elevator safety in NY is governed by multiple overlapping regimes. State standard: NY State Uniform Fire Prevention and Building Code adopts ASME A17.1 (Safety Code for Elevators and Escalators) as the technical standard. Labor Law 27-a applies to public employees and public buildings. General Business Law and the Property Maintenance Code impose compliance on private buildings. NYC: New York City has its own Administrative Code and the NYC Department of Buildings (DOB) elevator inspection program under 1 RCNY 103-02, the most rigorous and data-rich system in the state. Outside NYC: in upstate NY including Monroe County, enforcement is primarily through local building departments under the Uniform Code. The City of Rochester has a building code office that inspects elevators in multi-family and commercial buildings. Monroe County Public Health and Building Codes and local building departments in each municipality cover municipal enforcement. Required inspections: annual periodic inspection by a NYC DOB-licensed inspector (NYC) or a qualified local inspector (outside NYC). Category 1 (no-load) annual; Category 5 (full-load with safety testing) every 5 years. Inspection reports are filed with the local authority and DOB. Certificate of operation: must be posted in the elevator cab or near the lobby entrance, showing the most recent inspection date and inspector credentials. Outdated certificates signal compliance failure. Outages and repair: a building owner must provide timely repair and not allow an elevator to remain out of service for extended periods without cause. ADA accessibility requirements (42 USC 12182) may impose additional obligations for tenants with disabilities — an elevator out of service in a required-access facility is an ADA violation. Tenant remedies: if an apartment building elevator is out of service and causes hardship (disabled or elderly tenants cannot access their unit), tenants can file complaints with the local building department and the NY State Division of Housing and Community Renewal (HCR) for rent-regulated tenants. Under NY RPL 235-b (warranty of habitability), persistent elevator outage in a multi-story building can be a habitability violation. A tenant can petition for rent abatement. NYC has a 'failed to restore elevator service' rent reduction rule; outside NYC the remedy is via HP actions or Housing Court. Injury from malfunction: a person injured by elevator malfunction has a negligence claim against the building owner and elevator service company. The claim often involves expert testimony from an elevator mechanic and code compliance analysis. Building owners typically have liability insurance. Statute of limitations is 3 years from injury (CPLR 214). A notice of claim is required for municipal buildings under GML 50-e. Criminal aspects: a building owner or mechanic who knowingly violates safety code and causes injury can face criminal penalties under Labor Law 213. Common issues: delayed reporting of outages (required within specific timeframes under local law), unlicensed maintenance personnel, bypassed safety features (deadman brakes disabled, door interlocks tampered), overdue Category 5 testing, outdated documentation. Tenant advocacy: a building with persistent elevator problems affecting multiple tenants warrants organized tenant complaint (see tenant-organizing-rights-ny). Group complaint to building department, HP action in Housing Court, and HCR complaint can compel repair. Monroe County specifics: The City of Rochester Building Bureau at (585) 428-6526 handles elevator complaints in the city. Outside the city, contact the Monroe County Building Department at (585) 753-1800 or the local municipality. Elevator service companies typically carry emergency repair service with 24-hour response under contract."
  },

  yourRights: {
    en: [
      "A tenant has the right to a functioning elevator in accessible multi-story buildings under warranty of habitability (RPL 235-b).",
      "A person with a disability has the right to elevator access under ADA Title III (42 USC 12182).",
      "A building occupant has the right to see the certificate of operation with current inspection date.",
      "A tenant has the right to file a building department complaint.",
      "A rent-regulated tenant has the right to file with HCR for service reduction (rent decrease).",
      "An injured person has the right to sue for negligence and recover damages.",
      "A tenants' association has the right to file group complaints and HP actions.",
      "A worker or inspector has whistleblower protection for reporting safety violations (Labor Law 740)."
    ]
  },

  legalOptions: {
    en: [
      "City of Rochester Building Bureau at (585) 428-6526.",
      "Monroe County Building Department at (585) 753-1800.",
      "NYS Division of Housing and Community Renewal Tenant Protection Unit at (833) 208-4265.",
      "NYS Department of State Uniform Code Division at (518) 474-4073 — building code technical.",
      "Empire Justice Center at (585) 295-5800 — systemic habitability.",
      "Legal Aid Society of Rochester at (585) 232-4090 — low-income tenant remedies.",
      "NY Attorney General Civil Rights Bureau at (212) 416-8000 — ADA claims.",
      "Monroe County Bar Association Lawyer Referral at (585) 546-2130 — injury attorneys."
    ]
  },

  example: {
    en: "A wheelchair-using tenant in a 6-story Rochester apartment building was trapped in her unit for 9 days when the building's only elevator broke down. The landlord kept promising repair but did not dispatch a mechanic. She contacted Rochester Building Bureau and Legal Aid. The Building Bureau issued a notice of violation to the landlord requiring repair within 72 hours. Legal Aid filed an HP action in Housing Court seeking an order to correct and rent abatement. The court ordered emergency repair and appointed an HP monitor. The elevator was back in service within 4 days of the court order. The landlord was fined by the Building Bureau and paid 20 percent rent abatement for the period of outage under habitability. A disability-discrimination claim was filed with NYS Division of Human Rights for the access denial; it settled with additional damages."
  },

  counsel: [
    {
      type: "government",
      name: "City of Rochester Building Bureau",
      focus: "Elevator inspection complaints, code enforcement, certificate verification",
      qualifier: "Any Rochester building occupant or owner",
      access: "Phone at (585) 428-6526",
      outcome: "Inspection, violation notice, compliance order",
      phone: "(585) 428-6526",
      url: "https://www.cityofrochester.gov/buildings/",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "Habitability HP actions, elevator outage rent abatement",
      qualifier: "Low-income Monroe County tenants",
      access: "Phone at (585) 232-4090",
      outcome: "HP action filing, rent abatement, injury referral",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "tenant-habitability-ny",
    "ada-title-iii-public-accommodations-ny",
    "tenant-organizing-rights-ny",
    "slip-and-fall-premises-liability-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "elevator inspection",
    "ASME A17.1",
    "Labor Law 27-a",
    "certificate of operation",
    "elevator outage",
    "habitability elevator",
    "ADA elevator access",
    "NYC DOB elevator",
    "rent abatement outage",
    "HP action elevator"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/LAB/27-A",
    "https://dos.ny.gov/uniform-code",
    "https://www.law.cornell.edu/uscode/text/42/12182"
  ],

  lastVerified: "2026-04-18",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
