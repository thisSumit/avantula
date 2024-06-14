import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import SmoothScrolling from "@/components/SmoothScrolling";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avantula",
  description: "The Best Marketing Agency in India. Efficient, Effective and Quality Services",
  icons: {
    icon: '/icon.jpg', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          ><SmoothScrolling>{children}</SmoothScrolling></ThemeProvider></body>
    </html>
  );
}
