import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const description =
  "MoonHouse deploys AI agents across 20 industries. 160 production-ready agents — operator-built, vertical-aware, live in weeks.";

export const metadata: Metadata = {
  title: "MoonHouse — AI agents for operators who run real businesses",
  description,
  metadataBase: new URL("https://moonhouse.ai"),
  openGraph: {
    title: "MoonHouse — AI agents for operators who run real businesses",
    description,
    url: "https://moonhouse.ai",
    siteName: "MoonHouse",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoonHouse — AI agents for operators who run real businesses",
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
