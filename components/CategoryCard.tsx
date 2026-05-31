import Link from "next/link";
import type { Category } from "@/lib/types";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link className="group rounded-lg border border-neutral-200 bg-white p-6 transition hover:border-neutral-950" href={`/${category.slug}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">{category.name}</p>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-950">{category.headline}</h3>
      <p className="mt-4 text-sm leading-6 text-neutral-600">{category.description}</p>
      <span className="mt-6 inline-flex text-sm font-semibold text-neutral-950 group-hover:underline">
        View guides
      </span>
    </Link>
  );
}
