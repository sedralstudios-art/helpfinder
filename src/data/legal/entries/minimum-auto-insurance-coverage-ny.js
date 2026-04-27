export const MINIMUM_AUTO_INSURANCE_COVERAGE_NY = {
  id: "minimum-auto-insurance-coverage-ny",
  category: "vehicle",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY VAT 311",
  status: "active",

  title: { en: "NY Minimum Auto Insurance — Liability, No-Fault PIP, and Uninsured Motorist" },

  summary: {
    en: "Every New York car owner must carry at least 25,000 dollars for injury to one person, 50,000 dollars for injury to multiple people, and 10,000 dollars for property damage in liability coverage. State law also requires no-fault personal injury protection of 50,000 dollars and uninsured motorist coverage matching the liability limits. Driving without insurance can cost over 1,500 dollars in fines plus a license suspension."
  },

  whoQualifies: {
    en: [
      "Every owner of a registered vehicle in New York must carry the statutory minimum coverage.",
      "Every driver operating a New York-registered vehicle is covered by the vehicle policy.",
      "A low-income New York driver can qualify for reduced-rate no-fault coverage through the New York Automobile Insurance Plan assigned risk pool.",
      "Military servicemembers stationed in NY but registered elsewhere may qualify for out-of-state coverage under the federal Servicemembers Civil Relief Act."
    ]
  },

  whatItMeans: {
    en: "New York Vehicle and Traffic Law Section 311 combined with the Comprehensive Motor Vehicle Insurance Reparations Act (Insurance Law Article 51) sets three required coverage categories for every registered New York vehicle. Bodily injury liability of at least 25,000 dollars per person and 50,000 dollars per accident covers the injured party when the insured driver is at fault. Property damage liability of 10,000 dollars covers repair or replacement of the other driver's vehicle or damaged property. No-fault personal injury protection (PIP) of 50,000 dollars covers medical expenses, up to 2,000 dollars a month in lost wages, and 25 dollars a day for household help for the insured driver, passengers, and any pedestrians hit by the insured vehicle — regardless of who caused the crash. Uninsured and underinsured motorist coverage (SUM) must match the liability limits and pays the insured driver when the other driver has no insurance or not enough. These minimums are very low compared with real medical and repair costs. A serious injury can easily exceed 100,000 dollars in medical bills alone, which is why insurance agents usually recommend optional coverage of 250,000/500,000 dollars on bodily injury, 100,000 dollars on property damage, and an umbrella policy for owners with assets to protect. Driving an uninsured vehicle on a New York road is a violation of VAT 319 and carries fines from 150 to 1,500 dollars depending on circumstances, up to 15 days in jail, and mandatory suspension of registration for the time the vehicle was uninsured plus the length of the gap. A registration lapse over 90 days triggers an automatic DMV suspension under VAT 318. Reinstatement requires paying a civil penalty of 8 dollars per day for each day uninsured, up to 900 dollars, plus a 50 dollar termination fee. Car insurance also satisfies the New York financial security law, which Monroe County DMV checks when renewing registration. A driver who moves to NY from another state has 30 days to register the vehicle in NY and switch to a NY-compliant policy. A teen driver on a parent policy is covered at the parent policy limits. Rideshare drivers (Uber, Lyft) are covered by the rideshare company's policy while logged in, but still need a personal NY policy that the rideshare policy supplements."
  },

  yourRights: {
    en: [
      "A driver has the right to purchase coverage higher than the statutory minimum at any time.",
      "A passenger or pedestrian injured by a NY-insured vehicle has the right to no-fault PIP benefits regardless of fault.",
      "A car owner has the right to match liability limits with uninsured motorist coverage (SUM).",
      "A low-income driver has the right to apply for the NY Automobile Insurance Plan when private insurers decline.",
      "A driver hit by an uninsured motorist has the right to file a Motor Vehicle Accident Indemnification Corporation (MVAIC) claim for injuries up to the statutory minimum."
    ]
  },

  legalOptions: {
    en: [
      "NYS Department of Financial Services at (800) 342-3736 regulates auto insurers and handles coverage complaints.",
      "Motor Vehicle Accident Indemnification Corporation (MVAIC) at (646) 205-7800 covers injuries when the at-fault driver has no insurance.",
      "New York Automobile Insurance Plan at (212) 655-5840 assigns coverage for drivers denied by private insurers.",
      "NYS DMV at (518) 486-9786 handles registration suspensions for lapsed insurance.",
      "Legal Aid Society of Rochester at (585) 232-4090 represents low-income clients in auto insurance disputes after a crash."
    ]
  },

  example: {
    en: "Karim was rear-ended on Monroe Avenue by a driver whose policy had lapsed the week before. Karim's own NY policy included uninsured motorist (SUM) coverage at 50,000 dollars. He filed a no-fault PIP claim with his own carrier for his medical bills and a SUM claim for the portion of his injuries above PIP. Because his own policy matched the statutory minimum, he recovered 47,000 dollars for the injury. The at-fault driver was cited under VAT 319 for uninsured operation, fined 750 dollars, and had registration suspended for 91 days."
  },

  counsel: [
    {
      type: "government",
      name: "NYS Department of Financial Services",
      focus: "Auto insurance rules, coverage complaints, claim disputes",
      qualifier: "Any NYS auto insurance policyholder or claimant",
      access: "Phone, online complaint portal",
      outcome: "Complaint investigation, coverage enforcement",
      phone: "(800) 342-3736",
      url: "https://www.dfs.ny.gov/consumers/auto_insurance",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "Motor Vehicle Accident Indemnification Corporation (MVAIC)",
      focus: "Injury claims when the at-fault driver is uninsured or unknown (hit-and-run)",
      qualifier: "NY resident hit by an uninsured or unknown driver",
      access: "Phone, written claim within 90 days",
      outcome: "Injury compensation up to statutory minimum",
      phone: "(646) 205-7800",
      url: "https://www.mvaic.com",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "car-accident-no-fault-ny",
    "uninsured-motorist-accident-ny",
    "car-insurance-lapse-penalty-ny",
    "auto-insurance-claim-denied-ny",
    "vehicle-registration-inspection-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "minimum auto insurance NY",
    "25/50/10 coverage",
    "no-fault PIP",
    "uninsured motorist SUM",
    "VTL 311",
    "NY car insurance minimum",
    "liability coverage NY",
    "50000 PIP",
    "SUM coverage match",
    "MVAIC uninsured driver"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/VAT/311",
    "https://www.dfs.ny.gov/consumers/auto_insurance"
  ],

  lastVerified: "2026-04-20",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
