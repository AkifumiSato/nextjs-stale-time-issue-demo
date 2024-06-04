/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 3,
    },
  },
};

module.exports = nextConfig;
