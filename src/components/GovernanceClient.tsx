'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';

interface LegalDoc {
  id: string;
  title: string;
  category: string;
  jurisdiction: string;
  fileDate: string;
  idNumber: string;
  badgeLabel: string;
  summary: string;
  imageSrc: string;
  pdfSrc: string;
  keyDetails: { label: string; value: string }[];
}

const GOVERNANCE_DOCS: LegalDoc[] = [
  {
    id: 'nys-status',
    title: 'NYS Certificate of Status',
    category: 'State Registration',
    jurisdiction: 'State of New York Department of State',
    fileDate: 'Certified April 08, 2025',
    idNumber: 'DOS ID: 6741276',
    badgeLabel: 'Active & Existing',
    summary: 'Official Certificate of Status issued by Walter T. Mosley, Secretary of State, verifying New York Auto Experience, Inc. is an existing Domestic Not-For-Profit Corporation in good standing.',
    imageSrc: '/governance/nys-certificate-of-status.jpg',
    pdfSrc: '/governance/nys-certificate-of-status.pdf',
    keyDetails: [
      { label: 'Corporate Entity', value: 'NEW YORK AUTO EXPERIENCE, INC.' },
      { label: 'Entity Status', value: 'EXISTING (Good Standing)' },
      { label: 'Entity Type', value: 'Domestic Not-For-Profit Corporation' },
      { label: 'DOS ID Number', value: '6741276' },
      { label: 'Initial Filing Date', value: 'February 24, 2023' },
      { label: 'Authentication No.', value: '100007812489' },
    ],
  },
  {
    id: 'nys-filing-receipt',
    title: 'NYS Certificate of Incorporation (Filing Receipt)',
    category: 'Corporate Formation',
    jurisdiction: 'NYS Division of Corporations & State Records',
    fileDate: 'Filed February 24, 2023',
    idNumber: 'File No: 230224001721',
    badgeLabel: 'Charter Filing Receipt',
    summary: 'Official state filing receipt confirming incorporation under Section 402 of the New York Not-For-Profit Corporation Law, designated with perpetual corporate duration.',
    imageSrc: '/governance/nys-filing-receipt.jpg',
    pdfSrc: '/governance/nys-filing-receipt.pdf',
    keyDetails: [
      { label: 'Document Type', value: 'Certificate of Incorporation' },
      { label: 'File Date', value: 'February 24, 2023' },
      { label: 'Transaction Number', value: '20230224000179-1731058' },
      { label: 'Duration / Dissolution', value: 'PERPETUAL' },
      { label: 'County Jurisdiction', value: 'Erie County, NY' },
      { label: 'Legal Filer', value: 'Lippes Mathias LLP, New York City Office' },
    ],
  },
  {
    id: 'nys-certified-copy',
    title: 'NYS Department of State Certified Copy',
    category: 'State Attestation',
    jurisdiction: 'Secretary of State, Albany, NY',
    fileDate: 'Executed February 24, 2023',
    idNumber: 'Authentication: 100003026579',
    badgeLabel: 'Official Great Seal',
    summary: 'Official attestation under the Great Seal of the State of New York certifying that corporate documents on file are true and exact copies of original records in custody.',
    imageSrc: '/governance/nys-certified-copy.jpg',
    pdfSrc: '/governance/nys-certified-copy.pdf',
    keyDetails: [
      { label: 'Attesting Official', value: 'Brendan C. Hughes, Exec. Deputy Sec. of State' },
      { label: 'Official Seal', value: 'State of New York Department of State' },
      { label: 'File Record No.', value: '230224001721' },
      { label: 'Authentication No.', value: '100003026579' },
      { label: 'Verification Portal', value: 'http://ecorp.dos.ny.gov' },
      { label: 'Legal Standing', value: 'Official Certified Public Record' },
    ],
  },
  {
    id: 'irs-501c3',
    title: 'IRS 501(c)(3) Federal Determination Letter',
    category: 'Federal Tax Exemption',
    jurisdiction: 'Department of the Treasury • Internal Revenue Service',
    fileDate: 'Issued March 22, 2023',
    idNumber: 'EIN: 92-2822778',
    badgeLabel: 'Tax-Exempt Public Charity',
    summary: 'Official Letter 947 determination by the Internal Revenue Service recognizing New York Auto Experience Inc. as exempt from federal income tax under IRC Section 501(c)(3) and classified as a 509(a)(2) public charity.',
    imageSrc: '/governance/irs-501c3-determination-letter.jpg',
    pdfSrc: '/governance/irs-501c3-determination-letter.pdf',
    keyDetails: [
      { label: 'Exempt Status', value: 'IRC Section 501(c)(3)' },
      { label: 'Public Charity Status', value: '509(a)(2) Public Charity' },
      { label: 'Federal EIN', value: '92-2822778' },
      { label: 'Contribution Deductibility', value: 'Tax-Deductible (IRC Sec. 170)' },
      { label: 'Effective Exemption Date', value: 'February 24, 2023' },
      { label: 'IRS Letter Reference', value: 'Letter 947 (Rev. 2-2020)' },
    ],
  },
];

export default function GovernanceClient() {
  const [selectedDoc, setSelectedDoc] = useState<LegalDoc | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedDoc(null);
    };
    if (selectedDoc) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedDoc]);

  return (
    <div style={{ background: 'transparent', color: '#FFFFFF', minHeight: '100vh', position: 'relative' }}>
      {/* 1. Hero Section */}
      <section style={{ backgroundColor: 'rgba(11, 14, 20, 0.50)', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', padding: '70px 0 80px', position: 'relative' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 28px', width: '100%' }}>
          <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#E11D48', backgroundColor: 'rgba(225, 29, 72, 0.10)', padding: '6px 16px', borderRadius: '9999px', border: '1px solid rgba(225, 29, 72, 0.25)', marginBottom: '20px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#E11D48' }}></span>
              Institutional Governance &bull; 501(c)(3) Public Transparency
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#FFFFFF', marginBottom: '20px' }}>
              Institutional <span style={{ color: '#E11D48' }}>Governance</span> &amp; Official Filings
            </h1>

            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#94A3B8', marginBottom: '32px' }}>
              The New York Auto Museum and The New York Auto Experience Inc. operate with complete public accountability under our New York State Domestic Not-For-Profit corporate charter and United States Internal Revenue Service 501(c)(3) tax-exempt status.
            </p>

            {/* Quick Fiduciary Badges */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', textAlign: 'left' }}>
              <div style={{ backgroundColor: 'rgba(18, 24, 36, 0.85)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.14)', borderRadius: '8px', padding: '14px 18px' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#94A3B8', letterSpacing: '0.05em' }}>New York State</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginTop: '4px' }}>DOS ID: 6741276</div>
                <div style={{ fontSize: '0.75rem', color: '#E11D48', marginTop: '2px', fontWeight: 600 }}>● Active &amp; Existing</div>
              </div>

              <div style={{ backgroundColor: 'rgba(18, 24, 36, 0.85)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.14)', borderRadius: '8px', padding: '14px 18px' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#94A3B8', letterSpacing: '0.05em' }}>Federal Tax Status</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginTop: '4px' }}>EIN: 92-2822778</div>
                <div style={{ fontSize: '0.75rem', color: '#E11D48', marginTop: '2px', fontWeight: 600 }}>● 501(c)(3) Public Charity</div>
              </div>

              <div style={{ backgroundColor: 'rgba(18, 24, 36, 0.85)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.14)', borderRadius: '8px', padding: '14px 18px' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#94A3B8', letterSpacing: '0.05em' }}>Contributions</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginTop: '4px' }}>Tax-Deductible</div>
                <div style={{ fontSize: '0.75rem', color: '#E11D48', marginTop: '2px', fontWeight: 600 }}>● IRC Section 170</div>
              </div>

              <div style={{ backgroundColor: 'rgba(18, 24, 36, 0.85)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.14)', borderRadius: '8px', padding: '14px 18px' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#94A3B8', letterSpacing: '0.05em' }}>Corporate Legal Counsel</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', marginTop: '4px' }}>Lippes Mathias LLP</div>
                <div style={{ fontSize: '0.75rem', color: '#E11D48', marginTop: '2px', fontWeight: 600 }}>● New York City Practice</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Official Documents Grid */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', backgroundColor: 'transparent', position: 'relative' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 28px', width: '100%' }}>
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 50px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#E11D48' }}>
              Accreditation &bull; Public Record
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFFFFF', marginTop: '10px', marginBottom: '14px' }}>
              State &amp; Federal Registration Documents
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.6 }}>
              In accordance with our commitment to donor transparency and open governance, our full Certificate of Status, Incorporation Receipt, Certified Copy, and IRS 501(c)(3) determination letter are available for direct review and download below.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(520px, 1fr))', gap: '30px' }}>
            {GOVERNANCE_DOCS.map((doc) => (
              <div
                key={doc.id}
                style={{
                  backgroundColor: 'rgba(18, 24, 36, 0.85)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)',
                }}
              >
                {/* Header Strip */}
                <div style={{ padding: '24px 28px', borderBottom: '1px solid rgba(255, 255, 255, 0.10)' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94A3B8' }}>
                    {doc.jurisdiction}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#FFFFFF', marginTop: '6px' }}>
                    {doc.title}
                  </h3>
                </div>

                {/* Body Content */}
                <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', flex: 1, gap: '20px' }}>
                  {/* Preview Thumbnail */}
                  <div
                    onClick={() => setSelectedDoc(doc)}
                    style={{
                      position: 'relative',
                      height: '240px',
                      backgroundColor: '#0F172A',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <Image
                      src={doc.imageSrc}
                      alt={doc.title}
                      fill
                      style={{ objectFit: 'contain', padding: '12px' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(8, 10, 15, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        color: '#FFFFFF',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        transition: 'opacity 0.2s ease',
                      }}
                    >
                      <span style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', padding: '8px 16px', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                        🔍 Click to View Full Screen
                      </span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.92rem', color: '#94A3B8', lineHeight: 1.55 }}>
                    {doc.summary}
                  </p>

                  {/* Metadata Table */}
                  <div style={{ backgroundColor: 'rgba(11, 14, 20, 0.60)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)', overflow: 'hidden' }}>
                    {doc.keyDetails.map((detail, idx) => (
                      <div
                        key={detail.label}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          padding: '10px 14px',
                          fontSize: '0.82rem',
                          borderBottom: idx < doc.keyDetails.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                        }}
                      >
                        <span style={{ color: '#64748B' }}>{detail.label}</span>
                        <span style={{ color: '#E2E8F0', fontWeight: 600, textAlign: 'right' }}>{detail.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '12px', marginTop: 'auto', paddingTop: '10px' }}>
                    <button
                      type="button"
                      onClick={() => setSelectedDoc(doc)}
                      style={{
                        flex: 1,
                        padding: '12px 18px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        backgroundColor: 'rgba(25, 34, 51, 0.95)',
                        color: '#FFFFFF',
                        border: '1px solid rgba(255, 255, 255, 0.20)',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                      }}
                    >
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View Document
                    </button>

                    <a
                      href={doc.pdfSrc}
                      download={`${doc.id}.pdf`}
                      style={{
                        flex: 1,
                        padding: '12px 18px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        backgroundColor: '#E11D48',
                        color: '#FFFFFF',
                        border: '1px solid #E11D48',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                      }}
                    >
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Verification & Authenticity Notice */}
      <section style={{ padding: '60px 0', backgroundColor: 'rgba(11, 14, 20, 0.40)', borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 28px', width: '100%' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto', backgroundColor: 'rgba(18, 24, 36, 0.85)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.14)', borderRadius: '12px', padding: '36px 40px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'rgba(225, 29, 72, 0.15)', border: '1px solid rgba(225, 29, 72, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: '280px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                  Independent Government &amp; Public Verification
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  Donors, institutional grantors, and public partners can independently verify our active charter directly with official New York State and United States Federal regulatory authorities:
                </p>
                <ul style={{ color: '#CBD5E1', fontSize: '0.9rem', lineHeight: 1.7, paddingLeft: '20px' }}>
                  <li>
                    <strong>New York State Department of State:</strong> Access the Division of Corporations portal at <a href="http://ecorp.dos.ny.gov" target="_blank" rel="noopener noreferrer" style={{ color: '#E11D48', textDecoration: 'underline', fontWeight: 600 }}>ecorp.dos.ny.gov</a> to verify Authentication Numbers <strong>100007812489</strong> and <strong>100003026579</strong>.
                  </li>
                  <li>
                    <strong>IRS Tax-Exempt Organization Search (TEOS):</strong> Verify our active 501(c)(3) tax-exempt status using Employer Identification Number (EIN) <strong>92-2822778</strong>.
                  </li>
                  <li>
                    <strong>Attorney General Charities Bureau:</strong> In active compliance with New York Executive Law Article 7-A regulations governing public charitable fundraising.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* 5. Document Lightbox Modal with React Portal (above header) */}
      {mounted && selectedDoc && createPortal(
        <div
          onClick={() => setSelectedDoc(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            zIndex: 9999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            boxSizing: 'border-box',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#0F172A',
              border: '1px solid rgba(255, 255, 255, 0.20)',
              borderRadius: '14px',
              maxWidth: '920px',
              width: '100%',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9)',
              position: 'relative',
              zIndex: 10,
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '16px 24px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(18, 24, 36, 0.95)',
              }}
            >
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>{selectedDoc.title}</h4>
                <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>{selectedDoc.jurisdiction} &bull; {selectedDoc.idNumber}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <a
                  href={selectedDoc.pdfSrc}
                  download={`${selectedDoc.id}.pdf`}
                  style={{
                    backgroundColor: '#E11D48',
                    color: '#FFFFFF',
                    padding: '8px 14px',
                    borderRadius: '6px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedDoc(null)}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.10)',
                    border: 'none',
                    color: '#FFFFFF',
                    width: '32px',
                    height: '32px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  &times;
                </button>
              </div>
            </div>

            {/* Modal Image View */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '20px', backgroundColor: '#080A0F', textAlign: 'center' }}>
              <div style={{ position: 'relative', width: '100%', minHeight: '750px' }}>
                <Image
                  src={selectedDoc.imageSrc}
                  alt={selectedDoc.title}
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
