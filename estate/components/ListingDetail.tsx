import type { Listing } from "@/types/property";
import Modal from "./Modal";
import { formatPrice } from "./ListingCard";

interface Props { listing: Listing | null; onClose: () => void; onRemove: (id: string) => void }

export default function ListingDetail({ listing: l, onClose, onRemove }: Props) {
  return (
    <Modal open={l !== null} onClose={onClose} label="Listing details">
      {l && (
        <div>
          <div className="aspect-[16/9] bg-gradient-to-br from-ink-700 to-ink-800">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={l.image} alt={l.title} onError={(e) => { e.currentTarget.style.display = "none"; }} className="h-full w-full object-cover" />
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-sm text-jade">{l.type} in {l.city}</p>
            <h2 className="mt-1 font-display text-3xl">{l.title}</h2>
            <p className="mt-2 text-2xl font-semibold text-gold">{formatPrice(l.price)}</p>
            <p className="mt-4 text-sm text-white/60">{l.bedrooms > 0 ? `${l.bedrooms} bedrooms, ` : ""}{l.area.toLocaleString("en-US")} m²</p>
            <p className="mt-5 leading-relaxed text-white/75">{l.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${l.phone.replace(/\s/g, "")}`} className="rounded-full bg-jade px-6 py-3 font-semibold text-ink-950 transition hover:bg-jade/80">Call {l.phone}</a>
              <button onClick={onClose} className="glass rounded-full px-6 py-3 transition hover:bg-white/10">Close</button>
              {!l.id.startsWith("s") && (
                <button onClick={() => { onRemove(l.id); onClose(); }} className="rounded-full px-6 py-3 text-red-300 transition hover:bg-red-400/10">Remove my listing</button>
              )}
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
