/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  experimental: {
    esmExternals: false,
  },
  compiler: {
    removeConsole: false,
  },
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
};

export default nextConfig;