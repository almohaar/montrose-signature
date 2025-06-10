"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// SEO metadata (Next.js App Router)
/*
export const metadata = {
  title: "About Us – Montrose Hotel",
  description: "Discover Montrose Hotel’s journey, values, awards, and leadership team in Lekki’s premier 5-star destination.",
};
*/

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16 space-y-16">
      {/* Hero / Our Story */}
      <section className="grid gap-8 md:grid-cols-2 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold">Our Story</h1>
          <p className="text-gray-700 leading-relaxed">
            The Montrose Signature is a boutique apartment established to surpass expectations of our teeming customers. The accomodation and environment are perfect for both business and leisure use. Located at the heart of Lekki Phase 1 (first roundabout) the Montrose Signature is just about 5 minutes' drive from Victoria Island which is the commercial nerve-centre of Lagos, diagonally opposite the Palms Mall (Shoprite), and the heart of Lekki Phase 1, Off Admiralty Road.
          </p>
          <p className="text-gray-700 leading-relaxed">
           On arrival, you will be ushered into a reception with an ambience that sets you apart from the outside world. You have a choice to sit back and relax, watching the latest news or reading from our array of magazines, journals or newspapers while your check-in is processed.
          </p>
          <p className="text-gray-700 leading-relaxed">We have tastefully furnished rooms (contemporary Americal style furnishing), Restaurants and Bar as well as Meeting Rooms to meet your personal and business needs. In fact, The Montrose Signature has been designed with you in mind. Our sole reason for existence is to make your stay a positively unforgettable experience.</p>
          <p className="text-gray-700 leading-relaxed">Our guests are welcome to enjoy top quality accomodation in our Deluxe Rooms, Executive Rooms, Junior Suites and Executive Suites. Our Circle Bar & Restaurant has designed to give you a home-feel whilst you enjoy the meals and services of our celebrity chef. The Poolside Bar & Cafe is also available for your sit-out relaxation, drinks and delicious meals.</p>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-64 md:h-[480px] rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src="/images/bg-001.jpg"
            alt="Montrose Signature exterior"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* Our Values */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "/images/integrity.jpeg",
              title: "Integrity",
              desc: "We uphold the highest ethical standards in everything we do.",
            },
            {
              icon: "/images/excellence.jpeg",
              title: "Excellence",
              desc: "We strive for perfection in service, design, and experience.",
            },
            {
              icon: "/images/hospitality.jpeg",
              title: "Warmth",
              desc: "We treat every guest with genuine Nigerian hospitality.",
            },
            {
              icon: "/images/sustainability.jpeg",
              title: "Sustainability",
              desc: "We protect our planet through eco-friendly operations.",
            },
          ].map((v) => (
            <motion.div
              key={v.title}
              className="p-6 bg-gray-50 rounded-lg text-center flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto mb-4 w-12 h-12 relative">
                <Image src={v.icon} alt={v.title} fill className="object-contain" />
              </div>
              <h3 className="text-xl font-medium">{v.title}</h3>
              <p className="text-gray-600 mt-2 flex-grow">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">Our Awards</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { title: "Best Luxury Apartment 2023", img: "/awards/luxury-2023.png" },
            { title: "Service Excellence 2022", img: "/awards/service-2022.png" },
            { title: "Eco-Friendly Award", img: "/awards/eco-2023.png" },
            { title: "Culinary Mastery", img: "/awards/culinary-2022.png" },
          ].map((a) => (
            <motion.div
              key={a.title}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 mb-2 relative">
                <Image src={a.img} alt={a.title} fill className="object-contain" />
              </div>
              <p className="text-center text-sm font-medium">{a.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">Meet Our Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "Aisha Bello", role: "General Manager", img: "/images/alice.jpg" },
            { name: "Tunde Okafor", role: "Head Chef", img: "/images/bob.jpg" },
            { name: "Chioma Nwosu", role: "Guest Relations", img: "/images/carol.jpg" },
          ].map((m) => (
            <motion.div
              key={m.name}
              className="text-center p-4 bg-gray-50 rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden relative">
                <Image src={m.img} alt={m.name} fill className="object-cover" />
              </div>
              <h3 className="text-lg font-medium">{m.name}</h3>
              <p className="text-sm text-gray-600">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
