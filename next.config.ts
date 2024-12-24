import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    API_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL
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
