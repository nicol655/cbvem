/** @type {import('next').NextConfig} */

// Base path for hosting under a subdirectory (e.g. GitHub Pages project sites:
// https://<user>.github.io/<repo>/  ->  NEXT_PUBLIC_BASE_PATH="/<repo>").
// Leave empty for root hosting (custom domain, user.github.io repo, S3/CloudFront).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
