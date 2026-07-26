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
