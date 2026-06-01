import Link from "next/link";
import type { Author } from "@/lib/types";

export function AuthorBox({ author, updatedAt }: { author: Author; updatedAt?: string }) {
  return (
    <aside className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">Written and reviewed by</p>
      <div className="mt-3 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-sm font-semibold text-white">
          {author.name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <Link href={`/authors/${author.slug}`} className="font-semibold text-neutral-950 hover:text-neutral-700">
            {author.name}
          </Link>
          <p className="mt-1 text-sm text-neutral-600">{author.role}</p>
          {updatedAt ? (
            <p className="mt-1 text-xs text-neutral-500">
              Last updated {new Date(updatedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          ) : null}
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-neutral-600">{author.bio}</p>
      <div className="mt-4 rounded-lg bg-neutral-50 p-4 text-sm leading-6 text-neutral-600">
        <strong className="font-semibold text-neutral-950">Reviewed by:</strong> {author.reviewedBy}. {author.reviewNote}
      </div>
    </aside>
  );
}
