import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // 👈 Domínio das fotos da sua API
      },
    ],
  },
};

export default nextConfig;
