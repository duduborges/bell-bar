import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "img.restaurantguru.com" },
      { hostname: "img02.restaurantguru.com" },
      { hostname: "blogger.googleusercontent.com" },
      { hostname: "assets.untappd.com" },
      { hostname: "images.untp.beer" },
    ],
  },
};

export default nextConfig;
