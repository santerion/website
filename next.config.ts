import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Use the GitHub repository name as a base path in production
  basePath: process.env.NODE_ENV === 'production' ? '/website' : '',
  // Add assetPrefix to ensure styles and assets load correctly
  assetPrefix: process.env.NODE_ENV === 'production' ? '/website' : '',
  // Generate static HTML files
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Disable ESLint during production build
  eslint: {
    // Warning: this will completely disable ESLint during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
