'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function PhoneIcon({ size = 13 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#38BDF8"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'The Museum', href: '/about' },
    { label: 'Board & Advisors', href: '/advisors' },
    { label: 'Committees', href: '/committees' },
    { label: 'Governance', href: '/governance' },
    { label: 'Careers', href: '/careers' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(8, 10, 15, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="navbar-inner"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '88px',
          width: '100%',
          maxWidth: '1520px',
          margin: '0 auto',
          padding: '0 28px',
        }}
      >
        {/* Brand Logo & Institutional Landmark Tagline */}
        <div className="navbar-brand-group">
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <Image
              src="/images/logo-new.png"
              alt="New York Auto Museum"
              width={160}
              height={68}
              className="navbar-brand-logo"
              style={{ objectFit: 'contain', height: '68px', width: 'auto' }}
              priority
            />
          </Link>

          <div className="navbar-tagline-stack">
            <div className="navbar-landmark-badge">
              <span className="navbar-badge-dot" />
              <span>Proposed New York City Landmark • 200,000+ Sq Ft</span>
            </div>

            <a
              href="tel:18774116926"
              className="navbar-phone-link"
              aria-label="Call Toll-Free 1-877-411-6926"
            >
              <PhoneIcon size={13} />
              <span className="navbar-phone-label">Toll-Free:</span>
              <span className="navbar-phone-number">
                1-877-411-NYAM <span className="navbar-phone-digits">(6926)</span>
              </span>
            </a>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: 'clamp(14px, 1.5vw, 24px)',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: isActive ? '#FFFFFF' : '#94A3B8',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 700 : 500,
                  transition: 'color 0.2s ease',
                  padding: '6px 0',
                  position: 'relative',
                  whiteSpace: 'nowrap',
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: '#E11D48',
                      borderRadius: '1px',
                    }}
                  />
                )}
              </Link>
            );
          })}
          
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '8px',
            width: '42px',
            height: '42px',
            color: '#FFFFFF',
            cursor: 'pointer',
          }}
          className="mobile-btn"
          aria-label="Toggle navigation"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'rgba(8, 10, 15, 0.96)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6)',
          }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: isActive ? '#E11D48' : '#94A3B8',
                  fontSize: '1.05rem',
                  fontWeight: isActive ? 800 : 600,
                  textDecoration: 'none',
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="tel:18774116926"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#FFFFFF',
              fontSize: '0.95rem',
              fontWeight: 700,
              textDecoration: 'none',
              paddingTop: '4px',
            }}
          >
            <PhoneIcon size={15} />
            <span>Toll-Free: 1-877-411-NYAM (6926)</span>
          </a>
        </div>
      )}

      <style jsx global>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
