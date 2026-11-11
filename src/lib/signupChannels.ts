export type SignupChannelSlug =
  | 'website'
  | 'facebook'
  | 'fb'
  | 'google-grant'
  | 'google'
  | 'grant';

export type LeadSourceName = 'Website' | 'Facebook' | 'Google Ad Grant';

export interface SignupChannelConfig {
  slug: SignupChannelSlug;
  leadSource: LeadSourceName;
  badgeTag: string;
  canonicalPath: string;
  sourceSubtitleNote?: string;
}

export const SIGNUP_CHANNELS: Record<SignupChannelSlug, SignupChannelConfig> = {
  website: {
    slug: 'website',
    leadSource: 'Website',
    badgeTag: '501(c)(3) Board Leadership Opportunity',
    canonicalPath: '/sign-up',
  },
  facebook: {
    slug: 'facebook',
    leadSource: 'Facebook',
    badgeTag: '501(c)(3) Board Leadership • Facebook',
    canonicalPath: '/sign-up/facebook',
    sourceSubtitleNote: 'Welcome from Facebook! Tracked directly under our Facebook Lead Funnel.',
  },
  fb: {
    slug: 'fb',
    leadSource: 'Facebook',
    badgeTag: '501(c)(3) Board Leadership • Facebook',
    canonicalPath: '/sign-up/facebook',
    sourceSubtitleNote: 'Welcome from Facebook! Tracked directly under our Facebook Lead Funnel.',
  },
  'google-grant': {
    slug: 'google-grant',
    leadSource: 'Google Ad Grant',
    badgeTag: '501(c)(3) Board Leadership • Google Ad Grant',
    canonicalPath: '/sign-up/google-grant',
    sourceSubtitleNote: 'Google Ad Grant Partner Funnel — Tax-deductible 501(c)(3) leadership intake.',
  },
  google: {
    slug: 'google',
    leadSource: 'Google Ad Grant',
    badgeTag: '501(c)(3) Board Leadership • Google Ad Grant',
    canonicalPath: '/sign-up/google-grant',
    sourceSubtitleNote: 'Google Ad Grant Partner Funnel — Tax-deductible 501(c)(3) leadership intake.',
  },
  grant: {
    slug: 'grant',
    leadSource: 'Google Ad Grant',
    badgeTag: '501(c)(3) Board Leadership • Google Ad Grant',
    canonicalPath: '/sign-up/google-grant',
    sourceSubtitleNote: 'Google Ad Grant Partner Funnel — Tax-deductible 501(c)(3) leadership intake.',
  },
};

export const SIGNUP_CHANNEL_SLUGS = Object.keys(SIGNUP_CHANNELS) as SignupChannelSlug[];

export function getSignupChannel(slug?: string): SignupChannelConfig | null {
  if (!slug) return null;
  const key = slug.trim().toLowerCase() as SignupChannelSlug;
  return SIGNUP_CHANNELS[key] ?? null;
}

export function resolveLeadSource(rawSource?: string | null): LeadSourceName {
  const normalized = String(rawSource || '').trim().toLowerCase();
  if (!normalized) return 'Website';
  if (normalized.includes('facebook') || normalized === 'fb' || normalized.includes('meta')) {
    return 'Facebook';
  }
  if (
    normalized.includes('google') ||
    normalized.includes('grant') ||
    normalized === 'adgrant' ||
    normalized === 'cpc'
  ) {
    return 'Google Ad Grant';
  }
  return 'Website';
}
