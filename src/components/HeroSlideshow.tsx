'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import TextReveal from './TextReveal';

interface HeroSlide {
  image: string;
  wing: string;
  badge: string;
  headline: string;
  description: string;
  accentColor: string;
}

const heroSlides: HeroSlide[] = [
  {
    image: 'IMG_0000.jpg',
    wing: 'Art, Film and Television',
    badge: 'Iconic Concept Prototype',
    headline: 'Where Vision Meets Velocity',
    description: 'Futuristic turbine canopy concepts and legendary screen icons that redefined 20th-century popular culture.',
    accentColor: '#22C55E',
  },
  {
    image: 'IMG_5097.jpg',
    wing: 'Motorsport Heritage',
    badge: 'Championship Endurance',
    headline: 'The Golden Age of Speed',
    description: 'Pioneering Grand Prix machines, endurance titans, and historic racing liveries preserved in pristine mechanical glory.',
    accentColor: '#22C55E',
  },
  {
    image: 'IMG_4959.jpg',
    wing: 'The American Muscle Era',
    badge: 'Detroit Power',
    headline: 'Raw Horsepower & American Steel',
    description: 'The golden decade of tire-smoking V8s, historic dragstrip icons, and bold American road presence.',
    accentColor: '#22C55E',
  },
  {
    image: 'IMG_1514.jpg',
    wing: 'Living Automotive History',
    badge: 'Preserved Cultural Icons',
    headline: 'Centuries of Human Ingenuity',
    description: 'From hand-hammered coachbuilt coachwork to the milestone industrial eras that put the modern world on wheels.',
    accentColor: '#22C55E',
  },
  {
    image: 'IMG_1659.jpg',
    wing: 'Coachbuilding & Custom Design',
    badge: 'Bespoke Craftsmanship',
    headline: 'The Art of Haute Automobilia',
    description: 'Rare one-off coachbuilt masterpieces sculpted by legendary design houses and master metalworkers.',
    accentColor: '#22C55E',
  },
  {
    image: 'IMG_1756.jpg',
    wing: 'Automotive Restoration',
    badge: 'Authentic Preservation',
    headline: 'Resurrecting Rolling Landmarks',
    description: 'Master technicians preserving period authenticity, factory blueprints, and time-honored mechanical crafts.',
    accentColor: '#22C55E',
  },
  {
    image: 'IMG_1815.jpg',
    wing: 'Wheels & Rims Wing',
    badge: 'Sculptural Foundations',
    headline: 'Form, Function & Traction',
    description: 'Historic wire spokes, cast magnesium racing alloys, and cutting-edge forged carbon wheel innovations.',
    accentColor: '#22C55E',
  },
  {
    image: 'IMG_2065.jpg',
    wing: 'Automotive Mechanics',
    badge: 'Precision Engineering',
    headline: 'The Anatomy of Motion',
    description: 'Unveiling complex internal combustion marvels, multi-valve valvetrains, and intricate transmission works.',
    accentColor: '#22C55E',
  },
  {
    image: 'IMG_2071.jpg',
    wing: 'Future Automotive Technology',
    badge: 'Next-Gen Propulsion',
    headline: 'Designing Tomorrow Today',
    description: 'Aerodynamic architecture, sustainable high-performance powertrains, and cutting-edge concept engineering.',
    accentColor: '#22C55E',
  },
  {
    image: 'IMG_2267.jpg',
    wing: 'Innovation & Technology',
    badge: 'Pioneering Research',
    headline: 'Engineering Breakthroughs',
    description: 'Breakthrough patents, carbon architectures, telematics, and cross-industry innovations transforming global mobility.',
    accentColor: '#22C55E',
  },
  {
    image: 'IMG_2298.jpg',
    wing: 'Alternative Energy & EVs',
    badge: 'Clean Horizons',
    headline: 'Electrified Velocity',
    description: 'Early 20th-century electric pioneers to revolutionary multi-megawatt solid-state hypercar architectures.',
    accentColor: '#22C55E',
  },
  {
    image: 'IMG_2327.jpg',
    wing: 'Living Automotive History',
    badge: 'Milestone Eras',
    headline: 'Echoes of the Open Road',
    description: 'The machines that charted uncharted frontiers, conquered cross-continental highways, and inspired generations.',
    accentColor: '#22C55E',
  },
  {
    image: 'IMG_2587.jpg',
    wing: 'Art, Film and Television',
    badge: 'Cinematic Legends',
    headline: 'Screen Icons That Drove History',
    description: 'Famous hero vehicles, television chase legends, and unforgettable cinematic concept designs.',
    accentColor: '#22C55E',
  },
  {
    image: 'IMG_2728.jpg',
    wing: 'Motorsport Heritage',
    badge: 'Paddock Legends',
    headline: 'Built for the Winner’s Circle',
    description: 'Trophies, timing sheets, and the unyielding machines that triumphed at Le Mans, Daytona, and Monza.',
    accentColor: '#22C55E',
  },
  {
    image: 'IMG_2882.jpg',
    wing: 'The American Muscle Era',
    badge: 'Trans-Am & Drag Classics',
    headline: 'Thunder in the Paddock',
    description: 'High-compression big blocks and homologation specials engineered to conquer the quarter-mile.',
    accentColor: '#22C55E',
  },
  {
    image: 'IMG_2895.jpg',
    wing: 'Hypercars and Supercars',
    badge: 'Peak Engineering',
    headline: 'The Outer Limits of Performance',
    description: 'Ultra-exclusive homologation icons, lightweight carbon-composite structures, and boundary-pushing engineering.',
    accentColor: '#22C55E',
  },
  {
    image: 'IMG_2931.jpg',
    wing: 'Automotive Mechanics',
    badge: 'Mechanical Artistry',
    headline: 'Purity of the Machine',
    description: 'Intricate carburetors, turbocharger manifolds, and hand-tuned mechanical harmony in motion.',
    accentColor: '#22C55E',
  },
  {
    image: 'IMG_3069.jpg',
    wing: 'Coachbuilding & Custom Design',
    badge: 'Sculpted Silhouette',
    headline: 'Lines Drawn Without Compromise',
    description: 'Bespoke hand-formed aluminum panels, teardrop fenders, and timeless automotive styling.',
    accentColor: '#22C55E',
  },
  {
    image: 'IMG_3092.jpg',
    wing: 'Future Automotive Technology',
    badge: 'Autonomous & Connected',
    headline: 'Pioneering the Next Century',
    description: 'Advanced sensor suites, carbon architectures, and the limitless horizon of 21st-century mobility.',
    accentColor: '#22C55E',
  },
];

const SLIDE_DURATION = 5500; // 5.5 seconds per slide

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [introFaded, setIntroFaded] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Cinematic intro dark-to-light fade-in on mount (matching original 100ms load trigger)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroFaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
  };

  // Autoplay interval (giving first slide 7s for full cinematic reveal)
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const duration = currentSlide === 0 ? 7000 : SLIDE_DURATION;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, duration);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, nextSlide, currentSlide]);

  // Keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    setTouchStartX(null);
  };

  const activeSlideData = heroSlides[currentSlide];

  return (
    <section
      id="banner"
      className="hero-carousel-section"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="New York Auto Museum Hero Carousel"
    >
      {/* Background Slides with Ken Burns Smooth Zoom (All 19 Client Photos) */}
      <div className="hero-slides-layer">
        {heroSlides.map((slide, index) => {
          const isActive = currentSlide === index;
          return (
            <div
              key={slide.image}
              className={`hero-slide-item ${isActive ? 'is-active' : ''}`}
            >
              <Image
                src={`/images/slideshow/${slide.image}`}
                alt={slide.headline}
                fill
                priority={index <= 1}
                className="hero-slide-img"
                sizes="100vw"
                quality={90}
              />
            </div>
          );
        })}
      </div>

      {/* Cinematic Multi-Layer Gradients for Contrast & Theme Transition */}
      <div className="hero-gradient-overlay" />

      {/* Cinematic Dark-to-Light Intro Fade-in Veil */}
      <div className={`hero-intro-veil ${introFaded ? 'is-faded' : ''}`} aria-hidden="true" />

      {/* Floating Side Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        className="hero-nav-arrow hero-nav-prev"
        aria-label="Previous Slide"
        title="Previous Exhibit (Left Arrow)"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="hero-nav-arrow hero-nav-next"
        aria-label="Next Slide"
        title="Next Exhibit (Right Arrow)"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Hero Center Content: Focused Institutional Branding */}
      <div className="container hero-content-wrapper">
        {/* Main Institutional Headline with Animated Architectural Frame Lines */}
        <div className={`hero-headline-frame ${introFaded ? 'is-revealed' : ''}`}>
          <TextReveal as="h1" className="hero-main-title" text="New York Auto Museum" />
        </div>
      </div>

      {/* Bottom-Center Exhibit Plaque (Horizontally Centered at Bottom, 30% Smaller) */}
      <div className="hero-bottom-center-wrapper">
        <div
          className="hero-bottom-center-caption"
          style={{ borderColor: `${activeSlideData.accentColor}60` }}
        >
          {/* Dynamic Slide Badge */}
          <div className="hero-badge-pill" style={{ borderColor: `${activeSlideData.accentColor}40`, marginBottom: '6px' }}>
            <span
              className="hero-badge-accent-dot"
              style={{ backgroundColor: activeSlideData.accentColor }}
            />
            <span className="hero-badge-text">{activeSlideData.badge}</span>
          </div>

          <div className="hero-wing-showcase">
            <span className="hero-wing-label">Exhibition Wing:</span>
            <span
              className="hero-wing-name"
              style={{ color: activeSlideData.accentColor }}
            >
              {activeSlideData.wing}
            </span>
          </div>

          <p key={currentSlide} className="hero-description">
            {activeSlideData.description}
          </p>
        </div>
      </div>

      {/* Modern Bottom Carousel Control Bar & Progress Track with All 19 Slides */}
      <div className="hero-bottom-control-deck">
        <div className="container hero-deck-container">
          {/* Left: Slide Counter & Active Wing */}
          <div className="hero-deck-left">
            <span className="hero-counter-current">
              {String(currentSlide + 1).padStart(2, '0')}
            </span>
            <span className="hero-counter-divider">/</span>
            <span className="hero-counter-total">
              {String(heroSlides.length).padStart(2, '0')}
            </span>
            <span className="hero-counter-wing-title" title={activeSlideData.wing}>
              {activeSlideData.wing}
            </span>
          </div>

          {/* Center: Sleek 19-Segment Interactive Progress Track */}
          <div className="hero-deck-progress-track">
            {heroSlides.map((slide, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={slide.image}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`hero-progress-segment ${isActive ? 'is-active' : ''}`}
                  title={`Exhibit ${idx + 1} of 19: ${slide.wing} — ${slide.badge}`}
                  aria-label={`Jump to slide ${idx + 1} of 19: ${slide.wing}`}
                >
                  <span className="hero-progress-bar-bg">
                    <span
                      className="hero-progress-bar-fill"
                      style={{
                        backgroundColor: isActive ? slide.accentColor : undefined,
                        animationDuration: `${SLIDE_DURATION}ms`,
                        animationPlayState: isPlaying && isActive ? 'running' : 'paused',
                      }}
                    />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Autoplay Pause/Play Button & Quick Prev/Next Mini Controls */}
          <div className="hero-deck-right">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="hero-deck-playpause-btn"
              title={isPlaying ? 'Pause Auto-Rotation' : 'Resume Auto-Rotation'}
              aria-label={isPlaying ? 'Pause Auto-Rotation' : 'Resume Auto-Rotation'}
            >
              {isPlaying ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
