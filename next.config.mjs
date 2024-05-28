/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: { styledComponents: true },
  images: {
    domains: ["flagsapi.com", "cakeshares.s3.us-west-1.amazonaws.com"],
  },
};

export default nextConfig;
