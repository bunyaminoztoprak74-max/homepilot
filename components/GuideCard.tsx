import Link from "next/link";
import type { Guide } from "@/lib/types";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link className="group rounded-lg border border-neutral-200 bg-white p-5 transition hover:border-neutral-950" href={`/${guide.category}/${guide.slug}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
        Buying guide
      </p>
      <h3 className="mt-3 text-xl font-semibold tracking-tight text-neutral-950">{guide.title}</h3>
      <p className="mt-3 text-sm leading-6 text-neutral-600">{guide.description}</p>
      <span className="mt-5 inline-flex text-sm font-semibold text-neutral-950 group-hover:underline">
        Read guide
      </span>
    </Link>
  );
}
