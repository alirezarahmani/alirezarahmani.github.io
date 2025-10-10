
import localFont from 'next/font/local'
import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = localFont({
  src: '../public/fonts/Inter-Variable.woff2',
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Alireza Rahmani - AI Architect & Software Engineer',
  description:
    'Portfolio of Alireza Rahmani, an expert AI Architect and Principal Software Engineer specializing in modern web technologies and cloud solutions.',
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
