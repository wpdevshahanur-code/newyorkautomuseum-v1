import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '404 — Page Not Found | New York Auto Museum',
  description: 'The requested New York Auto Museum page could not be found.',
  robots: {
    index: false,
    follow: false,
  },
};

const QUICK_LINKS = [
  {
    href: '/about',
    title: 'The Museum & Vision',
    description: 'Proposed 200,000+ sq ft NYC landmark and 12 wings',
  },
  {
    href: '/advisors',
    title: 'Board & Advisors',
    description: 'Meet our executive, OEM, and curatorial leadership',
  },
  {
    href: '/committees',
    title: 'Committees & Wings',
    description: 'Explore museum governance divisions and apply',
  },
  {
    href: '/newsletter',
    title: 'Newsletter',
    description: 'Subscribe for project milestones and press releases',
  },
];

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'transparent' }}>
      <Navbar />

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <section className="not-found-section">
          <div className="not-found-card">
            <span className="not-found-badge">
              <span className="not-found-badge-dot" aria-hidden="true" />
              Off Route &bull; Error 404
            </span>

            <div className="not-found-dial-wrap">
              <div className="not-found-emblem" aria-hidden="true">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M4.93 17.5A9 9 0 1 1 19.07 17.5"
                    stroke="rgba(255, 255, 255, 0.25)"
                  />
                  <path
                    d="M16.5 5.3a9 9 0 0 1 2.57 12.2"
                    stroke="#E11D48"
                  />
                  <path d="M12 13l4.2-4.2" stroke="#E11D48" />
                  <circle cx="12" cy="13" r="1.6" fill="#FFFFFF" stroke="#FFFFFF" />
                  <path d="M12 4v1.5" stroke="#38BDF8" />
                  <path d="M5.6 12H7.1" stroke="#94A3B8" />
                </svg>
              </div>
              <div className="not-found-code" aria-label="404">
                4<span className="not-found-code-accent">0</span>4
              </div>
            </div>

            <h1 className="not-found-title">We Couldn&apos;t Find That Page</h1>
            <p className="not-found-subtitle">
              The exhibition page or institutional resource you&apos;re looking for may have been moved,
              renamed, or does not exist at this address. Return to the main museum gallery or select
              a destination below.
            </p>

            <div className="not-found-actions">
              <Link href="/" className="btn btn-primary">
                <span>Back to Homepage</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="/about" className="btn btn-secondary">
                Explore The Museum
              </Link>
            </div>

            <div className="not-found-directory">
              <div className="not-found-directory-label">Museum Directory</div>
              <div className="not-found-links-grid">
                {QUICK_LINKS.map((item) => (
                  <Link key={item.href} href={item.href} className="not-found-link-card">
                    <div>
                      <span className="not-found-link-title">{item.title}</span>
                      <span className="not-found-link-desc">{item.description}</span>
                    </div>
                    <span className="not-found-link-arrow" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <p className="not-found-help">
              Need assistance? Email{' '}
              <a href="mailto:info@newyorkautomuseum.com">info@newyorkautomuseum.com</a> or call Toll-Free{' '}
              <a href="tel:18774116926">1-877-411-NYAM (6926)</a>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
