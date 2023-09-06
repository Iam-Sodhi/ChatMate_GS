/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { // this is to use server actions in the foem
    serverActions: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
  images: {
    domains: [
      "uploadthing.com"
    ]
  }
  
}

module.exports = nextConfig