import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Absolute path to this repo — avoids Turbopack mis-detecting root from a parent `package-lock.json`. */
const turbopackRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: turbopackRoot,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/chris-reeder",
        destination: "/professionals/chris-reeder",
        permanent: true,
      },
      {
        source: "/cs-reeder-pc",
        destination: "/professionals/chris-reeder",
        permanent: true,
      },
      {
        source: "/ben-tragish",
        destination: "/professionals/ben-tragish",
        permanent: true,
      },
      {
        source: "/mark-passin",
        destination: "/professionals/mark-passin",
        permanent: true,
      },
      {
        source: "/marcus-l-tippens",
        destination: "/professionals/marcus-l-tippens",
        permanent: true,
      },
      {
        source: "/zachary-ward",
        destination: "/professionals/zachary-ward",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
