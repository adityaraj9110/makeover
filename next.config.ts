import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Cloudinary (Phase 1+)
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      // Instagram CDN (if fetching feed images directly)
      {
        protocol: "https",
        hostname: "*.cdninstagram.com",
        pathname: "/**",
      },
    ],
    formats: ["image/webp"],
    deviceSizes: [390, 640, 768, 1024, 1280, 1920],
  },
  // Enable React strict mode for better development warnings
  reactStrictMode: true,
  // Compress output
  compress: true,
  // Power header removal
  poweredByHeader: false,
};

export default nextConfig;
