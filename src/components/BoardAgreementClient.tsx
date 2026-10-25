'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface BoardTierOption {
  id: string;
  role: string;
  donationRange: string;
  hours: string;
  category: 'board' | 'committee' | 'pro-bono';
}

const BOARD_TIERS: BoardTierOption[] = [
  { id: 'director', role: 'Director', donationRange: '$1,000.00', hours: '4-6 hrs/month', category: 'board' },
  { id: 'brand-ambassador', role: 'Brand Ambassador', donationRange: '$2,500.00', hours: '4-6 hrs/month', category: 'board' },
  { id: 'board-of-advisors', role: 'Board of Advisors', donationRange: '$4,000.00', hours: '4-6 hrs/month', category: 'board' },
  { id: 'board-of-directors', role: 'Board of Directors', donationRange: '$5,000.00', hours: '4-6 hrs/month', category: 'board' },
  { id: 'honorary-chairman', role: 'Honorary Chairman', donationRange: '$25,000.00', hours: 'Advisory', category: 'board' },
  { id: 'committee-member', role: 'Committee Member', donationRange: '$500 - $1,500', hours: '4-6 hrs/month', category: 'committee' },
  { id: 'committee-officer', role: 'Committee Officer / Secretary', donationRange: '$1,000 - $5,000', hours: '6-12 hrs/month', category: 'committee' },
  { id: 'committee-chair', role: 'Committee Chairman / Vice-Chair', donationRange: '$5,000 - $10,000', hours: '6-12 hrs/month', category: 'committee' },
  { id: 'pro-bono-legal', role: 'Pro-Bono Legal Counsel', donationRange: 'In-kind Legal Services ($0)', hours: 'Advisory as needed', category: 'pro-bono' },
  { id: 'volunteer-leader', role: 'Executive Volunteer / Team Leader', donationRange: 'Volunteerism ($0)', hours: 'Dedicated volunteer time', category: 'pro-bono' },
];

const GOVERNANCE_STANDARDS = [
  "A minimum 4 hours per month of dedicated self-delineated effort.",
  "NYAM & NYAE maintain standalone committees for operational and charitable governance.",
  "In joining the NYAE 501(c)(3), you agree to support the development of nonprofit educational activities for greater New York City School Districts.",
  "If joining the Board of Directors, you agree to attend at least one 60-minute video or in-person conference meeting every 4 months.",
  "You may cancel your involvement at any time with 30 days written notice.",
  "Post a message about your involvement on LinkedIn within 1–3 days of signing this document (Optional).",
  "Add your position to your LinkedIn profile as either a volunteer or concurrent leadership position.",
  "Sign our Non-Competition & Non-Disclosure (NDA) agreement attached.",
  "Resigning: Official removal from website rosters or public business plans may take up to 30 days.",
  "The President may spend up to $800 per operational transaction without prior Board approval.",
  "A 90-day onboarding probation period applies; participants may be dismissed at the discretion of an Officer or majority vote.",
  "Staff, Committee, and Executive participants may be removed by the President without cause.",
  "The President may retain relevant NYAE/NYAM legal advice or services as required without prior Board approval.",
  "David Senater is chartered to act as the nonprofit's Treasurer & President and is to receive a minimum of $600 weekly starting May 1st 2025 (per corporate bylaws).",
  "Parties agree to private arbitration outside the court system in the event of legal disagreements, governed by an impartial panel.",
  "All financial donations to the 501(c)(3) nonprofit are irrevocable charitable gifts under IRS guidelines and 100% tax-deductible.",
  "This document may be modified from time to time at the discretion of the President or Board of Directors.",
  "This contract agreement excludes separate Officer Employment Contracts governed by independent operational agreements.",
  "Participants are encouraged to bring corporate sponsors and strategic industry contacts to expand our public mission.",
  "Intellectual property, curatorial concepts, and museum assets developed remain the exclusive proprietary work of the organization.",
  "Corporate credit card authorizations must be countersigned and submitted with itemized receipts.",
  "Confidential business plans, donor databases, and architect renderings remain protected under strict NDA.",
  "Volunteerism and advisory contributions do not constitute a transfer of corporate ownership or equity unless stipulated in writing.",
  "Any contributions of time or resources, unless contractually stipulated otherwise, are considered in-kind volunteerism.",
  "To resign, notify the President who will submit formal notice to the Board within 7 days.",
  "Necessary work-related travel expenses for institutional development can be incurred by the President.",
  "Tax-deductible pledge donations should be completed within 14 days of executing this agreement.",
  "Your official 501(c)(3) tax receipt will generally arrive within 30–60 days of contribution settlement.",
  "Director & Officer (D&O) insurance coverage is provided; the master policy is available on request.",
  "Board terms are 1 year, auto-renewing with continued stewardship and mutual agreement.",
  "Committee members and auxiliary staff serve at the pleasure of leadership.",
  "Public disparaging communications online regarding the foundation are strictly prohibited under ethics policies.",
  "Board Meeting Agenda items must be submitted to the Corporate Secretary or President at least 24 hours prior to meetings.",
  "We recommend candidates seek independent tax or legal counsel regarding charitable participation and governance obligations."
];

export default function BoardAgreementClient() {
  const [activeTab, setActiveTab] = useState<'welcome' | 'terms' | 'tiers' | 'agreement' | 'sign'>('welcome');
  const [selectedTier, setSelectedTier] = useState<string>('board-of-advisors');

  // Form States
  const [fullName, setFullName] = useState('');
  const [titlePosition, setTitlePosition] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateZip, setStateZip] = useState('');
  const [conflictNote, setConflictNote] = useState('N/A (No current conflicts)');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Signature States
  const [sigMode, setSigMode] = useState<'draw' | 'type'>('draw');
  const [typedSig, setTypedSig] = useState('');
  const [hasDrawnSig, setHasDrawnSig] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [executionCert, setExecutionCert] = useState<{ id: string; date: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);

  // Initialize Canvas
  useEffect(() => {
    if (activeTab === 'sign' && sigMode === 'draw') {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Adjust for device pixel ratio for smooth crisp lines
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    }
  }, [activeTab, sigMode]);

  // Drawing event handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    isDrawingRef.current = true;
    setHasDrawnSig(true);

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    isDrawingRef.current = false;
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawnSig(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!fullName || !email || !phone) {
      setErrorMessage('Please fill in your legal full name, email, and phone number.');
      return;
    }

    if (sigMode === 'draw' && !hasDrawnSig) {
      setErrorMessage('Please draw your signature in the designated box below.');
      return;
    }

    if (sigMode === 'type' && !typedSig.trim()) {
      setErrorMessage('Please type your full legal name to generate your digital signature.');
      return;
    }

    if (!agreedToTerms) {
      setErrorMessage('Please check the legal declaration to authorize this electronic signature.');
      return;
    }

    setSubmitting(true);

    try {
      let signatureDataUrl = '';
      if (sigMode === 'draw' && canvasRef.current) {
        signatureDataUrl = canvasRef.current.toDataURL('image/png');
      } else {
        signatureDataUrl = `TYPED:${typedSig}`;
      }

      const res = await fetch('/api/submit-board-agreement', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          titlePosition,
          companyName,
          email,
          phone,
          address: `${address}, ${city}, ${stateZip}`.trim(),
          boardTier: selectedTier,
          conflictNote,
          signature: signatureDataUrl,
          signedDate: new Date().toISOString(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setExecutionCert({
          id: data.certificateId || `NYAM-AGR-${Date.now().toString(36).toUpperCase()}`,
          date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }),
        });
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || 'Submission could not be completed. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network connection error. Please try again or reach out directly to biography@newyorkautomuseum.com');
    } finally {
      setSubmitting(false);
    }
  };

  const selectedTierObj = BOARD_TIERS.find((t) => t.id === selectedTier) || BOARD_TIERS[2];

  return (
    <div className="board-agreement-wrapper">
      <div className="container">
        {/* Top Hero */}
        <div className="agreement-hero-header">
          <div className="agreement-badge-tag">
            <span>🏛️</span> Official Governance Onboarding Package
          </div>
          <h1 className="agreement-main-title">
            Board &amp; Committee Service Agreement
          </h1>
          <p className="agreement-main-subtitle">
            Welcome Package, 34 Stewardship Standards, and Electronic Signature Portal for 
            <strong> The New York Auto Experience Inc. (501c3)</strong> and <strong>New York Auto Museum Inc.</strong>
          </p>

          <div className="agreement-trust-bar">
            <div className="agreement-trust-item">
              <span><strong>Entity:</strong> The New York Auto Experience Inc.</span>
            </div>
            <div className="agreement-trust-item">
              <span><strong>501(c)(3) EIN:</strong> 92-2822778</span>
            </div>
            <div className="agreement-trust-item">
              <span><strong>Compliance:</strong> US E-SIGN Act (15 U.S.C. § 7001)</span>
            </div>
          </div>
        </div>

        {/* Main Document Container */}
        <div className="agreement-card-container">
          {/* Navigation Tabs */}
          <div className="agreement-tabs-bar">
            <button
              type="button"
              className={`agreement-tab-btn ${activeTab === 'welcome' ? 'active' : ''}`}
              onClick={() => setActiveTab('welcome')}
            >
              <span>📋</span> Welcome &amp; Checklist
            </button>
            <button
              type="button"
              className={`agreement-tab-btn ${activeTab === 'terms' ? 'active' : ''}`}
              onClick={() => setActiveTab('terms')}
            >
              <span>⚖️</span> 34 Governance Standards
            </button>
            <button
              type="button"
              className={`agreement-tab-btn ${activeTab === 'tiers' ? 'active' : ''}`}
              onClick={() => setActiveTab('tiers')}
            >
              <span>🎖️</span> Board Tiers &amp; Roles
            </button>
            <button
              type="button"
              className={`agreement-tab-btn ${activeTab === 'agreement' ? 'active' : ''}`}
              onClick={() => setActiveTab('agreement')}
            >
              <span>📜</span> Service Agreement &amp; NDA
            </button>
            <button
              type="button"
              className={`agreement-tab-btn ${activeTab === 'sign' ? 'active' : ''}`}
              onClick={() => setActiveTab('sign')}
              style={{ color: activeTab === 'sign' ? '#FFFFFF' : '#E11D48' }}
            >
              <span>✍️</span> E-Signature Portal
            </button>
          </div>

          {/* Body Content */}
          <div className="agreement-content-body">
            {submitted && executionCert ? (
              /* Success / Executed State */
              <div className="agreement-success-card">
                <div className="success-shield-badge">✓</div>
                <h2 style={{ color: '#FFFFFF', fontSize: '2rem', fontWeight: 900, marginBottom: '12px' }}>
                  Board Agreement Executed Successfully!
                </h2>
                <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto 28px' }}>
                  Thank you, <strong style={{ color: '#FFFFFF' }}>{fullName}</strong>. Your official onboarding document and electronic signature for 
                  <strong> {selectedTierObj.role}</strong> have been recorded with cryptographic timestamping.
                </p>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '12px',
                  padding: '24px',
                  maxWidth: '560px',
                  margin: '0 auto 32px auto',
                  textAlign: 'left'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px' }}>
                    <span style={{ color: '#64748B', fontSize: '0.85rem' }}>Certificate ID:</span>
                    <strong style={{ color: '#E11D48', fontFamily: 'monospace', fontSize: '0.95rem' }}>{executionCert.id}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px' }}>
                    <span style={{ color: '#64748B', fontSize: '0.85rem' }}>Date of Execution:</span>
                    <span style={{ color: '#FFFFFF', fontSize: '0.9rem' }}>{executionCert.date}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px' }}>
                    <span style={{ color: '#64748B', fontSize: '0.85rem' }}>Board Designation:</span>
                    <span style={{ color: '#FFFFFF', fontSize: '0.9rem', fontWeight: 700 }}>{selectedTierObj.role}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748B', fontSize: '0.85rem' }}>Legal Status:</span>
                    <span style={{ color: '#10B981', fontSize: '0.9rem', fontWeight: 700 }}>✓ Verified &amp; Archived</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="btn-secondary-sm"
                    style={{ padding: '12px 24px', fontSize: '0.95rem' }}
                  >
                    🖨️ Print / Save PDF Copy
                  </button>
                  <Link
                    href="/advisors"
                    className="btn-execute-agreement"
                    style={{ width: 'auto', padding: '12px 28px', textDecoration: 'none' }}
                  >
                    Explore The Board &amp; Advisors &rarr;
                  </Link>
                </div>
              </div>
            ) : (
              <>
                {/* TAB 1: Welcome & Checklist */}
                {activeTab === 'welcome' && (
                  <div>
                    <div className="legal-doc-header">
                      <div className="legal-entity-heading">New York Auto Experience Inc. (501c3) &bull; EIN: 92-2822778</div>
                      <h2 className="legal-doc-title">Welcome Package &amp; Application Checklist</h2>
                      <p className="legal-meta-note">
                        For Board / Committee Members, Directors, Officers, Executives &amp; Volunteers
                      </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '36px' }}>
                      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px' }}>
                        <div style={{ fontSize: '1.4rem', marginBottom: '8px' }}>📄 1. Professional Biography</div>
                        <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                          Forward a 2-paragraph professional biography by email to our Corporate Secretary at 
                          <strong style={{ color: '#FFFFFF', display: 'block', marginTop: '4px' }}>biography@newyorkautomuseum.com</strong>
                        </p>
                      </div>

                      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px' }}>
                        <div style={{ fontSize: '1.4rem', marginBottom: '8px' }}>🌐 2. LinkedIn Announcement</div>
                        <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                          Once onboarded, place a message on LinkedIn announcing your appointment. Forward the link to 
                          <strong style={{ color: '#FFFFFF', display: 'block', marginTop: '4px' }}>biography@newyorkautomuseum.com</strong> for network reposting.
                        </p>
                      </div>

                      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px' }}>
                        <div style={{ fontSize: '1.4rem', marginBottom: '8px' }}>💼 3. Profile Position</div>
                        <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                          Add your position to your LinkedIn profile: in the volunteer section or employment section as a concurrent leadership role.
                        </p>
                      </div>

                      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px' }}>
                        <div style={{ fontSize: '1.4rem', marginBottom: '8px' }}>📬 4. Tax Receipt Address</div>
                        <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                          Enter your full mailing address in the signing form below to receive your official 501(c)(3) tax-deductible contribution receipt.
                        </p>
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <button
                        type="button"
                        onClick={() => setActiveTab('terms')}
                        className="btn-execute-agreement"
                        style={{ width: 'auto', padding: '12px 28px' }}
                      >
                        Review 34 Governance Standards &rarr;
                      </button>
                    </div>
                  </div>
                )}

                {/* TAB 2: 34 Governance Standards */}
                {activeTab === 'terms' && (
                  <div>
                    <div className="legal-doc-header">
                      <div className="legal-entity-heading">Section 2 &bull; Institutional Guidelines</div>
                      <h2 className="legal-doc-title">34 Governance &amp; Stewardship Standards</h2>
                      <p className="legal-meta-note">
                        Please review the core operating principles, bylaws provisions, and fiduciary duties agreed upon by all board and committee members.
                      </p>
                    </div>

                    <div className="terms-grid">
                      {GOVERNANCE_STANDARDS.map((term, index) => (
                        <div key={index} className="term-item-card">
                          <div className="term-number-badge">{index + 1}</div>
                          <p className="term-text">{term}</p>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '36px' }}>
                      <button
                        type="button"
                        onClick={() => setActiveTab('welcome')}
                        className="btn-secondary-sm"
                        style={{ padding: '12px 24px' }}
                      >
                        &larr; Back to Checklist
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('tiers')}
                        className="btn-execute-agreement"
                        style={{ width: 'auto', padding: '12px 28px' }}
                      >
                        Select Board Tier &rarr;
                      </button>
                    </div>
                  </div>
                )}

                {/* TAB 3: Board Tiers & Roles */}
                {activeTab === 'tiers' && (
                  <div>
                    <div className="legal-doc-header">
                      <div className="legal-entity-heading">Section 3 &bull; Participation Levels</div>
                      <h2 className="legal-doc-title">Select Your Board / Committee Assignment</h2>
                      <p className="legal-meta-note">
                        Contributions come with an official 501(c)(3) tax-deductible receipt. Select your designated role below.
                      </p>
                    </div>

                    <div className="tiers-selector-grid">
                      {BOARD_TIERS.map((tier) => (
                        <div
                          key={tier.id}
                          className={`tier-select-card ${selectedTier === tier.id ? 'selected' : ''}`}
                          onClick={() => setSelectedTier(tier.id)}
                        >
                          <div>
                            <div className="tier-role-title">{tier.role}</div>
                            <div className="tier-donation-amt">{tier.donationRange}</div>
                          </div>
                          <div className="tier-commitment-note">
                            <strong>Service Commitment:</strong> {tier.hours}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Donation & Payment Instructions */}
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '14px',
                      padding: '24px',
                      marginTop: '32px'
                    }}>
                      <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem', marginBottom: '12px' }}>
                        💳 Gift &amp; Donation Remittance Options
                      </h4>
                      <p style={{ color: '#94A3B8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '16px' }}>
                        Donations can be settled via Zelle, online credit card, check, or wire transfer:
                      </p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                        <div>
                          <span style={{ color: '#64748B', fontSize: '0.78rem', textTransform: 'uppercase' }}>Zelle Remittance:</span>
                          <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.9rem' }}>payment@newyorkautoexperience.org</strong>
                        </div>
                        <div>
                          <span style={{ color: '#64748B', fontSize: '0.78rem', textTransform: 'uppercase' }}>Online / Credit Card:</span>
                          <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.9rem' }}>newyorkautoexperience.org/donate</strong>
                        </div>
                        <div>
                          <span style={{ color: '#64748B', fontSize: '0.78rem', textTransform: 'uppercase' }}>Check by Mail:</span>
                          <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.9rem' }}>767 Broadway #1671, New York, NY 10003</strong>
                        </div>
                        <div>
                          <span style={{ color: '#64748B', fontSize: '0.78rem', textTransform: 'uppercase' }}>Chase Bank Wire Desk:</span>
                          <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.9rem' }}>Amanda Notaro, VP (716-541-0203)</strong>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '36px' }}>
                      <button
                        type="button"
                        onClick={() => setActiveTab('terms')}
                        className="btn-secondary-sm"
                        style={{ padding: '12px 24px' }}
                      >
                        &larr; Back to Standards
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('agreement')}
                        className="btn-execute-agreement"
                        style={{ width: 'auto', padding: '12px 28px' }}
                      >
                        Review Service Agreement &amp; NDA &rarr;
                      </button>
                    </div>
                  </div>
                )}

                {/* TAB 4: Service Agreement & NDA */}
                {activeTab === 'agreement' && (
                  <div>
                    <div className="legal-doc-header">
                      <div className="legal-entity-heading">Section 4 &bull; Legal Covenants</div>
                      <h2 className="legal-doc-title">Board &amp; Participation Service Agreement</h2>
                      <p className="legal-meta-note">
                        Fiduciary statement, conflict of interest policy, and non-disclosure &amp; non-compete covenant (State of New York, Southern District).
                      </p>
                    </div>

                    <div style={{
                      background: 'rgba(10, 14, 23, 0.75)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '12px',
                      padding: '24px',
                      color: '#CBD5E1',
                      fontSize: '0.92rem',
                      lineHeight: 1.7,
                      maxHeight: '400px',
                      overflowY: 'auto',
                      marginBottom: '28px'
                    }}>
                      <p>
                        <strong>Fiduciary Responsibility:</strong> I understand that as a Board Director or Representative of 
                        <strong> New York Auto Museum 1125042 Ontario Limited</strong> or <strong>The New York Auto Experience Inc. 501(c)(3)</strong>, 
                        I have a legal and ethical responsibility to ensure that the work I do for the organization is the best work possible in pursuit of its goals. 
                        I believe in the purpose and mission of the organization, and I will act responsibly and prudently as its steward.
                      </p>
                      <p>
                        <strong>Conflict of Interest Policy:</strong> I certify that I have read and agree to comply with the Organization&apos;s Conflict of Interest Policy. 
                        Maintenance of charitable activities and federal tax exemption depends primarily on supporting charitable purposes without undisclosed commercial conflicts.
                      </p>
                      <p>
                        <strong>Non-Disclosure &amp; Non-Compete (NDA):</strong> In consideration of receiving proprietary plans, diagrams, and donor data, 
                        I agree to keep secret and retain in strictest confidence all Confidential Information. I agree not to participate directly or indirectly 
                        in any competing automotive museum project within 150 miles of New York City for a period of 5 years following the termination of talks.
                      </p>
                      <p>
                        <strong>Governing Law:</strong> Unless contractually stipulated otherwise, the laws of the State of New York, Southern District, shall apply.
                      </p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <button
                        type="button"
                        onClick={() => setActiveTab('tiers')}
                        className="btn-secondary-sm"
                        style={{ padding: '12px 24px' }}
                      >
                        &larr; Back to Tiers
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('sign')}
                        className="btn-execute-agreement"
                        style={{ width: 'auto', padding: '12px 28px' }}
                      >
                        Proceed to Electronic Signature &rarr;
                      </button>
                    </div>
                  </div>
                )}

                {/* TAB 5: E-Signature Portal */}
                {activeTab === 'sign' && (
                  <div>
                    <div className="legal-doc-header">
                      <div className="legal-entity-heading">Section 5 &bull; Execution Page</div>
                      <h2 className="legal-doc-title">Electronic Signature &amp; Execution</h2>
                      <p className="legal-meta-note">
                        Complete your signatory details below. This electronic signature is legally binding under the US E-SIGN Act.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                      {errorMessage && (
                        <div style={{
                          background: 'rgba(239, 68, 68, 0.15)',
                          border: '1px solid rgba(239, 68, 68, 0.4)',
                          color: '#F87171',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          marginBottom: '24px',
                          fontSize: '0.9rem'
                        }}>
                          ⚠️ {errorMessage}
                        </div>
                      )}

                      {/* Candidate Fields */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px', marginBottom: '24px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#CBD5E1', marginBottom: '6px' }}>
                            Full Legal Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Johnathan Vance, Esq."
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            style={{
                              width: '100%',
                              padding: '12px 16px',
                              background: '#0B111E',
                              border: '1px solid rgba(255, 255, 255, 0.15)',
                              borderRadius: '8px',
                              color: '#FFFFFF',
                              fontSize: '0.95rem',
                              boxSizing: 'border-box'
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#CBD5E1', marginBottom: '6px' }}>
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="e.g. jvance@firm.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                              width: '100%',
                              padding: '12px 16px',
                              background: '#0B111E',
                              border: '1px solid rgba(255, 255, 255, 0.15)',
                              borderRadius: '8px',
                              color: '#FFFFFF',
                              fontSize: '0.95rem',
                              boxSizing: 'border-box'
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#CBD5E1', marginBottom: '6px' }}>
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. (212) 555-0199"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            style={{
                              width: '100%',
                              padding: '12px 16px',
                              background: '#0B111E',
                              border: '1px solid rgba(255, 255, 255, 0.15)',
                              borderRadius: '8px',
                              color: '#FFFFFF',
                              fontSize: '0.95rem',
                              boxSizing: 'border-box'
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#CBD5E1', marginBottom: '6px' }}>
                            Company / Organization Name (Optional)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Vance &amp; Partners LLP"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            style={{
                              width: '100%',
                              padding: '12px 16px',
                              background: '#0B111E',
                              border: '1px solid rgba(255, 255, 255, 0.15)',
                              borderRadius: '8px',
                              color: '#FFFFFF',
                              fontSize: '0.95rem',
                              boxSizing: 'border-box'
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#CBD5E1', marginBottom: '6px' }}>
                            Professional Title / Position
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Senior Partner / Automotive Advisor"
                            value={titlePosition}
                            onChange={(e) => setTitlePosition(e.target.value)}
                            style={{
                              width: '100%',
                              padding: '12px 16px',
                              background: '#0B111E',
                              border: '1px solid rgba(255, 255, 255, 0.15)',
                              borderRadius: '8px',
                              color: '#FFFFFF',
                              fontSize: '0.95rem',
                              boxSizing: 'border-box'
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#CBD5E1', marginBottom: '6px' }}>
                            Mailing Address (For 501c3 Tax Receipt)
                          </label>
                          <input
                            type="text"
                            placeholder="Street Address, City, State, ZIP"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            style={{
                              width: '100%',
                              padding: '12px 16px',
                              background: '#0B111E',
                              border: '1px solid rgba(255, 255, 255, 0.15)',
                              borderRadius: '8px',
                              color: '#FFFFFF',
                              fontSize: '0.95rem',
                              boxSizing: 'border-box'
                            }}
                          />
                        </div>
                      </div>

                      {/* Conflict of Interest Disclosure Note */}
                      <div style={{ marginBottom: '28px' }}>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#CBD5E1', marginBottom: '6px' }}>
                          Conflict of Interest Disclosure (If none, leave as N/A)
                        </label>
                        <input
                          type="text"
                          value={conflictNote}
                          onChange={(e) => setConflictNote(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '10px 16px',
                            background: '#0B111E',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            borderRadius: '8px',
                            color: '#FFFFFF',
                            fontSize: '0.9rem',
                            boxSizing: 'border-box'
                          }}
                        />
                      </div>

                      {/* Digital Signature Pad Section */}
                      <div className="signature-section-wrapper">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
                          <div>
                            <h3 className="signature-section-title">Official Electronic Signature</h3>
                            <div className="signature-section-subtitle">
                              Board Member / Signatory Execution Block
                            </div>
                          </div>

                          <div style={{ display: 'inline-flex', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '3px' }}>
                            <button
                              type="button"
                              onClick={() => setSigMode('draw')}
                              className="btn-secondary-sm"
                              style={{
                                background: sigMode === 'draw' ? '#E11D48' : 'transparent',
                                border: 'none',
                                color: sigMode === 'draw' ? '#FFFFFF' : '#94A3B8'
                              }}
                            >
                              ✍️ Draw Signature
                            </button>
                            <button
                              type="button"
                              onClick={() => setSigMode('type')}
                              className="btn-secondary-sm"
                              style={{
                                background: sigMode === 'type' ? '#E11D48' : 'transparent',
                                border: 'none',
                                color: sigMode === 'type' ? '#FFFFFF' : '#94A3B8'
                              }}
                            >
                              ⌨️ Type Signature
                            </button>
                          </div>
                        </div>

                        {sigMode === 'draw' ? (
                          <>
                            <div className="signature-canvas-container">
                              <canvas
                                ref={canvasRef}
                                className="signature-canvas"
                                onMouseDown={startDrawing}
                                onMouseMove={draw}
                                onMouseUp={stopDrawing}
                                onMouseLeave={stopDrawing}
                                onTouchStart={startDrawing}
                                onTouchMove={draw}
                                onTouchEnd={stopDrawing}
                              />
                              {!hasDrawnSig && (
                                <div className="canvas-placeholder-text">
                                  Draw your signature here with mouse or finger
                                </div>
                              )}
                            </div>
                            <div className="signature-actions-row">
                              <span style={{ fontSize: '0.78rem', color: '#64748B' }}>
                                Interactive Canvas &bull; Touch &amp; Stylus Enabled
                              </span>
                              <button
                                type="button"
                                onClick={clearSignature}
                                className="btn-secondary-sm"
                              >
                                ↺ Clear Signature
                              </button>
                            </div>
                          </>
                        ) : (
                          <div style={{ marginBottom: '20px' }}>
                            <input
                              type="text"
                              placeholder="Type your full legal name to generate digital cursive signature..."
                              value={typedSig}
                              onChange={(e) => setTypedSig(e.target.value)}
                              style={{
                                width: '100%',
                                padding: '14px 18px',
                                background: '#0B111E',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                borderRadius: '8px',
                                color: '#FFFFFF',
                                fontSize: '1rem',
                                boxSizing: 'border-box',
                                marginBottom: '12px'
                              }}
                            />
                            {typedSig && (
                              <div style={{
                                background: '#070B12',
                                border: '1px solid rgba(225, 29, 72, 0.3)',
                                borderRadius: '8px',
                                padding: '18px 24px',
                                textAlign: 'center'
                              }}>
                                <span className="countersig-script" style={{ fontSize: '2.4rem' }}>
                                  {typedSig}
                                </span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Countersignature Preview */}
                        <div className="countersignature-box">
                          <div>
                            <div className="countersig-title">Countersigned on Behalf of the Corporation:</div>
                            <div className="countersig-name">David Senater</div>
                            <div className="countersig-role">
                              President / Treasurer &bull; New York Auto Experience Inc. (501c3) &amp; New York Auto Museum Inc.
                            </div>
                          </div>
                          <div className="countersig-script">
                            David Senater
                          </div>
                        </div>
                      </div>

                      {/* E-SIGN Compliance Checkbox */}
                      <div style={{ margin: '24px 0 28px 0', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <input
                          type="checkbox"
                          id="esignConsent"
                          required
                          checked={agreedToTerms}
                          onChange={(e) => setAgreedToTerms(e.target.checked)}
                          style={{ width: '18px', height: '18px', accentColor: '#E11D48', marginTop: '3px', cursor: 'pointer' }}
                        />
                        <label htmlFor="esignConsent" style={{ color: '#CBD5E1', fontSize: '0.88rem', lineHeight: 1.6, cursor: 'pointer' }}>
                          I agree that my electronic signature above is legally binding and equivalent to my handwritten signature under the 
                          <strong> United States Electronic Signatures in Global and National Commerce Act (E-SIGN Act, 15 U.S.C. § 7001)</strong>. 
                          I confirm that I have reviewed the 34 Governance Standards, Welcome Package, and Non-Disclosure Agreement.
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="btn-execute-agreement"
                        disabled={submitting}
                      >
                        {submitting ? 'Executing Official Agreement...' : 'Submit & Execute Board Agreement →'}
                      </button>
                    </form>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
