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
}

export default function PageHeader({
  tag,
  title,
  subtitle,
  breadcrumb,
  bgImage = '/images/banner.jpg',
  imagePosition = 'center 42%',
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
      {/* Background Image Layer with Opacity & Gradient Mask */}
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
            opacity: 0.28,
            filter: 'contrast(1.15) brightness(0.95)',
          }}
        />
        {/* Deep luxury linear gradient overlay for contrast & readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(7, 11, 20, 0.94) 0%, rgba(7, 11, 20, 0.76) 50%, rgba(7, 11, 20, 0.88) 100%), linear-gradient(180deg, rgba(7, 11, 20, 0.35) 0%, rgba(7, 11, 20, 0.92) 100%)',
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
            'radial-gradient(circle, rgba(220, 38, 38, 0.18) 0%, rgba(15, 23, 42, 0) 70%)',
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
          <span style={{ color: '#DC2626', fontWeight: 600 }}>{breadcrumb}</span>
        </div>

        <span
          className="section-tag"
          style={{
            background: 'rgba(220, 38, 38, 0.2)',
            borderColor: 'rgba(220, 38, 38, 0.4)',
            color: '#F87171',
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
          }}
          text={title}
        />

        <TextReveal
          as="p"
          style={{
            fontSize: '1.15rem',
            color: '#CBD5E1',
            maxWidth: '750px',
            lineHeight: 1.7,
          }}
          text={subtitle}
        />
      </div>
    </div>
  );
}
