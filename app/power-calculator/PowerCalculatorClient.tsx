"use client";

import { useEffect, useMemo, useState } from "react";
import { BLUETTI_MODELS } from "@/lib/bluettiAffiliates";

interface AppliancePreset {
  id: string;
  label: string;
  avgWatts: number;
  surgeWatts: number;
  dutyNote: string;
  defaultSelected?: boolean;
}

const APPLIANCES: AppliancePreset[] = [
  {
    id: "modern-fridge",
    label: "Modern Kitchen Refrigerator (EnergyStar 2018+)",
    avgWatts: 58,
    surgeWatts: 800,
    dutyNote: "~150W compressor cycling 35% + daily defrost spike",
    defaultSelected: true
  },
  {
    id: "older-fridge",
    label: "Older / Garage / Side-by-Side Refrigerator",
    avgWatts: 92,
    surgeWatts: 1200,
    dutyNote: "Higher duty cycle + 500W defrost heater element"
  },
  {
    id: "chest-freezer",
    label: "Chest or Upright Deep Freezer",
    avgWatts: 45,
    surgeWatts: 700,
    dutyNote: "Well-insulated ~30% compressor duty cycle"
  },
  {
    id: "wifi",
    label: "Wi-Fi Router + Fiber ONT / Cable Modem",
    avgWatts: 18,
    surgeWatts: 25,
    dutyNote: "Continuous 24/7 draw",
    defaultSelected: true
  },
  {
    id: "cpap",
    label: "CPAP Machine (Heated Humidifier OFF, 8h/night)",
    avgWatts: 14,
    surgeWatts: 60,
    dutyNote: "~42W for 8 hrs averaged across 24 hrs"
  },
  {
    id: "sump-pump",
    label: "Basement Sump Pump (1/3–1/2 HP, Storm Cycling)",
    avgWatts: 40,
    surgeWatts: 2100,
    dutyNote: "800W running for ~3 min/hr, high inductive LRA surge"
  },
  {
    id: "gas-furnace",
    label: "Gas Furnace Blower Fan (Winter Heating, 30% Duty)",
    avgWatts: 165,
    surgeWatts: 1100,
    dutyNote: "~550W ECM/PSC fan cycling 20 mins per hour"
  },
  {
    id: "microwave",
    label: "Microwave / Coffee Maker (20 mins/day)",
    avgWatts: 22,
    surgeWatts: 1500,
    dutyNote: "1,500W for 20 minutes per 24 hours"
  }
];

export function PowerCalculatorClient() {
  const [selectedIds, setSelectedIds] = useState<string[]>(
    APPLIANCES.filter((a) => a.defaultSelected).map((a) => a.id)
  );
  const [outageHours, setOutageHours] = useState<number>(24);
  const [solarWatts, setSolarWatts] = useState<number>(0);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activePreset, setActivePreset] = useState<string>("24h");

  const applyPreset = (presetKey: string) => {
    setActivePreset(presetKey);
    if (presetKey === "72h") {
      setSelectedIds(["modern-fridge", "wifi", "cpap", "sump-pump"]);
      setOutageHours(72);
      setSolarWatts(200);
    } else if (presetKey === "apartment") {
      setSelectedIds(["modern-fridge", "wifi"]);
      setOutageHours(72);
      setSolarWatts(200);
    } else if (presetKey === "winter") {
      setSelectedIds(["modern-fridge", "gas-furnace", "sump-pump", "wifi"]);
      setOutageHours(72);
      setSolarWatts(400);
    } else {
      setSelectedIds(["modern-fridge", "wifi"]);
      setOutageHours(24);
      setSolarWatts(0);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const p = (params.get("preset") ?? "").toLowerCase();
    if (p === "72h" || p === "apartment" || p === "winter") {
      applyPreset(p);
    }
  }, []);

  const toggleAppliance = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calc = useMemo(() => {
    const active = APPLIANCES.filter((a) => selectedIds.includes(a.id));
    const avgApplianceW = active.reduce((sum, a) => sum + a.avgWatts, 0);
    const peakSurgeW = active.reduce((max, a) => Math.max(max, a.surgeWatts), 0) +
      Math.round(avgApplianceW * 0.5);

    const estInverterIdleW = peakSurgeW > 3000 ? 18 : 12;
    const totalContinuousDrawW = avgApplianceW + estInverterIdleW;

    const applianceWhNeeded = avgApplianceW * outageHours;
    const inverterTareLossWh = estInverterIdleW * outageHours;
    const netDailySolarWh = Math.round(solarWatts * 3.8 * (outageHours / 24));
    const usableWhRequired = Math.max(
      250,
      applianceWhNeeded + inverterTareLossWh - netDailySolarWh
    );
    // 85% usable battery depth-of-discharge + DC-AC conversion efficiency
    const ratedBatteryWhRecommended = Math.round(usableWhRequired / 0.85);

    const modelResults = BLUETTI_MODELS.map((m) => {
      const usableWh = m.capacityWh * 0.86;
      const realHourlyDrain = Math.max(15, avgApplianceW + m.idleLossW - solarWatts * 0.15);
      const estHours = Math.round((usableWh / realHourlyDrain) * 10) / 10;
      const surgeOk = m.surgeW >= peakSurgeW && m.continuousW >= Math.min(peakSurgeW * 0.65, 2200);
      return { ...m, estHours, surgeOk };
    });

    const recommended =
      modelResults.find((m) => m.estHours >= outageHours && m.surgeOk) ??
      modelResults[modelResults.length - 1];

    return {
      avgApplianceW,
      peakSurgeW,
      estInverterIdleW,
      totalContinuousDrawW,
      applianceWhNeeded,
      inverterTareLossWh,
      netDailySolarWh,
      ratedBatteryWhRecommended,
      modelResults,
      recommended
    };
  }, [selectedIds, outageHours, solarWatts]);

  const copyCoupon = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div className="space-y-8">
      {/* One-Click US FEMA & EU 72-Hour Emergency Readiness Presets */}
      <div className="rounded-2xl border border-amber-300 bg-amber-50/70 p-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-900">
              ⚡ Quick Scenario Presets (US FEMA &amp; EU 72-Hour Readiness Standard • 120V / 230V Wh Math)
            </span>
            <p className="text-xs text-amber-800">
              Tap a preset to load official 3-day emergency power profiles instantly:
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { id: "72h", label: "🚨 72-Hour Home Blackout (US/EU)" },
              { id: "apartment", label: "🏢 72-Hour Apartment / Flat (No Gas)" },
              { id: "winter", label: "❄️ 72-Hour Winter Freeze (Heating)" },
              { id: "24h", label: "⚡ 24-Hour Standard Storm" }
            ].map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => applyPreset(p.id)}
                className={`rounded-xl px-3.5 py-2 text-xs font-bold transition ${
                  activePreset === p.id
                    ? "bg-neutral-950 text-emerald-400 shadow"
                    : "border border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-100"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Step 1 + Live Engineering Math Grid */}
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm lg:col-span-7">
          <h2 className="text-lg font-bold text-neutral-900">
            1. Select Your Outage Loads
          </h2>
          <p className="mt-1 text-sm text-neutral-600">
            Includes real compressor duty cycles, defrost heater spikes, and inductive motor startup surge (LRA).
          </p>

          <div className="mt-4 space-y-2.5">
            {APPLIANCES.map((item) => {
              const checked = selectedIds.includes(item.id);
              return (
                <label
                  key={item.id}
                  className={`flex cursor-pointer items-start justify-between gap-3 rounded-xl border p-3.5 transition ${
                    checked
                      ? "border-emerald-600 bg-emerald-50/50"
                      : "border-neutral-200 hover:border-neutral-300"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleAppliance(item.id)}
                      className="mt-1 h-4 w-4 accent-emerald-600"
                    />
                    <div>
                      <div className="text-sm font-semibold text-neutral-900">
                        {item.label}
                      </div>
                      <div className="text-xs text-neutral-500">{item.dutyNote}</div>
                    </div>
                  </div>
                  <div className=" shrink-0 text-right">
                    <span className="inline-block rounded-md bg-neutral-900 px-2 py-0.5 text-xs font-semibold text-white">
                      {item.avgWatts}W avg
                    </span>
                    <div className="mt-0.5 text-[11px] text-neutral-500">
                      {item.surgeWatts}W surge
                    </div>
                  </div>
                </label>
              );
            })}
          </div>

          {/* Sliders */}
          <div className="mt-6 grid gap-5 border-t border-neutral-200 pt-5 sm:grid-cols-2">
            <div>
              <div className="flex justify-between text-sm font-semibold text-neutral-900">
                <span>Target Outage Duration</span>
                <span className="text-emerald-700">{outageHours} Hours</span>
              </div>
              <input
                type="range"
                min={8}
                max={72}
                step={4}
                value={outageHours}
                onChange={(e) => setOutageHours(Number(e.target.value))}
                className="mt-2 w-full accent-emerald-600"
              />
              <div className="flex justify-between text-xs text-neutral-500">
                <span>8h (Overnight)</span>
                <span>24h (1 Day)</span>
                <span>48h</span>
                <span>72h (3 Days)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold text-neutral-900">
                <span>Solar Panel Input (Optional)</span>
                <span className="text-amber-600">{solarWatts}W Solar</span>
              </div>
              <input
                type="range"
                min={0}
                max={800}
                step={200}
                value={solarWatts}
                onChange={(e) => setSolarWatts(Number(e.target.value))}
                className="mt-2 w-full accent-amber-500"
              />
              <div className="flex justify-between text-xs text-neutral-500">
                <span>0W</span>
                <span>200W</span>
                <span>400W</span>
                <span>800W</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Engineering Output */}
        <div className="flex flex-col justify-between rounded-2xl border border-neutral-900 bg-neutral-950 p-6 text-white shadow-md lg:col-span-5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
              ⚡ Real Inverter Tare-Loss Engineering Model
            </div>
            <h2 className="mt-3 text-xl font-bold">Your True Watt-Hour Requirement</h2>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/5 p-3.5">
                <div className="text-xs text-neutral-400">Appliance Energy</div>
                <div className="mt-1 text-xl font-bold text-white">
                  {calc.applianceWhNeeded.toLocaleString()} Wh
                </div>
                <div className="text-[11px] text-neutral-400">
                  {calc.avgApplianceW}W × {outageHours}h
                </div>
              </div>

              <div className="rounded-xl bg-amber-500/10 p-3.5 border border-amber-500/25">
                <div className="text-xs text-amber-300">Hidden Inverter Loss</div>
                <div className="mt-1 text-xl font-bold text-amber-400">
                  +{calc.inverterTareLossWh.toLocaleString()} Wh
                </div>
                <div className="text-[11px] text-amber-200/80">
                  ~{calc.estInverterIdleW}W idle × {outageHours}h
                </div>
              </div>

              <div className="rounded-xl bg-white/5 p-3.5">
                <div className="text-xs text-neutral-400">Peak Startup Surge</div>
                <div className="mt-1 text-xl font-bold text-white">
                  {calc.peakSurgeW.toLocaleString()} W
                </div>
                <div className="text-[11px] text-neutral-400">LRA motor spike</div>
              </div>

              <div className="rounded-xl bg-emerald-500/15 p-3.5 border border-emerald-500/30">
                <div className="text-xs text-emerald-300">Min Rated Battery</div>
                <div className="mt-1 text-xl font-bold text-emerald-400">
                  {calc.ratedBatteryWhRecommended.toLocaleString()} Wh
                </div>
                <div className="text-[11px] text-emerald-200/80">After 85% usable DoD</div>
              </div>
            </div>

            {calc.netDailySolarWh > 0 && (
              <p className="mt-3 rounded-lg bg-amber-500/10 px-3 py-2 text-xs text-amber-300">
                ☀️ {solarWatts}W solar offsets ~{calc.netDailySolarWh.toLocaleString()} Wh (assuming 3.8 peak sun hours/day).
              </p>
            )}

            {/* Recommended Winner Box */}
            <div className="mt-6 rounded-xl border border-emerald-500/40 bg-gradient-to-br from-emerald-950/80 to-neutral-900 p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Best-Matched Station for {outageHours}h Outage
              </div>
              <div className="mt-1 text-lg font-bold text-white">
                {calc.recommended.name}
              </div>
              <div className="mt-1 text-xs text-neutral-300">
                {calc.recommended.capacityWh.toLocaleString()} Wh LiFePO₄ •{" "}
                {calc.recommended.continuousW.toLocaleString()}W Output • Est.{" "}
                <strong className="text-emerald-400">{calc.recommended.estHours} hrs</strong> runtime on your load
              </div>

              {calc.recommended.couponCode && (
                <div className="mt-3 flex items-center justify-between rounded-lg bg-black/50 px-3 py-2 text-xs">
                  <span>
                    Extra 5% Code:{" "}
                    <strong className="font-mono text-amber-400">
                      {calc.recommended.couponCode}
                    </strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => copyCoupon(calc.recommended.couponCode!)}
                    className="rounded bg-white/15 px-2.5 py-1 font-semibold text-white hover:bg-white/25"
                  >
                    {copiedCode === calc.recommended.couponCode ? "Copied ✓" : "Copy Code"}
                  </button>
                </div>
              )}

              <a
                href={calc.recommended.cjUrl}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="mt-3 block w-full rounded-xl bg-emerald-500 py-3 text-center text-sm font-bold text-neutral-950 transition hover:bg-emerald-400"
              >
                Check Official BLUETTI Deal & Bundle Price →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Step 2: Side-by-Side Runtime Comparison Across All 5 Tiers */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-neutral-900">
          2. Real-World Runtime Across 1kWh, 2kWh, 3kWh & Modular Tiers (On Your Selected {calc.avgApplianceW}W Load)
        </h2>
        <p className="mt-1 text-sm text-neutral-600">
          Unlike box-label claims, every runtime bar below deducts 14% DC-AC conversion + battery reserve and each model&apos;s continuous AC inverter idle draw.
        </p>

        <div className="mt-5 space-y-4">
          {calc.modelResults.map((m) => {
            const pct = Math.min(100, Math.round((m.estHours / Math.max(outageHours, 48)) * 100));
            const meetsTarget = m.estHours >= outageHours && m.surgeOk;
            return (
              <div
                key={m.slug}
                className={`rounded-xl border p-4 ${
                  m.slug === calc.recommended.slug
                    ? "border-emerald-600 bg-emerald-50/30"
                    : "border-neutral-200"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-neutral-900">{m.name}</span>
                      <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700">
                        {m.tierLabel}
                      </span>
                      {m.slug === calc.recommended.slug && (
                        <span className="rounded-full bg-emerald-600 px-2.5 py-0.5 text-xs font-bold text-white">
                          Best Fit
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-xs text-neutral-600">{m.bestFor}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-base font-extrabold text-neutral-900">
                        {m.estHours} Hours
                      </div>
                      <div className="text-[11px] text-neutral-500">
                        {m.capacityWh}Wh • {m.continuousW}W ({m.idleLossW}W idle)
                      </div>
                    </div>
                    <a
                      href={m.cjUrl}
                      target="_blank"
                      rel="nofollow sponsored noopener"
                      className="rounded-lg bg-neutral-900 px-3.5 py-2 text-xs font-bold text-white transition hover:bg-neutral-700"
                    >
                      View Official Offer →
                    </a>
                  </div>
                </div>

                <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-neutral-100">
                  <div
                    className={`h-full rounded-full transition-all ${
                      meetsTarget ? "bg-emerald-600" : "bg-amber-500"
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>

                <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-500">
                  <span>
                    Typical Direct Price: <strong className="text-neutral-800">{m.typicalPriceUsd}</strong>
                    {!m.surgeOk && (
                      <span className="ml-2 font-semibold text-red-600">
                        ⚠️ Below your {calc.peakSurgeW}W surge requirement
                      </span>
                    )}
                  </span>
                  {m.couponCode && (
                    <button
                      type="button"
                      onClick={() => copyCoupon(m.couponCode!)}
                      className="font-semibold text-emerald-700 hover:underline"
                    >
                      {copiedCode === m.couponCode
                        ? `Copied ${m.couponCode}!`
                        : `Use Code ${m.couponCode} (${m.couponNote})`}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step 3: Official 230V Europe / UK / Australia & Global Multi-Store Partner (ALLPOWERS) */}
      <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-slate-950 to-blue-950 p-6 text-white shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-300">
              🌍 230V Europe, UK, Australia &amp; Budget Multi-Store Option
            </span>
            <h2 className="mt-2 text-xl font-extrabold text-white">
              Ordering Outside North America (EU / UK / AU) or Comparing Budget LiFePO₄?
            </h2>
            <p className="mt-1.5 text-sm text-slate-300">
              ALLPOWERS ships 230V Schuko/UK portable power stations, <strong>BS2500/BS5000 PRO Balcony Solar Storage (Balkonkraftwerk)</strong>, and high-output R-Series backups directly from local European, UK, US &amp; Australian warehouses — with an extra <strong>10% OFF</strong> reader coupon.
            </p>
          </div>
          <div className="flex flex-col gap-2.5 sm:min-w-[270px]">
            <div className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2 text-xs">
              <span>
                Extra 10% Code: <strong className="font-mono text-amber-300">APBF10</strong> /{" "}
                <strong className="font-mono text-amber-300">ALLPOWERS26</strong>
              </span>
              <button
                type="button"
                onClick={() => copyCoupon("APBF10")}
                className="rounded bg-white/15 px-2.5 py-1 font-semibold text-white hover:bg-white/25"
              >
                {copiedCode === "APBF10" ? "Copied ✓" : "Copy 10%"}
              </button>
            </div>
            <a
              href="/go/allpowers-eu?src=calc"
              target="_blank"
              rel="nofollow sponsored noopener"
              className="block rounded-xl bg-emerald-500 px-4 py-2.5 text-center text-xs font-extrabold text-neutral-950 transition hover:bg-emerald-400"
            >
              🇪🇺🇬🇧 Shop Official EU / Global Store (-10%) →
            </a>
            <a
              href="/go/allpowers-balcony?src=calc"
              target="_blank"
              rel="nofollow sponsored noopener"
              className="block rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-center text-xs font-bold text-white transition hover:bg-white/20"
            >
              🏢 EU Balcony Solar 2.5kWh–5kWh (BS2500/BS5000 PRO) →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
