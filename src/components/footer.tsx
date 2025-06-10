// components/Footer.tsx
"use client";

import Link from "next/link";
import { Input, Button } from "@/components/ui";
import { Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand & Description */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-montrose-red">Montrose Signature</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Discover the epitome of 5-star Montrose Lekki hospitality with first-rate facilities and
            experiences that will stay with you forever.
          </p>
          <div className="flex space-x-3 pt-2">
            <Link href="#" aria-label="Facebook" className="text-gray-500 hover:text-montrose-red">
              <Facebook size={20} />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-gray-500 hover:text-montrose-red">
              <Instagram size={20} />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-gray-500 hover:text-montrose-red">
              <Twitter size={20} />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-montrose-red">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:text-montrose-red">
                Home
              </Link>
            </li>
            <li>
              <Link href="/apartments" className="hover:text-montrose-red">
                Apartments
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-montrose-red">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-montrose-red">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-montrose-red">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <Link href="/privacy-policy" className="hover:text-montrose-red">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-montrose-red">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-montrose-red">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Stay in Touch</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Subscribe for exclusive offers, news, and travel inspiration.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // handle subscription…
            }}
            className="flex"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-3 text-gray-400" size={16} />
              <Input
                type="email"
                placeholder="you@example.com"
                aria-label="Email for newsletter"
                className="pl-10"
                required
              />
            </div>
            <Button type="submit" className="ml-2 bg-montrose-red hover:bg-montrose-wine">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-200 dark:border-zinc-700 mt-4 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-400 px-4">
          <p>© {new Date().getFullYear()} Montrose Signature. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Designed for luxury stays in Lekki, Lagos.</p>
        </div>
      </div>
    </footer>
  );
};
