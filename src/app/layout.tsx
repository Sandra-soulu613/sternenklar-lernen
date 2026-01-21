import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

// Load Google Fonts
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Free Walking Tour Kathmandu- Himkala Adventure",
  description: "Discover Kathmandu city with the first Walking Tour of Nepal/Kathmandu",
  icons: {
    icon: '/himkala-logo.png?v=3',
    shortcut: '/himkala-logo.png?v=3',
    apple: '/himkala-logo.png?v=3',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${playfairDisplay.variable}`}>
      <head>
        {/* Cache busting with version number */}
        <link rel="icon" href="/himkala-logo.png?v=4" type="image/png" />
        <link rel="shortcut icon" href="/himkala-logo.png?v=4" type="image/png" />
        <link rel="apple-touch-icon" href="/himkala-logo.png?v=4" />
        
        <Script
          id="orchids-browser-logs"
          strategy="afterInteractive"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          data-orchids-project-id="2dc0f335-cccb-4f57-b67b-42efbd3440c6"
        />
        <Script
          id="route-messenger"
          strategy="afterInteractive"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/route-messenger.js"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
      </head>
      <body className="antialiased font-sans">
        <ErrorReporter />
        {children}
      </body>
    </html>
  );
}