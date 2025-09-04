"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppWidget() {
  const phoneNumber = "2349075228884"; // Your WhatsApp number with country code
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(checkMobile);
  }, []);

  const chatLink = `https://wa.me/${phoneNumber}`;

  if (isMobile) {
    // 📱 Mobile: Floating button that opens WhatsApp app
    return (
      <a
        href={chatLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    );
  }

  // 💻 Desktop: Expandable chat box
  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex items-center justify-between bg-green-500 text-white px-4 py-3">
            <h4 className="font-semibold">Chat with us</h4>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>
          <div className="p-4 text-gray-700">
            <p className="mb-3">Hi 👋, how can we help you today?</p>
            <a
              href={chatLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition"
            >
              Start Chat on WhatsApp Web
            </a>
          </div>
        </div>
      )}
    </>
  );
}
