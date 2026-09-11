'use client';

import Image from 'next/image';
import TextReveal from './TextReveal';

export default function NyaeSynergy() {
  return (
    <section
      id="nyae-synergy"
      className="synergy-section"
      style={{
        backgroundColor: 'transparent',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          className="synergy-card"
          style={{
            background: 'rgba(15, 23, 42, 0.72)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '24px',
            boxShadow: '0 14px 40px rgba(0, 0, 0, 0.45)',
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
                color: '#FFFFFF',
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
                marginBottom: '16px',
              }}
            />

            <TextReveal
              as="p"
              style={{
                fontSize: '1.05rem',
                color: '#CBD5E1',
                lineHeight: 1.7,
                marginBottom: '28px',
              }}
              text="Explore the educational non-profit charter, STEM youth initiatives, and experiential programs powering our mission."
            />

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
              className="synergy-badge-card"
              style={{
                background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 12px 35px rgba(15, 23, 42, 0.25)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
            >
              {/* Authentic White NYAE Logo (Now razor-sharp on luxury dark background) */}
              <div style={{ position: 'relative', width: '100%', maxWidth: '300px', height: '60px' }}>
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
