

import { Footer, Header } from "@/components";
import { AuthHydrator, Toaster } from "@/components/ui";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Gloria_Hallelujah } from "next/font/google";
import { Toaster as HotToaster } from "react-hot-toast";
// import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { AuthProvider } from "../lib/mock-auth";
import "./globals.css";

const gloriaHallelujah = Gloria_Hallelujah({
  variable: "--font-gloria-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Montrose Signature – Luxury 5‑Star Booking in Lekki, Lagos",
  description:
    "Experience world‑class hospitality at Montrose Signature’s two Lekki branches. Book premium rooms, spa, fine dining, and more.",
  openGraph: {
    title: "Montrose Signature",
    description: "Experience world‑class hospitality at Montrose Signature’s two Lekki branches.",
    url: "https://www.montrosesignature.ng/",
    images: [
      {
        url: "https://www.montrosesignature.ng/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Montrose Signature Lobby",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Montrose Signature",
    description: "Experience world‑class hospitality at Montrose Signature’s two Lekki branches.",
    creator: "@MontroseSignature",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${gloriaHallelujah.variable} antialiased overflow-auto no-scrollbar`}
        suppressHydrationWarning
      >
        <AuthHydrator>
          <AuthProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
              <Toaster />
              <Header />
              <div className="container mx-auto pt-20">{children}</div>
              <HotToaster />
              <Footer />
            </ThemeProvider>
          </AuthProvider>
        </AuthHydrator>
      </body>
    </html>
  );
}
