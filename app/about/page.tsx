import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Aashraya is a Bengaluru-based architecture and interior design practice led by Ashok T K. We work with care and precision, placing craft and client vision at the centre of every project.',
};

const values = [
  {
    title: 'Listening',
    description:
      'Every project begins not with a drawing but with a conversation. We invest time in understanding how you live, work, and move through space before we put pencil to paper.',
  },
  {
    title: 'Craft',
    description:
      'Quality of execution is as important as quality of idea. We work closely with skilled tradespeople and contractors who share our exacting standards.',
  },
  {
    title: 'Context',
    description:
      'Good architecture responds to its surroundings — its climate, street, history, and neighbourhood — before it asserts its own identity.',
  },
  {
    title: 'Longevity',
    description:
      'We design for the long term. The spaces we create should improve with age, and our material choices reflect that commitment to endurance.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        imageSrc="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=85"
        imageAlt="Studio interior with natural light and architectural drawings — Aashraya, Bengaluru"
        headline="About Aashraya"
        overlay="dark"
        height="large"
        priority
      />

      {/* Mission */}
      <section className="py-20 md:py-28" aria-labelledby="mission-heading">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-sans text-xs tracking-ultra-wide uppercase text-studio-muted mb-6">
                Bengaluru, Karnataka
              </p>
              <h1 id="mission-heading" className="font-display text-4xl md:text-5xl leading-tight mb-8">
                An unhurried approach to considered design.
              </h1>
              <p className="font-body text-lg text-studio-muted leading-relaxed mb-6">
                Aashraya was founded with a clear conviction: that great architecture is less about
                spectacle and more about quiet precision. The practice is rooted in a deep
                commitment to the people who commission and inhabit our work — their lives, their
                aspirations, and the everyday moments that a good building can make better.
              </p>
              <p className="font-body text-lg text-studio-muted leading-relaxed mb-6">
                Our commissions range from carefully considered private homes to commercial
                interiors, conservation work, and planning consultancy. In each case, the process
                is the same — patient, collaborative, and rigorous. We listen before we draw, and
                we draw before we build.
              </p>
              <p className="font-body text-lg text-studio-muted leading-relaxed">
                The studio is based in Annapurneshwari Nagar, Bengaluru, and takes on projects
                across Karnataka and beyond.
              </p>
            </div>
            <div className="relative">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80"
                  alt="Aashraya studio — architectural drawings and model-making workspace in Bengaluru"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 font-sans text-xs text-studio-muted">
                Studio — Annapurneshwari Nagar, Bengaluru
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24 bg-studio-gray" aria-labelledby="values-heading">
        <div className="max-w-content mx-auto px-6">
          <h2 id="values-heading" className="font-display text-3xl md:text-4xl mb-14">
            What we believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value) => (
              <article key={value.title}>
                <div className="w-8 h-px bg-studio-black mb-6" aria-hidden="true" />
                <h3 className="font-display text-xl mb-3">{value.title}</h3>
                <p className="font-body text-sm text-studio-muted leading-relaxed">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28" aria-labelledby="team-heading">
        <div className="max-w-content mx-auto px-6">
          <h2 id="team-heading" className="font-display text-3xl md:text-4xl mb-14">
            The architect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start max-w-3xl">
            <div className="relative h-96 overflow-hidden bg-studio-gray">
              <Image
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=80"
                alt="Ashok T K, Architect and Founder of Aashraya"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="font-display text-3xl mb-2">Ashok T K</h3>
              <p className="font-sans text-xs tracking-wider uppercase text-studio-muted mb-6">
                Architect & Founder
              </p>
              <p className="font-body text-base text-studio-muted leading-relaxed mb-4">
                Ashok founded Aashraya with the belief that architecture should always serve the
                people who live and work within it. His practice spans residential design,
                commercial interiors, conservation work, and planning consultancy across Karnataka.
              </p>
              <p className="font-body text-base text-studio-muted leading-relaxed mb-6">
                With a meticulous approach to craft and a genuine investment in every client
                brief, Ashok brings the same care to a single-room intervention as to a
                large-scale new build.
              </p>
              <div className="space-y-2">
                <a
                  href="tel:+919901815989"
                  className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase hover:text-studio-muted transition-colors"
                >
                  <span>+91 99018 15989</span>
                </a>
                <a
                  href="mailto:binduta33@gmail.com"
                  className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase hover:text-studio-muted transition-colors"
                >
                  <span>binduta33@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-studio-black text-white text-center" aria-labelledby="about-cta-heading">
        <div className="max-w-lg mx-auto px-6">
          <h2 id="about-cta-heading" className="font-display text-3xl md:text-4xl mb-6">
            Let's work together
          </h2>
          <p className="font-body text-white/60 mb-8 leading-relaxed">
            We welcome enquiries at any stage — whether your project is clearly defined or still
            just an idea. Get in touch and let's talk.
          </p>
          <Link
            href="/contact"
            className="font-sans text-xs tracking-widest uppercase border border-white/40 px-8 py-3.5 hover:bg-white hover:text-studio-black transition-all duration-300"
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}
