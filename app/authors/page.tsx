import Link from "next/link";
import type { Metadata } from "next";
import { authors } from "@/lib/content";

export const metadata: Metadata = {
  title: "HomePilot Authors",
  description: "Meet the editors behind HomePilot buying guides and home product comparisons.",
  alternates: { canonical: "/authors" }
};

export default function AuthorsPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-14 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">Editorial team</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950">HomePilot Authors</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-600">
        Our author profiles explain who researches, writes, and reviews HomePilot buying guides.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {authors.map((author) => (
          <Link key={author.slug} href={`/authors/${author.slug}`} className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h2 className="font-semibold text-neutral-950">{author.name}</h2>
            <p className="mt-2 text-sm text-neutral-600">{author.role}</p>
            <p className="mt-4 text-sm leading-6 text-neutral-600">{author.bio}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
