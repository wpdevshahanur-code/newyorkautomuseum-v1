import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import CareersSection from '@/components/CareersSection';
import Accreditations from '@/components/Accreditations';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Careers & Opportunities | New York Auto Museum',
  description: 'Join the team building one of the worlds leading automotive attractions in New York City. Explore open leadership positions.',
};

export default function CareersPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <PageHeader
          breadcrumb="Careers"
          tag="Join The Team"
          title="Career Opportunities"
          subtitle="Explore open executive leadership and fundraising opportunities at the New York Auto Museum."
          bgImage="/images/slideshow/IMG_2065.jpg"
          imagePosition="right 38%"
          imageOpacity={0.72}
        />
        <CareersSection />
        <Accreditations />
      </main>
      <Footer />
    </div>
  );
}
