// app/api/payments/verify/route.ts
import { NextResponse } from "next/server";
import { mockBookings, mockPaymentsInit } from "@/lib/mock-db";

export async function POST(req: Request) {
  const { bookingId, reference } = await req.json();
  if (!mockPaymentsInit[bookingId] || mockPaymentsInit[bookingId].accessCode !== reference) {
    return NextResponse.json({ error: "Invalid reference" }, { status: 400 });
  }
  // mark paid
  const booking = mockBookings.find((b) => b.id === bookingId);
  if (booking) booking.paid = true;
  return NextResponse.json({ success: true });
}
