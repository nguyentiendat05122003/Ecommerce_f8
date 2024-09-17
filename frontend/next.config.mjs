/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["res.cloudinary.com", "res-console.cloudinary.com"],
  },
};

export default nextConfig;
