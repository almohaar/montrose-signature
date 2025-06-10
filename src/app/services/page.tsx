// app/services/page.tsx
"use client";

import { motion } from "framer-motion";
import { ServicesPreview, WhyChoose, AmenitiesHighlight } from "@/components";

export default function ServicesPage() {
  return (
    <motion.main
      className="container mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl font-bold text-center mb-8">Our Premium Services</h1>

      {/* Services Grid */}
      <ServicesPreview />

      {/* Why Choose Montrose */}
      <WhyChoose />

      {/* Amenities Highlight */}
      <AmenitiesHighlight />

      {/* Final CTA */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-lg mb-4">
          Ready to experience luxury? Book your stay with Montrose now.
        </p>
        <a
          href="/rooms"
          className="inline-block px-8 py-3 bg-montrose-wine text-white rounded-full shadow-lg hover:bg-montrose-wine/90 transition"
        >
          Browse Rooms
        </a>
      </motion.div>
    </motion.main>
  );
}
