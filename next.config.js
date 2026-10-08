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
        source: '/donate',
        destination: '/committees',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
