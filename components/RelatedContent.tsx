import Link from "next/link";
import type { Article, Guide, Product } from "@/lib/types";

export function RelatedContent({
  products = [],
  articles = [],
  guides = []
}: {
  products?: Product[];
  articles?: Article[];
  guides?: Guide[];
}) {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      <RelatedBlock title="Related products">
        {products.slice(0, 5).map((product) => (
          <a key={product.id} href={product.amazonUrl} target="_blank" rel="nofollow sponsored noopener" className="text-neutral-600 hover:text-neutral-950">
            {product.name}
          </a>
        ))}
      </RelatedBlock>
      <RelatedBlock title="Related articles">
        {articles.slice(0, 5).map((article) => (
          <Link key={article.slug} href={`/blog/${article.slug}`} className="text-neutral-600 hover:text-neutral-950">
            {article.title}
          </Link>
        ))}
      </RelatedBlock>
      <RelatedBlock title="Related buying guides">
        {guides.slice(0, 5).map((guide) => (
          <Link key={`${guide.category}-${guide.slug}`} href={`/${guide.category}/${guide.slug}`} className="text-neutral-600 hover:text-neutral-950">
            {guide.title}
          </Link>
        ))}
      </RelatedBlock>
    </section>
  );
}

function RelatedBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-5">
      <h2 className="font-semibold text-neutral-950">{title}</h2>
      <div className="mt-4 grid gap-3 text-sm">{children}</div>
    </div>
  );
}
