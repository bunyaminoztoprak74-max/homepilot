import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { articles, authors, getAuthor, guides, siteUrl } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return authors.map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author || author.slug !== slug) return {};

  return {
    title: `${author.name} | HomePilot`,
    description: author.bio,
    alternates: { canonical: `/authors/${author.slug}` }
  };
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author || author.slug !== slug) notFound();

  const authoredArticles = articles.filter((article) => (article.authorSlug ?? "homepilot-editorial-team") === author.slug).slice(0, 8);
  const featuredGuides = guides.slice(0, 6);

  return (
    <main className="mx-auto max-w-5xl px-5 py-14 sm:px-6 lg:px-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: author.name,
          jobTitle: author.role,
          url: `${siteUrl}/authors/${author.slug}`,
          description: author.bio,
          knowsAbout: author.expertise
        }}
      />
      <nav className="text-sm text-neutral-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-neutral-950">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/authors" className="hover:text-neutral-950">Authors</Link>
      </nav>
      <section className="mt-10 rounded-lg border border-neutral-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">{author.role}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950">{author.name}</h1>
        <p className="mt-5 text-lg leading-8 text-neutral-600">{author.bio}</p>
        <div className="mt-6 rounded-lg bg-neutral-50 p-5">
          <h2 className="font-semibold text-neutral-950">Editorial review</h2>
          <p className="mt-2 text-sm leading-6 text-neutral-600">
            <strong>{author.reviewedBy}:</strong> {author.reviewNote}
          </p>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">Expertise</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {author.expertise.map((item) => (
            <span key={item} className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700">
              {item}
            </span>
          ))}
        </div>
      </section>
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-neutral-200 bg-white p-5">
          <h2 className="font-semibold text-neutral-950">Recent articles</h2>
          <div className="mt-4 grid gap-3 text-sm">
            {authoredArticles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="text-neutral-600 hover:text-neutral-950">
                {article.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-white p-5">
          <h2 className="font-semibold text-neutral-950">Reviewed buying guides</h2>
          <div className="mt-4 grid gap-3 text-sm">
            {featuredGuides.map((guide) => (
              <Link key={`${guide.category}-${guide.slug}`} href={`/${guide.category}/${guide.slug}`} className="text-neutral-600 hover:text-neutral-950">
                {guide.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
