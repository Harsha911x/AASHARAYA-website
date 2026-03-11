import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block overflow-hidden"
      aria-label={`View project: ${project.title}`}
    >
      <div className="relative overflow-hidden bg-studio-gray" style={{ paddingBottom: '75%' }}>
        <Image
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500"
          aria-hidden="true"
        />
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <span className="font-sans text-xs tracking-widest uppercase text-white/90">
            View Project →
          </span>
        </div>
      </div>

      <div className="pt-4 pb-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg leading-tight text-studio-black">{project.title}</h3>
          <span className="font-sans text-xs tracking-wider uppercase text-studio-muted mt-1 shrink-0">
            {project.category}
          </span>
        </div>
        <p className="font-body text-sm text-studio-muted mt-1">{project.location}</p>
      </div>
    </Link>
  );
}
