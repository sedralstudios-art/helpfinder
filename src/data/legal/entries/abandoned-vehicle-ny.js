export const ABANDONED_VEHICLE_NY = {
  id: "abandoned-vehicle-ny",
  category: "vehicle",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY VAT 1224",
  status: "active",

  title: { en: "Abandoned Vehicles in New York — Reporting, Removal, and the DMV Title Process" },

  summary: {
    en: "An abandoned vehicle on private property or a public street can be reported and removed. Under Vehicle and Traffic Law 1224, a vehicle left unattended on public property for more than 96 hours, or left on private property without the owner's consent, is considered abandoned. The removal process depends on where the vehicle is and whether the owner can be identified. A property owner cannot sell or scrap an abandoned vehicle without going through the DMV's MV-83 abandoned vehicle title process. A vehicle owner who abandons a car can face fines and be billed for tow and storage costs."
  },

  whoQualifies: {
    en: [
      "A property owner who has an abandoned vehicle on their land.",
      "A resident who wants to report an abandoned vehicle on a public street.",
      "A person who bought property and found vehicles left behind by the prior owner.",
      "A vehicle owner whose car was towed as abandoned and who wants to reclaim it.",
      "A junkyard or towing company that holds an abandoned vehicle and wants title to scrap or resell it."
    ]
  },

  whatItMeans: {
    en: "Vehicle and Traffic Law 1224 is the core statute. It defines an abandoned vehicle and sets the procedure for removing and disposing of it. The procedure differs depending on whether the vehicle is on public or private property.\n\nPublic property. A vehicle left unattended on a public highway or public property for more than 96 consecutive hours is considered abandoned. The police or municipality can tow it to a designated impound or contracted tow yard. The police run the plate and try to identify the registered owner. The owner gets written notice and a deadline to reclaim. If the vehicle is not claimed, it can be sold at auction or scrapped, and the proceeds go to the municipality after expenses.\n\nPrivate property. A property owner dealing with an abandoned vehicle on their land has to follow the legal process. Self-help — towing it themselves, selling it, or scrapping it — can create liability for conversion. The usual route: contact the local police or code enforcement, who try to identify the owner, leave a tag on the vehicle, and give the owner a notice period. When the owner does not respond, the vehicle can be towed at the owner's expense or, in certain situations, at the property owner's cost that becomes a lien against the vehicle.\n\nGetting title to an abandoned vehicle. A property owner who wants to keep or sell an abandoned vehicle goes through the DMV's MV-83 'Abandoned Vehicle Affidavit' process. The affidavit is filed with DMV along with proof of efforts to identify the owner, and DMV issues a new title after a statutory waiting period. This works only when the vehicle has limited or no remaining lien; a vehicle with an open lien is more complex and usually requires the lender's involvement.\n\nReporting in Rochester. Abandoned vehicles on public streets can be reported to Rochester 311 (call or app). The city investigates, tags the vehicle, and tows it when the criteria are met. For vehicles on private property in the city, the Rochester Police non-emergency line at (585) 428-7033 is the right call. Suburban towns each have their own non-emergency police line and code enforcement office.\n\nReclaiming a towed vehicle. A vehicle owner whose car was towed as abandoned can reclaim it by paying tow and storage fees. Working out an expired registration or insurance issue first often matters — the DMV may require current registration before the vehicle leaves the tow yard.\n\nFines and liability. The registered owner who abandoned the vehicle can be cited for abandonment and billed for the tow, storage, and disposal costs. The fine and costs become a judgment that can affect the owner's registration, license renewal, or credit.\n\nHazard situations. An abandoned vehicle that is leaking fluids, poses a fire risk, or is otherwise hazardous should be reported to the fire department or environmental code enforcement alongside the regular abandoned-vehicle report. Fluid spills trigger DEC involvement for cleanup.\n\nApartment and rental lot settings. A car left in a tenant parking lot after the tenant moved out goes through the private-lot process above. The landlord or property manager works with the police to identify the owner and with the tow operator to remove it. Rushing the process by towing without the police step can create liability.\n\nPrivate sale without title. Selling an abandoned vehicle without first getting title through DMV creates problems for the buyer — DMV will not register the vehicle without a clean title. Working through the MV-83 process takes time but produces a marketable title."
  },

  yourRights: {
    en: [
      "A vehicle left on a public street for more than 96 hours can be reported and towed as abandoned.",
      "A property owner has the right to remove an unauthorized vehicle from their land by working through the police or code enforcement, not by self-help.",
      "A vehicle owner has the right to written notice before a vehicle is disposed of when the owner can be identified.",
      "A vehicle owner whose car was towed has the right to reclaim it by paying tow and storage fees.",
      "A property owner has the right to pursue an MV-83 abandoned vehicle title through the DMV to sell or scrap an abandoned vehicle.",
      "A registered owner who abandoned a vehicle can be cited and billed for tow, storage, and disposal costs."
    ]
  },

  legalOptions: {
    en: [
      "In Rochester, abandoned vehicles on public streets can be reported through 311 (call or app).",
      "For vehicles on private property in Rochester, the RPD non-emergency line at (585) 428-7033 is the right call.",
      "In suburban towns, the town police or code enforcement office handles the report.",
      "To obtain title to an abandoned vehicle on private property, DMV form MV-83 (Abandoned Vehicle Affidavit) starts the process. DMV at (518) 486-9786 handles the paperwork.",
      "For hazardous vehicles — leaking fluids, fire risk — the fire department or environmental code enforcement should be called alongside the regular report.",
      "A tow yard holding an abandoned vehicle can pursue its own title process to cover unpaid storage fees."
    ]
  },

  example: {
    en: "A homeowner in Rochester finds a car parked in her driveway that does not belong to her. It has been there for a week. She calls the RPD non-emergency line. The police run the plates, attempt to contact the registered owner, and tag the vehicle. When the owner does not respond within the notice period, the police arrange for the vehicle to be towed at the registered owner's expense. The homeowner's driveway is clear and the tow bill is not hers."
  },

  counsel: [
    {
      type: "free",
      name: "Rochester 311 — Abandoned Vehicles",
      focus: "Abandoned vehicle reports on public streets",
      qualifier: "Rochester residents",
      access: "Phone or app",
      outcome: "Investigation, tagging, towing",
      phone: "311",
      url: "https://www.cityofrochester.gov/311/",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "car-towed-repossessed-ny",
    "unauthorized-towing-ny",
    "parking-ticket-ny",
    "neighbor-disputes-ny-cl"
  ],

  relatedHelpResources: [],

  tags: [
    "abandoned vehicle",
    "abandoned car",
    "car on property",
    "96 hours",
    "VTL 1224",
    "report abandoned car",
    "tow abandoned",
    "DMV MV-83",
    "abandoned title",
    "311 abandoned",
    "junk car",
    "vehicle removal"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/VAT/1224",
    "https://www.cityofrochester.gov/311/",
    "https://dmv.ny.gov/forms/mv83.pdf"
  ],

  lastVerified: "2026-04-23",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
