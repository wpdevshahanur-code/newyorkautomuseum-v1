import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'New York Auto Museum | Proposed 200,000+ Sq Ft Manhattan Facility',
  description: 'The New York Auto Museum proposed 200,000+ square-foot Manhattan location features world-first glassed floors, a panoramic rooftop patio, 12 dedicated exhibition wings, and an unprecedented experience allowing visitors to sit in up to 100 extravagant vehicles.',
  keywords: 'New York Auto Museum, automotive museum NYC, Manhattan car museum, exotic cars, hypercars, EV innovation, sit in cars, automotive engineering',
  icons: {
    icon: '/images/logo-dark.png',
  },
  openGraph: {
    title: 'New York Auto Museum | Premier Manhattan Automotive Landmark',
    description: 'A 200,000+ sq ft proposed Manhattan facility uniting automotive science, design, and history.',
    url: 'https://newyorkautomuseum.com',
    siteName: 'New York Auto Museum',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="site-backdrop" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
