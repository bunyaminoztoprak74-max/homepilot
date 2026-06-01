import type { Product } from "@/lib/types";

type Retailer = {
  label: string;
  href: string;
};

export function RetailerButtons({ product, compact = false }: { product: Product; compact?: boolean }) {
  const retailers: Retailer[] = [
    { label: "Check Amazon Price", href: product.amazonUrl },
    { label: "Check eBay Price", href: product.ebayUrl },
    { label: "Check Walmart Price", href: product.walmartUrl }
  ];

  return (
    <div className={compact ? "min-w-[220px]" : undefined}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
        Compare prices across retailers
      </p>
      <div className={compact ? "grid gap-2" : "grid grid-cols-3 gap-2"}>
        {retailers.map((retailer, index) => (
          <a
            key={retailer.label}
            className={
              index === 0
                ? "inline-flex items-center justify-center rounded-full bg-neutral-950 px-2 py-2.5 text-center text-[11px] font-semibold leading-tight text-white transition hover:-translate-y-0.5 hover:bg-neutral-700 sm:px-4 sm:text-xs"
                : "inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-2 py-2.5 text-center text-[11px] font-semibold leading-tight text-neutral-950 transition hover:-translate-y-0.5 hover:border-neutral-950 sm:px-4 sm:text-xs"
            }
            href={retailer.href}
            target="_blank"
            rel="nofollow sponsored noopener"
          >
            {retailer.label}
          </a>
        ))}
      </div>
    </div>
  );
}
