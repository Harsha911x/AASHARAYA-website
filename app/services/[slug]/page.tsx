import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/services';
import { getProjectBySlug } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: service.title,
    description: service.philosophy.slice(0, 160).replace('\n', ' '),
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedProjects = service.projectSlugs
    .map(getProjectBySlug)
    .filter(Boolean) as ReturnType<typeof getProjectBySlug>[];

  const philosophyParagraphs = service.philosophy.split('\n\n');

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.heroAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/65" aria-hidden="true" />
        <div className="absolute bottom-12 left-0 right-0 px-6">
          <div className="max-w-content mx-auto">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-white/50">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/services/residential-architects" className="hover:text-white transition-colors">Services</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white/80">{service.title}</li>
              </ol>
            </nav>
            <h1 className="font-display text-5xl md:text-6xl text-white leading-none">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-28" aria-labelledby="service-philosophy-heading">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 id="service-philosophy-heading" className="font-display text-3xl md:text-4xl mb-10 leading-tight">
                {service.headline}
              </h2>
              <div className="space-y-5">
                {philosophyParagraphs.map((para, i) => (
                  <p key={i} className="font-body text-lg text-studio-muted leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              {/* What's included */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-studio-muted mb-6">
                  What this includes
                </h3>
                <ul className="space-y-3" aria-label="Service inclusions">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2.5 w-4 h-px bg-studio-black shrink-0" aria-hidden="true" />
                      <span className="font-body text-base">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA card */}
              <div className="border border-studio-border p-7 bg-studio-gray">
                <p className="font-display text-xl mb-2">Ready to discuss your project?</p>
                <p className="font-body text-sm text-studio-muted mb-6 leading-relaxed">
                  Get in touch and Ashok will respond within two working days.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="font-sans text-xs tracking-widest uppercase bg-studio-black text-white px-6 py-3.5 text-center hover:bg-studio-muted transition-colors"
                  >
                    Send an enquiry →
                  </Link>
                  <a
                    href="tel:+919901815989"
                    className="font-sans text-xs tracking-widest uppercase border border-studio-black px-6 py-3.5 text-center hover:bg-studio-black hover:text-white transition-colors"
                  >
                    Call: +91 99018 15989
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-studio-black text-white" aria-labelledby="process-heading">
        <div className="max-w-content mx-auto px-6">
          <h2 id="process-heading" className="font-display text-3xl md:text-4xl mb-14">
            How we work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {service.process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-sans text-xs text-white/30">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 h-px bg-white/10" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg text-white mb-2">{item.step}</h3>
                <p className="font-body text-sm text-white/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 md:py-28 bg-studio-gray" aria-labelledby="related-heading">
          <div className="max-w-content mx-auto px-6">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="font-sans text-xs tracking-ultra-wide uppercase text-studio-muted mb-3">
                  Selected work
                </p>
                <h2 id="related-heading" className="font-display text-2xl md:text-3xl">
                  Related Projects
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
              {relatedProjects.map(
                (project) => project && <ProjectCard key={project.slug} project={project} />
              )}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 bg-studio-white border-t border-studio-border">
        <div className="max-w-content mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl mb-1">Start with a conversation.</p>
            <p className="font-body text-studio-muted">No obligation — just a chance to talk through your project.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 font-sans text-xs tracking-widest uppercase bg-studio-black text-white px-8 py-4 hover:bg-studio-muted transition-colors"
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}
