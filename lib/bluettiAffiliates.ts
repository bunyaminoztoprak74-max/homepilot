export interface BluettiModelSpec {
  slug: string;
  name: string;
  tierLabel: string;
  capacityWh: number;
  continuousW: number;
  surgeW: number;
  idleLossW: number;
  upsMs: number;
  expandableToWh: number;
  cjUrl: string;
  couponCode?: string;
  couponNote?: string;
  typicalPriceUsd: string;
  bestFor: string;
}

export const CJ_PID_WEBSITE = "101761537"; // HomePilot Web Property
export const CJ_PID_GRIDSPEC_YT = "101930704"; // GridSpec Lab Official YouTube Property

// Verified Bluetti Global (6191107) Link IDs & CJ Tracking Domains (US Default + CA Geo-Targeted)
export const BLUETTI_LINK_SPECS: Record<string, { host: string; linkId: string; caLinkId?: string; euLinkId?: string }> = {
  "elite-100-v2": { host: "https://www.kqzyfj.com", linkId: "17331988", caLinkId: "17347375" },
  "elite-100-mini": { host: "https://www.kqzyfj.com", linkId: "17347374", caLinkId: "17347375" },
  "elite-200-v2": { host: "https://www.tkqlhce.com", linkId: "16961653", caLinkId: "17130962" },
  "ac200l": { host: "https://www.dpbolvw.net", linkId: "17110659", caLinkId: "17130962" },
  "apex-200": { host: "https://www.tkqlhce.com", linkId: "17373661", caLinkId: "17130962" },
  "elite-300": { host: "https://www.dpbolvw.net", linkId: "17258101", caLinkId: "17258110" },
  "apex-300": { host: "https://www.anrdoezrs.net", linkId: "17071597", caLinkId: "17071597" },
  "home-backup": { host: "https://www.anrdoezrs.net", linkId: "15816209", caLinkId: "17130962" },
  "fridgepower": { host: "https://www.tkqlhce.com", linkId: "17306584", caLinkId: "17130962" },
  "charger-2": { host: "https://www.dpbolvw.net", linkId: "17227807", caLinkId: "17130962" },
  "bluetti-5off": { host: "https://www.anrdoezrs.net", linkId: "16981946", caLinkId: "17130962" },
  "bluetti-store": { host: "https://www.tkqlhce.com", linkId: "15736238", caLinkId: "17130962" },
  // Verified ALLPOWERS (7797916) Active CJ Multi-Store Links (EU 230V, Balcony Solar, AU & Global 10% OFF)
  "allpowers-eu": { host: "https://www.anrdoezrs.net", linkId: "17227112", euLinkId: "17227112" },
  "allpowers-balcony": { host: "https://www.dpbolvw.net", linkId: "17317129", euLinkId: "17317129" },
  "allpowers-5kwh-eu": { host: "https://www.anrdoezrs.net", linkId: "17317153", euLinkId: "17317153" },
  "allpowers-deal": { host: "https://www.anrdoezrs.net", linkId: "17373492", euLinkId: "17227112" },
  "allpowers-au": { host: "https://www.tkqlhce.com", linkId: "17280052" }
};

const EU_COUNTRIES = new Set([
  "DE", "FR", "NL", "SE", "AT", "BE", "IT", "ES", "PL", "DK", "FI", "IE", "PT",
  "CZ", "GR", "HU", "RO", "CH", "NO", "GB", "SK", "SI", "HR", "BG", "LT", "LV", "EE", "LU"
]);

export function buildBluettiCjUrl(
  slug: string,
  isCalculatorClick: boolean,
  countryCode = "US",
  forceUsStore = false
): string {
  const cleanSlug = slug.toLowerCase();
  const spec = BLUETTI_LINK_SPECS[cleanSlug] ?? BLUETTI_LINK_SPECS["bluetti-5off"];
  const pid = isCalculatorClick ? CJ_PID_WEBSITE : CJ_PID_GRIDSPEC_YT;
  const cc = countryCode.toUpperCase();

  let chosenHost = spec.host;
  let chosenLinkId = spec.linkId;

  if (!forceUsStore) {
    if (cc === "CA" && spec.caLinkId) {
      chosenLinkId = spec.caLinkId;
    } else if (cc === "AU") {
      // Bluetti Global (6191107) only services US/CA/NZ; route AU 230V buyers to ALLPOWERS AU Official Store (7797916)
      chosenHost = "https://www.tkqlhce.com";
      chosenLinkId = "17280052";
    } else if (EU_COUNTRIES.has(cc)) {
      // Bluetti Global (6191107) only services US/CA/NZ; route EU/UK 230V buyers to ALLPOWERS EU 230V Official Store (7797916)
      if (spec.euLinkId) {
        chosenLinkId = spec.euLinkId;
      } else {
        chosenHost = "https://www.anrdoezrs.net";
        chosenLinkId = "17227112";
      }
    }
  }

  const sidPrefix = isCalculatorClick ? "calc" : "gridspec_yt";
  const safeSid = `${sidPrefix}_${cleanSlug.replace(/[^a-z0-9_-]/g, "")}_${cc.toLowerCase()}`;
  return `${chosenHost}/click-${pid}-${chosenLinkId}?sid=${safeSid}`;
}

export const BLUETTI_MODELS: BluettiModelSpec[] = [
  {
    slug: "elite-100-v2",
    name: "BLUETTI Elite 100 V2",
    tierLabel: "1kWh Overnight Fridge Tier",
    capacityWh: 1024,
    continuousW: 1800,
    surgeW: 2700,
    idleLossW: 11,
    upsMs: 10,
    expandableToWh: 1024,
    cjUrl: "/go/elite-100-v2?src=calc",
    couponCode: "ELITE5OFF",
    couponNote: "Extra 5% OFF Elite 100 V2 & Bundles",
    typicalPriceUsd: "$499–$699",
    bestFor: "8–13 hours modern kitchen refrigerator + Wi-Fi router during short storms."
  },
  {
    slug: "elite-200-v2",
    name: "BLUETTI Elite 200 V2",
    tierLabel: "2kWh 24-Hour Sweet Spot",
    capacityWh: 2073,
    continuousW: 2600,
    surgeW: 3900,
    idleLossW: 12,
    upsMs: 15,
    expandableToWh: 2073,
    cjUrl: "/go/elite-200-v2?src=calc",
    couponCode: "AFFEV5%",
    couponNote: "Extra 5% OFF Elite 200 V2",
    typicalPriceUsd: "$899–$1,199",
    bestFor: "24–28 hours continuous refrigerator + CPAP + Wi-Fi with ultra-low inverter idle loss (6,000+ LiFePO4 cycles)."
  },
  {
    slug: "elite-300",
    name: "BLUETTI Elite 300",
    tierLabel: "3kWh Compact Extended Runtime",
    capacityWh: 3014,
    continuousW: 2400,
    surgeW: 4800,
    idleLossW: 14,
    upsMs: 10,
    expandableToWh: 3014,
    cjUrl: "/go/elite-300?src=calc",
    couponCode: "AFF5OFF",
    couponNote: "Extra 5% OFF Sitewide Code",
    typicalPriceUsd: "$1,299–$1,499",
    bestFor: "36–42 hours single-box runtime for Fridge + Deep Freezer without expansion cables."
  },
  {
    slug: "apex-300",
    name: "BLUETTI Apex 300 (Expandable 120V/240V)",
    tierLabel: "Whole-Home & Transfer Switch Flagship",
    capacityWh: 2765,
    continuousW: 3840,
    surgeW: 7680,
    idleLossW: 18,
    upsMs: 0,
    expandableToWh: 16588,
    cjUrl: "/go/apex-300?src=calc",
    couponCode: "AFF5OFF",
    couponNote: "Extra 5% OFF Sitewide Code",
    typicalPriceUsd: "$1,499 ($2,599 w/ B300K 5.5kWh)",
    bestFor: "Multi-day blackouts, sump pumps, well pumps, manual transfer switches, and scaling to 5.5kWh–16kWh."
  },
  {
    slug: "home-backup",
    name: "BLUETTI AC300 + B300K / AC500 Modular",
    tierLabel: "5kW Heavy Inductive Home Backup",
    capacityWh: 5529,
    continuousW: 5000,
    surgeW: 10000,
    idleLossW: 24,
    upsMs: 15,
    expandableToWh: 18432,
    cjUrl: "/go/home-backup?src=calc",
    couponCode: "power5",
    couponNote: "Extra 5% OFF AC300/AC500 + Solar Kits",
    typicalPriceUsd: "$2,499–$4,299",
    bestFor: "48–72+ hour grid failures running multiple refrigerators, sump pumps, microwave & 240V split-phase panels."
  }
];
