'use client';

import { useState } from 'react';
import TextReveal from './TextReveal';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');
    setMessage('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setMessage(data.message || 'Thank you for signing up.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again later.');
    }
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
            color: '#94A3B8',
            fontSize: '1.05rem',
            marginBottom: '28px',
          }}
          text="Sign up for our newsletter to stay update with latest news, updates and more."
        />

        {status === 'success' ? (
          <div
            style={{
              padding: '20px 24px',
              borderRadius: '12px',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              color: '#10B981',
              fontWeight: 700,
              fontSize: '1.02rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span>✓ {message || 'Thank you for signing up. You are now subscribed to our newsletter.'}</span>
            <button
              onClick={() => {
                setStatus('idle');
                setMessage('');
              }}
              style={{
                background: 'transparent',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                color: '#10B981',
                borderRadius: '6px',
                padding: '4px 12px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Subscribe another email
            </button>
          </div>
        ) : (
          <div>
            {status === 'error' && (
              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  background: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.35)',
                  color: '#EF4444',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  marginBottom: '16px',
                  maxWidth: '480px',
                  margin: '0 auto 16px auto',
                }}
              >
                {message || 'Failed to submit. Please try again.'}
              </div>
            )}
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
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  background: 'rgba(18, 24, 36, 0.88)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.3)',
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
          </div>
        )}
      </div>
    </section>
  );
}
