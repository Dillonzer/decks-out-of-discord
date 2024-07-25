import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AzulGG's Decks out of Discord",
  description: "Used for Azul's Deck's out of Discord",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="p-10">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
