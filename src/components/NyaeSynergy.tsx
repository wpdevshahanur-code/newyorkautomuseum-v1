'use client';

import Image from 'next/image';
import TextReveal from './TextReveal';

export default function NyaeSynergy() {
  return (
    <section
      id="nyae"
      style={{
        padding: '90px 0',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
            border: '1px solid #E2E8F0',
            borderRadius: '24px',
            padding: 'clamp(36px, 5vw, 60px)',
            boxShadow: '0 8px 30px rgba(15, 23, 42, 0.04)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Text & Action */}
          <div>
            <span className="section-tag" style={{ marginBottom: '14px' }}>
              Dual Charter Synergy
            </span>

            <TextReveal
              as="h2"
              text="Check out the New York Auto Experience At:"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight: 900,
                color: '#0F172A',
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
                marginBottom: '16px',
              }}
            />

            <p
              style={{
                fontSize: '1.05rem',
                color: '#475569',
                lineHeight: 1.7,
                marginBottom: '28px',
              }}
            >
              Explore the educational non-profit charter, STEM youth initiatives, and experiential programs powering our mission.
            </p>

            <a
              href="https://newyorkautoexperience.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                padding: '14px 30px',
                fontSize: '1rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              Visit newyorkautoexperience.org &rarr;
            </a>
          </div>

          {/* Right Column: High-Contrast Official Institutional Badge */}
          <a
            href="https://newyorkautoexperience.org/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              display: 'block',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '20px',
                padding: '44px 36px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 12px 35px rgba(15, 23, 42, 0.25)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
            >
              {/* Authentic White NYAE Logo (Now razor-sharp on luxury dark background) */}
              <div style={{ position: 'relative', width: '100%', maxWidth: '320px', height: '90px' }}>
                <Image
                  src="/images/NYAE-logo.png"
                  alt="The New York Auto Experience logo"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* Verified Institutional Subtitle */}
              <div
                style={{
                  marginTop: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <span style={{ color: '#E63946', fontSize: '0.8rem' }}>●</span>
                <span
                  style={{
                    color: '#CBD5E1',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  501(c)(3) Public Charity • EIN 92-2822778
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
