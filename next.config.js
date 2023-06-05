/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 60 * 30, // 30 minutes
  compiler: {
    styledComponents: true
  },
  experimental: {
    appDir: true,
    externalDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.gravatar.com'
      }
    ],
    domains: [
      'web.xpi.com.br',
      's3-alpha-sig.figma.com',
      'tdstorage.s3-sa-east-1.amazonaws.com',
      'www.gravatar.com',
      's.gravatar.com',
      'platform.app.td'
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader']
    })

    return config
  }
}

module.exports = nextConfig