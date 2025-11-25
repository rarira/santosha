/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  reactCompiler: {
    compilationMode: "annotation",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iqxwubpdovdzncdhgmdd.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/images/**",
      },
      {
        protocol: "https",
        hostname: "soxmnstpyjhecjdubpyi.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/images/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "54321",
        pathname: "/storage/v1/**",
      },
    ],
    // 로컬 개발 환경에서 이미지 최적화 비활성화
    unoptimized: process.env.NODE_ENV === "development",
  },
};
