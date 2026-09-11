'use client';

import Image from 'next/image';
import Link from 'next/link';
import TextReveal from './TextReveal';

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        color: '#475569',
        fontSize: '0.92rem',
        paddingTop: '70px',
        paddingBottom: '40px',
      }}
    >
      <div className="container">
        {/* Tier 1: 4-Column Structured Directory */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '60px',
          }}
        >
          {/* Column 1: Museum Identity & Sponsor */}
          <div>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '18px' }}>
              <div style={{ position: 'relative', width: '180px', height: '52px' }}>
                <Image
                  src="/images/logo-dark.png"
                  alt="The New York Auto Experience"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'left' }}
                />
              </div>
            </Link>
            <TextReveal
              as="p"
              style={{
                fontSize: '0.9rem',
                lineHeight: 1.7,
                color: '#64748B',
                marginBottom: '24px',
              }}
              text="Proposed 200,000+ sq ft Manhattan landmark uniting automotive science, historical heritage, and world-first interactive exhibition wings."
            />

            {/* D&B Sponsor Plaque */}
            <div
              style={{
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                padding: '14px 18px',
                display: 'inline-block',
                maxWidth: '220px',
              }}
            >
              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: '#94A3B8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '8px',
                }}
              >
                Sponsored By
              </div>
              <a
                href="https://www.dnb.com/en-us/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block' }}
              >
                <div style={{ position: 'relative', width: '140px', height: '36px' }}>
                  <Image
                    src="/images/sponsor1.jpg"
                    alt="Dun & Bradstreet"
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'left' }}
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Museum Directory */}
          <div>
            <TextReveal
              as="h4"
              style={{
                fontSize: '0.82rem',
                fontWeight: 800,
                color: '#0F172A',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '20px',
              }}
              text="Museum Directory"
            />
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <Link
                  href="/about"
                  style={{ color: '#475569', textDecoration: 'none', fontWeight: 500 }}
                >
                  The Museum &amp; Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/advisors"
                  style={{ color: '#475569', textDecoration: 'none', fontWeight: 500 }}
                >
                  The Board &amp; Advisors
                </Link>
              </li>
              <li>
                <Link
                  href="/committees"
                  style={{ color: '#475569', textDecoration: 'none', fontWeight: 500 }}
                >
                  Boards &amp; Committees
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  style={{ color: '#475569', textDecoration: 'none', fontWeight: 500 }}
                >
                  Career Opportunities
                </Link>
              </li>
              <li>
                <a
                  href="https://newyorkautoexperience.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0284C7', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  NYAE 501(c)(3) Portal &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Executive Inquiries */}
          <div>
            <TextReveal
              as="h4"
              style={{
                fontSize: '0.82rem',
                fontWeight: 800,
                color: '#0F172A',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '20px',
              }}
              text="General Inquiries"
            />
            <TextReveal
              as="p"
              style={{ color: '#64748B', lineHeight: 1.6, marginBottom: '14px' }}
              text="For general inquiries, contact Museum's Executive Director:"
            />
            <div style={{ marginBottom: '14px' }}>
              <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '1rem' }}>David Senater</div>
              <div style={{ fontSize: '0.82rem', color: '#64748B' }}>Executive Director</div>
            </div>
            <p style={{ marginBottom: '10px' }}>
              <a
                href="mailto:david.senater@newyorkautomuseum.com"
                style={{
                  color: '#DC2626',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  wordBreak: 'break-all',
                }}
              >
                david.senater@newyorkautomuseum.com
              </a>
            </p>
            <p style={{ color: '#0F172A', fontWeight: 800, fontSize: '0.95rem' }}>
              Toll Free: 1-877-896-9269
            </p>
          </div>

          {/* Column 4: Headquarters & Mail */}
          <div>
            <TextReveal
              as="h4"
              style={{
                fontSize: '0.82rem',
                fontWeight: 800,
                color: '#0F172A',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '20px',
              }}
              text="Mailing Address"
            />
            <div
              style={{
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                padding: '20px',
                lineHeight: 1.6,
              }}
            >
              <div style={{ fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                New York Auto Museum Experience Center Inc
              </div>
              <div style={{ color: '#475569' }}>767 Broadway #1671</div>
              <div style={{ color: '#475569', marginBottom: '10px' }}>
                New York, New York, Manhattan 10003 USA
              </div>
              <div style={{ color: '#DC2626', fontWeight: 800, fontSize: '1rem' }}>
                1-877-896-9269
              </div>
            </div>
          </div>
        </div>


        {/* Tier 3: Sub-Footer Copyright & Legal */}
        <div
          style={{
            borderTop: '1px solid #E2E8F0',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            fontSize: '0.82rem',
            color: '#64748B',
          }}
        >
          <div>&copy; New York Auto Museum 2020–2025. All rights reserved.</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <span>New York Auto Experience Inc. 501(c)(3)</span>
            <span>•</span>
            <span>1125042 Ontario Limited dba New York Auto Museum Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
