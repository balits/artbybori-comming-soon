/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  /*
  async redirects() {
    return [
      {
        source: "/",
        destination: "/coming-soon",
        permanent: true
      },
      {
        source: "/:path*",
        destination: "/coming-soon",
        permanent: false
      }
    ]
  }
* */
}

module.exports = nextConfig
