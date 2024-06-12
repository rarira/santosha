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
    ],
  },
};
