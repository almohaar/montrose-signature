// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { getUserFromToken } from "@/lib/auth";
// import { getUpcomingBookings } from "@/lib/booking/createBooking";
// import { formatDateRange } from "@/lib/custom-utils";
// import Link from "next/link";
// import { Badge } from "@/components/ui";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  // const user = await getUserFromToken();

  // if (!user) {
  //   return (
  //     <div className="text-center">
  //       <h1 className="text-2xl font-semibold">Please sign in to view your dashboard</h1>
  //     </div>
  //   );
  // }

  const bookings = [{}];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        {/* <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Welcome back, {user?.name?.split(" ")[0] || "Guest"} 👋
        </h1> */}
        <p className="text-muted-foreground mt-1 text-sm">
          Here's a summary of your upcoming stays.
        </p>
      </div>
    </div>
  );
}
