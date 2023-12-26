/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "juan-sesu-ecommerce.s3.amazonaws.com",
      "my-page-negiupp.s3.amazonaws.com",
      "lh3.googleusercontent.com",
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
