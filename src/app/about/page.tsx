import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import PastFuture from '@/components/PastFuture';
import MuseumSpotlights from '@/components/MuseumSpotlights';
import NyaeSynergy from '@/components/NyaeSynergy';
import Accreditations from '@/components/Accreditations';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'The Museum & Vision | New York Auto Museum',
  description: 'Proposed 200,000+ square-foot Manhattan facility featuring rooftop patio, glass floors, 100 sit-in vehicles, and global OEM partnerships.',
};

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <PageHeader
          breadcrumb="The Museum"
          tag="Destination &amp; Vision"
          title="The Proposed Manhattan Landmark"
          subtitle="Explore the vision, architecture, and international partnerships behind the New York Auto Museum and World Motorsport Hall of Fame."
          bgImage="/images/slideshow/IMG_4959.jpg"
          imagePosition="right 38%"
          imageOpacity={0.72}
        />
        <PastFuture />
        <MuseumSpotlights />
        <NyaeSynergy />
        <Accreditations />
      </main>
      <Footer />
    </div>
  );
}
