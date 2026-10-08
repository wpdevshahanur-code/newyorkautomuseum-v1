'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SocialReleaseForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    socialHandle: '',
    platform: 'Instagram',
    vehicleDetails: '',
    agreed: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name || !formData.email || !formData.phone || !formData.socialHandle) {
      setErrorMessage('Please fill in your full name, email, phone number, and primary social media handle.');
      return;
    }

    if (!formData.agreed) {
      setErrorMessage('Please check the confirmation box to agree to the Media Release Terms & Conditions.');
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch('/api/submit-social-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || 'Submission could not be completed. Please try again.');
      }
    } catch (err) {
      setErrorMessage('A network error occurred. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="social-form-card">
        <div className="social-success-card">
          <div className="social-success-badge">✓</div>
          <h3 style={{ color: '#FFFFFF', fontSize: '1.85rem', fontWeight: 800, marginBottom: '12px' }}>
            Media Release Registered!
          </h3>
          <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 28px' }}>
            Thank you, <strong style={{ color: '#FFFFFF' }}>{formData.name}</strong>. Your media release agreement for handle{' '}
            <strong style={{ color: '#FFFFFF' }}>{formData.socialHandle}</strong> has been successfully recorded.
          </p>

          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '22px 24px', maxWidth: '560px', margin: '0 auto 32px', textAlign: 'left' }}>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.92rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
              Next Steps:
            </h4>
            <ul style={{ color: '#E2E8F0', fontSize: '0.92rem', lineHeight: 1.7, paddingLeft: '20px', margin: 0 }}>
              <li>Our media curation team will review your submitted profile and content focus.</li>
              <li>When your vehicles or photography are featured across our platform, our team will tag your handle directly.</li>
              <li>A formal confirmation has been logged with our curation registry.</li>
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/"
              className="social-submit-btn"
              style={{ display: 'inline-flex', width: 'auto', padding: '14px 28px', textDecoration: 'none' }}
            >
              Explore Museum Platform &rarr;
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="social-form-card">
      <div className="social-section-header">
        <h3 style={{ color: '#FFFFFF', fontSize: '1.45rem', fontWeight: 800, marginBottom: '6px' }}>
          Creator &amp; Vehicle Media Release Registration
        </h3>
        <p style={{ color: '#94A3B8', fontSize: '0.92rem', margin: 0, lineHeight: 1.6 }}>
          Complete this brief authorization form to allow the New York Auto Museum platform to showcase your automotive content, photography, and builds.
        </p>
      </div>

      {errorMessage && (
        <div style={{
          background: 'rgba(239, 68, 68, 0.15)',
          border: '1px solid rgba(239, 68, 68, 0.4)',
          color: '#F87171',
          padding: '12px 18px',
          borderRadius: '10px',
          marginBottom: '22px',
          fontSize: '0.92rem'
        }}>
          ⚠️ {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="social-form-grid">
          {/* Full Name */}
          <div>
            <label className="social-input-label">
              Full Name <span className="req">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Marcus Vance"
              className="social-input-field"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="social-input-label">
              Email Address <span className="req">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="e.g. marcus@creator.com"
              className="social-input-field"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="social-input-label">
              Phone Number <span className="req">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. (212) 555-0144"
              className="social-input-field"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          {/* Primary Platform */}
          <div>
            <label className="social-input-label">Primary Social Platform</label>
            <select
              className="social-input-field"
              value={formData.platform}
              onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
            >
              <option value="Instagram">Instagram</option>
              <option value="TikTok">TikTok</option>
              <option value="YouTube">YouTube</option>
              <option value="X / Twitter">X / Twitter</option>
              <option value="Facebook">Facebook</option>
              <option value="Automotive Photographer / Other">Automotive Photographer / Other</option>
            </select>
          </div>

          {/* Social Media Handle */}
          <div className="social-full-col">
            <label className="social-input-label">
              Social Media Handle(s) or Profile URL <span className="req">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. @marcus_auto_media / tiktok.com/@marcuscars"
              className="social-input-field"
              value={formData.socialHandle}
              onChange={(e) => setFormData({ ...formData, socialHandle: e.target.value })}
            />
          </div>

          {/* Vehicle Details / Content Focus */}
          <div className="social-full-col">
            <label className="social-input-label">
              Vehicle Make, Model, Year, or Content Focus (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. 1970 Dodge Challenger R/T, Classic European restorations, or Supercar photography in NYC..."
              className="social-input-field"
              style={{ resize: 'vertical' }}
              value={formData.vehicleDetails}
              onChange={(e) => setFormData({ ...formData, vehicleDetails: e.target.value })}
            />
          </div>
        </div>

        {/* Legal Release Statement Callout Box */}
        <div className="social-release-box">
          <div className="social-release-title">
            <span>📜</span> One-Paragraph Media Release Statement
          </div>
          <p className="social-release-text">
            By submitting this agreement, I hereby grant The New York Auto Experience Inc. and the New York Auto Museum 
            (501(c)(3) nonprofit, EIN 92-2822778) non-exclusive, revocable authorization to feature, repost, display, 
            and showcase my submitted automotive photographs, videos, and social media media across their official websites, 
            social channels, exhibitions, and promotional materials with appropriate creator attribution/credit. 
            I confirm that I own or have lawful authorization to share the submitted content.
          </p>
        </div>

        {/* Checkbox */}
        <label className="social-checkbox-wrapper">
          <input
            type="checkbox"
            required
            checked={formData.agreed}
            onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
          />
          <span className="social-checkbox-label">
            <strong>I have read and agree to the Terms and Conditions</strong> of the Media Release Statement above, 
            and authorize the New York Auto Museum to feature my social media content with attribution.
          </span>
        </label>

        {/* Submission Button */}
        <button
          type="submit"
          className="social-submit-btn"
          disabled={submitting}
        >
          {submitting ? (
            'Registering Media Release...'
          ) : (
            <>
              Submit Media Release Authorization <span>&rarr;</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
