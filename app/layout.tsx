
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Alireza Rahmani Khalili - AI Architect & Software Engineer',
  description:
    'Portfolio of Alireza Rahmani Khalili, an expert AI Architect and Principal Software Engineer specializing in modern web technologies and cloud solutions.',
  authors: [{ name: 'Alireza Rahmani Khalili' }],
  keywords: 'Alireza Rahmani Khalili, علیرضا رحمانی خلیلی, Alireza Rahmani, علیرضا رحمانی, Principal Software Engineer, AI Architect, مهندس هوش مصنوعی, معمار سیستم‌های نرم‌افزاری',
  openGraph: {
    siteName: 'Alireza Rahmani Khalili - Portfolio',
  },
  twitter: {
    creator: '@AlirezaRahmani',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
