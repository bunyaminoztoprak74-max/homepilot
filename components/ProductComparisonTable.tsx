import type { Product } from "@/lib/types";

export function ProductComparisonTable({ products }: { products: Product[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-[1080px] text-left text-sm">
          <thead className="sticky top-0 z-10 bg-white/95 text-neutral-600 backdrop-blur">
            <tr className="border-b border-neutral-200">
              {["Product", "Best For", "Why We Picked It", "Skip If", "Key Features", "Amazon CTA"].map((heading) => (
                <th key={heading} className="px-4 py-3 font-semibold">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {products.map((product) => (
              <tr key={product.id} className="align-top transition hover:bg-neutral-50">
                <td className="px-4 py-4 font-semibold text-neutral-950">
                  {product.name}
                  <span className="mt-2 block text-xs font-medium text-neutral-500">{product.comparisonBadge}</span>
                </td>
                <td className="px-4 py-4 text-neutral-700">{product.bestFor}</td>
                <td className="px-4 py-4 text-neutral-700">{product.whyPicked}</td>
                <td className="px-4 py-4 text-neutral-700">{product.whoShouldSkip}</td>
                <td className="px-4 py-4 text-neutral-700">{product.features.slice(0, 3).join(", ")}</td>
                <td className="px-4 py-4">
                  <a
                    className="inline-flex whitespace-nowrap rounded-full bg-neutral-950 px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-700"
                    href={product.affiliateUrl}
                    target="_blank"
                    rel="nofollow sponsored noopener"
                  >
                    Check Current Price on Amazon -&gt;
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
