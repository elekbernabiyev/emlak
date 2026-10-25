export const PROPERTY_TYPES = ["Apartment", "Villa", "House", "Penthouse", "Land", "Commercial"] as const;
export type PropertyType = (typeof PROPERTY_TYPES)[number];

export interface Listing {
  id: string;
  title: string;
  price: number;
  city: string;
  type: PropertyType;
  bedrooms: number;
  area: number;
  phone: string;
  image: string;
  description: string;
  createdAt: number;
}

export type SortKey = "new" | "low" | "high";

export interface Filters {
  query: string;
  type: PropertyType | "All";
  minBeds: number;
  sort: SortKey;
}
