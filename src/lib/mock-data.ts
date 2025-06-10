// lib/mock-data.ts
import { Room } from "@prisma/client";
import { formatISO, addDays } from "date-fns";



export const rooms: Room[] = [
  {
    name: "Deluxe King Room",
    type: "DELUXE",
    price: 150000,
    description:
      "Enjoy city views from your king‐size bed, with premium linens, minibar, and a marble bathroom.",
    amenities: ["WiFi 24/7", "Gym", "Swimming Pool", "Parking"],
    images: ["/images/card-deluxe-002.jpg", "/images/card-deluxe-003.jpg", "/images/card-deluxe-004.jpg"],
    // rating: 4.5,

  },
  {
    id: "2",
    name: "Executive Suite",
    type: "executive",
    price: 250000,
    description: "Spacious suite with separate living area, jacuzzi tub, and ocean view balcony.",
    amenities: ["WiFi 24/7", "Mini Bar", "Jacuzzi", "Parking"],
    images: ["/images/card-executiveroom-002.jpg", "/images/card-executiveroom-003.jpg", "/images/card-executiveroom-004.jpg"],
    location: "Lekki, Lagos",
    rating: 4.8,
    reviews: [
      { user: "Carol", comment: "Exceptional service.", rating: 5 },
      { user: "Dave", comment: "A bit pricey but worth it.", rating: 4 },
    ],
  },
  {
    id: "3",
    name: "Junior Suite",
    type: "junior suites",
    price: 200000,
    description: "Cozy suite with king bed, work desk, and complimentary breakfast for two.",
    amenities: ["WiFi 24/7", "Breakfast", "Gym", "Parking"],
    images: ["/images/card-juniorsuite-002.jpg", "/images/card-juniorsuite-003.jpg", "/images/card-juniorsuite-004.jpg"],
    location: "Lekki, Lagos",
    rating: 4.3,
    reviews: [
      { user: "Eve", comment: "Great value!", rating: 4 },
      { user: "Frank", comment: "Lovely decor.", rating: 4 },
    ],
  },
  {
    id: "4",
    name: "Executive Family Suite",
    type: "executive suites",
    price: 350000,
    description:
      "Two-bedroom suite perfect for families, with living room, kitchenette and pool access.",
    amenities: ["WiFi 24/7", "Kitchenette", "Swimming Pool", "Parking"],
    images: ["/images/card-executivesuite-002.jpg", "/images/card-executivesuite-003.jpg", "/images/card-executivesuite-004.jpg"],
    location: "Lekki, Lagos",
    rating: 4.7,
    reviews: [
      { user: "Grace", comment: "Perfect for our family!", rating: 5 },
      { user: "Heidi", comment: "Spacious and clean.", rating: 5 },
    ],
  },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  image: string; // path to svg
};

export const services: Service[] = [
  {
    id: "s1",
    title: "Gym & Wellness",
    description: "Relax with our world-class spa treatments and sauna.",
    image: "/images/card-facilities-002.jpg",
  },
  {
    id: "s2",
    title: "Fine Dining",
    description: "Experience gourmet meals curated by our Michelin-trained chefs.",
    image: "/images/card-restaurant-003.jpg",
  },
  // {
  //   id: "s3",
  //   title: "Airport Transfer",
  //   description: "Luxury car pickups and drop-offs at any hour.",
  //   image: "/icons/car.svg",
  // },
  {
    id: "s4",
    title: "Conference Rooms",
    description: "High-tech meeting spaces for business events.",
    image: "/images/card-facilities-004.jpg",
  },
];

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  { id: "f1", question: "What is check-in time?", answer: "Check-in from 3 PM." },
  { id: "f2", question: "Is breakfast included?", answer: "Yes, complimentary buffet." },
  {
    id: "f3",
    question: "Can I cancel my booking?",
    answer: "Free cancellation up to 24h before arrival.",
  },
  { id: "f4", question: "Do you have airport transfer?", answer: "Yes, at extra cost." },
];

export type Booking = {
  id: string;
  roomId: string;
  startDate: string;
  endDate: string;
  guestName: string;
  guestEmail: string;
  extras: string[];
  paid: boolean;
};

export const bookings: Booking[] = [
  {
    id: "b1",
    roomId: "1",
    startDate: formatISO(new Date()),
    endDate: formatISO(addDays(new Date(), 2)),
    guestName: "Demo User",
    guestEmail: "demo@montrose.com",
    extras: ["Breakfast"],
    paid: true,
  },
];

export type User = {
  id: string;
  email: string;
  name: string;
};

export const users: User[] = [{ id: "u1", email: "demo@montrose.com", name: "Demo User" }];
