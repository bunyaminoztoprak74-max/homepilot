export function ComparisonTable({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-neutral-100 text-neutral-600">
            <tr>
              {["Product", "Best for", "Key features", "Why consider it"].map((heading) => (
                <th key={heading} className="px-4 py-3 font-semibold">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {rows.map((row) => (
              <tr key={row.join("-")} className="align-top">
                {row.map((cell) => (
                  <td key={cell} className="px-4 py-4 text-neutral-700">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
