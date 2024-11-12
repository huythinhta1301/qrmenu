const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  buildExcludes: [/middleware-manifest\.json$/]
})

module.exports = withPWA({
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self' * data: blob: 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' *.ngrok.app; img-src 'self' * data: blob:; font-src 'self' data: *.ngrok.app;"
          }
        ],
      },
    ]
  },
}) 