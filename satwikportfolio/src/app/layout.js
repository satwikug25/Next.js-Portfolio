import React from 'react';
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';


const inter = Inter({ subsets: ["latin"] });

const MotionNav = dynamic(() => import('../components/MotionNav'), { 
  ssr: false,
  loading: () => <div className="h-16 bg-transparent"></div> // Transparent placeholder
});

export const metadata = {
  title: "Satwik Mallajosyula's Portfolio",
  description: "Portfolio of Satwik Mallajosyula",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-b from-gray-900 to-black min-h-screen`}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
          <MotionNav />
        </header>
        <main className="flex min-h-screen flex-col items-center justify-between pt-20 p-0">
          {children}
        </main>
      </body>
    </html>
  );
}
