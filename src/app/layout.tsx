import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    
    <html lang="en">
      <body>
      <main className="mx-auto min-h-screen pb-20 bg-black text-white max-w-md relative overflow-x-hidden">
        {children}
      </main>
      </body>
    </html>
  );
}
