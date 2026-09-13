'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

export default function FeaturedVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section
      aria-label="Featured Keynote Video"
      className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl group"
    >
      {/* Ambient Backlight Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-amber-500/10 to-cyan-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="relative z-10 w-full">
        {/* Section Header */}
        <div className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800/80 bg-neutral-900/60 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-amber-500/40 shadow-sm flex-shrink-0">
              <Image
                src="/images/wt-logo.jpg"
                alt="WT Monogram Logo"
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Featured Broadcast
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                Mindset, Wealth &amp; Discipline &mdash; In Motion
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleMute}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 border border-neutral-700 transition-colors"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? (
                <>
                  <svg className="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                  <span>MUTED</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                  <span>AUDIO ON</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Video Player Wrapper */}
        <div
          onClick={togglePlay}
          className="relative aspect-video w-full bg-black cursor-pointer overflow-hidden group/player"
        >
          <video
            ref={videoRef}
            src="/videos/wt_clip1.mp4"
            poster="/images/wayne-title-card.png"
            playsInline
            muted={isMuted}
            loop
            onEnded={() => setIsPlaying(false)}
            className="w-full h-full object-cover object-center"
          />

          {/* Overlay Play Button when Paused */}
          {!isPlaying && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all duration-300">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-neutral-900/90 border border-amber-500/50 flex items-center justify-center text-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.4)] group-hover/player:scale-110 group-hover/player:border-amber-400 group-hover/player:shadow-[0_0_40px_rgba(245,158,11,0.6)] transition-all duration-300">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 ml-1.5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="mt-4 text-xs font-mono uppercase tracking-widest text-neutral-300 font-medium bg-neutral-950/80 px-3 py-1 rounded-full border border-neutral-800">
                Click to Play Episode Clip
              </p>
            </div>
          )}

          {/* Bottom Controls Bar on Hover when Playing */}
          {isPlaying && (
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover/player:opacity-100 transition-opacity flex items-center justify-between text-xs text-neutral-300 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Playing: Wayne Terpend Clip</span>
              </div>
              <span>Click anywhere to pause</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
