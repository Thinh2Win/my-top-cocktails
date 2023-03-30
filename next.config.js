/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  aliases: {
    components: path.join(__dirname, 'src/components'),
  }
}

module.exports = nextConfig
