'use client';

import Image from 'next/image';
import Link from 'next/link';
import TextReveal from './TextReveal';

interface PageHeaderProps {
  tag: string;
  title: string;
  subtitle: string;
  breadcrumb: string;
  bgImage?: string;
  imagePosition?: string;
  imageOpacity?: number;
}

export default function PageHeader({
  tag,
  title,
  subtitle,
  breadcrumb,
  bgImage = '/images/slideshow/IMG_4959.jpg',
  imagePosition = 'right center',
  imageOpacity = 0.72,
}: PageHeaderProps) {
  return (
    <div
      className="page-header-container"
      style={{
        backgroundColor: '#070B14',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid #1E293B',
      }}
    >
      {/* Background Image Layer with Vivid Visibility & Asymmetric Gradient Mask */}
      <div
        className="page-header-bg"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <Image
          src={bgImage}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: imagePosition,
            opacity: imageOpacity,
            filter: 'contrast(1.1) brightness(1.02)',
          }}
        />
        {/* Asymmetric directional gradient: deep dark on left for text legibility, clear & transparent on right for car visibility */}
        <div
          className="page-header-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, #070B14 0%, rgba(7, 11, 20, 0.95) 28%, rgba(7, 11, 20, 0.72) 50%, rgba(7, 11, 20, 0.22) 75%, rgba(7, 11, 20, 0.08) 100%), linear-gradient(180deg, rgba(7, 11, 20, 0.35) 0%, rgba(7, 11, 20, 0) 35%, rgba(7, 11, 20, 0.85) 100%)',
          }}
        />
      </div>

      {/* Decorative accent glow */}
      <div
        style={{
          position: 'absolute',
          top: '-40%',
          right: '-5%',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(225, 29, 72, 0.18) 0%, rgba(18, 24, 36, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Breadcrumb */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.85rem',
            color: '#94A3B8',
            marginBottom: '16px',
          }}
        >
          <Link href="/" style={{ color: '#94A3B8', textDecoration: 'none' }}>
            Home
          </Link>
          <span>/</span>
          <span style={{ color: '#E11D48', fontWeight: 600 }}>{breadcrumb}</span>
        </div>

        <span
          className="section-tag"
          style={{
            background: 'rgba(225, 29, 72, 0.12)',
            borderColor: 'rgba(225, 29, 72, 0.3)',
            color: '#E11D48',
            marginBottom: '14px',
          }}
        >
          {tag}
        </span>

        <TextReveal
          as="h1"
          style={{
            fontSize: 'clamp(2.5rem, 4.5vw, 3.6rem)',
            fontWeight: 900,
            color: '#FFFFFF',
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '16px',
            textShadow: '0 2px 14px rgba(0, 0, 0, 0.85)',
          }}
          text={title}
        />

        <TextReveal
          as="p"
          style={{
            fontSize: '1.15rem',
            color: '#E2E8F0',
            maxWidth: '720px',
            lineHeight: 1.7,
            textShadow: '0 1px 8px rgba(0, 0, 0, 0.75)',
          }}
          text={subtitle}
        />
      </div>
    </div>
  );
}
