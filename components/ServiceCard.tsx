import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ServiceCard({ title, description, href, imageSrc, imageAlt }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden bg-studio-gray hover:bg-studio-black transition-colors duration-500"
      aria-label={`Learn about our ${title} service`}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" aria-hidden="true" />
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl text-studio-black group-hover:text-white transition-colors duration-500 mb-2">
          {title}
        </h3>
        <p className="font-body text-sm text-studio-muted group-hover:text-white/70 transition-colors duration-500 leading-relaxed">
          {description}
        </p>
        <span className="inline-block mt-4 font-sans text-xs tracking-widest uppercase text-studio-black group-hover:text-white/60 transition-colors duration-500 border-b border-transparent group-hover:border-white/40 pb-0.5">
          Learn more →
        </span>
      </div>
    </Link>
  );
}
