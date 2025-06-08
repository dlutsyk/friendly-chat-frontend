import type { Metadata } from "next";
import "../src/styles/index.css";
import { MobileHeader } from "@components";

export const metadata: Metadata = {
  title: "Friendly Chat",
  description: "A friendly chat application built with Next.js",
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className="flex flex-col h-screen">
    <MobileHeader/>
    {children}
    </body>
    </html>
  );
}
