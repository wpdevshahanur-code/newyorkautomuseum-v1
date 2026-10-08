import type { Metadata } from 'next';
import Script from 'next/script';
import WhatsAppButton from '@/components/WhatsAppButton';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.newyorkautomuseum.com'),
  title: 'New York Auto Museum | Proposed 200,000+ Sq Ft New York City Facility',
  description: 'The New York Auto Museum proposed 200,000+ square-foot New York City location features world-first glassed floors, a panoramic rooftop patio, 12 dedicated exhibition wings, and an unprecedented experience allowing visitors to sit in up to 100 extravagant vehicles.',
  keywords: 'New York Auto Museum, automotive museum NYC, New York City car museum, exotic cars, hypercars, EV innovation, sit in cars, automotive engineering',
  icons: {
    icon: '/images/logo-dark.png',
  },
  openGraph: {
    title: 'New York Auto Museum | Premier New York City Automotive Landmark',
    description: 'A 200,000+ sq ft proposed New York City facility uniting automotive science, design, and history.',
    url: 'https://www.newyorkautomuseum.com',
    siteName: 'New York Auto Museum',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.newyorkautomuseum.com/og-image.jpg',
        secureUrl: 'https://www.newyorkautomuseum.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The New York Auto Museum',
        type: 'image/jpeg',
      },
      {
        url: 'https://www.newyorkautomuseum.com/og-image.png',
        secureUrl: 'https://www.newyorkautomuseum.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The New York Auto Museum',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New York Auto Museum | Premier New York City Automotive Landmark',
    description: 'A 200,000+ sq ft proposed New York City facility uniting automotive science, design, and history.',
    images: ['https://www.newyorkautomuseum.com/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11165684012"
          strategy="afterInteractive"
        />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11165684012');
          `}
        </Script>
      </head>
      <body>
        <div className="site-backdrop" aria-hidden="true" />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
