import type { ReactNode } from "react";

export function TrustPage({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">HomePilot</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">{title}</h1>
      <p className="mt-5 text-lg leading-8 text-neutral-600">{description}</p>
      <div className="mt-10 space-y-8 text-base leading-8 text-neutral-700">{children}</div>
    </main>
  );
}
