import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import VolunteerForm from '@/components/VolunteerForm';
import Footer from '@/components/Footer';
import '../sign-up/signup.css';

export const metadata: Metadata = {
  title: 'Volunteer Sign-Up | New York Auto Museum',
  description: 'Volunteer with the New York Auto Museum and The New York Auto Experience Inc. (501(c)(3)) in New York City.',
  openGraph: {
    title: 'Volunteer Sign-Up | New York Auto Museum',
    description: 'Join our volunteer team supporting museum docents, vehicle preservation, STEM workshops, and special events in NYC.',
    url: 'https://www.newyorkautomuseum.com/volunteer',
    siteName: 'New York Auto Museum',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.newyorkautomuseum.com/og-image.jpg',
        secureUrl: 'https://www.newyorkautomuseum.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Volunteer with the New York Auto Museum',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Volunteer Sign-Up | New York Auto Museum',
    description: 'Join our volunteer team in New York City.',
    images: ['https://www.newyorkautomuseum.com/og-image.jpg'],
  },
};

export default function VolunteerPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'transparent' }}>
      <Navbar />
      <main style={{ flex: 1, background: 'transparent' }}>
        <PageHeader
          breadcrumb="Volunteer"
          tag="Community &amp; Service"
          title="Volunteer Program"
          subtitle="Contribute your time, automotive passion, and expertise to support NYC museum exhibitions, archival preservation, and youth STEM programs."
          bgImage="/images/slideshow/IMG_2065.jpg"
          imagePosition="right 38%"
          imageOpacity={0.72}
        />

        <section className="signup-page-wrapper" style={{ minHeight: 'auto', paddingTop: '56px' }}>
          <div className="container">
            <div className="signup-trust-bar" style={{ marginTop: 0, marginBottom: '36px', paddingTop: 0, borderTop: 'none' }}>
              <div className="signup-trust-item">
                <span><strong>501(c)(3) Nonprofit:</strong> <span className="trust-highlight">EIN 92-2822778</span></span>
              </div>
              <div className="signup-trust-item">
                <span><strong>Service Areas:</strong> <span className="trust-dim">Docents, STEM &amp; Events</span></span>
              </div>
              <div className="signup-trust-item">
                <span><strong>Location:</strong> <span className="trust-dim">New York City</span></span>
              </div>
            </div>

            <VolunteerForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
