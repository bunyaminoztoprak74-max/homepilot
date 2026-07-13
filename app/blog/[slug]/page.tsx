import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { AuthorBox } from "@/components/AuthorBox";
import { RelatedContent } from "@/components/RelatedContent";
import { articles, categories, getArticle, getAuthor, getGscPriorityOverride, guides, products, siteUrl } from "@/lib/content";

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
  const override = getGscPriorityOverride(slug);

  return {
    title: override?.seoTitle ? { absolute: override.seoTitle } : `${article.title} | HomePilot`,
    description: override?.metaDescription ?? article.description,
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
  const override = getGscPriorityOverride(slug);
  const author = getAuthor(article.authorSlug);
  const relatedProducts = article.relatedProducts
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is (typeof products)[number] => Boolean(product));
  const relatedArticles = articles.filter((item) => item.category === article.category && item.slug !== article.slug);
  const relatedGuides = guides.filter((item) => item.category === article.category);
  const quickAnswer = override?.quickAnswer ?? article.body[0] ?? article.description;
  const detailParagraphs = override ? [override.opening, ...article.body.slice(1)] : article.body.slice(1);
  const articleFaq = [...(override?.faq ?? []), ...article.faq];
  const articleLinks = [...(override?.internalLinks ?? []), ...article.internalLinks]
    .filter((link, index, links) => links.findIndex((item) => item.href === link.href) === index);
  const splitAt = Math.max(1, Math.ceil(detailParagraphs.length / 2));

  return (
    <main className="mx-auto max-w-3xl px-5 py-14 sm:px-6 lg:px-8">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: override?.metaDescription ?? article.description,
            url: `${siteUrl}/blog/${article.slug}`,
            author: { "@type": "Person", name: author.name, url: `${siteUrl}/authors/${author.slug}` },
            publisher: { "@type": "Organization", name: "HomePilot" },
            reviewedBy: { "@type": "Organization", name: author.reviewedBy },
            datePublished: article.updatedAt,
            dateModified: article.updatedAt
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: articleFaq.map((item) => ({
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
        By {author.name} / Updated {new Date(article.updatedAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric"
        })}
      </p>
      <div className="mt-8">
        <AuthorBox author={author} updatedAt={article.updatedAt} />
      </div>
      <article className="mt-10 space-y-10 text-base leading-8 text-neutral-700">
        <section className="rounded-lg border border-neutral-200 bg-neutral-50 p-6" aria-labelledby="quick-answer">
          <h2 id="quick-answer" className="text-xl font-semibold tracking-tight text-neutral-950">Quick answer</h2>
          <p className="mt-3">{quickAnswer}</p>
        </section>
        <section aria-labelledby="what-to-know">
          <h2 id="what-to-know" className="text-2xl font-semibold tracking-tight text-neutral-950">What you need to know</h2>
          <div className="mt-4 space-y-6">
            {detailParagraphs.slice(0, splitAt).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>
        <section aria-labelledby="practical-next-steps">
          <h2 id="practical-next-steps" className="text-2xl font-semibold tracking-tight text-neutral-950">Practical next steps</h2>
          <div className="mt-4 space-y-6">
            {detailParagraphs.slice(splitAt).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>
         {override?.semanticSections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">{section.heading}</h2>
            <div className="mt-4 space-y-6">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
           </section>
         ))}
      </article>
      <div className="mt-10 rounded-lg border border-neutral-200 bg-white p-6">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-950">Related HomePilot guides</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {articleLinks.map((link) => (
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
        <FAQ items={articleFaq} />
      </section>
      <div className="mt-10">
        <RelatedContent products={relatedProducts} articles={relatedArticles} guides={relatedGuides} />
      </div>
    </main>
  );
}
