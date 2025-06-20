import type React from "react"
import type { Metadata } from "next"
import { Inter, Great_Vibes, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import FloatingActionButton from "@/components/FloatingActionButton"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
})
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
})

export const metadata: Metadata = {
  title: "Perfect Nails By Carolina - Professional Nail Services",
  description:
    "Modern and cozy nail salon offering professional manicure and pedicure services. Book your appointment today!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${playfairDisplay.variable}`}>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Analytics />
        <Footer />
        <FloatingActionButton />

      </body>
    </html>
  )
}
