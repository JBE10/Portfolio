import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import Head from "next/head"

import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Juan Bautista Espino | Backend Developer & Cyber Analyst",
  description:
    "Portfolio of a Backend Developer and Cyber Analyst specializing in cybersecurity and system optimization",
  icons: {
    icon: "/favicon.ico",

  },
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      </Head>
      <body className={inter.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
        <Navbar />
        {children}
      </ThemeProvider>
      </body>
      </html>
  );
}

