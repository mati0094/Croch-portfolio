import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Croch | Web Developer & Trader",
  description: "Web developer by day, disciplined trader by night. Building ultra-fast, conversion-focused websites while navigating the markets with clinical precision.",
  keywords: ["portfolio", "web developer", "Next.js", "trading", "WordPress"],
  openGraph: {
    title: "Croch | Web Developer & Trader",
    description: "Web developer by day, disciplined trader by night. Building ultra-fast, conversion-focused websites while navigating the markets with clinical precision.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Croch | Web Developer & Trader",
    description: "Web developer by day, disciplined trader by night. Building ultra-fast, conversion-focused websites while navigating the markets with clinical precision.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#070A12] text-zinc-100">{children}</body>
    </html>
  );
}