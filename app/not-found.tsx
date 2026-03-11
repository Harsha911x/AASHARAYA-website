import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="font-sans text-xs tracking-ultra-wide uppercase text-studio-muted mb-6">
        404 — Page not found
      </p>
      <h1 className="font-display text-6xl md:text-8xl text-studio-black mb-8 leading-none">
        Not Found
      </h1>
      <p className="font-body text-studio-muted mb-10 max-w-md leading-relaxed">
        The page you're looking for doesn't exist or may have moved. Try navigating from the
        homepage.
      </p>
      <Link
        href="/"
        className="font-sans text-xs tracking-widest uppercase border-b border-studio-black pb-0.5 hover:text-studio-muted hover:border-studio-muted transition-colors"
      >
        Return to homepage →
      </Link>
    </section>
  );
}
