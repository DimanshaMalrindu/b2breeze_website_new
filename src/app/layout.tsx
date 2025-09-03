import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { Suspense } from "react";
import Script from "next/script";
import EngagementTracking from "@/components/EngagementTracking";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B2Breeze — All‑in‑one business toolkit (OCR, CRM, tasks, invoices)",
  description:
    "B2Breeze helps you capture contacts, organize work, and move faster — with a business card scanner, wallet, directory, tasks, campaigns, invoices, analytics, and a conversation recorder.",
  applicationName: "B2Breeze",
  metadataBase: new URL("https://example.com"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "B2Breeze — All‑in‑one business toolkit",
    description:
      "Capture, organize, and act — Scanner, Wallet, Directory, Tasks, Campaigns, Invoices, Analytics, and Recorder.",
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
      <head>
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} 
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { send_page_view: false });
              `}
            </Script>
          </>
        ) : null}
        {process.env.NEXT_PUBLIC_GSC_VERIFICATION ? (
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GSC_VERIFICATION}
          />
        ) : null}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base text-foreground`}>
        {/* Pageview + lightweight engagement trackers */}
        <Suspense fallback={null}>
          <EngagementTracking />
        </Suspense>
        <SmoothScroll>
          <div className="relative min-h-dvh flex flex-col">
            <Suspense fallback={null}>
              <Navbar />
            </Suspense>
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
