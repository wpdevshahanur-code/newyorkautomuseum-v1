'use client';

import Link from 'next/link';
import TextReveal from './TextReveal';

interface PageHeaderProps {
  tag: string;
  title: string;
  subtitle: string;
  breadcrumb: string;
}

export default function PageHeader({ tag, title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <div
      style={{
        backgroundColor: '#0F172A',
        color: '#FFFFFF',
        padding: '70px 0',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid #1E293B',
      }}
    >
      {/* Decorative accent glow */}
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.15) 0%, rgba(15, 23, 42, 0) 70%)',
          pointerEvents: 'none',
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
