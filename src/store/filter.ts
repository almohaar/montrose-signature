// store/filter.ts
import { create } from "zustand";
import { Room } from "../generated/prisma";

export const ROOM_TYPE_OPTIONS: { value: Room["type"]; label: string }[] = [
  { value: "EXEC_SUITE", label: "Executive Suite" },
  { value: "PREMIUM_EXEC_SUITE_LAGOON", label: "Premium Suite" },
  { value: "PRESIDENTIAL_EXEC_SUITE", label: "Presidential Suite" },
  { value: "ROYAL_EXEC_SUITE", label: "Royal Suite" },
  { value: "ROYAL_EXEC_SUITE_LAGOON", label: "Royal Executive" },
  { value: "TWIN_EXEC_SUITE_LAGOON", label: "Twin Executive" },
];

export const AMENITY_OPTIONS = ["wifi", "gym", "swimming pool", "parking"] as const;
export type Amenity = (typeof AMENITY_OPTIONS)[number];

interface FilterState {
  searchText: string;
  types: Room['type'][];
  priceRange: [number, number];
  amenities: Amenity[];
  sortBy: "" | "price-asc" | "price-desc" | "rating";

  setSearchText: (txt: string) => void;
  setTypes: (types: Room['type'][]) => void;
  setPriceRange: (range: [number, number]) => void;
  setAmenities: (ams: Amenity[]) => void;
  setSortBy: (s: FilterState["sortBy"]) => void;
  reset: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  searchText: "",
  types: [],
  priceRange: [0, 1000000],
  amenities: [],
  sortBy: "",

  setSearchText: (searchText) => set({ searchText }),
  setTypes: (types) => set({ types }),
  setPriceRange: (priceRange) => set({ priceRange }),
  setAmenities: (amenities) => set({ amenities }),
  setSortBy: (sortBy) => set({ sortBy }),
  reset: () =>
    set({
      searchText: "",
      types: [],
      priceRange: [0, 1000000], // on6
      amenities: [],
      sortBy: "",
    }),
}));
