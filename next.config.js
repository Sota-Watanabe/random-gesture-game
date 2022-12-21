const isProd = process.env.NODE_ENV === "production";
const prefixPath = isProd ? "/random-gesture-game" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: prefixPath,
};

module.exports = nextConfig;
