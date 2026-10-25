"use client";
import { useCallback, useEffect, useState } from "react";
import type { Listing } from "@/types/property";
import { SEED_LISTINGS } from "@/data/seed";

const KEY = "maison.listings.v1";

const persist = (all: Listing[]) => {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(all.filter((l) => !l.id.startsWith("s"))));
  } catch {
    /* storage full or unavailable */
  }
};

/** Storage adapter: swap this hook's internals for Supabase/Postgres later. */
export function useListings() {
  const [listings, setListings] = useState<Listing[]>(SEED_LISTINGS);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(KEY);
      if (raw) {
        const saved = JSON.parse(raw) as Listing[];
        if (Array.isArray(saved)) setListings([...saved, ...SEED_LISTINGS]);
      }
    } catch {
      /* ignore corrupted storage */
    }
  }, []);

  const addListing = useCallback((l: Listing) => {
    setListings((prev) => {
      const next = [l, ...prev];
      persist(next);
      return next;
    });
  }, []);

  const removeListing = useCallback((id: string) => {
    setListings((prev) => {
      const next = prev.filter((l) => l.id !== id);
      persist(next);
      return next;
    });
  }, []);

  return { listings, addListing, removeListing };
}
