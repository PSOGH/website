/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/booths',
        destination: '/booth',
        permanent: true,
      },
      {
        source: '/sponsors',
        destination: '/sponsor',
        permanent: true,
      },
      {
        source: '/volunteers',
        destination: '/volunteer',
        permanent: true,
      },
      {
        source: '/event',
        destination: '/events',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
