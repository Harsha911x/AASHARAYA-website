import type { Metadata } from 'next';
import PortfolioClient from './PortfolioClient';
import { getAllProjects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    "Browse Studio Arcane's portfolio of architecture and interior design projects across residential, commercial, conservation, and heritage sectors.",
};

export default function PortfolioPage() {
  const projects = getAllProjects();
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 bg-studio-white border-b border-studio-border">
        <div className="max-w-content mx-auto px-6">
          <p className="font-sans text-xs tracking-ultra-wide uppercase text-studio-muted mb-4">
            Selected work
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-studio-black">Portfolio</h1>
        </div>
      </section>
      <PortfolioClient projects={projects} />
    </>
  );
}
