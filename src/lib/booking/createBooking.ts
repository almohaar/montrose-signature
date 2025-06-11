// import { prisma } from "@/lib/prisma";
import { BookingStatus, PaymentStatus } from "@prisma/client";
import { mockRooms } from "../mock-db";

async function createBooking(
  userId: string,
  {
    roomId,
    dates,
    extras,
  }: {
    roomId: string;
    dates: { start: string; end: string }; // ISO strings from client
    extras: string[];
  }
) {
  const checkIn = new Date(dates.start);
  const checkOut = new Date(dates.end);

  if (checkOut <= checkIn) {
    return { success: false, message: "Check-out must be after check-in" };
  }

  const room = mockRooms.find((r) => r.id === roomId);
  if (!room) return { success: false, message: "Room not found" };

  // 🔒 make sure the room is free in that range
  // const overlapping = await prisma.booking.findFirst({
  //   where: {
  //     roomId,
  //     status: { in: [BookingStatus.PENDING, BookingStatus.CONFIRMED] },
  //     checkIn: { lte: checkOut },
  //     checkOut: { gte: checkIn },
  //   },
  // });
  // if (overlapping) return { success: false, message: "Room unavailable on selected dates" };

  // nights (rounded up)
  const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / 86_400_000);
  const totalPrice = nights * room.price; // add extras pricing later if needed

  // const booking = await prisma.booking.create({
  //   data: {
  //     userId,
  //     roomId,
  //     checkIn,
  //     checkOut,
  //     totalPrice,
  //     extras,
  //     guestName: "", // can be filled later or from user profile
  //     guestEmail: "",
  //     guestPhone: "",
  //     paymentMethod: "CREDIT_CARD",
  //     paymentStatus: PaymentStatus.PENDING,
  //     status: BookingStatus.PENDING,
  //   },
  // });

  return { success: true };
}

async function getUpcomingBookings(userId: string) {
  const bookings = [{ msg: "Mock booking data" }]; // Replace with actual DB query

  return bookings;
}

export { createBooking, getUpcomingBookings };
