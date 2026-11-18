import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The old multi-page routes now open the matching window on the desktop.
  async redirects() {
    return ["projects", "research", "extracurriculars"].map((page) => ({
      source: `/${page}`,
      destination: `/?open=${page}`,
      permanent: false,
    }));
  },
};

export default nextConfig;
