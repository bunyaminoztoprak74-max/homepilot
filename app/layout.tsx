import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://homepilot.vercel.app"),
  title: {
    default: "HomePilot | Find Better Home Products",
    template: "%s | HomePilot"
  },
  description:
    "Premium buying guides and comparisons for robot vacuums, air fryers, and espresso machines.",
  applicationName: "HomePilot",
  openGraph: {
    title: "HomePilot",
    description: "Find Better Home Products",
    url: "https://homepilot.vercel.app",
    siteName: "HomePilot",
    type: "website"
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
