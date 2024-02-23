import { Mulish, Inter } from "next/font/google";
import 'swiper/css/bundle';
import "@/styles/globals.css";

import Navbar from "@/components/navbar";
import TopNavbar from "@/components/top-navbar";

const mulish = Mulish({
  display: "swap",
  styles: ["normal", "italic"],
  subsets: ["latin"],
  variable: '--font-mulish',
  weights: [400, 700, 800, 900],
});

const inter = Inter({
  display: "swap",
  styles: ["normal", "italic"],
  subsets: ["latin"],
  variable: '--font-inter',
  weights: [400, 500, 700],
});

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${mulish.variable} ${inter.variable}`}>
      <body className="text-normal font-mulish">
        <TopNavbar />
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
