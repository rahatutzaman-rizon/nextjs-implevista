/** @type {import('next').NextConfig} */
const nextConfig = {

    
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'fakestoreapi.com',
            },
            {
              protocol: 'https',
              hostname: '**.amazonaws.com',
            },
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
            },
            {
              protocol: 'https',
              hostname: 'i.pravatar.cc',
            },
            {
              protocol: 'https',
              hostname: '**.cloudfront.net',
            }
          ],
        },
      
      
};

export default nextConfig;
