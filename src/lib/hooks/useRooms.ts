import { fetcher } from "@/lib/api";
import { Room } from "@prisma/client";
import useSWR from "swr";

function coerceStringArray(val: unknown): string[] {
  // @typescript-eslint/no-explicit-any
  return Array.isArray(val) ? (val as any) : [];
}

function normalizeType(raw: unknown): Room["type"] {
  if (typeof raw !== "string") return "DELUXE"; // fallback
  // replace spaces with underscore, uppercase
  const t = raw.replace(/\s+/g, "_").toUpperCase();
  // guard: only valid enum keys
  if (["DELUXE", "EXECUTIVE", "JUNIOR_SUITES", "EXECUTIVE_SUITES"].includes(t)) {
    return t as Room["type"];
  }
  return "DELUXE";
}

export function useRooms() {
  const { data, error, isValidating } = useSWR<Room[]>("/api/rooms", fetcher);

  const rooms: Room[] = (data ?? []).map((r) => ({
    id: r.id,
    name: r.name,
    type: r.type,
    price: r.price,
    amenities: r.amenities,
    images: coerceStringArray(r.images),
    rating: r.rating, // default until you fetch real ratings
    location: "Lekki, Lagos",
    description: r.description,
    // bookings: r.bookings ?? [],
    reviews: r.reviews ?? [],
    isActive: r.isActive,
    isDeleted: r.isDeleted,
    isFeatured: r.isFeatured,
    createdAt: r.createdAt,
    updatedAt: r.updatedAt,
  }));

  return {
    rooms,
    isLoading: !error && !data,
    isError: !!error,
    isValidating,
  };
}

export function useRoom(id: string) {
  const { data, error, isValidating } = useSWR<Room>(`/api/rooms/${id}`, fetcher);

  const room = data
    ? {
        id: data.id,
        name: data.name,
        type: data.type,
        price: data.price,
        amenities: data.amenities,
        images: coerceStringArray(data.images),
        rating: data.rating, // default until you fetch real ratings
        location: "Lekki, Lagos",
        description: data.description,
        // bookings: data.bookings ?? [],
        reviews: data.reviews ?? [],
        isActive: data.isActive,
        isDeleted: data.isDeleted,
        isFeatured: data.isFeatured,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      }
    : null;

  console.log("room", room);

  return {
    room,
    isLoading: !error && !data,
    isError: !!error,
    isValidating,
  };
}

export function useRoomImages(id: string) {
  const { data, error, isValidating } = useSWR<string[]>(`/api/rooms/${id}/images`, fetcher);
  return {
    images: data,
    isLoading: !error && !data,
    isError: !!error,
    isValidating,
  };
}
export function useRoomAvailability(id: string) {
  const { data, error, isValidating } = useSWR<{ available: boolean }>(
    `/api/rooms/${id}/availability`,
    fetcher
  );
  return {
    available: data?.available,
    isLoading: !error && !data,
    isError: !!error,
    isValidating,
  };
}
export function useRoomBooking(id: string) {
  const { data, error, isValidating } = useSWR<{ booking: boolean }>(
    `/api/rooms/${id}/booking`,
    fetcher
  );
  return {
    booking: data?.booking,
    isLoading: !error && !data,
    isError: !!error,
    isValidating,
  };
}
export function useRoomReviews(id: string) {
  const { data, error, isValidating } = useSWR<{ reviews: string[] }>(
    `/api/rooms/${id}/reviews`,
    fetcher
  );
  return {
    reviews: data?.reviews,
    isLoading: !error && !data,
    isError: !!error,
    isValidating,
  };
}
export function useRoomRatings(id: string) {
  const { data, error, isValidating } = useSWR<{ ratings: number }>(
    `/api/rooms/${id}/ratings`,
    fetcher
  );
  return {
    ratings: data?.ratings,
    isLoading: !error && !data,
    isError: !!error,
    isValidating,
  };
}
export function useRoomAmenities(id: string) {
  const { data, error, isValidating } = useSWR<{ amenities: string[] }>(
    `/api/rooms/${id}/amenities`,
    fetcher
  );
  return {
    amenities: data?.amenities,
    isLoading: !error && !data,
    isError: !!error,
    isValidating,
  };
}
