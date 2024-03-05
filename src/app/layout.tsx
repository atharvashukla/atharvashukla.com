import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atharva Shukla",
  description: "Atharva Shukla's personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <div className="sm:pt-6 sm:pb-10">
          <Navbar />
          <div className="max-w-2xl px-4 py-10 m-auto bg-white sm:px-8 sm:shadow ring-1 ring-gray-200 sm:rounded-lg">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
