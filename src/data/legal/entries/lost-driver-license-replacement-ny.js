export const LOST_DRIVER_LICENSE_REPLACEMENT_NY = {
  id: "lost-driver-license-replacement-ny",
  category: "vehicle",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY VAT 510",
  status: "active",

  title: { en: "NY Lost, Stolen, or Damaged Driver License — How to Replace It Fast" },

  summary: {
    en: "A New York driver who lost, had stolen, or damaged a driver license or non-driver ID can apply for a replacement online, by mail, or in person at the DMV. Online replacement costs 17.50 dollars and arrives by mail in 1 to 2 weeks. Temporary driving is not automatic — a driver without a license on hand has no legal authority to drive."
  },

  whoQualifies: {
    en: [
      "Any NY driver whose license was lost, stolen, or damaged.",
      "A non-driver ID card holder who needs replacement.",
      "A person whose license was returned to the DMV after a change of name, address, or physical appearance.",
      "A parent of a minor with a junior license or learner permit that was lost.",
      "A person outside NY temporarily who needs a NY license replacement mailed to an out-of-state address."
    ]
  },

  whatItMeans: {
    en: "New York Vehicle and Traffic Law Section 510 authorizes the NY Department of Motor Vehicles to issue replacements for lost, stolen, or damaged driver licenses, learner permits, junior licenses, and non-driver ID cards. Replacement fee is 17.50 dollars for standard license and 12.50 dollars for non-driver ID. Three ways to request. ONLINE REPLACEMENT at mynyDMV.ny.gov — the fastest and most common method. Requires a MyDMV account (free to create with license number, date of birth, and zip code). The driver confirms address, pays the fee, and a new card arrives by USPS in 1 to 2 weeks. Typically available for any license, permit, or non-driver ID that is not currently suspended or revoked and does not have a photo change needed. MAIL REPLACEMENT using Form MV-44 (Application for Permit, Driver License, or Non-Driver ID). Fill out, include the fee by check, and mail to NYS DMV. Processing is 3 to 4 weeks. Used when the driver cannot access the online portal or requires special circumstances. IN-PERSON AT ANY DMV OFFICE. Walk in, show an ID (even a non-photo ID like a Social Security card with proof of name), pay the fee, and receive a paper interim license immediately while the permanent card is mailed. Monroe County DMV at West Main Street in Rochester handles in-person visits. Wait times vary — typically 30 minutes to 2 hours during peak days; Saturday mornings can be shorter. Online appointments at dmv.ny.gov reduce the wait. STOLEN LICENSE — additional steps. Filing a police report for the theft is recommended for identity-theft protection even though it is not required for DMV replacement. If a criminal is using the stolen license for fraud, the police report supports later fraud claim disputes. Consider placing a fraud alert on credit reports through Experian at 1-888-397-3742. REAL ID CONSIDERATION: if the replacement is for a standard license and the driver wants to upgrade to a REAL ID or Enhanced Driver License, upgrades must be done in-person at a DMV office with all the required documents (proof of identity, proof of Social Security, 2 proofs of NY residency) — see real-id-enhanced-license-ny for the document list. An online replacement renews only the existing standard license, not an upgrade. TEMPORARY DRIVING: NY does not provide automatic temporary driving authority while waiting for a replacement. The driver technically needs a valid license in possession while driving. Practical rule: an in-person DMV replacement produces an interim paper license immediately, so if driving is time-sensitive, in-person is the right choice. An online replacement does not produce an interim — the driver must wait for the mailed card. A NY driver pulled over without a license in possession can receive a ticket for violation of VTL 507(1) (failure to carry license). If the license actually exists and is current, this is usually a low-level violation under 50 dollars and dismissed when the driver produces the license in court. Driving with a truly expired, suspended, or revoked license is much more serious — see driving-suspended-license-ny. OUT-OF-STATE REPLACEMENT: a NY resident temporarily living out of state can request online replacement mailed to the out-of-state address, but the card is produced with the NY address on file. If the driver has moved permanently, NY state law requires updating the address within 10 days and eventually transferring to the new state's license. A permanent out-of-state resident should not request NY replacement — should transfer to the new state instead. LICENSE EXPIRING SOON: if the license is within 30 days of expiration, the driver should renew rather than replace. Renewal produces a new card with a fresh 8-year expiration and costs 64.50 dollars; replacement maintains the existing expiration at 17.50. DMV's MyDMV system often combines the two options when the user logs in."
  },

  yourRights: {
    en: [
      "A NY driver has the right to replace a lost, stolen, or damaged license online, by mail, or in person.",
      "A driver has the right to an interim paper license from in-person DMV visit while the permanent card is mailed.",
      "A driver has the right to replace with no re-test required as long as the underlying license is not expired or suspended.",
      "A driver has the right to verify replacement status online through MyDMV.",
      "A driver with a stolen license has the right to file a police report and place a fraud alert on credit reports.",
      "A driver has the right to change address at the same time as replacement."
    ]
  },

  legalOptions: {
    en: [
      "NY DMV online replacement at mynyDMV.ny.gov.",
      "NYS DMV at (518) 486-9786 answers replacement questions.",
      "Monroe County DMV at (585) 753-7050 for in-person visits at West Main Street, Rochester.",
      "For a stolen license, Rochester Police non-emergency at 311 or Monroe County Sheriff at (585) 753-4178.",
      "For credit fraud alerts, Experian at (888) 397-3742, Equifax at (888) 766-0008, TransUnion at (800) 680-7289.",
      "NY MVA Form MV-44 available at dmv.ny.gov/forms."
    ]
  },

  example: {
    en: "Marisol dropped her wallet on the way home and could not find her license. She logged into mynyDMV.ny.gov, confirmed her address, paid the 17.50 dollar fee online, and received a confirmation email. Her new card arrived in the mail 10 days later. During the wait she avoided driving. When she eventually got pulled over after the new card arrived, the officer ran her license and it came back valid. No ticket."
  },

  counsel: [
    {
      type: "government",
      name: "NYS Department of Motor Vehicles",
      focus: "License replacement, renewal, address change, and general DMV services",
      qualifier: "Any NY licensed driver or ID card holder",
      access: "Phone, online MyDMV portal, in-person local DMV office",
      outcome: "Replacement license issuance, interim paper license",
      phone: "(518) 486-9786",
      url: "https://dmv.ny.gov/driver-license/replace-driver-license",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "Monroe County DMV",
      focus: "Local in-person license replacement and DMV services",
      qualifier: "Any Monroe County resident",
      access: "Walk-in at 200 W Main St Rochester, online appointments",
      outcome: "Interim license same day, permanent card mailed",
      phone: "(585) 753-7050",
      url: "https://www.monroecounty.gov/clerk-dmv",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "real-id-enhanced-license-ny",
    "vehicle-registration-inspection-ny",
    "identity-theft-ny",
    "credit-freeze-security-freeze-ny",
    "driving-suspended-license-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "lost driver license NY",
    "replace driver license NY",
    "VAT 510",
    "MyDMV online replace",
    "Form MV-44",
    "stolen license NY",
    "interim paper license",
    "DMV replacement fee",
    "17.50 fee",
    "damaged license replace"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/VAT/510",
    "https://dmv.ny.gov/driver-license/replace-driver-license"
  ],

  lastVerified: "2026-04-20",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
