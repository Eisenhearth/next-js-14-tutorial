/** @type {import('next').NextConfig} */
const nextConfig = {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: "www.pexels.com"
        }
    ]
}

module.exports = nextConfig
