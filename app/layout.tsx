
import { siteData } from '@/lib/data'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Who is Alireza Rahmani Khalili | Principal Software Engineer',
  description: siteData.profile.summary,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-P26T0DRKQB`}
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-P26T0DRKQB');
          `}
        </Script>
      </head>
      <body
        className={`${inter.className} bg-navy text-light antialiased selection:bg-accent selection:text-navy`}
      >
        {children}
      </body>
    </html>
  )
}
