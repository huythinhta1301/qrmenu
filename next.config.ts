import type { NextConfig } from "next";

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  // các config khác của Next.js
})


const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
