'use client';

import { useState } from 'react';
import Image from 'next/image';
import TextReveal from './TextReveal';

interface PartnerItem {
  name: string;
  category: string;
  logo: string;
  url: string;
}

const partners: PartnerItem[] = [
  {
    name: 'Dun & Bradstreet',
    category: 'Corporate Sponsor',
    logo: '/images/cropped_sponsor1.png',
    url: 'https://www.dnb.com/en-us/',
  },
  {
    name: 'National Association of Automobile Museums',
    category: 'Charter Member',
    logo: '/images/cropped_naam.png',
    url: 'https://naammuseums.org/',
  },
  {
    name: 'Nonprofit New York',
    category: 'Institutional Partner',
    logo: '/images/cropped_nonprofit.png',
    url: 'https://www.nonprofitnewyork.org/',
  },
  {
    name: 'Museum Association of New York',
    category: 'State Alliance',
    logo: '/images/cropped_many.png',
    url: 'https://nysmuseums.org/',
  },
  {
    name: 'American Alliance of Museums',
    category: 'National Accreditation',
    logo: '/images/cropped_aam.png',
    url: 'https://www.aam-us.org/',
  },
];

export default function Accreditations() {
  const [isPaused, setIsPaused] = useState(false);
  // Triple the list to create a gapless, seamless continuous marquee loop
  const marqueeList = [...partners, ...partners, ...partners];

  return (
    <section id="accreditations" className="accreditations-section">
      <div className="container">
        <div className="accreditations-header">
          <div className="accreditations-badge">
            <span className="badge-pulse" />
            Official Affiliations &amp; Recognition
          </div>

          <TextReveal
            as="h2"
            className="accreditations-title"
            text="Official Memberships &amp; Sponsorship"
          />

          <TextReveal
            as="p"
            className="accreditations-subtitle"
            text="Proudly accredited and affiliated with premier national museum alliances, historic automotive associations, and nonprofit foundations."
          />

          <div className="accreditations-controls">
            <span className="accreditations-count">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#10B981"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              5 Verified Institutional Partners
            </span>

            <span className="controls-divider">•</span>

            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="carousel-control-btn"
              title={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
            >
              {isPaused ? (
                <>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Resume Scroll
                </>
              ) : (
                <>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                  Pause Scroll
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Modern Infinite Smooth Logo Carousel Track */}
      <div className="marquee-wrapper">
        <div
          className="marquee-track"
          style={{ animationPlayState: isPaused ? 'paused' : undefined }}
        >
          {marqueeList.map((item, idx) => (
            <a
              key={`${item.name}-${idx}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="marquee-card"
              title={`Visit official website: ${item.name}`}
            >
              <div className="card-top-bar">
                <span className="card-category-tag">{item.category}</span>
                <span className="card-arrow-badge" aria-hidden="true">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </div>

              <div className="card-logo-container">
                <Image
                  src={item.logo}
                  alt={item.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="card-logo-img"
                  sizes="(max-width: 768px) 240px, 340px"
                />
              </div>

              <div className="card-footer-bar">
                <span className="card-partner-name">{item.name}</span>
                <span className="card-verified-dot" title="Verified Accreditation" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
