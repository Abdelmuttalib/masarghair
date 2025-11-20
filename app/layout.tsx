import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Alexandria,
  IBM_Plex_Sans_Arabic,
} from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["arabic"],
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-sans-arabic",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "مسار غير",
  description: "مسار غير للخدمات التعليمية المتميزة",

  openGraph: {
    type: "website",

    locale: "ar",
    url: "https://masarghair.vercel.app/",
    title: "مسار غير",
    description: "مسار غير للخدمات التعليمية المتميزة",
    images: [
      {
        url: "https://masarghair.vercel.app/og.webp",
        width: 1200,
        height: 630,
        alt: "مسار غير",
      },
    ],
    siteName: "مسار غير",
  },
  // favicon: "./favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/masarghair.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/masarghair.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${alexandria.variable} ${ibmPlexSansArabic.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
