import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import categories from "@/data/categories.json";
import guides from "@/data/guides.json";
import articles from "@/data/articles.json";
import { CategoryCard } from "@/components/CategoryCard";
import { FAQ } from "@/components/FAQ";
import { GuideCard } from "@/components/GuideCard";
import { JsonLd } from "@/components/JsonLd";
import { Newsletter } from "@/components/Newsletter";
import { ProductComparisonTable } from "@/components/ProductComparisonTable";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductSchema } from "@/components/ProductSchema";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { products } from "@/lib/content";
import type { Product } from "@/lib/types";

const featuredGuides = guides.slice(0, 6);
const featuredArticles = articles.slice(0, 6);
const editorPicks = [
  products.find((product) => product.id === "cosori-turboblaze-6qt"),
  products.find((product) => product.id === "shark-av2511ae"),
  products.find((product) => product.id === "breville-bambino")
].filter((product): product is Product => Boolean(product));
const homeFaq = [
  {
    question: "Does HomePilot show live prices?",
    answer: "No. HomePilot avoids static Amazon prices and sends readers to Amazon to confirm current pricing, availability, ratings, and seller terms."
  },
  {
    question: "Are the affiliate links real?",
    answer: "Yes. Amazon links use the configured HomePilot Associates tracking ID."
  },
  {
    question: "How do I add products?",
    answer: "Edit data/products.json. Page templates read from JSON and update automatically at build time."
  }
];

export const metadata: Metadata = {
  title: "Best Robot Vacuums, Air Fryers & Espresso Machines Compared",
  description: "Compare real products, discover expert buying guides, and check current Amazon pricing for robot vacuums, air fryers, and espresso machines.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Best Robot Vacuums, Air Fryers & Espresso Machines Compared",
    description: "Expert buying guides for home products.",
    url: "https://homepilot-iota.vercel.app",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Robot Vacuums, Air Fryers & Espresso Machines Compared",
    description: "Expert buying guides for home products."
  }
};

export default function Home() {
  return (
    <main>
      <ProductSchema products={editorPicks} />
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "HomePilot",
            url: "https://homepilot-iota.vercel.app",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://homepilot-iota.vercel.app/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homeFaq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer }
            }))
          }
        ]}
      />
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Find Better Home Products
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-neutral-950 sm:text-6xl">
              Best Robot Vacuums, Air Fryers & Espresso Machines Compared
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Compare real products, discover expert buying guides, and check current Amazon pricing.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="rounded-full bg-neutral-950 px-6 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-700" href="/best-robot-vacuums">
                Compare Top Picks -&gt;
              </Link>
              <Link className="rounded-full border border-neutral-300 px-6 py-3 text-center text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5 hover:border-neutral-950" href="/espresso-machines/beginners">
                Read Buying Guides
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-neutral-700">
              {["Updated Monthly", "Independent Research", "Amazon Pricing"].map((badge) => (
                <span key={badge} className="rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-sm">
                  <span aria-hidden="true">✓ </span>
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-white/70 bg-white/70 p-5 shadow-xl shadow-neutral-200/60 backdrop-blur">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#eeeeee,transparent_45%)]" />
            <div className="relative grid h-full gap-4">
              {editorPicks.map((product, index) => (
                <div
                  key={product.id}
                  className={`flex items-center gap-4 rounded-lg border border-neutral-200 bg-white/90 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
                    index === 1 ? "ml-8" : index === 2 ? "ml-16" : ""
                  }`}
                >
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      priority={index === 0}
                      sizes="96px"
                      className="object-contain p-2"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                      {product.comparisonBadge}
                    </p>
                    <h2 className="mt-1 text-base font-semibold text-neutral-950">{product.name}</h2>
                    <p className="mt-1 text-sm text-neutral-600">{product.bestFor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Featured categories" title="Start with the room-changing upgrades." />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Where to start" title="Pick the comparison path that matches your buying moment." />
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ["Compare robot vacuums", "/best-robot-vacuums", "For mapped cleaning, pet hair, and self-empty docks."],
              ["Compare air fryers", "/best-air-fryers", "For compact kitchens, families, and two-zone cooking."],
              ["Compare espresso machines", "/best-espresso-machines", "For beginners, grinders, milk drinks, and automation."],
              ["Start with beginner guides", "/espresso-machines/beginners", "For practical buying advice before picking a product."]
            ].map(([label, href, copy]) => (
              <Link key={href} className="rounded-lg border border-neutral-200 bg-neutral-50 p-5 transition hover:-translate-y-1 hover:border-neutral-950 hover:bg-white" href={href}>
                <h3 className="font-semibold text-neutral-950">{label}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Editor picks" title="Real Amazon listings with transparent metadata." />
          <AffiliateDisclosure />
          <ProductGrid products={editorPicks} />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-950 hover:border-neutral-950" href="/best-robot-vacuums">
              Best robot vacuums
            </Link>
            <Link className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-950 hover:border-neutral-950" href="/best-air-fryers">
              Best air fryers
            </Link>
            <Link className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-950 hover:border-neutral-950" href="/best-espresso-machines">
              Best espresso machines
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Fast comparison" title="A cleaner way to compare the top HomePilot picks." />
        <div className="mt-5">
          <AffiliateDisclosure compact />
        </div>
        <div className="mt-5">
          <ProductComparisonTable products={editorPicks} />
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Latest buying guides" title="Built to convert without feeling noisy." />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Blog" title="SEO articles that answer practical buying questions." />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                {article.category.replace("-", " ")}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-neutral-950">{article.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{article.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Why trust HomePilot
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950">
            Practical filters, transparent affiliate rules, and evergreen structure.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Current pricing only",
              copy: "Product cards use retailer links instead of publishing static prices, ratings, or review counts."
            },
            {
              title: "Transparent affiliate model",
              copy: "Affiliate relationships are disclosed clearly, while recommendations stay focused on household fit and tradeoffs."
            },
            {
              title: "Maintainable research",
              copy: "Structured product data keeps recommendations easy to review, replace, and improve over time."
            }
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-neutral-200 p-5">
              <h3 className="font-semibold text-neutral-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Newsletter />

      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-6 lg:px-8">
        <FAQ items={homeFaq} />
      </section>
    </main>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">{eyebrow}</p>
      <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-neutral-950">{title}</h2>
    </div>
  );
}
