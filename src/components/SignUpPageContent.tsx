import React from 'react';
import SignUpFunnel from '@/components/SignUpFunnel';
import { SignupChannelConfig } from '@/lib/signupChannels';

interface SignUpPageContentProps {
  channelConfig: SignupChannelConfig;
}

export default function SignUpPageContent({ channelConfig }: SignUpPageContentProps) {
  return (
    <div className="container">
      {/* Hero Header */}
      <div className="signup-hero-header">
        <div className="signup-badge-tag">
          <span>🏛️</span> {channelConfig.badgeTag}
        </div>
        <h1 className="signup-main-title">
          Help Build The <span>New York Auto Museum Experience Center</span>
        </h1>
        <p className="signup-main-subtitle">
          We are assembling forward-thinking automotive enthusiasts, STEM educators, philanthropists, and civic leaders
          to join our Committee Board in New York City. Please pre-qualify through the institutional criteria below to apply.
        </p>

        {/* Trust Highlights */}
        <div className="signup-trust-bar">
          <div className="signup-trust-item">
            <span><strong>501(c)(3) Nonprofit:</strong> <span className="trust-highlight">EIN 92-2822778</span></span>
          </div>
          <div className="signup-trust-item">
            <span><strong>Tax Deductible</strong> <span className="trust-dim">Receipts Provided</span></span>
          </div>
          <div className="signup-trust-item">
            <span><strong>Manhattan, NYC</strong> <span className="trust-dim">Headquarters</span></span>
          </div>
        </div>
      </div>

      {/* Interactive 2-Step Funnel */}
      <SignUpFunnel leadSource={channelConfig.leadSource} />
    </div>
  );
}
