import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import NewsletterClientView from './NewsletterClientView';

export const metadata: Metadata = {
  title: 'Newsletter | New York Auto Museum',
  description: 'Sign up for our newsletter to stay updated with latest news, updates and more.',
  openGraph: {
    title: 'Newsletter | New York Auto Museum',
    description: 'Sign up for our newsletter to stay updated with latest news, updates and more.',
    url: 'https://www.newyorkautomuseum.com/newsletter',
    siteName: 'New York Auto Museum',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.newyorkautomuseum.com/og-image.jpg',
        secureUrl: 'https://www.newyorkautomuseum.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'New York Auto Museum Newsletter',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Newsletter | New York Auto Museum',
    description: 'Sign up for our newsletter to stay updated with latest news, updates and more.',
    images: ['https://www.newyorkautomuseum.com/og-image.jpg'],
  },
};

export default function NewsletterPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'transparent' }}>
      <Navbar />
      <main style={{ flex: 1, background: 'transparent' }}>
        <PageHeader
          breadcrumb="Newsletter"
          tag="Stay Connected"
          title="Newsletter"
          subtitle="Sign up for our newsletter to stay updated with latest news, updates and more."
          bgImage="/images/slideshow/IMG_4959.jpg"
          imagePosition="right center"
          imageOpacity={0.72}
        />
        <NewsletterClientView />
      </main>
      <Footer />
    </div>
  );
}
