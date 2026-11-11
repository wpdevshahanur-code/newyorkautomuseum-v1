import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SignUpPageContent from '@/components/SignUpPageContent';
import { SIGNUP_CHANNELS } from '@/lib/signupChannels';
import './signup.css';

export const metadata: Metadata = {
  title: 'Join Committee Board | The New York Auto Experience Inc.',
  description: 'Join the Committee Board to help build the New York Auto Museum Experience Center Inc. in New York City. Pre-qualify online for 501(c)(3) board leadership.',
  openGraph: {
    title: 'Join Committee Board | The New York Auto Museum Experience Center',
    description: 'Pre-qualify online to join the Committee Board and help build the premier 200,000+ sq ft New York City automotive landmark.',
    url: 'https://www.newyorkautomuseum.com/sign-up',
    siteName: 'New York Auto Museum',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.newyorkautomuseum.com/og-image.jpg',
        secureUrl: 'https://www.newyorkautomuseum.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The New York Auto Museum Committee Board Logo',
        type: 'image/jpeg',
      },
      {
        url: 'https://www.newyorkautomuseum.com/og-image.png',
        secureUrl: 'https://www.newyorkautomuseum.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The New York Auto Museum Committee Board Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Join Committee Board | The New York Auto Museum Experience Center',
    description: 'Pre-qualify online to join the Committee Board and help build the premier 200,000+ sq ft New York City automotive landmark.',
    images: ['https://www.newyorkautomuseum.com/og-image.jpg'],
  },
};

export default function SignUpPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'transparent' }}>
      <Navbar />
      <main className="signup-page-wrapper" style={{ flex: 1, background: 'transparent' }}>
        <SignUpPageContent channelConfig={SIGNUP_CHANNELS.website} />
      </main>
      <Footer />
    </div>
  );
}
