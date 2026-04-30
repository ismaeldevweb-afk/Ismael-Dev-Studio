import createBundleAnalyzer from "@next/bundle-analyzer";

const isDevelopment = process.env.NODE_ENV !== "production";
const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const scriptSrc = ["'self'", "'unsafe-inline'"];
const connectSrc = ["'self'", "https://vercel.com", "https://*.vercel.com", "https://vercel-insights.com", "https://*.vercel-insights.com"];
const styleSrc = ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"];
const fontSrc = ["'self'", "data:", "https://fonts.gstatic.com"];

if (isDevelopment) {
  scriptSrc.push("'unsafe-eval'");
  connectSrc.push("ws:", "http:");
}

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src ${scriptSrc.join(" ")}`,
  `style-src ${styleSrc.join(" ")}`,
  "img-src 'self' data: blob:",
  `font-src ${fontSrc.join(" ")}`,
  `connect-src ${connectSrc.join(" ")}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: contentSecurityPolicy,
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "same-origin",
          },
          {
            key: "Origin-Agent-Cluster",
            value: "?1",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "off",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
