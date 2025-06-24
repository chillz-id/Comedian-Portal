/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['static.wixstatic.com', 'images.unsplash.com'],
  },
  env: {
    WIX_CLIENT_ID: process.env.WIX_CLIENT_ID,
    WIX_SITE_ID: process.env.WIX_SITE_ID,
  },
}

module.exports = nextConfig