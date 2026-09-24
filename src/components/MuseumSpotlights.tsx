'use client';

import Image from 'next/image';
import TextReveal from './TextReveal';

export default function MuseumSpotlights() {
  return (
    <section
      id="spotlights"
      className="museum-spotlights-section"
      style={{
        backgroundColor: 'transparent',
        padding: '110px 0 160px 0',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <span className="section-tag">Destination &amp; Institution</span>
          <TextReveal as="h2" className="section-title" text="The Museum &amp; Partners" />
          <TextReveal
            as="p"
            className="section-subtitle"
            text="An unprecedented landmark proposed for New York City, uniting automotive science, historical collections, and global OEM alliances."
          />
        </div>

        {/* All 3 Spotlights: Sticky Scroll-Stacking Deck Cards */}
        <div className="stacking-cards-container">
          {/* Card 1: The Museum */}
          <div id="the-museum" className="spotlight-card stack-card-1">
            {/* Image Side */}
            <div className="spotlight-media" style={{ backgroundColor: '#0F172A' }}>
              <Image
                src="/images/bigtire.JPG"
                alt="The Museum - Proposed 200,000+ Sq Ft New York City Facility"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  backgroundColor: 'rgba(18, 24, 36, 0.88)',
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
                <span style={{ color: '#E11D48' }}>●</span> Proposed New York City Landmark • Glass Floors
              </div>
            </div>

            {/* Content Side */}
            <div
              className="spotlight-content"
              style={{
                backgroundColor: 'rgba(18, 24, 36, 0.88)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#E11D48',
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
                threshold="top 90%"
                style={{
                  fontSize: 'clamp(1.8rem, 2.6vw, 2.3rem)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  marginBottom: '16px',
                }}
              />

              <TextReveal
                as="p"
                threshold="top 90%"
                delay={0.08}
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#94A3B8',
                  fontWeight: 500,
                  marginBottom: '12px',
                }}
                text="Our proposed 200,000+- square-foot New York City location is set to impress. With a planned rooftop patio and partially glass floors, NYAM visitors will get to see above and beneath many of the extravagant vehicles on display. Also another original exclusive world-first; allows visitors to sit in up to 100 vehicles at any given time."
              />

              <TextReveal
                as="p"
                threshold="top 90%"
                delay={0.16}
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: '#94A3B8',
                }}
                text="The New York Auto Museum is developed to change the way you think about an automotive museum."
              />
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
                  backgroundColor: 'rgba(18, 24, 36, 0.88)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.3)',
                }}
              >
                Global Alliances
              </div>
            </div>

            {/* Content Side */}
            <div
              className="spotlight-content"
              style={{
                backgroundColor: 'rgba(18, 24, 36, 0.88)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#E11D48',
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
                threshold="top 90%"
                style={{
                  fontSize: 'clamp(1.8rem, 2.6vw, 2.3rem)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: '16px',
                }}
              />

              <TextReveal
                as="p"
                threshold="top 90%"
                delay={0.08}
                style={{
                  fontSize: '1.02rem',
                  lineHeight: 1.75,
                  color: '#94A3B8',
                }}
                text="NYA is continuously working to forge partnerships with OEMs, media conglomerates, automotive aficionados, race car drivers, race car team owners, Fortune 500 companies, automotive journalists, the public, VIPs, the State of New York, New York City, and NY Grant Company."
              />
            </div>
          </div>

          {/* Card 3: About Us */}
          <div id="about" className="spotlight-card stack-card-3">
            {/* Image Side: Inset white branding plaque on obsidian backdrop */}
            <div
              className="spotlight-media"
              style={{
                backgroundColor: 'rgba(11, 14, 20, 0.65)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '28px clamp(16px, 3vw, 36px)',
                borderRight: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  maxWidth: '440px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)',
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image
                    src="/images/world-motorsport.jpg"
                    alt="World Motorsport Hall of Fame"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div
              className="spotlight-content"
              style={{
                backgroundColor: 'rgba(18, 24, 36, 0.88)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                padding: 'clamp(32px, 4.5vw, 56px)',
              }}
            >
              <TextReveal
                as="h3"
                text="About Us"
                threshold="top 90%"
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              />

              <TextReveal
                as="p"
                threshold="top 90%"
                delay={0.08}
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  color: '#94A3B8',
                  fontWeight: 400,
                }}
                text="NYA is led by a seasoned board of advisors, directors, and executive management. Anticipated financial partners include major banks, OEMs, advertising agencies, publicity firms, investment funds, private equity firms, players in heavy industry, and entities from the broader private sector."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
