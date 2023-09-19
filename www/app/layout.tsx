import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Footer } from "@/components";
const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Huez",
  description: "Automatic palette generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
