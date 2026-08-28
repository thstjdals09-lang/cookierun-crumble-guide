import type { NextConfig } from "next";

// GitHub Pages serves this as a project site at /cookierun-crumble-guide/,
// so the base path only applies to the production GH Pages build (set via
// the GITHUB_PAGES env var in .github/workflows/deploy.yml), not local dev.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoBasePath = "/cookierun-crumble-guide";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? repoBasePath : "",
  assetPrefix: isGithubPages ? repoBasePath : "",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? repoBasePath : "",
  },
};

export default nextConfig;
