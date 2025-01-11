// app/MetadataProvider.tsx
'use client'

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

const defaultMetadata = {
  title: 'n0va.one - Elevate Your Online Presence',
  description: 'Share your world through a single, powerful link.',
  openGraph: {
    title: 'n0va.one - Elevate Your Online Presence',
    description: 'Share your world through a single, powerful link.',
    url: 'https://n0va.one',
    siteName: 'n0va.one',
    images: [
      {
        url: 'https://n0va.one/placeholder.png',
        width: 1000,
        height: 1000,
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
    images: ['https://n0va.one/placeholder.png'],
  },
  authors: [{ name: 'luxxified.' }],
  creator: 'luxxified.',
  publisher: 'luxxified.',
}

const specificMetadata = {
  '/1': {
    title: 'n0va.one - Owner | Luxx.',
    description: 'Luxx, The owner of the website',
    openGraph: {
      title: 'n0va.one - Owner | Luxx.',
      description: 'Luxx, The owner of the website',
      url: 'https://n0va.one/1',
      siteName: 'n0va.one',
      images: [
        {
          url: 'https://n0va.one/profile-picture.png',
          width: 1000,
          height: 1000,
          alt: 'PFP',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'n0va.one - Owner | Luxx.',
      description: 'Luxx, The owner of the website',
      creator: '@luxxified',
      images: ['https://n0va.one/profile-picture.png'],
    },
    authors: [{ name: 'luxxified.' }],
    creator: 'luxxified.',
    publisher: 'luxxified.',
  },
  '/foreverhiro': {
    title: 'n0va.one - User | Hiro',
    description: 'Student Athlete, Class of 29, Gamer.',
    openGraph: {
      title: 'n0va.one - User | Hiro',
      description: 'Student Athlete, Class of 29, Gamer',
      url: 'https://n0va.one/foreverhiro',
      siteName: 'n0va.one',
      images: [
        {
          url: 'https://n0va.one/profile-picture.jpg',
          width: 800,
          height: 800,
          alt: 'Hiro Preview',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'n0va.one - User | Hiro',
      description: 'Student Athlete, Class of 29, Gamer',
      creator: '@foreverhiro',
      images: ['https://n0va.one/profile-picture.jpg'],
    },
    authors: [{ name: 'Hiro' }],
    creator: 'Hiro',
    publisher: 'n0va.one',
  },
  '/battleye': {
    title: 'n0va.one - BattlEye',
    description: 'Owner @ Omni Services & Co-Owner @ n0va',
    openGraph: {
      title: 'n0va.one - BattlEye',
      description: 'Owner @ Omni Services & Co-Owner @ n0va',
      url: 'https://n0va.one/battleye',
      siteName: 'n0va.one',
      images: [
        {
          url: 'https://n0va.one/profile-picture1.png',
          width: 800,
          height: 800,
          alt: 'BattlEye Preview',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'n0va.one - BattlEye',
      description: 'Owner @ Omni Services & Co-Owner @ n0va',
      creator: '@battleye',
      images: ['https://n0va.one/profile-picture1.png'],
    },
    authors: [{ name: 'BattlEye' }],
    creator: 'BattlEye',
    publisher: 'n0va.one',
  },
}

export default function MetadataProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const metadata = specificMetadata[pathname] || defaultMetadata

  return (
    <>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0]?.url} />
        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
      </head>
      {children}
    </>
  )
}
