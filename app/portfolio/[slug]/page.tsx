import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProjectBySlug, getAllSlugs } from '@/lib/projects';
import ImageGallery from '@/components/ImageGallery';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Studio Arcane`,
      description: project.shortDescription,
      images: [
        {
          url: project.heroImage.src,
          alt: project.heroImage.alt,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.shortDescription,
    locationCreated: {
      '@type': 'Place',
      name: project.location,
    },
    dateCreated: project.year,
    creator: {
      '@type': 'Organization',
      name: 'Studio Arcane',
      url: 'https://studio-arcane.example.com',
    },
    image: project.heroImage.src,
    keywords: project.tags.join(', '),
  };

  const paragraphs = project.description.split('\n\n');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <Image
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" aria-hidden="true" />
        <div className="absolute bottom-12 left-0 right-0 px-6">
          <div className="max-w-content mx-auto">
            <p className="font-sans text-xs tracking-ultra-wide uppercase text-white/60 mb-3">
              {project.category}
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-white leading-none mb-3">
              {project.title}
            </h1>
            <p className="font-body text-lg text-white/70">
              {project.location} · {project.year}
            </p>
          </div>
        </div>
      </section>

      {/* Project content */}
      <section className="py-20 md:py-28">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Description */}
            <div className="lg:col-span-3">
              <p className="font-body text-lg text-studio-muted leading-relaxed mb-4 font-medium">
                {project.shortDescription}
              </p>
              <div className="prose prose-stone max-w-none">
                {paragraphs.map((p, i) => (
                  <p key={i} className="font-body text-base text-studio-muted leading-relaxed mb-5">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* Metadata */}
            <aside className="lg:col-span-2" aria-label="Project details">
              <dl className="space-y-6 mb-10">
                <div>
                  <dt className="font-sans text-xs tracking-widest uppercase text-studio-muted mb-1">
                    Location
                  </dt>
                  <dd className="font-body">{project.location}</dd>
                </div>
                <div>
                  <dt className="font-sans text-xs tracking-widest uppercase text-studio-muted mb-1">
                    Type
                  </dt>
                  <dd className="font-body">{project.tags.join(', ')}</dd>
                </div>
                <div>
                  <dt className="font-sans text-xs tracking-widest uppercase text-studio-muted mb-1">
                    Year
                  </dt>
                  <dd className="font-body">{project.year}</dd>
                </div>
              </dl>

              <Link
                href="/contact"
                className="block font-sans text-xs tracking-widest uppercase border border-studio-black px-6 py-4 text-center hover:bg-studio-black hover:text-white transition-colors duration-300"
              >
                Discuss a similar project →
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-20 md:pb-28" aria-labelledby="gallery-heading">
        <div className="max-w-content mx-auto px-6">
          <h2 id="gallery-heading" className="font-display text-2xl mb-8">
            Photography
          </h2>
          <ImageGallery images={project.gallery} />
          <p className="mt-4 font-sans text-xs text-studio-muted">
            Photography by {[...new Set(project.gallery.map((i) => i.photographer))].join(', ')}
          </p>
        </div>
      </section>

      {/* Navigation */}
      <div className="border-t border-studio-border py-10">
        <div className="max-w-content mx-auto px-6 flex items-center justify-between">
          <Link
            href="/portfolio"
            className="font-sans text-xs tracking-widest uppercase hover:text-studio-muted transition-colors"
          >
            ← Back to Portfolio
          </Link>
          <Link
            href="/contact"
            className="font-sans text-xs tracking-widest uppercase hover:text-studio-muted transition-colors"
          >
            Contact →
          </Link>
        </div>
      </div>
    </>
  );
}
