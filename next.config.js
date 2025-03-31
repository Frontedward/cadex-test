/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cadex-test.vercel.app'],
  },
  compiler: {
    styledComponents: true,
  },
  // Оптимизация для Core Web Vitals
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['antd', '@ant-design/icons'],
  },
}

module.exports = nextConfig 