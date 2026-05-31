import Link from "next/link";
import categories from "@/data/categories.json";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link className="text-lg font-semibold tracking-tight text-neutral-950" href="/">
          HomePilot
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-600 md:flex" aria-label="Main navigation">
          {categories.map((category) => (
            <Link key={category.slug} className="transition hover:text-neutral-950" href={`/${category.slug}`}>
              {category.name}
            </Link>
          ))}
        </nav>
        <Link className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:border-neutral-950" href="/best-air-fryers">
          Compare
        </Link>
      </div>
    </header>
  );
}
