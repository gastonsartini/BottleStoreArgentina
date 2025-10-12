/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ikvilgkhfemlfwcpzeul.supabase.co',
      },
      {
        protocol: 'https',
        hostname: '**.pexels.com',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  swcMinify: true,
};

export default nextConfig;
