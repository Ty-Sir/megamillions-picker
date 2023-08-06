import "./globals.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Gradient } from "./components/Gradient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://megamillions-picker.vercel.app/"),

  title: "MegaMillions Picker",
  description: "A MegaMillions Number Picker",
  keywords:
    "MegaMillions, lottery, jackpot, number generator, winning numbers, lucky numbers, odds, probability, random, quick pick, powerball, millionaire, cash prize, ticket, drawing, play, chance, strategy, analysis, results",
  openGraph: {
    type: "website",
    url: "https://megamillions-picker.vercel.app/",
    title: "MegaMillions Picker",
    description: "A MegaMillions Number Picker",
    siteName: "MegaMillions Picker",
    images: [
      {
        url: "/logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    images: "/logo.png",
  },
  viewport: { width: "device-width", initialScale: 1, maximumScale: 1, userScalable: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={`relative flex overflow-hidden bg-white dark:bg-black`}>
          <Gradient />
          {children}
        </div>
      </body>
    </html>
  );
}
