// components/NoResults.tsx
"use client";

import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";
import { useFilterStore } from "@/store/filter";
import { motion } from "framer-motion";

export function NoResults() {
  const reset = useFilterStore((s) => s.reset);

  return (
    <motion.div
      className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg shadow-md"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <XCircle className="w-16 h-16 text-montrose-red mb-4" />
      <h3 className="text-xl font-semibold mb-2">No rooms found</h3>
      <p className="text-center text-gray-600 mb-4 max-w-sm">
        We couldn’t find any rooms matching your filters. Try adjusting your criteria or reset all
        filters.
      </p>
      <Button onClick={reset} className="bg-montrose-red text-white">
        Reset Filters
      </Button>
    </motion.div>
  );
}
