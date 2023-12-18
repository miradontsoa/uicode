/** @type {import('next').NextConfig} */
const EXPORT_STATIC = false
const IMAGE_DOMAINS = [
  "firebasestorage.googleapis.com",
  "lh3.googleusercontent.com",
  "avatars.githubusercontent.com",
  "s.gravatar.com",
];

const staticNextConfig = {
  //static export
  output: "export",

  // images sources
  images: {
    domains: IMAGE_DOMAINS,
    // for static export:
    loader: "custom",
    loaderFile: "./local-image-loader.ts",
  },
}
const dynamicNextConfig = {
  // images sources
  images: {
    domains: IMAGE_DOMAINS,
  },
}
// next.config.js
const nextConfig = EXPORT_STATIC ? staticNextConfig : dynamicNextConfig;

module.exports = nextConfig;
