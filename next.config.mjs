/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                // port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.imgglobalinfotech.com',
                // port: '',
                pathname: '/public/tailwind/img/**',
            },
        ],
    },
};

export default nextConfig;
