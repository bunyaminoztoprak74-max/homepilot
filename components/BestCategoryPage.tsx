import type { Metadata } from "next";
import Link from "next/link";
import categories from "@/data/categories.json";
import guides from "@/data/guides.json";
import products from "@/data/products.json";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductSchema } from "@/components/ProductSchema";
import { getCategory, siteUrl } from "@/lib/content";
import type { Category, Guide, Product } from "@/lib/types";

type BestCategoryConfig = {
  categorySlug: string;
  title: string;
  description: string;
  path: string;
};

export function bestCategoryMetadata(config: BestCategoryConfig): Metadata {
  return {
    title: config.title,
    description: config.description,
    alternates: { canonical: config.path },
    openGraph: {
      title: `${config.title} | HomePilot`,
      description: config.description,
      url: `${siteUrl}${config.path}`,
      type: "article"
    }
  };
}

export function BestCategoryPage({ config }: { config: BestCategoryConfig }) {
  const category = getCategory(config.categorySlug) as Category;
  const categoryProducts = products.filter((product) => product.category === config.categorySlug) as Product[];
  const categoryGuides = guides.filter((guide) => guide.category === config.categorySlug) as Guide[];
  const rows = categoryProducts.map((product) => [
    product.name,
    product.comparisonBadge,
    product.rating ? `${product.rating.toFixed(1)} stars` : "Check Amazon",
    product.price ?? "Check Amazon"
  ]);

  return (
    <main>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
              { "@type": "ListItem", position: 2, name: category.name, item: `${siteUrl}/${category.slug}` },
              { "@type": "ListItem", position: 3, name: config.title, item: `${siteUrl}${config.path}` }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: category.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer }
            }))
          }
        ]}
      />
      <ProductSchema products={categoryProducts} />
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: category.name, href: `/${category.slug}` }, { label: config.title }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">Editor picks</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
              {config.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-neutral-600">{config.description}</p>
          </div>
        </div>
      </section>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
        <article className="space-y-12">
          <AffiliateDisclosure />
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Quick comparison</h2>
            <div className="mt-5">
              <ComparisonTable rows={rows} />
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Best picks</h2>
            <ProductGrid products={categoryProducts} />
          </section>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">How we compare</h2>
            <div className="mt-5 grid gap-3">
              {category.buyingGuide.map((item) => (
                <div key={item} className="rounded-lg border border-neutral-200 p-4 text-neutral-700">
                  {item}
                </div>
              ))}
            </div>
          </section>
          <FAQ items={category.faq} />
        </article>
        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg border border-neutral-200 p-5">
            <h2 className="font-semibold text-neutral-950">Related guides</h2>
            <div className="mt-4 grid gap-3 text-sm">
              {categoryGuides.slice(0, 5).map((guide) => (
                <Link key={guide.slug} className="text-neutral-600 hover:text-neutral-950" href={`/${guide.category}/${guide.slug}`}>
                  {guide.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-neutral-200 p-5">
            <h2 className="font-semibold text-neutral-950">Browse categories</h2>
            <div className="mt-4 grid gap-3 text-sm">
              {categories.map((item) => (
                <Link key={item.slug} className="text-neutral-600 hover:text-neutral-950" href={`/${item.slug}`}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
