

import { Footer, Header, WhatsAppWidget } from "@/components";
import { AuthHydrator, Toaster } from "@/components/ui";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Gloria_Hallelujah } from "next/font/google";

// import { SessionContextProvider } from "@supabase/auth-helpers-react";
// import { AuthProvider } from "../lib/mock-auth";
import "./globals.css";
import { SupabaseProvider } from "./contexts";

const gloriaHallelujah = Gloria_Hallelujah({
  variable: "--font-gloria-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Montrose Signature – Luxury 5‑Star Apartments in Lekki, Lagos",
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
  other: {
    "p:domain_verify": "b2e4524ef2706402a08627c2774c514d",
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
        <SupabaseProvider>
          {/* <AuthHydrator> */}
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <Header />
            <div className="container mx-auto pt-20">{children}</div>
            <Footer />
            <WhatsAppWidget />
          </ThemeProvider>
          {/* </AuthHydrator> */}
        </SupabaseProvider>
        <Toaster
          position="top-center"
          swipeDirections={["top"]}
          // richColors
          // closeButton
          expand={false}
          visibleToasts={1}
        />
      </body>
    </html>
  );
}

// MontroseSignature25;
