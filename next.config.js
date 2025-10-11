/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/alireza',  // Replace 'alireza' with your actual repo name
    assetPrefix: '/alireza/',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
}

module.exports = nextConfig
