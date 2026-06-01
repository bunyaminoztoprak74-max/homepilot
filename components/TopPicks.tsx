import type { Product } from "@/lib/types";
import { RetailerButtons } from "@/components/RetailerButtons";

const labels = ["Best Overall", "Best Budget", "Best Premium", "Best for Beginners"];

export function TopPicks({ products }: { products: Product[] }) {
  const picks = products.slice(0, 4);
  if (!picks.length) return null;

  return (
    <section className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">Top Picks</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950">Fast shortlist by buying need</h2>
        </div>
        <p className="text-sm text-neutral-500">Compare prices across retailers</p>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {picks.map((product, index) => (
          <article key={`${labels[index]}-${product.id}`} className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <span className="inline-flex rounded-full bg-neutral-950 px-3 py-1 text-xs font-semibold text-white">
              {labels[index]}
            </span>
            <h3 className="mt-3 font-semibold text-neutral-950">{product.name}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-600">{product.bestFor}</p>
            <div className="mt-4">
              <RetailerButtons product={product} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
