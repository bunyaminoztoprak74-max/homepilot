import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://homepilot.vercel.app"),
  title: {
    default: "HomePilot | Expert buying guides for home products",
    template: "%s | HomePilot"
  },
  description:
    "Expert buying guides for robot vacuums, air fryers, and espresso machines with compliant Amazon Associates links.",
  applicationName: "HomePilot",
  openGraph: {
    title: "HomePilot",
    description: "Expert buying guides for home products.",
    url: "https://homepilot.vercel.app",
    siteName: "HomePilot",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "HomePilot",
    description: "Expert buying guides for home products."
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
