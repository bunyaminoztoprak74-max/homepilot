import type { Product } from "@/lib/types";
import { EbayButton } from "@/components/EbayButton";

const AMAZON_CLASSES =
  "inline-flex items-center justify-center rounded-full bg-neutral-950 px-2 py-2.5 text-center text-[11px] font-semibold leading-tight text-white transition hover:-translate-y-0.5 hover:bg-neutral-700 sm:px-4 sm:text-xs";

const EBAY_CLASSES =
  "inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-2 py-2.5 text-center text-[11px] font-semibold leading-tight text-neutral-950 transition hover:-translate-y-0.5 hover:border-neutral-950 sm:px-4 sm:text-xs";

export function RetailerButtons({ product, compact = false }: { product: Product; compact?: boolean }) {
  return (
    <div className={compact ? "min-w-[220px]" : undefined}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
        Compare prices across retailers
      </p>
      <div className={compact ? "grid gap-2" : "grid grid-cols-2 gap-2"}>
        <a
          className={AMAZON_CLASSES}
          href={product.amazonUrl}
          target="_blank"
          rel="nofollow sponsored noopener"
        >
          Check Amazon Price
        </a>
        <EbayButton href={product.ebayUrl} customId={product.id} label="Check eBay Price" className={EBAY_CLASSES} />
      </div>
      <p className="mt-2 text-[11px] leading-5 text-neutral-500">
        eBay listings can include new, open-box, and refurbished options that are sometimes cheaper than Amazon.
      </p>
    </div>
  );
}
