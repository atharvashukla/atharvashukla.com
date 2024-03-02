/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "pictures.abebooks.com",
      },
      {
        protocol: "https",
        hostname: "images.isbndb.com",
      },
    ],
  },
};

export default nextConfig;
