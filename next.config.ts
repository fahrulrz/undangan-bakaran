import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    API_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`, // Ganti dengan URL API Anda
      },
    ];
  },
  images: {
    domains: [
      "cdn.sanity.io",
      "images.unsplash.com",
      "drive.google.com"
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
    ],
  }
};

export default nextConfig;
