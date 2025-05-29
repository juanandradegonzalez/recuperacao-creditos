import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Análise de Recuperação de Créditos - Energia Eólica | Rarotec",
  description:
    "Análise completa da arrecadação tributária nas fases de instalação, operação e manutenção dos parques eólicos. Consultoria especializada em reestruturação fazendária.",
  keywords: "energia eólica, recuperação tributária, aerogeneradores, consultoria fazendária, Rarotec",
  authors: [{ name: "Rarotec" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
