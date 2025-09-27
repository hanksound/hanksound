import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../public/css/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' 
    ? (process.env.NEXT_PUBLIC_BASE_URL || 'https://hanksound.com')
    : 'http://localhost:3000'),
  title: 'HankSound - Multiroom Audio Solution Provider',
  description: 'Professional multiroom audio solution provider with over 15 years of OEM/ODM experience. Wireless audio amplifiers, streamers, and speakers.',
  keywords: 'multiroom audio, wireless audio, audio amplifier, audio streamer, OEM ODM',
  // 优化 SEO 和 SSR
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'HankSound - Multiroom Audio Solution Provider',
    description: 'Professional multiroom audio solution provider with over 15 years of OEM/ODM experience.',
    type: 'website',
    url: process.env.NODE_ENV === 'production' 
      ? (process.env.NEXT_PUBLIC_BASE_URL || 'https://hanksound.com')
      : 'http://localhost:3000',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HankSound - Multiroom Audio Solution Provider',
    description: 'Professional multiroom audio solution provider with over 15 years of OEM/ODM experience.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}