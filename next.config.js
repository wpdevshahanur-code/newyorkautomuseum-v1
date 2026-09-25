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
        destination: 'https://webmail.newyorkautomuseum.com',
        permanent: false,
      },
      {
        source: '/cpanel',
        destination: 'https://cpanel.newyorkautomuseum.com',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
