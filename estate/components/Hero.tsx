interface HeroProps { query: string; onQuery: (q: string) => void; count: number }

export default function Hero({ query, onQuery, count }: HeroProps) {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-24 sm:pt-32">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-jade/20 blur-[140px]" />
      <div aria-hidden className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-gold/15 blur-[120px]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="animate-rise font-display text-5xl leading-[1.05] tracking-tight sm:text-7xl">
          Find your sanctuary, <span className="italic text-gold-soft">not just an address.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/65">
          Hand-picked homes, villas and land. Browse freely, call owners directly. No account, no waiting.
        </p>
        <div className="glass mx-auto mt-10 flex max-w-2xl items-center gap-3 rounded-full p-2 pl-6">
          <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-white/50"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          <input
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="Search by city, title or keyword"
            aria-label="Search listings"
            className="w-full bg-transparent py-3 text-white outline-none placeholder:text-white/40"
          />
          <a href="#listings" className="hidden whitespace-nowrap rounded-full bg-jade px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-jade/80 sm:block">
            View {count} {count === 1 ? "estate" : "estates"}
          </a>
        </div>
      </div>
    </section>
  );
}
