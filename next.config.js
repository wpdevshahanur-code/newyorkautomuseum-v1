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
    ];
  },
};

module.exports = nextConfig;
