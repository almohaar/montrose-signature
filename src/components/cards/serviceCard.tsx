// components/ServiceCard.tsx
"use client";
import { Card, CardTitle, CardContent } from "@/components/ui";
import { motion } from "framer-motion";
import Image from "next/image";
import { Service } from "@/lib/mock-data";

export function ServiceCard({ id, title, description, image }: Service) {
  return (
    <motion.div
      className="w-full p-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Card className="h-full flex flex-col">
        <div className="relative w-full h-48 sm:h-56 md:h-48 lg:h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <CardContent className="flex-grow p-4 flex flex-col">
          <CardTitle className="text-xl mb-2">{title}</CardTitle>
          <p className="text-sm text-gray-600 flex-grow">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
