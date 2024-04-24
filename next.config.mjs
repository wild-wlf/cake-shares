/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: { styledComponents: true },
  images: {
    domains: ["flagsapi.com"],
  },
};

export default nextConfig;
