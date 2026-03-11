import type { Metadata } from 'next';
import { Playfair_Display, Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Aashraya — Architecture & Interior Design, Bengaluru',
    template: '%s | Aashraya',
  },
  description:
    'Aashraya is a Bengaluru-based architecture and interior design practice. We design homes, commercial spaces, and heritage restorations with care and precision.',
  keywords: ['architecture', 'interior design', 'Bengaluru', 'Karnataka', 'residential', 'commercial'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Aashraya',
    title: 'Aashraya — Architecture & Interior Design',
    description: 'Bengaluru-based architecture and interior design practice.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Aashraya — Architecture & Interior Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aashraya — Architecture & Interior Design',
    description: 'Bengaluru-based architecture and interior design practice.',
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
