import React from 'react';
import Link from 'next/link';

const SOCIAL_CHANNELS = [
  {
    name: 'Instagram',
    eyebrow: 'Visual Showcase',
    hint: '@newyorkautomuseum',
    href: 'https://www.instagram.com/newyorkautomuseum/',
  },
  {
    name: 'YouTube',
    eyebrow: 'Video Channel',
    hint: 'Documentaries & Shorts',
    href: 'https://www.youtube.com/@newyorkautomuseumexp',
  },
  {
    name: 'Facebook',
    eyebrow: 'Community News',
    hint: 'Official Updates',
    href: 'https://www.facebook.com/profile.php?id=61585348961563',
  },
];

export default function SocialFeedClient() {
  return (
    <section className="social-notice-section">
      <div className="social-notice-card">
        <span className="not-found-badge">
          <span className="not-found-badge-dot" aria-hidden="true" />
          Curator.io Free Tier &bull; Monthly Limit Reached
        </span>

        <h1 className="not-found-title" style={{ marginBottom: '16px' }}>
          Official <span style={{ color: '#E11D48' }}>Social Feed</span> Temporarily Unavailable
        </h1>

        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.7,
            color: '#E2E8F0',
            maxWidth: '640px',
            margin: '0 auto 14px',
            fontWeight: 500,
          }}
        >
          Curator&apos;s free tier monthly visitor limit has been reached for this period, so the
          embedded social feed content has been temporarily removed.
        </p>

        <p
          style={{
            fontSize: '0.95rem',
            lineHeight: 1.65,
            color: '#94A3B8',
            maxWidth: '600px',
            margin: '0 auto 28px',
          }}
        >
          The feed will resume once the monthly Curator visitor allowance resets or the plan is
          upgraded. In the meantime, you can follow our latest photos, videos, and announcements
          directly on our official social channels below.
        </p>

        <div className="not-found-actions" style={{ marginBottom: '8px' }}>
          <Link href="/" className="btn btn-primary">
            <span>Back to Homepage</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link href="/newsletter" className="btn btn-secondary">
            Subscribe to Newsletter
          </Link>
        </div>

        <div className="social-notice-channels">
          {SOCIAL_CHANNELS.map((channel) => (
            <a
              key={channel.name}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-notice-channel-card"
            >
              <div>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#38BDF8',
                    marginBottom: '4px',
                  }}
                >
                  {channel.eyebrow}
                </span>
                <span className="not-found-link-title">{channel.name}</span>
                <span className="not-found-link-desc">{channel.hint}</span>
              </div>
              <span className="not-found-link-arrow" aria-hidden="true">
                &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
