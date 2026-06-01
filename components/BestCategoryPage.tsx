import type { Metadata } from "next";
import Link from "next/link";
import categories from "@/data/categories.json";
import guides from "@/data/guides.json";
import products from "@/data/products.json";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EditorialMeta } from "@/components/EditorialMeta";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { ProductComparisonTable } from "@/components/ProductComparisonTable";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductSchema } from "@/components/ProductSchema";
import { RelatedContent } from "@/components/RelatedContent";
import { TopPicks } from "@/components/TopPicks";
import { articles, getCategory, siteUrl } from "@/lib/content";
import type { Category, Guide, Product } from "@/lib/types";

type BestCategoryConfig = {
  categorySlug: string;
  title: string;
  description: string;
  path: string;
};

const comparisonNotes: Record<string, { title: string; paragraphs: string[] }[]> = {
  "robot-vacuums": [
    {
      title: "How to read this comparison",
      paragraphs: [
        "Robot vacuum comparisons are most useful when they separate cleaning quality from convenience. A self-empty dock can be a major quality-of-life upgrade, but it does not automatically make the robot better at navigating chair legs, thresholds, cords, or rugs. Mapping quality, brush design, replacement parts, and dock footprint all matter.",
        "We prioritize products that fit clear household scenarios: pet hair maintenance, mapping control, lower-cost ownership, or dock automation. The goal is not to declare one permanent winner for every home, but to help readers choose the tradeoff they can live with."
      ]
    },
    {
      title: "Editorial recommendation",
      paragraphs: [
        "Most buyers should start with mapping and maintenance. If the home has pets, a self-empty dock becomes more valuable because hair fills bins quickly. If the home is small and open, a slimmer budget model may be enough. If mopping matters, treat hybrid robots as light-maintenance tools rather than scrubbers.",
        "The best conversion path is honest: choose the robot that solves your largest recurring annoyance, then confirm current Amazon pricing, availability, and seller details before purchase."
      ]
    }
  ],
  "air-fryers": [
    {
      title: "How to read this comparison",
      paragraphs: [
        "Air fryer comparisons should focus on usable cooking area, counter fit, cleanup, and workflow. Advertised quart size can be misleading because a wide square basket may cook more evenly than a deeper round basket with the same listed capacity.",
        "We group products by kitchen situation: compact models for small spaces, larger single baskets for families, dual-zone models for mains and sides, and viewing-window models for cooks who want to monitor browning."
      ]
    },
    {
      title: "Editorial recommendation",
      paragraphs: [
        "Most households should choose the simplest air fryer that fits their normal portions. Dual baskets are excellent for timing two foods, but they are wide. Compact baskets are easier to store and clean, but they require batch cooking. The right pick is the one that will stay convenient after the first week.",
        "Before buying, check the current Amazon listing for dimensions, return policy, basket coating details, and whether replacement parts are available."
      ]
    }
  ],
  "espresso-machines": [
    {
      title: "How to read this comparison",
      paragraphs: [
        "Espresso comparisons are really workflow comparisons. A compact semi-automatic machine, an all-in-one grinder machine, a standalone grinder, and a superautomatic system solve different problems. The best product depends on whether the buyer wants to learn a craft or simplify a morning routine.",
        "We compare products by learning curve, grinder needs, milk-drink workflow, counter footprint, and upgrade path. Static prices and ratings are intentionally excluded because they change and should be checked directly on Amazon."
      ]
    },
    {
      title: "Editorial recommendation",
      paragraphs: [
        "Beginners who want traditional espresso should prioritize a forgiving machine and a capable grinder. Milk-drink households should pay close attention to steaming workflow. Convenience-first buyers should compare assisted or superautomatic systems even if they give up some control.",
        "A machine that is easy to use, clean, and repeat every morning usually beats a more advanced machine that feels like work."
      ]
    }
  ]
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
    },
    twitter: {
      card: "summary_large_image",
      title: `${config.title} | HomePilot`,
      description: config.description
    }
  };
}

export function BestCategoryPage({ config }: { config: BestCategoryConfig }) {
  const category = getCategory(config.categorySlug) as Category;
  const categoryProducts = products.filter((product) => product.category === config.categorySlug) as Product[];
  const categoryGuides = guides.filter((guide) => guide.category === config.categorySlug) as Guide[];
  const categoryArticles = articles.filter((article) => article.category === config.categorySlug);

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
            "@type": "Article",
            headline: config.title,
            description: config.description,
            url: `${siteUrl}${config.path}`,
            publisher: {
              "@type": "Organization",
              name: "HomePilot"
            },
            author: {
              "@type": "Organization",
              name: "HomePilot Editorial Team"
            },
            datePublished: "2026-06-01",
            dateModified: "2026-06-01",
            mainEntityOfPage: `${siteUrl}${config.path}`
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
            <EditorialMeta note="A focused comparison page for this category. Product pricing, ratings, and seller details should be confirmed on Amazon." />
          </div>
        </div>
      </section>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
        <article className="space-y-12">
          <AffiliateDisclosure />
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Quick comparison</h2>
            <div className="mt-5">
              <AffiliateDisclosure compact />
            </div>
            <div className="mt-5">
              <ProductComparisonTable products={categoryProducts} />
            </div>
          </section>
          <TopPicks products={categoryProducts} />
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Best picks</h2>
            <div className="mt-3">
              <AffiliateDisclosure compact />
            </div>
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
          <section className="space-y-5">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Original comparison notes</h2>
            {(comparisonNotes[category.slug] ?? []).map((section) => (
              <div key={section.title} className="rounded-lg border border-neutral-200 bg-white p-5">
                <h3 className="font-semibold text-neutral-950">{section.title}</h3>
                <div className="mt-3 space-y-3 text-sm leading-6 text-neutral-600">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </section>
          <FAQ items={category.faq} />
          <RelatedContent products={categoryProducts} articles={categoryArticles} guides={categoryGuides} />
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
