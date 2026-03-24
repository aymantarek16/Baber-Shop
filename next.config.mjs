/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  watchOptions: {
    pollIntervalMs: 2000,
  },

  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: ['**/node_modules/**', '**/.git/**', '**/.next/**'],
        aggregateTimeout: 800,
      };
    }
    return config;
  },
};

export default nextConfig;