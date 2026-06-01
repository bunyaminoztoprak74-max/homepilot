"use client";

import { FormEvent, useState } from "react";

const storageKey = "homepilot-newsletter-emails";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalized = email.trim().toLowerCase();
    if (!normalized) return;

    const existing = JSON.parse(window.localStorage.getItem(storageKey) ?? "[]") as string[];
    const next = Array.from(new Set([...existing, normalized]));
    window.localStorage.setItem(storageKey, JSON.stringify(next));
    setEmail("");
    setStatus("Thanks. Your email was saved locally for this prototype.");
  }

  return (
    <section className="bg-neutral-950">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 text-white sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">Newsletter</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Get Weekly Home Product Deals</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-300">
            Get buying guide updates, comparison refreshes, and retailer price-check reminders. Email only.
          </p>
        </div>
        <form className="flex w-full max-w-md flex-col gap-2 sm:flex-row" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            className="min-w-0 flex-1 rounded-full border border-white/15 bg-white px-4 py-3 text-sm text-neutral-950 outline-none"
            id="newsletter-email"
            name="email"
            placeholder="Email address"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-950" type="submit">
            Join
          </button>
          {status ? <p className="text-sm text-neutral-300 sm:col-span-2">{status}</p> : null}
        </form>
      </div>
    </section>
  );
}
