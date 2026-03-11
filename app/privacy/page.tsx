import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Studio Arcane privacy policy — how we collect, use, and protect your personal data.',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-studio-white border-b border-studio-border">
        <div className="max-w-content mx-auto px-6">
          <h1 className="font-display text-5xl md:text-6xl text-studio-black">Privacy Policy</h1>
          <p className="font-body text-studio-muted mt-4">Last updated: January 2024</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="prose prose-stone font-body space-y-8 text-studio-muted leading-relaxed">
            <div>
              <h2 className="font-display text-2xl text-studio-black mb-4">Who we are</h2>
              <p>
                Studio Arcane Architecture Ltd (&quot;Studio Arcane&quot;, &quot;we&quot;, &quot;us&quot;) is a company
                registered in England and Wales. This privacy policy explains how we collect, use,
                and protect your personal data when you use our website or contact us.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-studio-black mb-4">
                What data we collect
              </h2>
              <p>
                When you complete our contact form, we collect your name, email address, phone
                number (optional), and message. We use this information solely to respond to your
                enquiry. We do not sell or share your data with third parties for marketing
                purposes.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-studio-black mb-4">
                How we store your data
              </h2>
              <p>
                Form submissions are processed via Formspree and stored securely. We retain
                enquiry data for 24 months, after which it is deleted. You have the right to
                request deletion of your data at any time by contacting us at{' '}
                <a
                  href="mailto:studio@studio-arcane.com"
                  className="text-studio-black underline"
                >
                  studio@studio-arcane.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-studio-black mb-4">Cookies</h2>
              <p>
                Our website does not use analytics cookies or tracking cookies. We use only
                essential cookies required for the website to function correctly.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-studio-black mb-4">Your rights</h2>
              <p>
                Under UK GDPR, you have the right to access, correct, and delete personal data
                we hold about you, and to object to or restrict our processing of your data. To
                exercise any of these rights, please contact us at the address below.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-studio-black mb-4">Contact</h2>
              <p>
                Studio Arcane Architecture Ltd<br />
                12 Albemarle Street, Mayfair, London W1S 4HF<br />
                <a href="mailto:studio@studio-arcane.com" className="text-studio-black underline">
                  studio@studio-arcane.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
