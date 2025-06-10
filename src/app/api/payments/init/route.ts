// app/api/payments/init/route.ts
import { NextResponse } from "next/server";
import { mockBookings, mockPaymentsInit } from "@/lib/mock-db";
import { v4 as uuid } from "uuid";

export async function POST(req: Request) {
  const { bookingId } = await req.json();
  const booking = mockBookings.find((b) => b.id === bookingId);
  if (!booking) return NextResponse.json({ error: "Booking not found" }, { status: 404 });

  // simulate generating a payment access code
  const accessCode = uuid();
  const publicKey = "pk_test_mockkey123";
  const amount =
    booking.extras.reduce(
      (sum, e) => sum + (e === "Breakfast" ? 5000 : e === "Airport Transfer" ? 10000 : 7000),
      0
    ) +
    ((new Date(booking.end).getTime() - new Date(booking.start).getTime()) /
      (1000 * 60 * 60 * 24)) *
      100000; // mock per-night price

  mockPaymentsInit[bookingId] = { publicKey, accessCode, amount };
  return NextResponse.json({ publicKey, accessCode, amount });
}
