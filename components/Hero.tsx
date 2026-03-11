'use client';

import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

interface HeroProps {
  imageSrc: string;
  imageAlt: string;
  headline: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaHref?: string;
  overlay?: 'dark' | 'light' | 'none';
  priority?: boolean;
  height?: 'full' | 'large' | 'medium';
}

export default function Hero({
  imageSrc,
  imageAlt,
  headline,
  subheadline,
  ctaLabel,
  ctaHref,
  overlay = 'dark',
  priority = true,
  height = 'full',
}: HeroProps) {
  return (
    <section
      className={clsx(
        'relative w-full overflow-hidden',
        height === 'full' && 'h-screen min-h-[600px]',
        height === 'large' && 'h-[70vh] min-h-[500px]',
        height === 'medium' && 'h-[50vh] min-h-[400px]'
      )}
      aria-label={`Hero: ${headline}`}
    >
      {/* Background image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={priority}
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}
      {overlay === 'dark' && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" aria-hidden="true" />
      )}
      {overlay === 'light' && (
        <div className="absolute inset-0 bg-white/30" aria-hidden="true" />
      )}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          {subheadline && (
            <p className="font-sans text-xs tracking-ultra-wide uppercase text-white/70 mb-6 animate-fade-in">
              {subheadline}
            </p>
          )}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-none tracking-tight mb-8 animate-fade-up text-balance">
            {headline}
          </h1>
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="inline-block font-sans text-xs tracking-widest uppercase text-white border border-white/60 px-8 py-3.5 hover:bg-white hover:text-studio-black transition-all duration-300"
            >
              {ctaLabel}
            </Link>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      {height === 'full' && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
          <div className="w-px h-12 bg-white/40 animate-pulse" />
        </div>
      )}
    </section>
  );
}
