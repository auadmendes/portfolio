/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'media.graphassets.com',
      'drive.google.com',
      'scontent.fvix3-1.fna.fbcdn.net',
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
      'logo.clearbit.com',
      'images.unsplash.com',
      'cdn.sanity.io'
    ]
  }
}

module.exports = nextConfig
