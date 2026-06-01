import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { articles, categories, getArticle, siteUrl } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: `${article.title} | HomePilot`,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${siteUrl}/blog/${article.slug}`,
      type: "article"
    }
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const category = categories.find((item) => item.slug === article.category);

  return (
    <main className="mx-auto max-w-3xl px-5 py-14 sm:px-6 lg:px-8">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.description,
            url: `${siteUrl}/blog/${article.slug}`,
            author: { "@type": "Organization", name: article.author },
            publisher: { "@type": "Organization", name: "HomePilot" },
            datePublished: article.updatedAt,
            dateModified: article.updatedAt
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: article.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer }
            }))
          }
        ]}
      />
      <nav className="text-sm text-neutral-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-neutral-950">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-neutral-950">Blog</Link>
      </nav>
      <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
        {category?.name ?? "Home products"}
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">{article.title}</h1>
      <p className="mt-5 text-lg leading-8 text-neutral-600">{article.description}</p>
      <p className="mt-4 text-sm text-neutral-500">
        By {article.author} / Updated {new Date(article.updatedAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric"
        })}
      </p>
      <article className="mt-10 space-y-6 text-base leading-8 text-neutral-700">
        {article.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
      <div className="mt-10 rounded-lg border border-neutral-200 bg-white p-6">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-950">Related HomePilot guides</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {article.internalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-950 hover:border-neutral-950"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <section className="mt-10">
        <FAQ items={article.faq} />
      </section>
    </main>
  );
}
