import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getUserFromToken } from "@/lib/auth";
import { getUpcomingBookings } from "@/lib/booking/createBooking";
import { formatDateRange } from "@/lib/custom-utils";
import Link from "next/link";
import { Badge } from "../../../components/ui";

export default async function DashboardPage() {
  const user = await getUserFromToken();

  if (!user) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Please sign in to view your dashboard</h1>
      </div>
    );
  }

  const bookings = user ? await getUpcomingBookings(user.id) : [];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Welcome back, {user?.name?.split(" ")[0] || "Guest"} 👋
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Here's a summary of your upcoming stays.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-4">Upcoming Bookings</h2>
        {bookings.length === 0 ? (
          <div className="text-sm text-muted-foreground">No upcoming bookings.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookings.map((booking) => (
              <Card key={booking.id} className="border-muted/40 hover:shadow-md transition">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold truncate">
                    {booking.room.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {formatDateRange(booking.checkIn, booking.checkOut)}
                  </p>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Status:</span>
                    <Badge variant={booking.paid ? "default" : "secondary"}>
                      {booking.paid ? "Paid" : "Pending"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Guests:</span>
                    <span>1</span> {/* Replace with actual guest count if available */}
                  </div>
                  <div className="pt-4">
                    <Link
                      href={`/dashboard/bookings/${booking.id}`}
                      className="text-primary font-medium hover:underline text-sm"
                    >
                      View details →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
