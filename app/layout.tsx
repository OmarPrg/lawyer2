import type { Metadata } from "next";
import { Cairo, Montserrat } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["latin", "arabic"], variable: "--font-display" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-primary" });

export const metadata: Metadata = {
  title: "مكتب المحامي | Lawyer Firm",
  description: "خدمات قانونية متكاملة باحترافية وموثوقية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden w-full">{children}</body>
    </html>
  );
}
