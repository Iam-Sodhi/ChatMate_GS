/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { // this is to use server actions in the foem
    serverActions: true,
  },
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil"
    });

    return config;
  },
  images: {
    domains: [
      "uploadthing.com"
    ]
  }
  
}

module.exports = nextConfig