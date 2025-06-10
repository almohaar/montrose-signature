// components/HowItWorksSection.tsx
"use client";

import { motion } from "framer-motion";
import { Calendar, CreditCard, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <Calendar size={32} className="text-montrose-red" />,
    title: "Select Dates",
    desc: "Choose your check-in and check-out dates.",
  },
  {
    icon: <CreditCard size={32} className="text-montrose-red" />,
    title: "Enter Details",
    desc: "Provide guest info and secure payment.",
  },
  {
    icon: <CheckCircle size={32} className="text-montrose-red" />,
    title: "Confirm Booking",
    desc: "Receive instant confirmation & email.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        How to Book
      </motion.h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            className="bg-white rounded-xl shadow p-6 text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {s.icon}
            <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
