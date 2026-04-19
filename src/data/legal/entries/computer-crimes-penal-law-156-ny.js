export const COMPUTER_CRIMES_PENAL_LAW_156_NY = {
  id: "computer-crimes-penal-law-156-ny",
  category: "criminal",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY PEN 156",
  status: "active",

  title: { en: "NY Computer Crimes — Penal Law Article 156 Unauthorized Use, Computer Tampering, and Computer Trespass" },

  summary: {
    en: "New York Penal Law Article 156 (Sections 156.00-156.50) criminalizes a range of computer-related offenses — unauthorized use of a computer (156.05, class A misdemeanor), computer trespass (156.10, class E felony), computer tampering degrees (156.20 through 156.27, from class A misdemeanor to class C felony based on damage amount), unlawful duplication of computer material (156.30, class E felony), criminal possession of computer material (156.35, class E felony), and unauthorized use with intent to commit another crime (156.50). Remedies run in parallel with federal Computer Fraud and Abuse Act 18 USC 1030. Victims can also pursue civil damages under NY General Business Law 349 and common-law tort theories for unauthorized access to computer systems or data."
  },

  whoQualifies: {
    en: [
      "A business whose computer systems were accessed without authorization.",
      "An individual whose personal computer, email, or cloud accounts were hacked.",
      "An employer whose former employee retained access to systems post-termination.",
      "An employee facing criminal charges under PEN 156 for alleged unauthorized system access.",
      "A victim of ransomware, data theft, or malicious code.",
      "A defense attorney evaluating prosecution under Article 156.",
      "A prosecutor deciding charges for computer-based offenses."
    ]
  },

  whatItMeans: {
    en: "NY Penal Law Article 156, enacted in 1986 and updated several times, is NY's primary state-level computer-crime statute. It operates alongside the federal Computer Fraud and Abuse Act (CFAA, 18 USC 1030) — prosecutors may use either or both depending on jurisdiction and severity. Key definitions (PEN 156.00): 'computer' — any programmable electronic device. 'computer program' — a series of instructions that can be executed by a computer. 'computer material' — any item of equipment, storage medium, or data. 'authorized use' — use by a person with authority granted by the owner. Unauthorized use of a computer (PEN 156.05): a person knowingly uses or causes to be used a computer without authorization. Class A misdemeanor — up to 1 year jail, up to $1,000 fine. Computer trespass (PEN 156.10): unauthorized use with intent to commit or attempt or further the commission of a felony. Class E felony — up to 4 years prison. Computer tampering degrees: (1) Fourth degree (156.20) — intentional alteration or destruction of computer material without authorization. Class A misdemeanor. (2) Third degree (156.25) — tampering with intent to commit a felony. Class E felony. (3) Second degree (156.26) — tampering causing damage over $1,000. Class D felony. (4) First degree (156.27) — tampering causing damage over $50,000. Class C felony — up to 15 years. Unlawful duplication of computer material (PEN 156.30): copying or reproducing computer material worth over $2,500 without authorization. Class E felony. Criminal possession of computer material (PEN 156.35): possessing unlawfully-duplicated material with knowledge of its origin. Class E felony. Unauthorized use with intent to commit another crime (PEN 156.50): broader catch-all. Intent element: most Article 156 offenses require proof of intent — either specific intent to commit another offense (trespass, third-degree tampering) or general intent to access without authorization. Mistake or inadvertent access is typically not criminal, though civil liability may attach. Civil parallel (General Business Law 349, common-law conversion): victims can sue for actual damages, injunctive relief, and in some cases statutory damages under GBL 349. Common-law conversion and trespass to chattels also apply. Federal CFAA parallel (18 USC 1030): broader federal statute covering computers connected to interstate commerce. Federal prosecution typical for cross-state or cross-border offenses, high-damage cases, or cases involving federal computers. Prosecution priorities: NY DAs typically pursue Article 156 charges for (1) ransomware and extortion schemes, (2) business email compromise and wire fraud involving computer access, (3) insider employee data theft, (4) identity theft involving computer systems, (5) critical infrastructure attacks. Prosecution of small-scale access (e.g., a scorned ex logging into a spouse's Facebook) varies by jurisdiction. Investigation resources: NY Attorney General Internet and Technology Bureau, Monroe County DA Cyber Crime Unit (if exists), NYS Police Computer Crimes Unit. Federal cases go to FBI or Secret Service. Evidence preservation: critical in computer crime cases. Log files, backup drives, email metadata, and timestamps deteriorate quickly. Victims should immediately (1) preserve affected systems without modifying them, (2) document access logs, (3) contact IT forensics professionals, (4) report to law enforcement promptly, (5) consult counsel on civil discovery preservation. Defense considerations: common defenses include (1) authorized use — defendant had actual or apparent authority, (2) mistake — access was inadvertent, (3) lack of knowledge that access was unauthorized, (4) insufficient damage amount for higher-degree charges, (5) constitutional defenses (Fourth Amendment for law enforcement computer searches; First Amendment for speech-related access). Civil settlement: many business computer crime cases resolve civilly. Criminal restitution can be part of sentencing if convicted. Employee termination with agreed-upon release of claims is common in insider cases."
  },

  yourRights: {
    en: [
      "A victim of computer crime has the right to report under Article 156 to law enforcement.",
      "A victim has the right to pursue civil damages under GBL 349 and common-law conversion.",
      "A defendant has the right to counsel and all standard criminal-procedure protections.",
      "A defendant has the right to challenge whether the access was truly unauthorized.",
      "An employer has the right to terminate and prosecute insiders for computer crimes.",
      "A business victim has the right to restitution as part of criminal sentencing.",
      "A victim has the right to coordinate with federal prosecutors for CFAA charges when state and federal jurisdiction overlap."
    ]
  },

  legalOptions: {
    en: [
      "NY Attorney General Internet and Technology Bureau at (212) 416-8433 — state-level cyber crime reporting.",
      "FBI Buffalo Cyber Squad at (716) 856-7800 — federal cyber crime reporting.",
      "Monroe County District Attorney at (585) 753-4500 — local criminal prosecution.",
      "NYS Police Computer Crime Unit — cyber investigation.",
      "Monroe County Bar Association Lawyer Referral at (585) 546-2130 — criminal defense and civil cyber attorneys.",
      "Secret Service Electronic Crimes Task Force at (716) 852-8550 — financial cyber crime.",
      "IC3 (Internet Crime Complaint Center) at ic3.gov — FBI online reporting."
    ]
  },

  example: {
    en: "A Rochester small business discovered that a former IT contractor had retained remote-access credentials after his contract ended and was accessing the company's customer database for 4 months. Company forensics identified approximately 8,000 customer records exfiltrated. The business reported to Monroe County DA Cyber Unit and NYS Attorney General. Charges: Computer Trespass (PEN 156.10, E felony) and Unlawful Duplication (PEN 156.30, E felony). Parallel federal investigation by FBI charged CFAA violations. State case pled guilty to first-degree tampering (PEN 156.27, C felony) with 2-5 years prison and $75,000 restitution. Civil case by the business recovered additional $420,000 in damages and injunctive relief barring further contact. Federal charges deferred pending state disposition."
  },

  counsel: [
    {
      type: "agency",
      name: "NY Attorney General Internet and Technology Bureau",
      focus: "State-level cyber crime investigation and prosecution",
      qualifier: "Any NY victim of computer crime",
      access: "Phone (212) 416-8433 or online at ag.ny.gov",
      outcome: "Investigation, possible criminal charges, civil enforcement",
      phone: "(212) 416-8433",
      url: "https://ag.ny.gov/internet-and-technology-bureau",
      verified: true,
      bilingual: false,
      languages: []
    },
    {
      type: "referral",
      name: "Monroe County Bar Association Lawyer Referral",
      focus: "Criminal defense and civil cyber law",
      qualifier: "Any Monroe County party involved in cyber matter",
      access: "Phone at (585) 546-2130",
      outcome: "Consultation, defense or civil representation",
      phone: "(585) 546-2130",
      url: "https://www.mcba.org",
      verified: true,
      bilingual: false,
      languages: []
    }
  ],

  relatedIds: [
    "identity-theft-ny",
    "internet-privacy-data-breach-ny",
    "deceptive-business-practices-ny",
    "identity-theft-response-steps-ny",
    "rights-when-arrested-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "computer crimes",
    "Penal Law 156",
    "PEN 156.05 unauthorized use",
    "PEN 156.10 trespass E felony",
    "PEN 156.27 first degree tampering C felony",
    "PEN 156.30 unlawful duplication",
    "18 USC 1030 CFAA parallel",
    "ransomware prosecution",
    "insider threat",
    "GBL 349 civil parallel"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/PEN/A156",
    "https://www.law.cornell.edu/uscode/text/18/1030"
  ],

  lastVerified: "2026-04-19",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
