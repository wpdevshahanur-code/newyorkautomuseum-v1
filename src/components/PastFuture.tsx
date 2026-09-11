'use client';

import TextReveal from './TextReveal';

export default function PastFuture() {
  return (
    <section
      id="past-future"
      className="past-future-section"
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle architectural background grid line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1280px',
          height: '100%',
          borderLeft: '1px dashed #F1F5F9',
          borderRight: '1px dashed #F1F5F9',
          pointerEvents: 'none',
        }}
      />

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
                color: '#DC2626',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              <span
                style={{
                  width: '24px',
                  height: '2px',
                  backgroundColor: '#DC2626',
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
                color: '#0F172A',
                marginBottom: '24px',
              }}
              coloredWords={{ '|': '#DC2626' }}
            />

            <div
              style={{
                width: '60px',
                height: '4px',
                backgroundColor: '#DC2626',
                borderRadius: '2px',
                marginBottom: '24px',
              }}
            />

            <TextReveal
              as="p"
              style={{
                fontSize: '0.95rem',
                color: '#64748B',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
              text="New York Auto Museum & World Motorsport Hall of Fame"
            />
          </div>

          {/* Right Column: Editorial Card */}
          <div
            className="past-future-card"
            style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '20px',
              position: 'relative',
              boxShadow: '0 10px 35px rgba(15, 23, 42, 0.04)',
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
                color: 'rgba(220, 38, 38, 0.08)',
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
                color: '#0F172A',
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
                color: '#475569',
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
                borderTop: '1px solid #E2E8F0',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#DC2626',
                }}
              />
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#0F172A',
                  letterSpacing: '0.04em',
                }}
              >
                Manhattan Flagship Initiative
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
