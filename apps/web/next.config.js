/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ['@repo/ui'],
  experimental: {
    reactCompiler: {
      compilationMode: 'annotation',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'stycpjnilfpbkqfnguqq.supabase.co',
        port: '',
        pathname: '/storage/v1/object/sign/images/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '54321',
        pathname: '/storage/v1/**',
      },
    ],
  },
};
