/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: false,
  output: 'export',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
