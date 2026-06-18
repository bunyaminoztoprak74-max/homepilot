import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import categories from "@/data/categories.json";
import guides from "@/data/guides.json";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { AuthorBox } from "@/components/AuthorBox";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/components/CTA";
import { EditorialMeta } from "@/components/EditorialMeta";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { ProductComparisonTable } from "@/components/ProductComparisonTable";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductSchema } from "@/components/ProductSchema";
import { RelatedContent } from "@/components/RelatedContent";
import { TopPicks } from "@/components/TopPicks";
import { articles, getAuthor, getCategory, getGuide, getGuideProducts, products, siteUrl } from "@/lib/content";

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({ category: guide.category, slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const guide = getGuide(category, slug);
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/${guide.category}/${guide.slug}` },
    openGraph: {
      title: `${guide.title} | HomePilot`,
      description: guide.description,
      url: `${siteUrl}/${guide.category}/${guide.slug}`,
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: `${guide.title} | HomePilot`,
      description: guide.description
    }
  };
}

export default async function GuidePage({ params }: Props) {
  const { category: categorySlug, slug } = await params;
  const guide = getGuide(categorySlug, slug);
  const category = getCategory(categorySlug);
  if (!guide || !category) notFound();

  const guideProducts = getGuideProducts(guide);
  const relatedGuides = guides.filter((item) => item.category === category.slug && item.slug !== guide.slug).slice(0, 4);
  const author = getAuthor("homepilot-editorial-team");
  const relatedArticles = articles.filter((item) => item.category === category.slug);
  const relatedProducts = products.filter((item) => item.category === category.slug);
  return (
    <main>
      <ProductSchema products={guideProducts} />
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: guide.title,
            description: guide.description,
            url: `${siteUrl}/${guide.category}/${guide.slug}`,
            publisher: {
              "@type": "Organization",
              name: "HomePilot"
            },
            author: {
              "@type": "Person",
              name: author.name,
              url: `${siteUrl}/authors/${author.slug}`
            },
            reviewedBy: { "@type": "Organization", name: author.reviewedBy },
            datePublished: "2026-06-01",
            dateModified: "2026-06-01",
            mainEntityOfPage: `${siteUrl}/${guide.category}/${guide.slug}`
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: guide.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer }
            }))
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
              { "@type": "ListItem", position: 2, name: category.name, item: `${siteUrl}/${category.slug}` },
              { "@type": "ListItem", position: 3, name: guide.title, item: `${siteUrl}/${guide.category}/${guide.slug}` }
            ]
          }
        ]}
      />
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-4xl px-5 py-10 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: category.name, href: `/${category.slug}` },
              { label: guide.title }
            ]}
          />
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            {category.name}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-neutral-600">{guide.description}</p>
          <EditorialMeta />
          <div className="mt-8">
            <AffiliateDisclosure />
          </div>
          <div className="mt-8">
            <AuthorBox author={author} updatedAt="2026-06-01" />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
        <article className="prose-homepilot space-y-12">
          <nav className="rounded-lg border border-neutral-200 p-5" aria-label="Table of contents">
            <h2 className="font-semibold text-neutral-950">Table of contents</h2>
            <ol className="mt-4 grid gap-2 text-sm text-neutral-600">
              {guide.toc.map((item) => (
                <li key={item}>
                  <a className="hover:text-neutral-950" href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <section id="top-picks">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Top picks</h2>
            <div className="mt-3">
              <AffiliateDisclosure compact />
            </div>
            <div className="mt-5">
              <TopPicks products={guideProducts} />
            </div>
            <ProductGrid products={guideProducts} />
          </section>

          <section id="comparison">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Comparison table</h2>
            <div className="mt-5">
              <AffiliateDisclosure compact />
            </div>
            <div className="mt-5">
              <ProductComparisonTable products={guideProducts} />
            </div>
          </section>

          <section id="how-to-choose" className="grid gap-5">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">How to choose</h2>
            {guide.body.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-neutral-700">
                {paragraph}
              </p>
            ))}
          </section>

          <section className="grid gap-4 md:grid-cols-3">
            <InfoList title="Pros" items={guide.pros} />
            <InfoList title="Cons" items={guide.cons} />
            <InfoList title="Best for" items={guide.bestFor} />
          </section>

          <section id="alternatives">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Alternatives</h2>
            <div className="mt-5 grid gap-3">
              {guide.alternatives.map((item) => (
                <div key={item} className="rounded-lg border border-neutral-200 p-4 text-neutral-700">
                  {item}
                </div>
              ))}
            </div>
          </section>

          {guideProducts[0] ? (
            <CTA
              title="Compare current retailer options"
              href={guideProducts[0].amazonUrl}
              ebayHref={guideProducts[0].ebayUrl}
              ebayCustomId={guideProducts[0].id}
              external
            />
          ) : null}

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Internal links</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <Link className="rounded-lg border border-neutral-200 p-4 text-neutral-700 hover:border-neutral-950" href={`/${category.slug}`}>
                More {category.name.toLowerCase()} guides
              </Link>
              {categories
                .filter((item) => item.slug !== category.slug)
                .slice(0, 1)
                .map((item) => (
                  <Link key={item.slug} className="rounded-lg border border-neutral-200 p-4 text-neutral-700 hover:border-neutral-950" href={`/${item.slug}`}>
                    Browse {item.name.toLowerCase()}
                  </Link>
                ))}
            </div>
          </section>

          <FAQ items={guide.faq} />
          <RelatedContent products={relatedProducts} articles={relatedArticles} guides={relatedGuides} />
        </article>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg border border-neutral-200 p-5">
            <h2 className="font-semibold text-neutral-950">Related guides</h2>
            <div className="mt-4 grid gap-3 text-sm">
              {relatedGuides.map((item) => (
                <Link key={item.slug} className="text-neutral-600 hover:text-neutral-950" href={`/${item.category}/${item.slug}`}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-neutral-200 p-5">
      <h2 className="font-semibold text-neutral-950">{title}</h2>
      <ul className="mt-4 grid gap-2 text-sm leading-6 text-neutral-600">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
