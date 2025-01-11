import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname(); // Get the current path
  const isSpecificPath = pathname === '/1'; // Adjust for the specific path `/1`

  const metadata: Metadata = isSpecificPath
    ? {
        title: 'n0va.one - Owner | Luxx',
        description: 'im the owner of n0va.one',
        openGraph: {
          title: 'n0va.one - Owner | Luxx',
          description: 'The developer, And owner of n0va.',
          url: 'https://n0va.one/1',
          siteName: 'n0va.one',
          images: [
            {
              url: 'https://n0va.one/profile-picture.png', // Custom image for `/1`
              width: 1000,
              height: 1000,
              alt: 'pfp',
            },
          ],
          locale: 'en_US',
          type: 'website',
        },
        twitter: {
          card: 'summary_large_image',
          title: 'n0va.one - owner',
          description: 'the creator of the site',
          creator: '@luxxified',
          images: ['https://n0va.one/exclusive-preview.png'], // Custom image for `/1`
        },
        authors: [{ name: 'luxxified.' }],
        creator: 'luxxified.',
        publisher: 'luxxified.',
      }
    : {
        title: 'n0va.one - Elevate Your Online Presence',
        description: 'Share your world through a single, powerful link.',
        openGraph: {
          title: 'n0va.one - Elevate Your Online Presence',
          description: 'Share your world through a single, powerful link.',
          url: 'https://n0va.one',
          siteName: 'n0va.one',
          images: [
            {
              url: 'https://n0va.one/placeholder.png', // Default image
              width: 1200,
              height: 630,
              alt: 'n0va.one Preview',
            },
          ],
          locale: 'en_US',
          type: 'website',
        },
        twitter: {
          card: 'summary_large_image',
          title: 'n0va.one - Elevate Your Online Presence',
          description: 'Share your world through a single, powerful link.',
          creator: '@luxxified',
          images: ['https://n0va.one/placeholder.png'], // Default image
        },
        authors: [{ name: 'luxxified.' }],
        creator: 'luxxified.',
        publisher: 'luxxified.',
      };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Populate meta tags dynamically */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph?.title} />
        <meta property="og:description" content={metadata.openGraph?.description} />
        <meta property="og:url" content={metadata.openGraph?.url} />
        <meta property="og:site_name" content={metadata.openGraph?.siteName} />
        <meta property="og:image" content={metadata.openGraph?.images[0]?.url} />
        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter?.card} />
        <meta name="twitter:title" content={metadata.twitter?.title} />
        <meta name="twitter:description" content={metadata.twitter?.description} />
        <meta name="twitter:creator" content={metadata.twitter?.creator} />
        <meta name="twitter:image" content={metadata.twitter?.images[0]} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
