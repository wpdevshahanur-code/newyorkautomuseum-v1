'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'The Museum', href: '/about' },
    { label: 'Board & Advisors', href: '/advisors' },
    { label: 'Committees', href: '/committees' },
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
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '88px',
        }}
      >
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
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

        {/* Desktop Nav */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '24px',
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
          <a
            href="https://newyorkautoexperience.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            style={{
              color: '#FFFFFF',
              fontWeight: 700,
              letterSpacing: '0.02em',
            }}
          >
            Visit NYAE (.org)
          </a>
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
            href="https://newyorkautoexperience.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              width: '100%',
              marginTop: '8px',
              color: '#FFFFFF',
              fontWeight: 700,
              letterSpacing: '0.02em',
            }}
          >
            Visit NYAE (.org)
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
