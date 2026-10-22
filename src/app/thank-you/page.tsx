import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Thank You | New York Auto Museum',
  description: 'Thank you for your submission to the New York Auto Museum.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'transparent' }}>
      <Navbar />
      
      {/* Meta Pixel Lead Conversion Event */}
      <Script id="meta-pixel-lead-conversion" strategy="afterInteractive">
        {`
          if (typeof window.fbq === 'function') {
            window.fbq('track', 'Lead', {
              content_name: 'Website Lead Form Submission',
              currency: 'USD'
            });
          }
        `}
      </Script>

      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 20px 80px' }}>
        <div
          style={{
            maxWidth: '680px',
            width: '100%',
            background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.92) 0%, rgba(10, 15, 29, 0.96) 100%)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            borderRadius: '16px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(212, 175, 55, 0.1)',
            padding: '48px 36px',
            textAlign: 'center',
            color: '#F8FAFC',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Animated/Glowing Check Icon */}
          <div
            style={{
              width: '84px',
              height: '84px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.05) 70%)',
              border: '2px solid #10B981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              fontSize: '38px',
              color: '#10B981',
              boxShadow: '0 0 30px rgba(16, 185, 129, 0.35)',
            }}
          >
            ✓
          </div>

          <span
            style={{
              display: 'inline-block',
              fontSize: '12px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#D4AF37',
              fontWeight: 600,
              marginBottom: '10px',
            }}
          >
            Submission Confirmed
          </span>

          <h1
            style={{
              fontSize: '32px',
              fontWeight: 700,
              lineHeight: 1.25,
              margin: '0 0 16px',
              color: '#FFFFFF',
              letterSpacing: '-0.5px',
            }}
          >
            Thank You! Your Details Have Been Received.
          </h1>

          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.6,
              color: '#94A3B8',
              margin: '0 auto 28px',
              maxWidth: '540px',
            }}
          >
            Your information has been securely recorded and dispatched to our Executive Committee and Curation Registry. 
            Our team will review your submission and reach out shortly with next steps.
          </p>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '10px',
              padding: '18px 22px',
              margin: '0 auto 32px',
              textAlign: 'left',
              maxWidth: '520px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span style={{ color: '#D4AF37', fontSize: '18px' }}>ℹ️</span>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#E2E8F0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                What Happens Next
              </span>
            </div>
            <ul style={{ margin: 0, paddingLeft: '22px', fontSize: '13.5px', color: '#CBD5E1', lineHeight: 1.6 }}>
              <li>Our team validates your profile and contact details.</li>
              <li>A confirmation summary is sent directly to your registered email.</li>
              <li>For Committee Applicants, our Executive Director will follow up with scheduling.</li>
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #D4AF37 0%, #AA8010 100%)',
                color: '#0A0F1D',
                fontWeight: 700,
                fontSize: '14px',
                padding: '13px 26px',
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.35)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
            >
              ← Return to Homepage
            </Link>
            <Link
              href="/bio"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#F8FAFC',
                fontWeight: 600,
                fontSize: '14px',
                padding: '13px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
              }}
            >
              Executive Bio & Leadership →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
