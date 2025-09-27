const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './lib/i18n/i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.HankSound.com'],
  },
  // 优化 SSR 性能
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // 启用静态优化
  trailingSlash: false,
  // 优化构建
  swcMinify: true,
}

module.exports = withNextIntl(nextConfig)
