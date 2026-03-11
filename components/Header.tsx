'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  {
    href: '/services/residential-architects',
    label: 'Services',
    children: [
      { href: '/services/residential-architects', label: 'Residential' },
      { href: '/services/commercial-architects', label: 'Commercial' },
      { href: '/services/residential-interior-design', label: 'Interior Design' },
      { href: '/services/planning-applications', label: 'Planning' },
      { href: '/services/conservation-heritage-design', label: 'Conservation' },
      { href: '/services/create-construct', label: 'Create & Construct' },
    ],
  },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled || mobileOpen || !isHome
          ? 'bg-studio-white/95 backdrop-blur-sm border-b border-studio-border'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-content mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" aria-label="Aashraya — Home" className="flex items-center gap-2 group">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className={clsx(
              'transition-colors duration-300',
              scrolled || !isHome ? 'text-studio-black' : 'text-white'
            )}
          >
            <rect width="28" height="28" fill="currentColor" />
            <path d="M14 6L22 22H6L14 6Z" fill="white" />
          </svg>
          <span
            className={clsx(
              'font-display text-sm tracking-widest uppercase transition-colors duration-300',
              scrolled || !isHome ? 'text-studio-black' : 'text-white'
            )}
          >
            AASHRAYA
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={clsx(
                    'font-sans text-xs tracking-widest uppercase transition-colors duration-200',
                    scrolled || !isHome
                      ? 'text-studio-black hover:text-studio-muted'
                      : 'text-white hover:text-white/70'
                  )}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-4 w-56" role="menu">
                    <div className="bg-studio-white border border-studio-border shadow-lg py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className="block px-5 py-2.5 font-sans text-xs tracking-wider uppercase text-studio-black hover:bg-studio-gray transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'font-sans text-xs tracking-widest uppercase transition-colors duration-200',
                  scrolled || !isHome
                    ? 'text-studio-black hover:text-studio-muted'
                    : 'text-white hover:text-white/70',
                  pathname === link.href && 'border-b border-current'
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
        >
          <span
            className={clsx(
              'block h-px w-6 transition-all duration-300 origin-center',
              scrolled || !isHome || mobileOpen ? 'bg-studio-black' : 'bg-white',
              mobileOpen && 'rotate-45 translate-y-2.5'
            )}
          />
          <span
            className={clsx(
              'block h-px w-6 transition-all duration-300',
              scrolled || !isHome || mobileOpen ? 'bg-studio-black' : 'bg-white',
              mobileOpen && 'opacity-0'
            )}
          />
          <span
            className={clsx(
              'block h-px w-6 transition-all duration-300 origin-center',
              scrolled || !isHome || mobileOpen ? 'bg-studio-black' : 'bg-white',
              mobileOpen && '-rotate-45 -translate-y-2.5'
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        className={clsx(
          'md:hidden bg-studio-white border-t border-studio-border transition-all duration-300 overflow-hidden',
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className="font-sans text-xs tracking-widest uppercase text-studio-black"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="mt-3 ml-4 flex flex-col gap-3">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="font-sans text-xs tracking-wider uppercase text-studio-muted"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
