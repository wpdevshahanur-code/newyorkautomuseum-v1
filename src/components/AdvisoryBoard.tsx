'use client';

import { useState } from 'react';
import Image from 'next/image';
import advisorsData from '@/data/advisors.json';
import TextReveal from './TextReveal';

interface Member {
  name: string;
  position: string;
  bio: string;
  linkedin: string;
}

interface CategoryGroup {
  category: string;
  members: Member[];
}

function getInitials(name: string): string {
  const parts = name.replace(/^(Dr\.|Mr\.|Ms\.)\s+/i, '').trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return (parts[0] ? parts[0].slice(0, 2) : 'NY').toUpperCase();
}

interface AdvisoryBoardProps {
  initialCategories?: CategoryGroup[];
}

export default function AdvisoryBoard({ initialCategories }: AdvisoryBoardProps = {}) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'list'>('cards');
  const [expandedBioKey, setExpandedBioKey] = useState<string | null>(null);

  const categories = initialCategories && initialCategories.length > 0
    ? initialCategories
    : (advisorsData as CategoryGroup[]);

  const toggleBio = (uniqueKey: string) => {
    setExpandedBioKey((prev) => (prev === uniqueKey ? null : uniqueKey));
  };

  const displayedCategories =
    selectedCategory === 'all'
      ? categories
      : categories.filter((c) => c.category === selectedCategory);

  const totalMembers = categories.reduce((sum, c) => sum + c.members.length, 0);

  return (
    <section
      id="advisors"
      style={{
        padding: '80px 0 120px 0',
        backgroundColor: '#F8FAFC',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: '48px' }}>
          <span className="section-tag">Governance &amp; Leadership</span>
          <TextReveal as="h2" className="section-title" text="The Board &amp; Advisors" />
          <TextReveal
            as="p"
            className="section-subtitle"
            text="An extraordinary assembly of former automotive OEM executives, curatorial directors, legal scholars, cultural storytellers, and motorsports icons."
          />
        </div>

        {/* Controls Toolbar: Categories + View Switcher */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '48px',
          }}
        >
          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              justifyContent: 'center',
              maxWidth: '1100px',
            }}
          >
            <button
              onClick={() => setSelectedCategory('all')}
              style={{
                padding: '9px 18px',
                borderRadius: '9999px',
                border:
                  selectedCategory === 'all'
                    ? '1px solid #DC2626'
                    : '1px solid #CBD5E1',
                backgroundColor:
                  selectedCategory === 'all' ? '#DC2626' : '#FFFFFF',
                color: selectedCategory === 'all' ? '#FFFFFF' : '#1E293B',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
              }}
            >
              All Departments ({totalMembers})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(cat.category)}
                style={{
                  padding: '9px 18px',
                  borderRadius: '9999px',
                  border:
                    selectedCategory === cat.category
                      ? '1px solid #DC2626'
                      : '1px solid #CBD5E1',
                  backgroundColor:
                    selectedCategory === cat.category ? '#DC2626' : '#FFFFFF',
                  color: selectedCategory === cat.category ? '#FFFFFF' : '#1E293B',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
                }}
              >
                {cat.category} ({cat.members.length})
              </button>
            ))}
          </div>

          {/* View Mode Toggle: Wide Cards vs Executive Directory Rows */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              border: '1px solid #CBD5E1',
              borderRadius: '8px',
              padding: '4px',
              gap: '4px',
              boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
            }}
          >
            <button
              onClick={() => setViewMode('cards')}
              style={{
                padding: '6px 16px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: viewMode === 'cards' ? '#0F172A' : 'transparent',
                color: viewMode === 'cards' ? '#FFFFFF' : '#475569',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease',
              }}
            >
              <span>▦</span> Wide Editorial Cards
            </button>
            <button
              onClick={() => setViewMode('list')}
              style={{
                padding: '6px 16px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: viewMode === 'list' ? '#0F172A' : 'transparent',
                color: viewMode === 'list' ? '#FFFFFF' : '#475569',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease',
              }}
            >
              <span>☰</span> Executive Directory Rows
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* VIEW MODE 1: Wide Editorial Cards (Ample Title Width)     */}
        {/* ========================================================= */}
        {viewMode === 'cards' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            {displayedCategories.map((group) => (
              <div key={group.category}>
                {/* Department Accent Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '28px',
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
                  <TextReveal
                    as="h3"
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 900,
                      color: '#0F172A',
                      letterSpacing: '-0.02em',
                    }}
                    text={group.category}
                  />
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      backgroundColor: '#E2E8F0',
                      color: '#475569',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                    }}
                  >
                    {group.members.length} Members
                  </span>
                  <div style={{ flex: 1, height: '1px', backgroundColor: '#E2E8F0' }} />
                </div>

                {/* Wide Cards Grid (min 480px width so titles NEVER get squeezed) */}
                <div
                  className="advisory-cards-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))',
                    gap: '24px',
                    alignItems: 'start',
                  }}
                >
                  {group.members.map((member, idx) => {
                    const uniqueKey = `${group.category}-${member.name}-${idx}`;
                    const isExpanded = expandedBioKey === uniqueKey;
                    const hasLongBio = member.bio.length > 280;
                    const displayBio =
                      !hasLongBio || isExpanded
                        ? member.bio
                        : `${member.bio.slice(0, 280)}...`;

                    return (
                      <div
                        key={uniqueKey}
                        className="dept-overview-card"
                        style={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E2E8F0',
                          borderRadius: '16px',
                          boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
                          display: 'flex',
                          flexDirection: 'column',
                          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                        }}
                      >
                        <div>
                          {/* Top Row: Avatar + Name on Left, LinkedIn on Right */}
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: '16px',
                              marginBottom: '14px',
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                              <div
                                style={{
                                  width: '46px',
                                  height: '46px',
                                  borderRadius: '10px',
                                  background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                                  color: '#FFFFFF',
                                  fontWeight: 800,
                                  fontSize: '0.95rem',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                  boxShadow: '0 2px 6px rgba(15, 23, 42, 0.15)',
                                }}
                              >
                                {getInitials(member.name)}
                              </div>
                              <TextReveal
                                as="h4"
                                style={{
                                  fontSize: '1.35rem',
                                  fontWeight: 800,
                                  color: '#0F172A',
                                  lineHeight: 1.2,
                                  letterSpacing: '-0.02em',
                                }}
                                text={member.name}
                              />
                            </div>

                            {/* Verified LinkedIn Button */}
                            {member.linkedin && (
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${member.name} LinkedIn Profile`}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '6px',
                                  padding: '6px 12px',
                                  borderRadius: '6px',
                                  backgroundColor: '#0A66C2',
                                  color: '#FFFFFF',
                                  fontSize: '0.75rem',
                                  fontWeight: 700,
                                  textDecoration: 'none',
                                  flexShrink: 0,
                                  boxShadow: '0 2px 6px rgba(10, 102, 194, 0.25)',
                                  transition: 'all 0.2s ease',
                                }}
                              >
                                <Image
                                  src="/images/social-linkedin.svg"
                                  alt="LinkedIn"
                                  width={14}
                                  height={14}
                                  style={{ filter: 'brightness(0) invert(1)' }}
                                />
                                <span>LinkedIn</span>
                              </a>
                            )}
                          </div>

                          {/* Full-Width Role Badge (Has 100% of card width, never squeezed!) */}
                          <div style={{ marginBottom: '18px' }}>
                            <span
                              style={{
                                display: 'inline-block',
                                padding: '6px 14px',
                                borderRadius: '6px',
                                backgroundColor: 'rgba(220, 38, 38, 0.06)',
                                border: '1px solid rgba(220, 38, 38, 0.2)',
                                color: '#DC2626',
                                fontSize: '0.88rem',
                                fontWeight: 700,
                                letterSpacing: '0.01em',
                                lineHeight: 1.4,
                              }}
                            >
                              {member.position}
                            </span>
                          </div>

                          {/* Bio Content */}
                          {member.bio && (
                            <TextReveal
                              as="p"
                              style={{
                                fontSize: '0.95rem',
                                color: '#475569',
                                lineHeight: 1.75,
                                whiteSpace: 'pre-line',
                              }}
                              text={displayBio}
                            />
                          )}
                        </div>

                        {/* Read More Toggle */}
                        {hasLongBio && (
                          <div
                            style={{
                              marginTop: '18px',
                              paddingTop: '14px',
                              borderTop: '1px solid #F1F5F9',
                            }}
                          >
                            <button
                              onClick={() => toggleBio(uniqueKey)}
                              style={{
                                background: 'transparent',
                                border: 'none',
                                color: '#0284C7',
                                fontSize: '0.85rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                padding: 0,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                              }}
                            >
                              {isExpanded ? 'Show less ↑' : 'Read full biography ↓'}
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================= */}
        {/* VIEW MODE 2: Executive Directory Rows (Full-Width Rows)  */}
        {/* ========================================================= */}
        {viewMode === 'list' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {displayedCategories.map((group) => (
              <div key={group.category}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    marginBottom: '20px',
                  }}
                >
                  <div
                    style={{
                      width: '6px',
                      height: '28px',
                      backgroundColor: '#DC2626',
                      borderRadius: '3px',
                    }}
                  />
                  <TextReveal
                    as="h3"
                    style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A' }}
                    text={group.category}
                  />
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      backgroundColor: '#E2E8F0',
                      color: '#475569',
                      padding: '2px 10px',
                      borderRadius: '9999px',
                    }}
                  >
                    {group.members.length} Members
                  </span>
                  <div style={{ flex: 1, height: '1px', backgroundColor: '#E2E8F0' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {group.members.map((member, idx) => {
                    const uniqueKey = `list-${group.category}-${member.name}-${idx}`;
                    const isExpanded = expandedBioKey === uniqueKey;

                    return (
                      <div
                        key={uniqueKey}
                        className="leader-profile-card"
                        style={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E2E8F0',
                          borderRadius: '12px',
                          boxShadow: '0 2px 10px rgba(15, 23, 42, 0.03)',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '16px',
                          }}
                        >
                          {/* Name & Title on a Wide Line */}
                          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
                            <div
                              style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '8px',
                                background: '#0F172A',
                                color: '#FFFFFF',
                                fontWeight: 800,
                                fontSize: '0.85rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                              }}
                            >
                              {getInitials(member.name)}
                            </div>
                            <div>
                              <TextReveal
                                as="h4"
                                style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A' }}
                                text={member.name}
                              />
                            </div>
                            <span
                              style={{
                                padding: '4px 12px',
                                borderRadius: '6px',
                                backgroundColor: 'rgba(220, 38, 38, 0.06)',
                                border: '1px solid rgba(220, 38, 38, 0.2)',
                                color: '#DC2626',
                                fontSize: '0.85rem',
                                fontWeight: 700,
                              }}
                            >
                              {member.position}
                            </span>
                          </div>

                          {/* Actions: LinkedIn & Expand Bio */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            {member.bio && (
                              <button
                                onClick={() => toggleBio(uniqueKey)}
                                style={{
                                  background: 'transparent',
                                  border: '1px solid #CBD5E1',
                                  borderRadius: '6px',
                                  padding: '6px 14px',
                                  color: '#0284C7',
                                  fontSize: '0.8rem',
                                  fontWeight: 700,
                                  cursor: 'pointer',
                                }}
                              >
                                {isExpanded ? 'Hide Bio ↑' : 'View Bio ↓'}
                              </button>
                            )}

                            {member.linkedin && (
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '6px',
                                  padding: '6px 12px',
                                  borderRadius: '6px',
                                  backgroundColor: '#0A66C2',
                                  color: '#FFFFFF',
                                  fontSize: '0.75rem',
                                  fontWeight: 700,
                                  textDecoration: 'none',
                                }}
                              >
                                <Image
                                  src="/images/social-linkedin.svg"
                                  alt="LinkedIn"
                                  width={14}
                                  height={14}
                                  style={{ filter: 'brightness(0) invert(1)' }}
                                />
                                <span>LinkedIn</span>
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Expanded Bio Drawer in Row View */}
                        {isExpanded && member.bio && (
                          <div
                            style={{
                              marginTop: '16px',
                              paddingTop: '16px',
                              borderTop: '1px solid #F1F5F9',
                              color: '#475569',
                              fontSize: '0.94rem',
                              lineHeight: 1.75,
                              whiteSpace: 'pre-line',
                            }}
                          >
                            {member.bio}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
