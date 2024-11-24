import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// Wrap the Next.js config with Sentry's configuration
export default withSentryConfig(
  nextConfig,
  {
    // Options for sentry-webpack-plugin
    silent: true, // Suppresses source map uploading logs during build
    org: 'javascript-mastery',
    project: 'javascript-nextjs',
  },
  {
    // Options for the Sentry Next.js SDK
    widenClientFileUpload: true, // Upload a larger set of source maps
    transpileClientSDK: true, // Transpiles SDK to be compatible with IE11
    hideSourceMaps: true, // Hides source maps from generated client bundles
    disableLogger: true, // Automatically tree-shakes Sentry logger statements
    automaticVercelMonitors: true, // Enables automatic instrumentation of Vercel Cron Monitors

    // Uncomment the following line if you want to route Sentry requests through a custom path.
    // tunnelRoute: '/monitoring',
  }
);
