import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avantula",
  description: "Avantula is The Best Marketing Agency in India and Nagpur. Efficient, Effective and Quality Services Given. With Avantula, try the Best Digital marketing Agency in Nagpur as well as in India. We are the one of the top leading creative marketing agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.jpg" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
