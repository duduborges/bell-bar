import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bell Bar | Bay City's Classic Neighborhood Pub Since 1950",
  description:
    "Bay City's beloved corner bar since 1950. Ice-cold $1.50 pints, legendary Bloody Marys, pool, darts, and the friendliest atmosphere in town. Open daily at 7AM. 1314 Columbus Ave, Bay City, MI.",
  keywords: [
    "Bell Bar",
    "Bay City bar",
    "dive bar Michigan",
    "cheap drinks Bay City",
    "pub Bay City MI",
    "Bloody Mary Bay City",
    "neighborhood bar",
  ],
  openGraph: {
    title: "Bell Bar | Bay City's Classic Neighborhood Pub",
    description:
      "Ice-cold $1.50 pints, legendary Bloody Marys, and the friendliest atmosphere in Bay City since 1950.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
