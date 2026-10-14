import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Shared hosting limits the number of child processes available during builds.
    cpus: 1,
  },
};

export default nextConfig;
