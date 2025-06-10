// components/BookingList.tsx
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface Booking {
  id: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  room: { id: string; name: string; price: number };
}

export function BookingList({ bookings }: { bookings: Booking[] }) {
  const router = useRouter();

  const handleCancel = async (id: string) => {
    if (!confirm("Cancel this booking?")) return;
    await fetch(`/api/bookings/${id}`, { method: "DELETE" });
    router.refresh(); // revalidate the page
  };

  if (bookings.length === 0) {
    return <p>You have no bookings yet.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Room</th>
            <th className="p-2 text-left">Dates</th>
            <th className="p-2 text-left">Booked On</th>
            <th className="p-2 text-left">Total (₦)</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => {
            const nights =
              (new Date(b.endDate).valueOf() - new Date(b.startDate).valueOf()) /
              (1000 * 60 * 60 * 24);
            const total = nights * b.room.price;
            return (
              <tr key={b.id} className="border-t">
                <td className="p-2">{b.room.name}</td>
                <td className="p-2">
                  {format(new Date(b.startDate), "MMM d, yyyy")} –{" "}
                  {format(new Date(b.endDate), "MMM d, yyyy")}
                </td>
                <td className="p-2">{format(new Date(b.createdAt), "MMM d, yyyy")}</td>
                <td className="p-2 font-semibold">₦{total.toLocaleString()}</td>
                <td className="p-2">
                  <Button size="sm" variant="destructive" onClick={() => handleCancel(b.id)}>
                    Cancel
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
