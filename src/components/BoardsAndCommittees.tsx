'use client';

import { useState, useEffect } from 'react';
import boardsData from '@/data/boards.json';
import TextReveal from './TextReveal';

interface CommitteeItem {
  title: string;
  description: string;
}

export default function BoardsAndCommittees() {
  const [activeModalWing, setActiveModalWing] = useState<{
    wing: CommitteeItem;
    idx: number;
  } | null>(null);
  const [openDonationIdx, setOpenDonationIdx] = useState<number | null>(null);

  const wings: CommitteeItem[] = boardsData.wingDevelopmentCommittees;
  const donations: CommitteeItem[] = boardsData.donationCommittees;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalWing(null);
      }
    };

    if (activeModalWing) {
      const originalBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activeModalWing]);

  const toggleDonation = (idx: number) => {
    setOpenDonationIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="boards"
      className="committees-section"
      style={{
        padding: '110px 0',
        backgroundColor: 'transparent',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <span className="section-tag">Governance &amp; Oversight</span>
          <TextReveal as="h2" className="section-title" text="Boards &amp; Committees" />
          <TextReveal
            as="p"
            className="section-subtitle"
            text="Curatorial development working groups and tax-deductible committee leadership opportunities guiding the New York City landmark."
          />
        </div>

        {/* ============================================================ */}
        {/* SECTION A: Museum Wing Development Committees (Grid Cards) */}
        {/* ============================================================ */}
        <div style={{ marginBottom: '80px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '32px',
            }}
          >
            <div
              style={{
                width: '6px',
                height: '32px',
                backgroundColor: '#E11D48',
                borderRadius: '3px',
              }}
            />
            <div>
              <TextReveal
                as="h3"
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em',
                }}
                text="Museum Wing Development Committees"
              />
              <TextReveal
                as="p"
                style={{ fontSize: '0.9rem', color: '#94A3B8', marginTop: '2px' }}
                text="Curatorial and technical advisory committees for the permanent exhibition wings"
              />
            </div>
          </div>

          {/* 12 Wings Interactive Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '20px',
            }}
          >
            {wings.map((item, idx) => (
              <div
                key={idx}
                className="committee-stat-card"
                onClick={() => setActiveModalWing({ wing: item, idx })}
                style={{
                  backgroundColor: 'rgba(18, 24, 36, 0.88)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '14px',
                  boxShadow: '0 12px 36px rgba(0, 0, 0, 0.45)',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  padding: '24px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(225, 29, 72, 0.8)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(225, 29, 72, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 12px 36px rgba(0, 0, 0, 0.45)';
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '14px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        color: '#E11D48',
                        backgroundColor: 'rgba(225, 29, 72, 0.12)',
                        border: '1px solid rgba(225, 29, 72, 0.25)',
                        padding: '3px 10px',
                        borderRadius: '9999px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}
                    >
                      Wing {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <TextReveal
                    as="h4"
                    style={{
                      fontSize: '1.22rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      lineHeight: 1.35,
                      marginBottom: '8px',
                    }}
                    text={item.title}
                  />
                </div>

                <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <button
                    type="button"
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#3B82F6',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      padding: 0,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    Explore Wing Scope &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION B: Committees (Suggested Tax-Deductible Donations) */}
        {/* ============================================================ */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '32px',
            }}
          >
            <div
              style={{
                width: '6px',
                height: '32px',
                backgroundColor: '#D97706',
                borderRadius: '3px',
              }}
            />
            <div>
              <TextReveal
                as="h3"
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em',
                }}
                text="Committees (Suggested Tax-Deductible Donations)"
              />
              <TextReveal
                as="p"
                style={{ fontSize: '0.9rem', color: '#94A3B8', marginTop: '2px' }}
                text="Fiduciary, governance, and specialized steering committees supported through tax-deductible donor tiers"
              />
            </div>
          </div>

          {/* 32 Donation Committees Registry */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {donations.map((item, idx) => {
              const isOpen = openDonationIdx === idx;
              
              // Strip any price amount from committee title
              const cleanTitleName = item.title.replace(/[—–-]?\s*\$[\d,]+/, '').trim();

              return (
                <div
                  key={idx}
                  className="donation-committee-row"
                  style={{
                    backgroundColor: isOpen ? 'rgba(25, 34, 51, 0.95)' : 'rgba(18, 24, 36, 0.88)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: isOpen ? '1px solid #D97706' : '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                    boxShadow: isOpen
                      ? '0 8px 24px rgba(217, 119, 6, 0.15)'
                      : '0 8px 24px rgba(0, 0, 0, 0.35)',
                  }}
                >
                  <button
                    onClick={() => toggleDonation(idx)}
                    style={{
                      width: '100%',
                      padding: '18px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <span
                        style={{
                          fontSize: '0.85rem',
                          fontWeight: 800,
                          color: '#64748B',
                          minWidth: '28px',
                        }}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span
                        style={{
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          color: '#FFFFFF',
                        }}
                      >
                        {cleanTitleName}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
                      <span
                        style={{
                          color: isOpen ? '#F59E0B' : '#94A3B8',
                          fontSize: '0.85rem',
                          transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                          display: 'inline-block',
                        }}
                      >
                        ▶
                      </span>
                    </div>
                  </button>

                  {isOpen && item.description && (
                    <div
                      className="committee-accordion-body"
                      style={{
                        color: '#94A3B8',
                        fontSize: '0.94rem',
                        lineHeight: 1.75,
                        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '16px 24px',
                      }}
                    >
                      {item.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* SECTION C: Wing Scope Modal (Popup) */}
      {/* ============================================================ */}
      {activeModalWing && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveModalWing(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.82)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            padding: '20px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#0F172A',
              backgroundImage: 'linear-gradient(to bottom, #1E293B, #0F172A)',
              border: '1px solid rgba(225, 29, 72, 0.4)',
              borderRadius: '16px',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '85vh',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(225, 29, 72, 0.25)',
              overflow: 'hidden',
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '24px 28px 18px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '16px',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: '#E11D48',
                      backgroundColor: 'rgba(225, 29, 72, 0.15)',
                      border: '1px solid rgba(225, 29, 72, 0.3)',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    Wing {String(activeModalWing.idx + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>
                    Museum Wing Development Scope
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    color: '#FFFFFF',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.25,
                    margin: 0,
                  }}
                >
                  {activeModalWing.wing.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveModalWing(null)}
                aria-label="Close modal"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(225, 29, 72, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div
              style={{
                padding: '24px 28px',
                overflowY: 'auto',
                color: '#CBD5E1',
                fontSize: '0.98rem',
                lineHeight: 1.8,
              }}
            >
              <p style={{ margin: 0, whiteSpace: 'pre-line' }}>
                {activeModalWing.wing.description}
              </p>
            </div>

            {/* Modal Footer */}
            <div
              style={{
                padding: '16px 28px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '0.8rem', color: '#64748B' }}>
                New York Auto Museum Curatorial Committee
              </span>
              <button
                onClick={() => setActiveModalWing(null)}
                style={{
                  padding: '8px 24px',
                  borderRadius: '8px',
                  backgroundColor: '#E11D48',
                  color: '#FFFFFF',
                  border: 'none',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#BE123C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#E11D48';
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
