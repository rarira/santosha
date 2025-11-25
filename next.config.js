/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  reactCompiler: {
    compilationMode: "annotation",
  },
  images: {
    remotePatterns: [
      // Supabase Storage - signed URLs with transform (production)
      {
        protocol: "https",
        hostname: "iqxwubpdovdzncdhgmdd.supabase.co",
        port: "",
        pathname: "/storage/v1/render/image/sign/**",
      },
      // Supabase Storage - regular signed URLs (production)
      {
        protocol: "https",
        hostname: "iqxwubpdovdzncdhgmdd.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/**",
      },
      // Supabase Storage - signed URLs with transform (staging)
      {
        protocol: "https",
        hostname: "soxmnstpyjhecjdubpyi.supabase.co",
        port: "",
        pathname: "/storage/v1/render/image/sign/**",
      },
      // Supabase Storage - regular signed URLs (staging)
      {
        protocol: "https",
        hostname: "soxmnstpyjhecjdubpyi.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/**",
      },
      // 로컬 Supabase - transform
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "54321",
        pathname: "/storage/v1/render/image/sign/**",
      },
      // 로컬 Supabase - regular
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "54321",
        pathname: "/storage/v1/object/sign/**",
      },
      // localhost alternative - transform
      {
        protocol: "http",
        hostname: "localhost",
        port: "54321",
        pathname: "/storage/v1/render/image/sign/**",
      },
      // localhost alternative - regular
      {
        protocol: "http",
        hostname: "localhost",
        port: "54321",
        pathname: "/storage/v1/object/sign/**",
      },
    ],
    dangerouslyAllowSVG: true,
    // Allow localhost/loopback IPs for local development
    unoptimized: process.env.NODE_ENV === "development",
  },
};
