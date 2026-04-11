import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bill Cordias Bitok | Full Stack Developer",
  description:
    "Portfolio of Bill Cordias Bitok - Full Stack Developer, DevOps Engineer, and Systems Design Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="google-site-verification" content="4_U84p46uHY2HjbLnc1Bby-vGFcvjI9LT52ZNXoNeZ8" />
      </head>
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="page-container flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
