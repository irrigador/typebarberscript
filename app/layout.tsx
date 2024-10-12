import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Card, CardContent } from "@/components/ui/card";
import AuthProvider from "./_providers/auth";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
        <div className="flex flex-col h-full">
        <div className="flex-1"> {children} </div>
        <footer>
      <Card>
        <CardContent className="px-5 py-6">
      <p className="text-sm text-gray-400">
      2024 Copyright 
      </p>
        </CardContent>
      </Card>
      </footer>
        </div>
      </AuthProvider>
      </body>
    </html>
  );
}
