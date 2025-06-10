// lib/stores/bookingStore.ts
import { User } from "@prisma/client";
import { create } from "zustand";

// interface GuestInfo {
//   name: string;
//   email: string;
//   phone: string;
// }
export interface BookingData {
  roomId: string;
  dates: { start: Date; end: Date } | null;
  guest: User | null;
  extras: string[];
}

interface BookingState extends BookingData {
  setDates: (dates: BookingData["dates"]) => void;
  setGuest: (g: User) => void;
  setExtras: (xs: string[]) => void;
  reset: () => void;
}

 const useBookingStore = create<BookingState>((set) => ({
   roomId: "",
   dates: null,
   guest: null,
   extras: [],
   setDates: (dates) => set({ dates }),
   setGuest: (guest) => set({ guest }),
   setExtras: (extras) => set({ extras }),
   reset: () => set({ dates: null, guest: null, extras: [] }),
 }));

export { useBookingStore };

