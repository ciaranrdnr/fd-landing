/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.ap-southeast-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'studio.femaledaily.com',
      },
      {
        protocol: 'https',
        hostname: 'editorial.femaledaily.com',
      },
      {
        protocol: 'https',
        hostname: 'image.femaledaily.com',
      },
      {
        protocol: 'https',
        hostname: 'imgcdn.femaledaily.com',
      },
      {
        protocol: 'https',
        hostname: 'static.femaledaily.com',
      },
    ],
  },
}

module.exports = nextConfig
