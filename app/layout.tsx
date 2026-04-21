import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const description =
  "AI back-office built for general contractors. Respond to every lead in under 60 seconds. Live in two weeks.";

export const metadata: Metadata = {
  title: "MoonHouse — AI Back Office for General Contractors",
  description,
  metadataBase: new URL("https://moonhouse.ai"),
  openGraph: {
    title: "MoonHouse — AI Back Office for General Contractors",
    description,
    url: "https://moonhouse.ai",
    siteName: "MoonHouse",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoonHouse — AI Back Office for General Contractors",
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
