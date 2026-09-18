'use client';

import Image from 'next/image';
import Link from 'next/link';
import TextReveal from './TextReveal';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/new-york-auto-museum',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66 1.66 1.66 0 0 0-1.66-1.66Z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/newyorkautomuseum/',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'X',
    url: 'https://x.com/NYAutoMuseum',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61585348961563',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@newyorkautomuseumexp',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@newyorkautomuseum',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.29 1.76-.29 1.1.1 2.31.95 3.03.88.75 2.14.88 3.16.43.76-.32 1.34-1 1.49-1.81.12-.9.08-1.81.08-2.71V.02z" />
      </svg>
    ),
  },
  {
    name: 'Threads',
    url: 'https://www.threads.com/@dsenater1',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10 3.076 0 5.823-1.385 7.666-3.565a.8.8 0 0 0-.174-1.162.796.796 0 0 0-1.16.175C16.69 21.365 14.47 20.4 12 20.4c-4.632 0-8.4-3.768-8.4-8.4S7.368 3.6 12 3.6c4.632 0 8.4 3.768 8.4 8.4 0 1.258-.29 2.457-.803 3.513-.424.873-1.096 1.487-1.944 1.487-.768 0-1.32-.435-1.554-1.226.792-.44 1.378-1.18 1.575-2.074.24-.96.08-2.024-.456-2.922-.84-1.41-2.42-2.178-4.12-2.003-2.052.21-3.698 1.932-3.698 4.225 0 2.26 1.614 3.96 3.864 3.96 1.18 0 2.228-.48 2.87-1.32.39.73 1.05 1.16 1.863 1.16 1.392 0 2.46-.948 3.072-2.208.64-1.31.99-2.79.99-4.366C22 6.477 17.523 2 12 2zm-.23 13.4c-1.368 0-2.316-.984-2.316-2.4 0-1.415.948-2.4 2.316-2.4 1.28 0 2.148.84 2.148 2.064 0 .28-.06.576-.17.84-.25.59-.79.9-1.98.9z" />
      </svg>
    ),
  },
  {
    name: 'Snapchat',
    url: 'https://www.snapchat.com/@NYAutoMuseum',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.002 2C7.309 2 4.966 5.08 4.966 7.425c0 1.056.465 2.148 1.099 3.013.279.379.372.635.155 1.054-.248.479-.806.96-1.426 1.054-.341.051-.558.263-.589.604-.031.341.155.651.527.775 1.085.357 2.077.062 2.604-.372.31-.256.62-.124.775.093.589.822 1.953 2.511 3.89 2.511 1.938 0 3.301-1.689 3.89-2.511.155-.217.465-.349.775-.093.527.434 1.519.729 2.604.372.372-.124.558-.434.527-.775-.031-.341-.248-.553-.589-.604-.62-.094-1.178-.575-1.426-1.054-.217-.419-.124-.675.155-1.054.634-.865 1.099-1.957 1.099-3.013C20.038 5.08 17.695 2 12.002 2z" />
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    url: 'https://in.pinterest.com/newyorkautomuseum/',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12.004-5.378 12.004-12.002C24.019 5.367 18.644 0 12.017 0z" />
      </svg>
    ),
  },
  {
    name: 'Tumblr',
    url: 'https://www.tumblr.com/blog/newyorkautomuseum',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.563 24c-5.093 0-7.031-2.756-7.031-6.415V10.66H4.787V7.127c2.812-.86 3.98-3.08 4.25-5.127H12.3v4.66h4.31v3.999h-4.31v6.333c0 1.942.84 2.667 2.375 2.667h2.083V24h-2.195z" />
      </svg>
    ),
  },
  {
    name: 'Mastodon',
    url: 'https://mastodon.social/@NewYorkAutoMuseum',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.688 1.496 2.518.915 5.105.353 7.625.26 10.88.26 12.05c0 1.168.093 4.425.655 6.945.58 2.587 2.966 4.417 5.58 4.796 2.062.298 4.166.363 6.228.188.38-.032.755-.078 1.127-.14 1.704-.287 3.336-1.12 4.095-2.338.423-.678.718-1.503.718-2.45v-.444a.42.42 0 0 0-.42-.42h-1.637a.42.42 0 0 0-.42.42v.328c0 1.25-.838 2.222-2.38 2.392-1.488.164-3.031.182-4.526.046-1.396-.128-2.307-.84-2.434-2.147-.024-.25-.035-.5-.035-.747V15.7c0-.232.188-.42.42-.42h1.637c.232 0 .42.188.42.42v.333c.068.745.585 1.173 1.547 1.23 1.272.077 2.56.048 3.828-.088 1.764-.19 3.01-1.378 3.2-3.14.283-2.618.232-5.462.232-5.462a.42.42 0 0 0-.42-.42H16.27a.42.42 0 0 0-.42.42v3.743a.42.42 0 0 1-.42.42h-1.637a.42.42 0 0 1-.42-.42V7.808a.42.42 0 0 0-.42-.42h-2.348a.42.42 0 0 0-.42.42v4.298a.42.42 0 0 1-.42.42H8.15a.42.42 0 0 1-.42-.42V7.808a.42.42 0 0 0-.42-.42H5.38a.42.42 0 0 0-.42.42v4.88c0 1.517-.11 4.544 1.196 6.58-1.52-.394-2.656-1.542-3.033-3.19C2.65 14.29 2.59 12.05 2.59 12.05s.06-2.24.533-4.048c.377-1.648 1.513-2.796 3.033-3.19.453-.117 1.734-.236 5.626-.236h.031c3.892 0 5.173.119 5.626.236 1.52.394 2.656 1.542 3.033 3.19.473 1.808.533 4.048.533 4.048s-.06 2.24-.533 4.048c-.067.29-.153.57-.257.838a.42.42 0 0 0 .39.571h1.637a.42.42 0 0 0 .41-.334c.15-.49.263-.99.338-1.498.563-2.52.655-5.777.655-6.946 0-1.168-.092-4.424-.655-6.944z" />
      </svg>
    ),
  },
];


export default function Footer() {
  const currentYear = new Date().getFullYear();
  const yearText = currentYear > 2020 ? `2020–${currentYear}` : '2020';

  return (
    <footer
      id="footer"
      style={{
        backgroundColor: 'rgba(11, 14, 20, 0.75)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.12)',
        color: '#94A3B8',
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
              <div style={{ position: 'relative', width: '210px', height: '42px' }}>
                <Image
                  src="/images/logo-white.png"
                  alt="New York Auto Museum"
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
                color: '#94A3B8',
                marginBottom: '24px',
              }}
              text="Proposed 200,000+ sq ft Manhattan landmark uniting automotive science, historical heritage, and world-first interactive exhibition wings."
            />

            {/* D&B Sponsor Plaque */}
            <div
              className="footer-sponsor-badge"
              style={{
                backgroundColor: 'rgba(18, 24, 36, 0.88)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '12px',
                display: 'inline-block',
                maxWidth: '220px',
                padding: '16px',
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
                style={{
                  display: 'block',
                  background: '#FFFFFF',
                  borderRadius: '8px',
                  padding: '6px 12px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                }}
              >
                <div style={{ position: 'relative', width: '130px', height: '32px' }}>
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
                color: '#FFFFFF',
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
                  style={{ color: '#94A3B8', textDecoration: 'none', fontWeight: 500 }}
                >
                  The Museum &amp; Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/advisors"
                  style={{ color: '#94A3B8', textDecoration: 'none', fontWeight: 500 }}
                >
                  The Board &amp; Advisors
                </Link>
              </li>
              <li>
                <Link
                  href="/committees"
                  style={{ color: '#94A3B8', textDecoration: 'none', fontWeight: 500 }}
                >
                  Boards &amp; Committees
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  style={{ color: '#94A3B8', textDecoration: 'none', fontWeight: 500 }}
                >
                  Career Opportunities
                </Link>
              </li>
              <li>
                <a
                  href="https://newyorkautoexperience.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#2563EB', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
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
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '20px',
              }}
              text="General Inquiries"
            />
            <TextReveal
              as="p"
              style={{ color: '#94A3B8', lineHeight: 1.6, marginBottom: '14px' }}
              text="For general inquiries, contact Museum's Executive Director:"
            />
            <div style={{ marginBottom: '14px' }}>
              <div style={{ fontWeight: 800, color: '#FFFFFF', fontSize: '1rem' }}>David Senater</div>
              <div style={{ fontSize: '0.82rem', color: '#94A3B8' }}>Executive Director</div>
            </div>
            <p style={{ marginBottom: '10px' }}>
              <a
                href="mailto:david.senater@newyorkautomuseum.com"
                style={{
                  color: '#E11D48',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  wordBreak: 'break-all',
                }}
              >
                david.senater@newyorkautomuseum.com
              </a>
            </p>
            <p style={{ marginTop: '4px' }}>
              <a
                href="tel:18778969269"
                style={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                Toll Free: 1-877-896-9269
              </a>
            </p>
          </div>

          {/* Column 4: Headquarters & Mail */}
          <div>
            <TextReveal
              as="h4"
              style={{
                fontSize: '0.82rem',
                fontWeight: 800,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '20px',
              }}
              text="Mailing Address"
            />
            <div
              className="footer-address-card"
              style={{
                backgroundColor: 'rgba(18, 24, 36, 0.88)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '12px',
                padding: '20px',
                lineHeight: 1.6,
              }}
            >
              <div style={{ fontWeight: 800, color: '#FFFFFF', marginBottom: '6px' }}>
                New York Auto Museum Experience Center Inc
              </div>
              <div style={{ color: '#94A3B8' }}>767 Broadway #1671</div>
              <div style={{ color: '#64748B' }}>
                New York, New York, Manhattan 10003 USA
              </div>
            </div>

            {/* Follow Us */}
            <div style={{ marginTop: '22px' }}>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  marginBottom: '12px',
                }}
              >
                Follow Us
              </div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  maxWidth: '280px',
                }}
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-btn"
                    title={social.name}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tier 3: Sub-Footer Copyright & Legal */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
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
          <div>&copy; New York Auto Museum {yearText}. All rights reserved.</div>
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
