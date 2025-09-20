// lib/mock-db.ts

import { Room } from "../generated/prisma";

// initial mock rooms (you can expand this)
export const mockRooms: Room[] = [
  {
    id: "1",
    name: "Presidential Executive Suite",
    images: ["/images/presidential-executive-suite.jpeg"],
    price: 250_000,
    type: "PRESIDENTIAL_EXEC_SUITE",
    rating: 4.5,
    amenities: ["WiFi 24/7", "Gym", "Swimming Pool", "Parking"],
    description:
      "Experience luxury and comfort in our Deluxe Room, featuring modern amenities and stunning views. Perfect for relaxation and business.",
    isActive: true,
    isDeleted: false,
    isFeatured: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    reviews: 2,
  },
  {
    id: "2",
    name: "Premium Executive Suite (Lagoon View)",
    images: ["/images/premium-executive-suite-lagoon-view.jpeg"],
    price: 200_000,
    type: "PREMIUM_EXEC_SUITE_LAGOON",
    rating: 5,
    amenities: ["WiFi 24/7", "Meeting Room", "Parking"],
    description:
      "Experience luxury and comfort in our Deluxe Room, featuring modern amenities and stunning views. Perfect for relaxation and business.",
    isActive: true,
    isDeleted: false,
    isFeatured: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    reviews: 2,
  },
  {
    id: "3",
    name: "Royal Executive Suite (Lagoon View)",
    images: ["/images/royal-executive-suite.jpeg"],
    price: 220_000,
    type: "ROYAL_EXEC_SUITE_LAGOON",
    rating: 4.5,
    amenities: ["WiFi 24/7", "Gym", "Swimming Pool", "Parking"],
    description:
      "Experience luxury and comfort in our Deluxe Room, featuring modern amenities and stunning views. Perfect for relaxation and business.",
    isActive: true,
    isDeleted: false,
    isFeatured: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    reviews: 2,
  },
  {
    id: "4",
    name: "Twin Executive Suite (2 Beds)",
    images: ["/images/twin-executive-suite.jpeg"],
    price: 200_000,
    type: "TWIN_EXEC_SUITE_LAGOON",
    rating: 4.5,
    amenities: ["WiFi 24/7", "Gym", "Swimming Pool", "Parking"],
    description:
      "Experience luxury and comfort in our Deluxe Room, featuring modern amenities and stunning views. Perfect for relaxation and business.",
    isActive: true,
    isDeleted: false,
    isFeatured: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    reviews: 2,
  },
  {
    id: "5",
    name: "Royal Executive Suite",
    images: ["/images/royal-executive-suite.jpeg"],
    price: 150_000,
    type: "ROYAL_EXEC_SUITE",
    rating: 4.5,
    amenities: ["WiFi 24/7", "Gym", "Swimming Pool", "Parking"],
    description:
      "Experience luxury and comfort in our Executive Room, featuring modern amenities and stunning views. Perfect for relaxation and business.",
    isActive: true,
    isDeleted: false,
    isFeatured: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    reviews: 2,
  },
  {
    id: "6",
    name: "Executive Suite",
    images: ["/images/executive-suite.jpeg"],
    price: 100_000,
    type: "EXEC_SUITE",
    rating: 4.5,
    amenities: ["WiFi 24/7", "Gym", "Swimming Pool", "Parking"],
    description:
      "Experience luxury and comfort in our Executive Room, featuring modern amenities and stunning views. Perfect for relaxation and business.",
    isActive: true,
    isDeleted: false,
    isFeatured: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    reviews: 2,
  },
];

// in-memory bookings store
export type Booking = {
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
export const mockBookings: Booking[] = [];

// in-memory payments init data
export const mockPaymentsInit: Record<
  string,
  { publicKey: string; accessCode: string; amount: number }
> = {};
