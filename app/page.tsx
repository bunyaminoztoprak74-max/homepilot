import Link from "next/link";
import categories from "@/data/categories.json";
import guides from "@/data/guides.json";
import comparisons from "@/data/comparisons.json";
import { CategoryCard } from "@/components/CategoryCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQ } from "@/components/FAQ";
import { GuideCard } from "@/components/GuideCard";
import { JsonLd } from "@/components/JsonLd";
import { Newsletter } from "@/components/Newsletter";

const featuredGuides = guides.slice(0, 6);

export default function Home() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "HomePilot",
          url: "https://homepilot.vercel.app",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://homepilot.vercel.app/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Find Better Home Products
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-neutral-950 sm:text-6xl">
              Home buying guides built for calm, confident decisions.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              HomePilot compares robot vacuums, air fryers, and espresso gear with clear criteria,
              clean layouts, and no fake ratings or static prices.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="rounded-full bg-neutral-950 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-neutral-700" href="/robot-vacuums">
                Explore comparisons
              </Link>
              <Link className="rounded-full border border-neutral-300 px-6 py-3 text-center text-sm font-semibold text-neutral-950 transition hover:border-neutral-950" href="/espresso-machines/espresso-machine-buying-guide">
                Read a buying guide
              </Link>
            </div>
          </div>
          <div className="grid content-center gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-5">
            <p className="text-sm font-medium text-neutral-500">Featured comparison</p>
            <ComparisonTable rows={comparisons[0].rows} />
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

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Latest buying guides" title="Built to convert without feeling noisy." />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
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
          {["No fake ratings", "No hardcoded prices", "JSON-first updates"].map((item) => (
            <div key={item} className="rounded-lg border border-neutral-200 p-5">
              <h3 className="font-semibold text-neutral-950">{item}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Recommendations stay useful because the templates separate claims, products, and editorial copy.
              </p>
            </div>
          ))}
        </div>
      </section>

      <Newsletter />

      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-6 lg:px-8">
        <FAQ
          items={[
            { question: "Does HomePilot show live prices?", answer: "No. Prices change frequently, so every CTA sends readers to Amazon to check the current listing." },
            { question: "Are the affiliate links real?", answer: "They use placeholder Amazon affiliate URLs with YOURTAG-20 so you can replace the tag before launch." },
            { question: "How do I add products?", answer: "Edit data/products.json. Page templates read from JSON and update automatically at build time." }
          ]}
        />
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
