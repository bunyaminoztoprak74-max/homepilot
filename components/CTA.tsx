import Link from "next/link";
import { EbayButton } from "@/components/EbayButton";

export function CTA({
  title,
  href,
  external = false,
  ebayHref,
  ebayCustomId
}: {
  title: string;
  href: string;
  external?: boolean;
  /** Optional eBay URL. When provided alongside `external`, a second CTA button is rendered. */
  ebayHref?: string;
  ebayCustomId?: string;
}) {
  const className =
    "inline-flex rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700";

  const ebayClassName =
    "inline-flex rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5 hover:border-neutral-950";

  return (
    <section className="rounded-lg bg-neutral-100 p-6">
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">{title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
        Compare current product listings, check availability, and choose the option that fits your home.
      </p>
      {external ? (
        <div className="mt-5 flex flex-wrap gap-3">
          <a className={className} href={href} target="_blank" rel="nofollow sponsored noopener">
            View on Amazon
          </a>
          {ebayHref ? (
            <EbayButton href={ebayHref} customId={ebayCustomId} label="View on eBay" className={ebayClassName} />
          ) : null}
        </div>
      ) : (
        <Link className={`${className} mt-5`} href={href}>
          Continue reading
        </Link>
      )}
    </section>
  );
}
