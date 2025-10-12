/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
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
  experimental: {
    optimizePackageImports: ['lucide-react'],
    forceSwcTransforms: false,
  },
  webpack: (config) => {
    config.externals = [...(config.externals || []), { '@next/swc-linux-x64-gnu': 'commonjs @next/swc-linux-x64-gnu' }];
    return config;
  },
};

export default nextConfig;
