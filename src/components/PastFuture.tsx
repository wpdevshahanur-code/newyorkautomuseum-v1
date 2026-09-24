'use client';

import Link from 'next/link';
import TextReveal from './TextReveal';

export default function PastFuture() {
  return (
    <section
      id="past-future"
      className="past-future-section"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          className="past-future-grid"
          style={{
            alignItems: 'center',
          }}
        >
          {/* Left Column: Asymmetric Architectural Headline */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.18em',
                color: '#E11D48',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              <span
                style={{
                  width: '24px',
                  height: '2px',
                  backgroundColor: '#E11D48',
                  display: 'inline-block',
                }}
              />
              Vision &amp; Heritage
            </div>

            <TextReveal
              as="h2"
              text="PAST | FUTURE"
              style={{
                fontSize: 'clamp(3rem, 5.5vw, 4.4rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: '#FFFFFF',
                marginBottom: '24px',
              }}
              coloredWords={{ '|': '#E11D48' }}
            />

            <div
              style={{
                width: '60px',
                height: '4px',
                backgroundColor: '#E11D48',
                borderRadius: '2px',
                marginBottom: '24px',
              }}
            />

            <TextReveal
              as="p"
              style={{
                fontSize: '0.95rem',
                color: '#94A3B8',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '28px',
              }}
              text="New York Auto Museum & World Motorsport Hall of Fame"
            />

            {/* Action Buttons moved from Hero Banner */}
            <div
              className="past-future-actions"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <Link
                href="/about"
                className="btn btn-primary hero-btn-main"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span>Explore The Museum</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>

              <a
                href="#spotlights"
                className="btn hero-btn-glass"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span>View 12 Exhibition Wings</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Card */}
          <div
            className="past-future-card"
            style={{
              backgroundColor: 'rgba(18, 24, 36, 0.88)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '20px',
              position: 'relative',
              boxShadow: '0 14px 40px rgba(0, 0, 0, 0.45)',
            }}
          >
            {/* Decorative quotation mark */}
            <div
              className="past-future-quote-mark"
              style={{
                position: 'absolute',
                top: '20px',
                right: '28px',
                fontSize: '5rem',
                lineHeight: 1,
                color: 'rgba(225, 29, 72, 0.18)',
                fontFamily: 'serif',
                userSelect: 'none',
              }}
            >
              “
            </div>

            <TextReveal
              as="p"
              text="We are an interdisciplinary multinational team of automotive aficionados, who together are pooling resources to help build the New York Auto Museum Experience Center."
              style={{
                fontSize: '1.25rem',
                lineHeight: 1.75,
                color: '#FFFFFF',
                fontWeight: 600,
                marginBottom: '20px',
                letterSpacing: '-0.01em',
              }}
            />

            <TextReveal
              as="p"
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: '#94A3B8',
                marginBottom: '28px',
              }}
              text="The NYAM — New York Auto Museum and the World Motorsport Hall of Fame is set to become one of the world's leading Museum attractions."
            />

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#E11D48',
                }}
              />
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  letterSpacing: '0.04em',
                }}
              >
                New York City Flagship Initiative
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
