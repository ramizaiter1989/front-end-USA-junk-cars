import type { Metadata, Viewport } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sell My Junk Car Online | Cash for Junk Cars Detroit & Michigan | Up to $1,000',
  description:
    'Sell your junk car in Detroit, Michigan fast. Get instant cash offer up to $1,000, free towing, same-day pickup. We buy junk cars near you — running or not. Call (248) 417-2552.',
  keywords: [
    'sell my junk car Detroit',
    'cash for junk cars near me',
    'junk car buyers Detroit Michigan',
    'junk car removal Detroit',
    'who buys junk cars in Detroit',
    'we buy junk cars Michigan',
    'scrap car buyers Detroit',
    'sell junk car online Michigan',
    'junk car pickup same day Detroit',
    'cash for cars Detroit',
    'junk car removal near me',
    'sell car without title Michigan',
    'junk car towing free Detroit',
    'how much is my junk car worth',
    'sell my junk car for cash fast',
  ],
  authors: [{ name: 'SellMyJunkCar.online' }],
  creator: 'SellMyJunkCar.online',
  publisher: 'SellMyJunkCar.online',
  metadataBase: new URL('https://sellmyjunkcar.online'),
  alternates: {
    canonical: 'https://sellmyjunkcar.online',
  },
  openGraph: {
    title: 'Sell My Junk Car | Cash Up to $1,000 | Detroit & Michigan',
    description:
      'Get an instant cash offer for your junk car in Detroit & Michigan. Free towing, same-day pickup, no hidden fees. Call (248) 417-2552.',
    url: 'https://sellmyjunkcar.online',
    siteName: 'SellMyJunkCar.online',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sell My Junk Car | Cash Up to $1,000 | Detroit Michigan',
    description: 'Get instant cash for your junk car in Detroit & Michigan. Free towing, same-day pickup.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#1E3A5F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} bg-background`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'SellMyJunkCar.online',
              description: 'We buy junk cars in Detroit and Michigan for instant cash up to $1,000.',
              url: 'https://sellmyjunkcar.online',
              telephone: '+12484172552',
              priceRange: '$100 - $1000',
              areaServed: ['Detroit', 'Michigan', 'Dearborn', 'Warren', 'Sterling Heights', 'Ann Arbor', 'Flint', 'Lansing'],
              serviceType: ['Junk Car Buying', 'Cash for Cars', 'Free Towing', 'Same Day Pickup'],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Detroit',
                addressRegion: 'MI',
                addressCountry: 'US',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '1247',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
