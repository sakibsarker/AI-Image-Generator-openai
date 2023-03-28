/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  reactStrictMode: true,
  env: {
    OPEN_AI_KEY_Image: process.env.OPEN_AI_KEY_Image,
    OPEN_AI_URL_Image:process.env.OPEN_AI_URL_Image,
  }
}
