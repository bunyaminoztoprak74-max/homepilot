import Link from "next/link";
import categories from "@/data/categories.json";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link className="text-lg font-semibold tracking-tight text-neutral-950" href="/">
          HomePilot
        </Link>
        <p className="hidden text-xs font-medium text-neutral-500 lg:block">
          Expert buying guides for home products.
        </p>
        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-600 md:flex" aria-label="Main navigation">
          {categories.map((category) => (
            <Link key={category.slug} className="transition hover:text-neutral-950" href={`/${category.slug}`}>
              {category.name}
            </Link>
          ))}
          <Link className="font-semibold text-emerald-700 transition hover:text-emerald-900" href="/power-calculator">
            ⚡ Outage Calculator
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link className="rounded-full bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white transition hover:bg-emerald-500 md:hidden" href="/power-calculator">
            ⚡ Calculator
          </Link>
          <Link className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5 hover:border-neutral-950" href="/power-calculator">
            ⚡ 72h Backup Tool
          </Link>
        </div>
      </div>
    </header>
  );
}
