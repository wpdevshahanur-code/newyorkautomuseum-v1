'use client';

import { useState } from 'react';
import boardsData from '@/data/boards.json';
import TextReveal from './TextReveal';

interface CommitteeItem {
  title: string;
  description: string;
}

export default function BoardsAndCommittees() {
  const [openWingIdx, setOpenWingIdx] = useState<number | null>(null);
  const [openDonationIdx, setOpenDonationIdx] = useState<number | null>(null);

  const wings: CommitteeItem[] = boardsData.wingDevelopmentCommittees;
  const donations: CommitteeItem[] = boardsData.donationCommittees;

  const toggleWing = (idx: number) => {
    setOpenWingIdx((prev) => (prev === idx ? null : idx));
  };

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
            text="Curatorial development working groups and tax-deductible committee leadership opportunities guiding the Manhattan landmark."
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
            {wings.map((item, idx) => {
              const isOpen = openWingIdx === idx;
              return (
                <div
                  key={idx}
                  className="committee-stat-card"
                  style={{
                    backgroundColor: isOpen ? 'rgba(25, 34, 51, 0.95)' : 'rgba(18, 24, 36, 0.88)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: isOpen ? '1px solid #E11D48' : '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '14px',
                    boxShadow: isOpen
                      ? '0 12px 32px rgba(225, 29, 72, 0.2)'
                      : '0 12px 36px rgba(0, 0, 0, 0.45)',
                    transition: 'all 0.25s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '12px',
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
                        fontSize: '1.2rem',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        lineHeight: 1.3,
                        marginBottom: '12px',
                      }}
                      text={item.title}
                    />

                    {isOpen && item.description && (
                      <TextReveal
                        as="p"
                        style={{
                          fontSize: '0.94rem',
                          color: '#94A3B8',
                          lineHeight: 1.7,
                          marginTop: '12px',
                          paddingTop: '12px',
                          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                        text={item.description}
                      />
                    )}
                  </div>

                  <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <button
                      onClick={() => toggleWing(idx)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: isOpen ? '#E11D48' : '#3B82F6',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      {isOpen ? 'Close Scope ↑' : 'Explore Wing Scope →'}
                    </button>
                  </div>
                </div>
              );
            })}
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
              
              // Extract donation amount from title (e.g. "$5,000", "$1,500")
              const priceMatch = item.title.match(/(\$[\d,]+)/);
              const price = priceMatch ? priceMatch[1] : '';
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
                      {price && (
                        <span
                          style={{
                            fontSize: '0.85rem',
                            fontWeight: 800,
                            backgroundColor: 'rgba(217, 119, 6, 0.15)',
                            color: '#F59E0B',
                            padding: '4px 12px',
                            borderRadius: '9999px',
                            border: '1px solid rgba(217, 119, 6, 0.3)',
                          }}
                        >
                          {price} Tier
                        </span>
                      )}
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
    </section>
  );
}
