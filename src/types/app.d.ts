import { RoomType } from "@prisma/client";

export type CustomRoom = {
  name: string;
  images: string[];
  price: number;
  type: RoomType
  rating: number;
  amenities: string[];
  description: string;
};

export type Booking = {
  id: string;
  userId: string;
  roomId: string;
  checkIn: DateTime;
  checkOut: DateTime;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  extras: string[];
  paid?: boolean;
};

type BookingState = {
  step: number;
  roomType: string | null;
  guests: number;
  guestDetails: {
    name: string;
    email: string;
    phone: string;
  };
  setStep: (step: number) => void;
  setRoomType: (roomType: string) => void;
  setGuests: (guests: number) => void;
  setGuestDetails: (details: BookingState["guestDetails"]) => void;
};


export { Room };
