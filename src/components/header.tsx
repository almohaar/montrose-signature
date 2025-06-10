// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUIStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";
import { useAuth } from "@/lib/mock-auth";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/apartments", label: "Apartments" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const { mobileMenuOpen, toggleMobileMenu } = useUIStore();
  const { user, signOut } = useAuth();
  console.log("user", user);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-montrose-red">
          Montrose Signature
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`pb-1 font-medium transition ${
                  active
                    ? "text-montrose-red border-b-2 border-montrose-red"
                    : "text-gray-700 hover:text-montrose-red"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        {/* <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-gray-800">Hello, {user.name}</span>
              <Button
                variant="outline"
                onClick={signOut}
                className="border-montrose-red text-montrose-red hover:bg-montrose-red hover:text-white"
              >
                Sign Out
              </Button>
            </>
          ) : (
            <Link href="/auth/sign-in">
              <Button className="bg-montrose-red text-white hover:bg-montrose-dark">Sign In</Button>
            </Link>
          )}
          <Link href="/dashboard">
            <Button className="bg-montrose-wine text-white hover:bg-montrose-red">
              My Account
            </Button>
          </Link>
        </div> */}

        {/* Mobile menu toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-700"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <nav
        className={`md:hidden bg-white border-t transition-max-h duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <ul className="space-y-2 px-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={toggleMobileMenu}
                className="block text-lg text-gray-800 py-2 hover:text-montrose-red"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            {user ? (
              <button
                onClick={() => {
                  signOut();
                  toggleMobileMenu();
                }}
                className="w-full text-left text-lg text-montrose-red py-2"
              >
                Sign Out
              </button>
            ) : (
              <Link href="/auth/sign-in" onClick={toggleMobileMenu}>
                <Button className="w-full bg-montrose-red text-white">Sign In</Button>
              </Link>
            )}
          </li>
          <li>
            <Link href="/dashboard" onClick={toggleMobileMenu}>
              <Button className="w-full bg-montrose-wine text-white">My Account</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
