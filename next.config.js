/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 0, // v15 RC default
      static: 10,
    },
  },
};

module.exports = nextConfig;
