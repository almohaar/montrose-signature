import { notFound } from "next/navigation";
import {BookingForm, RoomSummaryCard} from "@/components";
import { fetcher } from "@/lib/api";
import Link from "next/link";
import { mockRooms } from "../../../lib/mock-db";

export default async function BookingPage({ params }: { params: Promise<{ roomId: string }> }) {
  // const { roomId } = await params;
  // let room: any;
  // try {
  //   room = await fetcher(`/api/rooms/${roomId}`);
  // } catch {
  //   notFound();
  // }
  const {roomId} = await params;

  const room = mockRooms.find((r) => r.id === roomId);
  if (!room) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-muted/50 py-10 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* LEFT: Room Summary (on desktop) */}
        <div className="hidden lg:block">
          <RoomSummaryCard room={room} />
        </div>

        {/* RIGHT: Booking Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Complete Your Booking</h1>
            <Link
              href={`/rooms/${room.id}`}
              className="text-sm text-muted-foreground hover:underline"
            >
              ← Back to room
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <BookingForm room={room} />
          </div>
        </div>
      </div>
    </div>
  );
}
