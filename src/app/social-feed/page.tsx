import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialFeedClient from '@/components/SocialFeedClient';

export const metadata: Metadata = {
  title: 'Social Feed Notice | New York Auto Museum',
  description: 'Curator free tier monthly visitor limit notice and direct social media channel links for the New York Auto Museum.',
  openGraph: {
    title: 'Social Feed Notice | New York Auto Museum',
    description: 'Curator free tier monthly visitor limit notice and official social channel links for the New York Auto Museum.',
    url: 'https://www.newyorkautomuseum.com/social-feed',
    siteName: 'New York Auto Museum',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Feed Notice | New York Auto Museum',
    description: 'Official social media channel links for the New York Auto Museum.',
  },
};

export default function SocialFeedPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'transparent' }}>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'transparent' }}>
        <SocialFeedClient />
      </main>
      <Footer />
    </div>
  );
}
