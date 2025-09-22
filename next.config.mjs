/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const ContentSecurityPolicy = [
      "default-src 'self'", // Only allow same-origin by default
      "script-src 'self'", // No remote scripts
      "style-src 'self' 'unsafe-inline'", // Allow inline styles for Tailwind runtime classes
      "img-src 'self' data: https:", // Images from self, data URIs, and https
      "font-src 'self' data:", // Fonts from self
      "connect-src 'self' https:", // API/XHR/WebSocket connections
      "frame-ancestors 'none'", // Disallow embedding
      "base-uri 'self'",
      "form-action 'self'", // Forms only submit to self
    ].join("; ");

    const securityHeaders = [
      // Strong CSP. If you add external resources later, update the directives above accordingly.
      {
        key: "Content-Security-Policy",
        value: ContentSecurityPolicy,
      },
      // Prevent MIME-type sniffing
      { key: "X-Content-Type-Options", value: "nosniff" },
      // Clickjacking protection
      { key: "X-Frame-Options", value: "DENY" },
      // Better referrer privacy
      { key: "Referrer-Policy", value: "no-referrer" },
      // Upgrade insecure requests (useful if any http links sneak in)
      { key: "Upgrade-Insecure-Requests", value: "1" },
      // Force HTTPS for 2 years and preload
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
      // Modern isolation headers
      { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
      { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
      // Restrictive permissions policy
      {
        key: "Permissions-Policy",
        value:
          "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()",
      },
    ];

    return [
      {
        // Apply to all routes
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
