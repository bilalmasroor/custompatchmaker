import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "custompatchmakers.ca",
      },
    ],
  },
};

export default nextConfig;
