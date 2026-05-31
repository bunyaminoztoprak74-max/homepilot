import Link from "next/link";
import categories from "@/data/categories.json";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-6 md:grid-cols-[1fr_2fr] lg:px-8">
        <div>
          <Link className="text-lg font-semibold tracking-tight" href="/">
            HomePilot
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-300">
            Find Better Home Products. Transparent affiliate guides for practical home upgrades.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {categories.map((category) => (
            <div key={category.slug}>
              <h2 className="text-sm font-semibold">{category.name}</h2>
              <Link className="mt-3 block text-sm text-neutral-300 hover:text-white" href={`/${category.slug}`}>
                Buying guides
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-neutral-400">
        HomePilot uses placeholder Amazon affiliate links. Replace YOURTAG-20 before publishing.
      </div>
    </footer>
  );
}
