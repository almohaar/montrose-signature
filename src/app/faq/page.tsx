"use client"

// app/faq/page.tsx
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui";

// export const metadata = {
//   title: "FAQ – Montrose Hotel",
//   description: "Frequently asked questions about booking and staying at Montrose Hotel.",
// };

const FAQS = [
  {
    q: "What time is check-in?",
    a: "Check-in is from 3 PM. Early check-in subject to availability.",
  },
  { q: "Is breakfast included?", a: "Yes, all bookings include our continental breakfast buffet." },
  { q: "Can I cancel my booking?", a: "Free cancellation up to 24 hours before arrival." },
  {
    q: "Do you offer airport transfer?",
    a: "Yes—we offer paid airport pickup and drop-off services.",
  },
];

export default function FAQPage() {
  return (
    <motion.div
      className="container mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="space-y-4 max-w-2xl mx-auto">
        {FAQS.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-lg">{f.q}</AccordionTrigger>
            <AccordionContent className="text-gray-700">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
}
