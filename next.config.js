/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // output: 'export',
  async redirects() {
    return [
      {
        source: '/webmail',
        destination: 'https://premium10.web-hosting.com:2096',
        permanent: false,
      },
      {
        source: '/cpanel',
        destination: 'https://premium10.web-hosting.com:2083',
        permanent: false,
      },
      {
        source: '/exhibits',
        destination: '/about',
        permanent: false,
      },
      {
        source: '/signup',
        destination: '/sign-up',
        permanent: true,
      },
      {
        source: '/socials',
        destination: '/social',
        permanent: true,
      },
      {
        source: '/donate',
        destination: '/committees',
        permanent: false,
      },
      {
        source: '/125609',
        destination: '/bio',
        permanent: true,
      },
      {
        source: '/001',
        destination: '/bio',
        permanent: true,
      },
      {
        source: '/002',
        destination: '/bio',
        permanent: true,
      },
      {
        source: '/003',
        destination: '/bio',
        permanent: true,
      },
      {
        source: '/david-senater',
        destination: '/bio',
        permanent: true,
      },
      {
        source: '/davidsenater',
        destination: '/bio',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
