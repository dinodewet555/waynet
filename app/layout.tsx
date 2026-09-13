import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://wayneterpend.com';

export const viewport: Viewport = {
  themeColor: '#09090b',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Wayne Terpend | Venture Capitalist, Financial Advisor & Entrepreneur',
    template: '%s | Wayne Terpend',
  },
  description:
    'Official website of Wayne Terpend — Venture Capitalist, International Businessman, Financial Advisor, and Land Banking Consultant specializing in strategic investments across Japan and global markets.',
  keywords: [
    'Wayne Terpend',
    'Venture Capitalist',
    'Financial Advisor',
    'Entrepreneur',
    'International Businessman',
    'Land Banking Consultant',
    'Private Equity',
    'Japan Real Estate & Land Banking',
    'Global Investments',
    'Strategic Asset Management',
  ],
  authors: [{ name: 'Wayne Terpend', url: SITE_URL }],
  creator: 'Wayne Terpend',
  publisher: 'Wayne Terpend',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    firstName: 'Wayne',
    lastName: 'Terpend',
    username: 'wayneterpend',
    gender: 'male',
    title: 'Wayne Terpend | Venture Capitalist & Financial Advisor',
    description:
      'Venture Capitalist, International Businessman, Financial Advisor, and Land Banking Consultant serving Japan and global markets.',
    url: SITE_URL,
    siteName: 'Wayne Terpend',
    locale: 'en_US',
    images: [
      {
        url: '/images/04_linkedin_banner_16x9.jpg',
        width: 1200,
        height: 630,
        alt: 'Wayne Terpend - Venture Capitalist & Financial Advisor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wayne Terpend | Venture Capitalist & Financial Advisor',
    description:
      'Venture Capitalist, International Businessman, Financial Advisor, and Land Banking Consultant.',
    creator: '@wayneterpend',
    images: ['/images/04_linkedin_banner_16x9.jpg'],
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
  icons: {
    icon: '/images/wt-logo.jpg',
    apple: '/images/wt-logo.jpg',
  },
};

// Comprehensive Entity-Attribute-Value (EAV) Semantic JSON-LD Graph
const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Person', 'FinancialAdvisor'],
      '@id': `${SITE_URL}/#wayne-terpend`,
      name: 'Wayne Terpend',
      givenName: 'Wayne',
      familyName: 'Terpend',
      url: SITE_URL,
      image: `${SITE_URL}/images/wt-logo.jpg`,
      email: 'mailto:wayne.s.o@icloud.com',
      telephone: '+1-907-903-5307',
      jobTitle: [
        'Venture Capitalist',
        'Financial Advisor',
        'International Businessman',
        'Land Banking Consultant',
        'Entrepreneur',
      ],
      description:
        'Wayne Terpend is a Venture Capitalist, Financial Advisor, International Businessman, and Land Banking Consultant managing strategic opportunities in Japan and globally.',
      knowsAbout: [
        'Venture Capital',
        'Land Banking',
        'Private Wealth Advisory',
        'International Business Strategy',
        'Asset Allocation',
        'Cross-Border Mergers & Acquisitions',
      ],
      areaServed: [
        {
          '@type': 'Country',
          name: 'Japan',
          identifier: 'JP',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Global',
        },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'Direct Advisory & Executive Inquiries',
          email: 'wayne.s.o@icloud.com',
          telephone: '+1-907-903-5307',
          availableLanguage: ['English', 'Japanese'],
          areaServed: ['JP', 'Worldwide'],
        },
      ],
      hasOccupation: [
        {
          '@type': 'Occupation',
          name: 'Venture Capitalist',
          occupationalCategory: '13-2051.00',
          skills: 'Venture Capital, Direct Equity Investments, Portfolio Management',
        },
        {
          '@type': 'Occupation',
          name: 'Financial Advisor',
          occupationalCategory: '13-2052.00',
          skills: 'Strategic Financial Consulting, Asset Management',
        },
        {
          '@type': 'Occupation',
          name: 'Land Banking Consultant',
          occupationalCategory: '13-2053.00',
          skills: 'Land Banking, Real Estate Syndication, Zoning & Land Optimization',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Wayne Terpend',
      publisher: {
        '@id': `${SITE_URL}/#wayne-terpend`,
      },
      inLanguage: 'en-US',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="min-h-screen bg-[#09090b] text-zinc-100 font-sans antialiased selection:bg-cyan-500/20 selection:text-cyan-300 relative flex flex-col justify-between overflow-x-hidden">
        {/* Subtle Ambient Background Gradients (Electric Blue & Electric Orange Glow) */}
        <div
          className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[130px] rounded-full" />
          <div className="absolute top-1/3 -right-48 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full" />
          <div className="absolute bottom-10 -left-48 w-[500px] h-[500px] bg-cyan-600/5 blur-[150px] rounded-full" />
        </div>

        {/* Semantic Header */}
        <header
          role="banner"
          className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#09090b]/85 border-b border-zinc-800/60"
        >
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3.5 group cursor-pointer"
            >
              {/* Gold/Bronze WT Logo Badge */}
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.15)] group-hover:border-amber-400 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300">
                <Image
                  src="/images/wt-logo.jpg"
                  alt="WT - Wayne Terpend Logo"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  sizes="40px"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-semibold tracking-wider text-zinc-100 group-hover:text-amber-300 transition-colors duration-200">
                  WAYNE TERPEND
                </span>
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase -mt-0.5">
                  Venture &middot; Advisory
                </span>
              </div>
            </Link>

            <nav
              role="navigation"
              aria-label="Main Navigation"
              className="flex items-center gap-6 sm:gap-8 text-sm text-zinc-400 font-medium"
            >
              <Link
                href="/"
                className="hover:text-zinc-100 transition-colors duration-200"
              >
                Overview
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-md transition-all duration-200 shadow-lg shadow-amber-500/20"
              >
                Get in Touch
              </Link>
            </nav>
          </div>
        </header>

        {/* Semantic Main Content */}
        <main
          id="main-content"
          role="main"
          className="flex-1 max-w-6xl w-full mx-auto px-6 py-12"
        >
          {children}
        </main>

        {/* Semantic Footer */}
        <footer
          role="contentinfo"
          className="w-full border-t border-zinc-800/60 bg-[#09090b]/90 text-zinc-400 text-sm"
        >
          <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-amber-500/30 flex-shrink-0">
                <Image
                  src="/images/wt-logo.jpg"
                  alt="WT Logo"
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-zinc-200 font-medium tracking-wide">
                  Wayne Terpend
                </span>
                <p className="text-xs text-zinc-500">
                  Venture Capitalist &middot; Financial Advisor &middot; Land Banking Consultant
                </p>
                <p className="text-xs text-zinc-600">
                  Tokyo &middot; Osaka &middot; Global Markets
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs text-zinc-400">
              <a
                href="mailto:wayne.s.o@icloud.com"
                className="hover:text-amber-400 transition-colors"
              >
                wayne.s.o@icloud.com
              </a>
              <a
                href="tel:9079035307"
                className="hover:text-amber-400 transition-colors"
              >
                +1 (907) 903-5307 (Japan)
              </a>
            </div>

            <div className="text-xs text-zinc-600">
              &copy; {new Date().getFullYear()} Wayne Terpend. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
