'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

type PlatformTab = 'all' | 'instagram' | 'youtube' | 'facebook';

export default function SocialFeedClient() {
  const [activeTab, setActiveTab] = useState<PlatformTab>('all');

  useEffect(() => {
    // 1. Load Curator Embed CSS files
    const cssId = 'curator-css-core';
    if (!document.getElementById(cssId)) {
      const linkCore = document.createElement('link');
      linkCore.id = cssId;
      linkCore.rel = 'stylesheet';
      linkCore.href = 'https://cdn.curator.io/6.0/curator.embed.css';
      document.head.appendChild(linkCore);

      const linkPub = document.createElement('link');
      linkPub.rel = 'stylesheet';
      linkPub.href = 'https://cdn.curator.io/published-css/58afbcbe-757e-4204-818f-662d662b8cd3.css';
      document.head.appendChild(linkPub);
    }

    // 2. Initialize Curator with native filters & dark motorsport styling
    const initCurator = () => {
      const win = window as any;
      if (win.Curator && typeof win.Curator.loadWidget === 'function') {
        const config = {
          type: 'Waterfall',
          post: {
            animate: true,
            maxHeight: 0,
            showTitles: true,
            showShare: true,
            showComments: false,
            showLikes: false,
            autoPlayVideos: false,
            clickAction: 'open-popup',
            clickReadMoreAction: 'open-popup',
            maxLines: 0,
            useHighQualityImages: false,
          },
          widget: {
            template: 'widget-waterfall',
            colWidth: 260,
            colGutter: 0,
            showLoadMore: true,
            continuousScroll: false,
            postsPerPage: 24,
            animate: false,
            progressiveLoad: false,
            lazyLoad: false,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            autoLoadNew: false,
            lazyLoadType: 'none',
            gridMobile: true,
            gridMobileRows: 3,
            gridMobileShowLoadMore: false,
            gridMobileDimensions: '1:1',
            gridMobileLayoutMode: 'byWidth',
            gridMobileMinWidth: 150,
            gridMobileColumnCount: 2,
          },
          lang: 'en',
          container: '#curator-feed-default-feed-layout',
          debug: 0,
          hidePoweredBy: false,
          embedSource: '',
          forceHttps: false,
          feed: {
            id: '58afbcbe-757e-4204-818f-662d662b8cd3',
            apiEndpoint: 'https://api.curator.io',
            postsPerPage: 24,
            params: {},
            limit: 50,
          },
          popup: {
            template: 'popup',
            templateWrapper: 'popup-wrapper',
            autoPlayVideos: false,
            deepLink: false,
          },
          filter: {
            template: 'filter',
            showNetworks: true,
            showSources: true,
            showAll: true,
            default: 'all',
            limitPosts: false,
            limitPostNumber: 0,
            period: '',
          },
          theme: 'sydney',
        };

        const colours = {
          widgetBgColor: 'transparent',
          bgColor: '#0F172A',
          borderColor: 'rgba(255, 255, 255, 0.12)',
          iconColor: '#FFFFFF',
          textColor: '#FFFFFF',
          linkColor: '#E11D48',
          dateColor: '#94A3B8',
          footerColor: '#0F172A',
          tabIndexColor: '#E11D48',
          buttonColor: '#E11D48',
          popupBgColor: '#0F172A',
          popupLetterboxColor: '#080A0F',
          popupTextColor: '#FFFFFF',
          popupLinkColor: '#E11D48',
          popupIconColor: '#FFFFFF',
          popupDateColor: '#94A3B8',
          shareBgColor: '#0F172A',
          shareTextColor: '#FFFFFF',
          shareIconColor: '#FFFFFF',
        };

        win.Curator.loadWidget(config, colours, {});
      }
    };

    // 3. Load Curator Embed Script
    const scriptId = 'curator-core-js';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.charset = 'UTF-8';
      script.src = 'https://cdn.curator.io/6.0/curator.embed.js';
      script.onload = () => {
        initCurator();
      };
      document.body.appendChild(script);
    } else {
      initCurator();
    }
  }, []);

  const handleTabChange = (tab: PlatformTab) => {
    setActiveTab(tab);

    // Trigger Curator's native filter button click
    const filterContainer = document.querySelector('.crt-filter');
    if (filterContainer) {
      if (tab === 'all') {
        const allBtn = filterContainer.querySelector('li:first-child a') as HTMLElement;
        if (allBtn) allBtn.click();
      } else {
        const targetBtn = (
          filterContainer.querySelector(`[class*="${tab}"] a`) ||
          filterContainer.querySelector(`a[data-network="${tab}"]`)
        ) as HTMLElement | null;

        if (targetBtn) {
          targetBtn.click();
        } else {
          // Fallback search by text content
          const links = filterContainer.querySelectorAll('a');
          links.forEach((a) => {
            if (a.textContent?.toLowerCase().includes(tab)) {
              (a as HTMLElement).click();
            }
          });
        }
      }
    }

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: 'transparent' }}>
      {/* 1. Hero Header Section */}
      <section style={{ padding: '80px 0 40px', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', position: 'relative' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 28px', width: '100%' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            {/* Unified Single-Color Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(225, 29, 72, 0.12)',
                border: '1px solid rgba(225, 29, 72, 0.40)',
                color: '#E11D48',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#E11D48',
                  boxShadow: '0 0 10px #E11D48',
                }}
              />
              Live Media &bull; Social Hub
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                marginBottom: '18px',
              }}
            >
              Official <span style={{ color: '#E11D48' }}>Social Feed</span> &amp; Live Stream
            </h1>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.65, color: '#94A3B8', marginBottom: '32px' }}>
              Explore real-time automotive heritage highlights, behind-the-scenes exhibit developments, community builds, and official announcements across our active social channels.
            </p>

            {/* Quick Channel Overview Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '14px',
                textAlign: 'left',
              }}
            >
              <button
                type="button"
                onClick={() => handleTabChange('instagram')}
                style={{
                  backgroundColor: activeTab === 'instagram' ? 'rgba(225, 29, 72, 0.15)' : 'rgba(18, 24, 36, 0.85)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: activeTab === 'instagram' ? '1px solid #E11D48' : '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  padding: '16px 20px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#94A3B8', letterSpacing: '0.05em' }}>Visual Showcase</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginTop: '4px' }}>Instagram</div>
                <div style={{ fontSize: '0.78rem', color: '#E11D48', marginTop: '3px', fontWeight: 600 }}>● Photo Gallery &amp; Reels</div>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('youtube')}
                style={{
                  backgroundColor: activeTab === 'youtube' ? 'rgba(225, 29, 72, 0.15)' : 'rgba(18, 24, 36, 0.85)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: activeTab === 'youtube' ? '1px solid #E11D48' : '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  padding: '16px 20px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#94A3B8', letterSpacing: '0.05em' }}>Video Channel</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginTop: '4px' }}>YouTube</div>
                <div style={{ fontSize: '0.78rem', color: '#E11D48', marginTop: '3px', fontWeight: 600 }}>● Documentaries &amp; Shorts</div>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('facebook')}
                style={{
                  backgroundColor: activeTab === 'facebook' ? 'rgba(225, 29, 72, 0.15)' : 'rgba(18, 24, 36, 0.85)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: activeTab === 'facebook' ? '1px solid #E11D48' : '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  padding: '16px 20px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#94A3B8', letterSpacing: '0.05em' }}>Community News</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginTop: '4px' }}>Facebook</div>
                <div style={{ fontSize: '0.78rem', color: '#E11D48', marginTop: '3px', fontWeight: 600 }}>● Official Updates</div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Channel Tabs & Live Curator.io Feed Section */}
      <section style={{ padding: '50px 0 80px', position: 'relative' }}>
        <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 28px', width: '100%' }}>
          {/* Top Platform Switcher Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '32px',
            }}
          >
            <button
              type="button"
              onClick={() => handleTabChange('all')}
              style={{
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '0.92rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: activeTab === 'all' ? '1px solid #E11D48' : '1px solid rgba(255, 255, 255, 0.15)',
                backgroundColor: activeTab === 'all' ? '#E11D48' : 'rgba(18, 24, 36, 0.85)',
                color: '#FFFFFF',
                boxShadow: activeTab === 'all' ? '0 4px 18px rgba(225, 29, 72, 0.35)' : 'none',
              }}
            >
              All Channels (Combined)
            </button>

            <button
              type="button"
              onClick={() => handleTabChange('instagram')}
              style={{
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '0.92rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: activeTab === 'instagram' ? '1px solid #E11D48' : '1px solid rgba(255, 255, 255, 0.15)',
                backgroundColor: activeTab === 'instagram' ? '#E11D48' : 'rgba(18, 24, 36, 0.85)',
                color: '#FFFFFF',
                boxShadow: activeTab === 'instagram' ? '0 4px 18px rgba(225, 29, 72, 0.35)' : 'none',
              }}
            >
              Instagram Feed
            </button>

            <button
              type="button"
              onClick={() => handleTabChange('youtube')}
              style={{
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '0.92rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: activeTab === 'youtube' ? '1px solid #E11D48' : '1px solid rgba(255, 255, 255, 0.15)',
                backgroundColor: activeTab === 'youtube' ? '#E11D48' : 'rgba(18, 24, 36, 0.85)',
                color: '#FFFFFF',
                boxShadow: activeTab === 'youtube' ? '0 4px 18px rgba(225, 29, 72, 0.35)' : 'none',
              }}
            >
              YouTube Videos &amp; Shorts
            </button>

            <button
              type="button"
              onClick={() => handleTabChange('facebook')}
              style={{
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '0.92rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: activeTab === 'facebook' ? '1px solid #E11D48' : '1px solid rgba(255, 255, 255, 0.15)',
                backgroundColor: activeTab === 'facebook' ? '#E11D48' : 'rgba(18, 24, 36, 0.85)',
                color: '#FFFFFF',
                boxShadow: activeTab === 'facebook' ? '0 4px 18px rgba(225, 29, 72, 0.35)' : 'none',
              }}
            >
              Facebook Posts
            </button>
          </div>

          {/* Feed Card Container */}
          <div
            style={{
              backgroundColor: 'rgba(18, 24, 36, 0.85)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              borderRadius: '14px',
              padding: '36px 28px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
              minHeight: '650px',
            }}
          >
            {/* Curator.io Native Feed Container */}
            <div id="curator-feed-default-feed-layout" style={{ width: '100%', minHeight: '550px' }}>
              <a
                href="https://curator.io"
                target="_blank"
                rel="noopener noreferrer"
                className="crt-logo crt-tag"
                style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.8rem', display: 'inline-block', marginBottom: '12px' }}
              >
                Powered by Curator.io
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Theme Styling for Curator Widget & Native Filter */}
      <style jsx global>{`
        #curator-feed-default-feed-layout {
          width: 100% !important;
        }

        /* Dark Theme Styling for Curator Widget */
        .crt-feed-window,
        .crt-post,
        .crt-grid-post {
          background-color: rgba(15, 23, 42, 0.85) !important;
          border: 1px solid rgba(255, 255, 255, 0.12) !important;
          border-radius: 8px !important;
          color: #FFFFFF !important;
        }
        .crt-post-c {
          color: #E2E8F0 !important;
        }
        .crt-post-date,
        .crt-post-username {
          color: #94A3B8 !important;
        }
        .crt-load-more button,
        .crt-btn {
          background-color: #E11D48 !important;
          color: #FFFFFF !important;
          border: none !important;
          font-weight: 700 !important;
          border-radius: 6px !important;
          padding: 10px 24px !important;
        }

        /* Curator Native Filter Bar Alignment & Styling */
        .crt-filter {
          margin-bottom: 24px !important;
          padding-bottom: 12px !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
        }
        .crt-filter .crt-filter-sources ul,
        .crt-filter .crt-filter-networks ul {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 10px !important;
          flex-wrap: wrap !important;
          list-style: none !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        .crt-filter .crt-filter-label {
          display: none !important;
        }
        .crt-filter ul li a {
          display: inline-flex !important;
          align-items: center !important;
          gap: 6px !important;
          padding: 8px 16px !important;
          background-color: rgba(255, 255, 255, 0.06) !important;
          border: 1px solid rgba(255, 255, 255, 0.12) !important;
          border-radius: 6px !important;
          color: #94A3B8 !important;
          font-size: 0.85rem !important;
          font-weight: 600 !important;
          text-decoration: none !important;
          transition: all 0.2s ease !important;
        }
        .crt-filter ul li a:hover,
        .crt-filter ul li.active a {
          background-color: #E11D48 !important;
          border-color: #E11D48 !important;
          color: #FFFFFF !important;
        }
      `}</style>
    </div>
  );
}
