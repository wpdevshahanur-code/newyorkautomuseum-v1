'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface TimelineItem {
  period: string;
  title: string;
  category: 'Executive' | 'Automotive' | 'Innovation' | 'Public Service' | 'Media & Arts';
  description?: string;
}

const timelineData: TimelineItem[] = [
  {
    period: '2017 – Present',
    title: 'Executive Director of Development — New York Auto Museum',
    category: 'Executive',
    description: 'Leading institutional development, donor partnerships, board governance, and curatorial vision for the proposed 200,000+ sq ft NYC automotive landmark and educational facility (NewYorkAutoMuseum.com).',
  },
  {
    period: '2016 – Present',
    title: 'Founder & Chair — Watch & Jewelry Hall of Fame, NYC',
    category: 'Media & Arts',
    description: 'Spearheading the creation of a premier cultural institution honoring international watchmaking and fine jewelry craftsmanship in New York City.',
  },
  {
    period: '2014 – Present',
    title: 'Advisory Support — UN Climate Change Innovation HUB (Ontario Place)',
    category: 'Public Service',
    description: 'Provided strategic advisory support for the waterfront United Nations Innovation Hub planned for Ontario Place, uniting clean energy and climate resilience.',
  },
  {
    period: '2013 – Present',
    title: 'Founder — Ontario Lobbyist Association',
    category: 'Public Service',
    description: 'Established the advocacy body promoting ethical governance, policy transparency, and civic engagement across Ontario.',
  },
  {
    period: '2010 – Present',
    title: 'Roof to Roads Program Asphalt Facility — City of Toronto',
    category: 'Public Service',
    description: 'Pioneered circular economy municipal initiatives recycling commercial roofing shingles into durable roadway asphalt materials.',
  },
  {
    period: '2010',
    title: 'Advocate — Rob Ford Mayoral Campaign (Winner, 64th Mayor of Toronto)',
    category: 'Public Service',
    description: 'Advocated and supported civic campaign strategy for Toronto municipal leadership.',
  },
  {
    period: '2009 – Present',
    title: 'Green Museum Initiative — Ontario Place',
    category: 'Public Service',
    description: 'Championed sustainable cultural infrastructure and green exhibition spaces along Toronto’s waterfront.',
  },
  {
    period: '2007 – Present',
    title: 'Author & Novel Writer — "Canada\'s Oligarchs & Corporate Criminals"',
    category: 'Media & Arts',
    description: 'Investigative writing and literary examination of high finance, resource conglomerates, and corporate structures.',
  },
  {
    period: '2007',
    title: 'Creator — The Diamond Catalog Company',
    category: 'Innovation',
    description: 'Standardized global print and digital luxury catalogs for wholesale diamond merchant networks.',
  },
  {
    period: '2005',
    title: 'Creator — StockYourShop Inc. (Multi-Billion Dollar Retail System — Sold)',
    category: 'Innovation',
    description: 'Engineered an unprecedented retail distribution and sample placement system that transformed retail consumer habits across North America.',
  },
  {
    period: '2000 – Present',
    title: 'International Business Developer & Strategic Consultant',
    category: 'Executive',
    description: 'Advising Fortune 1000 executives, luxury houses, and technology ventures on product development, supply chain security, and strategic expansion.',
  },
  {
    period: '2003 – 2004',
    title: 'Candidate for Toronto City Council (Placed 3rd)',
    category: 'Public Service',
    description: 'Campaigned for fiscal accountability, public transit expansion, and neighborhood preservation in central Toronto.',
  },
  {
    period: '2003',
    title: 'Independent Candidate for Provincial Legislature (Placed 5th)',
    category: 'Public Service',
    description: 'Ran for Ontario Provincial Parliament on an independent platform advocating technology-forward civic reforms.',
  },
  {
    period: '2003',
    title: 'Community Philanthropy — Raised Computers for Local Center',
    category: 'Public Service',
    description: 'Organized technology drives supplying personal computers and digital literacy tools to underprivileged youth centers.',
  },
  {
    period: '2002 – 2003',
    title: 'Team Canada — Camel Trophy Land Rover Overland Expedition',
    category: 'Automotive',
    description: 'Selected to represent Canada in elite all-terrain vehicle navigation and endurance driving challenges.',
  },
  {
    period: '2002',
    title: 'Co-Founder — Canadian Jet Fighter School (CJFS, Toronto)',
    category: 'Innovation',
    description: 'Co-founded specialized aviation training program for civilian and tactical supersonic flight enthusiasts.',
  },
  {
    period: '2001',
    title: 'TTC Cell-Phone Infrastructure Schematics',
    category: 'Innovation',
    description: 'Drafted early architectural schematics proposing underground cellular and data coverage throughout the Toronto Transit Commission subway system.',
  },
  {
    period: '2000 – 2003',
    title: 'Type Certification Program — Jet\'s IAR-99 Soim (Hawk)',
    category: 'Innovation',
    description: 'Coordinated flight safety certification and regulatory compliance for high-performance training jets in Canada.',
  },
  {
    period: '2000 – 2002',
    title: 'E-Commerce Architecture — DMS Group',
    category: 'Innovation',
    description: 'Architected proprietary online catalog and B2B order pipelines for DeBeers DIA fine jewelry manufacture networks.',
  },
  {
    period: '1999 – 2003',
    title: 'Premier\'s Panel on Technology — Ontario, Canada',
    category: 'Public Service',
    description: 'Served on governmental advisory panels charting the digital economic transition and tech commercialization for the Province of Ontario.',
  },
  {
    period: '1999',
    title: 'TTC Bank Machine Deployment Contracts',
    category: 'Innovation',
    description: 'Secured landmark commercial contracts placing ATM and cash transaction kiosks across primary Toronto subway terminals.',
  },
  {
    period: '1998 – 2001',
    title: 'Pioneer of Early Online Debit & Bank Transfer Protocols',
    category: 'Innovation',
    description: 'Developed early encrypted bank-to-bank electronic fund transfer interfaces prior to the mainstream emergence of commercial fintech.',
  },
  {
    period: '1998 – 2000',
    title: 'Founder — Online Anywhere Inc. (Toronto — Sold)',
    category: 'Innovation',
    description: 'Early dot-com technology enterprise providing remote web access solutions; successfully acquired.',
  },
  {
    period: '1997 – Present',
    title: 'Founder — Toronto Auto Museum (TAM / OAM)',
    category: 'Automotive',
    description: 'Founded the Toronto Automotive Museum (torontoautomuseum.com) preserving historic, performance, and experimental Canadian automotive culture.',
  },
  {
    period: '1996 – 2004',
    title: 'Vintage Automobile Restoration & Mechanical Engineering',
    category: 'Automotive',
    description: 'Hands-on restoration of classic European sports cars and performance chassis, fusing design heritage with mechanical perfection.',
  },
  {
    period: '1995 – 2004',
    title: 'Fine Art Creation & Exhibition',
    category: 'Media & Arts',
    description: 'Produced critically recognized sculptural art pieces integrating precious metals, industrial components, and mixed media.',
  },
  {
    period: '1994 – 2005',
    title: 'Global Commerce Across 40+ Countries',
    category: 'Executive',
    description: 'Conducted high-level luxury goods trade, corporate negotiations, and manufacturing distribution in over 40 sovereign nations across Europe, Asia, and the Americas.',
  },
  {
    period: '1994 – 1997',
    title: 'Screenplay Writer for Film Adaptation (NY & LA)',
    category: 'Media & Arts',
    description: 'Authored dramatic feature screenplays and cinematic treatments developed for studio production in New York and Los Angeles.',
  },
  {
    period: '1994 – 2005',
    title: 'V.P. & Executive Sales Leader — Design Model Services (DMS Group)',
    category: 'Executive',
    description: 'Led the incorporated group of DeBeers Diamond International Award (DIA) winning designers, repeatedly shattering every sales record in company history.',
  },
  {
    period: '1987 – 1991',
    title: 'Canadian Army Cadets & Military Reserves',
    category: 'Public Service',
    description: 'Trained in leadership, discipline, navigation, and national service with the Canadian Armed Forces Reserves.',
  },
];

export default function BioClientView() {
  const [activeTab, setActiveTab] = useState<'overview' | 'story' | 'timeline'>('overview');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('David.Senater@NewYorkAutoMuseum.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', paddingBottom: '96px' }}>
      {/* Background Decorative Ambient Glows */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, rgba(14, 165, 233, 0.08) 50%, transparent 80%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1160px', margin: '0 auto', padding: '0 24px' }}>
        {/* Top Breadcrumb & Executive Header */}
        <div style={{ paddingTop: '40px', paddingBottom: '32px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '100px', backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.82rem', color: '#94A3B8', marginBottom: '24px' }}>
            <Link href="/" style={{ color: '#94A3B8', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#E2E8F0' }}>Executive Leadership</span>
            <span>/</span>
            <span style={{ color: '#F59E0B', fontWeight: 600 }}>David Senater</span>
          </div>

          {/* Hero Profile Card */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(20, 26, 38, 0.95) 0%, rgba(11, 15, 24, 0.92) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '24px',
              padding: '36px',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.55)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                {/* Executive Avatar / Monogram */}
                <div
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #78350F 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 35px rgba(245, 158, 11, 0.35)',
                    border: '3px solid rgba(255, 255, 255, 0.2)',
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', letterSpacing: '-0.02em', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
                    DS
                  </span>
                </div>

                <div style={{ flex: 1, minWidth: '260px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '8px' }}>
                    <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 900, color: '#FFFFFF', margin: 0, letterSpacing: '-0.03em', lineHeight: 1.15 }}>
                      David Senater
                    </h1>
                    <span
                      style={{
                        padding: '4px 12px',
                        borderRadius: '100px',
                        backgroundColor: 'rgba(245, 158, 11, 0.15)',
                        border: '1px solid rgba(245, 158, 11, 0.4)',
                        color: '#FBBF24',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Executive Director
                    </span>
                  </div>

                  <p style={{ fontSize: '1.2rem', color: '#CBD5E1', fontWeight: 500, margin: '0 0 10px 0', lineHeight: 1.4 }}>
                    Executive Director of Development &bull; Museum Planner &bull; Trade Pioneer &bull; Environmentalist
                  </p>

                  <p style={{ fontSize: '0.95rem', color: '#94A3B8', margin: 0, display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span>📍 Calling <strong>Toronto, Geneva &amp; New York City</strong> Home</span>
                    <span>&bull;</span>
                    <span>Son of Acclaimed Fine Jewelry Designer <strong>Niky Senater</strong></span>
                  </p>
                </div>
              </div>

              {/* Badges Bar */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                {[
                  '🏛️ Executive Director, New York Auto Museum',
                  '💎 DeBeers DIA Design Think Tank Leadership',
                  '🏎️ Founder, Toronto Auto Museum (TAM/OAM)',
                  '🌿 UN Climate Change Innovation HUB Advisory',
                  '📦 Creator, DiaTender Inc. Enterprise Network',
                  '📺 Founder, WatchJewelryTV Global Media',
                ].map((b, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.09)',
                      color: '#E2E8F0',
                      fontSize: '0.86rem',
                      fontWeight: 500,
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>

              {/* Action Buttons & Credentials Row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', paddingTop: '10px' }}>
                <a
                  href="mailto:David.Senater@NewYorkAutoMuseum.com"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 22px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                    color: '#000000',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 16px rgba(245, 158, 11, 0.3)',
                    transition: 'transform 0.2s ease',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Email Executive Office
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 18px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.07)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                  }}
                >
                  {copied ? '✓ Copied to Clipboard!' : 'David.Senater@NewYorkAutoMuseum.com'}
                </button>

                <a
                  href="https://ca.linkedin.com/in/david-senater-08738632"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    backgroundColor: '#0A66C2',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(10, 102, 194, 0.3)',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66 1.66 1.66 0 0 0-1.66-1.66Z" />
                  </svg>
                  Official LinkedIn Profile
                </a>
              </div>

              {/* Office Address Snippet */}
              <div style={{ fontSize: '0.85rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>Executive Office:</span>
                <span style={{ color: '#94A3B8' }}>717 Eglinton Ave West, Suite 104, Toronto, Ontario, Canada M5N 1C9</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Switcher Navigation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            padding: '8px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            marginBottom: '40px',
            backdropFilter: 'blur(12px)',
            flexWrap: 'wrap',
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            style={{
              flex: '1 1 220px',
              padding: '14px 20px',
              borderRadius: '12px',
              border: 'none',
              backgroundColor: activeTab === 'overview' ? '#F59E0B' : 'transparent',
              color: activeTab === 'overview' ? '#000000' : '#94A3B8',
              fontWeight: 700,
              fontSize: '0.96rem',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <span>📜</span> Executive Profile &amp; Legacy
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('story')}
            style={{
              flex: '1 1 220px',
              padding: '14px 20px',
              borderRadius: '12px',
              border: 'none',
              backgroundColor: activeTab === 'story' ? '#F59E0B' : 'transparent',
              color: activeTab === 'story' ? '#000000' : '#94A3B8',
              fontWeight: 700,
              fontSize: '0.96rem',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <span>📖</span> The David Senater Story
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('timeline')}
            style={{
              flex: '1 1 220px',
              padding: '14px 20px',
              borderRadius: '12px',
              border: 'none',
              backgroundColor: activeTab === 'timeline' ? '#F59E0B' : 'transparent',
              color: activeTab === 'timeline' ? '#000000' : '#94A3B8',
              fontWeight: 700,
              fontSize: '0.96rem',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <span>⏱️</span> Career Milestones (1987–Pres.)
          </button>
        </div>

        {/* TAB 1: EXECUTIVE OVERVIEW & TRADE LEGACY */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Stat Counters Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '20px',
              }}
            >
              {[
                { number: '30+ Years', label: 'Global Industry Leadership', desc: 'Calling Toronto, Geneva & NYC Home' },
                { number: '40+ Nations', label: 'International Trade Footprint', desc: 'Conducted high-level business globally' },
                { number: 'DeBeers DIA', label: 'Think Tank Heritage', desc: 'Shattered historical company sales records' },
                { number: '2017 – Present', label: 'Executive Director of Dev.', desc: 'New York Auto Museum Experience Center' },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(18, 24, 38, 0.85)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '18px',
                    padding: '24px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
                  }}
                >
                  <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#F59E0B', marginBottom: '6px' }}>{stat.number}</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>{stat.label}</div>
                  <div style={{ fontSize: '0.84rem', color: '#94A3B8' }}>{stat.desc}</div>
                </div>
              ))}
            </div>

            {/* Editorial Content Cards */}
            <div
              style={{
                background: 'rgba(18, 24, 38, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
              }}
            >
              {/* Section 1 */}
              <div>
                <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#F59E0B' }}>01.</span> DeBeers Heritage &amp; Fine Jewelry Lineage
                </h2>
                <div style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#CBD5E1', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <p>
                    <strong>David Senater</strong> is the son of acclaimed Multiple DeBeers Diamond Internationally Awarded fine jewelry designer <strong>Niky Senater</strong>. Niky Senater was a founding partner and co-owner in <em>Diamond Form</em> and <em>Mega Jewelry Group</em>—formerly one of North America’s largest jewelry manufacturers and the 4th largest in Canada.
                  </p>
                  <p>
                    David Senater’s career commenced at the young age of seventeen and a half while studying in art school: <em>“I went from art school to the NYC diamond jewelry district overnight.”</em> Early in his journey, he attended landmark gatherings alongside diamond luminaries including mining tycoon <strong>Nicky Oppenheimer</strong>, <strong>Russell Simmons</strong>, <strong>Martin Rapaport</strong>, and screen icon <strong>Elizabeth Taylor</strong>.
                  </p>
                  <p>
                    Growing up within his father’s prestigious design studios in New York City, Los Angeles, and Toronto was foundational to his worldwide achievements. As Vice President at <strong>DMS Group</strong>—the only creative think tank of its kind to earn multiple DeBeers Diamond International Awards—David led an incorporated group of DIA designers in shattering every sales record in the company’s multi-decade history.
                  </p>
                </div>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.08)', margin: 0 }} />

              {/* Section 2 */}
              <div>
                <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#F59E0B' }}>02.</span> Enterprise Innovation &amp; Global Trade Systems
                </h2>
                <div style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#CBD5E1', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <p>
                    Having serviced Fortune 1000 jewelry manufacturers in design and advanced product development, Mr. Senater built a substantial following across the international diamond power structure. He lived abroad for the greater part of his 30-year career, calling <strong>Toronto, Geneva, and New York City</strong> home.
                  </p>
                  <p>
                    He served as an industry pioneer and creator behind the <strong>World Jewelry Federation</strong>, a Senater Innovations Inc. initiative derived from the J. Walter Thompson Diamond Promotional Service (DPS) plan (circa 1998)—a multi-million dollar conceptual blueprint aimed at databasing the global jewelry trade online.
                  </p>
                  <p>
                    Mr. Senater is recognized among the world’s top diamond jewelry retail trade professionals by founders of the <strong>Retail Marketing Association of America</strong>. This recognition was earned by harmonizing Harvard marketing principles with DeBeers methodologies through cross-pollinating retail footprint strategies and sample placement programs. He is duly noted as the first individual in North America to alter the buying habits of retail diamond consumers to the scale of billions of dollars through a single marketed concept (StockYourShop Inc.).
                  </p>
                  <p>
                    Continuing his track record of high-impact technology development, he founded <strong>DiaTender Inc.</strong>, a patent-pending competitive software services enterprise networked with institutional partners including <strong>Wells Fargo, UPS, USPS, FedEx, and Lloyd’s of London</strong>.
                  </p>
                </div>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.08)', margin: 0 }} />

              {/* Section 3 */}
              <div>
                <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#F59E0B' }}>03.</span> Cultural Institutions &amp; New York Auto Museum Leadership
                </h2>
                <div style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#CBD5E1', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <p>
                    Mr. Senater is the creator and founder of <strong>WatchJewelryTV</strong>, a globally broadcast show focused on watchmaking and high-jewelry industry culture. In 1997, he established the <strong>Toronto Auto Museum (TAM / OAM)</strong> (<a href="https://www.torontoautomuseum.com" target="_blank" rel="noopener noreferrer" style={{ color: '#F59E0B', textDecoration: 'underline' }}>torontoautomuseum.com</a>) to advance heritage automotive preservation in Canada.
                  </p>
                  <p>
                    Since 2017, David Senater has served as the <strong>Executive Director of Development at the New York Auto Museum Experience Center</strong> (<a href="https://www.newyorkautomuseum.com" style={{ color: '#F59E0B', textDecoration: 'underline' }}>NewYorkAutoMuseum.com</a>). In this role, he leads institutional planning, museum charter execution, executive advisory recruitment, and capital campaigns for the proposed 200,000+ square-foot facility dedicated to automotive science, design, and youth STEM education in New York City.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: THE DAVID SENATER STORY (MEMOIR) */}
        {activeTab === 'story' && (
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(18, 24, 38, 0.95) 0%, rgba(13, 17, 26, 0.95) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '24px',
              padding: '44px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Story Header */}
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px auto' }}>
              <span style={{ color: '#F59E0B', fontSize: '0.86rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Personal Memoir &amp; Fortitude
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: 900, color: '#FFFFFF', margin: '8px 0 16px 0', letterSpacing: '-0.03em' }}>
                The David Senater Story
              </h2>
              <p style={{ fontSize: '1.15rem', color: '#94A3B8', fontWeight: 500, margin: 0 }}>
                Museum Planner &bull; Environmentalist &bull; Survivor
              </p>
            </div>

            {/* Quote Banner */}
            <div
              style={{
                backgroundColor: 'rgba(245, 158, 11, 0.08)',
                borderLeft: '4px solid #F59E0B',
                borderRadius: '0 16px 16px 0',
                padding: '24px 30px',
                marginBottom: '40px',
              }}
            >
              <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#FEF3C7', margin: 0, lineHeight: 1.6 }}>
                &ldquo;It’s not how fast you drive, it’s how well you drive fast.&rdquo;
              </p>
              <span style={{ display: 'block', marginTop: '8px', fontSize: '0.9rem', color: '#D97706', fontWeight: 600 }}>
                — Ferdinand Porsche
              </span>
            </div>

            {/* Narrative Body */}
            <div
              style={{
                fontSize: '1.08rem',
                lineHeight: 1.85,
                color: '#CBD5E1',
                display: 'flex',
                flexDirection: 'column',
                gap: '28px',
                maxWidth: '920px',
                margin: '0 auto',
              }}
            >
              <p style={{ fontSize: '1.25rem', color: '#FFFFFF', fontWeight: 600 }}>
                My name is David Senater and this is my story.
              </p>

              <div>
                <h3 style={{ fontSize: '1.35rem', color: '#FBBF24', fontWeight: 700, marginBottom: '10px' }}>
                  The First Challenge &amp; 16 Surgeries
                </h3>
                <p>
                  The first memory of school I have is walking home with my big brother Len. I was five years old and he was reading me my Grade 1 report card. <em>“David, you have something called dyslexia,”</em> he said. <em>“What’s that?”</em> I asked. <em>“I’m not sure,”</em> he added. My schoolteacher felt I was dyslexic—she went on to have a nervous breakdown a couple years later, so who really knows.
                </p>
                <p>
                  Prior to this news, our family was grappling with my life’s first real challenge. Medical assessments by Toronto doctors determined that the right side of my jawbone did not grow normally. By age three, it was evident I could not open my mouth.
                </p>
                <p>
                  This resulted in sixteen surgical procedures that continued until I was seventeen years old. Every couple of years, surgeons had to reconstruct my jaw using pieces of rib bone and hip bone to bring the right side of my face into symmetry with the left. Growing up, my face was never symmetrical and leaned to one side—an immediate focal point of ridicule for local school kids.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.35rem', color: '#FBBF24', fontWeight: 700, marginBottom: '10px' }}>
                  August 1, 1981: Tragedy and Survival
                </h3>
                <p>
                  By the end of Grade 1, educators recommended that I be placed in special education or held back a full school year. My mother, who had studied to become a teacher, was adamant that I remain with the regular student body. She committed to tutoring me through intensive homeschooling and special after-school sessions so that I could enter Grade 2 alongside my peers.
                </p>
                <p>
                  That summer, our family faced unfathomable tragedy. On August 1, 1981, my mother and grandfather were killed in a horrific vehicular rollover accident. They were thrown through the sunroof and crushed as the car rolled over. I was six years old, sitting in the backseat, and survived with minor scrapes and bruises. Having survived that crash, I was lucky to be alive.
                </p>
                <p>
                  Our mother had been the glue of our family. Following her death, my father was left to raise my brother and me on his own while managing his emerging career as a master goldsmith. By age seven, I had undergone multiple major surgeries, received a diagnosis of dyslexia, and witnessed the loss of my mother and grandfather. Life was not going to get any easier—I simply had to accept it and keep moving forward.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.35rem', color: '#FBBF24', fontWeight: 700, marginBottom: '10px' }}>
                  Facing Adversity in Special Education
                </h3>
                <p>
                  Despite my mother’s wishes, educators subsequently transferred me into special education classes. The students there navigated severe emotional, behavioral, and physical challenges. Regular class students looked upon us differently, and kids can be cruel. I was insulted and marginalized, yet I was determined to prove that my dyslexia would not define my ceiling.
                </p>
                <p>
                  I grew up in the upper-middle-class enclave of Forest Hill in Toronto—a community blessed with libraries, parks, tennis courts, and public amenities. As adolescence arrived, many classmates experimented with alcohol and illicit substances. The Senater family does not drink alcohol, and observing the devastating toll of substance abuse firsthand reinforced my lifelong aversion to it. I chose a different path.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.35rem', color: '#FBBF24', fontWeight: 700, marginBottom: '10px' }}>
                  Velocity, Motorsport, and The Near-Fatal Crash at 17
                </h3>
                <p>
                  While others indulged in substances, my vice was velocity: I loved high-performance cars and motorcycles. By age sixteen, I was riding high-powered motorbikes, yet throughout my life, I never lost my driver’s license. I always respected Ferdinand Porsche’s adage: <em>“It’s not how fast you drive, it’s how well you drive fast.”</em> Having lost family members on the highway, I understood the sacred responsibility of vehicle control.
                </p>
                <p>
                  At age seventeen, while walking home from studying with friends, I was struck by a distracted driver. I was nearly killed, spent months hospitalized, and endured a prolonged coma. I suffered a severe brain aneurysm requiring 26 surgical staples to my skull. The trauma permanently ended my athletic aspirations as a member of the Canadian National Freestyle Ski Team and cut short my semi-professional rugby ambitions. Later that year, I graduated trade school with a degree in Electrical Studies alongside my high school credentials.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.35rem', color: '#FBBF24', fontWeight: 700, marginBottom: '10px' }}>
                  Sales Prodigy &amp; Worldwide Commerce
                </h3>
                <p>
                  By age eighteen, my father’s jewelry business was flourishing. He invited me to take to the road to generate sales. I discovered an innate mastery of client relationships and luxury presentation.
                </p>
                <p>
                  I quickly broke every milestone in the company’s multi-decade history: largest single sale, largest one-week volume, record tradeshow transactions. By age twenty-one, I was driving a limited-edition BMW 735 Hartge. Over the subsequent decade, I traveled through more than forty countries delivering custom design and product development consulting to Fortune 1000 jewelry executives.
                </p>
                <p>
                  As digital model-making and CAD/CAM production revolutionized the craft in the early 2000s, our firm concluded its run. My father assumed the role of Head Designer for one of Canada’s largest and oldest jewelry manufacturers until his retirement.
                </p>
              </div>

              <div>
                <h3 style={{ fontSize: '1.35rem', color: '#FBBF24', fontWeight: 700, marginBottom: '10px' }}>
                  Medical Victory &amp; A Life of Purpose
                </h3>
                <p>
                  In 2010, severe tinnitus led me to an MRI examination, which identified an acoustic neuroma brain tumor. In 2016, I underwent advanced Gamma Knife radiosurgery. The treatment was life-altering for the better, giving me renewed vigor and clarity of purpose.
                </p>
                <p>
                  Having served as a design consultant to hundreds of corporate leaders, I developed a rare synthesis of retrospective appreciation for history and prospective insight into innovation. Today, I live between Toronto, New York City, and my family in Switzerland. 
                </p>
                <p>
                  My life’s dedication is now focused on museum planning, environmental progress, and building the <strong>New York Auto Museum Experience Center</strong> into an enduring civic institution that inspires the next generation of American innovators.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CAREER MILESTONES & TIMELINE */}
        {activeTab === 'timeline' && (
          <div
            style={{
              background: 'rgba(18, 24, 38, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.4)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <span style={{ color: '#F59E0B', fontSize: '0.86rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Chronological Record
              </span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFFFFF', margin: '8px 0 12px 0', letterSpacing: '-0.02em' }}>
                Career Milestones &amp; Public Leadership
              </h2>
              <p style={{ fontSize: '1rem', color: '#94A3B8', margin: 0 }}>
                1987 to Present &bull; Four decades of commercial, civic, and cultural achievements.
              </p>
            </div>

            {/* Vertical Timeline */}
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {timelineData.map((item, idx) => {
                const getCategoryColor = (cat: TimelineItem['category']) => {
                  switch (cat) {
                    case 'Executive': return '#F59E0B';
                    case 'Automotive': return '#EF4444';
                    case 'Innovation': return '#38BDF8';
                    case 'Public Service': return '#10B981';
                    case 'Media & Arts': return '#A855F7';
                  }
                };

                const catColor = getCategoryColor(item.category);

                return (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      gap: '20px',
                      alignItems: 'flex-start',
                      padding: '20px',
                      borderRadius: '16px',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.07)',
                    }}
                  >
                    {/* Period Badge */}
                    <div
                      style={{
                        minWidth: '150px',
                        padding: '6px 14px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(245, 158, 11, 0.12)',
                        border: '1px solid rgba(245, 158, 11, 0.25)',
                        color: '#FBBF24',
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        textAlign: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {item.period}
                    </div>

                    {/* Content Details */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                          {item.title}
                        </h4>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            padding: '2px 8px',
                            borderRadius: '6px',
                            color: catColor,
                            backgroundColor: `${catColor}18`,
                            border: `1px solid ${catColor}35`,
                          }}
                        >
                          {item.category}
                        </span>
                      </div>
                      {item.description && (
                        <p style={{ fontSize: '0.92rem', color: '#94A3B8', margin: 0, lineHeight: 1.6 }}>
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
