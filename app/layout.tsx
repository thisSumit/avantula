import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';


const inter = Inter({ subsets: ["latin"] });

const kd = ['Marketing in Nagpur', 'Digital marketing stratergiest', 'ai in digital marketing', 'best digital marketing agency', 'fundamental of digital marketing', 'Digital Marketing', 'Digital Marketing in Nagpur', 'Digital Marketing Maharastra', 'Marketing Agency in Nagpur', 'Marketing Agency in Maharastra', 'Creative digital Marketing India', 'Creative Digital Marketing', 'Conversion Marketing', 'A/B testing', 'internet marketing', 'type of business model', 'digital marketing'];

export const metadata: Metadata = {

  title: { default:"Avantula The Creative Digital Marketing Agency in Nagpur", 
    template: "%s - Avantula The Creative Digital Marketing Agency in Nagpur",
  },
  description: "The Avantula Creative Digital Marketing Agency is The Best Marketing Agency in India and Leading Marketing Agency in Central India by Efficient, Effective and Quality Services.",
  keywords: kd,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <meta property="og:image" content="<generated>" />
      <meta property="og:image:png" content="<generated>" />
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
