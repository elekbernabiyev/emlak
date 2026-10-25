"use client";
import { useState } from "react";
import { PROPERTY_TYPES, type Listing, type PropertyType } from "@/types/property";
import Modal from "./Modal";

interface Props { open: boolean; onClose: () => void; onSubmit: (l: Listing) => void }

interface FormState {
  title: string; price: string; city: string; type: PropertyType;
  bedrooms: string; area: string; phone: string; image: string; description: string;
}

const EMPTY: FormState = { title: "", price: "", city: "", type: "Apartment", bedrooms: "2", area: "", phone: "", image: "", description: "" };
const FALLBACK_IMG = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=70";

export default function PostAdModal({ open, onClose, onSubmit }: Props) {
  const [f, setF] = useState<FormState>(EMPTY);
  const [error, setError] = useState("");
  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => setF((p) => ({ ...p, [k]: v }));

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const price = Number(f.price);
    const area = Number(f.area);
    if (!f.title.trim() || !f.city.trim() || !f.phone.trim()) { setError("Add a title, city and contact number."); return; }
    if (!(price > 0) || !(area > 0)) { setError("Price and area must be greater than zero."); return; }
    onSubmit({
      id: `u-${Date.now()}`, title: f.title.trim(), price, city: f.city.trim(), type: f.type,
      bedrooms: Math.max(0, Number(f.bedrooms) || 0), area, phone: f.phone.trim(),
      image: f.image.trim() || FALLBACK_IMG, description: f.description.trim() || "Contact the owner for details.", createdAt: Date.now(),
    });
    setF(EMPTY); setError(""); onClose();
  };

  return (
    <Modal open={open} onClose={onClose} label="Post an ad">
      <form onSubmit={submit} className="space-y-4 p-6 sm:p-8">
        <h2 className="font-display text-3xl">List your property</h2>
        <p className="text-sm text-white/55">Free, instant, and no account required.</p>
        <input className="field" placeholder="Title" value={f.title} onChange={(e) => set("title", e.target.value)} />
        <div className="grid grid-cols-2 gap-4">
          <input className="field" type="number" min="0" placeholder="Price (USD)" value={f.price} onChange={(e) => set("price", e.target.value)} />
          <input className="field" placeholder="City" value={f.city} onChange={(e) => set("city", e.target.value)} />
          <select className="field" aria-label="Property type" value={f.type} onChange={(e) => set("type", e.target.value as PropertyType)}>
            {PROPERTY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          <input className="field" type="number" min="0" placeholder="Bedrooms" value={f.bedrooms} onChange={(e) => set("bedrooms", e.target.value)} />
          <input className="field" type="number" min="0" placeholder="Area (m²)" value={f.area} onChange={(e) => set("area", e.target.value)} />
          <input className="field" type="tel" placeholder="Contact number" value={f.phone} onChange={(e) => set("phone", e.target.value)} />
        </div>
        <input className="field" type="url" placeholder="Image URL (https://...)" value={f.image} onChange={(e) => set("image", e.target.value)} />
        <textarea className="field min-h-28" placeholder="Description" value={f.description} onChange={(e) => set("description", e.target.value)} />
        {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
        <div className="flex gap-3">
          <button type="submit" className="rounded-full bg-gold px-7 py-3 font-semibold text-ink-950 transition hover:bg-gold-soft">Publish listing</button>
          <button type="button" onClick={onClose} className="glass rounded-full px-6 py-3 transition hover:bg-white/10">Cancel</button>
        </div>
      </form>
    </Modal>
  );
}
