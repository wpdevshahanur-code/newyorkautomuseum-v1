'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
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
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const hasMovedRef = useRef(false);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Repeat partners 4 times (20 items) for smooth infinite scrolling
  const marqueeList = [...partners, ...partners, ...partners, ...partners];

  const handleInfiniteWrap = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const halfWidth = container.scrollWidth / 2;
    if (halfWidth <= 0) return;

    if (container.scrollLeft >= halfWidth) {
      container.scrollLeft -= halfWidth;
      if (isMouseDownRef.current) {
        scrollLeftStartRef.current -= halfWidth;
      }
    } else if (container.scrollLeft <= 20) {
      container.scrollLeft += halfWidth;
      if (isMouseDownRef.current) {
        scrollLeftStartRef.current += halfWidth;
      }
    }
  }, []);

  const pauseAutoScrollTemporarily = useCallback((durationMs = 2500) => {
    setIsInteracting(true);
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    interactionTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, durationMs);
  }, []);

  // Initialize scroll position in the first half on mount
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const initTimer = setTimeout(() => {
      if (container) {
        const halfWidth = container.scrollWidth / 2;
        if (halfWidth > 0 && container.scrollLeft < 50) {
          container.scrollLeft = halfWidth / 2;
        }
      }
    }, 80);
    return () => clearTimeout(initTimer);
  }, []);

  // Continuous smooth auto-scroll loop
  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp: number | null = null;
    const speed = 46; // px per second

    const step = (timestamp: number) => {
      if (lastTimestamp === null) {
        lastTimestamp = timestamp;
      }
      const delta = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      const container = containerRef.current;
      if (
        container &&
        !isPaused &&
        !isDragging &&
        !isHovered &&
        !isInteracting
      ) {
        container.scrollLeft += speed * delta;
        handleInfiniteWrap();
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isDragging, isHovered, isInteracting, handleInfiniteWrap]);

  // Window mouse drag listeners for robust dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0 || !containerRef.current) return;
    isMouseDownRef.current = true;
    startXRef.current = e.pageX;
    scrollLeftStartRef.current = containerRef.current.scrollLeft;
    hasMovedRef.current = false;
    setIsDragging(true);
    pauseAutoScrollTemporarily(3000);
  };

  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      if (!isMouseDownRef.current || !containerRef.current) return;
      const dx = e.pageX - startXRef.current;
      if (Math.abs(dx) > 5) {
        hasMovedRef.current = true;
      }
      containerRef.current.scrollLeft = scrollLeftStartRef.current - dx;
      handleInfiniteWrap();
    };

    const handleWindowMouseUp = () => {
      if (isMouseDownRef.current) {
        isMouseDownRef.current = false;
        setIsDragging(false);
        setTimeout(() => {
          hasMovedRef.current = false;
        }, 80);
        pauseAutoScrollTemporarily(2500);
      }
    };

    window.addEventListener('mousemove', handleWindowMouseMove);
    window.addEventListener('mouseup', handleWindowMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('mouseup', handleWindowMouseUp);
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
    };
  }, [handleInfiniteWrap, pauseAutoScrollTemporarily]);

  const handleScrollPrev = () => {
    const container = containerRef.current;
    if (!container) return;
    const cardEl = container.querySelector('.marquee-card') as HTMLElement | null;
    const cardWidth = cardEl ? cardEl.offsetWidth + 28 : 408;

    const halfWidth = container.scrollWidth / 2;
    if (halfWidth > 0 && container.scrollLeft < cardWidth + 50) {
      container.scrollLeft += halfWidth;
    }

    container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    pauseAutoScrollTemporarily(3000);
  };

  const handleScrollNext = () => {
    const container = containerRef.current;
    if (!container) return;
    const cardEl = container.querySelector('.marquee-card') as HTMLElement | null;
    const cardWidth = cardEl ? cardEl.offsetWidth + 28 : 408;

    const halfWidth = container.scrollWidth / 2;
    if (halfWidth > 0 && container.scrollLeft > halfWidth - cardWidth - 50) {
      container.scrollLeft -= halfWidth;
    }

    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    pauseAutoScrollTemporarily(3000);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (hasMovedRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleTouchStart = () => {
    pauseAutoScrollTemporarily(5000);
  };

  const handleTouchEnd = () => {
    pauseAutoScrollTemporarily(2500);
  };

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

            {/* Left & Right Arrow Navigation Controls */}
            <div className="carousel-nav-group">
              <button
                type="button"
                onClick={handleScrollPrev}
                className="carousel-control-btn carousel-nav-arrow"
                title="Scroll Left"
                aria-label="Previous partner"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleScrollNext}
                className="carousel-control-btn carousel-nav-arrow"
                title="Scroll Right"
                aria-label="Next partner"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

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

            <span className="controls-divider desktop-only">•</span>

            <span className="drag-hint-badge desktop-only" title="Click and drag with mouse or swipe on mobile">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="5 9 2 12 5 15" />
                <polyline points="9 5 12 2 15 5" />
                <polyline points="15 19 12 22 9 19" />
                <polyline points="19 9 22 12 19 15" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="12" y1="2" x2="12" y2="22" />
              </svg>
              Drag to explore
            </span>
          </div>
        </div>
      </div>

      {/* Modern Interactive Draggable Carousel Track */}
      <div className="marquee-outer-wrapper">
        {/* Floating Side Arrow Buttons (Desktop) */}
        <button
          type="button"
          onClick={handleScrollPrev}
          className="marquee-floating-btn marquee-floating-prev"
          aria-label="Scroll left"
          title="Previous"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div
          ref={containerRef}
          className={`marquee-scroll-container ${isDragging ? 'is-dragging' : ''}`}
          onMouseDown={handleMouseDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onScroll={handleInfiniteWrap}
        >
          <div className="marquee-track">
            {marqueeList.map((item, idx) => (
              <a
                key={`${item.name}-${idx}`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="marquee-card"
                onClick={handleCardClick}
                draggable={false}
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
                    draggable={false}
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

        <button
          type="button"
          onClick={handleScrollNext}
          className="marquee-floating-btn marquee-floating-next"
          aria-label="Scroll right"
          title="Next"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
