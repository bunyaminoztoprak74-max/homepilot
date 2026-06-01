import Link from "next/link";
import type { Metadata } from "next";
import { articles, categories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Home Product Blog | HomePilot",
  description: "Practical robot vacuum, air fryer, and espresso machine buying advice from HomePilot.",
  alternates: { canonical: "/blog" }
};

export default function BlogPage() {
  const categoryNames = new Map(categories.map((category) => [category.slug, category.name]));

  return (
    <main className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">Blog</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
        Practical home product advice
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
        Maintenance guides, comparison explainers, and buying advice for robot vacuums, air fryers, and espresso machines.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {articles
          .slice()
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                {categoryNames.get(article.category)}
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-neutral-950">{article.title}</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{article.description}</p>
              <span className="mt-5 inline-flex text-sm font-semibold text-neutral-950">Read article</span>
            </Link>
          ))}
      </div>
    </main>
  );
}
