import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    // Add quality configuration
    qualities: [75, 85],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
