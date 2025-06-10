"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
// import { DateRange } from "react-day-picker";

const images = ["/images/bg-001.jpg", "/images/bg-002.jpg", "/images/bg-003.jpg"];

const Hero = () => {
  // const [date, setDate] = useState<DateRange | undefined>();
  const [roomType, setRoomType] = useState<string>("All");
  const [guests, setGuests] = useState<number>(1);
  const [priceRange, setPriceRange] = useState<string>("Any");
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const iv = setInterval(() => setCurrentImage((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(iv);
  }, []);

  const nextSlide = () => setCurrentImage((i) => (i + 1) % images.length);
  const prevSlide = () => setCurrentImage((i) => (i === 0 ? images.length - 1 : i - 1));

  return (
    <section className="relative w-full h-[700px] overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt=""
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: i === currentImage ? 1 : 0,
              scale: i === currentImage ? 1 : 1.1,
            }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full"
      >
        <ChevronLeft className="text-white cursor-pointer" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full"
      >
        <ChevronRight className="text-white" size={24} />
      </button>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-2xl"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Experience Luxury at <span className="text-montrose-wine">Montrose</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-6 font-semibold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A sanctuary of elegance and comfort in the heart of Lagos.
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              asChild
              className="px-6 py-3 font-semibold bg-montrose-wine text-white rounded-full shadow-lg"
              size="lg"
            >
              <a href="/rooms">Explore Rooms</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-6 py-3 font-semibold text-montrose-wine border-white rounded-full shadow-lg"
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`w-3 h-3 rounded-full ${i === currentImage ? "bg-montrose-wine" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
};

export { Hero };

