export const APARTMENT_ELECTRIC_SUBMETERING_NY = {
  id: "apartment-electric-submetering-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-regulation",
  primaryStatute: "16 NYCRR 96",
  status: "active",

  title: { en: "NY Apartment Submetering — When a Landlord Can Bill Tenants for Electricity" },

  summary: {
    en: "New York allows a landlord to submeter (measure and bill individual apartment electricity use) only with a Public Service Commission permit under 16 NYCRR Part 96. The landlord cannot charge more than the utility's own tariff rate, must provide itemized monthly bills, and cannot shut off power for nonpayment without following utility shutoff protections. Tenants billed above the tariff can recover overcharges."
  },

  whoQualifies: {
    en: [
      "A tenant in a NY apartment complex where electricity is billed by the landlord rather than directly by RG&E, National Grid, or another utility.",
      "A tenant who thinks the submetered bill is higher than what the utility would charge directly.",
      "A tenant facing shutoff or lease termination over an unpaid submetered electric bill.",
      "A landlord or property manager considering setting up submetering."
    ]
  },

  whatItMeans: {
    en: "New York prohibits a landlord or building owner from reselling electricity to tenants without a Public Service Commission permit. The rule is at 16 NYCRR Part 96 and implements Public Service Law Sections 52 and 53. Without a PSC permit, the landlord must include electricity in the rent or require the tenant to set up a direct account with the utility. With a submetering permit, the landlord installs individual apartment meters, reads them monthly, and bills each tenant for actual usage. Several protections apply. The landlord cannot charge a tenant more per kilowatt-hour than the utility's own residential tariff rate on file with the PSC. The landlord cannot add a profit margin, service fee, or administrative surcharge to the energy cost. The bill must be itemized showing kilowatt-hours used, rate per kWh, and dollar amount, with the reading date clearly marked. The landlord must provide at least 10 days to pay before any late fee (typically 1.5 percent per month) can accrue. A tenant who falls behind on a submetered electric bill has the same Home Energy Fair Practices Act protections as direct-utility customers under PSL 30 — the landlord cannot simply shut off power. The landlord must issue a 15-day written shutoff notice, offer a deferred payment agreement, and cannot shut off during a medical emergency, cold-weather months (November 1 to April 15), or when the tenant is receiving or applying for HEAP. Tenants with a medical certificate protecting someone in the household cannot have power shut off at all. A landlord that shuts off power without following these steps can be sued for damages and is in violation of PSL 65 — tenants can report to the PSC at (800) 342-3377. Tenants have the right to request a past-12-month usage history from the landlord (required disclosure) before signing a lease. Overcharges above the tariff rate can be recovered for three years back under PSL 74 and can include treble damages if the overcharge was willful. A tenant who thinks submetering is happening without a PSC permit can file a complaint with the PSC; an unpermitted resale of electricity is a violation and can result in refunds to all tenants plus fines on the landlord. Common situations where submetering is improper include a landlord who installed smart-meter readers in each apartment without PSC approval and started billing tenants, a landlord who charges a flat 100 dollar a month electricity fee regardless of usage (flat fees are generally not allowed — must be actual usage-based), and a lease clause that requires tenants to pay electricity directly to the landlord without explaining the submetering permit number. Rent-stabilized buildings have additional protections — any submetering change must be approved by the Division of Housing and Community Renewal (DHCR). The PSC maintains a list of permitted submetering buildings at dps.ny.gov. A tenant can check whether the building has a permit by searching the building address."
  },

  yourRights: {
    en: [
      "A tenant has the right to be billed at or below the utility's residential tariff rate, with no profit margin for the landlord.",
      "A tenant has the right to an itemized monthly bill showing kWh used, rate, and reading date.",
      "A tenant has the right to 15-day shutoff notice and medical/cold-weather protections under PSL 30.",
      "A tenant has the right to a deferred payment agreement for back bills.",
      "A tenant has the right to recover overcharges for up to 3 years back under PSL 74.",
      "A tenant has the right to check whether the building has a PSC submetering permit at dps.ny.gov."
    ]
  },

  legalOptions: {
    en: [
      "NYS Public Service Commission at (800) 342-3377 handles submetering complaints and permit verification.",
      "NYS Department of Public Service consumer advocate at (800) 342-3355 assists tenants with complaints.",
      "Legal Aid Society of Rochester at (585) 295-5727 represents low-income tenants in submetering overcharge cases.",
      "For DHCR rent-stabilized building issues, NYS Division of Housing and Community Renewal at (718) 739-6400.",
      "City of Rochester Office of Housing and Neighborhood Services at (585) 428-6950 handles tenant-landlord complaints within the city."
    ]
  },

  example: {
    en: "Ahmad rented an apartment in a Rochester complex where the landlord billed electricity at 22 cents per kWh. Ahmad pulled his RG&E residential tariff and found the actual rate was 14 cents per kWh. He filed a PSC complaint. The PSC audited the landlord, found no submetering permit on file, and ordered the landlord to refund two years of overcharges across 48 tenants (totaling roughly 38,000 dollars in refunds) and to either apply for a proper permit or stop submetering. Ahmad received 640 dollars in refunded overcharges."
  },

  counsel: [
    {
      type: "government",
      name: "NYS Public Service Commission",
      focus: "Submetering permits, tariff enforcement, consumer complaints",
      qualifier: "Any NY tenant or utility customer",
      access: "Phone, online complaint portal",
      outcome: "Complaint investigation, refund orders, landlord compliance enforcement",
      phone: "(800) 342-3377",
      url: "https://dps.ny.gov/consumer-complaint",
      verified: true,
      bilingual: true,
      languages: ["es"]
    },
    {
      type: "nonprofit",
      name: "Legal Aid Society of Rochester",
      focus: "Tenant representation in submetering overcharge and improper-shutoff cases",
      qualifier: "Monroe County tenant at or under 200 percent of poverty",
      access: "Phone intake",
      outcome: "Free legal representation",
      phone: "(585) 295-5727",
      url: "https://www.lasroc.org",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "utility-shutoff-protections-ny",
    "heap-utility-assistance-ny",
    "rent-stabilization-basics-ny",
    "security-deposit-ny",
    "water-damage-tenant-rights-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "apartment submetering",
    "16 NYCRR 96",
    "landlord electricity",
    "PSL 52 53",
    "submeter overcharge",
    "utility tariff rate",
    "submetering permit NY",
    "electric shutoff tenant",
    "HEFPA protections",
    "apartment electricity bill"
  ],

  sources: [
    "https://govt.westlaw.com/nycrr/Browse/Home/NewYork/NewYorkCodesRulesandRegulations?guid=I5b4aaca08c1211dd97adcd755bda2840",
    "https://dps.ny.gov/submetering"
  ],

  lastVerified: "2026-04-20",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
