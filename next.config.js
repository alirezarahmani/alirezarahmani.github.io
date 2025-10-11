/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '',  // Replace 'alireza' with your actual repo name
    assetPrefix: '/',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
}

module.exports = nextConfig
