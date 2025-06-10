"use client";

// app/not-found.tsx
import Link from "next/link";
import { Home } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <motion.main
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="text-center space-y-6">
        <Home size={64} className="mx-auto text-montrose-red" />
        <h1 className="text-4xl font-bold">Page Not Found</h1>
        <p className="text-gray-600">Oops, we can’t find the page you’re looking for.</p>
        <Button asChild className="bg-montrose-red text-white">
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </motion.main>
  );
}
