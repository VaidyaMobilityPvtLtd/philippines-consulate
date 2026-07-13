import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow optimizing content images pulled from the legacy consulate site.
    remotePatterns: [{ protocol: "https", hostname: "voith.com.np" }],
  },
};

export default nextConfig;
