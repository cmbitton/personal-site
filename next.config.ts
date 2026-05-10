import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["172.25.126.160"],
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
