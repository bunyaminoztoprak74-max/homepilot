const insights: Record<string, { title: string; headers: string[]; rows: string[][] }> = {
  "how-often-should-you-run-a-robot-vacuum": {
    title: "Starting schedule by household",
    headers: ["Household", "Starting frequency", "Adjustment signal"],
    rows: [
      ["Low traffic, no pets", "2 times weekly", "Increase if grit remains"],
      ["Average household", "3–5 times weekly", "Use bin fullness as the guide"],
      ["Pets or allergies", "Daily", "Add targeted passes during shedding"]
    ]
  },
  "robot-vacuum-side-brush-problems-and-fixes": {
    title: "Side-brush diagnosis",
    headers: ["Symptom", "Likely cause", "Safe first check"],
    rows: [
      ["Does not spin", "Hair under hub or motor fault", "Power off and remove the brush"],
      ["Spins slowly", "Drag, bent bristles, or debris", "Clean the axle and inspect shape"],
      ["Keeps falling off", "Loose fastener or cracked hub", "Check the correct screw and socket"]
    ]
  },
  "beginner-espresso-setup": {
    title: "Beginner setup priorities",
    headers: ["Item", "Why it matters", "Buy first?"],
    rows: [
      ["Espresso grinder", "Controls flow and repeatability", "Yes"],
      ["0.1 g scale", "Makes dose and yield measurable", "Yes"],
      ["Distribution tools", "Can refine an established workflow", "Later"]
    ]
  },
  "air-fryer-for-family-meals": {
    title: "Family air fryer decision",
    headers: ["Need", "Better fit", "Tradeoff"],
    rows: [
      ["One shared main dish", "Wide single basket", "One temperature zone"],
      ["Two foods together", "Dual basket", "More width and cleaning"],
      ["Limited counter space", "Compact basket model", "More batches"]
    ]
  },
  "robot-vacuum-maintenance-costs-explained": {
    title: "Ownership cost checklist",
    headers: ["Consumable", "Typical planning cycle", "Pet-home effect"],
    rows: [
      ["Filter", "Several per year", "Usually replaced more often"],
      ["Side and main brushes", "Inspect monthly", "Hair increases wear"],
      ["Dock bags", "Based on actual fill rate", "More debris fills bags faster"]
    ]
  },
  "72-hour-blackout-battery-calculator-guide": {
    title: "72-Hour Emergency Readiness Sizing Matrix (US 120V & EU 230V)",
    headers: ["Scenario", "True 72h Energy Needed", "Recommended Tier", "Solar Recharge Pair"],
    rows: [
      ["24h Overnight Fridge + Wi-Fi", "1,650–2,050 Wh", "2kWh Class (Elite 200 V2)", "Optional 200W"],
      ["72h Apartment / Flat (No Gas)", "5,400–6,200 Wh", "2kWh–3kWh + 200W–400W Balcony Solar", "200W–400W Folding / Balcony"],
      ["72h Family Home + Sump / Boiler", "6,800–9,500 Wh", "Expandable 2.7kWh–5.5kWh (Apex 300 + B300K)", "400W–800W Solar Array"]
    ]
  },
  "what-size-power-station-to-run-a-refrigerator": {
    title: "Real Refrigerator Runtime After Inverter Idle Loss (65W Avg Duty Cycle)",
    headers: ["Battery Class", "Rated Capacity", "Usable Wh (85%)", "Real Fridge Runtime"],
    rows: [
      ["1kWh Entry (Elite 100 V2)", "1,024 Wh", "~870 Wh", "11–12.5 Hours"],
      ["2kWh Sweet Spot (Elite 200 V2)", "2,073 Wh", "~1,762 Wh", "22.5–25 Hours"],
      ["3kWh Single-Box (Elite 300)", "3,014 Wh", "~2,562 Wh", "32–36 Hours"],
      ["5.5kWh Modular (Apex 300 + B300K)", "5,530 Wh", "~4,700 Wh", "56–64+ Hours"]
    ]
  },
  "bluetti-elite-200-v2-vs-ac200l-comparison": {
    title: "BLUETTI Elite 200 V2 vs AC200L Engineering Comparison",
    headers: ["Specification", "BLUETTI Elite 200 V2", "BLUETTI AC200L", "Outage Impact"],
    rows: [
      ["Rated Capacity", "2,073.6 Wh LiFePO4", "2,048 Wh LiFePO4", "Near-identical base storage"],
      ["AC Inverter Idle Draw", "~10W–12W ultra-low tare", "~22W–26W higher tare", "Elite 200 V2 runs ~3.5h longer on fridge"],
      ["Battery Expandability", "Standalone compact box", "Expandable up to 8,192 Wh", "AC200L wins if adding B300K later"],
      ["Cycle Life (to 80%)", "6,000+ cycles", "3,000+ cycles", "Elite 200 V2 uses automotive-grade cells"]
    ]
  },
  "bluetti-apex-300-vs-elite-300-home-backup-guide": {
    title: "BLUETTI Apex 300 vs Elite 300 Decision Table",
    headers: ["Requirement", "BLUETTI Elite 300 (3,014Wh)", "BLUETTI Apex 300 (2,765Wh–16.5kWh)"],
    rows: [
      ["Single-box plug-and-play simplicity", "Winner — maximum Wh in one compact chassis", "Heavier inverter chassis built for expansion"],
      ["120V/240V Split-Phase & Well Pumps", "120V standard circuits only (2,400W)", "Winner — 3,840W continuous + 240V split-phase"],
      ["Manual Transfer Switch Integration", "Extension cords / 120V inlet", "Winner — native high-amp home panel backup"],
      ["Multi-Day 72h Scaling", "Fixed 3kWh + solar recharge", "Scales modularly with B300K expansion packs"]
    ]
  }
};

export function ArticleInsightTable({ slug }: { slug: string }) {
  const insight = insights[slug];
  if (!insight) return null;

  return (
    <section className="overflow-hidden rounded-lg border border-neutral-200 bg-white" aria-labelledby={`${slug}-insight`}>
      <h2 id={`${slug}-insight`} className="px-5 pt-5 text-2xl font-semibold tracking-tight text-neutral-950">
        {insight.title}
      </h2>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-y border-neutral-200 bg-neutral-50 text-neutral-700">
            <tr>{insight.headers.map((header) => <th key={header} className="px-5 py-3 font-semibold">{header}</th>)}</tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {insight.rows.map((row) => (
              <tr key={row.join("|")}>{row.map((cell) => <td key={cell} className="px-5 py-3 align-top">{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
