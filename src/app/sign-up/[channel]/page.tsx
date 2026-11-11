import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SignUpPageContent from '@/components/SignUpPageContent';
import { SIGNUP_CHANNEL_SLUGS, getSignupChannel } from '@/lib/signupChannels';
import '../signup.css';

interface ChannelPageProps {
  params: Promise<{ channel: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return SIGNUP_CHANNEL_SLUGS.map((channel) => ({ channel }));
}

export async function generateMetadata({ params }: ChannelPageProps): Promise<Metadata> {
  const { channel } = await params;
  const config = getSignupChannel(channel);
  if (!config) {
    return { title: 'Join Committee Board | New York Auto Museum' };
  }
  const suffix = config.leadSource === 'Website' ? '' : ` (${config.leadSource})`;
  const url = `https://www.newyorkautomuseum.com/sign-up/${config.slug}`;
  return {
    title: `Join Committee Board${suffix} | New York Auto Museum`,
    description: 'Join the Committee Board to help build the New York Auto Museum Experience Center Inc. in New York City. Pre-qualify online for 501(c)(3) board leadership.',
    openGraph: {
      title: `Join Committee Board${suffix} | New York Auto Museum`,
      description: 'Join the Committee Board to help build the New York Auto Museum Experience Center Inc. in New York City. Pre-qualify online for 501(c)(3) board leadership.',
      url,
      siteName: 'New York Auto Museum',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: 'https://www.newyorkautomuseum.com/og-image.jpg',
          secureUrl: 'https://www.newyorkautomuseum.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'New York Auto Museum Committee Board',
          type: 'image/jpeg',
        },
        {
          url: 'https://www.newyorkautomuseum.com/og-image.png',
          secureUrl: 'https://www.newyorkautomuseum.com/og-image.png',
          width: 1200,
          height: 630,
          alt: 'New York Auto Museum Committee Board',
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Join Committee Board${suffix} | New York Auto Museum`,
      description: 'Join the Committee Board to help build the New York Auto Museum Experience Center Inc. in New York City. Pre-qualify online for 501(c)(3) board leadership.',
      images: ['https://www.newyorkautomuseum.com/og-image.jpg'],
    },
  };
}

export default async function ChannelSignUpPage({ params }: ChannelPageProps) {
  const { channel } = await params;
  const config = getSignupChannel(channel);
  if (!config) {
    notFound();
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'transparent' }}>
      <Navbar />
      <main className="signup-page-wrapper" style={{ flex: 1, background: 'transparent' }}>
        <SignUpPageContent channelConfig={config} />
      </main>
      <Footer />
    </div>
  );
}
