import { PROPERTY_TYPES, type Filters, type SortKey } from "@/types/property";

interface FilterBarProps { filters: Filters; onChange: (f: Filters) => void }

export default function FilterBar({ filters, onChange }: FilterBarProps) {
  const set = <K extends keyof Filters>(k: K, v: Filters[K]) => onChange({ ...filters, [k]: v });
  const chip = (active: boolean) =>
    `whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${active ? "bg-white text-ink-950" : "glass text-white/70 hover:text-white"}`;

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:mx-0 lg:px-0">
        {(["All", ...PROPERTY_TYPES] as const).map((t) => (
          <button key={t} onClick={() => set("type", t)} className={chip(filters.type === t)} aria-pressed={filters.type === t}>{t}</button>
        ))}
      </div>
      <div className="flex gap-3">
        <select aria-label="Minimum bedrooms" value={filters.minBeds} onChange={(e) => set("minBeds", Number(e.target.value))} className="field !w-auto">
          {[0, 1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n === 0 ? "Any beds" : `${n}+ beds`}</option>)}
        </select>
        <select aria-label="Sort" value={filters.sort} onChange={(e) => set("sort", e.target.value as SortKey)} className="field !w-auto">
          <option value="new">Newest</option>
          <option value="low">Price: low to high</option>
          <option value="high">Price: high to low</option>
        </select>
      </div>
    </div>
  );
}
