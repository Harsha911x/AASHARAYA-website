import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ServicesSlider from '@/components/ServicesSlider';
import ProjectCard from '@/components/ProjectCard';
import { getAllProjects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Aashraya — Architecture & Interior Design, Bengaluru',
  description:
    'Aashraya is a Bengaluru-based architecture practice. We design homes, offices, and heritage spaces with care, craft, and considered intent.',
};

export default function HomePage() {
  const featuredProjects = getAllProjects().slice(0, 4);

  return (
    <>
      {/* Hero */}
      <Hero
        imageSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85"
        imageAlt="Expansive light-filled interior space — Aashraya Architecture, Bengaluru"
        headline="Design Matters"
        subheadline="Architecture & Interior Design — Bengaluru"
        ctaLabel="View our portfolio"
        ctaHref="/portfolio"
        overlay="dark"
        priority
        height="full"
      />

      {/* About strip */}
      <section className="py-20 md:py-28 bg-studio-white" aria-labelledby="about-heading">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-2xl">
            <p className="font-sans text-xs tracking-ultra-wide uppercase text-studio-muted mb-6">
              Bengaluru, Karnataka
            </p>
            <h2
              id="about-heading"
              className="font-display text-4xl md:text-5xl text-studio-black leading-tight mb-8"
            >
              We design spaces that endure.
            </h2>
            <p className="font-body text-lg text-studio-muted leading-relaxed mb-8">
              Aashraya is a Bengaluru-based architecture and interior design practice. We work
              across residential, commercial, conservation and heritage projects — always with the
              same unhurried attention to craft, detail, and the quality of everyday life within
              a space.
            </p>
            <Link
              href="/about"
              className="font-sans text-xs tracking-widest uppercase border-b border-studio-black pb-0.5 hover:text-studio-muted hover:border-studio-muted transition-colors"
            >
              About the studio →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Slider */}
      <ServicesSlider />

      {/* Featured projects */}
      <section className="py-20 md:py-28 bg-studio-gray" aria-labelledby="projects-heading">
        <div className="max-w-content mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-sans text-xs tracking-ultra-wide uppercase text-studio-muted mb-3">
                Selected Work
              </p>
              <h2
                id="projects-heading"
                className="font-display text-3xl md:text-4xl text-studio-black"
              >
                Featured Projects
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="hidden md:block font-sans text-xs tracking-widest uppercase text-studio-muted hover:text-studio-black transition-colors"
            >
              Full portfolio →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <Link
              href="/portfolio"
              className="font-sans text-xs tracking-widest uppercase border-b border-studio-black pb-0.5"
            >
              View full portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative h-80 overflow-hidden" aria-labelledby="cta-heading">
        <Image
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80"
          alt="Interior of a beautifully designed studio space"
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 id="cta-heading" className="font-display text-3xl md:text-5xl text-white mb-6">
            Have a project in mind?
          </h2>
          <Link
            href="/contact"
            className="font-sans text-xs tracking-widest uppercase text-white border border-white/60 px-8 py-3.5 hover:bg-white hover:text-studio-black transition-all duration-300"
          >
            Start a conversation →
          </Link>
        </div>
      </section>
    </>
  );
}
