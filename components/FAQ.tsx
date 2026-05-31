import type { FAQItem } from "@/lib/types";

export function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <section id="faq">
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">FAQ</h2>
      <div className="mt-5 divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white">
        {items.map((item) => (
          <details key={item.question} className="group p-5">
            <summary className="cursor-pointer list-none font-semibold text-neutral-950">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
