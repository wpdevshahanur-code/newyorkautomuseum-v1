import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialReleaseForm from '@/components/SocialReleaseForm';
import './social.css';

export const metadata: Metadata = {
  title: 'Creator & Vehicle Media Release | The New York Auto Museum',
  description: 'Authorise the New York Auto Museum Experience Center Inc. to feature, showcase, and credit your automotive social media content, builds, and photography across our official digital platforms.',
  openGraph: {
    title: 'Creator & Vehicle Media Release | The New York Auto Museum',
    description: 'Authorise the New York Auto Museum to feature and credit your automotive builds and photography.',
    url: 'https://www.newyorkautomuseum.com/social',
    siteName: 'New York Auto Museum',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.newyorkautomuseum.com/og-image.jpg',
        secureUrl: 'https://www.newyorkautomuseum.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'New York Auto Museum Creator & Vehicle Media Release',
        type: 'image/jpeg',
      },
      {
        url: 'https://www.newyorkautomuseum.com/og-image.png',
        secureUrl: 'https://www.newyorkautomuseum.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'New York Auto Museum Creator & Vehicle Media Release',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creator & Vehicle Media Release | The New York Auto Museum',
    description: 'Authorise the New York Auto Museum to feature and credit your automotive builds and photography.',
    images: ['https://www.newyorkautomuseum.com/og-image.jpg'],
  },
};

export default function SocialPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'transparent' }}>
      <Navbar />
      <main className="social-page-wrapper" style={{ flex: 1, background: 'transparent' }}>
        <div className="container">
          {/* Hero Header */}
          <div className="social-hero-header">
            <div className="social-badge-tag">
              <span>📸</span> Creator &amp; Community Media Network
            </div>
            <h1 className="social-main-title">
              Feature Your Content &amp; Builds on The New York Auto Museum
            </h1>
            <p className="social-main-subtitle">
              We collaborate with automotive photographers, content creators, collectors, and builders to showcase the vibrant world of car culture. Complete this simple media release authorization to have your vehicles and content highlighted across our platforms with full creator attribution.
            </p>

            {/* Trust Highlights */}
            <div className="social-trust-bar">
              <div className="social-trust-item">
                <span><strong>Creator Attribution:</strong> Full Handle &amp; Tag Credit</span>
              </div>
              <div className="social-trust-item">
                <span><strong>501(c)(3) Cultural Institution:</strong> <span>EIN 92-2822778</span></span>
              </div>
              <div className="social-trust-item">
                <span><strong>Global Showcase:</strong> <span>NYC Exhibitions &amp; Digital Media</span></span>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <SocialReleaseForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
