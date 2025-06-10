// components/WhyChoose.tsx
"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const reasons = [
  "5-Star Luxury Experience",
  "Prime Lekki Location",
  "World-Class Amenities",
  "Award-Winning Service",
];

export function WhyChoose() {
  return (
    <section className="py-16 px-4 bg-white">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Why Choose Montrose?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r}
            className="flex items-center space-x-3 p-4 border rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <CheckCircle className="text-montrose-wine" size={24} />
            <span className="text-lg">{r}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
