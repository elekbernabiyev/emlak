import type { Listing } from "@/types/property";

export const formatPrice = (n: number): string =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

interface ListingCardProps { listing: Listing; onOpen: (l: Listing) => void }

export default function ListingCard({ listing: l, onOpen }: ListingCardProps) {
  return (
    <button onClick={() => onOpen(l)} className="group animate-rise overflow-hidden rounded-3xl border border-white/10 bg-ink-900 text-left transition duration-300 hover:-translate-y-1 hover:border-jade/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-jade">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-ink-700 to-ink-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={l.image} alt={l.title} loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 text-xs">{l.type}</span>
        <span className="absolute bottom-4 right-4 rounded-full bg-gold px-4 py-1.5 text-sm font-bold text-ink-950">{formatPrice(l.price)}</span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl leading-snug">{l.title}</h3>
        <p className="mt-1 text-sm text-jade">{l.city}</p>
        <p className="mt-4 text-sm text-white/55">
          {l.bedrooms > 0 ? `${l.bedrooms} bedrooms` : "No bedrooms"}, {l.area.toLocaleString("en-US")} m²
        </p>
      </div>
    </button>
  );
}
