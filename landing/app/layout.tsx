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
  metadataBase: new URL("https://prismiqlabs.ai"),
  title: {
    default: "PrismIQ — AI Revenue Cycle Management for Specialty Practices",
    template: "%s | PrismIQ"
  },
  description:
    "One AI system across the full revenue cycle — intake through collections. Stop denials before they start.",
  keywords: ["revenue cycle management", "healthcare RCM", "medical billing", "prior authorization", "denial management", "orthopedic billing", "spine billing", "cardiology billing"],
  authors: [{ name: "PrismIQ Labs" }],
  openGraph: {
    title: "PrismIQ — AI Revenue Cycle Management for Specialty Practices",
    description: "One AI system across the full revenue cycle — intake through collections. Stop denials before they start.",
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
    <html lang="en" className={inter.variable} style={{ backgroundColor: "#070D1A", color: "#D1D5DB" }}>
      <body style={{ backgroundColor: "#070D1A", color: "#D1D5DB" }}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
