"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import "../../public/css/style1.css";
import "../../public/css/style2.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      easing: 'ease', // default easing for AOS animations
    });
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
