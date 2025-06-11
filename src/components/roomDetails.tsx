// components/RoomDetailsClient.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { motion } from "framer-motion";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Calendar, Badge, Button
} from "@/components/ui";
import { ChartNoAxesColumnIncreasingIcon, Coffee, Tv, Car } from "lucide-react";
import { useRouter } from "next/navigation";
import { Room } from "@prisma/client";


export const RoomDetails = ({ room }: { room: Room }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);

  // calculate nights & total (stubbed 1 night)
  const nights = 1;
  const total = room.price * nights * guests;

  const router = useRouter()

  return (
    <motion.div
      className="container mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* LEFT COLUMN */}
      <div className="lg:col-span-2 flex flex-col space-y-6">
        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold">{room.name}</h1>
          <p className="text-montrose-wine uppercase font-medium">{room.type}</p>
        </div>

        {/* Gallery */}
        <Card className="p-0 overflow-hidden">
          <CardContent className="p-0">
            {/* Main Swiper */}
            <div className="relative w-full aspect-[4/3] md:aspect-video">
              <Swiper
                modules={[Navigation, Pagination, Thumbs]}
                navigation
                pagination={{ clickable: true }}
                thumbs={{ swiper: thumbsSwiper }}
                className="w-full h-full"
              >
                {room.images.map((src, i) => (
                  <SwiperSlide key={i} className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={`${room.name} image ${i + 1}`}
                      width={800}
                      height={600}
                      className="object-cover bg-blue-800"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Thumbnail strip */}
            <div className="overflow-x-auto py-2">
              <div className="flex space-x-2 px-2">
                {room.images.map((src, i) => (
                  <div
                    key={i}
                    className="relative w-24 h-16 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer border-2"
                    onClick={() => thumbsSwiper?.slideTo(i)}
                  >
                    <Image src={src} alt={`thumb ${i}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="border-b mb-4 grid grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="amenities">Amenities</TabsTrigger>
            <TabsTrigger value="policies">Policies</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="prose max-w-none">
            {room.description}
          </TabsContent>

          {/* <TabsContent value="amenities" className="flex flex-wrap gap-2">
            {room.amenities.map((am) => {
              let Icon = ChartNoAxesColumnIncreasingIcon;
              if (am === "coffee") Icon = Coffee;
              else if (am === "tv") Icon = Tv;
              else if (am === "parking") Icon = Car;
              return (
                <Badge key={am} variant="outline" className="flex items-center space-x-1">
                  <Icon size={16} />
                  <span className="capitalize">{am}</span>
                </Badge>
              );
            })}
          </TabsContent> */}

          <TabsContent value="policies">
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="checkin">
                <AccordionTrigger>Check-in / Check-out</AccordionTrigger>
                <AccordionContent>Check-in from 3 PM — Check-out by 12 PM.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="cancel">
                <AccordionTrigger>Cancellation</AccordionTrigger>
                <AccordionContent>
                  Free cancellation up to 24 hours before arrival.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>

      {/* RIGHT COLUMN */}
      <Card className="p-6 sticky top-20">
        <CardHeader className="border-b pb-4">
          <div className="flex justify-between items-baseline">
            <span className="text-2xl font-bold">₦{room.price.toLocaleString()}</span>
            <span className="text-sm text-muted-foreground">/ night</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Dates */}
          <div>
            <label className="block text-sm font-medium mb-1">Dates</label>
            <Calendar mode="range" className="w-full rounded-md border" />
          </div>

          {/* Guests & Rooms */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm mb-1">Guests</label>
              <Select onValueChange={(v) => setGuests(+v)} defaultValue="1">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={`${guests}`} />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4].map((n) => (
                    <SelectItem key={n} value={`${n}`}>
                      {n}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <label className="block text-sm mb-1">Rooms</label>
              <Select onValueChange={(v) => setRooms(+v)} defaultValue="1">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={`${rooms}`} />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3].map((n) => (
                    <SelectItem key={n} value={`${n}`}>
                      {n}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-between font-medium">
            <span>
              {nights} night{nights > 1 ? "s" : ""} × ₦{room.price.toLocaleString()}
            </span>
            <span>₦{total.toLocaleString()}</span>
          </div>

          <Button
            onClick={() => router.push(`/booking/${room.id}`)}
            size="lg"
            className="w-full bg-montrose-wine text-white"
          >
            Book Now
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
