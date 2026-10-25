import type { Listing } from "@/types/property";

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=70`;

export const SEED_LISTINGS: Listing[] = [
  { id: "s1", title: "Glass Pavilion above the Caspian", price: 1850000, city: "Baku", type: "Villa", bedrooms: 5, area: 480, phone: "+994 50 000 00 01", image: u("photo-1613490493576-7fde63acd811"), description: "Floor-to-ceiling glass, infinity pool and uninterrupted sea views. Smart home, private garage, landscaped terraces.", createdAt: 6 },
  { id: "s2", title: "Skyline Penthouse, Flame Towers District", price: 1200000, city: "Baku", type: "Penthouse", bedrooms: 4, area: 320, phone: "+994 50 000 00 02", image: u("photo-1512917774080-9991f1c4c750"), description: "Duplex penthouse with a wraparound terrace, private elevator and concierge service.", createdAt: 5 },
  { id: "s3", title: "Quiet Courtyard Residence", price: 540000, city: "Sheki", type: "House", bedrooms: 3, area: 210, phone: "+994 50 000 00 03", image: u("photo-1600596542815-ffad4c1539a9"), description: "Restored stone house with a walled garden, hand-finished oak floors and mountain views.", createdAt: 4 },
  { id: "s4", title: "Modern Loft near the Old City", price: 285000, city: "Baku", type: "Apartment", bedrooms: 2, area: 110, phone: "+994 50 000 00 04", image: u("photo-1600585154340-be6161a56a0c"), description: "Bright open-plan loft with double-height ceilings, walking distance to the boulevard.", createdAt: 3 },
  { id: "s5", title: "Hillside Plot with Permit", price: 390000, city: "Gabala", type: "Land", bedrooms: 0, area: 1500, phone: "+994 50 000 00 05", image: u("photo-1564013799919-ab600027ffc6"), description: "Flat, fully permitted plot with road access and utilities at the boundary.", createdAt: 2 },
  { id: "s6", title: "Corner Retail Suite, Prime Avenue", price: 760000, city: "Baku", type: "Commercial", bedrooms: 0, area: 260, phone: "+994 50 000 00 06", image: u("photo-1545324418-cc1a3fa10c00"), description: "Double-frontage commercial space with high foot traffic and flexible layout.", createdAt: 1 },
];
