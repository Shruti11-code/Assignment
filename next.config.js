/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  // Add WebSocket configuration
  webSocketServer: {
    path: '/_next/webpack-hmr',
  },
  // Configure development server
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Ensure proper WebSocket connection in development
      const wsPath = '/_next/webpack-hmr';
      config.devServer = {
        ...config.devServer,
        webSocketServer: {
          path: wsPath,
        },
      };
    }
    return config;
  }
}

module.exports = nextConfig