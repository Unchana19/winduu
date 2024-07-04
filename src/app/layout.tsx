import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import NavbarComponent from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Winduu",
  description: "window 11 free!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto max-w-6xl">
          <Providers>
            <NavbarComponent />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
