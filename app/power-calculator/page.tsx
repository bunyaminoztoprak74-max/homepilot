import type { Metadata } from "next";
import { PowerCalculatorClient } from "./PowerCalculatorClient";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Refrigerator & Home Outage Power Station Sizing Calculator (2026 Wh Math)",
  description:
    "Calculate how long a 1kWh, 2kWh, or 3kWh portable power station will actually run your refrigerator, sump pump, CPAP, and Wi-Fi — including real AC inverter idle tare loss.",
  alternates: {
    canonical: "/power-calculator"
  }
};

export default function PowerCalculatorPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-800">
          GridSpec Engineering Buyer&apos;s Tool • 2026 Post-25D Edition
        </span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
          Home Outage &amp; Refrigerator Power Station Sizing Calculator
        </h1>
        <p className="mt-3 max-w-3xl text-base text-neutral-600">
          Manufacturer runtime charts ignore{" "}
          <strong>AC inverter idle tare loss (280–550 Wh wasted per 24 hours)</strong> and
          defrost heater cycles. Select your appliances below to calculate your true Watt-hour
          requirement and compare verified direct manufacturer offers.
        </p>
      </div>

      <AffiliateDisclosure />

      <div className="mt-6">
        <PowerCalculatorClient />
      </div>

      <section className="prose-homepilot mt-12 rounded-2xl border border-neutral-200 bg-white p-6 text-sm text-neutral-700">
        <h2 className="text-lg font-bold text-neutral-900">
          How to Find Your Fridge&apos;s Exact Number on the Yellow EnergyGuide Sticker
        </h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>
            Open your refrigerator door and check the yellow{" "}
            <strong>FTC EnergyGuide label</strong> (or search your model number +{" "}
            <code>kWh/year</code>).
          </li>
          <li>
            Divide the annual kWh by <strong>365</strong>, then multiply by{" "}
            <strong>1,000</strong> to get base daily Watt-hours (e.g.,{" "}
            <code>510 kWh/yr ÷ 365 × 1,000 = 1,397 Wh/day ≈ 58W average</code>).
          </li>
          <li>
            Add your power station&apos;s{" "}
            <strong>24-hour AC inverter idle draw</strong> (<code>12W × 24h = 288 Wh</code>{" "}
            on modern units like the Elite 200 V2, or up to <code>650 Wh</code> on older
            oversized inverters) and divide by <strong>0.85</strong> for usable LiFePO₄
            conversion efficiency.
          </li>
        </ol>
      </section>
    </main>
  );
}
