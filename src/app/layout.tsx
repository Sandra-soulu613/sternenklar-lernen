// app/layout.tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "sternenklar lernen | Lerncoaching & Psychotherapie in der Zentralschweiz",
  description: "Professionelles Lerncoaching, Psychotherapie, Elternberatung und Supervision für Lehrpersonen in der Zentralschweiz und Zürich. Sandra Andermatt, Nadezhda De Salvador & Natascha Zoller.",
  keywords: "Lerncoaching, Psychotherapie, Elternberatung, Supervision, Lehrpersonen, Kinder, Jugendliche, Erwachsene, Zentralschweiz, Zürich, Kriens, Widen",
  authors: [{ name: "Sandra Andermatt" }, { name: "Nadezhda De Salvador" }, { name: "Natascha Zoller" }],
  openGraph: {
    title: "sternenklar lernen | Lerncoaching & Psychotherapie",
    description: "Professionelles Lerncoaching, Psychotherapie, Elternberatung und Supervision für Lehrpersonen.",
    type: "website",
    locale: "de_CH",
    siteName: "sternenklar lernen",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console code here
  },
  alternates: {
    languages: {
      de: "/",
      en: "/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#4A7B6B" />
      </head>
      <body className={`${plusJakartaSans.variable} ${playfairDisplay.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}