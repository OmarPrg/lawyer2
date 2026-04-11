import type { Metadata } from "next";
import { Cairo, Montserrat } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["latin", "arabic"], variable: "--font-display" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-primary" });

export const metadata: Metadata = {
  title: "مكتب المحامي | Lawyer Firm",
  description: "خدمات قانونية متكاملة باحترافية وموثوقية",
};

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlobalMouseFollow } from "@/components/ui/mouse-follow-animations";
import { Preloader } from "@/components/Preloader";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { ScrollProgress } from "@/components/ui/scroll-animations";
import { FloatingContact } from "@/components/FloatingContact";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${montserrat.variable} antialiased scroll-smooth`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col overflow-x-hidden w-full bg-[#131313]">
        <ScrollProgress />
        <Preloader />
        <GlobalMouseFollow />
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingContact />
        </SmoothScroll>
      </body>
    </html>
  );
}
