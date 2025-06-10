// components/SpecialOffersSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const offers = [
  {
    id: "off1",
    title: "Stay 3 Nights, Pay 2",
    desc: "Enjoy our deluxe room for 3 nights, only pay for 2.",
    img: "/images/card-room-001.jpg",
  },
  {
    id: "off2",
    title: "Weekend Getaway",
    desc: "20% off all Executive Suites on weekends.",
    img: "/images/card-room-002.jpg",
  },
  {
    id: "off3",
    title: "Romantic Package",
    desc: "Champagne & dinner included for couples.",
    img: "/images/card-room-003.jpg",
  },
];

export function SpecialOffersSection() {
  return (
    <section className="py-8 px-4 bg-white">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Special Offers
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {offers.map((o, i) => (
          <motion.div
            key={o.id}
            className="bg-gray-50 rounded-xl overflow-hidden shadow-lg flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-48">
              <Image src={o.img} alt={o.title} fill className="object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold">{o.title}</h3>
              <p className="text-gray-600 mt-2 flex-grow">{o.desc}</p>
              <Button asChild className="mt-4 self-start bg-montrose-red text-white">
                <a href="/booking/1">Book Now</a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
