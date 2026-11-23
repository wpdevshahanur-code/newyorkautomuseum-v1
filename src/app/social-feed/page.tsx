import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialFeedClient from '@/components/SocialFeedClient';

export const metadata: Metadata = {
  title: 'Official Social Feed & Live Media | New York Auto Museum',
  description: 'Live multi-channel social feed streaming the latest photography, video documentaries, exhibits, and community updates from Instagram, YouTube, and Facebook.',
  openGraph: {
    title: 'Social Feed & Live Media Hub | New York Auto Museum',
    description: 'Explore live automotive moments and stories from the New York Auto Museum across Instagram, YouTube, and Facebook.',
    url: 'https://www.newyorkautomuseum.com/social-feed',
    siteName: 'New York Auto Museum',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Feed | New York Auto Museum',
    description: 'Live stream of automotive exhibits, heritage features, and community announcements.',
  },
};

export default function SocialFeedPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'transparent' }}>
      <Navbar />
      <main style={{ flex: 1, background: 'transparent' }}>
        <SocialFeedClient />
      </main>
      <Footer />
    </div>
  );
}
