import projectsData from '@/data/projects.json';

export interface ProjectImage {
  src: string;
  alt: string;
  photographer: string;
  sourceUrl: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  shortDescription: string;
  description: string;
  heroImage: ProjectImage;
  gallery: ProjectImage[];
  tags: string[];
}

export function getAllProjects(): Project[] {
  return projectsData as Project[];
}

export function getProjectBySlug(slug: string): Project | undefined {
  return (projectsData as Project[]).find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return projectsData as Project[];
  return (projectsData as Project[]).filter((p) => p.category === category);
}

export function getAllSlugs(): string[] {
  return (projectsData as Project[]).map((p) => p.slug);
}

export const CATEGORIES = ['All', 'Residential', 'Commercial', 'Interiors', 'Conservation'];
