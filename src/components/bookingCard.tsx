// components/BookingCard.tsx
"use client";

import Image from "next/image";
import { format } from "date-fns";
import { StatusBadge, Status } from "@/components/statusBadge";
import { motion } from "framer-motion";
import { slideInUp } from "@/lib/animations";
import { Booking, Room } from "@prisma/client";


export type BookingWithRoom = Booking & {
  room: Room;
};


export const BookingCard = ({ booking }: { booking: BookingWithRoom }) => {
  const { id, checkIn, checkOut, totalPrice, status, room  } = booking;
  const from = format(new Date(checkIn), "MMM d, yyyy");
  const to = format(new Date(checkOut), "MMM d, yyyy");

  return (
    <motion.div
      variants={slideInUp}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.5 }}
      className="border rounded-2xl overflow-hidden shadow-sm bg-white dark:bg-zinc-900 flex flex-col md:flex-row"
      key={id}
    >
      <div className="relative w-full md:w-1/3 h-48 md:h-auto">
        <Image
          src={room.images[0]}
          alt={room.name}
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL={`${room.images[0]}-blur.jpg`}
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold">{room.name}</h3>
          <p className="text-sm text-gray-600">
            {from} — {to}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-montrose-red">
            ₦{totalPrice.toLocaleString()}
          </span>
          <StatusBadge status={status} />
        </div>
      </div>
    </motion.div>
  );
};
