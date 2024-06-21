import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:{
    default: "Avantula",
    template: "Avantula %s"
  }, 
  description: "The Avantula Creative Digital Marketing Agency is The Best Marketing Agency in India and Leading Marketing Agency in Central India by Efficient, Effective and Quality Services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
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
