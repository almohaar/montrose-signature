"use client";

import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname()?.split("/").pop() || "signup";

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left: Hero image + overlay + tagline */}
      <motion.div
        className="relative hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/bg-000.jpg"
          alt="Montrose luxury hotel"
          fill
          className="object-cover"
        />
        {/* dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
        {/* Tagline */}
        <motion.div
          className="absolute bottom-16 left-8 text-white max-w-xs"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-4xl font-bold">Join Montrose Elite</h1>
          <p className="mt-2 text-lg">
            Create your account and unlock exclusive luxury experiences in Lekki.
          </p>
        </motion.div>
      </motion.div>

      {/* Right: Form panel */}
      <motion.div
        className="flex items-center justify-center p-8 bg-gray-50"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-lg">
          {/* Simple nav toggles */}
          {/* <div className="flex justify-center space-x-4 mb-8">
            <Link
              href="/auth/signin"
              className={`px-4 py-2 rounded-full font-medium ${
                path.endsWith("signin")
                  ? "bg-montrose-red text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className={`px-4 py-2 rounded-full font-medium ${
                path.endsWith("signup")
                  ? "bg-montrose-red text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              Sign Up
            </Link>
          </div> */}

          {/* Form */}
          {children}
        </div>
      </motion.div>
    </div>
  );
}
