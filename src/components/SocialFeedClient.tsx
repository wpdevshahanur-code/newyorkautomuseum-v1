import React from 'react';
import Link from 'next/link';

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
            maxWidth: '580px',
            margin: '0 auto 30px',
          }}
        >
          The feed will resume once the monthly Curator visitor allowance resets or the plan is
          upgraded.
        </p>

        <div className="not-found-actions" style={{ marginBottom: 0 }}>
          <Link href="/" className="btn btn-primary">
            <span>Back to Homepage</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link href="/newsletter" className="btn btn-secondary">
            Subscribe to Newsletter
          </Link>
        </div>
      </div>
    </section>
  );
}
