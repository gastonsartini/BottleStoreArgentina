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
};

export default nextConfig;
