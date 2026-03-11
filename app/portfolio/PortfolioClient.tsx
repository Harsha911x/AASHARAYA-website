'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { CATEGORIES, type Project } from '@/lib/projects';
import clsx from 'clsx';

interface PortfolioClientProps {
  projects: Project[];
}

export default function PortfolioClient({ projects }: PortfolioClientProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-14 md:py-20" aria-labelledby="portfolio-filter-label">
      <div className="max-w-content mx-auto px-6">
        {/* Filter tabs */}
        <div
          className="flex flex-wrap gap-2 mb-12"
          role="tablist"
          aria-label="Filter projects by category"
        >
          <p id="portfolio-filter-label" className="sr-only">
            Filter projects by category
          </p>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                'font-sans text-xs tracking-widest uppercase px-5 py-2.5 border transition-colors duration-200',
                activeCategory === cat
                  ? 'bg-studio-black text-white border-studio-black'
                  : 'border-studio-border text-studio-muted hover:border-studio-black hover:text-studio-black'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        {filtered.length === 0 ? (
          <p className="font-body text-studio-muted">No projects found in this category.</p>
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="tabpanel"
            aria-label={`${activeCategory} projects`}
          >
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
