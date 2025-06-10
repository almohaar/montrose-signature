// lib/mock-db.ts
import { Room } from "@prisma/client";
import { v4 as uuid } from "uuid";




// initial mock rooms (you can expand this)
export const mockRooms: Room[] = [
  {
    name: "Deluxe Room",
    images: ["/images/card-deluxe-003.jpg"],
    price: 60_000,
    type: "DELUXE",
    rating: 4.5,
    amenities: ["WiFi 24/7", "Gym", "Swimming Pool", "Parking"],
    description:
      "Experience luxury and comfort in our Deluxe Room, featuring modern amenities and stunning views. Perfect for relaxation and business.",
  },
  {
    id: "2",
    name: "Deluxe Room",
    images: ["/images/card-executivesuite-002.jpg"],
    price: 60_000,
    type: "Deluxe",
    rating: 5,
    amenities: ["WiFi 24/7", "Meeting Room", "Parking"],
    location: "Lekki, Lagos",
    bookings: [],
    reviews: [],
    description:
      "Experience luxury and comfort in our Deluxe Room, featuring modern amenities and stunning views. Perfect for relaxation and business.",
  },
  {
    id: "3",
    name: "Deluxe Room",
    images: ["/images/card-deluxe-002.jpg"],
    price: 60000,
    type: "Deluxe",
    rating: 4.5,
    amenities: ["WiFi 24/7", "Gym", "Swimming Pool", "Parking"],
    location: "Lekki, Lagos",
    bookings: [],
    reviews: [],
    description:
      "Experience luxury and comfort in our Deluxe Room, featuring modern amenities and stunning views. Perfect for relaxation and business.",
  },
  {
    id: "4",
    name: "Deluxe Room",
    images: ["/images/card-deluxe-002.jpg"],
    price: 60000,
    type: "Deluxe",
    rating: 4.5,
    amenities: ["WiFi 24/7", "Gym", "Swimming Pool", "Parking"],
    location: "Lekki, Lagos",
    bookings: [],
    reviews: [],
    description:
      "Experience luxury and comfort in our Deluxe Room, featuring modern amenities and stunning views. Perfect for relaxation and business.",
  },
  {
    id: "5",
    name: "Executive Room",
    images: ["/images/executive-room-01.jpeg"],
    price: 80000,
    type: "Executive",
    rating: 4.5,
    amenities: ["WiFi 24/7", "Gym", "Swimming Pool", "Parking"],
    location: "Lekki, Lagos",
    bookings: [],
    reviews: [],
    description:
      "Experience luxury and comfort in our Executive Room, featuring modern amenities and stunning views. Perfect for relaxation and business.",
  },
  {
    id: "6",
    name: "Executive Room",
    images: ["/images/executive-room-02.jpeg"],
    price: 80000,
    type: "Executive",
    rating: 4.5,
    amenities: ["WiFi 24/7", "Gym", "Swimming Pool", "Parking"],
    location: "Lekki, Lagos",
    bookings: [],
    reviews: [],
    description:
      "Experience luxury and comfort in our Executive Room, featuring modern amenities and stunning views. Perfect for relaxation and business.",
  },
  {
    id: "7",
    name: "Executive Room",
    images: ["/images/executive-room-03.jpeg"],
    price: 80000,
    type: "Executive",
    rating: 4.5,
    amenities: ["WiFi 24/7", "Gym", "Swimming Pool", "Parking"],
    location: "Lekki, Lagos",
    bookings: [],
    reviews: [],
    description:
      "Experience luxury and comfort in our Executive Room, featuring modern amenities and stunning views. Perfect for relaxation and business.",
  },
  {
    id: "8",
    name: "Executive Room",
    images: ["/images/executive-room-04.jpeg"],
    price: 80000,
    type: "Executive",
    rating: 4.5,
    amenities: ["WiFi 24/7", "Gym", "Swimming Pool", "Parking"],
    location: "Lekki, Lagos",
    bookings: [],
    reviews: [],
    description:
      "Experience luxury and comfort in our Executive Room, featuring modern amenities and stunning views. Perfect for relaxation and business.",
  },
  {
    id: "9",
    name: "Executive Room",
    images: ["/images/executive-room-05.jpeg"],
    price: 80000,
    type: "Executive",
    rating: 4.5,
    amenities: ["WiFi 24/7", "Gym", "Swimming Pool", "Parking"],
    location: "Lekki, Lagos",
    bookings: [],
    reviews: [],
    description:
      "Experience luxury and comfort in our Executive Room, featuring modern amenities and stunning views. Perfect for relaxation and business.",
  },
  {
    id: "10",
    name: "Excutive Room",
    images: ["/images/executive-room-06.jpeg"],
    price: 80000,
    type: "Executive",
    rating: 4.5,
    amenities: ["WiFi 24/7", "Gym", "Swimming Pool", "Parking"],
    location: "Lekki, Lagos",
    bookings: [],
    reviews: [],
    description:
      "Experience luxury and comfort in our Executive Room, featuring modern amenities and stunning views. Perfect for relaxation and business.",
  },
  {
    id: "11",
    name: "Executive Room",
    images: ["/images/executive-room-07.jpeg"],
    price: 80000,
    type: "Executive",
    rating: 4.5,
    amenities: ["WiFi 24/7", "Gym", "Swimming Pool", "Parking"],
    location: "Lekki, Lagos",
    bookings: [],
    reviews: [],
    description:
      "Experience luxury and comfort in our Executive Room, featuring modern amenities and stunning views. Perfect for relaxation and business.",
  },
  {
    id: "12",
    name: "Junior Suite",
    images: ["/images/junior-suite-02.jpeg"],
    price: 100000,
    type: "Junior Suites",
    rating: 4.5,
    amenities: ["WiFi 24/7", "Gym", "Swimming Pool", "Parking"],
    location: "Lekki, Lagos",
    bookings: [],
    reviews: [],
    description:
      "Experience luxury and comfort in our Junior Suite, featuring modern amenities and stunning views. Perfect for relaxation and business.",
  },
  {
    id: "13",
    name: "Junior Suite",
    images: ["/images/junior-suite-03.jpeg"],
    price: 100000,
    type: "Junior Suites",
    rating: 4.5,
    amenities: ["WiFi 24/7", "Gym", "Swimming Pool", "Parking"],
    location: "Lekki, Lagos",
    bookings: [],
    reviews: [],
    description:
      "Experience luxury and comfort in our Junior Suite, featuring modern amenities and stunning views. Perfect for relaxation and business.",
  },
  {
    id: "14",
    name: "Junior Suite",
    images: ["/images/junior-suite-04.jpeg"],
    price: 100000,
    type: "Junior Suites",
    rating: 4.5,
    amenities: ["WiFi 24/7", "Gym", "Swimming Pool", "Parking"],
    location: "Lekki, Lagos",
    bookings: [],
    reviews: [],
    description:
      "Experience luxury and comfort in our Junior Suite, featuring modern amenities and stunning views. Perfect for relaxation and business.",
  },
  {
    id: "15",
    name: "Junior Suite",
    images: ["/images/junior-suite-05.jpeg"],
    price: 100000,
    type: "Junior Suites",
    rating: 4.5,
    amenities: ["WiFi 24/7", "Gym", "Swimming Pool", "Parking"],
    location: "Lekki, Lagos",
    bookings: [],
    reviews: [],
    description:
      "Experience luxury and comfort in our Junior Suite, featuring modern amenities and stunning views. Perfect for relaxation and business.",
  },
  {
    id: "16",
    name: "Junior Suite",
    images: ["/images/junior-suite-02.jpeg"],
    price: 100000,
    type: "Junior Suites",
    rating: 4.5,
    amenities: ["WiFi 24/7", "Gym", "Swimming Pool", "Parking"],
    location: "Lekki, Lagos",
    bookings: [],
    reviews: [],
    description:
      "Experience luxury and comfort in our Junior Suite, featuring modern amenities and stunning views. Perfect for relaxation and business.",
  },
  {
    id: "17",
    name: "Executive Suite",
    images: ["/images/card-deluxe-002.jpg"],
    price: 120000,
    type: "Executive Suites",
    rating: 4.5,
    amenities: ["WiFi 24/7", "Gym", "Swimming Pool", "Parking"],
    location: "Lekki, Lagos",
    bookings: [],
    reviews: [],
    description:
      "Experience luxury and comfort in our Executive Suite, featuring modern amenities and stunning views. Perfect for relaxation and business.",
  },
  {
    id: "18",
    name: "Executive Suite",
    images: ["/images/card-deluxe-002.jpg"],
    price: 120000,
    type: "Executive Suites",
    rating: 4.5,
    amenities: ["WiFi 24/7", "Gym", "Swimming Pool", "Parking"],
    location: "Lekki, Lagos",
    bookings: [],
    reviews: [],
    description:
      "Experience luxury and comfort in our Executive Suite, featuring modern amenities and stunning views. Perfect for relaxation and business.",
  },
  {
    id: "19",
    name: "Executive Room",
    images: ["/images/executive-room-08.jpeg"],
    price: 80000,
    type: "Executive",
    rating: 4.5,
    amenities: ["WiFi 24/7", "Gym", "Swimming Pool", "Parking"],
    location: "Lekki, Lagos",
    bookings: [],
    reviews: [],
    description:
      "Experience luxury and comfort in our Executive Room, featuring modern amenities and stunning views. Perfect for relaxation and business.",
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
