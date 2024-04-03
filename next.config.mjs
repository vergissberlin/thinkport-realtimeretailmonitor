/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '', 
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    images: {
        unoptimized: true,
      },
  };

export default nextConfig;
