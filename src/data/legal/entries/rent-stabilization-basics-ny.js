export const RENT_STABILIZATION_BASICS_NY = {
  id: "rent-stabilization-basics-ny",
  category: "housing",
  tier: "state",
  jurisdiction: "us-ny",
  authorityType: "state-statute",
  primaryStatute: "NY EHR A11-B",
  status: "active",

  title: { en: "Rent Stabilization in New York — Where It Applies and What Protections It Provides" },

  summary: {
    en: "Rent stabilization limits rent increases and gives tenants strong renewal rights. Most rent-stabilized units are in New York City, but the Emergency Tenant Protection Act (ETPA) extends stabilization to parts of Westchester, Nassau, Rockland, and other counties — Monroe County does not currently have ETPA coverage. Understanding the difference between stabilized, rent-controlled, and market-rate housing matters for anyone looking for a unit in NYC or ETPA areas, or challenging an improper rent."
  },

  whoQualifies: {
    en: [
      "Any tenant in a rent-stabilized building — typically a pre-1974 building with 6 or more units in NYC, or an ETPA-covered locality.",
      "Any tenant renewing a lease in a stabilized unit who is facing a rent increase.",
      "Any tenant whose landlord claims the unit was deregulated — deregulation rules became stricter in 2019.",
      "Any tenant researching whether their current unit is stabilized."
    ]
  },

  whatItMeans: {
    en: "Rent stabilization is primarily governed by the Rent Stabilization Law of 1969, the Rent Stabilization Code (9 NYCRR Part 2520-2531), and the Housing Stability and Tenant Protection Act (HSTPA) of 2019. The Emergency Tenant Protection Act (ETPA) is the vehicle for extending stabilization outside NYC. In rent-stabilized units: annual rent increases are capped by the Rent Guidelines Board (for NYC) or the local county board (for ETPA areas); a tenant has the right to a renewal lease; eviction is only allowed for specific reasons (nonpayment, nuisance, owner occupancy with limits, major rehabilitation); and most rent-regulated units are passed to family members who lived with the tenant for the required period before the tenant died or moved out (succession rights). The HSTPA of 2019 made major changes: it eliminated vacancy decontrol, high-rent decontrol, and high-income deregulation; capped major capital improvement and individual apartment improvement passes-through; and extended the Overcharge lookback period to six years. Most rent-stabilized units are in NYC buildings built before 1974 with 6 or more units. Outside NYC, ETPA covers localities that have declared a housing emergency (vacancy rate under 5 percent) — currently parts of Westchester, Nassau, Rockland, and a handful of other localities. Monroe County and Rochester are not currently ETPA-covered — Rochester-area tenants are in market-rate units governed by general landlord-tenant law (RPL Sections 223-b, 226-b, 235-b, 238-a, 235-e, 7-103). Certain Rochester housing is federally subsidized (Section 8, LIHTC) with its own rent rules, but is not stabilized. If a Rochester-area tenant believes their unit is stabilized (rare but possible if the building was rehabilitated with federal tax credits), the Division of Homes and Community Renewal (DHCR) is the agency to verify. NYC tenants can request their rental history from DHCR at any time — a key tool for spotting overcharges."
  },

  yourRights: {
    en: [
      "A rent-stabilized tenant has the right to a renewal lease at a rent set by the local Rent Guidelines Board.",
      "A stabilized tenant cannot be evicted except for specific statutory reasons.",
      "A stabilized tenant's family members who lived with the tenant for 2+ years (or 1 year for seniors and disabled) have succession rights.",
      "A stabilized tenant has the right to request the unit's rent history from DHCR — the key tool for spotting overcharges.",
      "A tenant who was overcharged has the right to recover the overcharge plus treble damages for willful overcharges, within a 6-year lookback under HSTPA.",
      "A tenant has the right to know whether their unit is stabilized — the landlord must disclose this on the lease and DHCR maintains records."
    ]
  },

  legalOptions: {
    en: [
      "NYS Division of Homes and Community Renewal (DHCR) at (718) 739-6400 handles stabilization questions, rent overcharge complaints, and status verification.",
      "For a rent overcharge complaint, file Form RA-89 with DHCR. The rent history (Form RA-81) is available free.",
      "Monroe County tenants: stabilization is rare locally. Most Rochester-area disputes are resolved under general landlord-tenant law. See the landlord-retaliation-ban-ny, security-deposit-ny, and tenant-rights-repairs-ny entries.",
      "For tenants in NYC or ETPA areas, Met Council on Housing at (212) 979-0611 provides tenant counseling.",
      "Free legal help with rent regulation matters for low-income tenants is available through Legal Aid Society of Rochester at (585) 232-4090.",
      "Legal Services NYC and JustFix help NYC tenants navigate stabilization."
    ]
  },

  example: {
    en: "A Monroe County tenant in a downtown Rochester loft believed the building was stabilized because the landlord received tax abatements. She requested her rent history from DHCR. The record showed the building had been rehabilitated with Low-Income Housing Tax Credits but was not rent-stabilized — a common confusion. Her protections instead came from the LIHTC regulatory agreement (income limits, rent caps based on area median income) plus general NY tenant law. She was not entitled to stabilization-specific renewal rights, but the LIHTC agreement capped her rent at a set percentage of area median income. She used the rent history to confirm her rent was within the LIHTC cap."
  },

  counsel: [
    {
      type: "government",
      name: "NYS Division of Homes and Community Renewal (DHCR)",
      focus: "Rent stabilization, overcharge complaints, rent history records",
      qualifier: "Any NY tenant in potentially stabilized housing",
      access: "Phone at (718) 739-6400",
      outcome: "Status verification, overcharge investigation, orders",
      phone: "(718) 739-6400",
      url: "https://hcr.ny.gov/rent",
      verified: true,
      bilingual: true,
      languages: ["es"]
    }
  ],

  relatedIds: [
    "landlord-retaliation-ban-ny",
    "security-deposit-ny",
    "security-deposit-interest-ny",
    "section-8-housing-voucher-ny",
    "how-to-read-lease-ny"
  ],

  relatedHelpResources: [],

  tags: [
    "rent stabilization",
    "Emergency Tenant Protection Act",
    "ETPA",
    "HSTPA 2019",
    "rent regulation",
    "DHCR",
    "rent overcharge",
    "succession rights stabilization",
    "renewal lease stabilized",
    "rent history"
  ],

  sources: [
    "https://www.nysenate.gov/legislation/laws/EHR/A11-B",
    "https://hcr.ny.gov/rent"
  ],

  lastVerified: "2026-04-18",
  volatility: "low",
  emergencyFlag: false,
  disclaimer: true,
  categoryDisclaimer: null
};
