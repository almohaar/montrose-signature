import { create } from "zustand"

type BookingState = {
  step: number
  roomType: string | null
  guests: number
  guestDetails: {
    name: string
    email: string
    phone: string
  }
  setStep: (step: number) => void
  setRoomType: (roomType: string) => void
  setGuests: (guests: number) => void
  setGuestDetails: (details: BookingState['guestDetails']) => void
}

export const useBooking = create<BookingState>((set) => ({
  step: 1,
  roomType: null,
  guests: 1,
  guestDetails: {
    name: '',
    email: '',
    phone: ''
  },

  setStep: (step) => set({ step }),
  setRoomType: (roomType) => set({ roomType }),
  setGuests: (guests) => set({ guests }),
  setGuestDetails: (details) => set({ guestDetails: details })
}))
