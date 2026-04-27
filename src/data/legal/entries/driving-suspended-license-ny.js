export const DRIVING_SUSPENDED_LICENSE_NY = {
  id: "driving-suspended-license-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY VAT 511",
  status: "active",

  title: { en: "NY Driving With a Suspended License — Aggravated Unlicensed Operation Charges" },

  summary: {
    en: "New York Vehicle and Traffic Law Section 511 makes driving with a suspended or revoked license a crime called Aggravated Unlicensed Operation. AUO in the third degree is a misdemeanor; the second degree adds jail time and doubles the fine; the first degree is a felony. The charge comes with a mandatory new suspension and often a tow and impound of the vehicle."
  },

  whoQualifies: {
    en: [
      "Any NY driver whose license was suspended for unpaid tickets, failure to appear, insurance lapse, child support, DWI, or points.",
      "Any driver with an out-of-state license whose NY driving privilege has been suspended.",
      "Any driver who was unaware the license was suspended — lack of notice is a defense when notice was not sent to the address on file.",
      "A driver charged with AUO who wants to know the criminal exposure and defenses available."
    ]
  },

  whatItMeans: {
    en: "New York Vehicle and Traffic Law Section 511 makes it a crime to drive a motor vehicle while the driver knows or has reason to know that the license or driving privilege is suspended or revoked. The charge is called Aggravated Unlicensed Operation, or AUO, and comes in three degrees. AUO in the third degree under VAT 511(1)(a) is an unclassified misdemeanor punishable by up to 30 days in jail, a fine of 200 to 500 dollars, and a mandatory minimum license suspension. AUO in the second degree under VAT 511(2)(a) applies when the driver has a prior AUO conviction within the last 18 months, or when the suspension came from a DWI or a refusal to submit to a chemical test, or when the driver is driving while three or more tickets are outstanding on three separate dates. Second-degree AUO is punishable by up to 180 days in jail and fines of 500 to 1,000 dollars. AUO in the first degree under VAT 511(3)(a) is a class E felony punishable by up to four years in state prison when the driver has a prior AUO within the last 18 months combined with a DWI-based suspension, or when the driver is under the influence at the time of the AUO stop. Any AUO conviction triggers a mandatory new license suspension, mandatory court surcharge of over 90 dollars, and three points on the license. A police stop for AUO typically results in the vehicle being towed and impounded on the spot, which adds 200 to 500 dollars in tow and storage costs on top of the fine. A passenger with a valid license is allowed to drive the vehicle away, avoiding the tow, but Monroe County police departments vary on whether they allow this. Defenses commonly raised include lack of notice — DMV must prove the suspension notice was mailed to the address on file, and an address-on-file mismatch can support a motion to dismiss. Fair Review of VTL 511 v Fowlkes established that an inability to pay a fine cannot be the sole basis for a driving-while-suspended conviction when the driver is indigent. Traffic counsel in Rochester often negotiates AUO charges down to a non-criminal disposition when the underlying suspension has been cured (for example, the unpaid ticket is paid, insurance is reinstated, or child support is current). Driving to a job under a hardship license, conditional license, or pre-conviction conditional license granted after a DWI is not AUO as long as the driver stays within the geographic and time limits the DMV imposed. The best protection against surprise suspensions is checking license status free at dmv.ny.gov before driving any time there is doubt (unpaid tickets from years ago, lapsed insurance, missed court dates). Commercial drivers face harsher consequences — any AUO conviction disqualifies the CDL for 60 days on a first offense and one year on a second."
  },

  yourRights: {
    en: [
      "A driver has the right to a lawyer in any AUO case — if unable to afford one, the court appoints the Monroe County Public Defender.",
      "A driver has the right to a notice defense — the prosecution must prove DMV mailed the suspension notice to the address on file.",
      "An indigent driver has the right to challenge a suspension based on unpaid fines under the Fowlkes ability-to-pay rule.",
      "A driver has the right to negotiate a plea to a non-criminal traffic infraction when the underlying suspension has been cured.",
      "A driver has the right to check license status for free at any time through dmv.ny.gov or any NY DMV office."
    ]
  },

  legalOptions: {
    en: [
      "NYS DMV at (518) 486-9786 or dmv.ny.gov confirms current license status and reason for any suspension.",
      "Monroe County Public Defender at (585) 753-4210 represents indigent defendants in AUO and other criminal cases.",
      "Legal Aid Society of Rochester at (585) 232-4090 represents low-income defendants in traffic-related cases.",
      "Monroe County Traffic Violations Agency at (585) 753-4240 handles non-felony traffic charges in the city.",
      "Monroe County Bar Association at (585) 546-2130 refers to private traffic counsel for AUO cases.",
      "For clearing an underlying suspension caused by unpaid support, Monroe County Child Support Enforcement at (585) 753-6988."
    ]
  },

  example: {
    en: "Lucas was pulled over in Greece for a broken taillight. The officer ran his license and found a suspension for unpaid tickets from two years earlier that Lucas had never received notice about. Lucas was charged with AUO third degree under VAT 511. His lawyer raised a notice defense and showed that the DMV had the wrong address on file. The court dismissed the AUO charge but required Lucas to pay the original tickets, update his address with DMV, and pay a small termination fee. Lucas avoided the criminal conviction and the mandatory new suspension."
  },

  counsel: [
    {
      type: "government",
      name: "Monroe County Public Defender",
      focus: "Criminal defense including AUO, DWI, and traffic-related misdemeanors and felonies",
      qualifier: "Monroe County defendant who cannot afford private counsel",
      access: "Court-appointed at arraignment, phone intake",
      outcome: "Free legal representation in criminal court",
      phone: "(585) 753-4210",
      url: "https://www.monroecounty.gov/pd",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "Legal Aid Society of Rochester",
      focus: "Low-income traffic and criminal defense, notice-defense AUO cases",
      qualifier: "Monroe County resident at or under 200 percent of poverty",
      access: "Phone intake",
      outcome: "Free legal representation",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "suspended-license-hardship-ny",
    "car-insurance-lapse-penalty-ny",
    "license-suspended-unpaid-tickets-ny",
    "dwi-first-offense-ny",
    "traffic-ticket-options-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "driving suspended license",
    "AUO NY",
    "VTL 511",
    "aggravated unlicensed operation",
    "suspended license crime",
    "Fowlkes ability to pay",
    "notice defense AUO",
    "suspended license misdemeanor",
    "suspended license felony",
    "license status check"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/VAT/511",
    "https://dmv.ny.gov/tickets/check-your-driver-license-status"
  ],

  lastVerified: "2026-04-20",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
