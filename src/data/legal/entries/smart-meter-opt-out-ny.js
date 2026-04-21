export const SMART_METER_OPT_OUT_NY = {
  id: "smart-meter-opt-out-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-regulation",
  primaryStatute: "16 NYCRR 96",
  status: "active",

  title: { en: "NY Smart Meter Opt-Out — Keep a Traditional Electric Meter With Monthly Fee" },

  summary: {
    en: "NY utility customers can refuse a smart (advanced metering infrastructure, AMI) meter and keep a traditional analog or non-communicating digital meter under NY Public Service Commission tariff rules. RG&E and National Grid charge a monthly opt-out fee plus initial conversion fee. The fee covers the cost of manual meter reads. Customers cite privacy, health, or other preferences."
  },

  whoQualifies: {
    en: [
      "Any NY RG&E, National Grid, NYSEG, or Con Edison residential customer.",
      "A customer who received a smart meter upgrade notice and wants to decline.",
      "A customer who already has a smart meter and wants to swap back to traditional.",
      "A low-income customer concerned about the opt-out fee impact.",
      "A landlord with a multifamily building considering smart meter deployment."
    ]
  },

  whatItMeans: {
    en: "New York investor-owned utilities have been rolling out Advanced Metering Infrastructure (AMI) — commonly called smart meters — to residential customers since 2019. A smart meter is a digital utility meter that transmits usage data back to the utility wirelessly (typically via RF radio or cellular), replacing the older practice of a meter reader visiting monthly. By 2025-2026 rollout is substantially complete across RG&E territory in Monroe County. SOME CUSTOMERS PREFER TRADITIONAL METERS for various reasons including (1) concern about radiofrequency exposure (though scientific consensus is that meter RF is far below safety thresholds), (2) privacy concerns about granular usage data, (3) concern about hacking or surveillance, (4) simple preference for the traditional meter they have had for years, (5) medical device interference concerns in specific situations. NEW YORK PUBLIC SERVICE COMMISSION TARIFF RULES: Under NY PSC Case 14-E-0302 and subsequent tariff filings, every NY electric utility deploying AMI must offer an opt-out option. The utility files a tariff specifying the opt-out fees with the PSC. FEES: (1) RG&E residential AMI opt-out fee (as of 2024 tariff): approximately 7 dollars per month plus a one-time installation fee of 80 dollars when converting from AMI back to traditional meter. (2) National Grid residential AMI opt-out fee: similar structure, typically 6-10 per month plus upfront. (3) Initial meter installation fee may apply when first adopting opt-out from new deployment. The fees are designed to cover the additional cost of sending meter readers monthly rather than getting data wirelessly. Customers on low-income energy programs (HEAP recipients, certain Medicaid customers) may qualify for reduced or waived opt-out fees. HOW TO OPT OUT: Call the utility's customer service line and request AMI opt-out. RG&E: (800) 743-2110. National Grid: (800) 642-4272. The utility will schedule a technician visit to swap the meter. A customer who has not yet received a smart meter can request the opt-out before the scheduled upgrade. A customer who already has a smart meter can request a swap back at any time. IMPLICATIONS OF OPT-OUT: (1) Monthly manual meter reads — the utility sends a technician monthly to read the meter. Access to the meter (exterior or meter access point) is required. Missed reads can result in estimated billing. (2) Loss of smart meter features — no real-time usage data in customer apps, no detection of outages via the meter, no support for advanced rate plans like time-of-use rates. (3) Continued fee — the monthly opt-out fee is indefinite. SMART METER BENEFITS (for context): Real-time usage data through the utility customer portal, automated outage notification, faster meter reading on move-in/out, support for time-of-use and peak-shaving rates that can save money. For customers who use electricity during off-peak hours, a smart meter with TOU rates can save 10-30 percent on bills. NEIGHBORS AND COMMON ENTRANCES: In apartment buildings where the meter is in a common utility room, the opt-out applies to the customer's meter specifically. Other tenants or the landlord's meter can remain smart. HEALTH: NY Department of Health follows federal FCC and WHO positions that home smart meter RF exposure is well below safety thresholds. Customers with electromagnetic sensitivity concerns can still opt out under the PSC tariff without having to prove medical necessity. COMPLAINTS: A customer denied opt-out or charged fees contrary to the tariff can complain to NY PSC at (800) 342-3377. The PSC enforces tariff compliance. POLITICAL CONTEXT: NY smart meter rollout has had ongoing controversy. Local opposition groups including Stop Smart Meters NY advocate for opt-out without fees. The PSC has balanced customer choice with the system benefits of mass deployment. SOLAR AND NET METERING: Customers with rooftop solar need bi-directional metering. Traditional analog meters cannot measure net generation. A solar customer effectively must have a smart or specialized meter — opting out is not typically compatible with net metering. See solar-net-metering-ny."
  },

  yourRights: {
    en: [
      "A NY utility customer has the right to opt out of AMI smart meter installation.",
      "A customer has the right to swap back from a smart meter to a traditional meter.",
      "A customer on low-income energy programs has the right to inquire about fee reduction.",
      "A customer denied opt-out has the right to complain to NY PSC.",
      "A tenant has the right to opt out of the meter serving the tenant's own account.",
      "A customer has the right to know the tariff opt-out fees before deciding."
    ]
  },

  legalOptions: {
    en: [
      "RG&E customer service at (800) 743-2110 for Monroe County opt-out requests.",
      "National Grid customer service at (800) 642-4272 for territory-specific requests.",
      "NY Public Service Commission at (800) 342-3377 for tariff enforcement and complaints.",
      "NY Department of Public Service consumer advocate at (800) 342-3355 for consumer assistance.",
      "Stop Smart Meters NY and other advocacy groups for consumer resources.",
      "Legal Aid Society of Rochester at (585) 295-5727 for low-income customers facing opt-out fee burden."
    ]
  },

  example: {
    en: "The Patel family received a notice from RG&E that their Monroe County home would get a smart meter upgrade. They called RG&E customer service to opt out. RG&E scheduled a technician visit to keep the existing traditional meter in place (or in some cases install a non-communicating digital meter). The monthly opt-out fee was 7.25 dollars added to the bill. The family made the choice based on their preference for manual meter reading. They continued to receive paper bills and a monthly visit from a meter reader."
  },

  counsel: [
    {
      type: "government",
      name: "NY Public Service Commission",
      focus: "Smart meter tariff enforcement, opt-out rules, consumer complaints",
      qualifier: "Any NY utility customer",
      access: "Phone, online complaint portal",
      outcome: "Investigation, tariff compliance, opt-out enforcement",
      phone: "(800) 342-3377",
      url: "https://dps.ny.gov/smart-meters",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "RG&E Customer Service",
      focus: "Smart meter opt-out for Monroe County customers",
      qualifier: "Any RG&E residential customer",
      access: "Phone, online customer portal",
      outcome: "Opt-out scheduling, fee disclosure, meter swap",
      phone: "(800) 743-2110",
      url: "https://www.rge.com",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "utility-shutoff-protections-ny",
    "apartment-electric-submetering-ny",
    "heap-utility-assistance-ny",
    "solar-net-metering-ny",
    "community-solar-subscription-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "smart meter opt-out NY",
    "16 NYCRR 96",
    "AMI tariff",
    "RG&E opt-out",
    "National Grid opt-out",
    "manual meter reading",
    "NY PSC 14-E-0302",
    "electromagnetic sensitivity",
    "HEAP fee reduction",
    "solar net metering compatibility"
  ],

  sources: [
    "https://govt.westlaw.com/nycrr/Browse/Home/NewYork/NewYorkCodesRulesandRegulations?guid=I5b4aaca08c1211dd97adcd755bda2840",
    "https://dps.ny.gov/smart-meters"
  ],

  lastVerified: "2026-04-20",
  volatility: "medium",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
