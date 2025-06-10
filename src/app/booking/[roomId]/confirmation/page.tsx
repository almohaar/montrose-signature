"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Booking = {
  id: string;
  roomId: string;
  start: string;
  end: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  extras: string[];
  paid?: boolean;
};

export default function BookingConfirmationPage() {
  const params = useSearchParams();
  const bookingId = params.get("bookingId")!;
  const router = useRouter();

  const [booking, setBooking] = useState<Booking | null>(null);
  const [status, setStatus] = useState<"loading" | "error" | "ready">("loading");

  useEffect(() => {
    fetch(`/api/bookings/${bookingId}`)
      .then(async (res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((b: Booking) => {
        setBooking(b);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, [bookingId]);

  if (status === "loading") {
    return <p className="text-center mt-10">Loading your confirmation…</p>;
  }

  if (status === "error" || !booking) {
    return <p className="text-center mt-10 text-red-600">Booking not found.</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Booking Confirmed 🎉</h1>
      <div className="space-y-2 text-sm">
        <p>
          <strong>Booking ID:</strong> {booking.id}
        </p>
        <p>
          <strong>Check-in:</strong> {new Date(booking.start).toLocaleDateString()}
        </p>
        <p>
          <strong>Check-out:</strong> {new Date(booking.end).toLocaleDateString()}
        </p>
        <p>
          <strong>Name:</strong> {booking.guestName}
        </p>
        <p>
          <strong>Email:</strong> {booking.guestEmail}
        </p>
        <p>
          <strong>Phone:</strong> {booking.guestPhone}
        </p>
        <p>
          <strong>Extras:</strong> {booking.extras.length ? booking.extras.join(", ") : "None"}
        </p>
      </div>
      <Button
        className="mt-6 w-full bg-montrose-wine text-white"
        onClick={() => router.push(`/booking/${booking.roomId}/payment?bookingId=${booking.id}`)}
      >
        Proceed to Payment
      </Button>
    </div>
  );
}
