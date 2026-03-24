/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  /**
   * يُستخدم مع Turbopack (`npm run dev:turbo`) لتقليل إعادة التجميع بسبب
   * ضوضاء مراقبة الملفات على Windows (أنتي فايروس، مزامنة، إلخ).
   */
  watchOptions: {
    pollIntervalMs: 2000,
  },

  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: ['**/node_modules/**', '**/.git/**', '**/.next/**'],
        aggregateTimeout: 800,
      }
    }
    return config
  },
}

export default nextConfig
