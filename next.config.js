/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Configure development server
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // WebSocket handling can be managed using environment variables or middleware
      config.devServer = {
        ...config.devServer,
        hot: true,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
