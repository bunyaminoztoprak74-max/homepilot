import Link from "next/link";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { ProductComparisonTable } from "@/components/ProductComparisonTable";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductSchema } from "@/components/ProductSchema";
import { RelatedContent } from "@/components/RelatedContent";
import { TopPicks } from "@/components/TopPicks";
import { articles, guides, products } from "@/lib/content";

export function ComparisonHub({
  category,
  title,
  description
}: {
  category: string;
  title: string;
  description: string;
}) {
  const categoryProducts = products.filter((product) => product.category === category);
  const categoryArticles = articles.filter((article) => article.category === category);
  const categoryGuides = guides.filter((guide) => guide.category === category);

  return (
    <main>
      <ProductSchema products={categoryProducts} />
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">Comparison hub</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600">{description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={`/${category}`} className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-950 hover:border-neutral-950">
              Read category guide
            </Link>
            <Link href="/editorial-process" className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-950 hover:border-neutral-950">
              Editorial process
            </Link>
          </div>
        </div>
      </section>
      <article className="mx-auto max-w-7xl space-y-12 px-5 py-12 sm:px-6 lg:px-8">
        <AffiliateDisclosure />
        <TopPicks products={categoryProducts} />
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Full comparison table</h2>
          <div className="mt-5">
            <ProductComparisonTable products={categoryProducts} />
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Recommended products</h2>
          <ProductGrid products={categoryProducts} />
        </section>
        <RelatedContent products={categoryProducts} articles={categoryArticles} guides={categoryGuides} />
      </article>
    </main>
  );
}
