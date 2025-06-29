import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import TanStackProvider from "../components/TanStackProvider/TanStackProvider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoteHub",
  description: "Note list app",
  openGraph: {
    title: `NoteHub`,
    description: "Note list app",
    url: `https://notehub.com`,
    siteName: "NoteHub",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Note App image",
      },
    ],
    type: "article",
  },
};

// COMPONENTS

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanStackProvider>
          <Header />

          <main>
            {children}
            {modal}
          </main>

          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
