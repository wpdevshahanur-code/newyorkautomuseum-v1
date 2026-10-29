'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SocialFeedClient() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const scriptId = 'curator-feed-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.charset = 'UTF-8';
      script.src = 'https://cdn.curator.io/published/58afbcbe-757e-4204-818f-662d662b8cd3.js';
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    } else {
      setScriptLoaded(true);
    }
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: 'transparent' }}>
      {/* 1. Hero Header Section */}
      <section style={{ padding: '80px 0 40px', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', position: 'relative' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 28px', width: '100%' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            {/* Unified Single-Color Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(225, 29, 72, 0.12)',
                border: '1px solid rgba(225, 29, 72, 0.40)',
                color: '#E11D48',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#E11D48',
                  boxShadow: '0 0 10px #E11D48',
                }}
              />
              Live Media &bull; Social Hub
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                marginBottom: '18px',
              }}
            >
              Official <span style={{ color: '#E11D48' }}>Social Feed</span> &amp; Live Stream
            </h1>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.65, color: '#94A3B8', marginBottom: '32px' }}>
              Explore real-time automotive heritage highlights, behind-the-scenes exhibit developments, community builds, and official announcements across our active social channels.
            </p>

            {/* Quick Channel Overview Badges (Single Color Accent: #E11D48) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '14px',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(18, 24, 36, 0.85)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  padding: '16px 20px',
                }}
              >
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#94A3B8', letterSpacing: '0.05em' }}>Visual Showcase</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginTop: '4px' }}>Instagram</div>
                <div style={{ fontSize: '0.78rem', color: '#E11D48', marginTop: '3px', fontWeight: 600 }}>● Photo Gallery &amp; Reels</div>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(18, 24, 36, 0.85)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  padding: '16px 20px',
                }}
              >
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#94A3B8', letterSpacing: '0.05em' }}>Video Channel</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginTop: '4px' }}>YouTube</div>
                <div style={{ fontSize: '0.78rem', color: '#E11D48', marginTop: '3px', fontWeight: 600 }}>● Documentaries &amp; Shorts</div>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(18, 24, 36, 0.85)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  padding: '16px 20px',
                }}
              >
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#94A3B8', letterSpacing: '0.05em' }}>Community News</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginTop: '4px' }}>Facebook</div>
                <div style={{ fontSize: '0.78rem', color: '#E11D48', marginTop: '3px', fontWeight: 600 }}>● Official Updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Live Curator.io Feed Section with Translucent Backdrop */}
      <section style={{ padding: '60px 0 80px', position: 'relative' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 28px', width: '100%' }}>
          <div
            style={{
              backgroundColor: 'rgba(18, 24, 36, 0.85)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              borderRadius: '14px',
              padding: '36px 28px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
              minHeight: '650px',
            }}
          >
            {/* Curator.io Feed Container */}
            <div id="curator-feed-default-feed-layout" style={{ width: '100%', minHeight: '550px' }}>
              <a
                href="https://curator.io"
                target="_blank"
                rel="noopener noreferrer"
                className="crt-logo crt-tag"
                style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.8rem', display: 'inline-block', marginBottom: '12px' }}
              >
                Powered by Curator.io
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles for Curator Dark Mode Integration */}
      <style jsx global>{`
        #curator-feed-default-feed-layout {
          width: 100% !important;
        }
        .crt-feed-window,
        .crt-post,
        .crt-grid-post {
          background-color: rgba(15, 23, 42, 0.85) !important;
          border: 1px solid rgba(255, 255, 255, 0.12) !important;
          border-radius: 8px !important;
          color: #FFFFFF !important;
        }
        .crt-post-c {
          color: #E2E8F0 !important;
        }
        .crt-post-date,
        .crt-post-username {
          color: #94A3B8 !important;
        }
        .crt-load-more button,
        .crt-btn {
          background-color: #E11D48 !important;
          color: #FFFFFF !important;
          border: none !important;
          font-weight: 700 !important;
          border-radius: 6px !important;
        }
      `}</style>
    </div>
  );
}
