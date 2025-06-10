"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review:
      "My stay at Montrose was absolutely wonderful. The service was exceptional, and the suite was pure luxury!",
    position: "Business Executive",
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "A truly world-class experience. The staff were incredibly accommodating and the spa treatments were top-notch.",
    position: "Travel Blogger",
  },
  {
    id: 3,
    name: "Michael Johnson",
    review:
      "Montrose exceeded my expectations. The infinity pool and fine dining options were highlights of my stay.",
    position: "Entrepreneur",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () =>
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );

  const prevTestimonial = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-montrose-wine text-center mb-10"
        >
          Guest Testimonials
        </motion.h2>
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 md:left-8 p-2 bg-montrose-wine text-white rounded-full shadow-md hover:bg-montrose-dark transition"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="w-full max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[currentIndex].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="text-center p-6 bg-white shadow-lg rounded-xl"
              >
                <p className="text-lg text-gray-800 leading-relaxed">
                  "{testimonials[currentIndex].review}"
                </p>
                <h3 className="mt-4 text-xl font-semibold text-montrose-wine">
                  {testimonials[currentIndex].name}
                </h3>
                <span className="text-gray-500 text-sm">
                  {testimonials[currentIndex].position}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextTestimonial}
            className="absolute right-4 md:right-8 p-2 bg-montrose-wine text-white rounded-full shadow-md hover:bg-montrose-dark transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <motion.span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index
                  ? "bg-montrose-wine"
                  : "bg-gray-300 hover:bg-gray-400"
              } cursor-pointer`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Testimonials };
