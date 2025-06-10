// app/error.tsx
"use client";

import { useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  // log to monitoring
  useEffect(() => {
    console.error("Error boundary caught:", error);
  }, [error]);

  return (
    <motion.main
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="text-center space-y-6">
        <AlertCircle size={64} className="mx-auto text-montrose-red" />
        <h1 className="text-3xl font-bold">Something went wrong</h1>
        <p className="text-gray-600">An unexpected error occurred. Please try again.</p>
        <div className="flex space-x-4">
          <Button onClick={() => reset()} className="bg-montrose-red text-white">
            Retry
          </Button>
          <Button asChild variant="outline">
            <a href="/" className="text-montrose-red">
              Home
            </a>
          </Button>
        </div>
      </div>
    </motion.main>
  );
}
