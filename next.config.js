/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    RECAPTCHA_KEY: process.env.RECAPTCHA_KEY,
    EMAILJS_USER_ID: process.env.EMAILJS_USER_ID,
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
  },
};

module.exports = nextConfig;
