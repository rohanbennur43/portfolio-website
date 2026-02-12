import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/layout/GoogleAnalytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Your Name — Portfolio",
    template: "%s — Your Name",
  },
  description:
    "Software engineer building clean, performant web applications. View my projects and get in touch.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourdomain.com"
  ),
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="layout">
        <GoogleAnalytics />
        <Navbar />
        <main id="main-content" className="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
