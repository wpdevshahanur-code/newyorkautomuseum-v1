import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialReleaseForm from '@/components/SocialReleaseForm';
import './social.css';

export const metadata: Metadata = {
  title: 'Creator & Vehicle Media Release | The New York Auto Museum',
  description: 'Authorise the New York Auto Museum Experience Center Inc. to feature, showcase, and credit your automotive social media content, builds, and photography across our official digital platforms.',
};

export default function SocialPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'transparent' }}>
      <Navbar />
      <main className="social-page-wrapper" style={{ flex: 1, background: 'transparent' }}>
        <div className="container">
          {/* Hero Header */}
          <div className="social-hero-header">
            <div className="social-badge-tag">
              <span>📸</span> Creator &amp; Community Media Network
            </div>
            <h1 className="social-main-title">
              Feature Your Content &amp; Builds on The New York Auto Museum
            </h1>
            <p className="social-main-subtitle">
              We collaborate with automotive photographers, content creators, collectors, and builders to showcase the vibrant world of car culture. Complete this simple media release authorization to have your vehicles and content highlighted across our platforms with full creator attribution.
            </p>

            {/* Trust Highlights */}
            <div className="social-trust-bar">
              <div className="social-trust-item">
                <span><strong>Creator Attribution:</strong> <span className="trust-highlight">Full Handle &amp; Tag Credit</span></span>
              </div>
              <div className="social-trust-item">
                <span><strong>501(c)(3) Cultural Institution:</strong> <span>EIN 92-2822778</span></span>
              </div>
              <div className="social-trust-item">
                <span><strong>Global Showcase:</strong> <span>NYC Exhibitions &amp; Digital Media</span></span>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <SocialReleaseForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
