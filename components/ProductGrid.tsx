import Image from "next/image";
import type { Product } from "@/lib/types";
import { getAffiliateUrl } from "@/lib/content";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="mt-5 grid gap-4 md:grid-cols-3">
      {products.map((product) => (
        <article key={product.id} className="rounded-lg border border-neutral-200 bg-white p-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100">
            <Image src={product.image} alt={product.name} fill className="object-contain p-6" sizes="(min-width: 768px) 33vw, 100vw" />
          </div>
          <span className="mt-4 inline-flex rounded-full bg-neutral-950 px-3 py-1 text-xs font-semibold text-white">
            {product.comparisonBadge}
          </span>
          <h3 className="mt-4 text-lg font-semibold tracking-tight text-neutral-950">{product.name}</h3>
          <p className="mt-2 text-sm leading-6 text-neutral-600">{product.bestFor}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-neutral-700">
            <span className="rounded-full bg-neutral-100 px-3 py-1">
              {product.price ?? "Check Amazon"}
            </span>
            <span className="rounded-full bg-neutral-100 px-3 py-1">
              {product.rating ? `${product.rating.toFixed(1)} stars` : "Rating varies"}
            </span>
            <span className="rounded-full bg-neutral-100 px-3 py-1">
              {product.reviewCount ? `${product.reviewCount.toLocaleString()} reviews` : "Review count varies"}
            </span>
          </div>
          <div className="mt-4 grid gap-4 text-sm text-neutral-600">
            <FeatureList title="Pros" items={product.pros.slice(0, 3)} />
            <FeatureList title="Cons" items={product.cons.slice(0, 3)} />
          </div>
          <p className="mt-4 text-xs text-neutral-500">Amazon data last checked {product.lastChecked}.</p>
          <a
            className="mt-5 inline-flex w-full justify-center rounded-full bg-neutral-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-700"
            href={getAffiliateUrl(product.asin)}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
          >
            Check current price
          </a>
        </article>
      ))}
    </div>
  );
}

function FeatureList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-semibold text-neutral-950">{title}</h4>
      <ul className="mt-2 grid gap-1">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
