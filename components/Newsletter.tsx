export function Newsletter() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 text-white sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">Newsletter</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Get cleaner buying decisions.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-300">
            Join occasional updates for new buying guides, product category refreshes, and practical home research notes.
          </p>
        </div>
        <form className="flex w-full max-w-md gap-2" action="#">
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input
            className="min-w-0 flex-1 rounded-full border border-white/15 bg-white px-4 py-3 text-sm text-neutral-950 outline-none"
            id="email"
            name="email"
            placeholder="Email address"
            type="email"
          />
          <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-950" type="submit">
            Join
          </button>
        </form>
      </div>
    </section>
  );
}
