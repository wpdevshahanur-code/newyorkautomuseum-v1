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
          style={{
            padding: '100px 0',
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          <div className="container">
            <div className="text-center" style={{ marginBottom: '56px' }}>
              <span className="section-tag">Explore The Institution</span>
              <TextReveal as="h2" className="section-title" text="Institutional Portals" />
              <p className="section-subtitle">
                Access dedicated institutional directories, curatorial committees, and career opportunities.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '28px',
              }}
            >
              {/* Gateway 1: Leadership */}
              <div
                style={{
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '16px',
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: '#DC2626',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    10 Departments • 39 Leaders
                  </span>
                  <h3
                    style={{
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      color: '#0F172A',
                      marginTop: '8px',
                      marginBottom: '14px',
                    }}
                  >
                    The Board &amp; Advisors
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '24px' }}>
                    Led by Chairman Otto Ferdinand Wachs (former CEO of Autostadt) and seasoned global executives across OEM, motorsport, CGI storytelling, and legal strategy.
                  </p>
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
                style={{
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '16px',
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: '#D97706',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    11 Wings • 32 Donation Tiers
                  </span>
                  <h3
                    style={{
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      color: '#0F172A',
                      marginTop: '8px',
                      marginBottom: '14px',
                    }}
                  >
                    Boards &amp; Committees
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '24px' }}>
                    Detailed working scopes for all 11 permanent museum wings alongside 32 tax-deductible donor committees guiding governance and operations.
                  </p>
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
                style={{
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '16px',
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: '#0284C7',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    6 Departments • 29 Roles
                  </span>
                  <h3
                    style={{
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      color: '#0F172A',
                      marginTop: '8px',
                      marginBottom: '14px',
                    }}
                  >
                    Careers at NYAM
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '24px' }}>
                    Join the multidisciplinary team building one of the world&apos;s leading automotive landmarks. Curatorial, engineering, marketing, and leadership positions open.
                  </p>
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
