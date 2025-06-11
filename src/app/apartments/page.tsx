"use client";

import {
  FilterSidebar,
  HowItWorksSection,
  NewsletterSection,
  NoResults,
  RoomsLoading,
  SpecialOffersSection,
} from "@/components";
import { RoomCard } from "@/components/cards";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useRooms } from "@/lib/hooks/useRooms";
import { useFilterStore } from "@/store/filter";
import { AnimatePresence, motion } from "framer-motion";

export default function RoomsPage() {
  const { rooms, isLoading } = useRooms();
  const { searchText, types, priceRange, amenities, sortBy, setSortBy } = useFilterStore();

  const filtered = rooms
    .filter((r) => {
      const [minP, maxP] = priceRange;
      const matchesText = r.name.toLowerCase().includes(searchText.toLowerCase());
      const matchesType = types.length ? types.includes(r.type) : true;
      const matchesPrice = r.price >= minP && r.price <= maxP;
      const roomAmens = r.amenities?.toString().toLowerCase().split(",") || [];
      const matchesAmens = amenities.every((a) =>
        roomAmens.some((ra) => ra.includes(a.toLowerCase()))
      );
      return matchesText && matchesType && matchesPrice && matchesAmens;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      // if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* Mobile filters */}
        <div className="md:hidden p-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button>Filters</Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <FilterSidebar />
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop sidebar */}
        <aside className="hidden md:block w-64 p-6 border-r sticky top-24 h-[calc(100vh-6rem)] overflow-auto">
          <FilterSidebar />
        </aside>

        {/* Main */}
        <main className="flex-grow p-6">
          {/* header */}
          <div className="flex flex-col md:flex-row md:justify-between mb-6">
            <p className="mb-4 md:mb-0 text-gray-700">
              Showing <span className="font-semibold">{filtered.length}</span> of{" "}
              <span className="font-semibold">{rooms.length}</span> rooms
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.currentTarget.value as any)}
              className="border p-2 rounded max-w-xs"
            >
              <option value="">Sort by</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          {isLoading ? (
            <RoomsLoading />
          ) : filtered.length === 0 ? (
            <div className="py-12">
              <NoResults />
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <AnimatePresence>
                {filtered.map((r) => (
                  <motion.div
                    key={r.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <RoomCard
                     {...r}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </main>
      </div>
      <SpecialOffersSection />
      <HowItWorksSection />
      <NewsletterSection />
    </>
  );
}
