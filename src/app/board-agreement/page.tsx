import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BoardAgreementClient from '@/components/BoardAgreementClient';
import './board-agreement.css';

export const metadata: Metadata = {
  title: 'Board Member & Committee Service Agreement | New York Auto Museum',
  description: 'Official Welcome Package, 34 Governance Standards, and Electronic Signature execution for Board Directors, Committee Members, and Executives.',
  openGraph: {
    title: 'Board Member Service Agreement & Welcome Package | New York Auto Museum',
    description: 'Execute official onboarding, review 34 governance standards, and digitally sign the Board Agreement online.',
    url: 'https://www.newyorkautomuseum.com/board-agreement',
    siteName: 'New York Auto Museum',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Board Member Service Agreement | New York Auto Museum',
    description: 'Official online onboarding and electronic signature portal for leadership candidates.',
  },
};

export default function BoardAgreementPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'transparent' }}>
      <Navbar />
      <main style={{ flex: 1, background: 'transparent' }}>
        <BoardAgreementClient />
      </main>
      <Footer />
    </div>
  );
}
