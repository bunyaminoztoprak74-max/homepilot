import type { Product } from "@/lib/types";
import { RetailerButtons } from "@/components/RetailerButtons";

export function ProductComparisonTable({ products }: { products: Product[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-[1080px] text-left text-sm">
          <thead className="sticky top-0 z-10 bg-white/95 text-neutral-600 backdrop-blur">
            <tr className="border-b border-neutral-200">
              {["Product", "Best For", "Why We Picked It", "Skip If", "Key Features", "Retailer CTAs"].map((heading) => (
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
                  <RetailerButtons product={product} compact />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
