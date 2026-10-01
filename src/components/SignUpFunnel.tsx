'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SignUpFunnel() {
  const [prompts, setPrompts] = useState<{
    q1: boolean | null;
    q2: boolean | null;
    q3: boolean | null;
    q4: boolean | null;
  }>({
    q1: null,
    q2: null,
    q3: null,
    q4: null,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    boardTier: '$1,500 - Advisory Committee Board',
    background: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handlePrompt = (key: 'q1' | 'q2' | 'q3' | 'q4', value: boolean) => {
    setPrompts((prev) => {
      const next = { ...prev, [key]: value };
      if (key === 'q1' && value === false) {
        next.q2 = null;
        next.q3 = null;
        next.q4 = null;
      } else if (key === 'q2' && value === false) {
        next.q3 = null;
        next.q4 = null;
      } else if (key === 'q3' && value === false) {
        next.q4 = null;
      }
      return next;
    });
  };

  const answeredCount = Object.values(prompts).filter((v) => v !== null).length;
  const allAgreed = prompts.q1 === true && prompts.q2 === true && prompts.q3 === true && prompts.q4 === true;
  const hasDeclined = prompts.q1 === false || prompts.q2 === false || prompts.q3 === false || prompts.q4 === false;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!allAgreed) {
      setErrorMessage('Please confirm all Committee Board qualification criteria first.');
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMessage('Please fill in your full name, email address, and phone number.');
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch('/api/submit-board-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          boardTier: formData.boardTier,
          background: formData.background,
          commitments: prompts,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);

        // Google Ads Grant Conversion Trigger
        if (typeof window !== 'undefined') {
          const w = window as any;
          if (typeof w.gtag === 'function') {
            w.gtag('event', 'conversion', {
              send_to: 'AW-CONVERSION-PLACEHOLDER',
              value: formData.boardTier.includes('5,000') ? 5000 : formData.boardTier.includes('2,500') ? 2500 : 1500,
              currency: 'USD',
            });
          }
          if (Array.isArray(w.dataLayer)) {
            w.dataLayer.push({
              event: 'committee_board_lead_submitted',
              board_tier: formData.boardTier,
              lead_email: formData.email,
            });
          }
        }
      } else {
        setErrorMessage(data.message || 'Submission could not be completed. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network connection error. Please try again or reach out directly to info@newyorkautoexperience.org');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="signup-funnel-card">
      {/* Confirmation State */}
      {submitted ? (
        <div className="application-success-card">
          <div className="success-icon-badge">✓</div>
          <h3 style={{ color: '#FFFFFF', fontSize: '1.8rem', fontWeight: 800, marginBottom: '12px' }}>
            Committee Board Application Received!
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '620px', margin: '0 auto 28px' }}>
            Thank you, <strong style={{ color: '#FFFFFF' }}>{formData.name}</strong>. Your commitment to helping build the 
            <strong> New York Auto Museum Experience Center Inc.</strong> in New York City has been safely recorded.
          </p>

          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', maxWidth: '580px', margin: '0 auto 32px', textAlign: 'left' }}>
            <h4 style={{ color: 'var(--color-primary, #E11D48)', fontSize: '0.92rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
              What Happens Next:
            </h4>
            <ul style={{ color: '#CBD5E1', fontSize: '0.9rem', lineHeight: 1.7, paddingLeft: '20px', margin: 0 }}>
              <li>Our Executive Committee chair (David Senator) and governance team will review your application.</li>
              <li>You will receive a formal board participation packet and meeting schedule via email at <strong style={{ color: '#FFFFFF' }}>{formData.email}</strong>.</li>
              <li>A direct 501(c)(3) tax-deductible receipt will be provided upon formal appointment.</li>
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn-outline btn-sm">
              &larr; Return to Home
            </Link>
            <Link href="/about" className="btn btn-primary btn-sm">
              Explore Museum Exhibits &rarr;
            </Link>
          </div>
        </div>
      ) : (
        <>
          {/* Step Header */}
          <div className="funnel-step-header">
            <span className="funnel-step-indicator">
              Step 1: Committee Board Qualification Criteria
            </span>
            <span className={`funnel-progress-badge ${allAgreed ? 'ready' : ''}`}>
              {allAgreed ? '✓ 4 of 4 Confirmed' : `${answeredCount} of 4 Confirmed`}
            </span>
          </div>

          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '24px' }}>
            To ensure meaningful leadership for the New York Auto Museum Experience Center Inc., candidates are prompted to pre-qualify through the institutional guidelines below:
          </p>

          {/* Prompt 1 */}
          <div className={`prompt-card ${prompts.q1 === true ? 'agreed' : prompts.q1 === false ? 'declined' : ''}`}>
            <div className="prompt-text-group">
              <div className="prompt-number-badge">{prompts.q1 === true ? '✓' : '1'}</div>
              <p className="prompt-question">
                I would like to join a Committee Board to help build the New York Auto Museum Experience Center Inc. in New York City?
              </p>
            </div>
            <div className="prompt-button-group">
              <button
                type="button"
                className={`prompt-choice-btn ${prompts.q1 === true ? 'active-yes' : ''}`}
                onClick={() => handlePrompt('q1', true)}
              >
                <span>✓</span> Yes, I Agree
              </button>
              <button
                type="button"
                className={`prompt-choice-btn ${prompts.q1 === false ? 'active-no' : ''}`}
                onClick={() => handlePrompt('q1', false)}
              >
                No
              </button>
            </div>
          </div>

          {/* STOP Notice if Q1 is 'No' */}
          {prompts.q1 === false && (
            <div className="ineligible-notice stop-notice" style={{ marginTop: '16px', animation: 'slideUpFade 0.3s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '1.3rem' }}>🛑</span>
                <strong style={{ color: '#EF4444', fontSize: '1rem' }}>Application Stopped: Committee Agreement Required</strong>
              </div>
              <p style={{ margin: 0, lineHeight: 1.6 }}>
                Participation on our leadership committee requires commitment to helping establish the New York Auto Museum Experience Center Inc. in New York City. Since you selected &quot;No&quot;, you cannot proceed with this application.
              </p>
              <p style={{ marginTop: '12px', marginBottom: 0, fontSize: '0.88rem' }}>
                You can still support our mission! Please consider exploring our <Link href="/about">Museum Exhibits</Link> or contributing on our <Link href="/committees">Committees Page</Link>.
              </p>
            </div>
          )}

          {/* Prompt 2 (Only accessible if Q1 is 'Yes') */}
          {prompts.q1 === true && (
            <div className={`prompt-card ${prompts.q2 === true ? 'agreed' : prompts.q2 === false ? 'declined' : ''}`} style={{ animation: 'slideUpFade 0.35s ease' }}>
              <div className="prompt-text-group">
                <div className="prompt-number-badge">{prompts.q2 === true ? '✓' : '2'}</div>
                <p className="prompt-question">
                  I understand that there is a tax-deductible 501(c)(3) donation request between $1,500 – $5,000 depending on the board level I participate in?
                </p>
              </div>
              <div className="prompt-button-group">
                <button
                  type="button"
                  className={`prompt-choice-btn ${prompts.q2 === true ? 'active-yes' : ''}`}
                  onClick={() => handlePrompt('q2', true)}
                >
                  <span>✓</span> Yes, I Understand &amp; Agree
                </button>
                <button
                  type="button"
                  className={`prompt-choice-btn ${prompts.q2 === false ? 'active-no' : ''}`}
                  onClick={() => handlePrompt('q2', false)}
                >
                  No
                </button>
              </div>
            </div>
          )}

          {/* STOP Notice if Q2 is 'No' */}
          {prompts.q1 === true && prompts.q2 === false && (
            <div className="ineligible-notice stop-notice" style={{ marginTop: '16px', animation: 'slideUpFade 0.3s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '1.3rem' }}>🛑</span>
                <strong style={{ color: '#EF4444', fontSize: '1rem' }}>Application Stopped: Donation Commitment Required</strong>
              </div>
              <p style={{ margin: 0, lineHeight: 1.6 }}>
                Committee Board leadership requires agreement to the $1,500 – $5,000 tax-deductible 501(c)(3) contribution request. Since you selected &quot;No&quot;, you cannot proceed further with this application.
              </p>
              <p style={{ marginTop: '12px', marginBottom: 0, fontSize: '0.88rem' }}>
                If you prefer general contributions of any amount without board governance obligations, please visit our <Link href="/committees">Committees Page</Link>.
              </p>
            </div>
          )}

          {/* Prompt 3 (Only accessible if Q1 & Q2 are 'Yes') */}
          {prompts.q1 === true && prompts.q2 === true && (
            <div className={`prompt-card ${prompts.q3 === true ? 'agreed' : prompts.q3 === false ? 'declined' : ''}`} style={{ animation: 'slideUpFade 0.35s ease' }}>
              <div className="prompt-text-group">
                <div className="prompt-number-badge">{prompts.q3 === true ? '✓' : '3'}</div>
                <p className="prompt-question">
                  If I participate, I agree to receive an official 501(c)(3) tax-deductible receipt?
                </p>
              </div>
              <div className="prompt-button-group">
                <button
                  type="button"
                  className={`prompt-choice-btn ${prompts.q3 === true ? 'active-yes' : ''}`}
                  onClick={() => handlePrompt('q3', true)}
                >
                  <span>✓</span> Yes, I Agree
                </button>
                <button
                  type="button"
                  className={`prompt-choice-btn ${prompts.q3 === false ? 'active-no' : ''}`}
                  onClick={() => handlePrompt('q3', false)}
                >
                  No
                </button>
              </div>
            </div>
          )}

          {/* STOP Notice if Q3 is 'No' */}
          {prompts.q1 === true && prompts.q2 === true && prompts.q3 === false && (
            <div className="ineligible-notice stop-notice" style={{ marginTop: '16px', animation: 'slideUpFade 0.3s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '1.3rem' }}>🛑</span>
                <strong style={{ color: '#EF4444', fontSize: '1rem' }}>Application Stopped: Receipt Agreement Required</strong>
              </div>
              <p style={{ margin: 0, lineHeight: 1.6 }}>
                All committee board contributions are legally recorded with official 501(c)(3) tax receipts under IRS guidelines.
              </p>
            </div>
          )}

          {/* Prompt 4 (Only accessible if Q1, Q2 & Q3 are 'Yes') */}
          {prompts.q1 === true && prompts.q2 === true && prompts.q3 === true && (
            <div className={`prompt-card ${prompts.q4 === true ? 'agreed' : prompts.q4 === false ? 'declined' : ''}`} style={{ animation: 'slideUpFade 0.35s ease' }}>
              <div className="prompt-text-group">
                <div className="prompt-number-badge">{prompts.q4 === true ? '✓' : '4'}</div>
                <p className="prompt-question">
                  I agree to provide a 2-paragraph biography for the official museum website if selected?
                </p>
              </div>
              <div className="prompt-button-group">
                <button
                  type="button"
                  className={`prompt-choice-btn ${prompts.q4 === true ? 'active-yes' : ''}`}
                  onClick={() => handlePrompt('q4', true)}
                >
                  <span>✓</span> Yes, I Agree
                </button>
                <button
                  type="button"
                  className={`prompt-choice-btn ${prompts.q4 === false ? 'active-no' : ''}`}
                  onClick={() => handlePrompt('q4', false)}
                >
                  No
                </button>
              </div>
            </div>
          )}

          {/* STOP Notice if Q4 is 'No' */}
          {prompts.q1 === true && prompts.q2 === true && prompts.q3 === true && prompts.q4 === false && (
            <div className="ineligible-notice stop-notice" style={{ marginTop: '16px', animation: 'slideUpFade 0.3s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '1.3rem' }}>🛑</span>
                <strong style={{ color: '#EF4444', fontSize: '1rem' }}>Application Stopped: Bio Required</strong>
              </div>
              <p style={{ margin: 0, lineHeight: 1.6 }}>
                Selected Committee Board members are publicly recognized on the museum website and need to provide a 2-paragraph professional bio.
              </p>
            </div>
          )}

          {/* Unlocked Message when all 4 are 'Yes' */}
          {allAgreed && (
            <div className="prequalified-notice">
              <span style={{ fontSize: '1.4rem' }}>🎉</span>
              <div>
                <strong>Criteria Confirmed!</strong> Step 2 is now unlocked below. Please complete your contact profile to submit your board application.
              </div>
            </div>
          )}

          {/* Step 2: Lead Capture Form (Revealed when all 4 are 'Yes') */}
          {allAgreed && (
            <form className="signup-lead-form" onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <span className="funnel-step-indicator" style={{ color: '#10B981' }}>
                  Step 2: Candidate Contact Information
                </span>
                <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginTop: '6px', marginBottom: '4px' }}>
                  Official Board Candidate Details
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>
                  Please ensure your email and phone number are accurate so our committee chair can reach you directly.
                </p>
              </div>

              {errorMessage && (
                <div style={{
                  background: 'rgba(239, 68, 68, 0.15)',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  color: '#F87171',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  marginBottom: '18px',
                  fontSize: '0.9rem'
                }}>
                  ⚠️ {errorMessage}
                </div>
              )}

              <div className="lead-form-grid">
                <div>
                  <label className="lead-input-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance, Esq."
                    className="lead-input-field"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="lead-input-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. evance@firm.com"
                    className="lead-input-field"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="lead-input-label">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. (212) 555-0198"
                    className="lead-input-field"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="lead-input-label">Preferred Board Tier ($1,500 - $5,000)</label>
                  <select
                    className="lead-input-field"
                    value={formData.boardTier}
                    onChange={(e) => setFormData({ ...formData, boardTier: e.target.value })}
                  >
                    <option value="$1,500 - Advisory Committee Board">$1,500 - Advisory Committee Board</option>
                    <option value="$2,500 - Leadership & Exhibits Council">$2,500 - Leadership &amp; Exhibits Council</option>
                    <option value="$5,000 - Executive Founding Board">$5,000 - Executive Founding Board</option>
                  </select>
                </div>

                <div className="form-full-col">
                  <label className="lead-input-label">
                    Brief Professional Background or LinkedIn Profile (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide a brief note regarding your professional domain, company, or link to your LinkedIn profile..."
                    className="lead-input-field"
                    style={{ resize: 'vertical' }}
                    value={formData.background}
                    onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="lead-submit-btn"
                disabled={submitting}
              >
                {submitting ? (
                  'Submitting Application...'
                ) : (
                  <>
                    Submit Committee Board Application <span>&rarr;</span>
                  </>
                )}
              </button>

              <p className="form-disclaimer">
                🔒 Submissions are confidential. The New York Auto Experience Inc. is a recognized 501(c)(3) public charity (EIN: 922822778). Contributions are 100% tax-deductible to the extent allowed by law.
              </p>
            </form>
          )}
        </>
      )}
    </div>
  );
}
