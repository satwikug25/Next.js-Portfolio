/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: 'canvas' }];  // This line is important for Framer Motion
    return config;
  },
}

module.exports = nextConfig
