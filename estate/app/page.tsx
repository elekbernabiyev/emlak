"use client";
import { useMemo, useState } from "react";
import type { Filters, Listing } from "@/types/property";
import { useListings } from "@/hooks/useListings";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FilterBar from "@/components/FilterBar";
import ListingCard from "@/components/ListingCard";
import ListingDetail from "@/components/ListingDetail";
import PostAdModal from "@/components/PostAdModal";
import Footer from "@/components/Footer";

export default function HomePage() {
  const { listings, addListing, removeListing } = useListings();
  const [filters, setFilters] = useState<Filters>({ query: "", type: "All", minBeds: 0, sort: "new" });
  const [posting, setPosting] = useState(false);
  const [selected, setSelected] = useState<Listing | null>(null);

  const results = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    const out = listings.filter((l) =>
      (filters.type === "All" || l.type === filters.type) &&
      l.bedrooms >= filters.minBeds &&
      (!q || `${l.title} ${l.city} ${l.description}`.toLowerCase().includes(q)),
    );
    return [...out].sort((a, b) => filters.sort === "low" ? a.price - b.price : filters.sort === "high" ? b.price - a.price : b.createdAt - a.createdAt);
  }, [listings, filters]);

  return (
    <>
      <Header onPost={() => setPosting(true)} />
      <main>
        <Hero query={filters.query} onQuery={(query) => setFilters((f) => ({ ...f, query }))} count={results.length} />
        <section id="listings" className="mx-auto max-w-7xl scroll-mt-20 px-5 pb-24">
          <h2 className="mb-8 font-display text-4xl">Featured luxury estates</h2>
          <FilterBar filters={filters} onChange={setFilters} />
          {results.length === 0 ? (
            <div className="glass mt-10 rounded-3xl p-12 text-center">
              <p className="font-display text-2xl">Nothing matches yet</p>
              <p className="mt-2 text-white/60">Clear a filter, or be the first to list this kind of property.</p>
              <button onClick={() => setPosting(true)} className="mt-6 rounded-full bg-gold px-6 py-3 font-semibold text-ink-950">Post an ad</button>
            </div>
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((l) => <ListingCard key={l.id} listing={l} onOpen={setSelected} />)}
            </div>
          )}
        </section>
        <section className="mx-auto max-w-5xl px-5 pb-24">
          <div className="glass rounded-[2rem] p-10 text-center sm:p-16">
            <h2 className="font-display text-4xl sm:text-5xl">Sell faster. Skip the sign-up.</h2>
            <p className="mx-auto mt-4 max-w-md text-white/65">Describe your property, add a photo link, and go live in under a minute.</p>
            <button onClick={() => setPosting(true)} className="mt-8 rounded-full bg-jade px-8 py-4 font-semibold text-ink-950 transition hover:bg-jade/80">List your property</button>
          </div>
        </section>
      </main>
      <Footer />
      <PostAdModal open={posting} onClose={() => setPosting(false)} onSubmit={addListing} />
      <ListingDetail listing={selected} onClose={() => setSelected(null)} onRemove={removeListing} />
    </>
  );
}
