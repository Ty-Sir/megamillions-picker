import "./globals.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Gradient } from "./components/Gradient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MegaMillions Picker",
  description: "A MegaMillions number picker",
  // url: "https://megamillions-picker.vercel.app/",
  // image: "https://megamillions-picker.vercel.app/logo.png",
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
