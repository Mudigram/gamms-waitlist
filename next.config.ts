/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.pravatar.cc"], // avatars
    unoptimized: false,
  },
};

module.exports = nextConfig;
