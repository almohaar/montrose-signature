// components/AmenitiesHighlight.tsx
"use client";
import { motion } from "framer-motion";
import { Wifi, Dumbbell, WavesLadder, Tv, Car } from "lucide-react";

const amenities = [
  { icon: <Wifi size={24} />, label: "Wi-Fi 24/7" },
  { icon: <Dumbbell size={24} />, label: "Gym & Fitness" },
  { icon: <WavesLadder size={24} />, label: "Swimming Pool" },
  { icon: <Tv size={24} />, label: "In-Room Entertainment" },
  { icon: <Car size={24} />, label: "Secure Parking" },
];

export function AmenitiesHighlight() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Our Top Amenities
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
        {amenities.map((a, i) => (
          <motion.div
            key={a.label}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {a.icon}
            <span className="mt-2 text-sm text-center">{a.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
