import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "News Summariser",
  description: "AI-powered news summariser",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${merriweather.variable} antialiased bg-newspaper-bg text-newspaper-ink`}
      >
        <div className="min-h-screen max-w-6xl mx-auto px-4">
          <header className="pt-6 pb-4 border-b border-neutral-300/70">
            <h1 className="font-[var(--font-playfair)] font-black text-4xl sm:text-5xl tracking-tight text-center uppercase">The Daily Summariser</h1>
            <p className="text-center text-sm mt-1 text-neutral-700">Concise. Clear. Current.</p>
            <Navbar />
          </header>
          <main className="py-6">{children}</main>
          <footer className="py-8 mt-8 border-t border-neutral-300/70 text-center text-xs text-neutral-600">
            © {new Date().getFullYear()} The Daily Summariser
          </footer>
        </div>
      </body>
    </html>
  );
}
