import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap"
})

export const metadata: Metadata = {
  title: {
    default: "PrismIQ - AI-Powered Denial Management for Healthcare",
    template: "%s | PrismIQ"
  },
  description:
    "Overturn denials with policy-level precision. PrismIQ is an AI-powered healthcare revenue cycle management platform focused on denial management for orthopedic and spine specialty practices.",
  keywords: ["denial management", "healthcare RCM", "medical billing", "appeal automation", "orthopedic billing", "spine surgery billing"],
  authors: [{ name: "PrismIQ Labs" }],
  openGraph: {
    title: "PrismIQ - AI-Powered Denial Management",
    description: "Overturn denials with policy-level precision.",
    url: "https://prismiqlabs.ai",
    siteName: "PrismIQ",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#070D1A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} style={{ backgroundColor: "#070D1A" }}>
      <body className="font-sans antialiased min-h-screen flex flex-col" style={{ backgroundColor: "#070D1A", color: "#D1D5DB" }}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
