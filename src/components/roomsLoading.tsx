// components/RoomsLoading.tsx
"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";

export function RoomsLoading() {
  const cards = Array.from({ length: 6 });

  return (
    <div className="space-y-6">
      {/* Spinner & text */}
      <motion.div
        className="flex items-center justify-center space-x-2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <LoaderCircle className="w-6 h-6 text-montrose-red animate-spin" />
        <span className="text-lg text-gray-600">Loading rooms…</span>
      </motion.div>

      {/* Skeleton grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {cards.map((_, i) => (
          <motion.div
            key={i}
            className="h-80"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Skeleton className="h-full w-full rounded-2xl" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
