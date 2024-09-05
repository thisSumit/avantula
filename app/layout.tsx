import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  metadataBase: new URL("https://avantula.live"),
  title: { default:"Avantula The Creative Digital Marketing Agency", 
    template: "%s - Avantula The Creative Digital Marketing Agency in Nagpur",
  },
  description: "The Avantula Creative Digital Marketing Agency is The Best Digital Marketing Agency in India and Leading Marketing Agency in Central India by Efficient, Effective and Quality Services.",
  keywords: ['Marketing in Nagpur', 'Digital Marketing in Nagpur', 'best digital marketing', 'grow social media', 'social meadia advertisment', 'website developer in nagpur', 'website development in nagpur', 'digital marketing service in nagpur', 'avantula digital marketing agency'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link rel="icon" href="/icon.png" sizes="any" />
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
