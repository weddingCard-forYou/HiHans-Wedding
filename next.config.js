/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    output: 'export',
    images: {unoptimized: true},
    basePath: isProd ? '/HiHans-Wedding' : '',
    assetPrefix: isProd ? '/HiHans-Wedding/':'',
    env: {
        NEXT_PUBLIC_BASE_PATH: isProd ? '/HiHans-Wedding':''
    }
};

module.exports = nextConfig;
