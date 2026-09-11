import Link from 'next/link';
import Navbar from '@/components/Navbar';
import HeroSlideshow from '@/components/HeroSlideshow';
import PastFuture from '@/components/PastFuture';
import MuseumSpotlights from '@/components/MuseumSpotlights';
import NyaeSynergy from '@/components/NyaeSynergy';
import Accreditations from '@/components/Accreditations';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import TextReveal from '@/components/TextReveal';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <HeroSlideshow />
        <PastFuture />
        <MuseumSpotlights />

        {/* Multi-Page Department Exploration Gateway */}
        <section
          className="gateway-section"
        >
          <div className="container">
            <div className="text-center" style={{ marginBottom: '56px' }}>
              <span className="section-tag">Explore The Institution</span>
              <TextReveal as="h2" className="section-title" text="Institutional Portals" />
              <TextReveal
                as="p"
                className="section-subtitle"
                text="Access dedicated institutional directories, curatorial committees, and career opportunities."
              />
            </div>

            <div
              className="gateway-grid"
            >
              {/* Gateway 1: Leadership */}
              <div
                className="gateway-card"
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.72)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 14px 40px rgba(0, 0, 0, 0.45)',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: '#EF4444',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    10 Departments • 24 Active Leaders
                  </span>
                  <TextReveal
                    as="h3"
                    style={{
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      marginTop: '8px',
                      marginBottom: '14px',
                    }}
                    text="The Board &amp; Advisors"
                  />
                  <TextReveal
                    as="p"
                    style={{ color: '#CBD5E1', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '24px' }}
                    text="Led by Chairman Otto Ferdinand Wachs (former CEO of Autostadt) and seasoned global executives across OEM, motorsport, CGI storytelling, and legal strategy."
                  />
                </div>
                <Link
                  href="/advisors"
                  className="btn btn-secondary"
                  style={{
                    width: '100%',
                    justifyContent: 'space-between',
                    fontWeight: 700,
                  }}
                >
                  <span>View Leadership Directory</span>
                  <span>&rarr;</span>
                </Link>
              </div>

              {/* Gateway 2: Committees */}
              <div
                className="gateway-card"
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.72)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 14px 40px rgba(0, 0, 0, 0.45)',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: '#F59E0B',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    12 Wings • 32 Donation Tiers
                  </span>
                  <TextReveal
                    as="h3"
                    style={{
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      marginTop: '8px',
                      marginBottom: '14px',
                    }}
                    text="Boards &amp; Committees"
                  />
                  <TextReveal
                    as="p"
                    style={{ color: '#CBD5E1', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '24px' }}
                    text="Detailed working scopes for all 12 permanent museum wings alongside 32 tax-deductible donor committees guiding governance and operations."
                  />
                </div>
                <Link
                  href="/committees"
                  className="btn btn-secondary"
                  style={{
                    width: '100%',
                    justifyContent: 'space-between',
                    fontWeight: 700,
                  }}
                >
                  <span>Explore Committees &amp; Tiers</span>
                  <span>&rarr;</span>
                </Link>
              </div>

              {/* Gateway 3: Careers */}
              <div
                className="gateway-card"
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.72)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 14px 40px rgba(0, 0, 0, 0.45)',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: '#38BDF8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    6 Departments • 29 Roles
                  </span>
                  <TextReveal
                    as="h3"
                    style={{
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      marginTop: '8px',
                      marginBottom: '14px',
                    }}
                    text="Careers at NYAM"
                  />
                  <TextReveal
                    as="p"
                    style={{ color: '#CBD5E1', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '24px' }}
                    text="Join the multidisciplinary team building one of the world's leading automotive landmarks. Curatorial, engineering, marketing, and leadership positions open."
                  />
                </div>
                <Link
                  href="/careers"
                  className="btn btn-secondary"
                  style={{
                    width: '100%',
                    justifyContent: 'space-between',
                    fontWeight: 700,
                  }}
                >
                  <span>Explore Open Positions</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <NewsletterSection />
        <NyaeSynergy />
        <Accreditations />
      </main>
      <Footer />
    </div>
  );
}
