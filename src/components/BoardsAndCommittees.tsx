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
                backgroundColor: '#DC2626',
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
                style={{ fontSize: '0.9rem', color: '#CBD5E1', marginTop: '2px' }}
                text="Curatorial and technical advisory committees for the permanent exhibition wings"
              />
            </div>
          </div>

          {/* 11 Wings Interactive Cards Grid */}
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
                    backgroundColor: isOpen ? '#FFFFFF' : '#F8FAFC',
                    border: isOpen ? '1px solid #DC2626' : '1px solid #E2E8F0',
                    borderRadius: '14px',
                    boxShadow: isOpen
                      ? '0 10px 30px rgba(220, 38, 38, 0.08)'
                      : '0 2px 10px rgba(15, 23, 42, 0.03)',
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
                          color: '#DC2626',
                          backgroundColor: 'rgba(220, 38, 38, 0.08)',
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
                        color: '#0F172A',
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
                          color: '#475569',
                          lineHeight: 1.7,
                          marginTop: '12px',
                          paddingTop: '12px',
                          borderTop: '1px solid #F1F5F9',
                        }}
                        text={item.description}
                      />
                    )}
                  </div>

                  <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #E2E8F0' }}>
                    <button
                      onClick={() => toggleWing(idx)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: isOpen ? '#DC2626' : '#0284C7',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      {isOpen ? 'Close Scope ↑' : 'Explore Wing Scope &rarr;'}
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
                style={{ fontSize: '0.9rem', color: '#CBD5E1', marginTop: '2px' }}
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
                  style={{
                    backgroundColor: isOpen ? '#FFFFFF' : '#F8FAFC',
                    border: isOpen ? '1px solid #D97706' : '1px solid #E2E8F0',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                    boxShadow: isOpen
                      ? '0 8px 24px rgba(217, 119, 6, 0.08)'
                      : 'none',
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
                          color: '#0F172A',
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
                            backgroundColor: 'rgba(217, 119, 6, 0.1)',
                            color: '#D97706',
                            padding: '4px 12px',
                            borderRadius: '9999px',
                            border: '1px solid rgba(217, 119, 6, 0.25)',
                          }}
                        >
                          {price} Tier
                        </span>
                      )}
                      <span
                        style={{
                          color: isOpen ? '#D97706' : '#94A3B8',
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
                        color: '#475569',
                        fontSize: '0.94rem',
                        lineHeight: 1.75,
                        borderTop: '1px solid #F1F5F9',
                        paddingTop: '14px',
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
