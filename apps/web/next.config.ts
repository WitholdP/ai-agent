import { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'export', // Enable static export for Capacitor
    images: {
        unoptimized: true, // Required for static export
    },
    trailingSlash: true, // Recommended for static export
};

export default nextConfig;
