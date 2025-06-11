"use client";
import { Hero } from "@/components/landing";
import { RoomCard, ServiceCard } from "@/components/cards";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs, services } from "@/lib/mock-data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRooms } from "@/lib/hooks/useRooms";

const testimonials = [
  { name: "Alice", text: "Best Service apartment experience ever!", photo: "/images/alice.jpg" },
  { name: "Bob", text: "Luxurious rooms and superb service.", photo: "/images/bob.jpg" },
  { name: "Carol", text: "Amazing spa and dining!", photo: "/images/carol.jpg" },
];

export default function HomePage() {
  const { rooms, isLoading } = useRooms();

  const uniqueRooms = Array.from(new Map(rooms.map((room) => [room.type, room])).values());

  console.log(uniqueRooms)

  return (
    <main>
      <Hero />

      {/* Featured Apartments */}
      <section className="py-16 px-4 container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Featured Apartments
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {uniqueRooms.map((r) => (
            <motion.div
              key={r.id}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <RoomCard {...r} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-gray-50">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Our Premium Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* place jpgs in public/service-photos/ */}
              <div className="relative w-full h-48">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600 mb-4">{s.description}</p>
                <Button asChild size="sm" className="mt-auto">
                  <a href={`/services#${s.id}`} className="text-montrose-red">
                    Learn More
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-4 container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">About Montrose Signature</h2>
          <p className="text-gray-700 mb-4">
            Since 2010, Montrose Signature has set the standard for luxury hospitality in Lekki. With
            two branches, award-winning service, and world-class amenities, we create unforgettable
            experiences for every guest.
          </p>
          <Button asChild className="bg-montrose-red text-white">
            <Link href="/about">Learn More</Link>
          </Button>
        </motion.div>
        <motion.div
          className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Image src="/images/bg-001.jpg" alt="About Montrose" fill className="object-cover" />
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          What Our Guests Say
        </motion.h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-white p-6 rounded-xl shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img src={t.photo} alt={t.name} className="object-cover w-full h-full" />
              </div>
              <p className="italic text-gray-700 mb-4">“{t.text}”</p>
              <p className="font-semibold">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible>
                <AccordionItem value={f.id}>
                  <AccordionTrigger className="text-lg font-medium">{f.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{f.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 text-center bg-montrose-red text-white">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >
          Ready to experience Montrose?
        </motion.h2>
        <Button asChild className="bg-white text-montrose-red font-semibold px-8 py-3">
          <Link href="/rooms">Book Now</Link>
        </Button>
      </section>
    </main>
  );
}
