type EditorialMetaProps = {
  updated?: string;
  author?: string;
  note?: string;
};

export function EditorialMeta({
  updated = "June 1, 2026",
  author = "HomePilot Editorial Team",
  note = "Independent product research with Amazon listings checked for current pricing and availability at purchase time."
}: EditorialMetaProps) {
  return (
    <aside className="mt-6 rounded-lg border border-neutral-200 bg-white p-4 text-sm leading-6 text-neutral-600">
      <p>
        <span className="font-semibold text-neutral-950">By {author}</span>
        <span className="mx-2 text-neutral-300">/</span>
        <span>Updated {updated}</span>
      </p>
      <p className="mt-2">{note}</p>
    </aside>
  );
}
