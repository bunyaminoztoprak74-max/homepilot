import Image from "next/image";
import type { Product } from "@/lib/types";
import { getAffiliateUrl } from "@/lib/content";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="mt-5 grid gap-4 md:grid-cols-3">
      {products.map((product) => (
        <article key={product.id} className="rounded-lg border border-neutral-200 bg-white p-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100">
            <Image src={product.image} alt="" fill className="object-contain p-6" sizes="(min-width: 768px) 33vw, 100vw" />
          </div>
          <h3 className="mt-4 text-lg font-semibold tracking-tight text-neutral-950">{product.name}</h3>
          <p className="mt-2 text-sm leading-6 text-neutral-600">{product.bestFor}</p>
          <ul className="mt-4 grid gap-2 text-sm text-neutral-600">
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
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
