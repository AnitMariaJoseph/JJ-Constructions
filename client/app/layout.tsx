import type { Metadata } from "next"; //This imports type definitions for page metadata (title, description) — helpful for SEO and browser tabs.
import { Geist, Geist_Mono } from "next/font/google";  //using Next.js's optimized Google Fonts loader
import "./globals.css";  // Contains Tailwind’s base styles (and any custom CSS)
import Header from '@/components/Header';  //Reusable header/nav bar, shown on all pages
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "J & J Constructions",
  description: "Construction services Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans bg-white text-gray-900">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
