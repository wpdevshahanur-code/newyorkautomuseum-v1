'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const VOLUNTEER_AREAS = [
  'Museum Docent & Guest Experience',
  'Vehicle Preservation & Archival Support',
  'STEM Education & School Workshops',
  'Events, Galas & Exhibition Operations',
  'Community Outreach, Social Media & Marketing',
  'Advisory, Legal & Nonprofit Operations Support',
];

const AVAILABILITY_OPTIONS = [
  'Weekends (Saturday / Sunday)',
  'Weekdays (Monday – Friday)',
  'Evenings & Special Events',
  'Flexible / Remote Support',
];

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedinUrl: '',
    volunteerArea: VOLUNTEER_AREAS[0],
    availability: AVAILABILITY_OPTIONS[0],
    experience: '',
    agreed: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name || !formData.email || !formData.phone || !formData.linkedinUrl.trim()) {
      setErrorMessage('Please complete all required fields, including your LinkedIn profile.');
      return;
    }

    if (!formData.agreed) {
      setErrorMessage('Please confirm the volunteer acknowledgment statement to submit.');
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch('/api/submit-volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setSubmitted(true);
        if (typeof window !== 'undefined') {
          window.location.href = '/thank-you?source=volunteer';
        }
      } else {
        setErrorMessage(data?.message || 'Submission could not be completed. Please try again.');
      }
    } catch {
      setErrorMessage('Network connection error. Please try again or email hr@newyorkautomuseum.com.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="signup-funnel-card">
        <div className="application-success-card">
          <div className="success-icon-badge">✓</div>
          <h3 style={{ color: '#FFFFFF', fontSize: '1.8rem', fontWeight: 800, marginBottom: '12px' }}>
            Volunteer Application Received!
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '620px', margin: '0 auto 28px' }}>
            Thank you, <strong style={{ color: '#FFFFFF' }}>{formData.name}</strong>. Our Volunteer &amp; Community team will contact you shortly.
          </p>
          <Link href="/" className="btn btn-primary btn-sm">
            &larr; Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="signup-funnel-card">
      <div className="funnel-step-header">
        <span className="funnel-step-indicator">Volunteer Intake Registry</span>
        <span className="funnel-progress-badge ready">NYC Museum Support</span>
      </div>

      <h3 style={{ color: '#FFFFFF', fontSize: '1.35rem', fontWeight: 800, marginBottom: '8px' }}>
        Apply to Volunteer with the New York Auto Museum
      </h3>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '26px' }}>
        Whether your passion is automotive history, STEM youth education, museum curation, guest hospitality, or live events, your time helps bring New York&apos;s premier 200,000+ sq. ft. automotive experience center to life.
      </p>

      {errorMessage && (
        <div
          style={{
            background: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid rgba(239, 68, 68, 0.4)',
            color: '#F87171',
            padding: '12px 16px',
            borderRadius: '8px',
            marginBottom: '20px',
            fontSize: '0.9rem',
          }}
        >
          ⚠️ {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="lead-form-grid">
          <div>
            <label className="lead-input-label">Full Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Jordan Mercer"
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
              placeholder="e.g. jordan@domain.com"
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
              placeholder="e.g. (212) 555-0192"
              className="lead-input-field"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <label className="lead-input-label">Please insert your LinkedIn profile *</label>
            <input
              type="text"
              required
              placeholder="https://www.linkedin.com/in/your-profile (or enter N/A)"
              className="lead-input-field"
              value={formData.linkedinUrl}
              onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
            />
          </div>

          <div>
            <label className="lead-input-label">Preferred Volunteer Area *</label>
            <select
              className="lead-input-field"
              value={formData.volunteerArea}
              onChange={(e) => setFormData({ ...formData, volunteerArea: e.target.value })}
            >
              {VOLUNTEER_AREAS.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="lead-input-label">General Availability *</label>
            <select
              className="lead-input-field"
              value={formData.availability}
              onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
            >
              {AVAILABILITY_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="form-full-col">
            <label className="lead-input-label">
              Skills, Automotive Interests, or Relevant Background (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Share any relevant experience, languages, event support skills, or automotive background..."
              className="lead-input-field"
              style={{ resize: 'vertical' }}
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            />
          </div>
        </div>

        <label
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            margin: '22px 0 24px',
            padding: '14px 16px',
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.09)',
            color: '#CBD5E1',
            fontSize: '0.88rem',
            lineHeight: 1.6,
            cursor: 'pointer',
          }}
        >
          <input
            type="checkbox"
            required
            checked={formData.agreed}
            onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
            style={{ width: '18px', height: '18px', accentColor: '#E11D48', marginTop: '3px', flexShrink: 0 }}
          />
          <span>
            I understand that volunteer roles with The New York Auto Experience Inc. (501(c)(3)) and the New York Auto Museum are unpaid service commitments supporting our public charitable and educational mission.
          </span>
        </label>

        <button type="submit" className="lead-submit-btn" disabled={submitting}>
          {submitting ? 'Submitting Volunteer Application...' : <>Submit Volunteer Application <span>&rarr;</span></>}
        </button>
      </form>
    </div>
  );
}
