import { Booking, Room } from "@/types/app";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface RoomsState {
  rooms: Room[];
  searchQuery: string;
  filter: {
    priceRange: [number, number];
    rating: number | null;
    type: string | null;
    amenities: string[];
  };
  sort: "priceAsc" | "priceDesc" | "ratingDesc" | null;
  setSearchQuery: (query: string) => void;
  setFilter: (filter: Partial<RoomsState["filter"]>) => void;
  setSort: (sort: RoomsState["sort"]) => void;
  setRooms: (rooms: Room[]) => void;
  isAvailable: (roomId: string, start: Date, end: Date) => boolean;
  bookRoom: (roomId: string, start: Date, end: Date) => boolean;
}

const useRoomsStore = create<RoomsState>()(
  persist(
    (set, get) => ({
      rooms: [],
      searchQuery: "",
      filter: {
        priceRange: [0, 1000],
        rating: null,
        type: null,
        amenities: [],
      },
      sort: null,

      setSearchQuery: (query) => set({ searchQuery: query }),
      setFilter: (filter) =>
        set((state) => ({
          filter: { ...state.filter, ...filter },
        })),
      setSort: (sort) => set({ sort }),
      setRooms: (rooms) => set({ rooms }),

      isAvailable: (roomId, start, end) => {
        const room = get().rooms.find((r) => r.id === roomId);
        if (!room) return false;
        return !room.bookings?.some(
          (b) => start < new Date(b.checkOut) && end > new Date(b.checkIn)
        );
      },

      bookRoom: (roomId, start, end) => {
        if (!get().isAvailable(roomId, start, end)) return false;

        const rooms = [...get().rooms];
        const idx = rooms.findIndex((r) => r.id === roomId);
        if (idx === -1) return false;

        const booking: Booking = {
          id: "",
          userId: "",
          roomId,
          guestName: "",
          guestEmail: "",
          guestPhone: "",
          extras: [],
          paid: false,
          checkIn: start.toISOString(),
          checkOut: end.toISOString(),
        };

        rooms[idx].bookings = rooms[idx].bookings || [];
        rooms[idx].bookings!.push(booking);

        set({ rooms });
        return true;
      },
    }),
    {
      name: "rooms-store",
      partialize: (state): Partial<RoomsState> => ({
        rooms: state.rooms,
      }),
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export { useRoomsStore };
