/** @type {import('next').NextConfig} */
const STUDIO_REWRITE = {
  source: "/studio/:path*",
  destination: process.env.NODE_ENV === "development" ?
  "http://localhost:3333/studio/:path*" : "/studio/index.html",
};
const nextConfig = {
  staticPageGenerationTimeout: 60 * 30, // 30 minutes
  compiler: {
    styledComponents: true
  },
  experimental: {
    appDir: true,
    externalDir: true
  },async rewrites() {
    return [
      { source: "/studio", destination: "/studio/index.html" },
      { source: "/studio/:path*", destination: "/studio/index.html" },
    ];
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
      'platform.app.td',
      'cdn.sanity.io',
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
