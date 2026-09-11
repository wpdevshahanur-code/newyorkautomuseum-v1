import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import BoardsAndCommittees from '@/components/BoardsAndCommittees';
import Accreditations from '@/components/Accreditations';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Boards & Committees | New York Auto Museum',
  description: '11 Museum Wing Development Committees and 32 Suggested Tax-Deductible Donation Committees.',
};

export default function CommitteesPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <PageHeader
          breadcrumb="Committees"
          tag="Governance &amp; Oversight"
          title="Boards &amp; Committees"
          subtitle="Explore the 11 Museum Wing Development working groups and 32 specialized fiduciary committees available through tax-deductible contributions."
          bgImage="/images/slideshow/IMG_1659.jpg"
          imagePosition="right 48%"
          imageOpacity={0.80}
        />
        <BoardsAndCommittees />
        <Accreditations />
      </main>
      <Footer />
    </div>
  );
}
