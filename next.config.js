/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  reactCompiler: {
    compilationMode: "annotation",
  },
  images: {
    remotePatterns: [
      // Supabase Storage - signed URLs (production)
      {
        protocol: "https",
        hostname: "iqxwubpdovdzncdhgmdd.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/**",
      },
      // Supabase Storage - signed URLs (staging)
      {
        protocol: "https",
        hostname: "soxmnstpyjhecjdubpyi.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/**",
      },
      // 로컬 Supabase
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "54321",
        pathname: "/storage/v1/object/sign/**",
      },
      // localhost alternative
      {
        protocol: "http",
        hostname: "localhost",
        port: "54321",
        pathname: "/storage/v1/object/sign/**",
      },
    ],
  },
};
