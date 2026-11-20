'use client';

import { useState } from 'react';

export default function NewsletterClientView() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');
    setMessage('');

    const trimmedEmail = email.trim();

    // 2-Tier Headless Submission Strategy to WordPress Fluent Forms
    // Tier 1: Direct Headless AJAX to WordPress Fluent Forms
    try {
      const formPayload = new URLSearchParams({ email: trimmedEmail });
      const postBody = new URLSearchParams({
        action: 'fluentform_submit',
        form_id: '4',
        data: formPayload.toString(),
      });

      const wpRes = await fetch('https://admin.newyorkautoexperience.org/wp-admin/admin-ajax.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: postBody.toString(),
      });

      if (wpRes.ok) {
        const wpData = await wpRes.json().catch(() => null);
        if (wpData && wpData.success) {
          setStatus('success');
          setMessage(wpData.data?.result?.message || 'Thank you for signing up.');
          setEmail('');
          return;
        }
      }
    } catch {
      // Tier 1 bypassed (CORS / Adblock), falling back to Tier 2
    }

    // Tier 2: Next.js Server Route Fallback (/api/newsletter with hc_js_gate=1 cookie)
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: trimmedEmail }),
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
    <section style={{ padding: '72px 0 96px 0', minHeight: '380px' }}>
      <div className="container" style={{ maxWidth: '640px' }}>
        <div
          style={{
            backgroundColor: 'rgba(18, 24, 36, 0.88)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '16px',
            padding: '48px 36px',
            boxShadow: '0 14px 40px rgba(0, 0, 0, 0.45)',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '1.85rem',
              fontWeight: 800,
              color: '#FFFFFF',
              marginBottom: '12px',
              letterSpacing: '-0.02em',
            }}
          >
            Newsletter
          </h2>
          <p
            style={{
              color: '#94A3B8',
              fontSize: '1rem',
              lineHeight: 1.6,
              marginBottom: '28px',
            }}
          >
            Sign up for our newsletter to stay updated with latest news, updates and more.
          </p>

          {status === 'success' ? (
            <div
              style={{
                padding: '20px 24px',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                color: '#10B981',
                fontWeight: 700,
                fontSize: '1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <span>✓ {message || 'Thank you for signing up. You are now subscribed to our newsletter.'}</span>
              <button
                type="button"
                onClick={() => {
                  setStatus('idle');
                  setMessage('');
                }}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  color: '#10B981',
                  borderRadius: '6px',
                  padding: '6px 14px',
                  fontSize: '0.85rem',
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
                    marginBottom: '20px',
                  }}
                >
                  {message || 'Failed to submit. Please try again.'}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="newsletter-form"
                style={{
                  display: 'flex',
                  gap: '12px',
                  width: '100%',
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
                    background: 'rgba(11, 14, 20, 0.88)',
                    color: '#FFFFFF',
                    fontSize: '0.95rem',
                    padding: '14px 18px',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn btn-primary newsletter-submit-btn"
                  style={{
                    whiteSpace: 'nowrap',
                    padding: '14px 28px',
                    fontWeight: 700,
                  }}
                >
                  {status === 'submitting' ? 'Signing up...' : 'Sign Up'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
