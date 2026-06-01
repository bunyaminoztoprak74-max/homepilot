import type { Product } from "@/lib/types";
import { ProductImage } from "@/components/ProductImage";
import { RetailerButtons } from "@/components/RetailerButtons";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="mt-5 grid gap-4 md:grid-cols-3">
      {products.map((product) => (
        <article
          key={product.id}
          className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
        >
          <ProductImage
            src={product.image}
            alt={product.name}
            className="aspect-[4/3]"
            imageClassName="p-6"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
          <span className="mt-4 inline-flex rounded-full bg-neutral-950 px-3 py-1 text-xs font-semibold text-white">
            {product.comparisonBadge}
          </span>
          <h3 className="mt-4 text-lg font-semibold tracking-tight text-neutral-950">{product.name}</h3>
          <p className="mt-2 text-sm leading-6 text-neutral-600">{product.editorialSummary}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-neutral-700">
            <span className="rounded-full bg-neutral-100 px-3 py-1">Best for: {product.bestFor}</span>
            <span className="rounded-full bg-neutral-100 px-3 py-1">{product.priceText}</span>
          </div>
          <div className="mt-4 grid gap-3 text-sm text-neutral-600">
            <DecisionNote title="Why we picked it" copy={product.whyPicked} />
            <FeatureList title="Pros" items={product.pros} positive />
            <FeatureList title="Cons" items={product.cons} />
          </div>
          <p className="mt-4 text-xs text-neutral-500">
            Prices, ratings, availability, and reviews can change. Confirm details with the retailer before buying.
          </p>
          <div className="mt-5">
            <RetailerButtons product={product} />
          </div>
        </article>
      ))}
    </div>
  );
}

function DecisionNote({ title, copy }: { title: string; copy: string }) {
  return (
    <div>
      <h4 className="font-semibold text-neutral-950">{title}</h4>
      <p className="mt-1 leading-6">{copy}</p>
    </div>
  );
}

function FeatureList({ title, items, positive = false }: { title: string; items: string[]; positive?: boolean }) {
  return (
    <div>
      <h4 className="font-semibold text-neutral-950">{title}</h4>
      <ul className="mt-2 grid gap-1">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-neutral-400">{positive ? "+" : "-"}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
