import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'n0va.one - Elevate Your Online Presence',
  description: 'Share your world through a single, powerful link.',
  openGraph: {
    title: 'n0va.one - Elevate Your Online Presence',
    description: 'Share your world through a single, powerful link.',
    url: 'https://n0va.one',
    siteName: 'n0va.one',
    images: [
      {
        url: 'https://n0va.one/og-image.gif', // Replace with your actual GIF URL
        width: 1200,
        height: 630,
        alt: 'n0va.one Preview',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'n0va.one - Elevate Your Online Presence',
    description: 'Share your world through a single, powerful link.',
    creator: '@luxxified',
    images: ['https://n0va.one/og-image.gif'], // Replace with your actual GIF URL
  },
  authors: [{ name: 'luxxified.' }],
  creator: 'luxxified.',
  publisher: 'luxxified.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

