import Link from "next/link";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { ProductComparisonTable } from "@/components/ProductComparisonTable";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductSchema } from "@/components/ProductSchema";
import type { Product, SeoPage } from "@/lib/types";

export function SeoIntentPage({ page, products }: { page: SeoPage; products: Product[] }) {
  return (
    <main>
      <ProductSchema products={products} />
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
          <nav className="text-sm text-neutral-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-neutral-950">Home</Link>
            <span className="mx-2">/</span>
            <span>{page.title}</span>
          </nav>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">Buying guide</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
            {page.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600">{page.description}</p>
        </div>
      </section>
      <article className="mx-auto max-w-7xl space-y-12 px-5 py-12 sm:px-6 lg:px-8">
        <AffiliateDisclosure />
        <section className="grid gap-4 md:grid-cols-3">
          {page.sections.map((section) => (
            <div key={section} className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
              <p className="text-sm leading-7 text-neutral-700">{section}</p>
            </div>
          ))}
        </section>
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Quick comparison</h2>
          <div className="mt-5">
            <ProductComparisonTable products={products} />
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Recommended products</h2>
          <ProductGrid products={products} />
        </section>
      </article>
    </main>
  );
}
