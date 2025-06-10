import { mockBookings } from "@/lib/mock-db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const booking = mockBookings.find((x) => x.id === slug);

  if (!booking) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(booking);
}
// export async function DELETE(request: NextRequest, context: { params: { bookingId: string } }) {
//   const { bookingId } = context.params;

//   const index = mockBookings.findIndex((x) => x.id === bookingId);

//   if (index === -1) {
//     return NextResponse.json({ error: "Not found" }, { status: 404 });
//   }

//   mockBookings.splice(index, 1);

//   return NextResponse.json({ message: "Booking deleted successfully" }, { status: 200 });
// }
// export async function PATCH(request: NextRequest, context: { params: { bookingId: string } }) {
//   const { bookingId } = context.params;
//   const { paid } = await request.json();

//   const booking = mockBookings.find((x) => x.id === bookingId);

//   if (!booking) {
//     return NextResponse.json({ error: "Not found" }, { status: 404 });
//   }

//   booking.paid = paid;

//   return NextResponse.json(booking);
// }

// export async function POST(request: NextRequest) {
//   const { roomId, dates, guest, extras } = await request.json();

//   const booking = {
//     id: crypto.randomUUID(),
//     roomId,
//     start: dates.start,
//     end: dates.end,
//     guestName: guest.name,
//     guestEmail: guest.email,
//     guestPhone: guest.phone,
//     extras,
//     paid: false,
//   };
//   mockBookings.push(booking);
//   return NextResponse.json(booking, { status: 201 });
// }
