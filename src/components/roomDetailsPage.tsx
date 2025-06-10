// components/room/RoomDetailsPage.tsx
"use client";

import { useRoom } from "@/lib/hooks/useRooms";
import { LoadingSpinner } from "@/components";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { RoomDetails } from "@/components";

function RoomDetailsPage({ roomId }: { roomId: string }) {
  const { room, isLoading, isError } = useRoom(roomId);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient && !isLoading && !room) {
    notFound();
  }

  if (isClient && isError) {
    return <div className="container mx-auto py-10 text-center">Unable to load room details</div>;
  }

  if (isLoading || !room) {
    return <LoadingSpinner />;
  }

  return <RoomDetails room={room} />;
}

export { RoomDetailsPage };
