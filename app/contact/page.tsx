import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Aashraya to discuss your architecture or interior design project in Bengaluru. Ashok T K welcomes enquiries at any stage.',
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-studio-white border-b border-studio-border">
        <div className="max-w-content mx-auto px-6">
          <p className="font-sans text-xs tracking-ultra-wide uppercase text-studio-muted mb-4">
            Get in touch
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-studio-black leading-tight">
            Contact
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl md:text-3xl mb-3">Send an enquiry</h2>
              <p className="font-body text-studio-muted mb-8 leading-relaxed">
                Tell us about your project — its location, scale, and ambitions. We'll be in
                touch within two working days.
              </p>
              <ContactForm />
            </div>

            {/* Info */}
            <aside className="lg:col-span-2" aria-label="Studio contact information">
              <div className="mb-10">
                <h2 className="font-sans text-xs tracking-widest uppercase text-studio-muted mb-5">
                  Visit the studio
                </h2>
                <address className="not-italic font-body leading-relaxed text-studio-black">
                  Aashraya<br />
                  171, 1st Floor, Papareddipalya<br />
                  Annapurneshwari Nagar<br />
                  Bengaluru, Karnataka 560072
                </address>
              </div>

              <div className="mb-10">
                <h2 className="font-sans text-xs tracking-widest uppercase text-studio-muted mb-5">
                  Contact
                </h2>
                <p className="font-body mb-1">
                  <a href="tel:+919901815989" className="hover:text-studio-muted transition-colors">
                    +91 99018 15989
                  </a>
                </p>
                <p className="font-body">
                  <a href="mailto:binduta33@gmail.com" className="hover:text-studio-muted transition-colors">
                    binduta33@gmail.com
                  </a>
                </p>
              </div>

              <div className="mb-10">
                <h2 className="font-sans text-xs tracking-widest uppercase text-studio-muted mb-5">
                  Studio hours
                </h2>
                <dl className="font-body text-sm space-y-1">
                  <div className="flex justify-between">
                    <dt>Monday – Saturday</dt>
                    <dd className="text-studio-muted">9:00 – 18:00 IST</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Sunday</dt>
                    <dd className="text-studio-muted">By appointment</dd>
                  </div>
                </dl>
              </div>

              {/* Map placeholder */}
              <div
                className="relative h-56 bg-studio-gray overflow-hidden border border-studio-border"
                aria-label="Map showing studio at 171, Papareddipalya, Annapurneshwari Nagar, Bengaluru"
                role="img"
              >
                <div className="absolute inset-0 flex items-center justify-center flex-col gap-2 p-4 text-center">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" className="text-studio-muted">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <p className="font-sans text-xs tracking-wider uppercase text-studio-muted">
                    171, Papareddipalya
                  </p>
                  <p className="font-sans text-xs text-studio-muted">
                    Annapurneshwari Nagar, Bengaluru
                  </p>
                  <a
                    href="https://maps.google.com/?q=171+Papareddipalya+Annapurneshwari+Nagar+Bengaluru+560072"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 font-sans text-xs tracking-widest uppercase border-b border-studio-black pb-0.5 hover:text-studio-muted transition-colors"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
