"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Room } from "@/types/app";

// export type RoomCardProps = {
//   id: string;
//   name: string;
//   images: string[];
//   price: number;
//   type: string;
//   rating: number;
//   amenities: string[];
//   location: string;
// };

export function RoomCard({
  id,
  name,
  images,
  price,
  type,
  rating,
  amenities,
  location,

}: Room) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="h-full flex flex-col border rounded-2xl overflow-hidden shadow-sm bg-white dark:bg-zinc-900 transition-all"
    >
      {/* image */}
      <div className="relative w-full aspect-[4/3]">
        <Image src={images[0]} alt={name} fill className="object-cover" />
        <span className="absolute top-2 left-2 bg-montrose-wine text-white text-xs font-semibold px-2 py-1 rounded-lg">
          {type.replace("_", " ")}
        </span>
      </div>

      {/* content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold truncate">{name}</h3>
          <span className="text-sm text-muted-foreground">⭐ {rating}</span>
        </div>

        <p className="text-sm text-muted-foreground truncate">{location}</p>

        <p className="font-bold text-primary mt-2">
          ₦{price.toLocaleString()} <span className="font-normal text-sm">/ night</span>
        </p>

        {/* <div className="flex flex-wrap gap-1 mt-2">
          {amenities.slice(0, 3).map((am) => (
            <span key={am} className="text-xs bg-gray-200 dark:bg-zinc-800 px-2 py-1 rounded-full">
              {am}
            </span>
          ))}
          {amenities.length > 3 && (
            <span className="text-xs text-montrose-wine ml-auto">+{amenities.length - 3}</span>
          )}
        </div> */}

        <div className="mt-auto">
          <Button asChild className="w-full mt-4">
            <Link href={`/apartments/${id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
