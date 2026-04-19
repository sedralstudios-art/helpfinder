export const MEDICAID_TRANSPORTATION_NY = {
  id: "medicaid-transportation-ny",
  category: "benefits",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "42 USC 1396D",
  status: "active",

  title: { en: "Medicaid Transportation — Free Rides to Medical Appointments in New York" },

  summary: {
    en: "A Medicaid recipient who needs to reach a doctor, hospital, pharmacy, lab, therapy, or other Medicaid-covered service has transportation paid by Medicaid. This includes taxi, car service, public transit, wheelchair van, and in some cases mileage reimbursement for a private car. Most people on Medicaid do not know this benefit exists."
  },

  whoQualifies: {
    en: [
      "Any Medicaid recipient who needs transportation to a Medicaid-covered medical service.",
      "The service must be medically necessary and covered by Medicaid.",
      "Transportation is available for appointments, prescriptions, dialysis, therapy, mental health visits, substance abuse treatment, and more.",
      "The benefit covers trips to and from the appointment."
    ]
  },

  whatItMeans: {
    en: "Under federal Medicaid rules and NY Social Services Law, Medicaid must provide transportation to and from medical services for recipients who have no other way to get there. In New York, this is managed through a transportation broker — a company that arranges the rides. In Monroe County, the broker schedules the pickup and drop-off. The recipient calls a phone number (usually printed on the Medicaid card or available through the managed care plan), gives the appointment details, and a ride is arranged. Most trips must be scheduled in advance (at least 3 business days for routine appointments, less for urgent appointments). Emergency transportation (ambulance) is separate and does not require pre-scheduling. The transportation can be a taxi, livery car, public transit pass, wheelchair-accessible van, or stretcher van depending on the medical need. In some cases, Medicaid also reimburses mileage if a family member or friend drives. Managed care plan members arrange transportation through their plan."
  },

  yourRights: {
    en: [
      "Every Medicaid recipient has the right to transportation to and from covered medical services.",
      "The transportation must be appropriate to the person's medical condition (wheelchair van if needed, stretcher if needed).",
      "If a ride does not show up or is inadequate, a complaint can be filed with the managed care plan or with Medicaid directly.",
      "Routine trips must be available with advance scheduling. Urgent trips must be arranged on shorter notice.",
      "The right to mileage reimbursement if a private vehicle is used and no other transportation is available."
    ]
  },

  legalOptions: {
    en: [
      "For Medicaid managed care members: transportation is arranged through the managed care plan. The plan's member services number is on the Medicaid card.",
      "For Medicaid fee-for-service members: transportation is arranged through the county's transportation broker. In Monroe County, contact can be made through DSS at (585) 753-6960 or by calling the broker directly (the number is on the Medicaid card or available through 211).",
      "If transportation is denied or inadequate, a complaint can be filed with the managed care plan's grievance process or with the NY Department of Health.",
      "A fair hearing can be requested if the plan denies transportation for a covered service.",
      "Free legal help with Medicaid transportation issues is available through Legal Aid Society of Rochester at (585) 232-4090."
    ]
  },

  example: {
    en: "A Medicaid recipient in Rochester needs to get to a dialysis appointment three times a week but does not have a car. She calls the number on her Medicaid managed care card and schedules transportation. A wheelchair-accessible van picks her up at home and brings her to the clinic and back, three times a week, at no cost. When the van is late one week and she misses part of her treatment, she files a grievance with the plan, which arranges a more reliable schedule."
  },

  counsel: [
    {
      type: "free",
      name: "Monroe County DSS — Medicaid Transportation",
      focus: "Medicaid transportation scheduling, broker contact, complaints",
      qualifier: "Medicaid recipients in Monroe County",
      access: "Phone",
      outcome: "Ride scheduling and complaint resolution",
      phone: "(585) 753-6960",
      url: "https://www.monroecounty.gov",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "medicaid-ny",
    "medicaid-home-care-ny",
    "health-insurance-denial-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "Medicaid transportation",
    "free ride doctor",
    "medical transportation",
    "Medicaid cab",
    "Medicaid taxi",
    "ride to doctor",
    "wheelchair van",
    "dialysis transport",
    "mileage reimbursement",
    "non-emergency transport"
  ],

  sources: [
    "https://www.law.cornell.edu/uscode/text/42/1396d",
    "https://www.law.cornell.edu/cfr/text/42/440.170",
    "https://www.health.ny.gov/health_care/medicaid/program/transportation/",
    "https://www.medicaid.gov/medicaid/benefits/non-emergency-medical-transportation/index.html"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
