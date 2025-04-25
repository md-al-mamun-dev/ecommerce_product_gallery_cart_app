/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'admin.refabry.com',
            port: '',
            pathname: '/storage/product/**',
          },
        ],
      },
};

export default nextConfig;
