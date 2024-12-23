/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  // output: 'standalone',
  experimental: {
    externalDir: true,
    // outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
      'styled-components': path.resolve(
        __dirname,
        './node_modules/styled-components'
      ),
    }
    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ]

    return config
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'coldsurf-aws-s3-bucket.s3.ap-northeast-2.amazonaws.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
