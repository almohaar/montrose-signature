// components/FilterSidebar.tsx
"use client";

import { useFilterStore, ROOM_TYPE_OPTIONS, AMENITY_OPTIONS } from "@/store/filter";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function FilterSidebar() {
  const {
    searchText,
    types,
    priceRange,
    amenities,
    setSearchText,
    setTypes,
    setPriceRange,
    setAmenities,
    reset,
  } = useFilterStore();

  const [minP, maxP] = priceRange;

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -20, opacity: 0 }}
      className="space-y-6"
    >
      {/* Search */}
      <div>
        <Input
          placeholder="Search rooms…"
          value={searchText}
          onChange={(e) => setSearchText(e.currentTarget.value)}
        />
      </div>

      {/* Types */}
      <div>
        <h4 className="font-semibold mb-2">Room Type</h4>
        <div className="space-y-2">
          {ROOM_TYPE_OPTIONS.map(({ value, label }) => (
            <label key={value} className="flex items-center space-x-2">
              <Checkbox
                checked={types.includes(value)}
                onCheckedChange={(chk) => {
                  const next = chk ? [...types, value] : types.filter((t) => t !== value);
                  setTypes(next);
                }}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-semibold mb-2">Price (₦)</h4>
        <div className="flex space-x-2 text-sm">
          <Input
            type="number"
            value={minP}
            onChange={(e) => setPriceRange([+e.currentTarget.value, maxP])}
            className="w-1/2"
          />
          <Input
            type="number"
            value={maxP}
            onChange={(e) => setPriceRange([minP, +e.currentTarget.value])}
            className="w-1/2"
          />
        </div>
      </div>

      {/* Amenities */}
      <div>
        <h4 className="font-semibold mb-2">Amenities</h4>
        <div className="space-y-2">
          {AMENITY_OPTIONS.map((a) => (
            <label key={a} className="flex items-center space-x-2">
              <Checkbox
                checked={amenities.includes(a)}
                onCheckedChange={(chk) => {
                  const next = chk ? [...amenities, a] : amenities.filter((x) => x !== a);
                  setAmenities(next);
                }}
              />
              <span className="capitalize">{a}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Reset */}
      <Button variant="outline" size="sm" onClick={reset} className="w-full">
        Reset Filters
      </Button>
    </motion.div>
  );
}
