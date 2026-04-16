export const CAR_ACCIDENT_NO_FAULT_NY = {
  id: "car-accident-no-fault-ny",
  category: "vehicle",
  tier: "state",
  jurisdiction: "us-ny",
  status: "active",

  title: { en: "Car Accident — No-Fault Insurance and What to Do Next in New York" },

  summary: {
    en: "New York is a no-fault insurance state — after a car accident, your own insurance pays for medical bills and lost wages regardless of who caused the crash. A separate claim for pain and suffering against the other driver is only available if the injury meets a 'serious injury' threshold. Understanding the no-fault system prevents costly mistakes in the days after an accident."
  },

  whoQualifies: {
    en: [
      "Any driver, passenger, or pedestrian involved in a motor vehicle accident in New York.",
      "No-fault benefits are available regardless of who was at fault.",
      "The no-fault claim is filed with your own insurance (or the vehicle owner's insurance if you were a passenger).",
      "Pedestrians and bicyclists hit by cars can file against the vehicle's insurance."
    ]
  },

  whatItMeans: {
    en: "New York's no-fault system (Insurance Law Article 51) works differently than most people expect. After an accident, medical bills and lost wages are covered by your OWN insurance — not the other driver's — up to the policy limit (minimum $50,000 in basic PIP coverage). This applies regardless of who caused the accident. The no-fault application (NF-2 form) must be submitted to the insurance company within 30 days of the accident. Medical providers can bill the no-fault carrier directly. Lost wages are covered at 80% of gross income up to a monthly cap. To sue the other driver for pain and suffering, the injury must meet the 'serious injury' threshold under Insurance Law § 5102(d): death, dismemberment, significant disfigurement, fracture, loss of a fetus, permanent loss of use of a body organ or system, permanent consequential limitation, or significant limitation of use of a body function lasting at least 90 days. Soft tissue injuries (sprains, strains) without objective medical evidence usually do not meet the threshold. An accident report (MV-104) should be filed with the DMV within 10 days if anyone was injured, killed, or if property damage exceeds a set amount."
  },

  yourRights: {
    en: [
      "The right to no-fault benefits (medical and lost wages) from your own insurance regardless of fault.",
      "The no-fault application must be submitted within 30 days — the insurer must provide the form.",
      "Medical providers can bill the no-fault carrier directly so the injured person does not pay out of pocket.",
      "The right to choose your own doctor — the insurance company cannot force you to use their provider.",
      "If the no-fault claim is denied, a dispute can be filed through the American Arbitration Association (AAA) no-fault arbitration process.",
      "The right to sue for pain and suffering if the injury meets the serious injury threshold."
    ]
  },

  legalOptions: {
    en: [
      "After an accident, the insurance company should provide the NF-2 (no-fault application) form. It must be completed and returned within 30 days of the accident.",
      "An accident report (MV-104) can be filed online at dmv.ny.gov or by mail. It should be filed within 10 days if there was an injury or significant property damage.",
      "If the no-fault claim is denied or benefits are cut off, a no-fault arbitration can be filed through the AAA. This process is separate from a lawsuit.",
      "For serious injuries, consulting with a personal injury attorney is an option. Most work on contingency (see the personal injury basics entry in this library).",
      "Free legal advice on no-fault claims and accident-related issues is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "If the other driver was uninsured, uninsured motorist coverage on your own policy may apply."
    ]
  },

  example: {
    en: "A driver in Irondequoit is rear-ended at a stoplight. She has neck and back pain. She files the NF-2 form with her own insurance within 30 days. Her medical bills (physical therapy, MRI) are paid by her no-fault carrier. Her lost wages from missing two weeks of work are covered at 80%. Six months later, the MRI shows a herniated disc requiring surgery — a serious injury under the law. She consults a personal injury attorney who files a claim against the at-fault driver for pain and suffering."
  },

  counsel: [
    {
      type: "free",
      name: "Legal Aid Society of Rochester",
      focus: "No-fault claims, accident-related legal issues",
      qualifier: "Low-income residents of Monroe and surrounding counties",
      access: "Phone intake",
      outcome: "Advice and referral",
      phone: "(585) 232-4090",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "personal-injury-basics-ny",
    "vehicle-registration-inspection-ny",
    "health-insurance-denial-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "car accident",
    "no-fault",
    "PIP",
    "NF-2 form",
    "accident report",
    "MV-104",
    "serious injury",
    "pain and suffering",
    "uninsured motorist",
    "medical bills accident",
    "lost wages accident",
    "30 day deadline"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/ISC/A51",
    "https://dmv.ny.gov/forms/mv104.pdf"
  ],

  lastVerified: "2026-04-16",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
