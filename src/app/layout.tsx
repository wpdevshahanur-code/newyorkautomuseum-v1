import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'New York Auto Museum | Proposed 200,000+ Sq Ft New York City Facility',
  description: 'The New York Auto Museum proposed 200,000+ square-foot New York City location features world-first glassed floors, a panoramic rooftop patio, 12 dedicated exhibition wings, and an unprecedented experience allowing visitors to sit in up to 100 extravagant vehicles.',
  keywords: 'New York Auto Museum, automotive museum NYC, New York City car museum, exotic cars, hypercars, EV innovation, sit in cars, automotive engineering',
  icons: {
    icon: '/images/logo-dark.png',
  },
  openGraph: {
    title: 'New York Auto Museum | Premier New York City Automotive Landmark',
    description: 'A 200,000+ sq ft proposed New York City facility uniting automotive science, design, and history.',
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
