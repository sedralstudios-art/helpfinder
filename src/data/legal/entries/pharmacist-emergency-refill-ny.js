export const PHARMACIST_EMERGENCY_REFILL_NY = {
  id: "pharmacist-emergency-refill-ny",
  category: "healthcare",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY EDN 6810",
  status: "active",

  title: { en: "NY Pharmacist Emergency Refill — Up to 30 Days Without Doctor Authorization" },

  summary: {
    en: "New York Education Law Section 6810 allows a pharmacist to dispense up to a 30-day emergency supply of most prescription medications when the prescriber cannot be reached. The drug must be one the patient has been taking, it must not be a controlled substance in the most restrictive schedules, and the pharmacist must use professional judgment. Insurance usually covers the emergency refill at the normal copay."
  },

  whoQualifies: {
    en: [
      "Any NY patient who has been taking a prescription medication and is out of refills.",
      "A patient whose prescriber is unavailable (after hours, on vacation, moved practice).",
      "A patient traveling or visiting NY from out of state who ran out of medication.",
      "A patient whose refill was lost, damaged, or destroyed."
    ]
  },

  whatItMeans: {
    en: "New York Education Law Section 6810(6) gives every NY licensed pharmacist the authority to dispense an emergency supply of up to 30 days of a prescription medication without contacting the prescriber, as long as several conditions are met. The patient must have been taking the same medication previously — the pharmacist verifies this through the pharmacy record or a prescription bottle shown by the patient. The drug cannot be a Schedule II controlled substance (opioids like oxycodone and morphine, stimulants like Adderall and Ritalin). It can be a Schedule III through V controlled substance (like Xanax, Ambien, Ativan, testosterone, or codeine-containing cough syrup) but only for a seven-day emergency supply under EDN 6810(6)(b). It must be a medication the pharmacist in professional judgment determines the patient needs continued access to in order to avoid harm. And the prescriber must be genuinely unreachable (closed office, vacation, moved, or just unavailable during a weekend or holiday). The 2023 amendment to EDN 6810 expanded the emergency supply from 72 hours to 30 days for non-controlled medications, and from 72 hours to 7 days for Schedule III to V controlled substances. The expansion was driven by COVID-era practical experience showing that 72 hours was not enough for patients to reach a new prescriber when moving states or losing a doctor. Insulin, heart medication, seizure medication, blood pressure medication, inhalers, birth control, mental health medication, and most daily maintenance drugs all qualify. Drugs that do not qualify include any Schedule II drug and any first-time prescription (the statute requires prior use). The pharmacist documents the emergency refill in the pharmacy record and notifies the prescriber within 72 hours by fax, phone, or electronic message. Insurance coverage is usually automatic at the normal copay — most NY insurers, Medicaid, and Medicare Part D plans recognize pharmacy-initiated emergency refills. A few plans may flag the claim for review but pay retroactively. The patient pays any cash difference if the plan requires. A pharmacist who declines to dispense an emergency refill cannot be forced to, and a patient turned away at one pharmacy can try another. CVS, Walgreens, Rite Aid, Wegmans, and most independent pharmacies in Monroe County are trained to use EDN 6810 when needed. The law also covers emergency dispensing during a declared emergency (natural disaster, pandemic) under separate provisions. For Schedule II drugs that do not fall under the emergency refill rule, the patient must reach the prescriber or an urgent care/emergency room to get a new prescription — no pharmacist in NY can emergency-refill a Schedule II. Lost or stolen prescriptions can be reported to the pharmacist and prescriber for potential replacement. This is different from a prescription transfer, which is when one pharmacy sends an existing prescription to a different pharmacy — transfers do not require the emergency rule and can be done by patient request anytime."
  },

  yourRights: {
    en: [
      "A patient has the right to request an emergency refill from any NY pharmacist when the prescriber is unreachable.",
      "A patient has the right to up to 30 days of most medications or 7 days of Schedule III-V controlled substances under EDN 6810.",
      "A patient has the right to use insurance at the normal copay for an emergency refill in most cases.",
      "A patient denied an emergency refill at one pharmacy has the right to try another pharmacy.",
      "A patient has the right to have the pharmacist document the emergency refill and notify the prescriber within 72 hours."
    ]
  },

  legalOptions: {
    en: [
      "Any NY licensed pharmacist (CVS, Walgreens, Rite Aid, Wegmans, independent, hospital) can issue an emergency refill under EDN 6810.",
      "NYS Education Department Office of the Professions at (518) 474-3817 handles pharmacist licensing complaints.",
      "NYS Department of Financial Services at (800) 342-3736 handles insurance denial complaints for emergency refills.",
      "For controlled substance emergencies (especially Schedule II), an urgent care or emergency room visit is usually the fastest path to a new prescription.",
      "Monroe County 2-1-1 at (585) 442-0220 can connect to low-cost prescription programs when cost is the barrier."
    ]
  },

  example: {
    en: "Omar ran out of his blood pressure medication on a Saturday night when his doctor office was closed. He had one pill bottle but no refills left. He called the CVS on Mt. Hope Avenue, brought the empty bottle, and asked for an emergency refill under EDN 6810. The pharmacist verified Omar had been filling the medication monthly for two years, dispensed a 30-day emergency supply, and billed his insurance at the normal 10 dollar copay. The pharmacist also faxed a note to Omar's primary care doctor Monday morning. Omar scheduled a follow-up to get a fresh prescription."
  },

  counsel: [
    {
      type: "government",
      name: "NYS Education Department Office of the Professions",
      focus: "Pharmacist licensing, complaint investigation, emergency refill rule interpretation",
      qualifier: "Any NY patient or pharmacist",
      access: "Phone, online complaint form",
      outcome: "Complaint investigation, discipline for rule violations",
      phone: "(518) 474-3817",
      url: "https://www.op.nysed.gov/prof/pharm",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "government",
      name: "NYS Department of Financial Services",
      focus: "Insurance coverage complaints including emergency refill claim denials",
      qualifier: "Any NY insurance consumer",
      access: "Phone, online complaint portal",
      outcome: "Complaint investigation, insurer compliance",
      phone: "(800) 342-3736",
      url: "https://www.dfs.ny.gov",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "prior-authorization-step-therapy-ny",
    "epic-prescription-seniors-ny",
    "medicaid-ny",
    "ny-state-of-health-marketplace-ny",
    "medical-records-access-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "emergency pharmacist refill",
    "EDN 6810",
    "30 day emergency supply",
    "pharmacist authority NY",
    "out of refills NY",
    "no doctor prescription refill",
    "weekend prescription refill",
    "pharmacy emergency dispense",
    "Schedule III-V refill",
    "lost prescription refill"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/EDN/6810",
    "https://www.op.nysed.gov/prof/pharm/pharmbroch.htm"
  ],

  lastVerified: "2026-04-20",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
