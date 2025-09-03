import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B2Breeze — Futuristic B2B Web Experiences",
  description:
    "Build the next generation of B2B digital experiences with blazing-fast performance, premium aesthetics, and immersive interactions.",
  applicationName: "B2Breeze",
  metadataBase: new URL("https://example.com"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "B2Breeze — Futuristic B2B Web Experiences",
    description:
      "Build the next generation of B2B digital experiences with blazing-fast performance, premium aesthetics, and immersive interactions.",
    url: "https://example.com",
    siteName: "B2Breeze",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "B2Breeze",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0f1a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base text-foreground`}>
        <SmoothScroll>
          <div className="relative min-h-dvh flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
