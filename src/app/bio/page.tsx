import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import BioClientView from './BioClientView';

export const metadata: Metadata = {
  title: 'David Senater | Executive Director & Museum Planner | New York Auto Museum',
  description:
    'Official biography and professional overview of David Senater, Executive Director of Development at New York Auto Museum, museum planner, fine jewelry trade pioneer, and environmentalist.',
  keywords: [
    'David Senater',
    'David S Senater',
    'New York Auto Museum Executive Director',
    'Museum Planner',
    'Toronto Auto Museum',
    'DeBeers Diamond International Award',
    'DiaTender',
    'WatchJewelryTV',
    'Environmentalist',
    'UN Climate Change Innovation HUB',
  ].join(', '),
  alternates: {
    canonical: 'https://www.newyorkautomuseum.com/bio',
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'David Senater | Executive Director & Museum Planner',
    description:
      'Official biography and executive profile of David Senater, Executive Director of Development at the New York Auto Museum.',
    url: 'https://www.newyorkautomuseum.com/bio',
    siteName: 'New York Auto Museum',
    locale: 'en_US',
    type: 'profile',
    images: [
      {
        url: 'https://www.newyorkautomuseum.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'David Senater - Executive Director, New York Auto Museum',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Senater | Executive Director & Museum Planner',
    description:
      'Official biography and executive profile of David Senater, Executive Director of Development at the New York Auto Museum.',
    images: ['https://www.newyorkautomuseum.com/og-image.jpg'],
  },
};

export default function BioPage() {
  notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'David Senater',
    alternateName: 'David S. Senater',
    jobTitle: 'Executive Director of Development',
    worksFor: {
      '@type': 'Organization',
      name: 'New York Auto Museum Experience Center',
      url: 'https://www.newyorkautomuseum.com',
      logo: 'https://www.newyorkautomuseum.com/images/logo-new.png',
      sameAs: [
        'https://www.linkedin.com/company/new-york-auto-museum',
        'https://x.com/NYAutoMuseum',
        'https://www.instagram.com/newyorkautomuseum/',
      ],
    },
    founder: [
      {
        '@type': 'Organization',
        name: 'Toronto Auto Museum',
        url: 'https://www.torontoautomuseum.com',
      },
      {
        '@type': 'Organization',
        name: 'DiaTender Inc.',
      },
      {
        '@type': 'Organization',
        name: 'WatchJewelryTV',
      },
    ],
    email: 'mailto:David.Senater@NewYorkAutoMuseum.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '717 Eglinton Ave West Suite 104',
      addressLocality: 'Toronto',
      addressRegion: 'Ontario',
      postalCode: 'M5N1C9',
      addressCountry: 'CA',
    },
    sameAs: [
      'https://ca.linkedin.com/in/david-senater-08738632',
      'https://www.torontoautomuseum.com',
      'https://www.newyorkautomuseum.com/bio',
    ],
    description:
      'David Senater is the Executive Director of Development at the New York Auto Museum, museum planner, environmentalist, and fine jewelry trade pioneer with over 30 years of global industry leadership.',
    knowsAbout: [
      'Museum Planning & Development',
      'Automotive History & Culture',
      'Fine Jewelry Product Innovation & DeBeers Methodologies',
      'Environmental & Urban Planning Initiatives',
      'UN Climate Change Innovation HUB Advisory',
      'Automotive STEM Youth Education',
    ],
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#070B14', color: '#F8FAFC' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main style={{ flex: 1 }}>
        <PageHeader
          breadcrumb="David Senater"
          tag="Executive Leadership &bull; Museum Planner"
          title="David Senater"
          subtitle="Official biography, DeBeers Diamond International Award think tank heritage, corporate trade systems, and personal memoir."
          bgImage="/images/slideshow/IMG_2071.jpg"
          imagePosition="right 30%"
          imageOpacity={0.70}
        />
        <BioClientView />
      </main>
      <Footer />
    </div>
  );
}
