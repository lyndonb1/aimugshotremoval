/** @type {import('next').NextConfig} */

import million from "million/compiler";
import "./env.mjs";
import withNextIntl from "next-intl/plugin";

const i18nConfig = "./src/i18n/i18n.ts";

const millionConfig = { auto: { rsc: true } };

const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  ...(process.env.NODE_ENV === "production" && {
    compiler: {
      removeConsole: {
        exclude: ["error"],
      },
    },
  }),
  experimental: {
    // Enabling Skew protection
    useDeploymentId: true,
    useDeploymentIdServerActions: true,
    // End Enabling Skew protection
    serverMinification: true,
    forceSwcTransforms: true,
    optimisticClientCache: true,
    workerThreads: true,
    optimizeServerReact: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "images.clerk.com",
        hostname: "www.gravatar.com",
        hostname: "googleusercontent.com",
        hostname: "pbxt.replicate.delivery",
        hostname: "oaidalleapiprodscus.blob.core.windows.net",
        hostname: "cdn.openai.com",
      },
    ],
  },
  transpilePackages: ["react-tweet"],
};

const combinedMillionConfig = million.next(nextConfig, millionConfig);
const combinedIntlConfig = withNextIntl(i18nConfig)(combinedMillionConfig);

export default combinedIntlConfig;
