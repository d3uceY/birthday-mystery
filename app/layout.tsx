import type { Metadata } from "next";
import { Gloria_Hallelujah } from "next/font/google";
import { Just_Another_Hand } from "next/font/google";
import "./globals.css";


const gloriaHallelujah = Gloria_Hallelujah({
  variable: "--font-gloria-hallelujah",
  subsets: ["latin"],
  weight: "400",
});

const justAnotherHand = Just_Another_Hand({
  variable: "--font-just-another-hand",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Happy birthday to Jesse",
  description: "Happy birthday to Jesse, solve the mystery to get your prize",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gloriaHallelujah.variable} ${justAnotherHand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
