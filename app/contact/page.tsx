import Image from 'next/image';
import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://wayneterpend.com';

export const metadata: Metadata = {
  title: 'Contact Wayne Terpend | Executive Consultation & Inquiries',
  description:
    'Direct executive contact information for Wayne Terpend — Venture Capitalist, International Businessman, Financial Advisor, and Land Banking Consultant.',
  alternates: {
    canonical: '/contact',
  },
};

// Page-level JSON-LD Schema for ContactPage linked to Person entity
const contactPageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': `${SITE_URL}/contact/#webpage`,
      url: `${SITE_URL}/contact`,
      name: 'Contact Wayne Terpend',
      description:
        'Direct contact details for Wayne Terpend, Venture Capitalist and Financial Advisor.',
      about: {
        '@id': `${SITE_URL}/#wayne-terpend`,
      },
      mainEntity: {
        '@id': `${SITE_URL}/#wayne-terpend`,
      },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#wayne-terpend`,
      name: 'Wayne Terpend',
      telephone: '+1-907-903-5307',
      email: 'mailto:wayne.s.o@icloud.com',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-907-903-5307',
        contactType: 'Advisory & Investment Inquiries',
        email: 'wayne.s.o@icloud.com',
        areaServed: ['JP', 'Worldwide'],
        availableLanguage: ['English', 'Japanese'],
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <div className="w-full min-h-[calc(100vh-14rem)] flex items-center justify-center py-6">
      {/* Page-level Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Main Contact Card (Centered / Main Focus) */}
        <div className="lg:col-span-7 bg-neutral-900/70 border border-neutral-800/80 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md relative overflow-hidden">
          {/* Subtle Accent Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />

          {/* Semantic Header */}
          <header className="flex flex-col items-center text-center pb-8 border-b border-neutral-800">
            {/* Crisp Rounded Profile Avatar */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden ring-2 ring-cyan-400/40 shadow-xl shadow-cyan-500/10 mb-6 group">
              <Image
                src="/images/01_avatar_1x1.jpg"
                alt="Wayne Terpend Profile"
                fill
                priority
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 112px, 128px"
              />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              DIRECT EXECUTIVE INQUIRIES
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              Get in Touch
            </h1>
            <p className="text-sm text-neutral-400 mt-2">
              For venture capital syndication, land banking consultations, or strategic board advisory.
            </p>
          </header>

          {/* Contact Details List */}
          <section
            aria-label="Direct Communication Channels"
            className="py-8 space-y-4"
          >
            {/* Phone Channel */}
            <a
              href="tel:9079035307"
              className="flex items-center justify-between p-4 rounded-xl bg-neutral-950/60 border border-neutral-800 hover:border-cyan-500/50 hover:bg-neutral-950 transition-all duration-200 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 font-mono">
                    Telephone &middot; <span className="text-cyan-400 font-semibold">Japan</span>
                  </div>
                  <div className="text-base font-semibold text-neutral-100 group-hover:text-cyan-300 transition-colors">
                    9079035307
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-neutral-400 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 group-hover:border-cyan-500/30">
                Call Direct
              </span>
            </a>

            {/* Email Channel */}
            <a
              href="mailto:wayne.s.o@icloud.com"
              className="flex items-center justify-between p-4 rounded-xl bg-neutral-950/60 border border-neutral-800 hover:border-amber-500/50 hover:bg-neutral-950 transition-all duration-200 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 font-mono">
                    Email &middot; Official Inquiries
                  </div>
                  <div className="text-base font-semibold text-neutral-100 group-hover:text-amber-300 transition-colors">
                    wayne.s.o@icloud.com
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-neutral-400 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 group-hover:border-amber-500/30">
                Send Email
              </span>
            </a>
          </section>

          {/* Semantic Biography Paragraph */}
          <article
            aria-label="Executive Biography"
            className="pt-6 border-t border-neutral-800/80"
          >
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              In the dynamic world of venture capitalism and international business, Wayne Terpend stands out as a visionary. With an illustrious career as a venture capitalist, international businessman, and land banking consultant, Terpend has significantly impacted numerous sectors. His expertise in guiding startups and established businesses alike has garnered him recognition as a strategic thinker and a mentor in the global investment community.
            </p>
          </article>
        </div>

        {/* Subtle Desktop Feature: 9:16 Quote Artwork */}
        <div className="hidden lg:block lg:col-span-5 space-y-4">
          <div className="relative aspect-[9/16] w-full max-w-[340px] mx-auto rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl group">
            <Image
              src="/images/03_instagram_story_9x16.jpg"
              alt="Character is revealed when pressure is applied - Wayne Terpend"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="340px"
            />
            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/30 pointer-events-none" />
          </div>
          <p className="text-center font-mono text-xs text-neutral-500 tracking-wider">
            &middot; EXECUTIVE MINDSET &middot;
          </p>
        </div>
      </div>
    </div>
  );
}
