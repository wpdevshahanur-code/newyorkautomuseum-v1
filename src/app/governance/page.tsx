import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GovernanceClient from '@/components/GovernanceClient';

export const metadata: Metadata = {
  title: 'Governance, Legal Filings & 501(c)(3) Transparency | New York Auto Museum',
  description: 'Official corporate registration documents, New York State Certificate of Status, Filing Receipt, and IRS 501(c)(3) tax exemption determination letter (EIN: 92-2822778).',
  openGraph: {
    title: 'Governance & Public Legal Filings | New York Auto Museum',
    description: 'Direct access to official State of New York corporate documents and IRS 501(c)(3) accreditation.',
    url: 'https://www.newyorkautomuseum.com/governance',
    siteName: 'New York Auto Museum',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Governance & Legal Filings | New York Auto Museum',
    description: 'Public legal disclosures, NYS DOS ID: 6741276, IRS 501(c)(3) Letter 947.',
  },
};

export default function GovernancePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, background: 'transparent' }}>
        <GovernanceClient />
      </main>
      <Footer />
    </div>
  );
}
