import { buildEbayAffiliateUrl } from "@/lib/ebay-config";

type EbayButtonProps = {
  /** Plain ebay.com URL (search results or item page). */
  href: string;
  /** Optional per-placement id (e.g. product id) for EPN click reporting. */
  customId?: string;
  /** Button label. Defaults to a CRO-friendly CTA. */
  label?: string;
  /** "primary" = solid dark button, "secondary" = outlined button. */
  variant?: "primary" | "secondary";
  /** Override the default classes entirely. */
  className?: string;
};

const PRIMARY_CLASSES =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full bg-neutral-950 px-4 py-2.5 text-center text-[11px] font-semibold leading-tight text-white transition hover:-translate-y-0.5 hover:bg-neutral-700 sm:px-4 sm:text-xs";

const SECONDARY_CLASSES =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full border border-neutral-300 bg-white px-4 py-2.5 text-center text-[11px] font-semibold leading-tight text-neutral-950 transition hover:-translate-y-0.5 hover:border-neutral-950 sm:px-4 sm:text-xs";

/**
 * Reusable eBay Partner Network affiliate link/button.
 *
 * Wraps every outbound eBay link with EPN tracking parameters via
 * `buildEbayAffiliateUrl`, so Campaign ID changes only need to happen in
 * `lib/ebay-config.ts`.
 */
export function EbayButton({ href, customId, label = "Check Price on eBay", variant = "secondary", className }: EbayButtonProps) {
  const trackedHref = buildEbayAffiliateUrl(href, customId);
  const classes = className ?? (variant === "primary" ? PRIMARY_CLASSES : SECONDARY_CLASSES);

  return (
    <a className={classes} href={trackedHref} target="_blank" rel="nofollow sponsored noopener" data-affiliate="ebay">
      {label}
    </a>
  );
}
