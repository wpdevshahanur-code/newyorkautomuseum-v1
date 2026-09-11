import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import AdvisoryBoard from '@/components/AdvisoryBoard';
import Accreditations from '@/components/Accreditations';
import Footer from '@/components/Footer';
import { getAdvisors } from '@/lib/wordpress';

export const metadata: Metadata = {
  title: 'The Board & Advisors | New York Auto Museum',
  description: 'Executive leadership, curators, OEM relations, and legal advisors for the New York Auto Museum.',
};

export const revalidate = 60;

export default async function AdvisorsPage() {
  const advisors = await getAdvisors();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <PageHeader
          breadcrumb="Board &amp; Advisors"
          tag="Governance &amp; Leadership"
          title="The Board &amp; Advisors"
          subtitle="Meet the international leaders, former Volkswagen AG/Autostadt executives, legal counsel, and curators guiding the New York Auto Museum."
          bgImage="/images/slideshow/IMG_2071.jpg"
          imagePosition="right 30%"
          imageOpacity={0.70}
        />
        <AdvisoryBoard initialCategories={advisors} />
        <Accreditations />
      </main>
      <Footer />
    </div>
  );
}
