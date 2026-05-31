import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import categories from "@/data/categories.json";
import comparisons from "@/data/comparisons.json";
import guides from "@/data/guides.json";
import products from "@/data/products.json";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQ } from "@/components/FAQ";
import { GuideCard } from "@/components/GuideCard";
import { JsonLd } from "@/components/JsonLd";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductSchema } from "@/components/ProductSchema";
import { getCategory, siteUrl } from "@/lib/content";

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  return {
    title: `${category.name} Buying Guides`,
    description: category.description,
    alternates: { canonical: `/${category.slug}` },
    openGraph: {
      title: `${category.name} Buying Guides | HomePilot`,
      description: category.description,
      url: `${siteUrl}/${category.slug}`,
      type: "website"
    }
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const categoryGuides = guides.filter((guide) => guide.category === category.slug);
  const categoryProducts = products.filter((product) => product.category === category.slug);
  const comparison = comparisons.find((item) => item.category === category.slug);

  return (
    <main>
      <ProductSchema products={categoryProducts} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${category.name} Buying Guides`,
          description: category.description,
          url: `${siteUrl}/${category.slug}`
        }}
      />
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: category.name }]} />
          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              {category.name}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
              {category.headline}
            </h1>
            <p className="mt-5 text-lg leading-8 text-neutral-600">{category.intro}</p>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
        <article className="space-y-12">
          <AffiliateDisclosure />
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Comparison table</h2>
            <div className="mt-5">
              <ComparisonTable rows={comparison?.rows ?? []} />
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Featured products</h2>
            <ProductGrid products={categoryProducts} />
          </section>
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Buying guide</h2>
            <div className="mt-5 grid gap-3">
              {category.buyingGuide.map((item) => (
                <div key={item} className="rounded-lg border border-neutral-200 p-4 text-neutral-700">
                  {item}
                </div>
              ))}
            </div>
          </section>
          <CTA title={`Compare more ${category.name.toLowerCase()}`} href={`/${category.slug}/${categoryGuides[0]?.slug ?? ""}`} />
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Latest {category.name.toLowerCase()} guides</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {categoryGuides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </section>
          <FAQ items={category.faq} />
        </article>
        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg border border-neutral-200 p-5">
            <h2 className="font-semibold text-neutral-950">Internal links</h2>
            <div className="mt-4 grid gap-3 text-sm">
              {categories
                .filter((item) => item.slug !== category.slug)
                .map((item) => (
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
