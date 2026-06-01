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
            Expert buying guides for home products. Transparent Amazon Associates recommendations for practical home upgrades.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-4">
          {categories.map((category) => (
            <div key={category.slug}>
              <h2 className="text-sm font-semibold">{category.name}</h2>
              <Link className="mt-3 block text-sm text-neutral-300 hover:text-white" href={`/${category.slug}`}>
                Buying guides
              </Link>
              <Link className="mt-2 block text-sm text-neutral-300 hover:text-white" href={`/best-${category.slug}`}>
                Best picks
              </Link>
              <Link className="mt-2 block text-sm text-neutral-300 hover:text-white" href={`/comparisons/${category.slug}`}>
                Comparison hub
              </Link>
            </div>
          ))}
          <div>
            <h2 className="text-sm font-semibold">Company</h2>
            {[
              ["About", "/about"],
              ["Authors", "/authors"],
              ["Blog", "/blog"],
              ["Contact", "/contact"],
              ["Affiliate Disclosure", "/affiliate-disclosure"],
              ["Editorial Process", "/editorial-process"],
              ["How We Test", "/how-we-test"],
              ["Privacy Policy", "/privacy-policy"],
              ["Terms", "/terms"]
            ].map(([label, href]) => (
              <Link key={href} className="mt-2 block text-sm text-neutral-300 hover:text-white" href={href}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-neutral-400">
        HomePilot uses Amazon Associates affiliate links with transparent disclosure.
      </div>
    </footer>
  );
}
