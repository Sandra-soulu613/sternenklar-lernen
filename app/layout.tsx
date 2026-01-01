import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free Walking Tour Kathmandu",
  description: "Explore the magic of Kathmandu with Himkala Adventure",
  
  // Add favicon configuration here
  icons: {
    icon: [
      {
        url: '/images/himkala-logo.png',
        sizes: 'any', // Let browser handle sizing
        type: 'image/png',
      },
      // Alternative sizes for better quality
      {
        url: '/images/himkala-logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    // For Apple devices
    apple: {
      url: '/images/himkala-logo.png',
      sizes: '180x180',
      type: 'image/png',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* You can also add the traditional favicon link for older browsers */}
        <link rel="icon" href="/images/himkala-logo.png" type="image/png" />
        <link rel="shortcut icon" href="/images/himkala-logo.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}