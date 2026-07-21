/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      { source: '/product', destination: '/platform', permanent: true },
      { source: '/pilot', destination: '/demo', permanent: true },
      { source: '/about', destination: '/company', permanent: true },
    ]
  },
}

export default nextConfig
