import { Inter } from "next/font/google";
import Link from 'next/link';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Satwik Mallajosyula's Portfolio",
  description: "Portfolio of Satwik Mallajosyula",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-800 p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <div className="text-white font-bold text-lg">
              <Link href="/">Satwik Mallajosyula</Link>
            </div>
            <ul className="flex space-x-4 text-white">
              <li><Link href="/" className="nav-link">Home</Link></li>
              <li><Link href="/resume" className="nav-link">Resume</Link></li>
              <li><Link href="/projects" className="nav-link">Projects</Link></li>
        
              <li><Link href="/experience" className="nav-link">Experience</Link></li>
              <li><Link href="/contact" className="nav-link">Contact</Link></li>
              <li><Link href="/blog" className="nav-link">Blog</Link></li>
            </ul>
          </nav>
        </header>
        <main className="flex min-h-screen flex-col items-center justify-between p-12">
          {children}
        </main>
      </body>
    </html>
  );
}

