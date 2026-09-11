'use client';

import { useState } from 'react';
import TextReveal from './TextReveal';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  return (
    <section
      id="newsletter-frame"
      className="newsletter-section"
      style={{
        backgroundColor: 'transparent',
        textAlign: 'center',
      }}
    >
      <div className="container" style={{ maxWidth: '650px' }}>
        <TextReveal
          as="h3"
          style={{
            fontSize: '2rem',
            fontWeight: 800,
            color: '#FFFFFF',
            marginBottom: '12px',
          }}
          text="Newsletter:"
        />
        <TextReveal
          as="p"
          style={{
            color: '#CBD5E1',
            fontSize: '1.05rem',
            marginBottom: '28px',
          }}
          text="Sign up for our newsletter to stay update with latest news, updates and more."
        />

        {status === 'success' ? (
          <div
            style={{
              padding: '16px 24px',
              borderRadius: '8px',
              background: 'rgba(22, 163, 74, 0.1)',
              border: '1px solid rgba(22, 163, 74, 0.3)',
              color: '#15803D',
              fontWeight: 700,
            }}
          >
            Thank you for signing up.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="newsletter-form"
            style={{
              gap: '12px',
              maxWidth: '480px',
              margin: '0 auto',
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="newsletter-input"
              style={{
                flex: 1,
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                background: '#FFFFFF',
                color: '#0F172A',
                fontSize: '0.95rem',
                outline: 'none',
                boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
              }}
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn btn-primary newsletter-submit-btn"
              style={{ whiteSpace: 'nowrap' }}
            >
              {status === 'submitting' ? 'Signing up...' : 'Sign Up'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
