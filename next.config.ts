import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: false, // disable lightningcss, fallback to PostCSS
  },
};

export default nextConfig;



// import type { NextConfig } from "next"; const nextConfig: NextConfig = { /* config options here */ }; export default nextConfig;