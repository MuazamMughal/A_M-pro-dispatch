import type { Metadata, Viewport } from 'next';
import './globals.css';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileActionDock from '@/components/MobileActionDock';

export const viewport: Viewport = {
  themeColor: '#0b0f17',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: 'A&M Pro Dispatch | Professional Truck Dispatching Services USA',
    template: '%s | A&M Pro Dispatch',
  },
  description:
    'A&M Pro Dispatch provides top-tier freight dispatching services for owner-operators and fleet carriers in the United States. High RPM load negotiation, complete paperwork, 24/7 support. Your Freight. Our Focus.',
  keywords: [
    'truck dispatch services',
    'freight dispatcher usa',
    'owner operator dispatching',
    'dry van dispatch',
    'reefer dispatch services',
    'flatbed dispatch services',
    'box truck dispatching',
    'hotshot dispatch service',
    'power only dispatch',
    'A&M Pro Dispatch',
    'trucking back office services',
    'freight rate negotiation',
  ],
  authors: [{ name: 'A&M Pro Dispatch', url: 'https://amprodispatch.com' }],
  creator: 'A&M Pro Dispatch',
  publisher: 'A&M Pro Dispatch LLC',
  metadataBase: new URL('https://amprodispatch.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'A&M Pro Dispatch | Professional Truck Dispatching Services USA',
    description:
      'Premier freight dispatching for owner-operators and fleet carriers nationwide. High-dollar load sourcing, aggressive rate negotiation, complete broker packets, and 24/7 driver support. 100% No Forced Dispatch.',
    url: 'https://amprodispatch.com',
    siteName: 'A&M Pro Dispatch',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        secureUrl: 'https://amprodispatch.com/og-image.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'A&M Pro Dispatch - Dedicated Freight Dispatching Services USA (770) 601-6344',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A&M Pro Dispatch | Professional Truck Dispatching Services USA',
    description:
      'Dedicated truck dispatchers fighting for top rate-per-mile, handling broker packets, and supporting drivers 24/7 nationwide. Your Freight. Our Focus.',
    site: '@amprodispatch',
    creator: '@amprodispatch',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'A&M Pro Dispatch - Dedicated Freight Dispatching Services USA (770) 601-6344',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  other: {
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/jpeg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema 1: Business Profile & Services
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://amprodispatch.com/#organization',
    name: 'A&M Pro Dispatch',
    legalName: 'A&M Pro Dispatch L.L.C.',
    slogan: 'Your Freight. Our Focus.',
    description:
      'Professional freight dispatching firm providing dedicated load sourcing, aggressive rate negotiations, and complete back-office paperwork for motor carriers and owner-operators nationwide.',
    telephone: '+1-770-601-6344',
    email: 'Esmeralda@amprodispatch.com',
    url: 'https://amprodispatch.com',
    logo: 'https://amprodispatch.com/logo.jpg',
    image: 'https://amprodispatch.com/og-image.jpg',
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    employee: {
      '@type': 'Person',
      name: 'Esmeralda Arenas',
      jobTitle: 'Director of Dispatch Operations',
      telephone: '+1-770-601-6344',
      email: 'Esmeralda@amprodispatch.com',
    },
    sameAs: [
      'https://instagram.com/amprodispatch',
      'https://facebook.com/amprodispatch',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '06:00',
        closes: '18:00',
      },
    ],
  };

  // Schema 2: FAQ Rich Snippets for SERP Accordions
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How fast can I get dispatched after submitting my carrier profile?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Once you submit your Carrier Profile Form and email your Certificate of Insurance (COI), W-9, and MC Authority Letter, we review and complete your carrier packet within 2 to 4 hours. You can be booked and rolling on your first load the very same day.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I have to sign a long-term contract with A&M Pro Dispatch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Never. We operate with zero long-term commitments or lock-ins. All we require is that you honor and complete any load we book on your behalf and settle the agreed dispatch fee once delivery is confirmed. You can pause or terminate dispatching at any time with a 1-week notice.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you work with new MC authorities or is there a minimum age requirement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We work with motor carriers that possess at least 1 year of active FMCSA operating authority. This ensures access to the highest-paying freight, top-tier broker networks, and direct shippers who require seasoned authority.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does A&M Pro Dispatch ever force loads on drivers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely not. We have a strict 100% No Forced Dispatch policy. You have complete veto power over every single load, lane, destination, rate per mile, and commodity.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do rate quotes and dispatch fee payments work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide custom, competitive rate quotes tailored to your equipment, preferred lanes, and fleet size when you call in. We work directly with your factoring company for fast funding, or send a simple weekly dispatch invoice only after you complete your deliveries. No upfront fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many trucks does each dispatcher handle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A&M Pro Dispatch caps each dispatcher at a maximum of 4 to 5 trucks. This guarantees your dispatcher is constantly monitoring rate boards and available whenever you call.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if a broker refuses detention or cancels a load (TONU)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We fight aggressively on your behalf. We immediately file for Truck Ordered Not Used (TONU) fees ($150-$300+) and enforce contractual detention rates ($75-$100/hr) with timestamped records.',
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white text-am-dark selection:bg-am-red selection:text-white">
        <TopBar />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileActionDock />
      </body>
    </html>
  );
}
