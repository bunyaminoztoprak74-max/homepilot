import Link from "next/link";

export function CTA({
  title,
  href,
  external = false
}: {
  title: string;
  href: string;
  external?: boolean;
}) {
  const className =
    "inline-flex rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700";

  return (
    <section className="rounded-lg bg-neutral-100 p-6">
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">{title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
        Compare current product listings, check availability, and choose the option that fits your home.
      </p>
      {external ? (
        <a className={`${className} mt-5`} href={href} target="_blank" rel="nofollow sponsored noopener">
          View on Amazon
        </a>
      ) : (
        <Link className={`${className} mt-5`} href={href}>
          Continue reading
        </Link>
      )}
    </section>
  );
}
