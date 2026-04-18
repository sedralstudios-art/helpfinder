export const UBER_LYFT_PASSENGER_RIGHTS_NY = {
  id: "uber-lyft-passenger-rights-ny",
  category: "consumer",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  status: "active",

  title: { en: "Rideshare Passenger Rights — What Happens When Something Goes Wrong" },

  summary: {
    en: "Rideshare passengers in New York have legal protections. If a passenger is injured in a rideshare accident, the rideshare company's insurance covers the claim — not the driver's personal insurance. If a passenger is overcharged, discriminated against, or assaulted, there are specific complaint channels and legal remedies."
  },

  whoQualifies: {
    en: [
      "Any person who was injured in a rideshare vehicle accident.",
      "Any person who was overcharged or charged for a ride they did not take.",
      "Any person who was discriminated against by a rideshare driver (refused service, racial comments, accessibility denial).",
      "Any person who was assaulted or harassed by a rideshare driver."
    ]
  },

  whatItMeans: {
    en: "Under New York Insurance Law and the Transportation Network Company (TNC) framework, rideshare companies must carry insurance that covers passengers during a ride. When a passenger is in the vehicle or being picked up, the company's commercial policy applies — typically $1.25 million in liability coverage. This is the company's insurance, not the driver's personal policy. If the passenger is injured in an accident, the passenger files a claim against the rideshare company's insurance. New York is a no-fault state, so the passenger's own auto insurance (or the rideshare company's policy) covers medical expenses up to $50,000 regardless of who caused the accident. For overcharges, the first step is disputing the charge through the app. If the app does not resolve it, the passenger can file a complaint with the NYS Department of Financial Services or dispute the charge with their credit card company. For discrimination — refusing to pick up a passenger based on race, disability, neighborhood, or other protected characteristics — a complaint can be filed with the NYS Division of Human Rights or the NYC Taxi and Limousine Commission (for NYC rides). For assaults or harassment by a driver, the passenger can file a police report and a complaint with the rideshare company. The company is required to deactivate the driver during the investigation."
  },

  yourRights: {
    en: [
      "A rideshare passenger injured in an accident is covered by the rideshare company's $1.25 million liability insurance policy.",
      "A passenger has the right to file a no-fault insurance claim for medical expenses up to $50,000, regardless of who caused the accident.",
      "A passenger who is overcharged can dispute the charge through the app and, if unresolved, through their credit card company.",
      "A rideshare driver cannot refuse service based on race, disability, national origin, religion, or other protected characteristics.",
      "A passenger who is assaulted or harassed by a driver can file a police report and the company must deactivate the driver during investigation.",
      "A passenger with a disability has the right to ride with a service animal — the driver cannot refuse."
    ]
  },

  legalOptions: {
    en: [
      "For injuries in a rideshare accident, a personal injury attorney can handle the insurance claim — Monroe County Bar Association referral at (585) 546-2130.",
      "For discrimination complaints, file with the NYS Division of Human Rights at (888) 392-3644.",
      "For overcharges not resolved through the app, dispute with the credit card company or file a complaint with the NYS DFS at (800) 342-3736.",
      "For driver assault or harassment, file a police report first, then report through the app.",
      "For accessibility violations (service animal refusal, wheelchair access denial), file with the NYS Division of Human Rights.",
      "The NYS Attorney General handles consumer complaints about rideshare companies at (800) 771-7755."
    ]
  },

  example: {
    en: "While riding in a rideshare from downtown Rochester to Henrietta, another car ran a red light and hit the rideshare vehicle. The passenger, Lisa, was taken to the hospital with a neck injury. Her medical bills totaled $12,000. Lisa filed a no-fault claim through the rideshare company's insurance, which covered her medical expenses. She also filed a personal injury claim against the other driver's insurance for pain and suffering. The rideshare company's $1.25 million policy was available as additional coverage. Lisa's attorney handled both claims."
  },

  counsel: [
    {
      type: "government",
      name: "NYS Division of Human Rights",
      focus: "Rideshare discrimination, accessibility violations, service refusal",
      qualifier: "Any person in New York",
      access: "Phone at (888) 392-3644",
      outcome: "Investigation, mediation, enforcement",
      phone: "(888) 392-3644",
      url: "https://dhr.ny.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "uber-lyft-accident-ny",
    "car-accident-no-fault-ny",
    "auto-insurance-claim-denied-ny",
    "service-animal-public-access-ny",
    "uninsured-motorist-accident-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "rideshare rights",
    "rideshare accident",
    "rideshare overcharge",
    "rideshare discrimination",
    "rideshare insurance",
    "rideshare passenger injury",
    "rideshare complaint",
    "rideshare driver assault",
    "rideshare refund",
    "rideshare service animal"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/VAT/A44-B",
    "https://www.nysenate.gov/legislation/laws/EXC/296",
    "https://www.dfs.ny.gov",
    "https://dhr.ny.gov/law"
  ],

  lastVerified: "2026-04-17",
  volatility: "moderate",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
