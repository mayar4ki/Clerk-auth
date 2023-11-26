// Importing env files here to validate on build
// import "./src/env.mjs";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: ["images.unsplash.com"],
  },
  reactStrictMode: true,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@acme/api", "@acme/db"],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  i18n: {
    locales: ["en", "zh-cn", "zh-tw"],
    defaultLocale: "en",
  },
};

export default config;
