'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import advisorsData from '@/data/advisors';
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
  const [activeModalMember, setActiveModalMember] = useState<{
    member: Member;
    category: string;
  } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalMember(null);
      }
    };

    if (activeModalMember) {
      const scrollY = window.scrollY;
      const originalBodyOverflow = document.body.style.overflow;
      const originalBodyPosition = document.body.style.position;
      const originalBodyTop = document.body.style.top;
      const originalBodyWidth = document.body.style.width;
      const originalHtmlOverflow = document.documentElement.style.overflow;

      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.overflow = originalBodyOverflow;
        document.body.style.position = originalBodyPosition;
        document.body.style.top = originalBodyTop;
        document.body.style.width = originalBodyWidth;
        window.scrollTo(0, scrollY);
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activeModalMember]);

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
        backgroundColor: 'transparent',
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
                    ? '1px solid #E11D48'
                    : '1px solid rgba(255, 255, 255, 0.12)',
                backgroundColor:
                  selectedCategory === 'all' ? '#E11D48' : 'rgba(18, 24, 36, 0.88)',
                color: selectedCategory === 'all' ? '#FFFFFF' : '#94A3B8',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
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
                      ? '1px solid #E11D48'
                      : '1px solid rgba(255, 255, 255, 0.12)',
                  backgroundColor:
                    selectedCategory === cat.category ? '#E11D48' : 'rgba(18, 24, 36, 0.88)',
                  color: selectedCategory === cat.category ? '#FFFFFF' : '#94A3B8',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                }}
              >
                {cat.category} ({cat.members.length})
              </button>
            ))}
          </div>

          {/* View Mode Toggle: Wide Cards vs Executive Directory Rows */}
          <div
            className="view-mode-toggle"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'rgba(18, 24, 36, 0.88)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              padding: '4px',
              gap: '4px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
              boxSizing: 'border-box',
              maxWidth: '100%',
            }}
          >
            <button
              onClick={() => setViewMode('cards')}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: viewMode === 'cards' ? 'rgba(255, 255, 255, 0.14)' : 'transparent',
                color: viewMode === 'cards' ? '#FFFFFF' : '#94A3B8',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                transition: 'all 0.2s ease',
                flex: 1,
                whiteSpace: 'nowrap',
              }}
            >
              <span>▦</span>
              <span className="toggle-text-full">Wide Editorial Cards</span>
              <span className="toggle-text-short">Cards</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: viewMode === 'list' ? 'rgba(255, 255, 255, 0.14)' : 'transparent',
                color: viewMode === 'list' ? '#FFFFFF' : '#94A3B8',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                transition: 'all 0.2s ease',
                flex: 1,
                whiteSpace: 'nowrap',
              }}
            >
              <span>☰</span>
              <span className="toggle-text-full">Executive Directory Rows</span>
              <span className="toggle-text-short">Directory</span>
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
                    justifyContent: 'space-between',
                    gap: '12px',
                    marginBottom: '28px',
                    flexWrap: 'wrap',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        width: '6px',
                        height: '28px',
                        backgroundColor: '#E11D48',
                        borderRadius: '3px',
                        flexShrink: 0,
                      }}
                    />
                    <TextReveal
                      as="h3"
                      style={{
                        fontSize: '1.35rem',
                        fontWeight: 900,
                        color: '#FFFFFF',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.25,
                        wordBreak: 'break-word',
                      }}
                      text={group.category}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      backgroundColor: 'rgba(255, 255, 255, 0.14)',
                      color: '#FFFFFF',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      display: 'inline-flex',
                      alignItems: 'center',
                      lineHeight: 1,
                    }}
                  >
                    {group.members.length} Members
                  </span>
                </div>

                {/* Wide Cards Grid */}
                <div
                  className="advisory-cards-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))',
                    gap: '24px',
                    alignItems: 'stretch',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  {group.members.map((member, idx) => {
                    const uniqueKey = `${group.category}-${member.name}-${idx}`;
                    const hasLongBio = member.bio.length > 240;
                    const previewBio = hasLongBio
                      ? `${member.bio.slice(0, 240).trim()}...`
                      : member.bio;

                    return (
                      <div
                        key={uniqueKey}
                        className="dept-overview-card"
                        style={{
                          backgroundColor: 'rgba(18, 24, 36, 0.88)',
                          backdropFilter: 'blur(12px)',
                          WebkitBackdropFilter: 'blur(12px)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          borderRadius: '16px',
                          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.45)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          height: '100%',
                          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                          {/* Top Row: Avatar + Name on Left, LinkedIn on Right */}
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              justifyContent: 'space-between',
                              gap: '12px',
                              marginBottom: '14px',
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0, flex: 1 }}>
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
                                  fontSize: '1.25rem',
                                  fontWeight: 800,
                                  color: '#FFFFFF',
                                  lineHeight: 1.25,
                                  letterSpacing: '-0.02em',
                                  minWidth: 0,
                                  wordBreak: 'break-word',
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

                          {/* Role Badge (Full width on mobile for consistent, uniform look) */}
                          {member.position && member.position.trim() && (
                            <div style={{ marginBottom: '18px', width: '100%' }}>
                              <span
                                className="advisor-role-badge"
                                style={{
                                  padding: '6px 14px',
                                  borderRadius: '6px',
                                  backgroundColor: 'rgba(225, 29, 72, 0.08)',
                                  border: '1px solid rgba(225, 29, 72, 0.22)',
                                  color: '#E11D48',
                                  fontSize: '0.88rem',
                                  fontWeight: 700,
                                  letterSpacing: '0.01em',
                                  lineHeight: 1.4,
                                }}
                              >
                                {member.position}
                              </span>
                            </div>
                          )}

                          {/* Bio Content */}
                          {member.bio && (
                            <TextReveal
                              as="p"
                              style={{
                                fontSize: '0.95rem',
                                color: '#94A3B8',
                                lineHeight: 1.75,
                                whiteSpace: 'pre-line',
                              }}
                              text={previewBio}
                            />
                          )}
                        </div>

                        {/* Read More Trigger -> Opens Museum Bio Modal */}
                        {hasLongBio && (
                          <div
                            style={{
                              marginTop: 'auto',
                              paddingTop: '16px',
                              borderTop: '1px solid #F1F5F9',
                            }}
                          >
                            <button
                              onClick={() => setActiveModalMember({ member, category: group.category })}
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
                                gap: '6px',
                              }}
                            >
                              <span>Read full biography</span>
                              <span style={{ fontSize: '1rem', lineHeight: 1 }}>→</span>
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
                    justifyContent: 'space-between',
                    gap: '12px',
                    marginBottom: '20px',
                    flexWrap: 'wrap',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        width: '6px',
                        height: '26px',
                        backgroundColor: '#E11D48',
                        borderRadius: '3px',
                        flexShrink: 0,
                      }}
                    />
                    <TextReveal
                      as="h3"
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        lineHeight: 1.25,
                        wordBreak: 'break-word',
                      }}
                      text={group.category}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      backgroundColor: 'rgba(255, 255, 255, 0.14)',
                      color: '#FFFFFF',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      display: 'inline-flex',
                      alignItems: 'center',
                      lineHeight: 1,
                    }}
                  >
                    {group.members.length} Members
                  </span>
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
                          backgroundColor: 'rgba(18, 24, 36, 0.88)',
                          backdropFilter: 'blur(12px)',
                          WebkitBackdropFilter: 'blur(12px)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          borderRadius: '12px',
                          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.45)',
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
                                style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF' }}
                                text={member.name}
                              />
                            </div>
                            {member.position && member.position.trim() && (
                              <span
                                style={{
                                  padding: '4px 12px',
                                  borderRadius: '6px',
                                  backgroundColor: 'rgba(225, 29, 72, 0.08)',
                                  border: '1px solid rgba(225, 29, 72, 0.22)',
                                  color: '#E11D48',
                                  fontSize: '0.85rem',
                                  fontWeight: 700,
                                }}
                              >
                                {member.position}
                              </span>
                            )}
                          </div>

                          {/* Actions: LinkedIn & Expand Bio */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            {member.bio && (
                              <button
                                onClick={() => toggleBio(uniqueKey)}
                                style={{
                                  background: 'transparent',
                                  border: '1px solid rgba(255, 255, 255, 0.2)',
                                  borderRadius: '6px',
                                  padding: '6px 14px',
                                  color: '#2563EB',
                                  fontSize: '0.8rem',
                                  fontWeight: 700,
                                  cursor: 'pointer',
                                }}
                              >
                                {isExpanded ? 'Collapse ▲' : 'Read Scope ▼'}
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
                              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                              color: '#94A3B8',
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
        {/* Full Biography Modal */}
        {activeModalMember && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: '100dvh',
              maxHeight: '100vh',
              zIndex: 99999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              padding: '16px',
              boxSizing: 'border-box',
              overflow: 'hidden',
              touchAction: 'none',
            }}
            onClick={() => setActiveModalMember(null)}
          >
            <div
              role="dialog"
              aria-modal="true"
              style={{
                backgroundColor: 'rgba(18, 24, 36, 0.98)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '18px',
                maxWidth: '600px',
                width: '100%',
                maxHeight: 'min(86vh, 640px)',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
                overflow: 'hidden',
                position: 'relative',
                boxSizing: 'border-box',
                margin: 'auto',
                touchAction: 'auto',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                style={{
                  padding: '16px 20px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  boxSizing: 'border-box',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: 0, flex: 1 }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                      color: '#FFFFFF',
                      fontWeight: 800,
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 4px 10px rgba(15, 23, 42, 0.2)',
                    }}
                  >
                    {getInitials(activeModalMember.member.name)}
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: '#64748B',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        marginBottom: '3px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {activeModalMember.category}
                    </span>
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        lineHeight: 1.25,
                        margin: 0,
                        wordBreak: 'break-word',
                      }}
                    >
                      {activeModalMember.member.name}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModalMember(null)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '50%',
                    width: '34px',
                    height: '34px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    flexShrink: 0,
                    lineHeight: 1,
                  }}
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>

              {/* Sub-header with Role Badge & LinkedIn */}
              <div
                style={{
                  padding: '12px 20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '10px',
                  boxSizing: 'border-box',
                }}
              >
                {activeModalMember.member.position && activeModalMember.member.position.trim() && (
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(225, 29, 72, 0.12)',
                      border: '1px solid rgba(225, 29, 72, 0.25)',
                      color: '#E11D48',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      lineHeight: 1.35,
                      maxWidth: '100%',
                      wordBreak: 'break-word',
                      whiteSpace: 'normal',
                      boxSizing: 'border-box',
                    }}
                  >
                    {activeModalMember.member.position}
                  </span>
                )}

                {activeModalMember.member.linkedin && (
                  <a
                    href={activeModalMember.member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '5px 12px',
                      borderRadius: '6px',
                      backgroundColor: '#0A66C2',
                      color: '#FFFFFF',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      flexShrink: 0,
                      boxSizing: 'border-box',
                    }}
                  >
                    <Image
                      src="/images/social-linkedin.svg"
                      alt="LinkedIn"
                      width={13}
                      height={13}
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                    <span>LinkedIn Profile</span>
                  </a>
                )}
              </div>

              {/* Modal Body: Full Bio */}
              <div
                style={{
                  padding: '18px 20px',
                  overflowY: 'auto',
                  overflowX: 'hidden',
                  WebkitOverflowScrolling: 'touch',
                  flex: 1,
                  color: '#CBD5E1',
                  fontSize: '0.92rem',
                  lineHeight: 1.75,
                  whiteSpace: 'pre-line',
                  wordBreak: 'break-word',
                  boxSizing: 'border-box',
                  overscrollBehavior: 'contain',
                }}
              >
                {activeModalMember.member.bio}
              </div>

              {/* Modal Footer */}
              <div
                style={{
                  padding: '12px 20px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  boxSizing: 'border-box',
                }}
              >
                <button
                  onClick={() => setActiveModalMember(null)}
                  style={{
                    padding: '8px 22px',
                    borderRadius: '8px',
                    backgroundColor: '#E11D48',
                    color: '#FFFFFF',
                    border: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
