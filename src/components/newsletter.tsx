// components/NewsletterSection.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <motion.div
        className="max-w-md mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-gray-600 mb-6">
          Get exclusive deals, travel tips and the latest news from Montrose Signature.
        </p>
        {submitted ? (
          <p className="text-green-600">Thank you! Check your email for confirmation.</p>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
            />
            <Button type="submit" className="bg-montrose-red text-white">
              Subscribe
            </Button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
