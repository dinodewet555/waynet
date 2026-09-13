import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import FeaturedVideo from '@/components/FeaturedVideo';

export const metadata: Metadata = {
  title: 'Wayne Terpend | Entrepreneur, Venture Capitalist & Financial Advisor',
  description:
    'Venture Capitalist, International Businessman, Financial Advisor, and Land Banking Consultant specializing in strategic investments and startup scaling across Japan and global markets.',
};

export default function HomePage() {
  return (
    <div className="w-full space-y-20 md:space-y-28 text-neutral-200">
      {/* Hero Section */}
      <section
        aria-label="Hero Introduction"
        className="relative overflow-hidden rounded-3xl border border-neutral-800/80 bg-neutral-900/60 shadow-2xl backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[520px]">
          {/* Hero Copy */}
          <div className="lg:col-span-7 p-8 md:p-14 lg:p-16 z-10 flex flex-col justify-center">
            {/* WT Crest & Status Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.25)] flex-shrink-0">
                <Image
                  src="/images/wt-logo.jpg"
                  alt="WT - Wayne Terpend Emblem"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="44px"
                />
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                GLOBAL VENTURE &amp; WEALTH ADVISORY
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-sans">
              Wayne Terpend
            </h1>

            <p className="mt-4 text-base sm:text-lg md:text-xl font-light text-neutral-300 tracking-wide border-l-2 border-amber-500 pl-4 py-1">
              Entrepreneur &middot; Venture Capitalist &middot; Financial Advisor &middot; Investment
            </p>

            <p className="mt-6 text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
              Bridging international capital, visionary venture execution, and high-conviction land banking across Japan and international markets.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold tracking-wide text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-lg transition-all duration-300 shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.55)] cursor-pointer"
              >
                <span>Initiate Consultation</span>
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>

              <a
                href="#featured-broadcast"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium tracking-wide text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/80 rounded-lg transition-all duration-200"
              >
                Watch Video Clip
              </a>
            </div>
          </div>

          {/* Hero Visual Anchor Banner */}
          <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[400px] lg:h-full min-h-[420px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-neutral-950 via-neutral-950/40 to-transparent z-10 pointer-events-none" />
            <Image
              src="/images/04_linkedin_banner_16x9.jpg"
              alt="Wayne Terpend - Mindset, Wealth, Discipline"
              fill
              priority
              className="object-cover object-center lg:object-right scale-105 hover:scale-100 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <div id="featured-broadcast">
        <FeaturedVideo />
      </div>

      {/* Semantic Introduction Section */}
      <section
        id="track-record"
        aria-labelledby="track-record-heading"
        className="max-w-4xl mx-auto text-center px-4"
      >
        <div className="inline-block mb-3 text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
          Proven Excellence
        </div>
        <h2
          id="track-record-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-6"
        >
          A Proven Track Record in Venture Capitalism
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed font-light">
          Wayne Terpend&apos;s proficiency in identifying and investing in high-potential startups has made him a formidable figure in the venture capital sector. His approach goes beyond mere financial backing; he immerses himself in understanding the business models, market viability, and the potential for scalability of the ventures he invests in. This comprehensive approach has led to numerous successful ventures under his guidance.
        </p>
      </section>

      {/* Core Pillars Grid Layout */}
      <section
        aria-label="Core Strategic Pillars"
        className="space-y-6"
      >
        <div className="text-center md:text-left max-w-2xl mb-8">
          <h2 className="text-sm font-mono uppercase tracking-widest text-cyan-400 font-medium">
            Core Methodologies
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-white mt-1">
            Foundations of Sustainable Value Creation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Pillar 1 */}
          <article className="group relative p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-500/30 group-hover:via-cyan-400 to-transparent transition-all duration-500" />
            <div>
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono text-sm font-bold mb-6">
                01
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-200 mb-4">
                Strategic Investments and Market Foresight
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Terpend’s investment strategy is characterized by a blend of calculated risk-taking and market foresight. He has an exceptional ability to foresee market trends and capitalize on them, often being ahead of the curve in identifying sectors that are ripe for innovation and growth. His portfolio spans a diverse range of industries, reflecting his belief in the power of cross-sector innovation.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800 text-xs font-mono text-neutral-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Alpha Generation &middot; Market Disruption</span>
            </div>
          </article>

          {/* Pillar 2 */}
          <article className="group relative p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-500/30 group-hover:via-amber-400 to-transparent transition-all duration-500" />
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-mono text-sm font-bold mb-6">
                02
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-amber-300 transition-colors duration-200 mb-4">
                Nurturing Startups: Beyond Capital
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                What sets Wayne apart in the venture capital landscape is his dedication to the growth and success of the startups he invests in. He is not just an investor but a mentor, offering guidance on everything from business strategy to operational excellence. His hands-on approach in working with startup founders and teams has been instrumental in turning nascent ideas into thriving businesses.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800 text-xs font-mono text-neutral-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Founder Mentorship &middot; Operational Scaling</span>
            </div>
          </article>

          {/* Pillar 3 */}
          <article className="group relative p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-500/30 group-hover:via-cyan-400 to-transparent transition-all duration-500" />
            <div>
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono text-sm font-bold mb-6">
                03
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-200 mb-4">
                Global Reach and Influence
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Wayne Terpend’s influence in the venture capital world is global. He has a knack for bridging gaps between different markets, helping startups expand their reach beyond local boundaries. His network and expertise make him a valuable ally for startups looking to navigate the complex terrain of global business.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800 text-xs font-mono text-neutral-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Japan-Global Bridge &middot; Cross-Border Growth</span>
            </div>
          </article>
        </div>
      </section>

      {/* Interstitial Breakout 1: Featured 16:9 Banner Overlay */}
      <section
        aria-label="Executive Philosophy Banner"
        className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl min-h-[380px] md:min-h-[440px] flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/05_youtube_thumbnail_16x9.jpg"
            alt="Win In Silence - Wayne Terpend"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Heavy Dark & Color Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/70" />
        </div>

        <div className="relative z-10 max-w-2xl p-8 md:p-16 space-y-4">
          <div className="text-amber-400 font-mono text-xs tracking-widest uppercase">
            Executive Ethos &middot; Episode 12
          </div>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            &ldquo;Win in silence. Let them think you are losing.&rdquo;
          </blockquote>
          <p className="text-sm md:text-base text-neutral-400 max-w-lg leading-relaxed">
            True capital compounding is an exercise in rigorous discipline, asymmetric risk evaluation, and silent execution far from short-term market noise.
          </p>
        </div>
      </section>

      {/* Interstitial Breakout 2: 1:1 Quote & Value Feature */}
      <section
        aria-label="Value Creation Perspective"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-neutral-900/40 border border-neutral-800 p-8 md:p-12"
      >
        <div className="lg:col-span-5 relative aspect-square w-full rounded-2xl overflow-hidden border border-neutral-700/60 shadow-xl group">
          <Image
            src="/images/02_instagram_feed_post_1x1.jpg"
            alt="Money is earned by value, not by luck - Wayne Terpend"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="lg:col-span-7 space-y-6 lg:pl-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400">
            <span className="w-2 h-0.5 bg-cyan-400" />
            Principled Capital
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Creating Value Through Asymmetric Insight
          </h2>

          <p className="text-base text-neutral-300 leading-relaxed">
            In every market cycle, luck is temporary, while structured value creation endures. By aligning deep technical due diligence, strategic land entitlement, and patient capital structures, Wayne Terpend partners with founders and institutions poised for long-term compound growth.
          </p>

          <div className="pt-4 flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold tracking-wide text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all duration-200 shadow-lg shadow-amber-500/20"
            >
              Discuss a Strategic Opportunity
            </Link>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section
        aria-label="Call to Action"
        className="text-center py-16 px-6 rounded-3xl bg-gradient-to-b from-neutral-900/80 to-neutral-950 border border-neutral-800/80 relative overflow-hidden"
      >
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Ready to Accelerate Your Next Venture?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Whether seeking venture capital backing, land banking advisory in Japan, or strategic board mentorship, connect directly with Wayne Terpend.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold tracking-wide text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_45px_rgba(245,158,11,0.6)] cursor-pointer"
            >
              Get in Touch with Wayne &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
