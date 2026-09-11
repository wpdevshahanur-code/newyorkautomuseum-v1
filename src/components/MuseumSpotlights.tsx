'use client';

import Image from 'next/image';
import TextReveal from './TextReveal';

export default function MuseumSpotlights() {
  return (
    <section
      id="spotlights"
      style={{
        backgroundColor: '#F8FAFC',
        padding: '110px 0 160px 0',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <span className="section-tag">Destination &amp; Institution</span>
          <TextReveal as="h2" className="section-title" text="The Museum &amp; Partners" />
          <p className="section-subtitle">
            An unprecedented landmark proposed for Manhattan, uniting automotive science, historical collections, and global OEM alliances.
          </p>
        </div>

        {/* All 3 Spotlights: Sticky Scroll-Stacking Deck Cards */}
        <div className="stacking-cards-container">
          {/* Card 1: The Museum */}
          <div id="the-museum" className="spotlight-card stack-card-1">
            {/* Image Side */}
            <div className="spotlight-media" style={{ backgroundColor: '#0F172A' }}>
              <Image
                src="/images/bigtire.JPG"
                alt="The Museum - Proposed 200,000+ Sq Ft Manhattan Facility"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  backgroundColor: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ color: '#DC2626' }}>●</span> Proposed Manhattan Landmark • Glass Floors
              </div>
            </div>

            {/* Content Side */}
            <div className="spotlight-content" style={{ backgroundColor: '#FFFFFF' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#DC2626',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  marginBottom: '12px',
                }}
              >
                Flagship Facility
              </div>

              <TextReveal
                as="h3"
                text="The Museum"
                style={{
                  fontSize: 'clamp(1.8rem, 2.6vw, 2.3rem)',
                  fontWeight: 900,
                  color: '#0F172A',
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  marginBottom: '16px',
                }}
              />

              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#334155',
                  fontWeight: 500,
                  marginBottom: '12px',
                }}
              >
                Our proposed 200,000+- square-foot Manhattan location is set to impress. With a planned rooftop patio and partially glass floors, NYAM visitors will get to see above and beneath many of the extravagant vehicles on display. Also another original exclusive world-first; allows visitors to sit in up to 100 vehicles at any given time.
              </p>

              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: '#64748B',
                }}
              >
                The New York Auto Museum is developed to change the way you think about an automotive museum.
              </p>
            </div>
          </div>

          {/* Card 2: Partners */}
          <div id="partners" className="spotlight-card stack-card-2">
            {/* Image Side */}
            <div className="spotlight-media" style={{ backgroundColor: '#0F172A' }}>
              <Image
                src="/images/racecar.JPG"
                alt="Partnership Strategy - Vintage Racing Alliances"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#DC2626',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                }}
              >
                Global Alliances
              </div>
            </div>

            {/* Content Side */}
            <div className="spotlight-content" style={{ backgroundColor: '#FFFFFF' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#DC2626',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  marginBottom: '12px',
                }}
              >
                Strategic Collaborations
              </div>

              <TextReveal
                as="h3"
                text="Partners"
                style={{
                  fontSize: 'clamp(1.8rem, 2.6vw, 2.3rem)',
                  fontWeight: 900,
                  color: '#0F172A',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: '16px',
                }}
              />

              <p
                style={{
                  fontSize: '1.02rem',
                  lineHeight: 1.75,
                  color: '#475569',
                }}
              >
                NYA is continuously working to forge partnerships with OEMs, media conglomerates, automotive aficionados, race car drivers, race car team owners, Fortune 500 companies, automotive journalists, the public, VIPs, the State of New York, New York City, and NY Grant Company.
              </p>
            </div>
          </div>

          {/* Card 3: About Us (Matching Image 2: Full-width logo on left white col, #242B33 on right col) */}
          <div id="about" className="spotlight-card stack-card-3">
            {/* Image Side: Pure White Background, Logo Full Width (Like Image 2) */}
            <div
              className="spotlight-media"
              style={{
                backgroundColor: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px clamp(16px, 3vw, 36px)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  maxWidth: '460px',
                }}
              >
                <Image
                  src="/images/world-motorsport.jpg"
                  alt="World Motorsport Hall of Fame"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Content Side: Dark Charcoal (#242B33) with crisp white text (Like Image 2) */}
            <div
              className="spotlight-content"
              style={{
                backgroundColor: '#242B33',
                padding: 'clamp(32px, 4.5vw, 56px)',
              }}
            >
              <TextReveal
                as="h3"
                text="About Us"
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              />

              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  color: '#CBD5E1',
                  fontWeight: 400,
                }}
              >
                NYA is led by a seasoned board of advisors, directors, and executive management. Anticipated financial partners include major banks, OEMs, advertising agencies, publicity firms, investment funds, private equity firms, players in heavy industry, and entities from the broader private sector.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
