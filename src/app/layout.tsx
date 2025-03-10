import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidenav } from "../components/Sidenav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark text-white`}
      >
        <main className="container mx-auto w-2xl mt-5">
          {/* Header */}
          <div className="flex items-center py-5 border">
            <h2 className="text-2xl font-bold mx-auto">Header</h2>
          </div>
          <section className="border-l border-r border-b flex">
            <Sidenav />
            <div className="flex-1">{children}</div>
          </section>
        </main>
      </body>
    </html>
  );
}
