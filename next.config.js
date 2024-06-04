/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 3,
      static: 10,
    },
  },
};

module.exports = nextConfig;
