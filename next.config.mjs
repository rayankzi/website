import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  experimental: {
    mdxRs: true,
  },
  cacheComponents: true,
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
