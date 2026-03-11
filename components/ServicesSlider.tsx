'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    title: 'Residential Architects',
    tagline: 'Homes designed around the way you live.',
    href: '/services/residential-architects',
    imageSrc: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=85',
    imageAlt: 'Light-filled residential interior with natural materials',
  },
  {
    title: 'Commercial Architects',
    tagline: 'Workplaces that perform and inspire.',
    href: '/services/commercial-architects',
    imageSrc: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85',
    imageAlt: 'Contemporary open-plan commercial studio with exposed structure',
  },
  {
    title: 'Interior Design',
    tagline: 'Interiors that are personal, not decorative.',
    href: '/services/residential-interior-design',
    imageSrc: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=85',
    imageAlt: 'Refined interior with warm material palette and curated objects',
  },
  {
    title: 'Planning Applications',
    tagline: 'Expert navigation of a complex process.',
    href: '/services/planning-applications',
    imageSrc: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=85',
    imageAlt: 'Architectural drawings and planning documentation on a studio desk',
  },
  {
    title: 'Conservation & Heritage',
    tagline: 'Stewardship as a creative act.',
    href: '/services/conservation-heritage-design',
    imageSrc: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1400&q=85',
    imageAlt: 'Restored heritage building façade',
  },
  {
    title: 'Create & Construct',
    tagline: 'Architecture and construction, seamlessly united.',
    href: '/services/create-construct',
    imageSrc: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=85',
    imageAlt: 'Quality construction detail showing skilled craftsmanship',
  },
];

export default function ServicesSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(index);
      setTimeout(() => setAnimating(false), 700);
    },
    [animating]
  );

  const next = useCallback(() => go((current + 1) % slides.length), [current, go]);
  const prev = useCallback(() => go((current - 1 + slides.length) % slides.length), [current, go]);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 5000);
  }, [next]);

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetInterval]);

  const handleNav = (index: number) => {
    go(index);
    resetInterval();
  };

  return (
    <section className="bg-studio-black" aria-labelledby="services-slider-heading">
      <div className="max-w-content mx-auto px-6 pt-16 pb-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-sans text-xs tracking-ultra-wide uppercase text-white/40 mb-3">
              What we do
            </p>
            <h2
              id="services-slider-heading"
              className="font-display text-3xl md:text-4xl text-white"
            >
              Our Services
            </h2>
          </div>
          {/* Prev / Next */}
          <div className="flex gap-3">
            <button
              onClick={() => { prev(); resetInterval(); }}
              aria-label="Previous service"
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-white hover:text-white transition-colors"
            >
              ←
            </button>
            <button
              onClick={() => { next(); resetInterval(); }}
              aria-label="Next service"
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-white hover:text-white transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Slide */}
      <div className="relative overflow-hidden" style={{ height: '520px' }} aria-live="polite" aria-atomic="true">
        {slides.map((slide, i) => (
          <div
            key={slide.href}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? 'auto' : 'none' }}
            aria-hidden={i !== current}
          >
            <Image
              src={slide.imageSrc}
              alt={slide.imageAlt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" aria-hidden="true" />
            <div className="absolute inset-0 flex items-end pb-16 px-6">
              <div className="max-w-content mx-auto w-full">
                <p className="font-sans text-xs tracking-ultra-wide uppercase text-white/50 mb-4">
                  {String(i + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                </p>
                <h3 className="font-display text-4xl md:text-6xl text-white leading-none mb-4">
                  {slide.title}
                </h3>
                <p className="font-body text-lg text-white/70 mb-8 max-w-md">
                  {slide.tagline}
                </p>
                <Link
                  href={slide.href}
                  className="inline-block font-sans text-xs tracking-widest uppercase text-white border border-white/50 px-7 py-3 hover:bg-white hover:text-studio-black transition-all duration-300"
                  tabIndex={i === current ? 0 : -1}
                >
                  Explore service →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators + thumbnail strip */}
      <div className="max-w-content mx-auto px-6 py-8">
        {/* Thumbnail strip */}
        <div className="hidden md:grid grid-cols-6 gap-2 mb-6">
          {slides.map((slide, i) => (
            <button
              key={slide.href}
              onClick={() => handleNav(i)}
              aria-label={`View ${slide.title}`}
              aria-current={i === current ? 'true' : undefined}
              className="relative overflow-hidden group"
              style={{ paddingBottom: '60%' }}
            >
              <Image
                src={slide.imageSrc}
                alt=""
                fill
                className="object-cover transition-all duration-300 group-hover:scale-105"
                sizes="200px"
                loading="lazy"
              />
              <div
                className="absolute inset-0 transition-colors duration-300"
                style={{ background: i === current ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.55)' }}
                aria-hidden="true"
              />
              {i === current && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" aria-hidden="true" />
              )}
              <span className="absolute bottom-2 left-2 right-2 font-sans text-white text-xs leading-tight opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                {slide.title}
              </span>
            </button>
          ))}
        </div>

        {/* Dot navigation (mobile) */}
        <div className="flex md:hidden justify-center gap-2" role="tablist" aria-label="Service slides">
          {slides.map((slide, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to ${slide.title}`}
              onClick={() => handleNav(i)}
              className="transition-all duration-300"
            >
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  background: i === current ? '#ffffff' : 'rgba(255,255,255,0.3)',
                }}
              />
            </button>
          ))}
        </div>

        {/* Auto-progress bar */}
        <div className="mt-4 h-px bg-white/10 overflow-hidden">
          <div
            key={current}
            className="h-full bg-white/40"
            style={{ animation: 'progressBar 5s linear forwards' }}
            aria-hidden="true"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
