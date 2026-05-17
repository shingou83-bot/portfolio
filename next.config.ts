import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scdn.line-apps.com",
        pathname: "/n/line_add_friends/**",
      },
    ],
  },
};

export default nextConfig;
